
// update output box
var updateOutput = function () {
    var cornerType = $("input:radio[name='corner-option']:checked").val();
    var red = $("#red-amount").val();
    var green = $("#green-amount").val();
    var blue = $("#blue-amount").val();
    var fontSize = $("#text-size").val();
    // $("#code-to-copy").html("Corner Type: " + cornerType + "<br/>Color: ");
    $("#fancy-button").css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
    $("#fancy-button").css("font-size", fontSize + "px");
};

// when user clicks anywhere in body, update output
$("body").on("click", function () {
    updateOutput();
});

