<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Personal Information
    </h2>
    <div class="p-2 w-2/3 mx-auto">
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
    </div>
    <div>
        <h3>Gender:</h3>
          <BaseRadioGroup 
            v-model="gender"
            name="gender"
            :options="genderOptions"
            vertical
          />
     </div>
        {{ gender }}
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

        const gender = computed({
            get () {
                return store.state.form.personal.gender 
            },
            set (value) {
                store.commit('UPDATE_GENDER', value)
            }
        })

        const genderOptions = [
        { label: 'Male', value: 1},
        { label: 'Female', value: 0}
      ]
        
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

        console.log('In Personal and her is the gender property: ', gender)

        return {
            handleBlur,
            handleFocus,
            name,
            gender,
            genderOptions,
            nameError,
            nameErrorMsg
        }
    }

}
</script>

<style>

</style>