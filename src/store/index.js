import { createStore } from 'vuex'

export const store = createStore({
    state: {
      projectCards: [
        { title: "Pokemon desktop game", image: "pokemon.png", description: "Vanilla JS, HTML/CSS, REST API", link: "https://pokemon-fight-game.netlify.app/", github: "https://github.com/svetanguyen/PokemonDesk" },
        { title: "Instagram clone", image: "ig-clone.jpg", description: "React, Tailwindcss, HTML/CSS, Firebase", link: "https://insta-clone-5b854c.netlify.app/", github: "https://github.com/svetanguyen/instagram-clone-freecodecamp" },
        { title: "Weather app", image: "weather-app.png", description: "Vue.js, HTML/CSS, REST API", link: "https://weather-app-vue-1.netlify.app/", github: "https://github.com/svetanguyen/vue-weather" },
        { title: "Portfolio", image: "portfolio.png", description: "React, HTML/CSS, Tailwindcss", link: "https://t1n.netlify.app/", github: "https://github.com/svetanguyen/t1n" },
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
        console.log('blya')
        state.prevLinks = []
        state.nextLinks = []
      }
    }
})
  