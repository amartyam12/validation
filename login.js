function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="1234")
    {
        window.open("dashboard.html");

    }
    else{
        alert("Incorrect Username or Password");
        window.open("index.html");
    }
}