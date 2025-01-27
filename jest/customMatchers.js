expect.extend({
    toIncludeAll(received, expected) {
        function stripped(str) {
            return str.replace(/\s/g, '').replace(/;/g, '')
        }

        const receivedStripped = stripped(received)

        const pass = Array.isArray(expected) && expected.every(value => receivedStripped.includes(stripped(value)))

        return {
            pass,
            message: () => pass
                ? this.utils.matcherHint('.not.toIncludeAll') +
                  '\n\n' +
                  `Expected not to have all of: ${this.utils.printExpected(received)}\n` +
                  `Received: ${this.utils.printReceived(expected)}`
                : this.utils.matcherHint('.toIncludeAll') +
                  '\n\n' +
                  `Expected to have all of: ${this.utils.printExpected(expected)}\n` +
                  `Received: ${this.utils.printReceived(received)}`,
        }
    },
})
