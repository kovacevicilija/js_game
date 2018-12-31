// objekti sto ce se desiti u igri 

let GameManager = 
{
    // name: function()
    // {
    //     player = new Player()

         // dodali mu vrijednost
         // unutar gamemanagera

    // }

    // game start metoda

    // classtype na kojeg se igraca odnosi

    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
        
        

        // pozivamo druge dvije metode unutar ove
    },

    resetPlayer: function(classType){
        switch (classType) {

                
                case "Warrior":
                player = new Player(classType, 209, 0, 180, 110, 90)
                break;
        
                case "Rouge":
                player = new Player(classType, 100, 0, 110, 150, 200)
                break;

                case "Healer":
                player = new Player(classType, 100, 0, 110, 150, 200)
                break;

                case "Hunter":
                player = new Player(classType, 90, 0, 130, 90, 190)
                break;

                
        }

        let getInterface = document.querySelector(".interface");

        getInterface.innerHTML = '<img src="img/avatar-player/'+ classType.toLowerCase() +'.png" class="img-avatar"><div><h3>'+ classType +'</h3><p class="health-player">Health: '+ player.health +'</p><p>Mana: '+ player.mana + '</p><p>Strenght: '+ player.strength + '</p><p>Agility: '+ player.agility + '</p><p>Speed: '+ player.speed +'</p></div>';

        
    },

    setPreFight: function(){
        

        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for battle</a>';

        getArena.style.visibility = 'visible';

    },

    setFight: function(){

        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        // enemy

        let enemy0 = new Enemy('Sharpe', 186, 0, 105, 100, 150)
        let enemy1 = new Enemy('Letleo', 139, 0, 80, 80, 130);
        let chooseRandEnem = Math.floor(Math.random() * Math.floor(2));

        switch(chooseRandEnem){ 
                 
            case 0:
            enemy = enemy0;
            break;

            case 1:
            enemy = enemy1;
            break;


        }

        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';

        getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strenght: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }







}