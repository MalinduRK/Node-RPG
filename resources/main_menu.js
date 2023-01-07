$(function(){
    // Initialize player id for later use
    let player_id;
    //let socket = io("http://localhost:3000");
    var socket = io({
        transports: [
        ]
      });
      

    // Hide the cancel button until the player clicks on play
    $("#cancel-matchmaking").hide();

    // This code block looks for the player cookie and extracts the value
    let player;
    let name = "player=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        player = c.substring(name.length, c.length);
        }
    }
    $("#welcome-msg").text("Welcome "+player+"!");
    //

    $("#play").click(function(){
        // Disable play button if looking for a match
        $(this).prop('disabled', true);
        $("#welcome-msg").text("Searching for players...");
        $("#cancel-matchmaking").show();
        socket.emit("player waiting", player);

        // Add player to the waiting lobby
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/lobby",
            data: JSON.stringify({ "username": player }),
            contentType: "application/json",
            success: function (result) {
                console.log(result);
                player_id = result._id;
            },
            error: function (result, status) {
                console.log(result);
            }
        });
    });

    $("#cancel-matchmaking").click(function(){
        $("#play").prop('disabled', false);
        $("#welcome-msg").text("Welcome "+player+"!");
        $("#cancel-matchmaking").hide();
        socket.emit("player exited matchmaking", player);

        // Remove player from the waiting lobby
        $.ajax({
            type: "DELETE",
            url: "http://localhost:3000/api/lobby/"+player_id,
            success: function (result) {
                console.log(result);
            },
            error: function (result, status) {
                console.log(result);
            }
        });
    });
});