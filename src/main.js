import './style.css'

const image = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="header-brand">
      <a class="wordmark" href="#top" aria-label="Vindhriko C, home">
        <span class="wordmark-mark">VC</span>
        <span class="wordmark-name">Vindhriko C<small>Bachelor of Computer Science</small></span>
      </a>
      <nav class="header-contacts" aria-label="Contact links">
        <a href="mailto:busyVin238@gmail.com">busyVin238@gmail.com</a>
        <a href="https://www.linkedin.com/in/vindhriko-cain-245386390/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/VindhrikoC" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
      <span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="#work">Work <span>03</span></a>
      <a href="#about">About</a>
    </nav>
  </header>

  <main id="top">
    <section class="work-section page-gutter" id="work" aria-labelledby="work-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">A few things I've made or have helped work on</p>
          <h2 id="work-title">Personal/School Projects<span class="heading-period">.</span></h2>
        </div>
      </div>
      <div class="filters" role="group" aria-label="Filter projects">
        <button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">All <span>03</span></button>
        <button class="filter-button" type="button" data-filter="doggame" aria-pressed="false">Huskies In Space</button>
        <button class="filter-button" type="button" data-filter="ml" aria-pressed="false">Machine learning prediction model</button>
        <button class="filter-button" type="button" data-filter="foodapp" aria-pressed="false">Food App</button>
        <!-- <button class="filter-button" type="button" data-filter="example" aria-pressed="false">Example</button> -->
      </div>
      <div class="project-grid">
        <article class="project-card" data-category="doggame" data-description="The lead programmer working with a team of 7 people in a game development club to create a top down puzzle game inspired from the video game series portal using Godot.">
          <a class="project-image image-HuskiesInSpace" href="#project-detail" aria-label="View Huskies In Space project details">
            <img src="${image('HuskiesInSpace.png')}" alt="Huskies in space level 1 picture" loading="lazy" />
            <span class="image-label">01 / HUSKIES IN SPACE</span><span class="image-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="project-meta"><div><h3>Huskies In Space</h3><p>UWT gamedev project</p></div><span>(Oct 24 - Jun 25)</span></div>
        </article>
        <article class="project-card" data-category="ml" data-description="Worked in a group to create a prediction model using machine learning techniques, scikit-learn, linear regression, image preprocessing, and naive bayes.">
          <a class="project-image image-MachineLearning" href="#project-detail" aria-label="View Machine Learning project details">
            <img src="${image('machinelearning.png')}" alt="Machine learning project" loading="lazy" />
            <span class="image-label">02 / MACHINE LEARNING PREDITION MODEL</span><span class="image-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="project-meta"><div><h3>Machine learning prediction model</h3><p>UWT Machine learning project</p></div><span>(April - June 2025)</span></div>
        </article>
        <article class="project-card" data-category="foodapp" data-description="Personal project where users can upload macros they want to hit and a personalized meal plan is made based on user input using Copilot, Fast API, SQL, and Docker">
          <a class="project-image image-foodapp" href="#project-detail" aria-label="View Food App project details">
            <img src="${image('foodapp.png')}" alt="picture of the food app im currently working on" loading="lazy" />
            <span class="image-label">03 / FOOD APP</span><span class="image-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="project-meta"><div><h3>Food App</h3><p>Most recent personal project im working on</p></div><span>(Aug 26 - present)</span></div>
        </article>
        <!--
        <article class="project-card" data-category="example">
          <a class="project-image" href="#contact" aria-label="Ask about the Example project">
            <img src="${image('example-project.jpg')}" alt="Describe the project image" loading="lazy" />
            <span class="image-label">04 / EXAMPLE</span>
            <span class="image-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="project-meta">
            <div>
              <h3>Example project</h3>
              <p>A short description</p>
            </div>
            <span>2026</span>
          </div>
        </article>
        -->
      </div>
      <div class="project-detail" id="project-detail" aria-live="polite" hidden>
        <div class="project-detail-copy">
          <p class="eyebrow" data-detail-category></p>
          <h3 data-detail-title></h3>
          <p class="project-detail-year" data-detail-year></p>
          <p class="project-detail-description" data-detail-description></p>
        </div>
        <img class="project-detail-image" data-detail-image alt="" />
      </div>
      <p class="work-footnote"><span>More work is always in progress.</span></p>
    </section>

    <section class="about-section" id="about" aria-labelledby="about-title">
      <div class="about-inner page-gutter">
        <div class="about-photo">
          <img src="${image('uwnecoarcs.jpg')}" alt="Portrait of Vindhriko C" loading="lazy" />
        </div>
        <div class="about-copy">
          <h2 id="about-title">Bachelor of Computer Science</h2>
          <p class="about-description">Hello, my Name is Vindhriko, or Vin for short, I recently graduated earlier this year from UWT and I'm really excited to learn more about breaking into the tech field.
          Computer Science has always been a love of mine and ever since graduating I've only grown more fond of it, I love to learn, problem solve, and tackle the hardest of challenges, as thats what helps me learn
          the most. If I'm not working on a project, working on leetcode or codewars problems, or helping my family with whatever they need I'm working on my fitness or playing video games, and in every aspect I
          strive to learn more and more each day in the hopes of being better than I was a week ago, whether it be a new strategy for solving leetcodes, or a new technique to improve my aim. I'm addicted to learning and love every chance I can get to take a challenge face on.</p>
        </div>
      </div>
    </section>

    <footer class="site-footer page-gutter" id="contact">
      <span class="footer-label">Contact</span>
      <nav class="footer-contacts" aria-label="Contact links">
        <a href="mailto:busyVin238@gmail.com">busyVin238@gmail.com</a>
        <a href="https://www.linkedin.com/in/vindhriko-cain-245386390/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/VindhrikoC" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
      <span class="footer-legal">© <span data-year></span> Vindhriko C</span>
    </footer>
  </main>
`

const year = new Date().getFullYear()
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = year
})

const filterButtons = document.querySelectorAll('.filter-button')
const projectCards = document.querySelectorAll('.project-card')
const projectGrid = document.querySelector('.project-grid')
const projectDetail = document.querySelector('#project-detail')

const showProjectDetails = (card) => {
  filterButtons.forEach((button) => {
    const isSelected = button.dataset.filter === card.dataset.category
    button.classList.toggle('is-active', isSelected)
    button.setAttribute('aria-pressed', String(isSelected))
  })

  projectCards.forEach((projectCard) => {
    projectCard.hidden = projectCard !== card
  })

  projectGrid.hidden = true
  projectDetail.hidden = false
  projectDetail.querySelector('[data-detail-category]').textContent = card.dataset.category
  projectDetail.querySelector('[data-detail-title]').textContent = card.querySelector('.project-meta h3').textContent
  projectDetail.querySelector('[data-detail-year]').textContent = card.querySelector('.project-meta > span').textContent
  projectDetail.querySelector('[data-detail-description]').textContent = card.dataset.description

  const projectImage = card.querySelector('.project-image img')
  const detailImage = projectDetail.querySelector('[data-detail-image]')
  detailImage.src = projectImage.src
  detailImage.alt = projectImage.alt
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter

    if (selectedFilter === 'all') {
      filterButtons.forEach((filterButton) => {
        const isSelected = filterButton === button
        filterButton.classList.toggle('is-active', isSelected)
        filterButton.setAttribute('aria-pressed', String(isSelected))
      })
      projectCards.forEach((card) => {
        card.hidden = false
      })
      projectGrid.hidden = false
      projectDetail.hidden = true
      return
    }

    const selectedCard = [...projectCards].find((card) => card.dataset.category === selectedFilter)
    if (selectedCard) showProjectDetails(selectedCard)
  })
})

projectCards.forEach((card) => {
  card.querySelector('.project-image').addEventListener('click', (event) => {
    event.preventDefault()
    showProjectDetails(card)
  })
})

const menuToggle = document.querySelector('.menu-toggle')
const siteNav = document.querySelector('.site-nav')

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation')
  siteNav.classList.toggle('is-open', !isOpen)
})

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    siteNav.classList.remove('is-open')
  })
})

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.project-card, .about-copy, .about-photo').forEach((element) => {
  element.classList.add('reveal')
  revealObserver.observe(element)
})
