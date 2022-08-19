export default {

    classes() {
        navigator.clipboard.writeText(document.getElementById('output').innerHTML);

        this.showFeedback();
    },

    url() {
        navigator.clipboard.writeText(window.location.href);

        this.showFeedback();
    },

    showFeedback() {
        const feedback = document.getElementById('copyFeedback');

        feedback.classList.remove('opacity-0', 'duration-500');

        setTimeout(() => feedback.classList.add('opacity-0', 'duration-500'), 500);
    },

};
