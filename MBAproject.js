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
            'c.おっしゃる、　　　言われる',
            'd.言う',
        ],
        correct: 'c.おっしゃる、　　　言われる'
    },
    {
        questionNumber: '質問3',
        question: '行くの尊敬語は？',
        answers: [
            'a.うかがう、参る',
            'b.行きます',
            'c.行く',
            'd.いらっしゃる、　　　おいでになる',
        ],
        correct: 'd.いらっしゃる、　　　おいでになる'
    },
    {
      questionNumber: '質問4',
      question: '来るの尊敬語は？',
      answers: [
          'a.来る',
          'b.来ます',
          'c.いらっしゃる、　　　おいでになる、　　　見える、　　　　　　　  お越しになる',
          'd.うかがう、参る',
      ],
      correct: 'c.いらっしゃる、　　　おいでになる、　　　見える、　　　　　　　  お越しになる'
  },
  {
    questionNumber: '質問5',
    question: '知るの尊敬語は？',
    answers: [
        'a.存じる、　　　　　存じ上げる、　　　　　承知する',
        'b.お知りになる、　　　ご存じだ',
        'c.知る',
        'd.知っています',
    ],
    correct: 'b.お知りになる、　　　ご存じだ'
  },
  {
    questionNumber: '質問6',
    question: '食べるの尊敬語は？',
    answers: [
        'a.召し上がる、　　　おあがりになる',
        'b.食べます',
        'c.食べる',
        'd.いただく、頂戴する',
    ],
    correct: 'a.召し上がる、　　　おあがりになる'
  },
  {
    questionNumber: '質問7',
    question: 'いるの尊敬語は？',
    answers: [
        'a.おる',
        'b.いらっしゃる、　　おいでになる',
        'c.いらない',
        'd.います',
    ],
    correct: 'b.いらっしゃる、　　おいでになる'
  },
  {
    questionNumber: '質問8',
    question: '見るの尊敬語は？',
    answers: [
        'a.拝見する',
        'b.見ます',
        'c.watch',
        'd.ご覧になる',
    ],
    correct: 'd.ご覧になる'
  },
  {
    questionNumber: '質問9',
    question: '聞くの尊敬語は？',
    answers: [
        'a.お聞きになる',
        'b.聞きます',
        'c.聞く',
        'd.拝聴する、うかがう',
    ],
    correct: 'a.お聞きになる'
  },
  {
    questionNumber: '質問10',
    question: '座るの尊敬語は？',
    answers: [
        'a.お座りする、　　　座らせていただく',
        'b.座ります',
        'c.お掛けになる',
        'd.座る',
    ],
    correct: 'c.お掛けになる'
  },
  {
    questionNumber: '質問11',
    question: '会うの尊敬語は？',
    answers: [
        'a.会う',
        'b.会います',
        'c.お目にかかる',
        'd.お会いになる、　　会われる',
    ],
    correct: 'd.お会いになる、　　会われる'
  },
  {
    questionNumber: '質問12',
    question: '伝えるの尊敬語は？',
    answers: [
        'a.申し伝える',
        'b.お伝えになる',
        'c.伝えます',
        'd.伝える',
    ],
    correct: 'b.お伝えになる'
  },
  {
    questionNumber: '質問13',
    question: 'わかるの尊敬語は？',
    answers: [
        'a.おわかりになる、　ご理解いただく',
        'b.かしこまる、　　　承知する',
        'c.わかりました',
        'd.わかる',
    ],
    correct: 'a.おわかりになる、　ご理解いただく'
  },
  {
    questionNumber: '質問14',
    question: '読むの尊敬語は？',
    answers: [
        'a.読む',
        'b.読みます',
        'c.拝読する',
        'd.お読みになる',
    ],
    correct: 'd.お読みになる'
  },
  {
    questionNumber: '質問15',
    question: '与えるの尊敬語は？',
    answers: [
        'a.くださる、　　　　お与えになる',
        'b.差し上げる',
        'c.あげます',
        'd.与える',
    ],
    correct: 'a.くださる、　　　　お与えになる'
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
  
  let quizCount = 0;
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
        if (quizCount < quizLength) {
            setTimeout (function(){
            setupQuiz();
        }, 1000);
        }
        else {
            answerResult.classList.add("active_result")
            answerResultText.textContent = '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
            if(score <= 5){
              answerResultTextcomment.textContent = 'もうちょっと頑張りましょう'
            } else if(score >= 6 && score <=10){
              answerResultTextcomment.textContent = 'いい感じです!あと少し!'
            } else {
              answerResultTextcomment.textContent = '素晴らしい!合格です!!'
            }
        }
    });            
    clickedCount++;
  }