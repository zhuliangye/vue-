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
        <div>
          <div class="msg">
            <template>
              <ul class="user-ul">
                <li>
                  <img src="./../../assets/logo.jpg" alt="" class="user-img">
                  <p>用户名：{{username}}</p>
                </li>
                <li>年龄：{{age}}</li>
                <li>职位：{{job}}</li>
              </ul>
            </template>
          </div>
          <div class="calendar">
            <el-calendar v-model="value" >
            </el-calendar>
          </div>
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
        name: 'User',
        data() {
            return {
                showclass: 'asideshow',
                showtype: false,
                username:'沐雨橙风',
                age:'18岁',
                job:'经理',
                value: new Date(),
            }
        },
        // 注册组件
        components: {
            Navcon,
            Leftnav,
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
  .msg{
    float: left;
  }
  .calendar{
    float: right;
  }
  .user-ul{
    text-align: center;
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    border-right: 2px solid #333;
    margin-top: 20px;
    margin-left: 20px;
  }
  .user-ul li{
    border-bottom: 2px solid #333;
    padding: 20px 40px;

    font-size: 20px;
    font-weight: bold;
    font-family: '正楷','宋体','微软雅黑';
  }
  .user-img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .calendar{
    float: right;
    width: 900px;
    height: 600px;
    text-align: center;
    line-height: 85px;
  }
</style>
