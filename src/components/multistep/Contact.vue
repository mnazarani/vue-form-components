<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Contact Information
    </h2>
    <div
        class="p-2 w-2/3 mx-auto"
    >
        <BaseInput 
            label="Email"
            type="email"
            name="email"
            v-model="email"
            @blur="handleBlur"
            @focus="handleFocus"
            required
            :error="emailError ? emailErrorMsg : null"
        />
       
    </div>

  </div>
</template>

<script>
import { computed } from 'vue-demi'
import { useStore } from 'vuex'
export default {

    setup () {

        const store = useStore()

        const email = computed({
            get () {
                return store.state.form.contact.email
            },
            set (value) {
                store.commit('UPDATE_EMAIL', value)
            }
        })

        const emailError = computed(() => {
            return store.state.validation.validationObj.email.error 
        })

        const emailErrorMsg = computed(() => {
            return store.state.validation.validationObj.email.errorMessage
        })

        const handleBlur = (e) => {
            store.dispatch('handleBlur', e)
        }

        const handleFocus = (e) => {
            store.dispatch('handleFocus', e)
        }


        return {
            email,
            emailError,
            emailErrorMsg,
            handleBlur,
            handleFocus,
        }
    }

}
</script>