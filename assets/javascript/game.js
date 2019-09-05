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
            // move selected character to your character slot
            $("#you").html($("#job1").clone());
            break;
        case "Bard":
            // move selected character to your character slot
            $("#you").html($("#job2").clone());
            break;
        case "Dragoon":
            // move selected character to your character slot
            $("#you").html($("#job3").clone());
            break;
        case "Paladin":
            // move selected character to your character slot
            $("#you").html($("#job4").clone());
            break;
    }
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
    showCharacters();
}

/// events
newGame();

$(document).ready(function() {
    $("button").on("click", function() {
        selectCharacter(this.textContent);
    })
})