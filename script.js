function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function get_facts(){
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'facts.fact', false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    console.log(result);
    return result
}

facts = get_facts();

file = getRandomInt(1, 8);
fact = facts[getRandomInt(0, facts.length)];
document.body.style.backgroundImage = "url('images/"+file.toString()+".jpg')";


document.getElementById("fact").innerHTML = fact
