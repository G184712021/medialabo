
const quiz = [
  {
      questionNumber: '質問1',
      question: 'するの尊敬語は？',
      answers: [
          'a.なさる、される',
          'b.いたす',
          'c.させていただく',
          'd.します',
      ],
      correct: 'a.なさる、される'
  },
  {
      questionNumber: '質問2',
      question: '言うの尊敬語は？',
      answers: [
          'a.申す、申し上げる',
          'b.言います',
          'c.おっしゃる、言われる',
          'd.言う',
      ],
      correct: 'c.おっしゃる、言われる'
  },
  {
      questionNumber: '質問3',
      question: '行くの尊敬語は？',
      answers: [
          'a.うかがう、参る',
          'b.行きます',
          'c.行く',
          'd.いらっしゃる、おいでになる',
      ],
      correct: 'd.いらっしゃる、おいでになる'
  },
  {
    questionNumber: '質問4',
    question: '来るの尊敬語は？',
    answers: [
        'a.来る',
        'b.来ます',
        'c.いらっしゃる、おいでになる、見える、お越しになる',
        'd.参る、伺う',
    ],
    correct: 'c.いらっしゃる、おいでになる、見える、お越しになる'
},
]

let quizCount = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.querySelectorAll('.answer');
const buttonLength = $button.length

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizCount].question
  document.getElementById('js-number').textContent = quiz[quizCount].questionNumber
   
  let buttonCount = 0;

  while (buttonCount < buttonLength) {
      $button[buttonCount].textContent = quiz[quizCount].answers[buttonCount]
      buttonCount++;
  }
}
setupQuiz();


let clickedCount = 0;
while (clickedCount < buttonLength) {
  $button[clickedCount].addEventListener("click", function () {
      const clickedAnswer = event.currentTarget
      const answerCorrect = document.querySelector('.answer_correct');
      const answerIncorrect = document.querySelector('.answer_incorrect');
      const answerResult = document.querySelector('.answer_result');
      const answerResultText = document.querySelector('.answer_result_text')

      if (quiz[quizCount].correct === clickedAnswer.textContent) {
          answerCorrect.classList.add("active_answer")
          setTimeout (function(){
              answerCorrect.classList.remove("active_answer")
          }, 1000);
          score++;
      }
      else {
          answerIncorrect.classList.add("active_answer")
          setTimeout (function(){
              answerIncorrect.classList.remove("active_answer")
          }, 1000);
      }

      quizCount++;
      if (quizCount < quizLength) {
          setTimeout (function(){
          setupQuiz();
      }, 1000);
      }
      else {
          answerResult.classList.add("active_result")
          answerResultText.textContent = '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
      }
  });            
  clickedCount++;
}