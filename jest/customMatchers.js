expect.extend({
    toContainAll(received, expected) {
        if (typeof received !== 'string') {
            throw new TypeError(`toContainAll: received value must be a string, got ${typeof received}`)
        }

        if (! Array.isArray(expected)) {
            throw new TypeError('toContainAll: expected value must be an array of strings')
        }

        const normalize = str => str.replace(/[\s;]/g, '')
        const pass = expected.every(value => normalize(received).includes(normalize(value)))

        return {
            pass,
            message: () => pass
                ? this.utils.matcherHint('.not.toContainAll')
                    + '\n\n'
                    + `Expected not to have all of: ${this.utils.printExpected(expected)}\n`
                    + `Received: ${this.utils.printReceived(received)}`
                : this.utils.matcherHint('.toContainAll')
                    + '\n\n'
                    + `Expected to have all of: ${this.utils.printExpected(expected)}\n`
                    + `Received: ${this.utils.printReceived(received)}`,
        }
    },
})
