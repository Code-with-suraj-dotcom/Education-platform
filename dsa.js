// Prevent script from running on other pages
if (!document.querySelector(".dsa-stats")) {
    throw new Error("Not DSA page");
}

const quizResults = JSON.parse(localStorage.getItem("quizResults")) || {};
const dsaResults = quizResults["dsa"] || {};
const topics = ["arrays", "strings", "recursion", "searching-sorting"];


// Completion %
const completedCount = Object.keys(dsaResults).length;
const completionPercent = Math.round((completedCount / topics.length) * 100);

// Average score
let total = 0;
let highest = 0;

Object.values(dsaResults).forEach(score => {
    total += score;
    if (score > highest) highest = score;
});

const average = completedCount ? Math.round(total / completedCount) : 0;

// Update UI
document.querySelector(".progress-fill").style.width = completionPercent + "%";
document.querySelector(".progress-text").innerText = `${completionPercent}% completed`;


document.querySelectorAll(".stat-value")[0].innerText = average + "%";
document.querySelectorAll(".stat-value")[1].innerText = highest + "%";