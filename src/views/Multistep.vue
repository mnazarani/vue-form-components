<template>
  <h2 class="text-center font-bold text-gray-500 text-xl">
      Multistep Form 
  </h2>
  <form @submit.prevent="handleNext" novalidate>
  <component :is="components[currentIndex]"></component>

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


</template>

<script>
import Personal from '../components/multistep/Personal.vue'
import Contact from '../components/multistep/Contact.vue'
import Work from '../components/multistep/Work.vue'
import Skills from '../components/multistep/Skills.vue'
import { computed, reactive } from 'vue-demi'
import { useStore } from 'vuex'
export default {
    components: {
        Personal,
        Contact,
        Work,
        Skills,
    },

    setup () {

        const store = useStore()

        const components = computed (() => store.state.componentList )

        const currentIndex = computed (() => store.state.currentComponentIndex )

        const currentComponent = computed (() => store.getters.currentComponent )

        const formErrors = computed(() => {
            return store.state.validation.formErrors
        })

        const handleNext = () => {
            console.log('handleNext', formErrors.value)
            console.log('current Component:', currentComponent.value)
            store.dispatch('checkForm', currentComponent.value.toLowerCase())
            if (formErrors.value) return
            store.dispatch('nextComponent')
        }

         const handlePrevious = () => {
            store.dispatch('previousComponent')
        }

        return {
            components,
            currentIndex,
            handleNext,
            handlePrevious,
        }

    }

}
</script>

<style>

</style>