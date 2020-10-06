document.getElementById('emailForm').addEventListener('submit', saveEmailValues);

var mailTo = 'designer@tdsgraphics.co.za';
var mailPass = 'password';
var smtpServer = ' ';
var emailHost = ' ';

function saveEmailValues(e) {

    var firstName = document.getElementById('firstName').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var emailMessage = document.getElementById('emailMessage').value;

    var sendEmail = ` 
        About Email : ${emailSubject};
        Email from : ${emailAddress};
        Message : ${emailMessage};
        Sent by ${firstName};
    `;

    // show info to confirm
    alert(`THIS IS WHAT YOUR EMAIL LOOKS LIKE
    
        ${sendEmail}
    `);
}

var setEmailVars = {

    name : firstName,
    email : emailAddress,
    subject :emailSubject,
    message : emailMessage
    
}

