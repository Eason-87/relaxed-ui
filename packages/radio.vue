<template>
  <label class="re-radio" :class="{'is-checked': label === model}">
    <span class="re-radio__input">
      <span class="re-radio__inner"></span>
      <input type="radio" class="re-radio__original" :value="label" v-model="model" :name="name">
    </span>
    <span class="re-radio__label">
     <slot></slot>
     <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ReRadio',
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.re-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .re-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .re-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .re-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .re-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.re-radio.is-checked {
  .re-radio__input {
    .re-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .re-radio__label {
    color: #409eff;
  }
}
</style>
