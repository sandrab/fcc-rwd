/* Javascript for the Survey Form. */

"use strict";

function handleSurveyResult() {
    let allFields = [ 'name', 'e-mail', 'age', 'fav-colour', 'being', 'privacy', 'happiness', 'comments' ];
    let survey = document.forms["survey-form"];
    // -- Validate the form input. We can not rely on the HTML5 validation only because a vistor can turn that off.

    // ---- Required fields must be filled in.
    let requiredFields = [ 'name', 'e-mail', 'age', 'fav-colour', 'being', 'privacy', 'happiness' ];
    for (let field of requiredFields) {
        let value = survey[field].value;
        if (survey[field].type == 'checkbox') {
            value = survey[field].checked;
        }
        if ( ! value ) {
            alert("The required field " + field + " has no value.");
            return;
        }
    }

    /*
      We should do more validation here, like checking the format of the e-mail field or whether the 
      checkbox/select/radio values are one of the values offered. But since this project is not about js, we leave it for now.
    */
   
    // -- Get the thanks element and set its properties according to the survey answers filled in.
    let thanks = document.getElementById('thanks');

    // Add the favourite color and the type of being to the list of classes.
    thanks.className = survey['fav-colour'].value + " " + survey['being'].value;

    // Add the name and age to the contents.
    thanks.innerText = 'Thank you, ' + survey['name'].value + ' (' + survey['age'].value + ')!';

    // Make the element visible.
    thanks.style.visibility = "visible";
}
