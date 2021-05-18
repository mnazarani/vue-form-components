// This module relies on JS constraint validation API for validation
// All required field will need 'required' attribute
// Similarly, type checking such as 'email', or 'number' relies on specifiying proper type attribute
// Also, each field will need a 'name' attribute in order to lookup validation object which
// holds error state and the error messgae for each field requiring validation

import { reactive } from 'vue-demi'

// helper function which expects an object contaiing fields (props) requiring validation of
// any kind.  It returns an empty validation object to hold error state and the error message 
// for each field
const createValidationObj = (obj) => {
    let validationObj = {}
    for (let prop in obj){
        validationObj[prop] = { error: false, ErrorMessage: false}
    }
    validationObj['formValid'] = true
    return validationObj
}

// main function that returns validation object and other helper functions to use for validation
// Expects property object containing property names requiring validation - any kind
export default function formValidate (propObj){

    // create validation object that holds error state and the error message for each field
    const st$ = reactive(createValidationObj(propObj))

    // handle field validation on blur event
    const handleBlur = (e) => {
        // using JS Validation Constraint API
        if(!e.target.validity.valid){ // input value didn't meet validity criteria
            st$.formValid = false  // reset global flag
            let name = e.target.name  // extract 'name' attribute
            st$[name].error = true 
            if(e.target.validity.valueMissing) { // blank field
                st$[name].errorMessage = `${name} is required`
            } else if (e.target.validity.typeMismatch) { // invalid entry
                st$[name].errorMessage = `Please enter a valid ${name}`
            }
        }
    }

    // resets error state when user starts interacting with a field
    const handleFocus = (e) => {
        st$[e.target.name].error = false 
        st$[e.target.name].errorMessage = ""
    }

    // checks the whole form for validation
    // useful to employ before form submission
    const isFormValid = (state) => {
        st$.formValid = true
        for (let prop in propObj){
            if (st$[prop].error || (propObj[prop].required && state[prop] === '')) {
                st$.formValid = false
                return false
            }
        }
        return st$.formValid
        
    }

    return {
        handleBlur,
        handleFocus,
        isFormValid,
        st$,
    }
}