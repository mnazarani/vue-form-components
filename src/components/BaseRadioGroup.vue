<template>
    <component 
        v-for="option in options" 
        :key="option.value"
        :is="vertical ? 'div' : 'span'"
        :class="{
           ' mr-2': !vertical
        }"
    >
    <BaseRadio 
        :label="option.label"
        :value="option.value"
        :modelValue="modelValue"
        :name="name"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
    </component>

  
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: true 
        },
        modelValue: {
            type: [String, Number],
            required: true
        },
        vertical: {
            type: Boolean,
            default: false 
        }
    }

}
</script>

<style>

</style>