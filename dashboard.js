const quizResults = JSON.parse(localStorage.getItem("quizResults")) || {};

// Define subjects with their topics
const subjects = {
    dsa: ["arrays", "strings", "recursion", "searching-sorting"],
    webdev: ["html", "css", "javascript", "dom-manipulation"],
    maths: ["algebra", "probability", "statistics", "discrete-math"]
};

// Get all progress items (there are 3: DSA, WebDev, Maths)
const progressItems = document.querySelectorAll(".progress-item");

// Update DSA progress (first progress-item)
const dsaResults = quizResults["dsa"] || {};
const dsaCompleted = Object.keys(dsaResults).length;
const dsaPercent = Math.round((dsaCompleted / subjects.dsa.length) * 100);

if (progressItems[0]) {
    const dsaFill = progressItems[0].querySelector(".progress-fill");
    const dsaText = progressItems[0].querySelector(".progress-text");
    if (dsaFill && dsaText) {
        dsaFill.style.width = dsaPercent + "%";
        dsaText.innerText = `${dsaPercent}% completed`;
    }
}

// Update Web Development progress (second progress-item)
const webdevResults = quizResults["webdev"] || {};
const webdevCompleted = Object.keys(webdevResults).length;
const webdevPercent = Math.round((webdevCompleted / subjects.webdev.length) * 100);

if (progressItems[1]) {
    const webdevFill = progressItems[1].querySelector(".progress-fill");
    const webdevText = progressItems[1].querySelector(".progress-text");
    if (webdevFill && webdevText) {
        webdevFill.style.width = webdevPercent + "%";
        webdevText.innerText = `${webdevPercent}% completed`;
    }
}

// Update Mathematics progress (third progress-item)
const mathsResults = quizResults["maths"] || {};
const mathsCompleted = Object.keys(mathsResults).length;
const mathsPercent = Math.round((mathsCompleted / subjects.maths.length) * 100);

if (progressItems[2]) {
    const mathsFill = progressItems[2].querySelector(".progress-fill");
    const mathsText = progressItems[2].querySelector(".progress-text");
    if (mathsFill && mathsText) {
        mathsFill.style.width = mathsPercent + "%";
        mathsText.innerText = `${mathsPercent}% completed`;
    }
}