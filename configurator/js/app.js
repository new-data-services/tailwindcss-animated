import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

Alpine.store('properties', {

    // set default values here

    timing: "once",
    direction: null,
    fillmode: null,
    duration: null,
    delay: null,
    easing: null,
    currentAnimation: "wiggle",

    //alter property values
    modifyProperty(property, newValue) {
        if (property == "timing") {
            this.timing = newValue;
        }
        else if (property == "direction") {
            this.direction = newValue;
        }
        else if (property == "fillmode") {
            this.fillmode = newValue;
        }
        else if (property == "duration") {
            this.duration = newValue;
        }
        else if (property == "delay") {
            this.delay = newValue;
        }
        else if (property == "easing") {
            this.easing = newValue;
        }
        else if (property == "currentAnimation") {
            this.currentAnimation = newValue;
        }
        
        this.update()
    },

    update() {
        this.reflowPreview();
        this.setParams();
        return
    },

    reflowPreview() {
        const previewObjects = document.querySelector('.preview').childNodes;
        for (let i = 0; i < previewObjects.length; i++) {
            let copy = previewObjects[i];
            previewObjects[i].parentNode.replaceChild(previewObjects[i], copy);
        }
    },

    setParams() {
        //set params to URL
        var url = new URL(window.location.href);
        url.searchParams.set('t', this.timing);
        url.searchParams.set('di', this.direction);
        url.searchParams.set('f', this.fillmode);
        url.searchParams.set('du', this.duration);
        url.searchParams.set('de', this.delay);
        url.searchParams.set('e', this.easing);
        url.searchParams.set('a', this.currentAnimation);
        window.history.pushState(window.location.href, '', url);
    },

    init() {
        //pull params from URL and apply them
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if (urlParams.get('t') != "null" && urlParams.get('t') != '' && urlParams.get('t') != null) {
            this.timing = urlParams.get('t');
        }
        if (urlParams.get('di') != "null" && urlParams.get('di') != '' && urlParams.get('di') != null) {
            this.direction = urlParams.get('di');
        }
        if (urlParams.get('f') != "null" && urlParams.get('f') != '' && urlParams.get('f') != null) {
            this.fillmode = urlParams.get('f');
        }
        if (urlParams.get('du') != "null" && urlParams.get('du') != '' && urlParams.get('du') != null) {
            this.duration = urlParams.get('du');
        }
        if (urlParams.get('de') != "null" && urlParams.get('de') != '' && urlParams.get('de') != null) {
            this.delay = urlParams.get('de');
        }
        if (urlParams.get('e') != "null" && urlParams.get('e') != '' && urlParams.get('e') != null) {
            this.easing = urlParams.get('e');
        }
        if (urlParams.get('a') != "null" && urlParams.get('a') != '' && urlParams.get('a') != null) {
        this.currentAnimation = urlParams.get('a');
        }
        else {

        }
    }
})

Alpine.plugin(collapse);
Alpine.start();

