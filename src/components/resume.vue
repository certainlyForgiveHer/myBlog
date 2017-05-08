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
      <div class="detail-wrapper middle">
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
        <practice :info="{ title: '基于Vue2.0构建高仿美团外卖平台' ,time: '2017.01 - 2017.03' }">
          <p slot="text">
            依托本项目系统学习了前端的基础知识,熟悉HTML5，CSS和javaScript基本的网页制作技术，了解node.js。
          </p>
          <p slot="text">
            本项目基于Vue.js，采用组件化、模块化方式开发单页面应用。使用node.js+express进行服务器端的开发，在项目了解了一个项目的完整的开发流程，体会了MVVM的强大。对于诸如页面布局有了深刻的理解。
          </p>
          <p slot="text">
            项目地址: git@github.com:ZirkleTsing/sell-application-.git
          </p>
        </practice>
        <practice :info="{ title: '基于云平台的智能停车系统设计', time: '2016.09 - 2016.12' }">
          <p slot="text">
            负责团队项目代码的整合，调试，并以第一作者身份发表了"Design of Intelligent Parking System Based on Cloud Platform"，文章已被2016年云计算国际会议中心（ICC 2016）录用。
          </p>
        </practice>
        <practice :info="{ title: '异构体系结构性能和功耗分析工具优化测试', time: '2016.06 - 2016.09' }">
          <p slot="text">
            针对NUMA体系架构，在Linux下的GEM5平台运行PARSEC测试集进行测试。
          </p>
          <p slot="text">
            对比多核架构与CC-NUMA架构多线程程序的运行特点。
          </p>
          <p slot="text">
            撰写测试用例文档，测试日志文档
          </p>
        </practice>
      </div>
      <div class="detail-wrapper">
        <bunder :information="{title:'获奖情况', translate: 'Awards'}"></bunder>
        <div class="awards-wrapper">
          <p class="awards">2016年发表论文"Design of Intelligent Parking System Based on Cloud Platform"，已被2016年云计算国际会议中心（ICC 2016）录用</p>
          <p class="awards">2016年获得研究生学业奖学金。</p>
          <p class="awards">2017年发表论文"A survey of CPU-GPU Hetergeneous Computing Techniques"，EI已检索。</p>
        </div>
        <bunder :information="{title:'个人评价', translate: 'Self-evaluation'}"></bunder>
        <div class="rating-wrapper">
          <p class="rating">
            作为一名计算机在读研究生，在学习生活中喜欢接触新鲜事物，热爱前端开发，喜欢思考实践，渴望得到快速成长的机会，希望在团队工作中得到历练，十分期待与您共事。
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  import bunder from './bunder'
  import skill from './skill'
  import practice from './practice'

  export default {
    components: {
      bunder,
      skill,
      practice
    }
  }
</script>

<style scoped lang="stylus">
  .resume-wrapper
    display: flex
    font-size: 12px
    .overview-wrapper
      flex: 0 0 20%
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
    .middle
      margin-right: 25px
    .detail-wrapper
      flex: 1 1 40%
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
      .awards-wrapper
        font-size: 14px
        line-height: 20px
        padding: 4px 8px
        text-align:justify
      .rating-wrapper
        font-size: 14px
        line-height: 20px
        padding: 4px 8px
        text-align:justify
</style>
