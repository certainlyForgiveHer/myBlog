<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <div class="brand">
        <img width="50" height="50" :src="imgUrl"/>
      </div>
      <div class='desc'>个人主页</div>
    </div>
    <div class="layout-content">
        <div class="left-nav">
          <div class="avatar-wrapper">
            <img class="avatar" height="300px" :src="avatar"/>
            <div class="desc">
              <ul>
                <li class="list" v-for="info in autherInfo">
                  {{ info }}
                </li>
              </ul>
            </div>
          </div>
          <div class="list-wrapper">
            <ul>
              <li class="list" v-for="elem in navList">
                <router-link :to="{ path: elem.detail }">{{ elem.desc }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-content">
          <transition class="fade" name="fade" mode="out-in">
            <router-view>111</router-view>
          </transition>
        </div>
    </div>
    <div class="layout-footer">
      <div class="desc">
        Auther: Changzeqing Email:mermantsing@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
  import resume from '../components/resume'

  export default {
    data() {
      return {
        imgUrl: require('../assets/logo.png'),
        avatar: require('../assets/avatar1.jpg'),
        navList: [
            {
              desc: '个人博客',
              detail: '/blog'
            },
            {
              desc: '个人简历',
              detail: '/resume'
            },
            {
              desc: 'Github',
              detail: '/github'
            }
            ],
        autherInfo: ['常泽清', '北京工业大学', '计算机科学与技术']
      }
    },
    created() {
      console.log(this.$route)
    },
    components: {
      resume
    }
  }
</script>

<style scoped lang="stylus">
  .layout-wrapper
    position: relative
    height: 100%
    width: 100%
    background-color: #F4F6F8
    .layout-header
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 50px
      padding: 5px 40px
      background-color: #FFFFFF
      border-bottom: 1px solid rgba(157, 153, 159, 0.2)
      .brand
        float: left
      .desc
        color: #24292E
        font-size: 30px
        line-height: 50px
        text-align: center
    .layout-content
      position: absolute
      display: flex
      top: 70px
      left: 3%
      height: 700px
      width: 90%
      .left-nav
        flex: 0 0 80px
        margin-right: 40px
        &.left-nav:hover
          transition: all 0.3s
        .avatar-wrapper
          transition: all 0.3s
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
          margin-bottom: 10px
          background-color: #FFFFFF
          .desc
            padding: 8px 8%
            font-size: 18px
            line-height: 25px
            color: #2C3E50
          &.avatar-wrapper:hover
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .list-wrapper
          transition: all 0.3s
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
          .list
            padding: 3px 0px
            font-size: 18px
            text-align: center
            background-color: #FFFFFF
            &.list:last-child
              border-bottom: none
            a
              color: #2C3E50
          .list:hover
            transition: all 0.3s
            background-color: #2C3E50
            a
              color: whitesmoke
          &.list-wrapper:hover
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      .right-content
        padding: 18px 18px
        flex: 1 1 auto
        .fade-enter,.fade-leave-active
          opacity: 0
        .fade-enter-active,.fade-leave-active
          transition: opacity .5s
    .layout-footer
      position: fixed
      bottom: 0
      left: 0
      height: 50px
      width: 100%
      padding: 5px 20px
      background-color: #F9FAFB
      .desc
        font-size: 14px
        line-height: 50px
        text-align: center
</style>
