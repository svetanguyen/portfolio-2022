import { createStore } from 'vuex'

export const store = createStore({
    state: {
      projectCards: [
        { title: "Pokemon desktop game", image: "pokemon.png", description: "Vanilla JS, HTML/CSS, REST API", link: "https://pokemon-fight-game.netlify.app/" },
        { title: "Instagram clone", image: "ig-clone.jpg", description: "React, Tailwindcss, HTML/CSS, Firebase", link: "https://insta-clone-5b854c.netlify.app/" },
        { title: "Weather app", image: "weather-app.png", description: "Vue.js, HTML/CSS, REST API", link: "https://weather-app-vue-1.netlify.app/" },
        { title: "Portfolio", image: "portfolio.png", description: "React, HTML/CSS, Tailwindcss", link: "https://t1n.netlify.app/" },
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
      ]
    },
    mutations: {      
    },
    actions: {
    },
    modules: {
    }
})
  