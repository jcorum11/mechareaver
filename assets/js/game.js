
/*
- after fighting a bot
    - will ask if they would like to go to shop
- need startGame() and 
- endGame() function if player has no more enemies or dies
    - alerts player total stats
    - asks player if they want to play again
    - if yes call startGame to restart the game
- if player skips or defeats an enemy with more robots to fight
    - ask player if they want to shop
    - if no continue as normal
    - if yes call the shop() function
    - in shop() ask player if they want to refill, upgrade, or leave
    - if refill, subtract money and increase health
    - if upgrade subtract money and increase attack
    - if invalid option call shop again
*/

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 20;
var playerAttack = 10;
var playerMoney = 10;

// // You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask user if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let user know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // pick new enemy to fight
            var pickedEnemyName = enemyNames[i];
            //reset enemy health
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // play again
    startGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();