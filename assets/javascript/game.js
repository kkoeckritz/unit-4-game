var chosen = {
    hero: {
        id: "hero",
        name: "HERO",
        hp: 100,
        ap: 2,
        cap: 1
    },
    defender: {
        id: "defender",
        name: "DEFENDER",
        hp: 999,
        ap: 2,
        cap: 1
    }
}

var character = {
    dennis: {
        id: "dennis",
        name: "Dennis Reynolds",
        hp: 100,
        ap: 10,
        cap: 12
    },
    dee: {
        id: "dee",
        name: "Dee Reynolds",
        hp: 100,
        ap: 10,
        cap: 12
    },
    mac: {
        id: "mac",
        name: "Mac",
        hp: 100,
        ap: 10,
        cap: 12
    },
    charlie: {
        id: "charlie",
        name: "Charlie Kelly",
        hp: 100,
        ap: 10,
        cap: 12
    },
    frank: {
        id: "frank",
        name: "Frank Reynolds",
        hp: 100,
        ap: 10,
        cap: 12
    }
}

var game = {
    initDivs: function(which) {
        // 0: add all character divs
        if (which == 0) {
            for (var person in character) {
                $("<div/>", {
                    id: character[person].id,
                    class: "char_div char_unselected"
                }).appendTo("#g_chars");
                $("#" + character[person].id).html(character[person].id);
            }
            console.log("characters initialized.")
        }
        // 1: add hero div
        else if (which == 1) {
            $("<div/>", {
                id: "hero",
                class: "char_div hero_div"
            }).appendTo("#g_hero");
            $("#hero").html(chosen.hero.name);
        }
        // 2: add defender div
        else if (which == 2) {
            $("<div/>", {
                id: "defender",
                class: "char_div defender_div"
            }).appendTo("#g_defender");
            $("#defender").html(chosen.defender.name);
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

            // relocate char divs to proper places
            // $(this).detach().appendTo("#g_hero");
            $(this).detach().hide(1000);
            game.initDivs(1);
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

            // relocate defender div
            $(this).detach().hide(1000);
            game.initDivs(2);
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
    game.initDivs(0);
    setTimeout(function() {
        game.playGame();
    }, 100);
})





/*
NOTES:
------
- use .show / .hide

*/