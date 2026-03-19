const $ = (id) => document.getElementById(id);

// textos
const text = $("text");
const text2 = $("text2");
const text3 = $("text3");
const text4 = $("text4");
const text5 = $("text5");
const text6 = $("text6");
const textEsp = $("textEsp");

// inputs
const input1 = $("input1");
const input2 = $("input2");

// lista
const lista = $("lista");
const error = $("error");

// img
const img = $("img");

// BOTÕES

$("btn1").onclick = () => {
  text.textContent = "Era uma vez uma menina chamada Chapeuzinho Vermelho...";
};

$("btn2").onclick = () => {
  text2.textContent = "Era uma vez um lobo suspeito...";
};

$("btn3").onclick = () => {
  text3.textContent = "Era uma vez um arquivo misterioso...";
};

$("btn4").onclick = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  text4.textContent = data.setup + " " + data.punchline;
};

$("btn5").onclick = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  img.src = data.message;
};

$("btn6").onclick = async () => {
  const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
  const data = await res.json();
  text5.textContent = data.text;
};

$("btn7").onclick = () => {
  text6.textContent = "Sistema: " + navigator.platform;
};

// ANALISADOR

$("analisador").onclick = () => {
  const valor = input1.value.trim();

  if (!valor) return textEsp.textContent = "Digite algo";
  if (valor.length < 3) return textEsp.textContent = "Muito curto";
  if (!/^[a-zA-ZÀ-ÿ]+$/.test(valor))
    return textEsp.textContent = "Apenas letras";

  textEsp.textContent = "Nome válido 👍";
};

// TODO LIST

$("btnEsp").onclick = () => {
  const valor = input2.value.trim();

  if (!valor) return;
  if (valor.length < 3) {
    error.textContent = "Muito curto";
    return;
  }

  error.textContent = "";

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = valor;

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "❌";
  btnDelete.classList.add("btnDelete");

  li.append(checkbox, span, btnDelete);

  checkbox.onchange = () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  };

  btnDelete.onclick = () => li.remove();

  lista.appendChild(li);
  input2.value = "";
};