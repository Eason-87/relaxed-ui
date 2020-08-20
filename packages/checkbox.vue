<template>
  <div class="re-checkbox" :class="{'is-checked':model}">
    <span class="re-checkbox__input">
      <span class="re-checkbox__inner"></span>
      <input type="checkbox" class="re-checkbox__original" :name="name" v-model="model">
    </span>
    <span class="re-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ReCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang='scss'>
.re-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .re-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .re-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &::after {
        box-sizing: border-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scale(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .re-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .re-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.re-checkbox.is-checked {
  .re-checkbox__input {
    .re-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scale(1);
      }
    }
  }
  .re-checkbox__label {
    color: #409eff;
  }
}
</style>
