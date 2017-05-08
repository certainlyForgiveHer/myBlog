<template>
  <div class="resume-wrapper">
    <div class="overview-wrapper">
      <h1 class="user-name">常泽清</h1>
      <h2 class="major">Web前端工程师</h2>
      <bunder :information="{title:'基本信息', translate: 'Personal Information'}"></bunder>
      <ul class="list">
        <li class="text">
           院校/ 北京工业大学
        </li>
        <li class="text">
          专业/ 计算机科学与技术
        </li>
        <li class="text">
          学历/ 硕士
        </li>
        <li class="text">
          籍贯/ 北京
        </li>
        <li class="text">
          生日/ 1994.9.9
        </li>
        <li class="text">
          电话/ 18600832756
        </li>
        <li class="text">
          邮箱/ mermantsing@gmail.com
        </li>
        <li class="text">
          英语/ CET6 586
        </li>
      </ul>
      <bunder :information="{title:'个人技能', translate: 'Personal Skills'}"></bunder>
      <div class="skills">
        <ul>
          <li class="skill">
            <span class="name">HTML/CSS/JS</span>
            <skill class="score" :score="'90'"></skill>
          </li>
          <li class="skill">
            <span class="name">JQuery/Vue</span>
            <skill class="score" :score="'80'"></skill>
          </li>
          <li class="skill">
            <span class="name">Webpack</span>
            <skill class="score" :score="'75'"></skill>
          </li>
          <li class="skill">
            <span class="name">java/Node</span>
            <skill class="score" :score="'30'"></skill>
          </li>
          <li class="skill">
            <span class="name">Mongodb</span>
            <skill class="score" :score="'30'"></skill>
          </li>
          <li class="skill">
            <span class="name" :score="'75'">Git</span>
            <skill class="score"></skill>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-wrapper">
      <bunder :information="{title:'教育背景', translate: 'Education Background'}"></bunder>
      <div class="background">
        <p class="desc">北京工业大学 计算机学院 计算机系统结构系 研一在读</p>
        <p class="detail">2016.09 至今  平均成绩 93.48/100 成绩排名 6/145</p>
      </div>
      <div class="background">
        <p class="desc">北京工业大学 计算机学院 物联网工程系 获学士学位</p>
        <p class="detail">2012.09-2016.07 平均成绩 86.74/100 成绩排名 37/450</p>
      </div>
      <bunder :information="{title:'实践经历', translate: 'Practical Experience'}"></bunder>
    </div>
  </div>
</template>

<script>
  import bunder from './bunder'
  import skill from './skill'

  export default {
    components: {
      bunder,
      skill
    }
  }
</script>

<style scoped lang="stylus">
  .resume-wrapper
    display: flex
    font-size: 12px
    .overview-wrapper
      flex: 0 0 40%
      margin-right: 25px
      .user-name
        padding-top: 20px
        text-align: center
        font-size: 24px
        color: #35495E
        margin-bottom: 15px
      .major
        text-align: center
        font-size: 20px
        color: #24292E
        margin-bottom: 30px
      .list
        .text
          padding: 5px 3px
          font-size: 17px
      .skills
        .skill
          padding-bottom: 4px
          .name
            padding: 0 3px 0 8px
            display: inline-block
            font-size: 17px
          .score
            vertical-align: top
            float: right
            display: inline-block
    .detail-wrapper
      width: 100%
      .background
        padding: 0px 10px
        margin-bottom: 12px
        .desc
          padding-bottom: 8px
          font-size: 17px
          line-height: 20px
        .detail
          font-size: 14px
          color: dimgray
</style>
