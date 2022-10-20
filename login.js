function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    // var submit=document.getElementById("Login");
    // var index=document.getElementsByClassName("index");
    // var dashboard= <a href="http://127.0.0.1:5500/Verification/dashboard.html"></a>;
    // var dashboard="http://127.0.0.1:5500/Verification/dashboard.html";
    if(username=="admin" && password=="1234")
    {
    //   open("dashboard.html");
    //   var dashboard=window.open("", "_self");
    //   dashboard.document.open("dashboard.html");
    window.open("dashboard.html", "_self");
//     window.location.href="http://127.0.0.1:5500/Verification/dashboard.html";
    }
    else{
        alert("Incorrect Username or Password");
    }
}
