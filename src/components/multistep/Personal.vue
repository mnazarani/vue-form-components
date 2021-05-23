<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Personal Information
    </h2>
    <form 
        class="p-2 w-2/3 mx-auto"
        @submit.prevent="handleNext"
        novalidate
    >
        <BaseInput 
            label="Name"
            type="text"
            name="name"
            v-model="name"
            @blur="handleBlur"
            @focus="handleFocus"
            required
            :error="nameError ? nameErrorMsg : null"
        />
        
        <div class="py-4 my-4">
            <button 
                type="submit"
                class="bg-green-500 hover:bg-green-400 text-gray px-2 py-1 rounded-lg"
            >
                Next
            </button>
        </div>
    </form>

  </div>
</template>

<script>
import { computed } from 'vue-demi'
import { useStore } from 'vuex'
export default {

    setup () {

        const store = useStore()

        const name = computed({
            get () {
                return store.state.form.personal.name 
            },
            set (value) {
                store.commit('UPDATE_NAME', value)
            }
        })

        const formValid = computed(() => {
            return store.state.validation.formValid
        })

        const formErrors = computed(() => {
            return store.state.validation.formErrors
        })

        const nameError = computed(() => {
            return store.state.validation.validationObj.name.error 
        })

        const nameErrorMsg = computed(() => {
            return store.state.validation.validationObj.name.errorMessage
        })

        const handleBlur = (e) => {
            store.dispatch('handleBlur', e)
        }

        const handleFocus = (e) => {
            store.dispatch('handleFocus', e)
        }

        const handleNext = () => {
            console.log('handleNext', formErrors.value)
            store.dispatch('checkForm', 'personal')
            if (formErrors.value) return
            store.dispatch('nextComponent')
        }

        return {
            handleNext,
            handleBlur,
            handleFocus,
            name,
            nameError,
            nameErrorMsg,
            formValid,
        }
    }

}
</script>

<style>

</style>