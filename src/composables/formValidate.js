import { reactive } from 'vue-demi'

const createValidationObj = (obj) => {
    let validationObj = {}
    for (let prop in obj){
        validationObj[prop] = { error: false, ErrorMessage: false}
    }
    validationObj['formValid'] = true
    return validationObj
}

export default function formValidate (propObj){

    const st$ = reactive(createValidationObj(propObj))

    // handle field validation on events
    const handleBlur = (e) => {
        if(!e.target.validity.valid){
            st$.formValid = false
            let name = e.target.name
            st$[name].error = true 
            if(e.target.validity.valueMissing) {
                st$[name].errorMessage = `${name} is required`
            } else if (e.target.validity.typeMismatch) {
                st$[name].errorMessage = `Please enter a valid ${name}`
            }
        }
    }

    const handleFocus = (e) => {
        st$[e.target.name].error = false 
        st$[e.target.name].errorMessage = ""
    }

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