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

var Game = {
    initGame: function() {

    },
    chooseHero: function() {
        // listen for clicked character div
        $(".char_div").on("click.char_div", function() {
            var char_id = $(this).attr("id");

            // set hero's properties to those of chosen character
            for (var property in character.hero) {
                character.hero[property] = character[char_id][property];
            }

            // move clicked char's div to g_hero

        });
        $(".char_div").off("click.char_div"); // kill listener
    },
    chooseEnemy: function() {

    },
    doBattle: function() {

    },
    playGame: function() {
        this.chooseHero;
    }
}

// game.initGame();
game.playGame();