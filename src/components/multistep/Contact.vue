<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Contact Information
    </h2>
    <form 
        class="p-2 w-2/3 mx-auto"
        @submit.prevent="handleNext"
    >
        <BaseInput 
            label="Email"
            type="email"
            name="email"
            v-model="email"
        />
        <div class="py-4 my-4">
            <button 
                type="button"
                class="bg-gray-500 hover:bg-gray-600 text-gray-50 px-2 py-1 rounded-lg mr-2"
                @click.prevent="handlePrevious"
            >
                Prev
            </button>
            <button 
                type="submit"
                class="bg-green-500 hover:bg-green-400 text-gray-50 px-2 py-1 rounded-lg"
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

        const email = computed({
            get () {
                return store.state.email
            },
            set (value) {
                store.commit('UPDATE_EMAIL', value)
            }
        })

        const handleNext = () => {
            store.dispatch('nextComponent')
        }

        const handlePrevious = () => {
            store.dispatch('previousComponent')
        }

        return {
            handleNext,
            handlePrevious,
            email,
        }
    }

}
</script>