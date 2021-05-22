<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Personal Information
    </h2>
    <form 
        class="p-2 w-2/3 mx-auto"
        @submit.prevent="handleNext"
    >
        <BaseInput 
            label="Name"
            type="text"
            name="name"
            v-model="name"
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
                return store.state.name 
            },
            set (value) {
                store.commit('UPDATE_NAME', value)
            }
        })

        const handleNext = () => {
            store.dispatch('nextComponent')
        }

        return {
            handleNext,
            name,
        }
    }

}
</script>

<style>

</style>