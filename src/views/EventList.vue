<template>
  <h2 class="text-center text-bold text-gray-500">
      Event List
      <div v-for="event in eventList" :key="event.id">
          {{ event }}
      </div>
  </h2>

</template>

<script>
import { computed } from 'vue-demi'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const eventList = computed(() => {
            return store.state.events
        })

        return {
            eventList
        }
    }

}
</script>

<style>

</style>