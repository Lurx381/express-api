exports.getPrimes = (req, res) => {
    const limit = parseInt(req.query.limit)

    if (isNaN(limit) || limit > 10000 || limit < 2) {
        return res.status(400).json({ error: 'limit has to be between 2 and 10000' })
    }

    // 95% of this is codeium's implementation, sieve of eratosthenes algorithm
    const sieveOfEratosthenes = (max) => {
        const sieve = Array(max + 1).fill(true)
        sieve[0] = sieve[1] = false
        for (let i = 2; i <= Math.sqrt(max); i++) {
            if (sieve[i]) {
                for (let j = i * i; j <= max; j += i) {
                    sieve[j] = false
                }
            }
        }
        return sieve.map((isPrime, num) => (isPrime ? num : null)).filter(Boolean)
    }
    const primes = sieveOfEratosthenes(limit)
    res.json({ primes })
    }