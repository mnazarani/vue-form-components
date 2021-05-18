<template>
  <h2 class="text-center font-bold text-xl py-2">Form experiment</h2>

  <form 
    @submit.prevent="handleSubmit" 
    class="w-1/2 mx-auto p-2 text-sm"
    novalidate
  >
    <p v-if="!st$.formValid" class="text-red-500">
        Please fill all the 'required' fields
    </p>

    <label class="block">Name <span class="text-xs">(required)</span></label>
    <input 
        type="text" 
        v-model="state.name"
        required
        @blur="handleBlur"
        @focus="handleFocus"
        name="name"
    >
    <p v-if="st$.name.error">
        {{ st$.name.errorMessage }}
    </p>

    <label class="block">Email <span class="text-xs">(required)</span></label>
    <input 
        type="email" 
        v-model="state.email"
        required
        @blur="handleBlur"
        @focus="handleFocus"
        name="email"
    >
    <p v-if="st$.email.error">
        {{ st$.email.errorMessage }}
    </p>




    <button 
        type="submit"
        class="block bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md"
    >
        submit
    </button>

  </form>
</template>

<script>
import { reactive } from 'vue-demi'
import formValidate from '../composables/formValidate'

export default {
    setup () {
        // const state = reactive({
        //     name: {
        //         value: '',
        //         error: false,
        //         errorMessage: ''
        //     },
        //     email: {
        //         value: '',
        //         error: false,
        //         errorMessage: ''
        //     }
        // })

        const state = reactive({
            name: '',
            email: ''
        })

        const propsForValidation = {
            name: { required: true },
            email: { required: true }
        }

        // const createValidationObj = (obj) => {
        //     let validationObj = {}
        //     for (let prop in obj){
        //         validationObj[prop] = { error: false, ErrorMessage: false}
        //     }
        //     validationObj['formValid'] = true
        //     return validationObj
        // }

        // const st$ = reactive({
        //     name: {
        //         error: false,
        //         ErrorMessage: ''
        //     },
        //     email: {
        //         error: false,
        //         ErrorMessage: ''
        //     },
        //     formValid: true
        // })

       // const st$ = reactive(createValidationObj(propsForValidation))


        // const isFormValid = () => {
        //     st$.formValid = true
        //     for (let prop in propsForValidation){
        //         if (st$[prop].error || (propsForValidation[prop].required && state[prop] === '')) {
        //             st$.formValid = false
        //             return false
        //         }
        //     }
        //     return st$.formValid
            
        // }

        const { handleBlur, handleFocus, isFormValid, st$ } = formValidate(propsForValidation)


        // const handleBlur = (e) => {
        //     if(!e.target.validity.valid){
        //         st$.formValid = false
        //         let name = e.target.name
        //         st$[name].error = true 
        //         // state[e.target.name].errorMessage = "Name is required"
        //         if(e.target.validity.valueMissing) {
        //             st$[name].errorMessage = `${name} is required`
        //         } else if (e.target.validity.typeMismatch) {
        //             st$[name].errorMessage = `Please enter a valid ${name}`
        //         }
        //     }
        // }

        // const handleFocus = (e) => {
        //     st$[e.target.name].error = false 
        //     st$[e.target.name].errorMessage = ""
        // }

        const handleSubmit = () => {
            //console.log(isFormValid())
            if (!isFormValid(state)) return 
            console.log(state)
        }

        return {
            state,
            st$,
            handleSubmit,
            handleBlur,
            handleFocus
        }
    }

}
</script>

<style>
 
</style>