export default ([key, value]) => {
    if (! value) {
        return;
    }

    switch (key) {
        case 'duration':
            return mapDuration(value);
        case 'delay':
            return mapDelay(value);
        default:
            return 'animate-' + value;
    }
};

function mapDuration(value) {
    value = parseInt(value);

    if ([75, 100, 150, 200, 300, 500, 700, 1000].includes(value)) {
        return `animate-duration-${value}`;
    }

    return `animate-duration-[${value}ms]`;
}

function mapDelay(value) {
    value = parseInt(value);

    if ([0, 75, 100, 150, 200, 300, 500, 700, 1000].includes(value)) {
        return `animate-delay-${value}`;
    }

    return `animate-delay-[${value}ms]`;
}
