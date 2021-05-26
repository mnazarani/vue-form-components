<template>
  <div class="py-2 my-4 w-3/4 bg-gray-50 mx-auto">
    <h2 class="text-center font-bold text-gray-600">
        Tells about your skills
    </h2>
    <div
        class="p-2 w-2/3 mx-auto"
    >
        <!-- <BaseCheckbox
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
        /> -->
        <input type="checkbox" v-model="skills" value="ms_word" id="msw">
        <label for="msw">MS Word</label>
        <input type="checkbox" v-model="skills" value="ms_excel" id="msx">
        <label for="msx">MS Excel</label>
        <input type="checkbox" v-model="skills" value="quickbooks" id="qkb">
        <label for="qkb">Quickbooks</label>
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
                return store.state.form.skills.skills
            },
            set (value) {
                store.commit('UPDATE_SKILLS', value)
            }
        })

        return {
            skills
        }
    }

}
</script>