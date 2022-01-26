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
    return false;
}

function create_random_queue(min, max){
    var queue = [];
    for (var i = min; i <= max; i++){
        queue.push(i);
    }
    queue.sort(() => Math.random() - 0.5);
    return queue;
}
//get fact and background
facts = get_facts();
var fileQueue;
var factQueue;
if (get_cookie("factqueue") == false){
    factQueue = create_random_queue(0, facts.length - 1);
}
else{
    factQueueString = get_cookie("factqueue");
    console.log(factQueueString);
    factQueue = factQueueString.split(' ');
    console.log(factQueue)
}
if (get_cookie("backgroundqueue") == false){
    fileQueue = create_random_queue(1, 16);
}
else{
    fileQueueString = get_cookie("backgroundqueue");
    fileQueue = fileQueueString.split(' ');
}
fact = facts[factQueue.shift().toString()];
fileIndex = fileQueue.shift();

//load fact and background
document.body.style.backgroundImage = "url('images/"+fileIndex+".jpeg')";
document.getElementById("fact").innerHTML = fact

//save cookies for last fact and last background
document.cookie = `factqueue=${factQueue.join(' ')}`;
document.cookie = `backgroundqueue=${fileQueue.join(' ')}`