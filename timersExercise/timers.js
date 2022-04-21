function countdown(sec){
    let timer = setInterval(function(){
        sec --;
        if (sec <1){ 
        clearInterval(timer); console.log("DONE!")}
        else{
        console.log(`${sec} seconds left.`)}
    },1000)

}

function randomGame(){
    let tries = 0;
    let winner = setInterval(function(){
        tries ++;
        let num = Math.random();
        if (num > .75){
            clearInterval(winner); console.log (`Game Over, it took ${tries} tries.`)
        } 
    },1000)
}