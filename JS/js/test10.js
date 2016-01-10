/**
 * 
 */
function formValidate () {
    var correct = true,
        inputs = document.getElementsByTagName('input'),
        length = inputs.length;
    for (i = 0; i < length; i++){
        if (!(inputs[i].value) || inputs[i].value == 'fill in the field') {
            inputs[i].value = 'fill in the field';
            inputs[i].style.backgroundColor = 'red';
            correct = false;
        }
    }
    if (!correct) {
        return false
    } else {
        return true;
    }
}

function DropDownChanged(countries) {
    var oTextbox = countries.form.elements["countries"];
    if (oTextbox) {
        oTextbox.style.display = (countries.value == "") ? "" : "none";
        if (countries.value == "")
            oTextbox.focus();
    }
}

/*var input = document.createElement("input");
input.setAttribute("type", "hidden");

input.setAttribute("name", "otherCountry");

input.setAttribute("value", "other");
document.getElementById("other").innerHTML.appendChild(input);*/
/*var other = document.getElementById('select').lastChild.innerHTML;
document.write(other);*/