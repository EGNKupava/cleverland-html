function checkForm() {
  let text = document.getElementsByTagName("p");
  let color = document.forms[0].color.value;
  let size = document.forms[0].size.value;
  let bgColor = document.forms[0].bgColor.value;

  for (let i = 0; i < text.length; i++) {
    text[i].style.color = color;
    text[i].style.fontSize = `${size}px`;
    document.body.style.background = bgColor;
  }
}

setInterval(checkForm, 50);
