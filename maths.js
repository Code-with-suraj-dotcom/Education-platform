// Prevent script from running on other pages
if (!document.querySelector(".maths-stats")) {
    throw new Error("Not Maths page");
}


// Maths topics list (must match topic keys used in topics.html & quiz.html)
const mathsTopics = [
    "algebra",
    "probability",
    "statistics",
    "discrete-math"
];

// Read quiz results from localStorage
const quizResults = JSON.parse(localStorage.getItem("quizResults")) || {};
const mathsResults = quizResults["maths"] || {};

let completedCount = 0;
let totalScore = 0;
let highestScore = 0;

// Process only Maths-related topics
mathsTopics.forEach(topic => {
    if (mathsResults[topic] !== undefined) {
        completedCount++;
        totalScore += mathsResults[topic];

        if (mathsResults[topic] > highestScore) {
            highestScore = mathsResults[topic];
        }
    }
});

// Calculate completion percentage
const completionPercent = Math.round(
    (completedCount / mathsTopics.length) * 100
);

// Calculate average score
const averageScore = completedCount
    ? Math.round(totalScore / completedCount)
    : 0;

// ---- UPDATE UI ----
const progressFill = document.querySelector(".maths-stats .progress-fill");
const progressText = document.querySelector(".maths-stats .progress-text");
const statValues = document.querySelectorAll(".maths-stats .stat-value");

if (progressFill && progressText) {
    progressFill.style.width = completionPercent + "%";
    progressText.innerText = `${completionPercent}% completed`;
}

if (statValues.length >= 2) {
    statValues[0].innerText = averageScore + "%";
    statValues[1].innerText = highestScore + "%";
}
