// 答え

//console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let syouri = 0;
let haiboku = 0;

let b1 = document.querySelector('button#kaito');
b1.addEventListener('click', hantei); 

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let kotae = Math.floor(Math.random()*61) + 1;
  let i = document.querySelector('#nyuryoku');
  let yoso = i.value;
  yoso = Number(yoso);
  kaisu++;

  let count = document.querySelector('span#kaisu');
  count.textContent = kaisu;
  let answer = document.querySelector('span#answer');
  answer.textContent = yoso;
  let kekka = document.querySelector('p#result');

  let tekianswer = document.querySelector('span#tekianswer');
  tekianswer.textContent = kotae;
  
  

  if (kaisu >= 6) {
    kekka.textContent = "すでにゲームは終わっています";
  } else {
    if (kaisu === 5 && syouri < haiboku) {
      kekka.textContent = "残念!!不合格です．";
    } else if (kaisu === 5 && syouri > haiboku) {
      kekka.textContent = "おめでとう!!合格です.";
    } else if(yoso > kotae){
      kekka.textContent = "あなたの勝ちです!いいですね!";
      syouri++;
    } else {
      kekka.textContent = "あなたの負けです。頑張りましょう.";
      haiboku++;
    }
  }
}





  /*if (kaisu >= 6) {
    kekka.textContent = "すでにゲームは終わっています";
  } else {
    if (kaisu === 5 && syouri < haiboku) {
      kekka.textContent = "残念!!不合格です．";
    } else if (kaisu === 5 && syouri > haiboku) {
      kekka.textContent = "おめでとう!!合格です.";
    } else if(yoso > tekianswer){
      kekka.textContent = "あなたの勝ちです!いいですね!";
      syouri++;
    } else {
      kekka.textContent = "あなたの負けです。頑張りましょう.";
      haiboku++;
    }
  }
}*/
