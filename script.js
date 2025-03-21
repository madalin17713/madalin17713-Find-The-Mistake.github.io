const sentences = [
    { text: "She go to school every day.", mistake: "go", correct: "goes" },
    { text: "He don't like pizza.", mistake: "don't", correct: "doesn't" },
    { text: "I has a car.", mistake: "has", correct: "have" },
    { text: "They was happy.", mistake: "was", correct: "were" }
];

let currentSentence = {};
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const sentenceLabel = document.getElementById('sentence-label');
    const mistakeEntry = document.getElementById('mistake-entry');
    const correctionEntry = document.getElementById('correction-entry');
    const resultLabel = document.getElementById('result-label');
    const scoreLabel = document.getElementById('score-label');
    const nextButton = document.getElementById('next-btn');
    const checkButton = document.getElementById('check-btn');

    // New sentence
    function newSentence() {
        currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
        sentenceLabel.textContent = currentSentence.text;
        mistakeEntry.value = "";
        correctionEntry.value = "";
        resultLabel.textContent = "";
        nextButton.style.display = "none";
    }

    // Check the answer
    checkButton.addEventListener('click', () => {
        const userMistake = mistakeEntry.value.trim().toLowerCase();
        const userCorrection = correctionEntry.value.trim().toLowerCase();

        if (userMistake === currentSentence.mistake.toLowerCase() && userCorrection === currentSentence.correct.toLowerCase()) {
            resultLabel.textContent = "✅ Correct!";
            resultLabel.style.color = "green";
            score++;
            scoreLabel.textContent = `Score: ${score}`;
            nextButton.style.display = "inline-block";
        } else {
            resultLabel.textContent = "❌ Incorrect. Try again!";
            resultLabel.style.color = "yellow";
        }
    });

    // Show next sentence
    nextButton.addEventListener('click', () => {
        newSentence();
    });

    // Initialize the game
    newSentence();
});
