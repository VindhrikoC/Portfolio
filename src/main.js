import './style.css'

const image = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Morgan Lee, home">
      <span class="wordmark-mark">ML</span>
      <span class="wordmark-name">Morgan Lee<small>Independent designer</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
      <span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="#work">Work <span>03</span></a>
      <a href="#about">About</a>
      <a class="nav-contact" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main id="top">
    <section class="hero page-gutter" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Available for select projects <span class="eyebrow-year">/ <span data-year></span></span></p>
        <h1 id="hero-title">Good ideas<br />deserve <em>good</em><br />design.</h1>
        <div class="hero-bottom">
          <p>I make thoughtful digital experiences and identities for people building a more interesting world.</p>
          <a class="circle-link" href="#work" aria-label="Explore selected work"><span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div class="hero-art" aria-label="A sunlit creative studio">
        <img src="${image('studio.jpg')}" alt="Sunlit creative studio with a shared work table" />
        <div class="art-stamp"><span>MAKE<br />ROOM<br />FOR<br /><i>BETTER</i></span><b aria-hidden="true">✳</b></div>
        <span class="art-caption">A little space to think / 01</span>
      </div>
      <div class="hero-index" aria-hidden="true">PORTFOLIO<br />2025 — <span data-year></span></div>
    </section>

    <section class="work-section page-gutter" id="work" aria-labelledby="work-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">A few things I've made</p>
          <h2 id="work-title">Selected work<span class="heading-period">.</span></h2>
        </div>
        <p class="section-note">A mix of identity, digital<br />and things in between.</p>
      </div>
      <div class="filters" role="group" aria-label="Filter projects">
        <button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">All <span>03</span></button>
        <button class="filter-button" type="button" data-filter="identity" aria-pressed="false">Identity</button>
        <button class="filter-button" type="button" data-filter="digital" aria-pressed="false">Digital</button>
        <button class="filter-button" type="button" data-filter="objects" aria-pressed="false">Objects</button>
      </div>
      <div class="project-grid">
        <article class="project-card" data-category="identity">
          <a class="project-image image-ritual" href="#contact" aria-label="Ask about the Ritual project">
            <img src="${image('ritual.jpg')}" alt="Minimal skincare bottle with a warm, sculptural silhouette" loading="lazy" />
            <span class="image-label">01 / IDENTITY</span><span class="image-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="project-meta"><div><h3>Ritual</h3><p>Care for the everyday</p></div><span>2025</span></div>
        </article>
        <article class="project-card" data-category="digital">
          <a class="project-image image-common" href="#contact" aria-label="Ask about the Common Ground project">
            <img src="${image('common-ground.jpg')}" alt="Bold modern architecture against a clear afternoon sky" loading="lazy" />
            <span class="image-label">02 / DIGITAL</span><span class="image-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="project-meta"><div><h3>Common Ground</h3><p>A place for good neighbors</p></div><span>2024</span></div>
        </article>
        <article class="project-card" data-category="objects">
          <a class="project-image image-form" href="#contact" aria-label="Ask about the Form Study project">
            <img src="${image('form-study.jpg')}" alt="Sculptural chair and quiet objects in a considered interior" loading="lazy" />
            <span class="image-label">03 / OBJECTS</span><span class="image-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="project-meta"><div><h3>Form Study</h3><p>Objects with a softer edge</p></div><span>2024</span></div>
        </article>
      </div>
      <p class="work-footnote"><span>More work is always in progress.</span><a href="#contact">Have something in mind? <span aria-hidden="true">↗</span></a></p>
    </section>

    <section class="about-section" id="about" aria-labelledby="about-title">
      <div class="about-inner page-gutter">
        <div class="about-photo">
          <img src="${image('portrait.jpg')}" alt="Portrait of Morgan Lee" loading="lazy" />
          <span class="photo-note">A face to the name / 2025</span>
        </div>
        <div class="about-copy">
          <p class="eyebrow">A bit about me</p>
          <h2 id="about-title">Curious by nature.<br /><em>Considered</em> by design.</h2>
          <p class="about-intro">I'm Morgan, an independent designer partnering with good people to make useful things feel a little more human.</p>
          <p class="about-detail">From first sketches to the final, tiny details, I bring curiosity and care to the whole process. I like clear ideas, kind collaboration, and work that earns its place in the world.</p>
          <div class="about-tags"><span>Art direction</span><span>Visual identity</span><span>Digital experiences</span><span>Creative partnership</span></div>
          <a class="text-link" href="#contact">More about working together <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <footer class="site-footer page-gutter" id="contact">
      <div class="footer-top"><p class="eyebrow">Have a good one in mind?</p><span class="footer-spark" aria-hidden="true">✳</span></div>
      <a class="footer-title" href="mailto:hello@morganlee.design">Let's make<br /><em>it matter.</em><span aria-hidden="true">↗</span></a>
      <div class="footer-bottom"><a class="footer-email" href="mailto:hello@morganlee.design">hello@morganlee.design</a><span>Independent designer / Working everywhere</span><span>© <span data-year></span> Morgan Lee</span></div>
    </footer>
  </main>
`

const year = new Date().getFullYear()
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = year
})

const filterButtons = document.querySelectorAll('.filter-button')
const projectCards = document.querySelectorAll('.project-card')

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button
      filterButton.classList.toggle('is-active', isSelected)
      filterButton.setAttribute('aria-pressed', String(isSelected))
    })

    projectCards.forEach((card) => {
      card.hidden = selectedFilter !== 'all' && card.dataset.category !== selectedFilter
    })
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
