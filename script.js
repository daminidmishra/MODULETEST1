

var compcounter = 0;
const userScore_span = document.getElementById("usercounter");
const compScore_span = document.getElementById("compcounter");
const scoreBoard_div = document.querySelector(".scoreboard"); 
const middle_div = document.querySelector(".middle");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
var userScore = localStorage.getItem("User") || 0;
document.getElementById("usercounter").innerText = userScore;
var compScore = localStorage.getItem("Computer") || 0;
document.getElementById("compcounter").innerText = compScore;

function getComputerChoice(){
    const choices = ['rock' , 'paper', 'scissor'];
    const randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win(){
    userScore++;
    localStorage.setItem("User", `${userScore}`);
    document.getElementById("usercounter").innerText = `${userScore}`;
        
}

function lose(){
    compScore++;
    compScore_span.innerHTML = compScore;
    localStorage.setItem("Computer", `${compScore}`);
}

function draw(){

}

function game(userChoice){
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor": document.getElementById("middle").innerHTML =`
        <div class="result">
                <div class="box1">
                    <h2 class="text">YOU PICKED</h2>
                    <div class="outercircle">
                        <div class="middlecircle">
                            <div class="innercircle">
                                <button class="option" id="winnerrock"> <img src="rock.png"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box2">
                    <h1>YOU WIN</h1>
                    <h2>AGAINST PC</h2> <br>  <br>
                    <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a> 
                </div>
                <div class="box3">
                    <h2 class="text1">PC PICKED</h2>
                    <button class="option" id="loserscissor" onclick="game()"> <img src="scissor.png"></button>
                </div>  
                <a href=win.html><button class="next">NEXT</button></a> 
            </div>
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Rock wins");
            win();
            break;    
        case "paperrock": document.getElementById("middle").innerHTML =`
        <div class="result">
            <div class="box1">
                <h2 class="text">YOU PICKED</h2>
                <div class="outercircle">
                    <div class="middlecircle">
                        <div class="innercircle">
                            <button class="option" id="winnerpaper" onclick="game()"> <img src="paper.png"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box2">
                <h1>YOU WIN</h1>
                <h2>AGAINST PC</h2> <br>  <br>
                <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a>
            </div>
            <div class="box3">
                <h2 class="text1">PC PICKED</h2>
                <button class="option" id="loserrock" onclick="game()"> <img src="rock.png"></button>
            </div>  
            <a href="win.html"><button class="next">NEXT</button> </a>
        </div>
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Paper wins");
            win();
            break;     
        case "scissorpaper": document.getElementById("middle").innerHTML =`
        <div class="result">
            <div class="box1">
                <h2 class="text">YOU PICKED</h2>
                <div class="outercircle">
                    <div class="middlecircle">
                        <div class="innercircle">
                            <button class="option" id="winnerscissor" onclick="game()"> <img src="scissor.png"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box2">
                <h1>YOU WIN</h1>
                <h2>AGAINST PC</h2> <br>  <br>
                <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a>
            </div>
            <div class="box3">
                <h2 class="text1">PC PICKED</h2>
                <button class="option" id="loserpaper" onclick="game()"> <img src="paper.png"></button>
            </div>  
            <a href="win.html"><button class="next">NEXT</button> </a>
        </div>
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Scissor wins");
            win();
            break;
        case "rockpaper": document.getElementById("middle").innerHTML =`
        <div class="result">
                <div class="box1">
                    <h2 class="text2">YOU PICKED</h2>
                    <button class="option" id="loserrock" onclick="game()"> <img src="rock.png"></button>
                </div>
                <div class="box2">
                    <h1>YOU LOSE</h1>
                    <h2>AGAINST PC</h2> <br>  <br>
                    <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a> 
                </div>
                <div class="box3">
                    <h2 class="text3">PC PICKED</h2>
                    <div class="outercircle">
                        <div class="middlecircle">
                            <div class="innercircle">
                                <button class="option" id="winnerscissor" onclick="game()"> <img src="paper.png"></button>                              
                            </div>
                        </div>
                    </div>
                    
                </div>  
                
        </div>
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Rock loses");
            lose();
            break;    
        case "scissorrock": document.getElementById("middle").innerHTML =`
        <div class="result">
                <div class="box1">
                    <h2 class="text2">YOU PICKED</h2>
                    <button class="option" id="loserscissor" onclick="game()"> <img src="scissor.png"></button>
                </div>
                <div class="box2">
                    <h1>YOU LOSE</h1>
                    <h2>AGAINST PC</h2> <br>  <br>
                    <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a> 
                </div>
                <div class="box3">
                    <h2 class="text3">PC PICKED</h2>
                    <div class="outercircle">
                        <div class="middlecircle">
                            <div class="innercircle">
                                <button class="option" id="winnerrock" onclick="game()"> <img src="rock.png"></button>                              
                            </div>
                        </div>
                    </div>
                    
                </div>  
                
        </div>
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Scissor loses");
            lose();
            break;
        case "paperscissor": document.getElementById("middle").innerHTML =`
        <div class="result">
                <div class="box1">
                    <h2 class="text2">YOU PICKED</h2>
                    <button class="option" id="loserpaper" onclick="game()"> <img src="rock.png"></button>
                </div>
                <div class="box2">
                    <h1>YOU LOSE</h1>
                    <h2>AGAINST PC</h2> <br>  <br>
                    <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a> 
                </div>
                <div class="box3">
                    <h2 class="text3">PC PICKED</h2>
                    <div class="outercircle">
                        <div class="middlecircle">
                            <div class="innercircle">
                                <button class="option" id="winnerscissor" onclick="game()"> <img src="scissor.png"></button>                              
                            </div>
                        </div>
                    </div>
                    
                </div>  
                
        </div>
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("paper loses");               
            lose();
            break;
        case "rockrock": document.getElementById("middle").innerHTML =`
        <div class="result">
                <div class="box1">
                    <h2 class="text2">YOU PICKED</h2>
                    <button class="option" id="tierock" onclick="game()"> <img src="rock.png"></button>
                </div>
                <div class="box2">
                    <h1>TIE UP</h1>
                    
                    <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a> 
                </div>
                <div class="box3">
                    <h2 class="text1">PC PICKED</h2>
                    <button class="option" id="tierock" onclick="game()"> <img src="rock.png"></button>                     
                </div>                  
        </div>        
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Rock draws");
            draw();
            break;    
        case "paperpaper": document.getElementById("middle").innerHTML =`
        <div class="result">
                <div class="box1">
                    <h2 class="text2">YOU PICKED</h2>
                    <button class="option" id="tiepaper" onclick="game()"> <img src="paper.png"></button>
                </div>
                <div class="box2">
                    <h1>TIE UP</h1>
                    
                    <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a> 
                </div>
                <div class="box3">
                    <h2 class="text1">PC PICKED</h2>
                    <button class="option" id="tiepaper" onclick="game()"> <img src="paper.png"></button>                     
                </div>                  
           
        </div>
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Paper draws");
            draw();
            break;
        case "scissorscissor": document.getElementById("middle").innerHTML =`
        <div class="result">
                <div class="box1">
                    <h2 class="text2">YOU PICKED</h2>
                    <button class="option" id="tiescissor" onclick="game()"> <img src="scissor.png"></button>
                </div>
                <div class="box2">
                    <h1>TIE UP</h1>
                    
                    <a href="index.html"><button class="playagain" >PLAY AGAIN</button> </a> 
                </div>
                <div class="box3">
                    <h2 class="text1">PC PICKED</h2>
                    <button class="option" id="tiescissor" onclick="game()"> <img src="scissor.png"></button>                     
                </div>                  
        </div>            
        <button id="rulepopup" onclick="openRules()">RULES</button>`;
            console.log("Scissor draws");
            draw();
            break;
            
    }
    
}



function main(){

    rock_div.addEventListener('click', function(){
        game("rock");
        
    })

    paper_div.addEventListener('click', function(){
        game("paper");
    })

    scissor_div.addEventListener('click', function(){
        game("scissor");
    })

}

main();

function closeRules(){
    document.getElementById("rules").innerHTML = '';
}

function openRules(){
    document.getElementById("footer").innerHTML = `
    <div id="rules">
                <div id="instructions">
                    <h1 class="gamerules">GAME RULES</h1>
                    <ul class="ruleslist">
                        <li class="r1">Rock beats scissors, scissors beat paper, and paper beats rock.</li><br>
                        <li class="r1">Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”</li><br>
                        <li class="r1">Use rock, paper, scissors to settle minor decisions or simply play to pass the time</li><br>
                        <li class="r1">If both players lay down the same hand, each player lays down another hand</li>
                    </ul>
                    <button class="x" onclick="closeRules()"><img class="x2" src="X.png"></button>
                </div>
                
            </div>`;
}

function againGame(){
    localStorage.setItem("Computer", "0");
    localStorage.setItem("User", "0");
}