
// update output box
var updateOutput = function () {
    var cornerType = $("input:radio[name='corner-option']:checked").val();
    var redButton = $("#redbtn-amount").val() || 255;
    var greenButton = $("#greenbtn-amount").val() || 255;
    var blueButton = $("#bluebtn-amount").val() || 255;
    var redText = $("#redtxt-amount").val() || 0;
    var greenText = $("#greentxt-amount").val() || 0;
    var blueText = $("#bluetxt-amount").val() || 0;
    var fontSize = $("#text-size").val() || 20;
    var buttonText = $("#button-text").val()|| "Click Me";
    var fancyButton = $("#fancy-button");
    var buttonSize = $("#button-size").val() || "button-small";
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

updateOutput();

$("#output").text($("button")[0].outerHTML);