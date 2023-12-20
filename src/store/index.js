import { createStore } from 'vuex'
const detour1 = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'

export default createStore({
  state: {
    // strings must be null
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    // this will update the state
    setjobTitle(state, value){
      state.jobTitle = value
    },
    setabout(state, value){
      state.about = value
    },
    seteducation(state, value){
      state.education = value
    },
    setskills(state, value){
      state.skills = value
    },
    settestimonials(state, value){
      state.testimonials = value
    },
    setprojects(state, value){
      state.projects = value
    },
  },
  actions: {
    async fetchjobTitle(context){
      let res = await fetch(detour1)
      let {jobTitle} = await res.json()
      context.commit('setjobTitle', jobTitle)
    }
  },
  modules: {
  }
})
