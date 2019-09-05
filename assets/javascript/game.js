///// begin game code

/// variables
// store character information in an object array
var characters = [
    {
        name: "Astrologian",
        hp: 140,
        atk: 8,
        counter: 9,
        img: "assets/images/ffxiv_ast.png"
    },
    {
        name: "Bard",
        hp: 120,
        atk: 10,
        counter: 10,
        img: "assets/images/ffxiv_brd.png"
    },
    {
        name: "Dragoon",
        hp: 100,
        atk: 12,
        counter: 11,
        img: "assets/images/ffxiv_drg.png"
    },
    {
        name: "Paladin",
        hp: 160,
        atk: 6,
        counter: 8,
        img: "assets/images/ffxiv_pld.png"
    }
];

/// global stats
var charHP = 0,
    charATK = 0,
    charJob = "",
    enemyHP = 0,
    enemyATK = 0,
    enemyJob = "";

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
    clone.find("span").addClass("ehp");
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
        $(".ehp").html = enemyHP;

        // take damage from enemy counter
        charHP -= enemyATK;
        $("#hp1").html(charHP);

        // then update character ATK value
        charATK += characters[0].atk;
        $("#atk1").html(charATK);
    }
    else if (charJob === "Bard") {
        // attack enemy first to reduce hp
        enemyHP -= charATK;
        $(".ehp").html = enemyHP;

        // take damage from enemy counter
        charHP -= enemyATK;
        $("#hp2").html(charHP);

        // then update character ATK value
        charATK += characters[1].atk;
        $("#atk2").html(charATK);
    }
    else if (charJob === "Dragoon") {
        // attack enemy first to reduce hp
        enemyHP -= charATK;
        $(".ehp").html = enemyHP;

        // take damage from enemy counter
        charHP -= enemyATK;
        $("#hp3").html(charHP);

        // then update character ATK value
        charATK += characters[2].atk;
        $("#atk3").html(charATK);
    }
    else if (charJob === "Paladin") {
        // attack enemy first to reduce hp
        enemyHP -= charATK;
        $(".ehp").html = enemyHP;


        // take damage from enemy counter
        charHP -= enemyATK;
        $("#hp4").html(charHP);

        // then update character ATK value
        charATK += characters[3].atk;
        $("#atk4").html(charATK);
    }
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