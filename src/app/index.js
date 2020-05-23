const button1 = document.getElementById("test_button1");
button1.addEventListener("click", (e) => {
  document.getElementById(e.target.id).innerText = "ボタン押下後";
});
