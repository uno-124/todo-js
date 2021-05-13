import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  console.log(inputText);
};

// 追加ボタンをクリックされた時にonclickAdd()が呼ばれるようにする
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
