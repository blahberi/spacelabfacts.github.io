function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function get_facts(){
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'https://blahberi.github.io/spacelabfacts.github.io/facts.fact', false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result.split("\r\n");
}

function get_cookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ') { 
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
}

//get fact and background
console.log(get_cookie("lastbackground"));
console.log(get_cookie("lastfact"));
facts = get_facts();
fileIndex = 0
while (true){
    fileIndex = getRandomInt(1, 17);
    if (fileIndex != get_cookie("lastbackground")){
        break;
    }
}
while (true){
    factIndex = getRandomInt(0, facts.length);
    if (factIndex != get_cookie("lastfact")){
        break;
    }
}
fact = facts[factIndex];

//load fact and background
document.body.style.backgroundImage = "url('images/"+fileIndex.toString()+".jpeg')";
document.getElementById("fact").innerHTML = fact

//save cookies for last fact and last background
document.cookie = `lastfact=${factIndex}; lastbackground=${fileIndex}`;