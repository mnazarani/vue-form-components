<template>
  <h2 class="text-center font-bold text-gray-500 text-xl">
      Multistep Form 
  </h2>
  <component :is="components[currentIndex]"></component>
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

        return {
            components,
            currentIndex
        }

    }

}
</script>

<style>

</style>