// Prevent script from running on other pages
if (!document.querySelector(".webdev-stats")) {
    throw new Error("Not WebDev page");
}


// WebDev topics list (must match topic keys)
const webdevTopics = ["html", "css", "javascript", "dom-manipulation"];

// Read quiz results
const quizResults = JSON.parse(localStorage.getItem("quizResults")) || {};
const webdevResults = quizResults["webdev"] || {};

// Filter only WebDev quiz scores
let completedCount = 0;
let totalScore = 0;
let highestScore = 0;

webdevTopics.forEach(topic => {
    if (webdevResults[topic] !== undefined) {
        completedCount++;
        totalScore += webdevResults[topic];
        if (webdevResults[topic] > highestScore) {
            highestScore = webdevResults[topic];
        }
    }
});

// Completion percentage
const completionPercent = Math.round(
    (completedCount / webdevTopics.length) * 100
);

// Average score
const averageScore = completedCount
    ? Math.round(totalScore / completedCount)
    : 0;

// ---- UPDATE UI ----
const progressFill = document.querySelector(".webdev-stats .progress-fill");
const progressText = document.querySelector(".webdev-stats .progress-text");
const statValues = document.querySelectorAll(".webdev-stats .stat-value");

if (progressFill && progressText) {
    progressFill.style.width = completionPercent + "%";
    progressText.innerText = `${completionPercent}% completed`;
}

if (statValues.length >= 2) {
    statValues[0].innerText = averageScore + "%";
    statValues[1].innerText = highestScore + "%";
}
