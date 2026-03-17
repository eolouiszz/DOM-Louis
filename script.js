let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let btn4 = document.getElementById("btn4");
let text4 = document.getElementById("text4");
let img = document.getElementById("img");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let text5 = document.getElementById("text5");
let btn7 = document.getElementById("btn7");
let text6 = document.getElementById("text6");
let btn8 = document.getElementById("btn8");
let text7 = document.getElementById('text7');
let text8 = document.getElementById("text8");
let text9 = document.getElementById("text9")
let text10 = document.getElementById("text10")

btn1.addEventListener("click", function () {
    text.textContent = "Era uma vez uma menina chamada Chapeuzinho Vermelho...";
});

btn2.addEventListener("click", function () {
    text2.textContent = "Era uma vez um lobo chamado Lobo Pau...";
});

btn3.addEventListener("click", function () {
    text3.textContent = "Era uma vez um arquivo chamado Epsdiddy...";
});

btn4.addEventListener("click", function () {

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {

            text4.textContent = data.setup + " " + data.punchline;

        });

});

btn5.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            img.src = data.message;
        });
});

btn6.addEventListener("click", function () {

    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(res => res.json())
        .then(data => {
            text5.textContent = data.text;
        });

});

btn7.addEventListener('click', function() {
    let useragent = navigator.platform;
    text6.textContent = "seu sistema operacional é: " + useragent;
});

fetch('./dados.json')
  .then(response => response.json())
  .then(data => {
    text7.textContent = data.message;
  });

fetch('./dados2.json')
  .then(response => response.json())
  .then(data => {
    text8.textContent = data.message2
  })

fetch('./dados3.json')
  .then(response => response.json())
  .then(data => {
    text9.textContent = (data.message3)
  })





























const buscarDados = async () => {
  try {
    const response = await fetch("dados4.json");

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();
    text10.textContent = data.message4
    

  } catch (error) {
    console.error("Erro:", error);
  }
};

buscarDados();