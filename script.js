// Quiz Questions Database
const quizData = {
    javascript: [
        {
            question: "What is the output of console.log(typeof [])?",
            code: "const arr = [];\nconsole.log(typeof arr);",
            options: ["array", "object", "undefined", "string"],
            correct: 1,
            explanation: "In JavaScript, arrays are actually objects. The typeof operator returns 'object' for arrays."
        },
        {
            question: "What will be logged to the console?",
            code: "console.log(0.1 + 0.2 === 0.3);",
            options: ["true", "false", "undefined", "NaN"],
            correct: 1,
            explanation: "Due to floating-point precision issues, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3."
        },
        {
            question: "What is the result of this expression?",
            code: "console.log('5' + 3);",
            options: ["8", "53", "'53'", "TypeError"],
            correct: 1,
            explanation: "When using + with a string and number, JavaScript converts the number to a string and concatenates them."
        },
        {
            question: "What does this code output?",
            code: "const obj = { a: 1 };\nconst arr = [obj, obj];\narr[0].a = 2;\nconsole.log(arr[1].a);",
            options: ["1", "2", "undefined", "null"],
            correct: 1,
            explanation: "Both array elements reference the same object, so modifying one affects the other."
        },
        {
            question: "What is the value of x?",
            code: "let x = 1;\nfunction test() {\n  x = 10;\n  return;\n  function x() {}\n}\ntest();\nconsole.log(x);",
            options: ["1", "10", "undefined", "function"],
            correct: 0,
            explanation: "Function declarations are hoisted, creating a local variable 'x' in the function scope. The global x remains 1."
        }
    ],
    python: [
        {
            question: "What is the output of this code?",
            code: "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))",
            options: ["3", "4", "Error", "None"],
            correct: 1,
            explanation: "Lists in Python are mutable and assigned by reference. Both x and y point to the same list."
        },
        {
            question: "What does this print?",
            code: "print(type(5 / 2))",
            options: ["<class 'int'>", "<class 'float'>", "2", "2.5"],
            correct: 1,
            explanation: "In Python 3, the / operator always returns a float, even when dividing integers."
        },
        {
            question: "What is the result?",
            code: "print('python'[1:4])",
            options: ["pyt", "yth", "ytho", "tho"],
            correct: 1,
            explanation: "String slicing [1:4] returns characters at indices 1, 2, and 3 (not including 4)."
        },
        {
            question: "What does this code output?",
            code: "x = [1, 2, 3]\nprint([i * 2 for i in x])",
            options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "Error"],
            correct: 1,
            explanation: "List comprehension [i * 2 for i in x] multiplies each element by 2."
        },
        {
            question: "What is printed?",
            code: "def func(a, b=[]):\n    b.append(a)\n    return b\nprint(func(1))\nprint(func(2))",
            options: ["[1] [2]", "[1] [1, 2]", "[1, 2] [1, 2]", "Error"],
            correct: 1,
            explanation: "Default mutable arguments are created once and shared across calls. The list persists between function calls."
        }
    ],
    algorithms: [
        {
            question: "What is the time complexity of binary search?",
            code: "// Binary search divides the search space in half each time",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            correct: 1,
            explanation: "Binary search has O(log n) complexity because it halves the search space with each iteration."
        },
        {
            question: "What is the best case time complexity of quicksort?",
            code: "// Quicksort with ideal pivot selection",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correct: 1,
            explanation: "Quicksort's best and average case is O(n log n) when the pivot divides the array evenly."
        },
        {
            question: "What is the space complexity of merge sort?",
            code: "// Merge sort uses additional arrays for merging",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correct: 2,
            explanation: "Merge sort requires O(n) extra space for temporary arrays during the merge process."
        },
        {
            question: "Which algorithm finds shortest path in weighted graphs?",
            code: "// Finding shortest path with non-negative weights",
            options: ["DFS", "BFS", "Dijkstra", "Bubble Sort"],
            correct: 2,
            explanation: "Dijkstra's algorithm finds the shortest path in weighted graphs with non-negative edges."
        },
        {
            question: "What is the average time complexity of hash table lookup?",
            code: "// Hash table with good hash function",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correct: 0,
            explanation: "Hash tables provide O(1) average-case lookup time with a good hash function and low collision rate."
        }
    ],
    datastructures: [
        {
            question: "Which data structure uses LIFO principle?",
            code: "// Last In, First Out operations",
            options: ["Queue", "Stack", "Tree", "Graph"],
            correct: 1,
            explanation: "A Stack follows the LIFO (Last In, First Out) principle - the last element added is the first to be removed."
        },
        {
            question: "What operation is NOT efficient in a linked list?",
            code: "// Linked list operations",
            options: ["Insert at head", "Delete at head", "Random access", "Insert at tail"],
            correct: 2,
            explanation: "Random access in a linked list is O(n) because you must traverse from the head to reach any element."
        },
        {
            question: "In a binary search tree, where is the minimum value?",
            code: "// BST property: left < root < right",
            options: ["Root node", "Leftmost node", "Rightmost node", "Any leaf"],
            correct: 1,
            explanation: "In a BST, the minimum value is always at the leftmost node due to the ordering property."
        },
        {
            question: "What is the maximum number of edges in a complete graph with n vertices?",
            code: "// Complete graph: every pair of vertices connected",
            options: ["n", "n²", "n(n-1)/2", "2n"],
            correct: 2,
            explanation: "A complete graph has n(n-1)/2 edges because each of n vertices connects to n-1 others, divided by 2 to avoid double counting."
        },
        {
            question: "Which structure is best for implementing BFS?",
            code: "// Breadth-First Search traversal",
            options: ["Stack", "Queue", "Priority Queue", "Array"],
            correct: 1,
            explanation: "BFS uses a Queue to process nodes level by level in FIFO order."
        }
    ]
};

// Application State
let currentCategory = 'javascript';
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];

// DOM Elements
const categoryButtons = document.querySelectorAll('.category-btn');
const questionText = document.getElementById('question-text');
const codeExample = document.getElementById('code-example');
const optionButtons = document.querySelectorAll('.option-btn');
const feedback = document.getElementById('feedback');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressFill = document.querySelector('.progress-fill');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const quizSection = document.querySelector('.quiz-section');
const scoreSection = document.querySelector('.score-section');
const scoreText = document.getElementById('score-text');
const scoreMessage = document.getElementById('score-message');
const restartBtn = document.getElementById('restart-btn');
const codeEditor = document.getElementById('code-editor');
const runCodeBtn = document.getElementById('run-code');
const output = document.getElementById('output');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            resetQuiz();
            loadQuestion();
        });
    });

    optionButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => selectAnswer(index));
    });

    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    runCodeBtn.addEventListener('click', runCode);
}

// Load Current Question
function loadQuestion() {
    const questions = quizData[currentCategory];
    const question = questions[currentQuestionIndex];

    questionText.textContent = question.question;
    
    if (question.code) {
        codeExample.style.display = 'block';
        codeExample.innerHTML = `<pre><code>${escapeHtml(question.code)}</code></pre>`;
    } else {
        codeExample.style.display = 'none';
    }

    optionButtons.forEach((btn, index) => {
        btn.textContent = question.options[index];
        btn.dataset.answer = index;
        btn.disabled = false;
        btn.classList.remove('selected', 'correct', 'incorrect');
    });

    feedback.classList.remove('show', 'correct', 'incorrect');
    feedback.textContent = '';

    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = questions.length;

    updateProgress();
    updateNavigationButtons();
}

// Select Answer
function selectAnswer(selectedIndex) {
    const questions = quizData[currentCategory];
    const question = questions[currentQuestionIndex];
    const correctIndex = question.correct;

    // Disable all buttons
    optionButtons.forEach(btn => btn.disabled = true);

    // Mark correct and incorrect answers
    optionButtons[selectedIndex].classList.add('selected');
    
    if (selectedIndex === correctIndex) {
        optionButtons[selectedIndex].classList.add('correct');
        feedback.textContent = `✓ Correct! ${question.explanation}`;
        feedback.classList.add('show', 'correct');
        
        if (!answeredQuestions[currentQuestionIndex]) {
            score++;
            answeredQuestions[currentQuestionIndex] = true;
        }
    } else {
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[correctIndex].classList.add('correct');
        feedback.textContent = `✗ Incorrect. ${question.explanation}`;
        feedback.classList.add('show', 'incorrect');
        answeredQuestions[currentQuestionIndex] = false;
    }

    // Enable next button
    nextBtn.disabled = false;
}

// Navigation
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    const questions = quizData[currentCategory];
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showScore();
    }
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = answeredQuestions[currentQuestionIndex] === undefined;
}

function updateProgress() {
    const questions = quizData[currentCategory];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Score Display
function showScore() {
    quizSection.classList.add('hidden');
    scoreSection.classList.remove('hidden');
    
    const questions = quizData[currentCategory];
    const percentage = (score / questions.length) * 100;
    
    scoreText.textContent = score;
    document.querySelector('.score-label').textContent = ` / ${questions.length}`;
    
    if (percentage === 100) {
        scoreMessage.textContent = "Perfect! You're a master! 🏆";
    } else if (percentage >= 80) {
        scoreMessage.textContent = "Excellent work! 🌟";
    } else if (percentage >= 60) {
        scoreMessage.textContent = "Good job! Keep practicing! 👍";
    } else {
        scoreMessage.textContent = "Keep learning! You'll get better! 💪";
    }
}

// Reset Quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    nextBtn.disabled = true;
}

function restartQuiz() {
    resetQuiz();
    scoreSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    loadQuestion();
}

// Code Editor
function runCode() {
    const code = codeEditor.value;
    output.textContent = '';
    
    // Create a custom console.log
    const logs = [];
    const customConsole = {
        log: (...args) => {
            logs.push(args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        return JSON.stringify(arg, null, 2);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return String(arg);
            }).join(' '));
        }
    };
    
    try {
        // Execute the code with custom console
        const func = new Function('console', code);
        func(customConsole);
        
        if (logs.length > 0) {
            output.textContent = logs.join('\n');
        } else {
            output.textContent = 'Code executed successfully (no output)';
        }
        output.style.color = '#4CAF50';
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
        output.style.color = '#f44336';
    }
}

// Utility Functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Number keys 1-4 for selecting options
    if (e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        if (index < optionButtons.length && !optionButtons[index].disabled) {
            selectAnswer(index);
        }
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        previousQuestion();
    }
    if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextQuestion();
    }
    
    // Enter to run code
    if (e.ctrlKey && e.key === 'Enter' && document.activeElement === codeEditor) {
        runCode();
    }
});
