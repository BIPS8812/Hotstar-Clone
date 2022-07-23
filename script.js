let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Following the events of 'Avengers: Endgame', Sam Wilson and Bucky Barnes team up in a global adventure that test their abilities and patience.",
    image: "images/slider 2.PNG"
  },
  {
      name: "Loki",
      des: "The mercurial villian Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame.'",
      image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des: "Wanda Maximoff and Vision - two super-powered beings living idealized suburban lives - begin to suspect that everything is not as it seems.",
    image: "images/slider 3.PNG"
  },
  {
    name: "Raya and the last dragon",
    des: "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    image: "images/slider 4.PNG"
  },
  {
    name: "Luca",
    des: "The movie is a coming-of-age-story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
    image: "images/slider 5.PNG"
  }
];


let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; //track the current slide

function createSlide() {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }



  // create DOM element
  let slide = document.createElement('div');
  var imageElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');


  imageElement.appendChild(document.createTextNode(''))
  h1.appendChild(document.createTextNode(movies[slideIndex].name))
  p.appendChild(document.createTextNode(movies[slideIndex].des))
  content.appendChild(h1)
  content.appendChild(p)
  slide.appendChild(content)
  slide.appendChild(imageElement)
  carousel.appendChild(slide)

  //setting images
  imageElement.src = movies[slideIndex].image
  slideIndex++

  //setting element classnames
  slide.className = 'slider'
  content.className = 'slide-content'
  h1.className = 'movie-title'
  p.className = 'movie-des'

  //pushing the slides;
  sliders.push(slide)


  //sliding effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`
  }
}

for (let i = 0; i < 3; i++) {
  createSlide()
}

setInterval(function () {
  createSlide()
}, 3000)


//video cards
let videoCards = document.querySelectorAll('.video-card')

videoCards.forEach(element => {
  element.addEventListener("mouseover", () => {
    let video = element.children[1]
    video.play()
  })

  element.addEventListener("mouseleave", () => {
    let video = element.children[1];
    video.pause()
  })
})

//card sliders
let cardContainer = document.querySelectorAll('.card-container')
let prebtns = document.querySelectorAll('.pre-btn')
let nxtbtns = document.querySelectorAll('.nxt-btn')

cardContainer.forEach((element,i) => {
  let containerWidth = element.getBoundingClientRect().width;

  nxtbtns[i].addEventListener("click", () => {
    element.scrollLeft += containerWidth - 200
  })

  prebtns[i].addEventListener("click", () => {
    element.scrollLeft -= containerWidth + 200
  })
})
