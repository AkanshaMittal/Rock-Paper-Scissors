let userscore=0;
let Compscore=0;
const choices= document.querySelectorAll(".choice");
const result= document.querySelector("#msg");
const UserDisplayScore=document.querySelector('#user-score');
const CompDisplayScore=document.querySelector('#comp-score');


const getComputerchoice=()=>{
const options=["rock","paper","scissor"];
    const idx= Math.floor(Math.random()*3);
    return(options[idx]);
}
const showWinner=(userWin,userchoice,computerchoice)=>{
  console.log(userWin);
if(userWin==true)
{
  result.innerText=`your ${userchoice} wins from ${computerchoice}!!`;
 result.style.backgroundColor="green";
 userscore++;
 UserDisplayScore.innerText=userscore;
}
else{
  result.innerText=`your ${userchoice} defeats from ${computerchoice}!!`;
   result.style.backgroundColor="red";
   Compscore++;
 
 CompDisplayScore.innerText=Compscore
}

}
const DrawGame=()=>{
result.innerText="Game Draw,Try Again.";
result.style.backgroundColor="black";
}
 const PlayGame=(userchoice)=>{
    
    computerchoice=getComputerchoice();
    console.log("Computer choose=",computerchoice);
    if(userchoice===computerchoice){
      DrawGame();
    }
    else
    {
      let userWin=true;
      if(userchoice==="rock"){
        //computer choices left:scissor,paper
        userWin=computerchoice==="scissor"?true:false;
      }
        else if(userchoice==="paper"){
           //computer choices left:scissor,paper,rock
          userWin=computerchoice==="scissor"?false:true;
        }
        else{
          //computer choices left:,paper,rock
          userWin=computerchoice==="rock"?false:true;
        }
      showWinner(userWin,userchoice,computerchoice)
      
    }
 }
choices.forEach((choice) => {
 


  choice.addEventListener("click", () => {
    const userchoice=choice.getAttribute("id");
    console.log("you choose=",userchoice);
    PlayGame(userchoice);
  });
});