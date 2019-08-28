/* If you need to wait for window onLoad */
const onLoad = (event) => {
    console.info("window.onload", event);
};

/* If you need to wait for DOM ready */
const onDomReady = (event) => {
    console.info("document.DOMContentLoaded", event);
};

/* If you do not need to wait for these events add code here */

/* Just ugly handlers */
document.addEventListener("DOMContentLoaded", onDomReady);
window.addEventListener("load", onLoad);
