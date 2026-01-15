let userscore=0;
let Compscore=0;
const choices= document.querySelectorAll(".choice");
const result= document.querySelector("#msg");

const getComputerchoice=()=>{
const options=["rock","paper","scissor"];
    const idx= Math.floor(Math.random()*3);
    return(options[idx]);
}
const showWinner=(userWin)=>{
  console.log(userWin);
if(userWin==true)
{
  result.innerText="You Win!!"
}
else{
  result.innerText="You loose!!"
}

}
const DrawGame=()=>{
result.innerText=" Game Draw,Try Again.";
}
 const PlayGame=(userchoice)=>{
    
    const computerchoice=getComputerchoice();
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
      showWinner(userWin)
      
    }
 }
choices.forEach((choice) => {
 


  choice.addEventListener("click", () => {
    const userchoice=choice.getAttribute("id");
    console.log("you choose=",userchoice);
    PlayGame(userchoice);
  });
});