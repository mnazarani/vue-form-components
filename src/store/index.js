import { createStore } from 'vuex'
import validation from './validation'

// root state object.
const state = {
    event: {},
    events: [],
    // data related to multistep
    componentList: [
        'Personal',
        'Contact',
        'Work',
        'Skills'
    ],
    currentComponentIndex: 0,
    // form data
    form: {
        personal: {name: '', gender: ''},
        contact: {email: ''},
        work: {work: ''},
        skills: {
            skills: []
        }
    }
    
}

// mutations
const mutations = {
    INCREASE_CURRENT_INDEX (state) {
        if (state.currentComponentIndex < state.componentList.length - 1){
            state.currentComponentIndex++
        }
    },
    DECREASE_CURRENT_INDEX (state) {
        if (state.currentComponentIndex > 0) {
            state.currentComponentIndex--
        }
    },
    UPDATE_NAME (state, name) {
        state.form.personal.name = name
    },
    UPDATE_GENDER (state, gender) {
        state.form.personal.gender = gender 
    },
    UPDATE_EMAIL (state, email) {
        state.form.contact.email = email
    },
    UPDATE_WORK (state, work) {
        console.log(work)
        state.form.work.work = work
    },
    UPDATE_SKILLS (state, skills) {
        state.form.skills.skills = skills
    },


    ADD_EVENT (state, event) {
        state.events.push(event)
    },
    ADD_EVENT_NAME (state, name) {
        state.event.name = name
    }
}

// actions
const actions = {
    // actions for multistep components
    nextComponent: ({ commit }) => commit('INCREASE_CURRENT_INDEX'),
    previousComponent: ({ commit }) => commit('DECREASE_CURRENT_INDEX'),

    // other actions
    addEvent: ({ commit }, event) => commit('ADD_EVENT', event),
    addEventName: ({ commit }, name) => commit('ADD_EVENT_NAME', name)
}

// getters
const getters = {
    getEventsCount: state => state.events.length,

    currentComponent: state => state.componentList[state.currentComponentIndex]
}

// Crate and export Vuex instance
export default createStore({
    state,
    getters,
    actions,
    mutations,
    modules: {
        validation
    }
})