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

var job1 = $("#job1");

/// global booleans
var characterSelected = false;
var enemySelected = false;

/// functions

// select a character
function selectCharacter(job) {
    console.log(job);
    // switch case instead of if
    switch (job) {
        case "Astrologian":
            moveCharacter("#job1", job);
            characterSelected = true;
            console.log(characterSelected);
            break;
        case "Bard":
            moveCharacter("#job2", job);
            characterSelected = true;
            break;
        case "Dragoon":
            moveCharacter("#job3", job);
            characterSelected = true;
            break;
        case "Paladin":
            moveCharacter("#job4", job);
            characterSelected = true;
            break;
    }
}

// select an enemy to battle
function selectEnemy(job) {
    console.log(job);
    // switch case instead of if
    switch (job) {
        case "Astrologian":
            moveEnemy("#job1", job);
            enemySelected = true;
            console.log(characterSelected);
            break;
        case "Bard":
            moveEnemy("#job2", job);
            enemySelected = true;
            break;
        case "Dragoon":
            moveEnemy("#job3", job);
            enemySelected = true;
            break;
        case "Paladin":
            moveEnemy("#job4", job);
            enemySelected = true;
            break;
    }
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
function moveEnemy(chr, name) {
    var clone = $(chr).clone();
    // hide job from character selection
    $(chr).addClass("invisible");
    // replace select button with class name from clone
    clone.find("button").replaceWith("<h3 class='text-warning'>" + name + "</h3>")
    // move selected character to your character slot
    clone.addClass("col-sm-12").removeClass("col-sm-3");
    $("#enemy").html(clone);
}

// plug in character information to html elements
function showCharacters() {
    for (var i = 0; i < 4; i++) {
        $("#jobImg"+(i+1)).attr("src", characters[i].img);
        $("#hp"+(i+1)).html(characters[i].hp);
        $("#jobName"+(i+1)).prepend("<button class='font-weight-bold text-light text-center p-1 w-100 rounded border-warning m-0 bg-secondary'>" + characters[i].name + "</div>");
        $("#atk"+(i+1)).html(characters[i].atk);
    }
}


function newGame() {
    // prompt user to select a character
    $("#info").html("Select your Job!")
    showCharacters();
}

/// events
newGame();

$(document).ready(function() {
    $("button").on("click", function() {
        // check if character is already selected
        if (!(characterSelected)) {
            selectCharacter(this.textContent);
        }
        else {
            if (!(enemySelected)) {
                selectEnemy(this.textContent);
            }
            else {
                $("#info").html("Defeat your current enemy first!")
            }
        }
    })
})