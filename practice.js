const quiz = [
  {
      questionNumber: '問目',
      question: '"する"の尊敬語は？',
      answers: [
          'A.なさる,される',
          'B.いたす',
          'C.させていただく',
          'D.します',
      ],
      correct: 'A.なさる,される'
  },
  {
      questionNumber: '問目',
      question: '"言う"の尊敬語は？',
      answers: [
          'A.申す,申し上げる',
          'B.言います',
          'C.おっしゃる,言われる',
          'D.言う',
      ],
      correct: 'C.おっしゃる,言われる'
  },
  {
      questionNumber: '問目',
      question: '"行く"の尊敬語は？',
      answers: [
          'A.うかがう,参る',
          'B.行きます',
          'C.行く',
          'D.いらっしゃる,おいでになる',
      ],
      correct: 'D.いらっしゃる,おいでになる'
  },
  {
    questionNumber: '問目',
    question: '"来る"の尊敬語は？',
    answers: [
        'A.来る',
        'B.来ます',
        'C.いらっしゃる,お越しになる',
        'D.うかがう,参る',
    ],
    correct: 'C.いらっしゃる,お越しになる'
},
{
  questionNumber: '問目',
  question: '"知る"の尊敬語は？',
  answers: [
      'A.存じる,存じ上げる,承知する',
      'B.お知りになる,ご存じだ',
      'C.知る',
      'D.知っています',
  ],
  correct: 'B.お知りになる,ご存じだ'
},
{
  questionNumber: '問目',
  question: '"食べる"の尊敬語は？',
  answers: [
      'A.召し上がる,おあがりになる',
      'B.食べます',
      'C.食べる',
      'D.いただく,頂戴する',
  ],
  correct: 'A.召し上がる,おあがりになる'
},
{
  questionNumber: '問目',
  question: '"いる"の尊敬語は？',
  answers: [
      'A.おる',
      'B.いらっしゃる,おいでになる',
      'C.いらない',
      'D.います',
  ],
  correct: 'B.いらっしゃる,おいでになる'
},
{
  questionNumber: '問目',
  question: '"見る"の尊敬語は？',
  answers: [
      'A.拝見する',
      'B.見ます',
      'C.watch',
      'D.ご覧になる',
  ],
  correct: 'D.ご覧になる'
},
{
  questionNumber: '問目',
  question: '"聞く"の尊敬語は？',
  answers: [
      'A.お聞きになる',
      'B.聞きます',
      'C.聞く',
      'D.拝聴する,うかがう',
  ],
  correct: 'A.お聞きになる'
},
{
  questionNumber: '問目',
  question: '"座る"の尊敬語は？',
  answers: [
      'A.お座りする,座らせていただく',
      'B.座ります',
      'C.お掛けになる',
      'D.座る',
  ],
  correct: 'C.お掛けになる'
},
{
  questionNumber: '問目',
  question: '"会う"の尊敬語は？',
  answers: [
      'A.会う',
      'B.会います',
      'C.お目にかかる',
      'D.お会いになる,会われる',
  ],
  correct: 'D.お会いになる,会われる'
},
{
  questionNumber: '問目',
  question: '"伝える"の尊敬語は？',
  answers: [
      'A.申し伝える',
      'B.お伝えになる',
      'C.伝えます',
      'D.伝える',
  ],
  correct: 'B.お伝えになる'
},
{
  questionNumber: '問目',
  question: '"わかる"の尊敬語は？',
  answers: [
      'A.おわかりになる,ご理解いただく',
      'B.かしこまる,承知する',
      'C.わかりました',
      'D.わかる',
  ],
  correct: 'A.おわかりになる,ご理解いただく'
},
{
  questionNumber: '問目',
  question: '"読む"の尊敬語は？',
  answers: [
      'A.読む',
      'B.読みます',
      'C.拝読する',
      'D.お読みになる',
  ],
  correct: 'D.お読みになる'
},
{
  questionNumber: '問目',
  question: '"与える"の尊敬語は？',
  answers: [
      'A.くださる,お与えになる',
      'B.差し上げる',
      'C.あげます',
      'D.与える',
  ],
  correct: 'A.くださる,お与えになる'
},
/*
{
  questionNumber: '質問',
  question: 'の尊敬語は？',
  answers: [
      'a.',
      'b.',
      'c.',
      'd.',
  ],
  correct: ''
},
*/
]


function shuffleQuiz(array) {
  for (let i = (array.length - 1); 0 < i; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let selected = array[i];
    array[i] = array[random];
    array[random] = selected;
  }
  return array;
}

shuffleQuiz(quiz);

let quizCount = 1;
const quizLength = quiz.length;
let score = 0;

const $button = document.querySelectorAll('.answer');
const buttonLength = $button.length


function alertButton(){
  switch(quizCount){
  case 0:alert('いたす、させていただくは謙譲語なので違います');//質問1
  break;
  case 1:alert('申す、申し上げるは謙譲語なので違います');//質問2
  break;
  case 2:alert('うかがう、参るは謙譲語なので違います');//質問3
  break;
  case 3:alert('うかがう、参るは謙譲語なので違います');//質問4
  break;
  case 4:alert('存じる、存じ上げる、承知するは謙譲語のなので違います');//質問5
  break;
  case 5:alert('いただく、頂戴するは謙譲語なので違います');//質問6
  break;
  case 6:alert('おるは謙譲語なので違います');//質問7
  break;
  case 7:alert('拝見するは謙譲語なので違います');//質問8
  break;
  case 8:alert('拝聴する、うかがうは謙譲語なので違います');//質問9
  break;
  case 9:alert('お座りする、座らせていただくは謙譲語なので違います');//質問10
  break;
  case 10:alert('お目にかかるは謙譲語なので違います');//質問11
  break;
  case 11:alert('申し伝えるは謙譲語なので違います');//質問12
  break;
  case 12:alert('かしこまる、承知するは謙譲語なので違います');//質問13
  break;
  case 13:alert('拝読するは謙譲語なので違います');//質問14
  break;
  case 14:alert('差し上げるは謙譲語なので違います');//質問15
  break;
  }
  
}

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


document.getElementById('js-suuzi').textContent = quizCount

let clickedCount = 0;
while (clickedCount < buttonLength) {
  $button[clickedCount].addEventListener("click", function () {
      const clickedAnswer = event.currentTarget
      const answerCorrect = document.querySelector('.answer_correct');
      const answerIncorrect = document.querySelector('.answer_incorrect');
      const answerResult = document.querySelector('.answer_result');
      const answerResultText = document.querySelector('.answer_result_text')
      const answerResultTextcomment = document.querySelector('.answer_result_comment')

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
      if (quizCount <= quizLength) {
          setTimeout (function(){
          setupQuiz();
      }, 1000);
      }
      else {
          answerResult.classList.add("active_result")
          answerResultText.textContent = '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
          if(score <= 5){
            answerResultTextcomment.textContent = 'もうちょっと頑張りましょう...'
          } else if(score >= 6 && score <=10){
            answerResultTextcomment.textContent = 'いい感じです!あと少し!'
          } else {
            answerResultTextcomment.textContent = '素晴らしい!合格です!!'
          }
      }
  });            
  clickedCount++;
}