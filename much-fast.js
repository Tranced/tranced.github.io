let goFaster = document.getElementsByClassName('marquee');
let greetings = ["sup", "kek", "lel", "howdy", "swag"];
let doge = document.getElementsByClassName('doge-face');
for (let element of goFaster){
    element.addEventListener('mouseover', function(e){
        let randSeed = Math.random();
        element.style.animation = `marquee ${randSeed*8}s linear infinite`;
        let textToChange = element.childNodes[0];
        let newText = document.createTextNode(greetings[Math.floor(randSeed*greetings.length)]);
        element.replaceChild(newText, textToChange);
    })
}