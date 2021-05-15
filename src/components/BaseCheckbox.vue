<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    :id="uuid"
  />
  <label :for="uuid" v-if="label" class="ml-2">{{ label }}</label>
  <p 
        v-if="error" 
        class="text-red-600 text-sm"
        :id="'${uuid}-error'"
        aria-live="assertive"
    >
        {{ error }}
  </p>
</template>

<script>
import getUniqueID from '../composables/getUniqueID'

export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: Boolean,
            default: false 
        },
        error: {
          type: String,
          default: ''
        }
    },
    setup () {
      const uuid = getUniqueID().getID()
      return {
        uuid
      }
    }

}
</script>

<style>

</style>