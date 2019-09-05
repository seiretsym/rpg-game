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
console.log(job1);
console.log(characters);

for (var i = 0; i < 4; i++) {
    $("#jobImg"+(i+1)).attr("src", characters[i].img);
    $("#hp"+(i+1)).html(characters[i].hp);
    $("#jobName"+(i+1)).html(characters[i].name);
    $("#atk"+(i+1)).html(characters[i].atk);
}


/// functions

/// events