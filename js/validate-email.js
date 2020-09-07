function validateName() {
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        alert("Completează numele.");
        return false;

    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Introdu un nume valid!"); //Validation Message
        return false;
    }
    return true;
}

function validateNameTwo() {
    var name = document.getElementById('nameTwo').value;
    if (name.length == 0) {
        alert("Completează numele.");
        return false;

    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Introdu un nume valid!"); //Validation Message
        return false;
    }
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    if (phone.length == 0) {
        alert("Completează câmpul pentru numărul de telefon"); //Validation Message
        return false;
    }

    if (!phone.match(/^[0]?[789]\d{9}$/)) {
        alert("Introdu un număr valid de telefon!"); //Validation Message
        return false;
    }

    return true;

}

function validateEmail() {

    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert("Email nu poate fi un câmp vid."); //Validation Message
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Introdu adresa corectă de email!"); //Validation Message
        return false;

    }

    return true;

}

function validateForm() {
    if (!validateName() || !validateEmail()) {

    //   alert("Form not submitted");
      //Validation Message
      return false;
    }
    else {
        if(typeof sendMessage === "function"){
            sendMessage();
        }

        if(typeof sendOrder === "function"){
            sendOrder();
        }
      submitted=true;
      return true;
    }    
  }