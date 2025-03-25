const sentences = [
    { text: "She go to school every day.", mistake: "go", correct: "goes" },
    { text: "He don't like pizza.", mistake: "don't", correct: "doesn't" },
    { text: "I has a car.", mistake: "has", correct: "have" },
    { text: "They was happy.", mistake: "was", correct: "were" },
    { text: "She can sings well.", mistake: "sings", correct: "sing" },
    { text: "I will goes to the store.", mistake: "goes", correct: "go" },
    { text: "He doesn't knows the answer.", mistake: "knows", correct: "know" },
    { text: "They are playing at the park yesterday.", mistake: "are playing", correct: "were playing" },
    { text: "I am going to school yesterday.", mistake: "am going", correct: "went" },
    { text: "She don't understand the question.", mistake: "don't", correct: "doesn't" },
    { text: "We was waiting for the bus.", mistake: "was", correct: "were" },
    { text: "They has finished their homework.", mistake: "has", correct: "have" },
    { text: "I doesn't like that movie.", mistake: "doesn't", correct: "don't" },
    { text: "He have two dogs.", mistake: "have", correct: "has" },
    { text: "She was very tired, but she did went to the gym.", mistake: "did went", correct: "went" },
    { text: "He don't know the answer.", mistake: "don't", correct: "doesn't" },
    { text: "I have visited Paris last year.", mistake: "have visited", correct: "visited" },
    { text: "They was excited for the trip.", mistake: "was", correct: "were" },
    { text: "She don't need any help.", mistake: "don't", correct: "doesn't" },
    { text: "He can to swim very fast.", mistake: "can to", correct: "can" },
    { text: "We doesn't know what to do.", mistake: "doesn't", correct: "don't" },
    { text: "She have a beautiful dress.", mistake: "have", correct: "has" },
    { text: "I seen him at the party.", mistake: "seen", correct: "saw" },
    { text: "They was waiting for the train.", mistake: "was", correct: "were" },
    { text: "He didn't went to the meeting.", mistake: "went", correct: "go" },
    { text: "I don't likes that idea.", mistake: "likes", correct: "like" }
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
