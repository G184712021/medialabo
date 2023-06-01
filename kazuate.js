// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let b1 = document.querySelector('button#kaito');
b1.addEventListener('click', hantei); 



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let i = document.querySelector('#nyuryoku');
  console.log(i.textContent);
  let yoso = Number(i);
  //i.value;
  //t = parseInt(t, 10);
  kaisu++;

  let count = document.querySelector('span#kaisu');
  let answer = document.querySelector('span#answer');
  let kekka = document.querySelector('p#result');
  count.textContent = kaisu;
  answer.textContent = yoso;
  
  if (kaisu >= 4) {
    kekka.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (kotae === yoso) {
    kekka.textContent = "正解です．おめでとう!";
  } else {
    if (kaisu === 3) {
      kekka.textContent = "まちがい．残念でした答えは " + kotae + " です．";
    } else if (kotae > yoso) {
      kekka.textContent = "まちがい．答えはもっと大きいですよ";
    } else {
      kekka.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }
}