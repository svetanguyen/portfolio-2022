import { createStore } from 'vuex'

export const store = createStore({
    state: {
      projectCards: [
        { projectTitle: "Pokemon desktop game", projectCoverPhoto: "pokemon", technologies: "Vanilla JS, HTML/CSS", link: "https://pokemon-fight-game.netlify.app/" },
        { projectTitle: "Instagram clone", projectCoverPhoto: "IG clone", technologies: "React, Tailwind, HTML/CSS, Firebase", link: "https://insta-clone-5b854c.netlify.app/" },
      ],
      skills: [
        { text: 'HTML', type: 'HtmlIcon' },
        { text: 'CSS', type: 'CssIcon' },
        { text: 'HTML', type: 'HtmlIcon' },
        { text: 'CSS', type: 'CssIcon' },
        { text: 'HTML', type: 'HtmlIcon' },
        { text: 'CSS', type: 'CssIcon' },
      ]
    },
    mutations: {      
    },
    actions: {
    },
    modules: {
    }
})
  