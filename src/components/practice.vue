<template>
  <div class="practice-wrapper">
    <h1 class="title">{{ info.title }}</h1>
    <span class="time"> {{ info.time }}</span>
    <slot class="text" name="text"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped lang="stylus">
  .practice-wrapper
    padding: 0 10px
    margin-bottom: 10px
    .title
      display: inline-block
      margin-bottom: 5px
      font-size: 17px
    .time
      float: right
    p
      font-size: 14px
      line-height: 20px
      padding: 4px 8px
      text-align:justify

</style>
