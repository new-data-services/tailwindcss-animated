export default {

    mode: 'play',

    setMode(mode) {
        this.mode = mode;

        const previewObjects = document.querySelector('.preview').children;

        for (let i = 0; i < previewObjects.length; i++) {
            if (mode === 'click') {
                previewObjects[i].setAttribute('x-on:click', 'reflow.run()');
            } else {
                previewObjects[i].removeAttribute('x-on:click');
            }

            if (mode === 'hover') {
                previewObjects[i].setAttribute('x-on:mouseenter', 'reflow.run()');
            } else {
                previewObjects[i].removeAttribute('x-on:mouseenter');
            }
        }
    },

    run() {
        const nodes = document.querySelector('.preview').childNodes;

        for (let i = 0; i < nodes.length; i++) {
            let copy = nodes[i];
            nodes[i].parentNode.replaceChild(nodes[i], copy);
        }
    },

};
