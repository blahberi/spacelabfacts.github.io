function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
facts = ["אמשך ככך שמנה שכדור הארץ לא מושך אותה היא מושכת אותו", "אמשך ככך מכוערת שאפילו חור שחור לא רוצה אותה"]

file = getRandomInt(1, 8);
fact = facts[getRandomInt(0, facts.length)];
document.body.style.backgroundImage = "url('images/"+file.toString()+".jpg')";


document.getElementById("fact").innerHTML = fact