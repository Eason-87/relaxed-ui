<template>
  <div class="re-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ReRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style scoped></style>
