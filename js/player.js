let player;


function Player(classType, health, mana, strength, agility, speed)
{

    // samo svojstva player

    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;

}

let PlayerMoves = {

    calcAttack: function(){

        // tko napada prvi
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
   
 
        // igrac napada

    let playerAttack = function(){
        let calcBaseDmg;

        if(player.mana > 0)

        { 
            calcBaseDmg = player.strength * player.mana / 1000;

        }

        else{

            calcBaseDmg = player.strength * player.agility / 1000;

        }

        let offsetDmg = Math.floor(Math.random() * Math.floor(10));

        let calcoutpDmg = calcBaseDmg + offsetDmg
        // neizmjenicni broj koji udara protivnika

        let brojudaraca = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;

        let attackVal = [calcoutpDmg, brojudaraca];

        return attackVal;

    }

    let enemyAttack = function(){
        let calcBaseDmg;

        if(enemy.mana > 0)

        { 
            calcBaseDmg = enemy.strength * enemy.mana / 1000;

        }

        else{

            calcBaseDmg = enemy.strength * enemy.agility / 1000;

        }

        let offsetDmg = Math.floor(Math.random() * Math.floor(10));

        let calcoutpDmg = calcBaseDmg + offsetDmg
        // neizmjenicni broj koji udara protivnika

        let brojudaraca = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;

        let attackVal = [calcoutpDmg, brojudaraca];

        return attackVal;

    }

    let getPlayerHealth = document.querySelector(".health-player");

    let getEnemyHealth = document.querySelector(".health-enemy");

    // inicira napad tko je brzi

    if(getPlayerSpeed >= getEnemySpeed)
    {
        let playerAttackValues = playerAttack();
        let totalDmg = playerAttackValues[0] * playerAttackValues[1];

        enemy.health = enemy.health - totalDmg;

        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times");

        if(enemy.health <= 0)
        {
            alert("You won! Refresh to play again");
            getPlayerHealth.innerHTML = "Health: " + player.health;
            getEnemyHealth.innerHTML = "Health: 0";

        }
        else
        {

            getEnemyHealth.innerHTML = "Health: " + enemy.health;
        
            // protivnik napada

            let enemyAttackVal = enemyAttack();

            let totalDmg = enemyAttackVal[0] * enemyAttackVal[1];

            player.health = player.health - totalDmg;

        alert("Enemy hit " + enemyAttackVal[0] + " damage " + enemyAttackVal[1] + " times");

        if(player.health <= 0)
        {
            alert("You lost! Refresh to play again");
            getPlayerHealth.innerHTML = "Health: 0";
            getEnemyHealth.innerHTML = "Health: " + enemy.health;

        }
        else{

            getPlayerHealth.innerHTML = "Health " + player.health;

        }

    }
    }

    else if(getEnemySpeed >= getPlayerSpeed)
    {
        let enemyAttackVal = enemyAttack();
        let totalDmg = enemyAttackVal[0] * enemyAttackVal[1];

        player.health = enemy.health - totalDmg;

        alert("Enemy hit " + enemyAttackVal[0] + " damage " + enemyAttackVal[1] + " times");

        if(player.health <= 0)
        {
            alert("You lose! Refresh to play again");
            getEnemyHealth.innerHTML = "Health: " + enemy.health;
            getPlayerHealth.innerHTML = "Health: 0";

        }
        else
        {

            getPlayerHealth.innerHTML = "Health: " + player.health;
        
            // igrac napada

            let playerAttackValues = playerAttack();

            let totalDmg = playerAttackValues[0] * playerAttackValues[1];

            enemy.health = enemy.health - totalDmg;

        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times");

        if(enemy.health <= 0)
        {
            alert("You won! Refresh to play again");
            getEnemyHealth.innerHTML = "Health: 0";
            getPlayerHealth.innerHTML = "Health: " + player.health;

        }
        else{

            getEnemyHealth.innerHTML = "Health " + enemy.health;

        }

    }
    }


    }
}

