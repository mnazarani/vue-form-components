<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Tells about your skills
    </h2>
    <div
        class="p-2 w-2/3 mx-auto"
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

    </div>

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
                console.log(store.state.form.skills.skills)
                return store.state.form.skills.skills
            },
            // set (value) {
            //     console.log('In set', value)
            //     store.commit('UPDATE_SKILLS', value)
            // }
        })

        return {
            skills
        }
    }

}
</script>