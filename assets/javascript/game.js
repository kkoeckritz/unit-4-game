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

            // clear target parent div first
            $("#g_chars").html("");

            // fill with character data
            for (var person in character) {
                $("<div/>", {
                    id: character[person].id,
                    class: "char_div char_unselected"
                }).appendTo("#g_chars");
                $("#" + character[person].id)
                .append("<p>" + character[person].id + "</p>")
                .append("<p>[img]</p>")
                .append("<p>" + character[person].hp + "</p>");
            }
            console.log("characters initialized.")
        }
        // 1: add hero div
        else if (which == 1) {

            // clear target parent div first
            $("#g_hero").html("");

            // show hero data            
            $("<div/>", {
                id: "hero",
                class: "char_div hero_div"
            }).appendTo("#g_hero");
            $("#hero")
            .append("<p>" + chosen.hero.name + "</p>")
            .append("<p>[img]</p>")
            .append("<p class=\"g_hero_hp\">" + chosen.hero.hp + "</p>");
        }
        // 2: add defender div
        else if (which == 2) {

            // clear target parent div first
            $("#g_defender").html("");

            // show defender data               
            $("<div/>", {
                id: "defender",
                class: "char_div defender_div"
            }).appendTo("#g_defender");
            $("#defender")
            .append("<p>" + chosen.defender.name + "</p>")
            .append("<p>[hero]</p>")
            .append("<p class=\"g_defender_hp\">" + chosen.defender.hp + "</p>");
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

            // relocate chosen char (as hero)
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

            // relocate chosen char (as defender)
            $(this).detach().hide(1000);
            game.initDivs(2);
            $(this).removeClass("char_unselected");

            // kill listener
            $(".char_unselected").off("click.defender_select");
        });
    },
    doBattle: function() {
        console.log("FIGHT: " + chosen.hero.name + " vs " + chosen.defender.name);
        var won = false;

            // when user clicks Attack button
            $("#g_attack").on("click.attack", function() {

                // if hero is dead, kill listener and quit
                if (chosen.hero.hp < 0) {
                    $("#g_attack").off("click.attack");
                }



                // adjust health/attack points, redisplay them
                chosen.defender.hp -= chosen.hero.ap;
                chosen.hero.hp -= chosen.defender.cap;
                game.initDivs(1);
                game.initDivs(2);

                console.log("hero hp: " + chosen.hero.hp);
                console.log("def hp: " + chosen.defender.hp);


            })
            console.log(chosen.hero.id + " is triumphant. You win!");

            // kill listener
            // $("#g_attack").off("click.attack");
            // console.log(chosen.hero.id + " died. Try again.");
            // break;
    },
    playGame: function() {
        this.chooseHero();
        $(document).one("click.hero_select", function() {
            game.chooseDefender();
            $(document).one("click.defender_select", function() {
                game.doBattle();
            });
        });
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