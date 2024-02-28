import { createStore } from 'vuex'

export const store = createStore({
  state: {
    projectCards: [
      {
        title: 'Portfolio',
        image: 'portfolio.jpg',
        description: 'React, HTML/CSS, Tailwindcss',
        link: 'https://tin-bui.netlify.app/',
        github: 'https://github.com/svetanguyen/bui_dys_tin',
        type: 'Collaboration',
      },
      {
        title: 'Instagram clone',
        image: 'ig-clone.jpg',
        description: 'React, Tailwindcss, HTML/CSS, Firebase',
        link: 'https://insta-clone-5b854c.netlify.app/',
        github: 'https://github.com/svetanguyen/instagram-clone-freecodecamp',
        type: 'Pet project',
      },
      {
        title: 'Weather app',
        image: 'weather-app.jpg',
        description: 'Vue.js, HTML/CSS, REST API',
        link: 'https://weather-app-vue-1.netlify.app/',
        github: 'https://github.com/svetanguyen/vue-weather',
        type: 'Pet project',
      },
      {
        title: 'Pokemon desktop game',
        image: 'pokemon.jpg',
        description: 'Vanilla JS, HTML/CSS, REST API',
        link: 'https://pokemon-fight-game.netlify.app/',
        github: 'https://github.com/svetanguyen/PokemonDesk',
        type: 'Pet project',
      },
    ],
    projects: [
      {
        title: 'Portfolio',
        image: 'portfolio.jpg',
        link: 'https://tin-bui.netlify.app/',
        github: 'https://github.com/svetanguyen/bui_dys_tin',
        info: {
          type: 'Collaboration',
          stack: 'React, HTML/CSS, Tailwindcss',
        },
      },
      {
        title: 'Instagram clone',
        image: 'ig-clone.jpg',
        link: 'https://insta-clone-5b854c.netlify.app/',
        github: 'https://github.com/svetanguyen/instagram-clone-freecodecamp',
        info: {
          type: 'Pet project',
          stack: 'React, Tailwindcss, HTML/CSS, Firebase',
        },
      },
      {
        title: 'Weather app',
        image: 'weather-app.jpg',
        link: 'https://weather-app-vue-1.netlify.app/',
        github: 'https://github.com/svetanguyen/vue-weather',
        info: {
          type: 'Pet project',
          stack: 'Vue.js, HTML/CSS, REST API',
        },
      },
      {
        title: 'Pokemon desktop game',
        image: 'pokemon.jpg',
        link: 'https://pokemon-fight-game.netlify.app/',
        github: 'https://github.com/svetanguyen/PokemonDesk',
        info: {
          type: 'Pet project',
          stack: 'Vanilla JS, HTML/CSS, REST API',
        },
      },
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
        query: 'hello',
        icon: 'notepad.png',
        alt: 'notepad',
        title: 'Hello',
        component: 'HelloComponent',
      },
      {
        query: 'portfolio',
        icon: 'computer.png',
        alt: 'computer',
        title: 'Sveta portfolio',
        component: 'PortfolioComponent',
      },
      {
        query: 'about',
        icon: 'computer.png',
        alt: 'computer',
        title: 'About me',
        component: 'AboutComponent',
      },
      {
        query: 'info',
        icon: 'notepad.png',
        alt: 'notepad',
        title: 'Info',
        component: 'InfoComponent',
        folder: 'About me',
      },
      {
        query: 'works',
        icon: 'folder.png',
        alt: 'folder',
        title: 'Works',
        component: 'WorksComponent',
      },
      {
        query: 'projects',
        icon: 'folder.png',
        alt: 'folder',
        title: 'Projects',
        component: 'ProjectsComponent',
      },
    ],
    files: [
      {
        query: 'contact',
        icon: 'files.png',
        alt: 'files',
        title: 'Contact form',
        component: 'ContactComponent',
        isFile: true,
        inset: false,
        disableMaximize: true,
      },
      {
        query: 'calculator',
        icon: 'calculator.png',
        alt: 'calculator',
        title: 'Calculator',
        component: 'CalculatorComponent',
        disableMaximize: true,
        small: true,
        isFile: true,
        inset: true,
      },
      {
        query: 'notepad',
        icon: 'notepad.png',
        alt: 'notepad',
        title: 'Notepad',
        component: 'NotepadComponent',
        disableMaximize: false,
        small: false,
        isFile: true,
        inset: false,
      },
      {
        query: 'worksList',
        icon: 'notepad.png',
        alt: 'notepad',
        title: 'Projects',
        component: 'WorksList',
        folder: 'Works',
        small: false,
        disableMaximize: false,
        inset: true,
        isFile: true,
      },
      {
        query: 'skills',
        icon: 'notepad.png',
        alt: 'notepad',
        title: 'Skills',
        component: 'SkillsComponent',
        folder: 'About me',
        small: false,
        disableMaximize: false,
        inset: true,
        isFile: true,
      },
      {
        query: 'resume',
        folder: 'About me',
        title: 'Resume',
        icon: 'document.png',
        externalLink:
          'https://drive.google.com/file/d/1FwnSy8mNUDzxNsYGdi91uahT8rdDuvky/view?usp=sharing',
      },
    ],
    dialogs: [
      {
        query: 'save-dialog',
        icon: 'files.png',
        alt: 'files',
        title: 'Save as',
        component: 'SaveDialog',
        inset: false,
      },
      {
        query: 'form-success',
        icon: 'files.png',
        alt: 'files',
        title: 'Form success',
        component: 'SuccessComponent',
        inset: false,
      },
    ],
    desktopFiles: [
      {
        title: 'My portfolio',
        icon: 'computer.png',
        query: 'portfolio',
      },
      { title: 'Hello', icon: 'notepad.png', query: 'hello' },
      {
        title: 'Resume',
        icon: 'document.png',
        query: 'resume',
        externalLink:
          'https://drive.google.com/file/d/1FwnSy8mNUDzxNsYGdi91uahT8rdDuvky/view?usp=sharing',
      },
      {
        title: 'Calculator',
        icon: 'calculator.png',
        query: 'calculator',
        isFile: true,
        hideSidebar: true,
      },
    ],
    tabs: [
      {
        minimized: false,
        maximized: false,
        closed: true,
        small: true,
        isFile: true,
        type: 'file',
      },
      {
        minimized: false,
        maximized: false,
        closed: true,
        small: false,
        isFile: false,
        type: 'folder',
      },
      {
        minimized: false,
        maximized: false,
        closed: true,
        small: false,
        isFile: false,
        isDialog: true,
        type: 'dialog',
      },
    ],
    currentFileContent: null,
    currentExistingFileContent: null,
    linksList: [],
    updatedLinks: false,
    currentLinkIndex: 0,
  },
  actions: {},
  modules: {},
  mutations: {
    addLink(state, payload) {
      if (state.currentLinkIndex + 1 < state.linksList.length) {
        state.linksList = state.linksList.slice(0, state.currentLinkIndex + 1);
        state.linksList.push({
          query: payload.query,
          title: payload.title,
        });
        state.currentLinkIndex += 1;
        return;
      }
      if (state.linksList.length > 0) state.currentLinkIndex += 1;
      if (payload.query) {
        state.linksList.push({
          query: payload.query,
          title: payload.title,
        });
      }
    },
    goBack(state) {
      state.currentLinkIndex -= 1;
    },
    goNext(state) {
      state.currentLinkIndex += 1;
    },
    emptyLinks(state) {
      state.linksList = [];
      state.currentLinkIndex = 0;
      state.updatedLinks = false;
    },
    updateUpdatedLinks(state) {
      state.updatedLinks = !state.updatedLinks;
    },
    onMinimize(state, payload) {
      state.tabs[payload.index].minimized = true;
    },
    onClose(state, payload) {
      state.tabs[payload.index].closed = true;
      state.tabs[payload.index].maximized = false;
    },
    onOpen(state, payload) {
      state.tabs[payload.index].closed = false;
    },
    unminimize(state, payload) {
      state.tabs[payload.index].minimized = false;
    },
    onMaximize(state, payload) {
      state.tabs[payload.index].maximized = true;
    },
    onRestore(state, payload) {
      state.tabs[payload.index].maximized = false;
    },
    toggleMinimize(state, payload) {
      state.tabs[payload.index].minimized =
        !state.tabs[payload.index].minimized;
    },
    toggleMaximize(state, payload) {
      state.tabs[payload.index].maximized =
        !state.tabs[payload.index].maximized;
    },
    addFile(state, payload) {
      state.desktopFiles.push(payload);
      state.files.push(payload);
    },
    updateCurrentFileContent(state, payload) {
      state.currentFileContent = payload;
    },
    updateCurrentExistingFileContent(state, payload) {
      state.currentExistingFileContent = payload;
    },
    updateFile(state, payload) {
      const currentFile = state.files.find(
        (file) => file.query === payload.query,
      );
      currentFile.content = payload.content;
    },
  },
});
  