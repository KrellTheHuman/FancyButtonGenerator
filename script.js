
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

    $("#output").val(fancyButton[0].outerHTML);
};

// when user clicks anywhere in body, update output
$("body").on("change", function () {
    updateOutput();
});

var postMessage = function (msg) {
    var message = $("#message");
    message.text(msg);
    message.show();
    message.fadeOut(3000, function () {
        message.text("");
        message.show();
    });
};


$("#copy-to-clipboard").on("click", function () {
    var output = document.getElementById("output");
    output.focus();
    output.setSelectionRange(0, output.value.length);
    document.execCommand("copy");
    output.setSelectionRange();
    var outputBox = $("#output");
    outputBox.fadeOut(100);
    postMessage("Copied to Clipboard");
    outputBox.fadeIn(200);
});

updateOutput();
