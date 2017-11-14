 var succesname = "<div class='alert alert-success' role='alert'> <strong>Cool!</strong> You have a nice name length</div>";
 var warningname = "<div class='alert alert-warning' role='alert'> <strong>Ops!</strong> You need A good name Length</div>";
 var succesname1 = "<div class='alert alert-success' role='alert'><strong>Cool!</strong> You have a nice Second name length</div>";
 var warningname1 = "<div class='alert alert-warning' role='alert'><strong>Ops!</strong> You need A good Second name Length</div>";
 var succesemail = "<div class='alert alert-success' role='alert'><strong>Cool!</strong> Your Email does Match</div>";
 var failemail = "<div class='alert alert-warning' role='alert'><strong>Ops!</strong> Your Email does NOT! Match </div>";
 var succespass = "<div class='alert alert-success' role='alert'><strong>Cool!</strong> Your Pass does Match</div>";
 var failpass = "<div class='alert alert-warning' role='alert'><strong>Ops!</strong> Your Pass does NOT! Match </div>";
 var succesage = "<div class='alert alert-success' role='alert'><strong>Cool!</strong> Your are allowed to enter</div>";
 var failage = "<div class='alert alert-warning' role='alert'><strong>Ops!</strong> Sorry Your are too Young </div>";



 function checkemail() {
     var email = document.getElementById("email").value;
     var emailconfirm = document.getElementById("emailconfirm").value;

     if (email === emailconfirm) {
         document.getElementById("emailplace").innerHTML = succesemail;
         document.getElementById("email").style.backgroundColor = "#A4CA86";
         document.getElementById("emailconfirm").style.backgroundColor = "#A4CA86";
     } else {
         document.getElementById("emailplace").innerHTML = failemail;
         document.getElementById("email").style.backgroundColor = "#B6AA73";
         document.getElementById("emailconfirm").style.backgroundColor = "#B6AA73";
     }
 }

 function checkpass() {
     var pass = document.getElementById("password").value;
     var passconfirm = document.getElementById("password1").value;

     if (pass === passconfirm) {
         document.getElementById("passplace").innerHTML = succespass;
         document.getElementById("password").style.backgroundColor = "#A4CA86";
         document.getElementById("password1").style.backgroundColor = "#A4CA86";
     } else {
         document.getElementById("passplace").innerHTML = failpass;
         document.getElementById("password").style.backgroundColor = "#B6AA73";
         document.getElementById("password1").style.backgroundColor = "#B6AA73";

     }
 }

 function checkage() {
     var age = document.getElementById("age").value;
     if (age >= 18) {
         document.getElementById("ageplace").innerHTML = succesage;
         document.getElementById("age").style.backgroundColor = "#A4CA86";
     } else {
         document.getElementById("ageplace").innerHTML = failage;
         document.getElementById("age").style.backgroundColor = "#B6AA73";

     }
 }



 function focusare(element) {
     var x = element.id;
     document.getElementById(x).style.backgroundColor = 'lightgrey';
     document.getElementById(x).style.fontWeight = 'bold';
     document.getElementById(x).style.backgroundPositionX = "left";

 }


 function namelength() {
     var namelen = document.getElementById("username").value;
     if (namelen.length < 3) {
         document.getElementById("names").innerHTML = warningname;
         document.getElementById("username").style.backgroundColor = "#B6AA73";

     } else {
         document.getElementById("names").innerHTML = succesname;
         document.getElementById("username").style.backgroundColor = "#A4CA86";
     }

 }

 function secondnamelength() {
     var namelen = document.getElementById("usersecondname").value;
     if (namelen.length < 3) {
         document.getElementById("names1").innerHTML = warningname1;
         document.getElementById("usersecondname").style.backgroundColor = "#B6AA73";
     } else {
         document.getElementById("names1").innerHTML = succesname1;
         document.getElementById("usersecondname").style.backgroundColor = "#A4CA86";
     }
 }