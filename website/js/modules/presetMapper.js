export default ([key, value]) => {

    if (value) {
        return;
    }
    
    function getStyle(property) {
        return window.getComputedStyle(
            document.getElementsByClassName("previewItem")[0]
        )
        [property];
    }

    switch (key) {
        case 'duration':
            return mapDuration(value);

        case 'delay':
            return mapDelay(value);

        case 'fill':
            return 'animate-fill-' + getStyle('animationFillMode');

        case 'ease':
            value = getStyle('animationTimingFunction').replace(/\s/g, '');
            switch (value) {
                case 'ease-linear':
                    return 'animate-ease-linear';
                case 'ease-in':
                    return 'animate-ease-in';
                case 'ease-out':
                    return 'animate-ease-out';
                case 'ease-in-out':
                    return 'animate-ease-in-out';
                default:
                    return 'animate-ease-...';
            }
            
        case 'count':
            value = getStyle('animationIterationCount');
            switch (value) {
                case 1:
                    return 'animate-once';
                case 2:
                    return 'animate-twice';
                case 3:
                    return 'animate-thrice';
                default:
                    return 'animate-infinite'
            }

        default:
            return 'animate-' + getStyle('animation-'+key)
    }
};

function mapDuration() {
    let value = window.getComputedStyle(document.getElementsByClassName("previewItem")[0]).animationDuration;

    if (!value.includes('m')) {
        value = parseInt(value) * 1000;
    }
    
    if ([0, 75, 100, 150, 200, 300, 500, 700, 1000].includes(parseInt(value))) {
        return `animate-duration-${value}`;
    }
    return 'animate-duration-[' + value + 'ms]';
}

function mapDelay() {
    let value = window.getComputedStyle(document.getElementsByClassName("previewItem")[0]).animationDelay;

    if (!value.includes('m')) {
        value = parseInt(value)*1000;
    }
    
    if ([0, 75, 100, 150, 200, 300, 500, 700, 1000].includes(parseInt(value))) {
        return `animate-delay-${value}`;
    }
    return 'animate-delay-[' + value + 'ms]';
}
