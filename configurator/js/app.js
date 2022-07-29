import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

Alpine.store('properties', {

    // Set default values here

    timing: "animate-once",
    direction: "animate-forward",
    fillmode: "animate-fill-none",
    duration: null,
    delay: null,
})

Alpine.plugin(collapse);
Alpine.start();

