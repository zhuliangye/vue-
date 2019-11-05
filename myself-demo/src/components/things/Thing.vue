<template>
  <el-container class="index-con">
    <el-aside :class="showclass">
      <Leftnav></Leftnav>
    </el-aside>
    <el-container class="main-con">
      <el-header class="index-header">
        <Navcon></Navcon>
      </el-header>
      <el-main clss="index-main" style="padding: 0px;">
        <div class="thing-top">
          <div class="thinging">
              <h2 class="thing-h2">待办事项</h2>
              <el-transfer v-model="value" :data="data" :titles="titles"></el-transfer>
          </div>
          <div class="thing-pic">
            <div class="pic-1">
              <img src="./../../assets/1.jpg" alt="">
              <p>{{time | dateFormat}}</p>
            </div>
            <div class="pic-1">
              <img src="./../../assets/4.jpg" alt="">
              <p>{{time | dateFormat}}</p>
            </div>
          </div>
        </div>
        <div class="message">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
    // 导入组件
    import  Navcon from './../Navcon'
    import Leftnav from './../Leftnav'
    export default {
        name: 'Thing',
        data() {
            const generateData = _ => {
                const data = [];
                const things = ['吃法', '睡觉', '跑步', '阅读', '工作', '锻炼', '健身'];
                things.forEach((th, index) => {
                    data.push({
                        label: th,
                        key: index,

                    });
                });
                return data;
            }
            return {
                showclass: 'asideshow',
                showtype: false,
                value: [],
                data: generateData(),
                titles:['代办','已完成'],
                time:new Date(),
                activeName: '1',
            };
        },
        // 注册组件
        components: {
            Navcon,
            Leftnav
        },
        beforeUpdate() {},
        // 挂载前状态(里面是操作)

    }
</script>
<style >
  .index-con {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .aside {
    width: 64px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }
  .asideshow {
    width: 240px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }
  .index-header,
  .index-main {
    padding: 0px;
    border-left: 2px solid #333;
  }
  .thing-top{
    width: 100%;
    height: 500px;
  }
  .thinging{
    width: 500px;
    height: 400px;
    margin: 20px;
    float: left;
  }
  .thing-h2{
    font-weight: bold;
    font-size: 30px;
    font-family: '正楷', '宋体', '微软雅黑';
    text-align: center;
    margin-bottom: 10px;
  }
  .thing-pic{
    height: 600px;
    float: right;
  }
.pic-1{
    width: 450px;
    height: 400px;
    float: left;
    margin-right: 20px;
    padding: 10px;
  }
  .pic-1 img{
    width: 430px;
    height: 380px;
  }
  .pic-1 p{
    font-weight: bold;
    font-size: 20px;
    font-family: '正楷', '宋体', '微软雅黑';
  }
  .message{
    display: block;
    width: 1000px;
    margin-left: 30px;
  }

</style>
