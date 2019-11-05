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
       <div class="useradmin-tab">
         <div class="panel panel-primary" style="margin-bottom: 20px">
           <div class="panel-heading">
           </div>
           <div class="panel-body form-inline">
             <label>
               Id:
               <input type="text" class="form-control" v-model="id">
             </label>
             <label>
               Name:
               <input type="text" class="form-control" v-model="name" @keyup.enter="add">
             </label>
             <input type="button" value="添加" class="btn btn-primary" @click="add">
             <label>
               <!-- h5自带聚焦属性 autofocus  -->
               检索：
               <input type="text" class="form-control" v-model="keywords" autofocus >
             </label>
           </div>
         </div>
         <table class="table table-bordered table-hover table-striped">
           <thead>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Sex</th>
             <th>Address</th>
             <th>ctime</th>
             <th>operation</th>
           </tr>
           </thead>
           <tbody>
           <tr v-for="(item,index) in search(keywords)" :key="item.id">
             <td>{{item.id}}</td>
             <td v-text="item.name"></td>
             <td v-text="item.sex"></td>
             <td v-text="item.address"></td>
             <td>{{item.ctime | dateFormat}}</td>
             <td>
               <button :key="item.id" @click="del(index)" class="btn btn-info">删除</button>
             </td>
           </tr>
           </tbody>
         </table>
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
        name: 'useradmin',
        data() {
            return {
                id: '',
                name: '',
                keywords: '',

                list: [{
                    id:1,
                    date: '2016-05-02',
                    ctime:new Date(),
                    name: '张小虎',
                    sex:'男',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '公司'
                }, {
                    id:2,
                    date: '2016-05-04',
                    ctime:new Date(),
                    name: '李小虎',
                    sex:'男',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '公司'
                }, {
                    id:3,
                    date: '2016-05-01',
                    ctime:new Date(),
                    name: '余小虎',
                    sex:'男',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '公司'
                }, {
                    id:4,
                    date: '2018-05-03',
                    ctime:new Date(),
                    name: '王小虎',
                    sex:'男',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '公司'
                }],
                showclass: 'asideshow',
                showtype: false,

            }
        },
        methods: {
            add() {
                let car = {id: this.id, name: this.name, ctime: new Date()};
                this.list.push(car);
                this.id = this.name = '';
            },
            del(index) {
                this.list.splice(index, 1);
            },
            search(keywords) {
                let newList = this.list.filter(item => {
                    if (item.name.includes(keywords)) {
                        return item;
                    }
                })
                return newList;
            }
        },
        // 注册组件
        components: {
            Navcon,
            Leftnav
        },
        beforeUpdate() {},


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
  .useradmin-tab{
    margin: 20px;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
</style>
