import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';
import defaults from './defaults';
import history from './helper/history';

Alpine.store('properties', defaults);
window.Alpine = Alpine;

window.configurator = () => {
    return {

        leftColSize: 'width:384px',
        rightColSize: 'width:384px',
        rightSize: 384,

        hint: 0,
        Ypos: 0,
        sethint(x, el) {
            this.hint = x;
            this.Ypos = el.getBoundingClientRect().y+7;
        },

        preview: 1,
        reflowMode: 1,
        reflowHandler() {
            const previewObjects = document.querySelector('.preview').children;

            switch (this.reflowMode) {
                case 2:
                    for (let i = 0; i < previewObjects.length; i++) {
                        previewObjects[i].removeAttribute('x-on:mouseenter');
                        previewObjects[i].setAttribute('x-on:click', 'reflow()');
                    }
                    break;
                case 3:
                    for (let i = 0; i < previewObjects.length; i++) {
                        previewObjects[i].removeAttribute('x-on:click');
                        previewObjects[i].setAttribute('x-on:mouseenter', 'reflow()');
                    }
                    break;
                default:
                    for (let i = 0; i < previewObjects.length; i++) {
                        previewObjects[i].removeAttribute('x-on:mouseenter');
                        previewObjects[i].removeAttribute('x-on:click');
                    }
              }
        },

        init() {
            history.getProperties();
        },

        set(property, value) {
            Alpine.store('properties')[property] = value;

            this.reflow();

            history.setProperties();
        },

        reset() {
            Object.keys(Alpine.store('properties'))
                .filter(key => key !== 'animation')
                .forEach(key => {
                    Alpine.store('properties')[key] = null;
                });

            this.reflow();

            history.setProperties();
        },

        reflow() {
            const nodes = document.querySelector('.preview').childNodes;

            for (let i = 0; i < nodes.length; i++) {
                let copy = nodes[i];
                nodes[i].parentNode.replaceChild(nodes[i], copy);
            }
        },

        computedClasses() {
            return Object.values(Alpine.store('properties'))
                .filter(value => value !== null)
                .map(value => 'animate-' + value)
                .join(' ');
        }
    };
};

Alpine.plugin(collapse);
Alpine.plugin(intersect);
Alpine.start();
