export default {

    mode: 'logo',
    scale: 10,

    setMode(mode) {
        this.mode = mode;
    },

    computedScale() {
        return this.scale * 10;
    },

    getCssStyles() {
        return `transform: scale(${this.computedScale()}%);`;
    },

};
