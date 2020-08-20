<template>
<transition name="dialog-fade">
  <div class="re-dialog__wrapper" v-show="visible" @click="handleClose">
    <div class="re-dialog" :style="{width, marginTop:top}">
      <div class="re-dialog__header">
        <slot name='title'>
          <span class="re-dialog__title">{{title}}</span>
        </slot>
        <button class="re-dialog__headerbtn" @click="handleClose">
          <i class="re-icon-test18"></i>
        </button>
      </div>
      <div class="re-dialog__body">
        <slot></slot>
      </div>
      <div class="re-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'ReDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '300px'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang='scss' scoped>
  .re-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0, .5);
    .re-dialog {
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;
      width: 30%;
      &__header {
        padding: 20px 20px 10px;
        .re-dialog__title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .re-dialog__headerbtn {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          .re-icon-test18 {
            color: #909399;
          }
        }
      }

      &__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &__footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        .re-button:first-child {
          margin-right: 20px;
        }
      }
    }
  }
  .dialog-fade-enter-active {
    animation: fade .3s;
  }
  .dialog-fade-leave-active {
    animation: fade .3s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
