/* ================================
   QUIZ DATA
================================ */
const quizzes = {

    /* ===== DSA ===== */

    arrays: {
        title: "Arrays Quiz",
        description: "Test your understanding of Arrays.",
        questions: [
            {
                q: "What is the index of the first element in an array?",
                options: ["1", "0", "-1", "Depends on language"],
                answer: 1
            },
            {
                q: "Which method adds an element at the end of an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                answer: 0
            }
        ]
    },

    strings: {
        title: "Strings Quiz",
        description: "Test your understanding of Java Strings.",
        questions: [
            {
                q: "In Java, String is:",
                options: ["Primitive type", "A class (reference type)", "A wrapper", "A keyword"],
                answer: 1
            },
            {
                q: "Which method converts string to uppercase in Java?",
                options: ["upper()", "toUpper()", "toUpperCase()", "Upper()"],
                answer: 2
            }
        ]
    },

    recursion: {
        title: "Recursion Quiz",
        description: "Test your understanding of Recursion.",
        questions: [
            {
                q: "What is mandatory in a recursive function?",
                options: ["Loop", "Base case", "Array", "Global variable"],
                answer: 1
            },
            {
                q: "Recursion is best used for:",
                options: ["Simple loops", "Divide and conquer", "Input output", "Sorting only"],
                answer: 1
            }
        ]
    },

    "searching-sorting": {
        title: "Searching & Sorting Quiz",
        description: "Test your understanding of Searching and Sorting.",
        questions: [
            {
                q: "Binary search works on:",
                options: ["Any array", "Sorted array", "Linked list", "Graph"],
                answer: 1
            },
            {
                q: "Sorting helps in:",
                options: ["Increasing memory", "Faster searching", "Reducing array size", "None"],
                answer: 1
            }
        ]
    },

    /* ===== WEB DEVELOPMENT ===== */

    html: {
        title: "HTML Quiz",
        description: "Test your understanding of HTML.",
        questions: [
            {
                q: "What does HTML stand for?",
                options: [
                    "HyperText Markup Language",
                    "HighText Machine Language",
                    "Hyper Transfer Markup Language",
                    "Home Tool Markup Language"
                ],
                answer: 0
            },
            {
                q: "Which tag is used to create a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                answer: 1
            }
        ]
    },

    css: {
        title: "CSS Quiz",
        description: "Test your understanding of CSS.",
        questions: [
            {
                q: "What does CSS stand for?",
                options: [
                    "Creative Style Sheets",
                    "Colorful Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Style Sheets"
                ],
                answer: 2
            },
            {
                q: "Which property controls the space inside an element?",
                options: ["margin", "border", "padding", "spacing"],
                answer: 2
            }
        ]
    },

    /* ===== MATHEMATICS ===== */

    probability: {
        title: "Probability Quiz",
        description: "Test your understanding of Probability.",
        questions: [
            {
                q: "Probability value always lies between:",
                options: ["-1 and 1", "0 and 1", "1 and 10", "Any real number"],
                answer: 1
            },
            {
                q: "What is the probability of getting heads when tossing a fair coin?",
                options: ["0", "1", "1/2", "2"],
                answer: 2
            }
        ]
    },

    statistics: {
        title: "Statistics Quiz",
        description: "Test your understanding of Statistics.",
        questions: [
            {
                q: "Which measure represents the average of a dataset?",
                options: ["Mode", "Median", "Mean", "Range"],
                answer: 2
            },
            {
                q: "Which measure shows how spread out the data is?",
                options: ["Mean", "Median", "Variance", "Mode"],
                answer: 2
            }
        ]
    }

};

/* ================================
   LOAD QUIZ BASED ON TOPIC
================================ */
const params = new URLSearchParams(window.location.search);
const subjectKey = params.get("subject") || "dsa";
const topicKey = params.get("topic") || "arrays";
const quiz = quizzes[topicKey];

document.getElementById("quiz-title").innerText = quiz.title;
document.getElementById("quiz-description").innerText = quiz.description;

const quizSection = document.getElementById("quiz-section");

quiz.questions.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "quiz-question";

    questionDiv.innerHTML = `
        <p><strong>Q${index + 1}. ${item.q}</strong></p>
        ${item.options.map((opt, i) =>
            `<label>
                <input type="radio" name="q${index}" value="${i}">
                ${opt}
            </label><br>`
        ).join("")}
    `;

    quizSection.appendChild(questionDiv);
});

/* ================================
   SUBMIT QUIZ
================================ */
document.getElementById("submit-btn").addEventListener("click", () => {
    let score = 0;

    quiz.questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.answer) {
            score++;
        }
    });

    const percent = Math.round((score / quiz.questions.length) * 100);

    let quizResults = JSON.parse(localStorage.getItem("quizResults")) || {};

    if (!quizResults[subjectKey]) {
        quizResults[subjectKey] = {};
    }

    quizResults[subjectKey][topicKey] = percent;

    localStorage.setItem("quizResults", JSON.stringify(quizResults));


    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    const scoreText = document.getElementById("score-text");
const feedbackText = document.getElementById("feedback-text");

scoreText.innerText = `You scored ${score} out of ${quiz.questions.length} (${percent}%).`;

// Teacher-style feedback
let feedback = "";

if (percent >= 80) {
    feedback = "🎉 Perfect! You have mastered this topic.";
} else if (percent >= 50) {
    feedback = "🙂 Good effort! Revise this topic once more.";
} else {
    feedback = "⚠️ Needs improvement. Please relearn this topic.";
}

feedbackText.innerText = feedback;

    // Update back button dynamically based on subject
    const backButton = document.getElementById("back-to-subject-btn");
    const subjectNames = {
        dsa: "DSA",
        webdev: "Web Development",
        maths: "Mathematics"
    };
    
    if (backButton) {
        backButton.href = `${subjectKey}.html`;
        backButton.innerText = `Back to ${subjectNames[subjectKey] || "DSA"}`;
    }

});


