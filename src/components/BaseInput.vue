<template>
    <label v-if="label" class="block py-1">
        {{ label }}
    </label>
    <input
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class=""
    >
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }

}
</script>

<style>

</style>