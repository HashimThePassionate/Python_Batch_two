var id = (id) => document.getElementById(id);
// query Helper
var query = (query) => document.querySelectorAll(query);
// get all selections
var quiz = id('quiz');
var ques = id('heading');
var a = id('a_text');
var b = id('b_text');
var c = id('c_text');
var d = id('d_text');
var btn = id('submit');
var answer = query('.answer');
const quizApp = [
    {
        question:"Which languages runs in Browser?",
        a:"TypeScript",
        b:"Python",
        c:"JavaScript",
        d:"PHP",
        correct:"c"
    },
    {
        question:"In which year JavaScript launched?",
        a:"1995",
        b:"1996",
        c:"1997",
        d:"1994",
        correct:"a"
    },
    {
        question:"HTML Stand For?",
        a:"HyperText Link Language",
        b:"HyperText Multiple Language",
        c:"HyperText Machine Language",
        d:"HyperText Markup Language",
        correct:"d"
    },
    {
        question:"PHP Stand For?",
        a:"Hypertext Preprocessor",
        b:"HyperText Professor",
        c:"HyperText ProProgramming",
        d:"HyperText PostProcessor",
        correct:"a"
    },
];
var clear = () => {
    for (let i = 0; i < answer.length; i++) {
        answer[i].checked = false;
    }
};
var checked = () => {
    var ans;
    for (let i = 0; i < answer.length; i++)
    {
        if(answer[i].checked)
        {
            ans = answer[i].id;
        }
    }
    return ans;
};
var initialScore = 0;
var initialQuiz = 0;
var loadQuiz = () => {
    clear();
    var quizData = quizApp[initialQuiz];
    ques.innerText=quizData.question;
    a.innerText = quizData.a;
    b.innerText = quizData.b;
    c.innerText = quizData.c;
    d.innerText = quizData.d;
};
loadQuiz();
btn.addEventListener('click',(e) => {
    const s = checked();
    if(s)
    {
        if(s === quizApp[initialQuiz].correct)
        initialScore++;
        initialQuiz++;
        if(initialQuiz < quizApp.length)
        {
            loadQuiz();
        }
        else
        {
            quiz.innerHTML=`<h2 style="color:blueviolet;font-size:20px;">Your Answer Score is ${initialScore}/${answer.length}</h2>
            <button style="background-color:blueviolet;color:white;padding: 10px 55px; border:none; cursor:pointer; margin-top:20px; border-radius:30px;" onclick="history.go(0)">Play Again</button>
            `;
        }
    }
    else
    {
        alert("Invalid")
    }
});