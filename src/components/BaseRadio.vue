<template>
   <input
        type="radio"
        checked="modelValue === value"
        :value="value"
        @change="$emit('update:modelValue', value)"
        v-bind="$attrs"
        :id="uuid"
        />
    <label :for="uuid" v-if="label" class="ml-1">{{ label }}</label>
    
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
        value: {
            type: [String, Number],
            required: true 
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