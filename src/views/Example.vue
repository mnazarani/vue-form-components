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
        const state = reactive({
            name: '',
            email: ''
        })

        const propsForValidation = {
            name: { required: true },
            email: { required: true }
        }

        const { handleBlur, handleFocus, isFormValid, st$ } = formValidate(propsForValidation)

        const handleSubmit = () => {
            if (!isFormValid(state)) return 
            console.log(state)
        }

        return {
            state,
            st$,
            handleSubmit,
            handleBlur,
            handleFocus,
        }
    }

}
</script>

<style>
 
</style>