import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';

import defaults from './defaults';
import history from './modules/history';
import preview from './modules/preview';
import panels from './modules/panels';
import reflow from './modules/reflow';
import copy from './modules/copy';

Alpine.store('properties', defaults);
window.Alpine = Alpine;

window.configurator = () => {
    return {
        preview,
        panels,
        reflow,
        copy,

        init() {
            history.getProperties();
        },

        set(property, value) {
            Alpine.store('properties')[property] = value;

            this.reflow.run();

            history.setProperties();
        },

        reset() {
            Object.keys(Alpine.store('properties'))
                .filter(key => key !== 'animation')
                .forEach(key => {
                    Alpine.store('properties')[key] = null;
                });

            this.reflow.run();

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
