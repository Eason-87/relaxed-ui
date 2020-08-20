<template>
  <button class="re-button" :class="[`re-button--${type}`, {'is-plain': plain, 'is-round': round, 'is-circle': circle}]" @click="handleClick">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ReButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='scss' scoped>
  .re-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .re-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background-color: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  .re-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background-color: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  .re-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background-color: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }
  .re-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background-color: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }
  .re-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background-color: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
  .re-button.is-plain {
    &:hover,
    &:focus {
      background: #fff;
      border-color: #409eff;
      color: #409eff;
    }
  }
  .re-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
  .re-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
  .re-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .re-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .re-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
  .re-button.is-round {
    border-radius: 20px;
    padding: 12 23px;
  }
  .re-button.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  .re-button [class*=re-icon-]+span {
    margin-left: 5px;
  }
</style>
