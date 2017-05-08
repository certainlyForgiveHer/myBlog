<template>
  <div class="bunder-wrapper">
    <div class="bunder">
      <span class="Chinese">{{ information.title }}</span>
      <span class="English"> {{ information.translate }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      information: {
        type: Object,
        default: {
          title: '测试',
          translate: 'test'
        }
      }
    }
  }
</script>

<style lang="stylus">
  .bunder-wrapper
    .bunder
      width: 95%
      padding: 3px 8px
      background-color: #35495E
      color: whitesmoke
      border-radius: 3px
      margin: 20px 0
      .Chinese
        font-size: 12px
      .English
        font-size: 10px
</style>
