function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
facts = ["בגלל היעדר כוח הכבידה בחלל, כל אדם הופך גבוה יותר בכחמישה סנטימטרים (אבל זה נעלם כשחוזרים לכדור הארץ...)", "יום אחד על כוכב ונוס (שזה הזמן שלוקח לו להקיף את השמש), נמשך כמעט שנה על כדור הארץ","נוזל חופשי בחלל החיצון יקבל צורה כדורית","אי אפשר לגהק בחלל"]

file = getRandomInt(1, 8);
fact = facts[getRandomInt(0, facts.length)];
document.body.style.backgroundImage = "url('images/"+file.toString()+".jpg')";


document.getElementById("fact").innerHTML = fact