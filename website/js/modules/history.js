export default {

    getProperties() {
        const url = new URL(window.location.href);

        Object.keys(Alpine.store('properties')).forEach(key => {
            if (url.searchParams.has(key)) {
                Alpine.store('properties')[key] = url.searchParams.get(key);
            }
        });
    },

    setProperties() {
        const url = new URL(window.location.origin + window.location.pathname);

        Object.entries(Alpine.store('properties'))
            .filter(([value]) => value !== null)
            .forEach(([key, value]) => {
                url.searchParams.set(key, value);
            });

        window.history.replaceState(null, null, url);
    },

};
