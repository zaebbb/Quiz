const quiazData = [
    {
        question: "Какой тег используется для автоматического переноса текста если ширина его блока закончилась?",
        a: "span",
        b: "a",
        c: "p",
        d: "input",
        correct: "c"
    }, {
        question: "В какой тег оборачивается ссылка?",
        a: "h1",
        b: "a",
        c: "p",
        d: "textarea",
        correct: "b"
    }, {
        question: "В какой тег оборачивается текст формы?",
        a: "ul",
        b: "a",
        c: "li",
        d: "input",
        correct: "d"
    }, {
        question: "В какой тег оборачивается картинки с форматом подходящим ко всем утройствам?",
        a: "div",
        b: "a",
        c: "svg",
        d: "input",
        correct: "c"
    }, {
        question: "В какой селектор оборачивает наведение на определенный блок?",
        a: "hover",
        b: "after",
        c: "textarea",
        d: "before",
        correct: "a"
    },
    {
        question: "Как обозначается CSS селектор тела структуры сайта?",
        a: "head",
        b: "body",
        c: "div",
        d: "*",
        correct: "b"
    }, {
        question: "Как называется самый популяный редактор как для сайтов так и для всего?",
        a: "Figma",
        b: "Photoshop",
        c: "CorelDRAW",
        d: "GIMP",
        correct: "b"
    }, {
        question: "В какой селектор оборачивается контент селектора перед его появлением?",
        a: "before",
        b: "focus",
        c: "after",
        d: "active",
        correct: "c"
    }, {
        question: "Какая версия у html формата документов актуальна?",
        a: "HTML4",
        b: "HTML",
        c: "XML",
        d: "HTML5",
        correct: "d"
    }, {
        question: "С помощью какого тега можно загрузить на один HTML документ другой?",
        a: "iframe",
        b: "nav",
        c: "svg",
        d: "hr",
        correct: "a"
    }
];
let currentQuestions = document.getElementById("currentQuestions");

const answerE1s = document.querySelectorAll(".answer");

const quiz = document.getElementById("quiz");

const questionE1 = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sumbitBtn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;
let currentQuizcurr = 1;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quiazData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestions.textContent = `${currentQuizcurr}/${quiazData.length}`

}

function getSelected(){

    let answer = undefined;

    answerE1s.forEach(answerE1 => {
        if(answerE1.checked){
            answer =  answerE1.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerE1s.forEach(answerE1 => {
        answerE1.checked = false;
    });
}

sumbitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer){
        if(answer === quiazData[currentQuiz].correct){
            score++;
        }

        currentQuestions.textContent = `${currentQuizcurr}/${quiazData.length}`

        currentQuizcurr++;
        currentQuiz++;

        if(currentQuiz < quiazData.length)  {     
            loadQuiz();
        } else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quiazData.length} questions.</h2>

                <button onclick="location.reload();">Again</button>`
        }
    }
});