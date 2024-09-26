exports.getFibonacciNumber = (req, res) => {
    const n = parseInt(req.query.n)
    if (isNaN(n) || n < 0 || n > 500) {
        return res.status(400).json({ error: 'n has to be a positive integer less than 500' })
    }

    const fibonacci = (n) => {
        if (n <= 1) return n
        let a = 0
        let b = 1
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b]
        }
        return b
    }

    const number = fibonacci(n)
    res.json({ number })
}