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

/// functions

// select a character
function selectCharacter(job) {
    console.log(job);
    // switch case instead of if
    switch (job) {
        case "Astrologian":
            moveCharacter("#job1");
            break;
        case "Bard":
            moveCharacter("#job2");
            break;
        case "Dragoon":
            moveCharacter("#job3");
            break;
        case "Paladin":
            moveCharacter("#job4");
            break;
    }
}

// function to move a selected character
function moveCharacter(chr) {
    var clone = $(chr).clone();
    // hide job from character selection
    $(chr).addClass("d-none");
    // replace select button with class name from clone
    clone.find("button").remove();
    // move selected character to your character slot
    clone.addClass("col-sm-12").removeClass("col-sm-3");
    $("#you").html(clone);
}

// plug in character information to html elements
function showCharacters() {
    for (var i = 0; i < 4; i++) {
        $("#jobImg"+(i+1)).attr("src", characters[i].img);
        $("#hp"+(i+1)).html(characters[i].hp);
        $("#jobName"+(i+1)).html(characters[i].name);
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
        selectCharacter(this.textContent);
    })
})