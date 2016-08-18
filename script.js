
// update output box
var updateOutput = function () {
    var cornerType = $("input:radio[name='corner-option']:checked").val();
    var red = $("#red-amount").val();
    var green = $("#green-amount").val();
    var blue = $("#blue-amount").val();
    var fontSize = $("#text-size").val();
    var buttonText = $("#button-text").val();
    var fancyButton = $("#fancy-button");
    fancyButton.css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
    fancyButton.css("font-size", fontSize + "px");
    fancyButton.text(buttonText);
    if (cornerType === "square") {
        fancyButton.css("border-radius", "0");
    } else if (cornerType === "rounded") {
        fancyButton.css("border-radius", "12px");
    } else {
        fancyButton.css("border-radius", "100%");
    }
    fancyButton.css("height", fancyButton.css("width"));
};

// when user clicks anywhere in body, update output
$("body").on("click", function () {
    updateOutput();
});

