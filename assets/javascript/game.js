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
        $(".char_button").on("click.char_button", function() {
            var char_id = $(this).attr("id");
            switch(char_id) {
                case "g_char1":
                    
            }
        });
    },
    chooseEnemy: function() {

    },
    doBattle: function() {

    },
    playGame: function() {

    }
}