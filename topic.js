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
                <pre><code>String[] fruits = {"Apple", "Banana", "Orange"};
int[] numbers = {1, 2, 3, 4};
int[] arr = new int[5]; // array of size 5</code></pre>
            </article>

            <article class="content-block">
                <h3>Accessing Elements</h3>
                <pre><code>int[] arr = {10, 20, 30};
System.out.println(arr[0]); // 10
System.out.println(arr.length); // 3</code></pre>
            </article>

            <article class="content-block">
                <h3>Common Operations with ArrayList</h3>
                <pre><code>ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();
list.add(40);
list.remove(list.size() - 1);
list.stream().map(x -&gt; x * 2).collect(Collectors.toList());
list.stream().filter(x -&gt; x &gt; 15).collect(Collectors.toList());</code></pre>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Arrays are zero-indexed</li>
                    <li>Fast access using index</li>
                    <li>Fixed size in Java arrays</li>
                    <li>Use ArrayList for dynamic sizing</li>
                </ul>
            </article>
        `
    },
    
    strings: {
        title: "Strings",
        difficulty: "Difficulty: Beginner",
        description: "Strings in Java represent sequences of characters. They are immutable objects and provide numerous methods for manipulation and processing text data.",
        content: `
            <article class="content-block">
                <h3>What is a String in Java?</h3>
                <p>A String is a sequence of characters enclosed in double quotes. In Java, strings are immutable, meaning once created, they cannot be changed.</p>
            </article>

            <article class="content-block">
                <h3>Creating Strings</h3>
                <pre><code>String name = "Scaler";
String course = new String("DSA");
String platform = "Scaler School";</code></pre>
            </article>

            <article class="content-block">
                <h3>Accessing Characters</h3>
                <pre><code>String text = "Hello";
char ch = text.charAt(0); // 'H'
int length = text.length(); // 5</code></pre>
            </article>

            <article class="content-block">
                <h3>Common String Methods</h3>
                <pre><code>text.toUpperCase();
text.toLowerCase();
text.contains("He");
text.substring(0, 3);
text.split(" ");
text.trim();</code></pre>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Strings are immutable in Java</li>
                    <li>String class provides rich methods</li>
                    <li>Use StringBuilder for mutable strings</li>
                    <li>String comparison uses equals(), not ==</li>
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
                <p>Recursion occurs when a method calls itself directly or indirectly. Each recursive call works on a smaller problem.</p>
            </article>

            <article class="content-block">
                <h3>Example: Factorial</h3>
                <pre><code>public static int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Example: Fibonacci</h3>
                <pre><code>public static int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Always define a base case</li>
                    <li>Each call reduces problem size</li>
                    <li>Useful in trees and divide-and-conquer</li>
                    <li>Can cause stack overflow if not careful</li>
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
                <h3>Linear Search</h3>
                <pre><code>public static int linearSearch(int[] arr, int x) {
    for (int i = 0; i &lt; arr.length; i++) {
        if (arr[i] == x) return i;
    }
    return -1;
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Binary Search</h3>
                <pre><code>public static int binarySearch(int[] arr, int x) {
    int left = 0, right = arr.length - 1;
    while (left &lt;= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == x) return mid;
        if (arr[mid] &lt; x) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Bubble Sort</h3>
                <pre><code>public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i &lt; n - 1; i++) {
        for (int j = 0; j &lt; n - i - 1; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}</code></pre>
            </article>

            <article class="content-block">
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Binary search works on sorted arrays</li>
                    <li>Sorting improves searching performance</li>
                    <li>Different algorithms for different needs</li>
                    <li>Time complexity matters for large datasets</li>
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
