<template>
   <label :for="uuid" v-if="label" class="block py-1">{{ label }}</label>
      <select
        :value="modelValue"
        v-bind="{
            ...$attrs,
            onChange: ($event) => { $emit('update:modelValue', $event.target.value)}
        }"
        :id="uuid"
        :aria-describedby="error ? '${uuid}-error' : null"
      >
        <option
          v-for="option in options"
          :value="option"
          :key="option"
          :selected="option === modelValue"
        >{{ option }}</option>
      </select>
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
            type: [String, Number],
            default: ''
        },
        options: {
            type: Array,
            required: true
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