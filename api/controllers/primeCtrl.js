exports.getPrimes = (req, res) => {
    const limit = parseInt(req.query.limit)

    if (isNaN(limit) || limit > 10000 || limit < 2) {
        return res.status(400).json({ error: 'limit has to be between 2 and 10000' })
    }

    // 95% of this is codeium's implementation, sieve of eratosthenes algorithm
    const sieveOfEratosthenes = (max) => {
        const sieve = Array(max + 1).fill(true)
        sieve[0] = sieve[1] = false // 0 and 1 are not primes 
        for (let i = 2; i <= Math.sqrt(max); i++) { /*why squareroot of max? 
                BECAUSE every composite number (which is a non prime number > 1) can be factored into two factors
                AND if both factors are greater than the squareroot of the number, their product would exceed the number itself
                THAT means: at least one factor must be less than or equal to the squareroot of the number
                */
            if (sieve[i]) { // check if the number is still marked as prime
                for (let j = i * i; j <= max; j += i) {
                    sieve[j] = false // mark all its multiples of i as non prime
                }
            }
        }
        return sieve.map((isPrime, num) => (isPrime ? num : null)).filter(Boolean)
    }
    const primes = sieveOfEratosthenes(limit)
    res.json({ primes })
}