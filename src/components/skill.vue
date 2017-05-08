<template>
  <div class="skill-wrapper">
    <div class="sum">
      <div class="score" ref="score"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      score: {
        type: String,
        default: '60'
      }
    },
    created() {
      this.$nextTick(() => {
        this.$refs.score.style.width = this.score + '%'
      })
    }
  }
</script>

<style scoped lang="stylus">
  .skill-wrapper
    position: relative
    width: 100px
    background-color: #939393
    height: 8px
    .score
      position: absolute
      top: 0
      left: 0
      height: 8px
      background-color: #35495E
</style>
