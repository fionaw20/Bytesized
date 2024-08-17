function startQuiz() {
  const quizPopup = document.getElementById("quiz-popup");
  quizPopup.style.display = "block"; 

  const quizContainer = document.getElementById("quiz-container");

  const quizQuestions = [
      {
          question: "What type of flavors do you enjoy most?",
          options: ["Spicy", "Savory", "Sweet", "Sour", "Umami"]
      },
      {
          question: "Which meal do you prefer?",
          options: ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"]
      },
      {
          question: "How adventurous are you with food?",
          options: ["Very adventurous", "Somewhat adventurous", "Neutral", "Not very adventurous", "Not adventurous at all"]
      },
      {
          question: "What is your preferred cooking style?",
          options: ["Grilling", "Baking", "Stir-frying", "Slow cooking", "No preference"]
      },
      {
          question: "What is your favorite protein?",
          options: ["Beef", "Chicken", "Fish", "Vegetarian", "Other"]
      }
  ];

  let currentQuestionIndex = 0;
  const userAnswers = [];

  function displayQuestion() {
      quizContainer.innerHTML = `
          <div class="quiz-question">${quizQuestions[currentQuestionIndex].question}</div>
          <ul class="quiz-options">
              ${quizQuestions[currentQuestionIndex].options.map((option, index) => `
                  <li>
                      <label>
                          <input type="radio" name="quiz-option" value="${option}">
                          ${option}
                      </label>
                  </li>
              `).join('')}
          </ul>
          <button class="quiz-submit-button">Next</button>
      `;

      document.querySelector(".quiz-submit-button").addEventListener("click", submitAnswer);
  }

  function submitAnswer() {
      const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
      if (selectedOption) {
          userAnswers.push(selectedOption.value);
          currentQuestionIndex++;

          if (currentQuestionIndex < quizQuestions.length) {
              displayQuestion();
          } else {
              displayResult();
          }
      } else {
          alert("Please select an option before proceeding.");
      }
  }

  function displayResult() {
      let continent = "";
      const flavorPreference = userAnswers[0].toLowerCase();

      if (flavorPreference === "spicy") {
          continent = "Asia";
      } else if (flavorPreference === "savory") {
          continent = "Europe";
      } else if (flavorPreference === "sweet") {
          continent = "South America";
      } else if (flavorPreference === "sour") {
          continent = "North America";
      } else if (flavorPreference === "umami") {
          continent = "Oceania";
      }

      quizContainer.innerHTML = `
          <div class="quiz-result">
              Based on your answers, you should try dishes from <strong>${continent}</strong>!
          </div>
      `;
  }

  displayQuestion();
}

function closeQuiz() {
  const quizPopup = document.getElementById("quiz-popup");
  quizPopup.style.display = "none"; 
}

let currentFlashcardIndex = 0;
let currentFlashcards = [];

function openLanguagePopup() {
    const languagePopup = document.getElementById("language-popup");
    languagePopup.style.display = "block";
}

function closeLanguagePopup() {
    const languagePopup = document.getElementById("language-popup");
    languagePopup.style.display = "none";
    currentFlashcardIndex = 0; // Reset flashcard index
}

function showFlashcard(flashcards) {
    currentFlashcards = flashcards;
    currentFlashcardIndex = 0;
    displayFlashcard();
}

function displayFlashcard() {
    const flashcardContainer = document.getElementById("flashcard-container");
    const flashcard = currentFlashcards[currentFlashcardIndex];

    flashcardContainer.innerHTML = `
        <div class="flashcard">

            <div class="flashcard-content">
                <div class="flashcard-header">${flashcard.continent}</div>
                <div class="flashcard-item"><strong>Country:</strong> ${flashcard.country}</div>
                <div class="flashcard-item"><strong>Word:</strong> ${flashcard.word}</div>
                <div class="flashcard-item phonetic"><strong>Phonetic Spelling:</strong> ${flashcard.phonetic}</div>
            <button class="arrow-button" onclick="nextFlashcard()">&#10132;</button>
        </div>
    `;
}

function nextFlashcard() {
    currentFlashcardIndex++;
    if (currentFlashcardIndex >= currentFlashcards.length) {
        currentFlashcardIndex = 0; // Loop back to the first flashcard
    }
    displayFlashcard();
}

function pickLanguage(continent) {
    const flashcards = {
        "north-america": [
            {
                continent: "North America",
                country: "Mexico",
                word: "Birria Tacos",
                phonetic: "Bir-e-a Taa-kowz",
  

            },
            {
                continent: "North America",
                country: "Canada",
                word: "Poutine",
                phonetic: "Poo-teen",

            }
        ],
        "south-america": [
            {
                continent: "South America",
                country: "Brazil",
                word: "Feijoada",
                phonetic: "Fay-jow-aa-duh",
            },
            {
                continent: "South America",
                country: "Argentina",
                word: "Asado",
                phonetic: "Uh-saa-dow",
            },
            {
                continent: "South America",
                country: "Chile",
                word: "Beef Empanadas",
                phonetic: "Beef Em-puh-naa-duhz",

            }
        ],
"africa": [
    {
        continent: "Africa",
        country: "Kenya",
        word: "Kuku Paka",
        phonetic: "Koo-koo Pa-ka",
    },
    {
        continent: "Africa",
        country: "Eswatini",
        word: "Mealie Bread",
        phonetic: "Mee-lee Bred",
    },
    {
        continent: "Africa",
        country: "South Africa",
        word: "Bobotie",
        phonetic: "Boo-boo-tee",
    }
],
"europe": [
    {
        continent: "Europe",
        country: "France",
        word: "Cassoulet",
        phonetic: "Ka-soo-lay",
    },
    {
        continent: "Europe",
        country: "Norway",
        word: "Fårikål",
        phonetic: "Fo-ree-kal",
    },
    {
        continent: "Europe",
        country: "Italy",
        word: "Arancini",
        phonetic: "Eh-ruhn-see-nee",
    }
],
"asia": [
    {
        continent: "Asia",
        country: "China",
        word: "Biang Biang Noodles",
        phonetic: "Bee-an Bee-an Noo-dlz",
    },
    {
        continent: "Asia",
        country: "India",
        word: "Biryani",
        phonetic: "Bee-ree-aa-nee",
    },
    {
        continent: "Asia",
        country: "Malaysia",
        word: "Nasi Lemak",
        phonetic: "Naa-see Le-mak",
    }
],
"oceania": [
    {
        continent: "Oceania",
        country: "New Zealand",
        word: "Pavlova",
        phonetic: "Paa-vlow-vuh",
    },
    {
        continent: "Oceania",
        country: "Papua New Guinea",
        word: "Kaukau",
        phonetic: "Co-co",
    }
]
};

showFlashcard(flashcards[continent]);
}
