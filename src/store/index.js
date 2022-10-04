import { createStore } from 'vuex'

export const store = createStore({
    state: {
      projectCards: [
        { title: "Pokemon desktop game", image: "ig-clone.jpg", description: "Vanilla JS, HTML/CSS", link: "https://pokemon-fight-game.netlify.app/" },
        { title: "Instagram clone", image: "ig-clone.jpg", description: "React, Tailwind, HTML/CSS, Firebase", link: "https://insta-clone-5b854c.netlify.app/" },
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
      screenHeightBody: false
    },
    mutations: { 
      updateScreenHeightBody (state, payload) {
        state.screenHeightBody = payload
      }     
    },
    actions: {
    },
    modules: {
    }
})
  