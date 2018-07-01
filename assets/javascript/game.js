var chosen = {
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
    }
}

var character = {
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
        // give character divs values
        for (var i = 0; i < character.length; i++) {

        }
    },
    chooseHero: function() {
        // listen for clicked character div
        $(".char_unselected").one("click.hero_select", function() {
            var char_id = $(this).attr("id");

            console.log("hero: " + char_id);

            // set hero's properties to those of chosen character
            for (var property in chosen.hero) {
                chosen.hero[property] = character[char_id][property];
            }
            console.log(chosen.hero);

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
        $(".char_unselected").one("click.defender_select", function() {
            var char_id = $(this).attr("id");

            console.log("defender: " + char_id);

            // set defender's properties to those of chosen character
            for (var property in chosen.defender) {
                chosen.defender[property] = character[char_id][property];
            }
            console.log(chosen.defender);

            // relocate defender div
            $(this).detach().appendTo("#g_defender");
            $(this).removeClass("char_unselected");

            // kill listener
            $(".char_unselected").off("click.defender_select");
        });
    },
    doBattle: function() {
        console.log("FIGHT: " + chosen.hero.name + " vs " + chosen.defender.name);
    },
    playGame: function() {
        this.chooseHero();
        $(document).one('click.hero_select', function()  {
            game.chooseDefender();
        });

        // .then(this.doBattle)
        // .catch()
    }
}

$().ready(function() {
    game.initGame();
    setTimeout(function() {
        game.playGame();
    }, 100);
})





/*
NOTES:
------
- use .show / .hide

*/