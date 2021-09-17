const form = document.getElementById("form2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let elements = form.elements;
  let obj = {};
  for (let i = 0; i < elements.length; i++) {
    let item = elements.item(i);
    obj[item.name] = item.value;
  }
  console.log(obj);
});
