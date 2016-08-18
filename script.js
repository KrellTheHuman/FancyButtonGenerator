
// update output box
var updateOutput = function () {
    var cornerType = $("input:radio[name='corner-option']:checked").val();
    var redButton = $("#redbtn-amount").val();
    var greenButton = $("#greenbtn-amount").val();
    var blueButton = $("#bluebtn-amount").val();
    var redText = $("#redtxt-amount").val();
    var greenText = $("#greentxt-amount").val();
    var blueText = $("#bluetxt-amount").val();
    var fontSize = $("#text-size").val();
    var buttonText = $("#button-text").val();
    var fancyButton = $("#fancy-button");
    var buttonSize = $("#button-size").val();
    fancyButton.css("background-color", "rgb(" + redButton + ", " + greenButton + ", " + blueButton + ")");
    fancyButton.css("color", "rgb(" + redText + ", " + greenText + ", " + blueText + ")");
    fancyButton.css("font-size", fontSize + "px");
    fancyButton.text(buttonText);
    if (buttonSize === "button-small") {
        fancyButton.css("padding", "5px");
    } else if (buttonSize === "button-med") {
        fancyButton.css("padding", "15px");
    } else {
        fancyButton.css("padding", "30px");
    }
    if (cornerType === "square") {
        fancyButton.css("border-radius", "0");
        fancyButton.css("height", "auto");
    } else if (cornerType === "rounded") {
        fancyButton.css("border-radius", "12px");
        fancyButton.css("height", "auto");
    } else {
        fancyButton.css("border-radius", "100%");
        fancyButton.css("height", fancyButton.css("width"));
    }
};

// when user clicks anywhere in body, update output
$("body").on("change", function () {
    updateOutput();
});

