


// helper function which expects an object contaiing fields (props) requiring validation of
// any kind.  It returns an empty validation object to hold error state and the error message 
// for each field
const createValidationObj = (obj) => {
    let validationObj = {}
    for (let prop in obj){
        validationObj[prop] = { ...obj[prop], error: false, ErrorMessage: false}
    }
    return validationObj
}

import rules from './rules'

const state = {
    validationObj: createValidationObj(rules),
    formValid: true,
    formErrors: 0
}

// mutations
const mutations = {
    // toggle formValid flag
    TOGGLE_FORM_VALID ( state ) {
        state.formValid = !state.formValid
    },
    ADD_FORM_ERROR (state) {
        state.formErrors++
        console.log('add_error',state.formErrors)
    },
    SUB_FORM_ERROR (state) {
        state.formErrors--
        console.log('sub_error', state.formErrors)
    },
    // toggle error flag
    TOGGLE_PROP_ERROR_FLAG ( state, propObj) {
        state.validationObj[propObj.prop].error = propObj.error
    },
    UPDATE_PROP_ERROR_MSG (state, propObj) {
        state.validationObj[propObj.prop].errorMessage = propObj.msg 
    }

}

const actions = {
    // handle field validation on blur event
    handleBlur: ({ commit }, e) => {
        console.log('In handleblur before validation check')
        // using JS Validation Constraint API
        if(!e.target.validity.valid) { // input value didn't meet valididty criteria
            console.log('In handleblur after invalid')
            commit('ADD_FORM_ERROR') // reset form valid flag
            let name = e.target.name  // extract 'name' attribute
            commit('TOGGLE_PROP_ERROR_FLAG', {prop: name, error: true})
            if(e.target.validity.valueMissing) {
                commit('UPDATE_PROP_ERROR_MSG', {prop: name, msg: `${name} is required`})
            } else if (e.target.validity.typeMismatch) {
                commit('UPDATE_PROP_ERROR_MSG', name, `Please enter a valid ${name}`)
            }
        }
    },
    // resets error state when user starts interacting with a field
    handleFocus: ({ commit, state }, e) => {
        if (state.validationObj[e.target.name].error) {
            commit('TOGGLE_PROP_ERROR_FLAG', {prop: e.target.name, error: false})
            commit('UPDATE_PROP_ERROR_MSG', {prop: e.target.name, msg: ''})
            commit('SUB_FORM_ERROR')
        }
        
    },

    // checks form beore submission for missing values
    checkForm: ({ commit, state, rootState }, currentSection) => {
        console.log('In checkForm')
        if (state.formErrors) return
        for (let prop in rootState.form[currentSection]){
            // check if any prop has error or any required field is missing
            // if any of it true then set the global flag to false
            console.log('In checkForm, before if statement')
            console.log('prop required', state.validationObj[prop].required)
            console.log('prop value', rootState.form[currentSection][prop] === '')
            if (state.validationObj[prop].required && rootState.form[currentSection][prop] === '') {
                commit('ADD_FORM_ERROR')
                commit('TOGGLE_PROP_ERROR_FLAG', {prop: prop, error: true})
                commit('UPDATE_PROP_ERROR_MSG', {prop: prop, msg: `${prop} is required`})
            }
        }
    }
}

export default {
    state,
    actions,
    mutations,
  }


