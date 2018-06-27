var character = {
    // Character: function(hero) {
    //     this.name = hero.name;
    //     this.hp = hero.hp;
    //     this.ap = hero.ap;
    //     this.cap = hero.cap;
    // },
    hero: {
        name: "HERO",
        hp: 100,
        ap: 2,
        cap: 1
    },
    defender: {
        name: "DEFENDER",
        hp: 999,
        ap: 2,
        cap: 1
    },
    dennis: {
        name: "Dennis Reynolds",
        hp: 100,
        ap: 10,
        cap: 12
    },
    dee: {
        name: "Dee Reynolds",
        hp: 100,
        ap: 10,
        cap: 12
    },
    mac: {
        name: "Mac",
        hp: 100,
        ap: 10,
        cap: 12
    },
    charlie: {
        name: "Charlie Kelly",
        hp: 100,
        ap: 10,
        cap: 12
    },
    frank: {
        name: "Frank Reynolds",
        hp: 100,
        ap: 10,
        cap: 12
    }
}

var game = {
    initGame: function() {

    },
    chooseHero: function() {
        // listen for clicked character div
        $(".char_unselected").on("click.hero_select", function() {
            var char_id = $(this).attr("id");

            console.log("hero: " + char_id);

            // set hero's properties to those of chosen character
            for (var property in character.hero) {
                character.hero[property] = character[char_id][property];
            }
            console.log(character.hero);

            // relocate char divs to proper places
            $(this).detach().appendTo("#g_hero");
            $(this).removeClass("char_unselected");
            $(".char_unselected").detach().appendTo("#g_enemies");

            // kill listener
            $(".char_unselected").off("click.hero_select");
        });
    },
    chooseDefender: function() {
        // listen to remaining unselected divs for click
        $(".char_unselected").on("click.defender_select", function() {
            var char_id = $(this).attr("id");

            console.log("defender: " + char_id);

            // set defender's properties to those of chosen character
            for (var property in character.defender) {
                character.defender[property] = character[char_id][property];
            }
            console.log(character.defender);

            // relocate defender div
            $(this).detach().appendTo("#g_defender");
            $(this).removeClass("char_unselected");

            // kill listener
            $(".char_unselected").off("click.defender_select");
        });
    },
    doBattle: function() {

    },
    playGame: function() {
        this.chooseHero();
        this.chooseDefender();
    }
}

$().ready(function() {
    // game.initGame();
    game.playGame();
})

/*
NOTES:
______

- use .show / .hide

*/