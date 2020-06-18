function validateForm() {
    var x = document.forms["contact_form"]["fname"]["lname"]["email"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}
