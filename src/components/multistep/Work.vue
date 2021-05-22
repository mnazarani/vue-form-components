<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Work Experience
    </h2>
    <form 
        class="p-2 w-2/3 mx-auto"
        @submit.prevent="handleNext"
    >
        <BaseSelect 
            label="Work Experience"
            name="work"
            :options="workOptions"
            v-model="work"
        />
        <div class="py-4 my-4">
            <button 
                type="button"
                class="bg-gray-500 hover:bg-gray-600 text-gray-50 px-2 py-1 rounded-lg"
                @click.prevent="handlePrevious"
            >
                Prev
            </button>
            <button 
                type="submit"
                class="bg-green-500 hover:bg-green-400 text-gray-50 px-2 py-1 mr-2 rounded-lg"
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

        const work = computed ({
            get () {
                return store.state.workExperience
            },
            set (value) {
                store.commit('UPDATE_WORK', value)
            }
        })

        const workOptions = [
            'Less than 1 year',
            '2 to 5 years',
            'More than 5 years'
        ]

        const handleNext = () => {
            store.dispatch('nextComponent')
            console.log("handle next")
        }

        const handlePrevious = () => {
            store.dispatch('previousComponent')
        }

        return {
            handleNext,
            handlePrevious,
            workOptions,
            work,
        }
    }

}
</script>