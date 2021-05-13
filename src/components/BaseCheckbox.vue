<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <label v-if="label" class="ml-2">{{ label }}</label>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: Boolean,
            default: false 
        }
    }

}
</script>

<style>

</style>