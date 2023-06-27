function formular() {
    var formContainer = document.getElementById("formContainer");
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit");

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

    var ADD = document.createElement("input");
    ADD.setAttribute("type", "text");
    ADD.setAttribute("name", "address");
    ADD.setAttribute("placeholder", "Address");

    var TEL = document.createElement("input");
    TEL.setAttribute("type", "tel");
    TEL.setAttribute("name", "telefon");
    TEL.setAttribute("placeholder", "Phone number");

    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "email");
    EID.setAttribute("placeholder", "E-Mail ");

    var TIC = document.createElement("input");
    TIC.setAttribute("type", "text");
    TIC.setAttribute("name", "tickets");
    TIC.setAttribute("placeholder", "Number of tickets");

    var EXH = document.createElement("input");
    EXH.setAttribute("type", "text");
    EXH.setAttribute("name", "Exhibition nama");
    EXH.setAttribute("placeholder", "Exhibition name");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(FN);
    form.appendChild(document.createElement("br"));

    form.appendChild(TEL);
    form.appendChild(document.createElement("br"));

    form.appendChild(ADD);
    form.appendChild(document.createElement("br"));

    form.appendChild(EID);
    form.appendChild(document.createElement("br"));

    form.appendChild(TIC);
    form.appendChild(document.createElement("br"));

    form.appendChild(EXH);
    form.appendChild(document.createElement("br"));

    var chooseLanguageLabel = document.createElement("label");
    chooseLanguageLabel.innerHTML = "Choose Language:";
    form.appendChild(chooseLanguageLabel);
    form.appendChild(document.createElement("br"));

    var languages = ["English", "Spanish", "French", "Italian"];

    for (var i = 0; i < languages.length; i++) {
        var languageCheckbox = document.createElement("input");
        languageCheckbox.setAttribute("type", "radio");
        languageCheckbox.setAttribute("name", "languages");
        languageCheckbox.setAttribute("value", languages[i]);

        var label = document.createElement("label");
        label.innerHTML = languages[i];

        form.appendChild(languageCheckbox);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    }

    formContainer.innerHTML = '';
    formContainer.appendChild(form);

    form.appendChild(s);
    form.appendChild(document.createElement("br"));

    
    //regex
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var fullNameRegex = /^[A-Za-z\s]+$/;
        var addressRegex = /^[A-Za-z0-9\s]+$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var numberOfTicketsRegex = /^\d+$/;
        var phonenumberregex = /^\d{10}$/;
        

        if (!fullNameRegex.test(FN.value)) {
            alert("Please enter a valid full name.");
            return;
        }

        if (!addressRegex.test(ADD.value)) {
            alert("Please enter a valid address.");
            return;
        }

        if (!emailRegex.test(EID.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!numberOfTicketsRegex.test(TIC.value)) {
            alert("Please enter a valid number of tickets.");
            return;
        }
        if (!phonenumberregex.test(TEL.value)) {
            alert("Please enter a valid phone number.");
            return;
        }

        var languageRadios = document.getElementsByName("languages");
        var isLanguageSelected = false;

        for (var i = 0; i < languageRadios.length; i++) {
            if (languageRadios[i].checked) {
                isLanguageSelected = true;
                break;
            }
        }

        if (!isLanguageSelected) {
            alert("Please select a language.");
            return;
        }

        form.submit();

        alert("Form submitted successfully!");
    }); }



//mouse event 

window.onload = function () {
    var element = document.querySelector('.hover-effect');

    if (element) {
    element.addEventListener('mouseover', function () {
        element.classList.add('hover-effect');
    });

    element.addEventListener('mouseout', function () {
        element.classList.remove('hover-effect');
    });
    }



//keyboard + style+ interval+timeout +delete + math


    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    const welcomeText = document.getElementById("efect");
    const paragraph = document.getElementById("welcome");
    if (paragraph) {
    const parent = paragraph.parentNode;
    let isWelcomeTextVisible = true;
    originalStyle = welcomeText.style.cssText;
    let timeoutId = null;
    let intervalId = null;
    let colorCount = 0;

    document.addEventListener("keydown", function (event) {
        const key = event.key;

        switch (key) {
            case "r":
                welcomeText.style.color = "red";
                break;
            case "b":
                welcomeText.style.borderStyle = "dotted";
                welcomeText.style.borderColor = randomColor();
                welcomeText.style.color = "black";
                welcomeText.style.fontSize = "1.5em";
                break;
            case "a":
                welcomeText.style.color = randomColor();
                welcomeText.style.fontSize = "2em";
                welcomeText.borderStyle = "none";
                break;
            case "d":
                if (isWelcomeTextVisible) {
                    parent.removeChild(welcomeText);
                    isWelcomeTextVisible = false;
                }
                break;
            case "k":
                if (!isWelcomeTextVisible) {
                    parent.insertBefore(welcomeText, paragraph);
                    isWelcomeTextVisible = true;
                    welcomeText.style.borderStyle = "none";
                    welcomeText.style.color = "black";
                    welcomeText.style.fontSize = "1.5em";
                }
                break;
            case "y":
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                    sessionStorage.setItem("colorCount", colorCount);
                    displayColorCount();
                }
                welcomeText.style.cssText = originalStyle;
            
                break;
            case "t":
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                    sessionStorage.setItem("colorCount", colorCount);
                    displayColorCount();
                } else {
                    intervalId = setInterval(function () {
                        welcomeText.style.color = randomColor();
                        colorCount++;
                        displayColorCount();
                    }, 1000);
                }
                break;
            default:
                break;
        }
    });

    function displayColorCount() {
        const countElement = document.getElementById("colorCount");
        countElement.textContent = colorCount;
    }

    displayColorCount();
}
}
