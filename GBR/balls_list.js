//this is the output of the recommended ball
var display = "";

//keep track of which question you are on
var questionNum = 1;

//log the user response into an Array
var response = [];



const questions = [
    ["How straight are your tee shots?", ["Draw",1], ["Straight",10], ["Fade",1],["Unsure",5]],
    ["What is your usual trajectory?", ["High",5], ["Medium",20],["Low",20]],
    ["What is more important to you?", ["Price",1], ["Performance",40]],
    ["How many rounds of golf do you play each year?", ["Less than 5",1], ["5 - 20",10],["20+",20]],
    ["What is more important to you?", ["Distance",3], ["Feel / Spin",10]],
    ["What is your gender?", ["Male",3], ["Female",7], ["Other",7]],
    ["Does color matter?", ["Always White",3], ["Any Color",10]],
    ["What is your handicap?", ["<10",1], ["10-20",5],["20+",10],["UNSURE",20]],

]

var difference = 0;
var likelyBall = "None";

function recommendBall2() {
    var likelyBallDiff = 100000;
    var accuracy = response[1];
    var trajectory = response[2];
    var price_performance = response[3];
    var rounds = response[4];
    var distance_feel = response[5];
    var gender = response[6]
    var color = response[7];
    var age = response[8];

    
    for (let i = 0; i < balls.length; i++) {
                difference += Math.pow(Math.abs(balls[i][1] - accuracy),2);
                difference += Math.pow(Math.abs(balls[i][2] - trajectory),2);
                difference += Math.pow(Math.abs(balls[i][3] - price_performance),2);
                difference += Math.pow(Math.abs(balls[i][4] - rounds),2);
                difference += Math.pow(Math.abs(balls[i][5] - distance_feel),2);
                difference += Math.pow(Math.abs(balls[i][6] - gender),2);
                difference += Math.pow(Math.abs(balls[i][7] - color),2);
                difference += Math.pow(Math.abs(balls[i][8] - age),2);
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
    document.getElementById("ball").innerHTML = likelyBall;
    //loop through the BallInfo list and display when the ball matches
    for(let i = 0; i < ballInfo.length; i++)
        if(likelyBall == ballInfo[i][0]){
        document.getElementById("description").innerHTML = ballInfo[i][1];
        document.getElementById("ballImg").src = ballInfo[i][2];

        }
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
   

// [Ball Name, Accuracy, Trajectory, Price/Performance, Rounds, Distance/Feel, Gender, Color, Age]
// values align with the radio button values, abs difference squared calculates similarity
const balls = [
    ["Nike",1,30,11,1,3,3,3,3,[]],
    ["Cut",5,24,5,1,3,3,3,3],
    ["Titleist",10,55,2,100,3,3,3,3],
    ["Callaway",11,25,3,100,3,3,3,3],
    ["Bridgestone",10,53,3,100,3,3,3,3],
    ["Taylormade",8,16,10,100,3,3,3,3],
]
//Name, Description, Link
const ballInfo = [
 ["Nike", "This is a great ball, you'll love it", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Two_golf_balls.jpg"],
 ["Cut", "This is a great ball, you'll love it", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Two_golf_balls.jpg"],
 ["Titleist", "This is a great ball, you'll love it", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Two_golf_balls.jpg"],
 ["Callaway", "This is a great ball, you'll love it", "httTps://upload.wikimedia.org/wikipedia/commons/c/c8/Two_golf_balls.jpg"],
 ["Bridgestone", "This is a great ball, you'll love it", "httTps://upload.wikimedia.org/wikipedia/commons/c/c8/Two_golf_balls.jpg"],
 ["Taylormade", "This is a great ball, you'll love it", "httTps://upload.wikimedia.org/wikipedia/commons/c/c8/Two_golf_balls.jpg"]

]
