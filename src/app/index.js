console.log("index.js を読み込んだ");

function common_track(e) {
  // target: イベントを発生させたオブジェクトへの参照
  console.log(e.target.id);
  console.log(e.target.className);
}

const button1 = document.getElementById("test_button1");
button1.addEventListener("click", (e) => {
  console.log("button1がクリックされました");
  document.getElementById(e.target.id).innerText = "ボタン押下後";
});
