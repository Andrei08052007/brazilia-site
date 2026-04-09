const quizData = [
  {q:"Capitala Braziliei?", a:["Rio","Brasilia","Sao Paulo"], c:1},
  {q:"Cel mai mare fluviu?", a:["Nil","Amazon","Dunărea"], c:1},
  {q:"Festival celebru?", a:["Oktoberfest","Carnaval","Coachella"], c:1},
  {q:"Limba oficială a Braziliei?", a:["Portugheză","Spaniolă","Engleză"], c:0},
  {q:"Simbol celebru din Rio de Janeiro?", a:["Statua Libertății","Cristo Redentor","Turnul Eiffel"], c:1},
  {q:"Cel mai populat oraș?", a:["Rio de Janeiro","Sao Paulo","Brasilia"], c:1},
  {q:"Moneda Braziliei?", a:["Real","Dolar","Peso"], c:0},
  {q:"Sport popular?", a:["Fotbal","Baschet","Hochei"], c:0},
  {q:"Ocean la estul Braziliei?", a:["Atlantic","Pacific","Indian"], c:0},
  {q:"Cel mai mare parc național?", a:["Pantanal","Amazon","Chapada Diamantina"], c:1},
  {q:"Cea mai mare pădure tropicală?", a:["Amazon","Congo","Borneo"], c:0},
  {q:"Carnavalul de la Rio se ține în?", a:["Februarie","Iulie","Septembrie"], c:0},
  {q:"Cel mai mare oraș portuar?", a:["Salvador","Rio de Janeiro","Santos"], c:2},
  {q:"Cea mai mare insulă braziliană?", a:["Ilha de Marajó","Ilha Grande","Fernando de Noronha"], c:0},
  {q:"Brazilia este în ce continent?", a:["America de Nord","America de Sud","Africa"], c:1}
];

let current = 0, score = 0;

function startQuiz() {
  current = 0;
  score = 0;
  document.getElementById("score").innerText = "Scor: 0/" + quizData.length;

  // ascunde butonul Start
  document.getElementById("startBtn").style.display = "none";

  showQ();
}

function showQ() {
  const q = quizData[current];
  const qElem = document.getElementById("q");
  const ansElem = document.getElementById("answers");

  qElem.innerText = q.q;
  ansElem.innerHTML = "";

  q.a.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.style.margin = "5px";
    btn.onclick = () => answer(i, btn);
    ansElem.appendChild(btn);
  });
}

function answer(i, btn) {
  const correctIndex = quizData[current].c;
  const buttons = document.getElementById("answers").children;

  // colorează răspunsurile
  for (let b of buttons) b.disabled = true;

  if (i === correctIndex) {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    score++;
  } else {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    buttons[correctIndex].style.backgroundColor = "green";
    buttons[correctIndex].style.color = "white";
  }

  // actualizează scorul live
  document.getElementById("score").innerText = "Scor: " + score + "/" + quizData.length;

  // trece la următoarea întrebare după 1 sec
  setTimeout(() => {
    current++;
    if (current < quizData.length) {
      showQ();
    } else {
      document.getElementById("q").innerText = "Quiz terminat!";
      document.getElementById("answers").innerHTML = "";

      // arată din nou butonul Start pentru restart
      document.getElementById("startBtn").style.display = "inline-block";
      document.getElementById("startBtn").innerText = "Restart Quiz";
    }
  }, 1000);
}