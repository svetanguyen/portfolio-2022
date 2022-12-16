import { createStore } from 'vuex'

export const store = createStore({
    state: {
      projectCards: [
        { title: "Portfolio", image: "portfolio.png", description: "React, HTML/CSS, Tailwindcss", link: "https://tin-bui.netlify.app/", github: "https://github.com/svetanguyen/bui_dys_tin" },
        { title: "Instagram clone", image: "ig-clone.jpg", description: "React, Tailwindcss, HTML/CSS, Firebase", link: "https://insta-clone-5b854c.netlify.app/", github: "https://github.com/svetanguyen/instagram-clone-freecodecamp" },
        { title: "Weather app", image: "weather-app.jpg", description: "Vue.js, HTML/CSS, REST API", link: "https://weather-app-vue-1.netlify.app/", github: "https://github.com/svetanguyen/vue-weather" },
        { title: "Pokemon desktop game", image: "pokemon.jpg", description: "Vanilla JS, HTML/CSS, REST API", link: "https://pokemon-fight-game.netlify.app/", github: "https://github.com/svetanguyen/PokemonDesk" },
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
        {
          query: "hello",
          icon: "notepad.png",
          title: "Hello",
          component: 'HelloComponent',
        },
        {
          query: "portfolio",
          icon: "computer.png",
          title: "My portfolio",
          component: 'PortfolioComponent',
        },
        {
          query: "about",
          icon: "computer.png",
          title: "About me",
          component: 'AboutComponent',
        },
        {
          query: "info",
          icon: "notepad.png",
          title: "Info",
          component: 'InfoComponent',
          folder: "About me",
        },
        {
          query: "skills",
          icon: "notepad.png",
          title: "Skills",
          component: 'SkillsComponent',
          folder: "About me",
        },
        {
          query: "works",
          icon: "folder.png",
          title: "Works",
          component: 'WorksComponent',
        },
        {
          query: "worksList",
          icon: "notepad.png",
          title: "Projects",
          component: 'WorksList',
          folder: "Works",
        },
      ],
      files: [
        {
          query: "contact",
          icon: "files.png",
          title: "Contact",
          component: 'ContactComponent',
          isFile: true,
        },
        {
          query: "calculator",
          icon: "calculator.png",
          title: "Calculator",
          component: 'CalculatorComponent',
          disableMaximize: true,
          small: true,
          isFile: true
        },
      ],
      tabs: [
        {
          minimized: false,
          maximized: false,
          closed: true,
          disableMaximize: true,
          small: true,
          isFile: true
        },
        {
          minimized: false,
          maximized: false,
          closed: true,
          disableMaximize: false,
          small: true,
          isFile: false
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
      },
      onMaximize(state, payload) {
        state.tabs[payload.index].maximized = true
      },
      onRestore(state, payload) {
        state.tabs[payload.index].maximized = false
      },
      toggleMinimize(state, payload) {
        state.tabs[payload.index].minimized = !state.tabs[payload.index].minimized
      },
      toggleMaximize(state, payload) {
        state.tabs[payload.index].maximized = !state.tabs[payload.index].maximized
      }
    }
})
  