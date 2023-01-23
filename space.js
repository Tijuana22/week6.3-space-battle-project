// create 6  alien battleships

// MAIN SHIP
class USS_Hunt {
    constructor(name, hull, firepower, accuracy){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    attack() {
        let r = Math.random()
        if(r < this.accuracy){
            invCount[0].hull -= this.firepower;
            alert('ATTACK SUCCESSFULL!');
            startGame();
        } else {
            alert("ATTACK FAILED!")
            startGame();
        }
    }
  }



// ALIEN SHIPS
class alienShip extends USS_Hunt{
    constructor(name, hull, firepower, accuracy){
        super(name, hull, firepower,accuracy)
        
    }
    alienAttack() {
        if (Math.random() < this.accuracy) {
            fighter.hull -= this.firepower;
            alert('YOUR SHIP HAS BEEN HIT!');
            startGame();
        } else {
            alert("GOTTA BE FASTER THAN THAT!");
            startGame();
        }

    }
}
// initialize variables before game starts

let fighter = new USS_Hunt("name", 20, 5, .7);
// make invCount a empty list
let invCount = []
// adds 6 ships to array
for(let i=0;i<6; i++){
    let hull = Math.floor(Math.random() * 4) + 3;
    let firepower = Math.floor(Math.random() * 3) + 2;
    let accuracy = (Math.floor(Math.random() * 3) + 6) /10;
    invCount.push(new alienShip("name", hull, firepower, accuracy))
};
console.log(fighter, invCount[0]);


// BATTLE
const engage =()=> {
    fighter.attack();
    if(invCount[0].hull >= 0){
        invCount[0].alienAttack();
        alert("This alien ship has attacked you");
        stat();
    }
    
}

    // CHECK STATUS
let stat =()=>{
    if(invCount.length > 0){                                                                                        
    alert(`Your status >>> HULL: ${fighter.hull} |FIREPOWER; ${fighter.firepower} | ACCURACY: ${fighter.accuracy}%\nAlien#${invCount.length} Status >>> HULL: ${invCount[0].hull} | FIREPOWER: ${invCount[0].firepower} | ACCURACY: ${invCount[0].accuracy}%`)
    }
}


const startGame = () => {
    // while the games still in play
    while(invCount.length > 0 && fighter.hull >0){
        console.log(invCount[0]);
        if (invCount[0].hull < 1 || fighter.hull <=0){
            invCount.shift();
            console.log(invCount.length);
            alert('You destroyed a alien ship')
            if (invCount.length <= 0 && fighter.hull > 0) {
                 alert(`YOU HAVE DEFEATED ALL ALIENS`)
                 return
            } else if(fighter.hull <= 0) {
                alert(`YOU LOSE!`)
                return 
            }
        } 

        
        let response = prompt(`Enter 'a' to play or 'r' to retreat`);
        if (response.toLowerCase()=== 'r'){
            alert("YOU LOSE!")
            
            return
        }else if(response.toLowerCase()=== 'a'){
            stat();
            engage()
        }else {
            alert("Try again!")
        }
        break
    }
}



    // INITIALIZE GAME
const init = ()=> {
    alert("SPACE BATTLE BEGINS!");
    let response = prompt(`Enter 'p' to play or 'q' to quit`);
    if (response.toLowerCase()==="q"){
        alert("Goodbye!")
    }else if (response.toLowerCase()=== "p"){
        alert("Earth has been attacked by aliens!\nYour mission as Captian of the USS HUNT is to save earth by destroying every last alien ship!\n\nGood Luck Captian!")
        // first start game here
        startGame();
    }else{
        alert("Try again!")
    }

}

window.onload =function(){
    setTimeout(init,1000);

}

init();