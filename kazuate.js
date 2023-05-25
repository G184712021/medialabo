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
  
  let i = document.querySelector('input[name="nyuryoku"]');
  let nyuryoku = parseInt(i);
  kaisu++;
  let a = document.createElement('type#text');
  let count = document.querySelector("#kaisu");
  let answer = document.querySelector("#answer");
  let kekka = document.querySelector("#result");
  let p = document.createElement('p');
  p.textContent = count +'回目の予想:' + nyuryoku;
  a.insertAdjacentElement('afterend', p);

  count.textContent = kaisu;
  answer.textContent = yoso;

  //console.log(kaisu + "回目の予想: " + yoso);
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
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}