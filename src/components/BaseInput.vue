<template>
    <label :for="uuid" v-if="label" class="block py-1">
        {{ label }}
    </label>
    <input
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="uuid"
        :aria-describedby="error ? '${uuid}-error' : null"
        :aria-invalid="error ? true : null"
    >
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