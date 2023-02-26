//this is the output of the recommended ball
var display = "";

//keep track of which question you are on
var questionNum = 1;

//log the user response into an Array
var response = [];

// [Ball Name, Accuracy, Age, Gender]
// values align with the radio button values, abs difference squared calculates similarity
const balls = [
    ["Nike",1,30,11],
    ["Cut",5,24,5],
    ["Titleist",10,55,2],
    ["Callaway",11,25,3],
    ["Bridgestone",10,53,3],
    ["Taylormade",8,16,10],
]

const questions = [
    ["What is your swing", ["hook",1], ["slice",10], ["slice",1]],
    ["What is your age", ["old",5], ["youn",20]],
    ["What is your gender", ["male",3], ["female",7]],
]

var difference = 0;
var likelyBall = "None";

function recommendBall2() {
    var likelyBallDiff = 100000;
    var accuracy = response[1];
    var age = response[2];
    var gender = response[3];
    
    for (let i = 0; i < balls.length; i++) {
                difference += Math.pow(Math.abs(balls[i][1] - accuracy),2);
                difference += Math.pow(Math.abs(balls[i][2] - age),2);
                difference += Math.pow(Math.abs(balls[i][3] - gender),2);
                if (difference < likelyBallDiff){
                    console.log(difference)
                    console.log(likelyBallDiff)
                    likelyBallDiff = difference;
                    likelyBall = balls[i][0];
                }
                difference = 0;
    }
    
    console.log(likelyBallDiff)
    document.getElementById("prompt").innerHTML = "we recommend:";
    document.getElementById("result").innerHTML = likelyBall;
}


window.onload = function iterator(){
    displayQuestions();    
}

function displayQuestions(value) {
    response.push(value)
    var foo = document.getElementById("questions");
    foo.innerHTML = "";
    q = questionNum - 1;
    console.log(response)
    if(questionNum > questions.length){
        recommendBall2();
        }
    else{
        for(let i = 1; i < questions[q].length; i++){
	    var element = document.createElement("BUTTON");
        element.setAttribute("type", "button");
        element.setAttribute("value", questions[q][i][1]);
        element.setAttribute("id", questions[q][i][0])
        element.setAttribute("class","button-56");
        element.onclick = function() {displayQuestions(questions[q][i][1]); };
        element.innerHTML = questions[q][i][0];
	    foo.appendChild(element);
        document.getElementById("prompt").innerHTML = questions[q][0];

    }
    questionNum ++; 
    }
}
   