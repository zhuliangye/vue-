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
          <el-table :data="tableData" style="width: 100%" height="600px">
            <el-table-column prop="id" label="id" width="100"></el-table-column>
            <el-table-column prop="title" label="标题" width="500"></el-table-column>
            <el-table-column prop="body" label="内容"></el-table-column>
          </el-table>
          <el-pagination style="text-align: center;margin-top: 40px"
                         background
                         layout="prev, pager, next"
                         :total="total"
                         :page-size="pageSize"
                         @current-change="handleCurrentChange">
          </el-pagination>
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
        name: 'List',
        data() {
            return {
                showclass: 'asideshow',
                showtype: false,
                message:[],
                total:0,//数据总量
                pageSize:5,//每页显示条目个数
                currentPage:1,//当前的页码数
            }
        },
        // 注册组件
        components: {
            Navcon,
            Leftnav
        },
        beforeUpdate() {},
        // 挂载前状态(里面是操作)
        created() {
            //使用store方法
            /*this.message = this.$store.state.storeList;
            this.total = this.$store.state.storeList.length;*/
            //使用http请求方法
            /*this.$axios.get('./../../static/txt.json')
                .then((res)=>{
                    this.message = res.data;
                    this.total = res.data.length;
                }).catch(()=>{
                    this.$message({
                        showClose:true,
                        message:'哎呀，数据丢失了！',
                        type:'error'
                    })
            })*/
            //使用浏览器端储存数据的方法
            this.message = JSON.parse(localStorage.getItem('list'));
            this.total =  JSON.parse(localStorage.getItem('list')).length;
        },
        methods:{
            handleCurrentChange(val){
                this.currentPage = val;
            }
        },
        computed:{
            tableData(){
                return this.message.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
            }
        }

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

</style>
