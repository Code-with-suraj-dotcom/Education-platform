const topics = {
    arrays: {
        title: "Arrays",
        difficulty: "Difficulty: Beginner",
        description: "Arrays are fundamental data structures used to store multiple values in a single variable. They allow fast access using indexes and are widely used in algorithms.",
        content: `
            <article class="content-block">
                <h3>What is an Array?</h3>
                <p>An array is a collection of elements stored at contiguous memory locations. Each element can be accessed using an index starting from 0.</p>
            </article>

            <article class="content-block">
                <h3>Creating Arrays</h3>
                <pre><code>let fruits = ["Apple", "Banana", "Orange"];
let numbers = new Array(1, 2, 3, 4);</code></pre>
            </article>

            <article class="content-block">
                <h3>Accessing Elements</h3>
                <pre><code>let arr = [10, 20, 30];
console.log(arr[0]); // 10
console.log(arr.length);</code></pre>
            </article>

            <article class="content-block">
                <h3>Common Methods</h3>
                <pre><code>arr.push(40);
arr.pop();
arr.map(x => x * 2);
arr.filter(x => x > 15);</code></pre>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Arrays are zero-indexed</li>
                    <li>Fast access using index</li>
                    <li>map, filter, reduce are powerful</li>
                </ul>
            </article>
        `
    },

    strings: {
        title: "Strings",
        difficulty: "Difficulty: Beginner",
        description: "Strings represent text data. They are sequences of characters and are widely used in user input handling, text processing, and validation.",
        content: `
            <article class="content-block">
                <h3>What is a String?</h3>
                <p>A string is a sequence of characters enclosed in quotes. In JavaScript, strings are immutable.</p>
            </article>

            <article class="content-block">
                <h3>Creating Strings</h3>
                <pre><code>let name = "Scaler";
let course = 'DSA';
let platform = \`Scaler School\`;</code></pre>
            </article>

            <article class="content-block">
                <h3>Accessing Characters</h3>
                <pre><code>let text = "Hello";
console.log(text[0]);
console.log(text.length);</code></pre>
            </article>

            <article class="content-block">
                <h3>String Methods</h3>
                <pre><code>text.toUpperCase();
text.includes("He");
text.slice(0, 3);
text.split("");</code></pre>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Strings store text data</li>
                    <li>Immutable in nature</li>
                    <li>Rich set of built-in methods</li>
                </ul>
            </article>
        `
    },

    recursion: {
        title: "Recursion",
        difficulty: "Difficulty: Intermediate",
        description: "Recursion is a technique where a function calls itself to solve a problem by breaking it into smaller subproblems.",
        content: `
            <article class="content-block">
                <h3>What is Recursion?</h3>
                <p>Recursion occurs when a function calls itself directly or indirectly. Each recursive call works on a smaller problem.</p>
            </article>

            <article class="content-block">
                <h3>Example</h3>
                <pre><code>function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Always define a base case</li>
                    <li>Each call reduces problem size</li>
                    <li>Useful in trees and divide-and-conquer</li>
                </ul>
            </article>
        `
    },

    "searching-sorting": {
        title: "Searching & Sorting",
        difficulty: "Difficulty: Intermediate",
        description: "Searching and sorting algorithms help retrieve data efficiently and organize it logically.",
        content: `
            <article class="content-block">
                <h3>Searching</h3>
                <pre><code>function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;
    }
    return -1;
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Sorting</h3>
                <p>Sorting arranges elements in ascending or descending order to improve searching efficiency.</p>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Binary search works on sorted arrays</li>
                    <li>Sorting improves performance</li>
                    <li>Different algorithms for different needs</li>
                </ul>
            </article>
        `
    },

    /* =====================
     WEB DEVELOPMENT
  ===================== */

html: {
        title: "HTML",
        difficulty: "Difficulty: Beginner",
        description: "HTML (HyperText Markup Language) is the backbone of every website. It defines the structure and meaning of web content using elements and tags.",
        content: `
            <article class="content-block">
                <h3>What is HTML?</h3>
                <p>HTML is a markup language used to create the structure of web pages. It uses tags to define elements such as headings, paragraphs, images, links, and forms.</p>
            </article>

            <article class="content-block">
                <h3>Basic HTML Structure</h3>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;p&gt;This is my first website.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            </article>

            <article class="content-block">
                <h3>Common HTML Tags</h3>
                <p>Some commonly used tags include headings (h1–h6), paragraphs (p), images (img), links (a), lists (ul, ol, li), and containers like div and section.</p>
            </article>

            <article class="content-block">
                <h3>Forms in HTML</h3>
                <p>Forms allow users to input data. They are created using the form tag along with input, textarea, select, and button elements.</p>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>HTML defines the structure of web pages</li>
                    <li>HTML is not a programming language</li>
                    <li>Tags describe the purpose of content</li>
                    <li>Forms enable user interaction</li>
                </ul>
            </article>
        `
    },

    css: {
        title: "CSS",
        difficulty: "Difficulty: Beginner",
        description: "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling colors, spacing, fonts, and responsiveness.",
        content: `
            <article class="content-block">
                <h3>What is CSS?</h3>
                <p>CSS describes how HTML elements are displayed on screen. It separates content from presentation, making websites easier to maintain.</p>
            </article>

            <article class="content-block">
                <h3>CSS Syntax</h3>
                <pre><code>p {
  color: blue;
  font-size: 16px;
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Box Model</h3>
                <p>Every HTML element is a box consisting of margin, border, padding, and content. Understanding the box model is essential for layout design.</p>
            </article>

            <article class="content-block">
                <h3>Flexbox</h3>
                <p>Flexbox is a layout model that helps align items in rows or columns efficiently, even when their size is unknown.</p>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>CSS controls visual appearance</li>
                    <li>Styles can be inline, internal, or external</li>
                    <li>Flexbox simplifies layouts</li>
                    <li>Responsive design improves user experience</li>
                </ul>
            </article>
        `
    },

    /* =====================
       MATHEMATICS
    ===================== */

    probability: {
        title: "Probability",
        difficulty: "Difficulty: Beginner",
        description: "Probability measures the likelihood of an event occurring. It is widely used in algorithms, data science, and decision making.",
        content: `
            <article class="content-block">
                <h3>What is Probability?</h3>
                <p>Probability is a numerical value between 0 and 1 that represents how likely an event is to happen.</p>
            </article>

            <article class="content-block">
                <h3>Basic Formula</h3>
                <pre><code>Probability = Number of favorable outcomes / Total outcomes</code></pre>
            </article>

            <article class="content-block">
                <h3>Example</h3>
                <p>If a die is rolled, the probability of getting a 3 is 1/6 because there is one favorable outcome out of six possible outcomes.</p>
            </article>

            <article class="content-block">
                <h3>Types of Probability</h3>
                <p>Common types include classical probability, experimental probability, and conditional probability.</p>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Probability ranges from 0 to 1</li>
                    <li>All possible probabilities sum to 1</li>
                    <li>Used extensively in computer science</li>
                    <li>Forms the base for statistics and ML</li>
                </ul>
            </article>
        `
    },

    statistics: {
        title: "Statistics",
        difficulty: "Difficulty: Intermediate",
        description: "Statistics deals with collecting, analyzing, interpreting, and presenting data to make informed decisions.",
        content: `
            <article class="content-block">
                <h3>What is Statistics?</h3>
                <p>Statistics is the science of learning from data. It helps summarize large datasets and find patterns.</p>
            </article>

            <article class="content-block">
                <h3>Measures of Central Tendency</h3>
                <p>Mean, median, and mode describe the central value of a dataset.</p>
            </article>

            <article class="content-block">
                <h3>Measures of Dispersion</h3>
                <p>Variance and standard deviation describe how spread out the data values are.</p>
            </article>

            <article class="content-block">
                <h3>Applications in CS</h3>
                <p>Statistics is used in data analysis, machine learning, performance evaluation, and A/B testing.</p>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Statistics converts data into insights</li>
                    <li>Mean is sensitive to outliers</li>
                    <li>Standard deviation measures variability</li>
                    <li>Essential for data-driven decisions</li>
                </ul>
            </article>
        `
    }
};

const params = new URLSearchParams(window.location.search);
const topicKey = params.get("topic") || "arrays";
const subjectKey = params.get("subject") || "dsa";
const topic = topics[topicKey];

document.getElementById("topic-title").innerText = topic.title;
document.getElementById("topic-difficulty").innerText = topic.difficulty;
document.getElementById("topic-description").innerText = topic.description;
document.getElementById("topic-content").innerHTML = topic.content;


// Set quiz link dynamically
const quizBtn = document.getElementById("start-quiz-btn");
quizBtn.href = `quiz.html?subject=${subjectKey}&topic=${topicKey}`;
