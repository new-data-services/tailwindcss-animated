const tailwindPackage = require('tailwindcss/package.json')

function isLegacyTailwind() {
    return tailwindPackage.version?.startsWith('3.')
}

function isPositiveInteger(value) {
    const num = Number(value)

    return Number.isInteger(num) && num >= 0 && String(num) === String(value)
}

function getBareMilliseconds() {
    if (isLegacyTailwind()) {
        return {}
    }

    return {
        __BARE_VALUE__: (value) => {
            if (isPositiveInteger(value.value)) {
                return `${value.value}ms`
            }
        }
    }
}

function getBareIntegers() {
    if (isLegacyTailwind()) {
        return {}
    }

    return {
        __BARE_VALUE__: (value) => {
            if (isPositiveInteger(value.value)) {
                return value.value
            }
        }
    }
}

module.exports = { getBareMilliseconds, getBareIntegers }
