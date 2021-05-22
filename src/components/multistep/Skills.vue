<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Tells about your skills
    </h2>
    <form 
        class="p-2 w-2/3 mx-auto"
        @submit.prevent="handleNext"
    >
        <BaseCheckbox
            label="MS Word"
            v-model="skills.ms_word"
        />
        <BaseCheckbox
            label="MS Excel"
            v-model="skills.ms_excel"
        />
        <BaseCheckbox
            label="MS Quickbooks"
            v-model="skills.quickbooks"
        />

        <div class="py-4 my-4">
            <button 
                type="button"
                class="bg-gray-500 hover:bg-gray-600 text-gray-50 px-2 py-1 mr-2 rounded-lg"
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

        const skills = computed({
            get() {
                console.log(store.state.skills)
                return store.state.skills
            },
            // set (value) {
            //     console.log('In set', value)
            //     store.commit('UPDATE_SKILLS', value)
            // }
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
            skills
        }
    }

}
</script>