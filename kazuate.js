// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#kaito');
b1.addEventListener('click', hantei); 



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  
  let i = document.querySelector("#nyuryoku");
  let t = i.value;
  t = parseInt(t, 10);
  kaisu++;
  //let gamennosetai = document.querySelector();
  //gamennosetai.textContent = kaisu + "回目の予想: " + t;

  
  let count = document.querySelector("#kaisu");
  let answer = document.querySelector("#answer");
  let kekka = document.querySelector("#result");

  count.textContent = kaisu;
  answer.textContent = t;
  let pyouso = document.querySelector('#kaitoubun');
  pyouso.textContent = count + "回目の予想: " + answer;

  if (kaisu >= 4) {
    kekka.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (kotae === answer) {
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
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}