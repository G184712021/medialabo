// 描画領域
let context;            // canvas id="ContextArea"

// ★チューニング要素
const wallWidth = 15;
const wallHeight = 2;
let muteki = false;     // 無敵モード（[a]で切り替え）

// ★敵情報
let enemies;            // 敵
let eBeam;              // 敵ビーム
let dir                 // 描画用階層
let nextDir;            // 描画用階層（次）
let cnt;                // 更新フレームカウント（インクリメント）
let maxCnt;             // 更新フレームカウント（サイクル）
const enemyGunMax = 10;

// ★自機情報
let player;             // 自機
let pBeam;              // ビーム
let p_LR;               // 横位置移動の操作
let p_UD;               // 縦位置移動の操作
const playerGunMax = 30;

// ★壁情報
let walls;              // 壁

// ★ゲーム情報
let GameState;  // ready, play, end, clear
let score;      // 点数

// 定義（描画イメージ）
const char = {
    enemy0: "0x1F991",//一番上の敵
    enemy1: "0x1F647",//真ん中の敵
    enemy2: "0x1F419",//下の敵
    eBeam: "0x1F4A7",//的のビーム
    cannon: "0x1F5FC",
    pBeam: "0x26A1",
    wall: "0x1F3E2",
    explosion: "0x1F4A5" //爆発
};

// クラス
class Emoji {
    constructor(type, x, y, size, score = 0) {
        this.code = char[type];
        this.x = x;
        this.y = y;
        this.size = size;
        this.status = "alive";      // alive / dead
        this.score = score;
    }
    update(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
        drawText(this.code, this.x, this.y, this.size, "white");
    }
}

// ■■■ 初期処理とイベント定義 ■■■
function exe() {
    // 描画領域の取得（１回だけ）
    context = document.getElementById("ContextArea").getContext("2d");

    // 操作イベントの定義
    document.addEventListener("keydown", event => {
        if (GameState == "play") {
            // 無敵モード切替
            if (event.key == "a") muteki = !muteki;

            // 自機が射撃
            if ((event.key == "s") && (playerGunMax > pBeam.length)) {
                pBeam.push(new Emoji("pBeam", player.x, player.y - 20, 15));
            }

            if (event.key == "ArrowLeft") p_LR = -1;    // ←移動
            if (event.key == "ArrowRight") p_LR = 1;    // →移動
            if (event.key == "ArrowUp") p_UD = -1;      // ↑移動
            if (event.key == "ArrowDown") p_UD = 1;     // ↓移動
            if (event.key == "j") p_LR = -1;    // ←移動
            if (event.key == "l") p_LR = 1;    // →移動
            if (event.key == "i") p_UD = -1;            // ↑移動
            if (event.key == "k") p_UD = 1;             // ↓移動
        }
    });

    // 操作中止イベント（KeyUp）の定義
    document.addEventListener("keyup", event => {

        // 操作パラメータの初期化
        if (event.key == "ArrowLeft") p_LR = 0;     // ←移動
        if (event.key == "ArrowRight") p_LR = 0;    // →移動
        if (event.key == "ArrowUp") p_UD = 0;       // ↑移動
        if (event.key == "ArrowDown") p_UD = 0;     // ↓移動
        if (event.key == "j") p_LR = 0;     // ←移動
        if (event.key == "l") p_LR = 0;    // →移動
        if (event.key == "i") p_UD = 0;             // ↑移動
        if (event.key == "k") p_UD = 0;             // ↓移動

        // ※ゲーム状態でない（ready, end, clear）時に、“s”でゲーム開始
        if ((GameState != "play") && (event.key == "s")) {
            startGame("play");
        }
    });

    // メイン処理開始
    startGame("ready");     // 初期描画
    FrameProc();            // フレーム処理
}

// ■■■ 開始処理 ■■■
function startGame(st) {
    GameState = st;

    dir = 1;
    nextDir = 0;
    p_LR = 0;
    p_UD = 0;

    cnt = 30;
    maxCnt = 30;

    score = 0;
    eBeam = [];
    pBeam = [];

    // ■ 敵の作成（横１１ × 縦５）
    enemies = [];
    for (let i = 0; 11 > i; i++) {
        for (let j = 0; 5 > j; j++) {
            // 引数として与えた数以上の最小の整数を返します。
            // 0, 1, 2 の種類を設定 →（enemy0、enemy1、enemy2へ）
            let k = Math.ceil(j / 2);

            // オブジェクト生成と配列への追加
            enemies.push(new Emoji(
                "enemy" + k,
                i * 50 + 70,
                j * 40 + 60,
                30,
                30 - 10 * k
            ));
        }
    }

    // ■ 壁の作成
    walls = [];
    for (let i = 0; wallWidth > i; i++) {
        for (let j = 0; wallHeight > j; j++) {
            if ((i > 1) && (5 > i) && (j > 3)) continue;
            for (let k = 0; 4 > k; k++) {
                walls.push(new Emoji(
                    "wall",
                    i * 10 + k * 150 + 65,
                    j * 10 + 400,
                    10
                ));
            }
        }
    }

    // ◆ 自機の作成
    player = new Emoji("cannon", 320, 450, 30);


}

// ■■■ フレーム処理（再帰実行） ■■■
function FrameProc() {

    // 背景色の設定
    context.fillStyle = "black";
    context.fillRect(0, 0, 1000, 900);

    // 敵動作フレーム
    cnt--;
    // 敵の描画
    let dx = 0;
    let dy = 0;

    if ((GameState == "play") && (cnt == 0)) {
        for (let i = 0; enemies.length > i; i++) {
            if (enemies[i].status == "alive") {
                const [x, y] = [enemies[i].x, enemies[i].y];
                if ((dir == -1) || (dir == 1)) [dx, dy] = [dir * 5, 0];
                if (dir == 2) [dx, dy] = [0, 10];
                if (20 > x + dx) nextDir = 1;
                if (x + dx > 629) nextDir = -1;
                collideWalls(enemies[i], true);
                if ((enemyGunMax > eBeam.length) && (0.05 > Math.random())) {
                    eBeam.push(new Emoji("eBeam", x, y, 15));
                }
                if (y + dy > player.y - player.size) {
                    GameState = "end";
                }
            } else {
                enemies.splice(i, 1);
                i--;
            }
        }
        if (dir == 2) {
            dir = nextDir;
            nextDir = 0;
        } else if (nextDir != 0) {
            dir = 2;
        }
        cnt = maxCnt;
    }

    // 敵ビームの描画
    for (let i = 0; eBeam.length > i; i++) {
        eBeam[i].update(0, 3);
        if (collide(eBeam[i], player)) player.code = char["explosion"];
        collideWalls(eBeam[i]);
        if ((eBeam[i].y > 480) || (eBeam[i].status == "dead")) {
            eBeam.splice(i, 1);
            i--;
        }
    }

    // 自機ビームの描画
    for (let i = 0; pBeam.length > i; i++) {
        pBeam[i].update(0, -10);
        for (const enemy of enemies) {
            if (collide(pBeam[i], enemy)) {
                enemy.code = char["explosion"];
                score = score + enemy.score;
                maxCnt = maxCnt - 1;
                if (2 > maxCnt) maxCnt = 2;
            }
        }
        collideWalls(pBeam[i]);
        if ((0 > pBeam[i].y) || (pBeam[i].status == "dead")) {
            pBeam.splice(i, 1);
            i--;
        }
    }

    // 自機の位置補正と描画
    if (20 > player.x) player.x = 20;
    if (player.x > 620) player.x = 620;
    player.update(p_LR * 2, p_UD * 2);

    // 敵の描画
    enemies.forEach(enemy => enemy.update(dx, dy));

    // 壁の描画
    walls.forEach(wall => wall.update(0, 0));

    // 自機／敵の状態による、ゲームステータスの更新
    if (player.status == "dead") GameState = "end";
    if (enemies.length == 0) GameState = "clear";

    // 数字情報の表示
    drawText(`SCORE: ${score}`, 10, 10, 20, "white", "left", "top");
    drawText(`無敵 : ${muteki}`, 10, 30, 10, "white", "left", "top");
    drawText(`自弾 : ${pBeam.length} / ${playerGunMax}`, 10, 40, 10, "white", "left", "top");
    drawText(`敵弾 : ${eBeam.length} / ${enemyGunMax}`, 10, 50, 10, "white", "left", "top");

    // ゲームステータスによる表示
    if (GameState == "end") drawText("GAMEOVER", 320, 200, 50, "lime");
    if (GameState == "clear") drawText("CLEAR!!", 320, 200, 50, "lime");
    if (GameState != "play") drawText("Press S key to start", 320, 280, 30, "lime");

    // 次フレーム処理呼び出し
    window.requestAnimationFrame(FrameProc);
}

// ■■■ 壁衝突判定 ■■■
function collideWalls(object, aliveCheck = false) {
    for (let i = 0; walls.length > i; i++) {
        if (collide(object, walls[i])) {
            walls.splice(i, 1);             // 壁の破棄
            i--;                            // ループ添え字の補正

            if (aliveCheck) {
                object.status = "alive";
            }
        }
    }
}

// ■■■ 突判定 ■■■
// object1 …弾（自／敵）
// object2 …自機、敵機、壁
function collide(object1, object2) {

    let check = false;

    if ((object1.status == "alive")
        && (object2.status == "alive")) {

        // 平方和の平方根
        const d = Math.hypot(
            object1.x - object2.x,
            object1.y - object2.y
        );

        if (((object1.size + object2.size) / 2) > d) {
            // 衝突したら…、
            object1.status = "dead";        // 弾を、破棄

            // ★無敵設定更新箇所
            if (muteki == true) {
                check = false;              // 当たってない事にする
                // object2.status           // 物は、そのまま（更新しない）
            } else {
                check = true;               // 当たった
                object2.status = "dead";    // 物を、破棄
            }
        }
    }

    return check;
}

// ■■■ 文字描画の簡易化関数 ■■■
function drawText(
    text,
    x, y,
    size,
    color,
    align = "center",
    base = "middle"
) {

    let font = "Arial Black";
    let str = text;

    if (text[0] == "0") {
        font = "sans-serif";
        str = String.fromCodePoint(text);
    }
    context.font = `${size}px ${font}`;
    context.fillStyle = color;
    context.textAlign = align;
    context.textBaseline = base;
    context.fillText(str, x, y);
}