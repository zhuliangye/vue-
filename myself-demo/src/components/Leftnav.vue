/**
* 左边菜单
*/
<template>
  <div>

    <el-row class="tac">
      <div class="logobox">
        <img class="logoimg" src="../assets/logo.jpg" alt="">
      </div>
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#334157"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>新闻动态</span>
            </template>
            <el-menu-item-group>
              <router-link to="/news">
                <el-menu-item index="1-1">公司新闻</el-menu-item>
              </router-link>
             <router-link to="/list">
               <el-menu-item index="1-2">新闻列表</el-menu-item>
             </router-link>
            </el-menu-item-group>
            <router-link to="/single/1">

              <el-menu-item index="1-3">新闻详情</el-menu-item>

            </router-link>
          </el-submenu>
          <router-link to="/shop">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">购物商城</span>
            </el-menu-item>
          </router-link>
          <router-link to="/thing">
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">待办事项</span>
          </el-menu-item>
          </router-link>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/useradmin">
                <el-menu-item index="4-1">用户管理</el-menu-item>
              </router-link>
              <router-link to="/imgadmin">
                <el-menu-item index="4-2">图表管理</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <router-link to="/position">
            <el-menu-item index="5">
              <i class="el-icon-document"></i>
              <span slot="title">位置</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
    //import { menu } from '../api/userMG'
    export default {
        name: 'Leftnav',
        data() {
            return {
                collapsed: false,
                allmenu: []
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created() {

        }

        // 创建完毕状态(里面是操作)
    }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #1f2d3d !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 150px;
    line-height: 150px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 80px;
    border-radius: 50%;
  }
</style>
