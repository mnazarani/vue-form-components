<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Work Experience
    </h2>
    <div
        class="p-2 w-2/3 mx-auto"
    >
        <BaseSelect 
            label="Work Experience"
            name="work"
            :options="workOptions"
            v-model="work"
            @blur="handleBlur"
            @focus="handleFocus"
            required
            :error="workError ? workErrorMsg : null"
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

        const work = computed ({
            get () {
                return store.state.form.work.work
            },
            set (value) {
                store.commit('UPDATE_WORK', value)
            }
        })

         const workError = computed(() => {
            return store.state.validation.validationObj.work.error 
        })

        const workErrorMsg = computed(() => {
            return store.state.validation.validationObj.work.errorMessage
        })

        const handleBlur = (e) => {
            store.dispatch('handleBlur', e)
        }

        const handleFocus = (e) => {
            store.dispatch('handleFocus', e)
        }

        const workOptions = [
            'Less than 1 year',
            '2 to 5 years',
            'More than 5 years'
        ]

        return {
            workOptions,
            work,
            workError,
            workErrorMsg,
            handleFocus,
            handleBlur
        }
    }

}
</script>