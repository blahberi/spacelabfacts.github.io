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

facts = get_facts();

file = getRandomInt(1, 8);
fact = facts[getRandomInt(0, facts.length)];
document.body.style.backgroundImage = "url('images/"+file.toString()+".jpeg')";


document.getElementById("fact").innerHTML = fact
