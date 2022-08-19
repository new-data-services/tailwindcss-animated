import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';

import defaults from './defaults';
import history from './modules/history';
import preview from './modules/preview';
import reflow from './modules/reflow';
import copy from './modules/copy';

Alpine.store('properties', defaults);
window.Alpine = Alpine;

window.configurator = () => {
    return {
        preview,
        reflow,
        copy,

        leftColSize: 'width:384px',
        rightColSize: 'width:384px',
        rightSize: 384,

        hint: 0,
        Ypos: 0,
        sethint(x, el) {
            this.hint = x;
            this.Ypos = el.getBoundingClientRect().y+7;
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

        computedClasses() {
            return Object.values(Alpine.store('properties'))
                .filter(value => value !== null)
                .map(value => 'animate-' + value)
                .join(' ');
        },

    };
};

Alpine.plugin(collapse);
Alpine.plugin(intersect);
Alpine.start();
