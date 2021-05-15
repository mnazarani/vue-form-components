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
        },
        error: {
            type: String,
            default: ''
        }
    }

}
</script>

<style>

</style>