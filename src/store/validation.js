


// helper function which expects an object contaiing fields (props) requiring validation of
// any kind.  It returns an empty validation object to hold error state and the error message 
// for each field
const createValidationObj = (obj) => {
    let validationObj = {}
    for (let prop in obj){
        validationObj[prop] = { error: false, ErrorMessage: false}
    }
    return validationObj
}

import rules from './rules'

const state = {
    validationObj: createValidationObj(rules),
    formValid: true
}

// mutations
const mutations = {
    // toggle formValid flag
    TOGGLE_FORM_VALID ( state ) {
        state.formValid = !state.formValid
    },
    // toggle error flag
    TOGGLE_PROP_ERROR_FLAG ( state, prop) {
        state.validationObj[prop].error = !state.validationObj[prop].error 
    },
    UPDATE_PROP_ERROR_MSG (state, propObj) {
        console.log('Inside update error msg', propObj)
        state.validationObj[propObj.prop].errorMessage = propObj.msg 
    }

}

const actions = {
    // handle field validation on blur event
    handleBlur: ({ commit }, e) => {
        // using JS Validation Constraint API
        if(!e.target.validity.valid) { // input value didn't meet valididty criteria
            console.log('inside handleBlur - not valid')
            commit('TOGGLE_FORM_VALID') // reset form valid flag
            let name = e.target.name  // extract 'name' attribute
            commit('TOGGLE_PROP_ERROR_FLAG', name)
            if(e.target.validity.valueMissing) {
                commit('UPDATE_PROP_ERROR_MSG', {prop: name, msg: `${name} is required`})
            } else if (e.target.validity.typeMismatch) {
                commit('UPDATE_PROP_ERROR_MSG', name, `Please enter a valid ${name}`)
            }
        }
    },
    // resets error state when user starts interacting with a field
    handleFocus: ({ commit }, e) => {
        commit('TOGGLE_PROP_ERROR_FLAG', e.target.name)
        commit('UPDATE_PROP_ERROR_MSG', e.target.name, '')
    }
}

export default {
    state,
    actions,
    mutations,
  }


