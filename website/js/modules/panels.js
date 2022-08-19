export default {

    width: {
        left: null,
        right: null,
    },

    setWidth(panel, width) {
        const minWidth = panel === 'left' ? 200 : 350;

        if (width >= minWidth && width < window.innerWidth / 3) {
            this.width[panel] = width;
        }
    },

    getCssStyles(panel) {
        if (! this.width[panel]) {
            return '';
        }

        return `width: ${this.width[panel]}px;`;
    }
};
