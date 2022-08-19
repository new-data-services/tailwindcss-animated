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
        document.querySelectorAll('.preview .previewItem').forEach(node => {
            const copy = node;

            node.parentNode.replaceChild(node, copy);
        });
    },

};
