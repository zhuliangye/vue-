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
          <Header/>

          <table class="table table-striped">
            <tr>
              <th style="text-align:center;" v-for="i of list">{{i}}</th>
            </tr>
            <tr v-for=" m of msg">
              <td>{{m.id}}</td>
              <td>{{m.brand}}</td>
              <td><img :src="m.src" alt="" class="img-circle"></td>
              <td>{{m.single}}</td>
              <td>{{m.price}}</td>
              <td>
                <button type="button" class="btn btn-success" :disabled="m.num === 0" @click="m.num-=1">-</button>
                {{m.num}}
                <button type="button" class="btn btn-success" @click="m.num+=1">+</button>
              </td>
              <td>{{m.price*m.num}}</td>
            </tr>
          </table>
          <h2>总计￥{{zongji}}</h2>

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
        name: "Shop",
        data() {
            return {
                showclass: 'asideshow',
                showtype: false,
                msg: [],
                list: ['排序', '产品', '图片', '全称', '价格', '数量', '小计'],
                id: '',

            }
        },
        components: {
            Navcon,
            Leftnav,
        },
        computed:{
            zongji() {
                let ji=0;
                for(let i=0;i<this.msg.length;i++){
                    ji += this.msg[i].price * this.msg[i].num;
                }
                return ji;
            }
        },
        created() {
            this.$axios.get('./../../../static/shop.json').then((res) => {
                this.msg = res.data;
                this.msg.map((v, i) => {
                    this.id = v.id;
                })
            })
        },
        // 注册组件
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

  .img-circle {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
  }
  table{
    text-align: center;
    margin-top: 20px;
  }
  table th{
    font-size: 20px;
  }
  table td {
    width: 185px;
    height: 100px;
    text-align: center;
    line-height: 70px;
  }
  h2{
    font-size: 30px;
    text-align: right;
    margin-right: 200px;
  }
</style>
