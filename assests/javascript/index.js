const questions = [

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "G", "Go"],
        answer: "Au"
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "Which famous playwright wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "Arthur Miller", "Tennessee Williams", "George Bernard Shaw"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the capital city of France?",
        options: ["Paris", "Rome", "Madrid", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Who painted the famous artwork 'The Last Supper'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which country is known as the 'Land Down Under'?",
        options: ["Australia", "Canada", "Brazil", "New Zealand"],
        answer: "Australia"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mercury", "Venus", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which famous scientist is known for the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["United States", "China", "Brazil", "Russia"],
        answer: "Brazil"
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Java"],
        answer: "Java"
    },
    {
        question: "What is the result of the expression '2' + 2?",
        options: ["22", "4", "NaN", "Error"],
        answer: "22"
    },
    {
        question: "Which method is used to add elements to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "How do you remove an element from an array at a specific index?",
        options: ["splice(index, 1)", "slice(index, 1)", "remove(index)", "delete(index)"],
        answer: "splice(index, 1)"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the output of the following code snippet?\nvar x = 10 + '1';\nconsole.log(x);",
        options: ["101", "11", "10", "Error"],
        answer: "101"
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        options: ["myVariable", "_variable", "123variable", "$variable"],
        answer: "123variable"
    },
    {
        question: "How do you access the value of a specific property in an object?",
        options: ["object.propertyName", "object['propertyName']", "Both a and b", "None of the above"],
        answer: "Both a and b"
    },
    {
        question: "What is the output of the following code snippet?\nvar myArray = [1, 2, 3];\nconsole.log(myArray.length);",
        options: ["3", "4", "Undefined", "Error"],
        answer: "3"
    },
    {
        question: "What is the correct way to check if a variable is an array in JavaScript?",
        options: ["typeof myArray === 'array'", "myArray.isArray()", "Array.isArray(myArray)", "All of the above"],
        answer: "Array.isArray(myArray)"
    },
    {
        question: "What is the output of the following code snippet?\nconsole.log(typeof NaN);",
        options: ["Number", "NaN", "String", "Error"],
        answer: "Number"
    },
    {
        question: "Which method is used to convert a JavaScript object to a JSON string?",
        options: ["JSON.stringify()", "JSON.parse()", "objectToString()", "stringifyJSON()"],
        answer: "JSON.stringify()"
    },
    {
        question: "What is the output of the following code snippet?\nvar fruits = ['apple', 'banana', 'orange'];\nfruits.push('grape');\nconsole.log(fruits.length);",
        options: ["3", "4", "5", "Error"],
        answer: "4"
    },
    {
        question: "What is the result of the following expression?\nnull == undefined",
        options: ["true", "false", "undefined", "Error"],
        answer: "true"
    },
    {
        question: "Which of the following is not a comparison operator in JavaScript?",
        options: ["===", "<>", "<=", ">="],
        answer: "<>"
    },
    {
        question: "What is the output of the following code snippet?\nconsole.log(2 ** 3);",
        options: ["2", "8", "6", "Error"],
        answer: "8"
    },
    {
        question: "What is the output of the following code snippet?\nconsole.log(typeof []);",
        options: ["Array", "Object", "undefined", "Error"],
        answer: "Object"
    },
    {
        question: "Which method returns a new array with the elements that pass a test condition in JavaScript?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        answer: "filter()"
    },
    {
        question: "What is the output of the following code snippet?\nvar myObject = { name: 'John', age: 30 };\nconsole.log(Object.keys(myObject));",
        options: ["['name', 'age']", "['John', 30]", "['name', 'age', 'John', 30]", "Error"],
        answer: "['name', 'age']"
    }
];
let questionelement = document.querySelector("#id_question")
let btn = document.querySelectorAll(".btn")
let nextButton = document.getElementById("next_btn")
let current_ques_index = 0;
let score = 0
let count = 0
let userAnswer =""
 
//   function startquiz(){
//     current_ques_index=0
//     score=0;
//     questionelement.innerHTML=questions[0].question
//     next_btn.innerHtml ="next"
//     showques();              
//   }
const loadquestion = () => {
    questionelement.innerText = questions[count].question;
    ;
    // console.log(btn)
    btn?.forEach((e, i) => {
        e.innerText = questions[count].options[i]
    })
    // answer[0]=qdata.options[0];
    // answer[1]=qdata.options[1];
    // answer[2]=qdata.options[2];
    // answer[3]=qdata.options[3];


};
nextButton.addEventListener('click', ()=>{
    scored()
    count++
    loadquestion();

    console.log(score)
})
function get(text){
userAnswer= text;
}
function scored(){
    userAnswer==questions[count].answer && score++
    document.querySelector(".score_value").innerText=score
}
loadquestion();
//  function random(){
//     let x = Math.floor((Math.random() * 10) + 1);

//  }