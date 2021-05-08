//$(".todosubmit").click(function(){
   // $("todosubmit").click(function(){  
function validateLogin() {
    var mailField = document.getElementById("inputEmail4").value;
  var pwdField = document.getElementById("psw-input").value;
    return getErrorlabel(mailField,pwdField,readLogindetails);  
}
   function getErrorlabel(mailField,pwdField,callback) {          
    var emailerr = document.getElementById("emailerror");
    var pwderr = document.getElementById("pwderror");
    //readInput(mailField,pwdField,emailerr,pwderr);   
    alert("getErrorlabel");
    return callback(mailField,pwdField,emailerr,pwderr); 
    }    
  //});

  function readLogindetails(mailField,pwdField,emailerr,pwderr){
    //var emailerr = document.getElementById("emailerror");
    //var pwderr = document.getElementById("pwderror");
    if(mailField == "admin"&&pwdField == 12345) {
        // checked
        //location.replace("todoapplist.html");
        alert("true-both are correct");
        return true;
    }
    else if (mailField == ""||mailField != "admin") {
        emailerr.innerHTML = "Invalid";
        emailerr.style.color = "Red";
        //alert("false-mail is incorrect");
        //return false;
    //}
     if (pwdField == ""||pwdField != 12345) {
        pwderr.innerHTML = "Invalid";
        pwderr.style.color = "Red";
        alert("false-pwd is incorrect");
        return false;
    }
        return false;
    }

    else{
        return false;
    }
  }


//   var mailField = document.getElementById("inputEmail4").value;
//   var pwdField = document.getElementById("psw-input").value;
  //getErrorlabel(mailField,pwdField,readInput);

//}
 // }
 
