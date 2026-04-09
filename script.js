const quizData = [
 {q:"Capitala Braziliei?", a:["Rio","Brasilia","Sao Paulo"], c:1},
 {q:"Cel mai mare fluviu?", a:["Nil","Amazon","Dunărea"], c:1},
 {q:"Festival celebru?", a:["Oktoberfest","Carnaval","Coachella"], c:1}
];

let current=0, score=0;

function startQuiz(){
 current=0;
 score=0;
 showQ();
}

function showQ(){
 const q=quizData[current];
 document.getElementById("q").innerText=q.q;

 let html="";
 q.a.forEach((ans,i)=>{
  html+=`<button onclick="answer(${i})">${ans}</button><br>`;
 });

 document.getElementById("answers").innerHTML=html;
}

function answer(i){
 if(i===quizData[current].c) score++;

 current++;

 if(current<quizData.length) showQ();
 else document.getElementById("score").innerText="Scor: "+score+"/3";
}