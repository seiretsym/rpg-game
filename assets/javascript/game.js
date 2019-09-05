///// begin game code

/// variables
// store character information in an object array
var characters = [
    {
        name: "Astrologian",
        hp: 150,
        atk: 8,
        counter: 20,
        img: "assets/images/ffxiv_ast.png"
    },
    {
        name: "Bard",
        hp: 130,
        atk: 9,
        counter: 25,
        img: "assets/images/ffxiv_brd.png"
    },
    {
        name: "Dragoon",
        hp: 100,
        atk: 17,
        counter: 30,
        img: "assets/images/ffxiv_drg.png"
    },
    {
        name: "Paladin",
        hp: 180,
        atk: 7,
        counter: 15,
        img: "assets/images/ffxiv_pld.png"
    }
];

/// global stats
var charHP = 0,
    charATK = 0,
    charJob = "",
    enemyHP = 0,
    enemyATK = 0,
    enemyJob = "",
    opponents = 3;

/// global booleans
var characterSelected = false;
var enemySelected = false;

/// functions

// set character global stats
function setCharStats(job) {
    charHP = characters[job].hp;
    charATK = characters[job].atk;
    charJob = characters[job].name;
}

// set enemy global stats
function setEnemyStats(job) {
    enemyHP = characters[job].hp;
    enemyATK = characters[job].counter;
    enemyJob = characters[job].name;
}

// select a character
function selectCharacter(job) {
    console.log(job);
    // switch case instead of if
    switch (job) {
        case "Astrologian":
            moveCharacter("#job1", job);
            characterSelected = true;
            setCharStats(0);
            updateEnemyAtk("#atk2", 1);
            updateEnemyAtk("#atk3", 2);
            updateEnemyAtk("#atk4", 3);
            break;
        case "Bard":
            moveCharacter("#job2", job);
            characterSelected = true;
            setCharStats(1);
            updateEnemyAtk("#atk1", 0);
            updateEnemyAtk("#atk3", 2);
            updateEnemyAtk("#atk4", 3);
            break;
        case "Dragoon":
            moveCharacter("#job3", job);
            characterSelected = true;
            setCharStats(2);
            updateEnemyAtk("#atk1", 0);
            updateEnemyAtk("#atk2", 1);
            updateEnemyAtk("#atk4", 3);
            break;
        case "Paladin":
            moveCharacter("#job4", job);
            characterSelected = true;
            setCharStats(3);
            updateEnemyAtk("#atk1", 0);
            updateEnemyAtk("#atk2", 1);
            updateEnemyAtk("#atk3", 2);
            break;
    }
    changeInfo("Select your enemy!")
}

// select an enemy to battle
function selectEnemy(job) {
    console.log(job);
    // switch case instead of if
    switch (job) {
        case "Astrologian":
            moveEnemy("#job1", job, "#atk1");
            enemySelected = true;
            setEnemyStats(0);
            break;
        case "Bard":
            moveEnemy("#job2", job, "#atk2");
            enemySelected = true;
            setEnemyStats(1);
            break;
        case "Dragoon":
            moveEnemy("#job3", job, "#atk3");
            enemySelected = true;
            setEnemyStats(2);
            break;
        case "Paladin":
            moveEnemy("#job4", job, "#atk4");
            enemySelected = true;
            setEnemyStats(3);
            break;
    }
    changeInfo("Defeat your enemy!")
}

// function to move a selected character
function moveCharacter(chr, name) {
    var clone = $(chr).clone();
    // hide job from character selection
    $(chr).addClass("invisible");
    // replace select button with class name from clone
    clone.find("button").replaceWith("<h3 class='text-warning'>" + name + "</h3>")
    // move selected character to your character slot
    clone.addClass("col-sm-12").removeClass("col-sm-3");
    $("#you").html(clone);

}

// move a selected enemy
function moveEnemy(chr, name, atk) {
    var clone = $(chr).clone();
    // hide job from character selection
    $(chr).addClass("invisible");
    // replace select button with class name from clone
    clone.find("button").replaceWith("<h3 class='text-warning'>" + name + "</h3>")
    // move selected character to your character slot
    clone.addClass("col-sm-12").removeClass("col-sm-3");
    $("<button class='attack font-weight-bold text-light text-center p-1 w-100 rounded border-warning m-0 bg-secondary'>Attack</button>").insertAfter(clone.find(atk));
    $("#enemy").html(clone);
}

// change enemy atk values to counter values
function updateEnemyAtk(element, array) {
    $(element).html(characters[array].counter);
}

// plug in character information to html elements
function showCharacters() {
    for (var i = 0; i < 4; i++) {
        $("#jobImg"+(i+1)).attr("src", characters[i].img);
        $("#hp"+(i+1)).html(characters[i].hp);
        $("#jobName"+(i+1)).prepend("<button class='button font-weight-bold text-light text-center p-1 w-100 rounded border-warning m-0 bg-secondary'>" + characters[i].name + "</button>");
        $("#atk"+(i+1)).html(characters[i].atk);
    }
}


function newGame() {
    // prompt user to select a character
    changeInfo("Select your Job!");
    showCharacters();
}

function changeInfo(str) {
    $("#info").html(str);
}

function attackEnemy() {
    // update character atk value
    if (charJob === "Astrologian") {
        // attack enemy first to reduce hp
        enemyHP -= charATK;
        updateEnemyHp(enemyJob);

        // if enemy isn't dead then take damage from enemy counter
        if (isEnemyDefeated()) {
            clearEnemy();   
            // clear log;
            $("#log").html("<br><br>");         
        }
        else {
            charHP -= enemyATK;
            $("#hp1").html(charHP);
            combatLog();
        }

        // then update character ATK value
        charATK += characters[0].atk;
        $("#atk1").html(charATK);
    }
    else if (charJob === "Bard") {
        // attack enemy first to reduce hp
        enemyHP -= charATK;
        updateEnemyHp(enemyJob);

        // if enemy isn't dead then take damage from enemy counter
        if (isEnemyDefeated()) {
            clearEnemy();   
            // clear log;
            $("#log").empty();         
        }
        else {
            charHP -= enemyATK;
            $("#hp2").html(charHP);
            combatLog();
        }

        // then update character ATK value
        charATK += characters[1].atk;
        $("#atk2").html(charATK);
    }
    else if (charJob === "Dragoon") {
        // attack enemy first to reduce hp
        enemyHP -= charATK;
        updateEnemyHp(enemyJob);

        // if enemy isn't dead then take damage from enemy counter
        if (isEnemyDefeated()) {
            clearEnemy();
            // clear log;
            $("#log").empty();             
        }
        else {
            charHP -= enemyATK;
            $("#hp3").html(charHP);
            combatLog();
        }

        // then update character ATK value
        charATK += characters[2].atk;
        $("#atk3").html(charATK);
    }
    else if (charJob === "Paladin") {
        // attack enemy first to reduce hp
        enemyHP -= charATK;
        updateEnemyHp(enemyJob);

        // if enemy isn't dead then take damage from enemy counter
        if (isEnemyDefeated()) {
            clearEnemy();
            // clear log;
            $("#log").empty();            
        }
        else {
            charHP -= enemyATK;
            $("#hp4").html(charHP);
            combatLog();
        }

        // then update character ATK value
        charATK += characters[3].atk;
        $("#atk4").html(charATK);
    }
}

// update current enemy's hp after attacking
function updateEnemyHp(enemy) {
    switch (enemy) {
        case "Astrologian":
            $("#enemy").find("#hp1").html(enemyHP);
            break;
        case "Bard":
            $("#enemy").find("#hp2").html(enemyHP);
            break;
        case "Dragoon":
            $("#enemy").find("#hp3").html(enemyHP);
            break;
        case "Paladin":
            $("#enemy").find("#hp4").html(enemyHP);
            break;
    }
}

// check if enemy is defeated
function isEnemyDefeated() {
    if (enemyHP <= 0) {
        return true;
    }
    else {
        return false;
    }
}

// clear enemy grid to prepare for next opponent
function clearEnemy() {
    // disable enemy selected, so new enemy can be selected
    enemySelected = false;
    // empty grid
    $("#enemy").empty();
    // reduce remaining opponents
    opponents -= 1;
    // update info
    if (opponents < 1) {
        changeInfo("Congratulations! You've defeated all your opponents.")
    }
    else {
        changeInfo("You defeated " + enemyJob + "! Pick your next victim.");
    }
}

// combat log updates!
function combatLog() {
    // first clear log
    $("#log").empty();

    // then output damage done to enemy
    $("#log").html("You deal " + charATK + " points of damage to " + enemyJob + "!");

    // line break because it's cool
    $("#log").append("<br>");
    // then output damage taken
    $("#log").append(enemyJob + " counter attacks you for " + enemyATK + " points of damage!");
}

/// events
newGame();

$(document).ready(function() {
    $(".button").on("click", function() {
        // check if character is already selected
        if (!(characterSelected)) {
            selectCharacter(this.textContent);
        }
        else {
            if (!(enemySelected)) {
                selectEnemy(this.textContent);
            }
            else {
                changeInfo("Defeat your current enemy first!");
            }
        }
        // not sure why this only works when it's inside $(".button")
        $(".attack").on("click", function() {
            attackEnemy();
        })
    })

})