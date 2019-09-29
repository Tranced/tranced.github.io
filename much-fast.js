const goFaster = document.getElementsByClassName('marquee')
const greetings = ['sup', 'kek', 'lel', 'howdy', 'swag']
for (const element of goFaster) {
  element.addEventListener('mouseover', function (e) {
    const randSeed = Math.random()
    element.style.animation = `marquee ${randSeed * 8}s linear infinite`
    const textToChange = element.childNodes[0]
    const newText = document.createTextNode(greetings[Math.floor(randSeed * greetings.length)])
    element.replaceChild(newText, textToChange)
  })
}
