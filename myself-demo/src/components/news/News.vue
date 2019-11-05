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
        <div class="home">
          <h1 class="home-news">新闻列表</h1>
          <ul class="home-ul">
            <li v-for="item of newslist" class="home-li">
              <router-link :to="'/single/' + item.id">
                <h2 v-change-color:bold="{font:'24px'}" class="home-h2">{{item.id}}.{{item.title | upper}}</h2>
              </router-link>
              <p v-change-font-style="{fontStyle:'italic'}" class="home-p">{{item.body}}</p>
            </li>
          </ul>
          <h3 @click="addmore" class="home-h3">加载更多</h3>
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
        name: 'News',
        data() {
            return {
                showclass: 'asideshow',
                showtype: false,
                newslist: [],
                num: 0,
            }
        },
        // 注册组件
        components: {
            Navcon,
            Leftnav
        },
        beforeUpdate() {},
        // 挂载前状态(里面是操作)
        methods: {
            addmore() {
                if (this.num <= 10) {  //可加载25条数据
                    this.$axios.get("./../../../static/txt.json").then(res => {
                        this.newslist = this.newslist.concat(res.data.slice(this.num + 5, this.num + 10));

                    }).catch(() => {
                        this.$message({
                            showClose: true,
                            message: '哎呀，数据丢失了!',
                            type: 'error'
                        });
                    });
                    this.num += 5;
                } else {
                    this.$message({
                        showClose: true,
                        message: '没有更多数据了！',
                    });
                }

            },
            // 获取新闻列表//http://jsonplaceholder.typicode.com/posts
            getlist() {
                this.$axios.get("./../../../static/txt.json").then(res => {
                    this.newslist = res.data.slice(0, 5);
                    //this.$store.commit('initStoreList',res.data)
                    localStorage.setItem('list', JSON.stringify(res.data));
                }).catch(() => {
                    this.$message({
                        showClose: true,
                        message: '哎呀，数据丢失了!',
                        type: 'error'
                    });
                });
            },
        },
        created() {
            this.getlist();
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
  .home-news {
    width: 100%;
    height: 100px;
    background-color: #9acfea;
    font-size: 40px;
    text-align: center;
    line-height: 100px;
    margin-bottom: 10px;
    text-align:center;
    font:bold 60px helvetica,arial,sans-serif;
    color:#fff;
    text-shadow:0 0 4px white,
    0 -5px 4px #ff3,
    2px -10px 6px #fd3,
    -2px -15px 11px #f80,
    2px -25px 18px #f20;
  }

  .home-li {
    width: 100%;
    height: 100px;
    background-color: #9acfea;
    margin-bottom: 5px;
    text-align: left;
  }

  .home-h2 {
    font-size: 30px;
    height: 50px;
    line-height: 50px;

  }

  .home-p {
    font-size: 20px;
  }

  .home-h3 {
    text-align: center;
    height: 30px;
    background-color: #42b983;
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    margin-bottom:10px
  }
</style>
