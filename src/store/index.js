import { createStore } from 'vuex'

export const store = createStore({
    state: {
      projectCards: [
        { title: "Pokemon desktop game", image: "pokemon.jpg", description: "Vanilla JS, HTML/CSS, REST API", link: "https://pokemon-fight-game.netlify.app/", github: "https://github.com/svetanguyen/PokemonDesk" },
        { title: "Instagram clone", image: "ig-clone.jpg", description: "React, Tailwindcss, HTML/CSS, Firebase", link: "https://insta-clone-5b854c.netlify.app/", github: "https://github.com/svetanguyen/instagram-clone-freecodecamp" },
        { title: "Weather app", image: "weather-app.jpg", description: "Vue.js, HTML/CSS, REST API", link: "https://weather-app-vue-1.netlify.app/", github: "https://github.com/svetanguyen/vue-weather" },
        { title: "Portfolio", image: "portfolio.jpg", description: "React, HTML/CSS, Tailwindcss", link: "https://t1n.netlify.app/", github: "https://github.com/svetanguyen/t1n" },
      ],
      skills: [
        { text: 'React', type: 'ReactIcon' },
        { text: 'HTML', type: 'HtmlIcon' },
        { text: 'CSS', type: 'CssIcon' },
        { text: 'SCSS', type: 'ScssIcon' },
        { text: 'Vue.js', type: 'VueIcon' },
        { text: 'JS', type: 'JavascriptIcon' },
        { text: 'git', type: 'GitIcon' },
        { text: 'npm', type: 'NpmIcon' },
        { text: 'Hydrogen', type: 'HydrogenIcon' },
        { text: 'Tailwind', type: 'TailwindIcon' },
      ],
      folders: [
        { query: 'home', icon: 'computer.png', component: 'HomeComponent' },
        { query: 'about', icon: 'computer.png', component: 'AboutComponent' },
      ],
      tabs: [
        {
          query: "hello",
          icon: "notepad.png",
          minimized: false,
          title: "Hello",
          closed: false,
          component: 'HelloComponent',
        },
        {
          query: "portfolio",
          icon: "computer.png",
          minimized: false,
          title: "My portfolio",
          closed: true,
          component: 'PortfolioComponent',
        },
        {
          query: "about",
          icon: "computer.png",
          minimized: false,
          title: "About me",
          closed: true,
          component: 'AboutComponent',
        },
        {
          query: "info",
          icon: "notepad.png",
          minimized: false,
          title: "Info",
          closed: true,
          component: 'InfoComponent',
          folder: "About me",
        },
        {
          query: "skills",
          icon: "notepad.png",
          minimized: false,
          title: "Skills",
          closed: true,
          component: 'SkillsComponent',
          folder: "About me",
        },
        {
          query: "works",
          icon: "folder.png",
          minimized: false,
          title: "Works",
          closed: true,
          component: 'WorksComponent',
        },
        {
          query: "worksList",
          icon: "notepad.png",
          minimized: false,
          title: "Projects",
          closed: true,
          component: 'WorksList',
          folder: "Works",
        },
        {
          query: "contact",
          icon: "files.png",
          minimized: false,
          title: "Contact",
          closed: true,
          component: 'ContactComponent',
          isFile: true,
          hideSidebar: true
        },
        {
          query: "calculator",
          icon: "calculator.png",
          minimized: false,
          title: "Calculator",
          closed: true,
          component: 'CalculatorComponent',
          hideSidebar: true,
          disableMaximize: true,
          small: true,
          isFile: true
        },
      ],
      prevLinks: [],
      nextLinks: [],
      updatedLinks: false
    },
    actions: {
    },
    modules: {
    },
    mutations: {
      addPrev(state, payload) {
        state.prevLinks.push(payload.query)
      },
      addNext(state, payload) {
        state.nextLinks.push(payload.query)
      },
      removePrev(state) {
        state.prevLinks.pop()
      },
      removeNext(state) {
        state.nextLinks.pop()
      },
      updateUpdatedLinks(state) {
        state.updatedLinks = !state.updatedLinks
      },
      resetLinks(state) {
        state.prevLinks = []
        state.nextLinks = []
      },
      onMinimize(state, payload) {
        state.tabs[payload.index].minimized = true
      },
      onClose(state, payload) {
        state.tabs[payload.index].closed = true
      },
      onOpen(state, payload) {
        state.tabs[payload.index].closed = false
      },
      unminimize(state, payload) {
        state.tabs[payload.index].minimized = false;
      }
    }
})
  