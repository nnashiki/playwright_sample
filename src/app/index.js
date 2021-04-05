const button1 = document.getElementById("test_button1");
button1.addEventListener("click", (e) => {
  document.getElementById(e.target.id).innerText = "ボタン押下後";
  document.getElementById(e.target.id).className = "font-semibold rounded-lg shadow-md text-white bg-red-400";
});
