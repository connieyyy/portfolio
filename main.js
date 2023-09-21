const displaytext = document.querySelector("#text");
const phrases = ['programmer', 'dreamer', 'student', 'environmentalist', 'researcher', 'community leader']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  displaytext.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      displaytext.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      displaytext.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()


gsap.utils.toArray(".slideText").forEach(text => {
    gsap.timeline({
      defaults: {ease: "none"},
      scrollTrigger: {
        scroller: text.closest(".languages"),
        horizontal: true,
        trigger: text.closest(".back-container"),
        start: "left right",
        end: "left left",
        scrub: true
      }
    })
    .fromTo(text, {x: 250}, {x: -100}, 0)
    .from(text.nextElementSibling, {scale: 0.8}, 0)
  });
  