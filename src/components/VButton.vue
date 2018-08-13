<template>
  <div class="v-button" :data-disable="disable" @click="$emit('click')">
    <svg
      v-if="loading || iconName" :data-position="iconPosition"
      :data-loading="loading"
      class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${loading ? 'loading' : iconName}`" />
    </svg>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'VButton',
  props: {
    iconName: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
  @keyframes loading {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
  $fontSize: 14px;
  $defaultColor: #333;
  $disableBgColor: #ccc;
  $disableColor: rgb(126, 125, 125);
  $disableBg: #ccc;
  $blue: #348eed;
  $white: #fff;
  .v-button {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    font-size: $fontSize;
    padding: .5em 1em;
    border: 1px solid $defaultColor;
    color: $defaultColor;
    border-radius: 4px;
    cursor: pointer;
    &[data-disable="true"] {
      background-color: $disableBgColor;
      color: $disableColor;
      pointer-events: none;
      border-color: $disableColor;
    }
    &:hover {
      background-color: $blue;
      border-color: $blue;
      color: $white;
      .icon {
        fill: $white;
      }
    }
    &:active {
      opacity: .8;
    }
    .icon {
      width: 1em;
      height: 1em;
      &[data-position="left"] {
        margin-right: .5em;
        margin-left: 0;
      }
      &[data-position="right"] {
        margin-right: 0;
        margin-left: .5em;
        order: 1;
      }
      &[data-loading="true"] {
        animation: loading 800ms linear infinite;
      }
    }
  }
</style>


