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
          <Head></Head>
          <h1 class="single-h1">详细信息</h1>
          <div class="box">
            <swiper :options="swiperOption" ref="mySwiper" >
              <!-- slides -->
              <swiper-slide><img src="./../../assets/1.jpg" alt="" class="single-img"></swiper-slide>
              <swiper-slide><img src="./../../assets/2.jpg" alt="" class="single-img"></swiper-slide>
              <swiper-slide><img src="./../../assets/3.jpg" alt="" class="single-img"></swiper-slide>
              <swiper-slide><img src="./../../assets/4.jpg" alt="" class="single-img"></swiper-slide>

              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
          </div>
          <div class="single_box">
            <h2 v-change-color:bold="{font:'24px'}" class="single-h2">{{message.id}}.{{message.title}}</h2>
            <article v-change-font-style="{fontStyle:'italic'}">{{message.body}}</article>
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
        name: 'Single',
        data() {
            return {
                showclass: 'asideshow',
                showtype: false,
                message: {},
                id: this.$route.params.id,
                swiperOption: {
                    autoplay: 1000,//可选选项，自动滑动
                    loop: true,//可选选项，开启循环
                    pagination: '.swiper-pagination',
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    autoplayDisableOnInteraction: false,
                }

            }
        },
        // 注册组件
        components: {
            Navcon,
            Leftnav
        },
        beforeUpdate() {},
        // 挂载前状态(里面是操作)
        beforeMount() {
            // 弹出登录成功
            this.$message({
                message: '登录成功',
                type: 'success'
            })
        },
        created() {
            this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
                .then((res) => {
                    this.message = res.data;
                })
                .catch(() => {
                    this.$message({
                        showClose: true,
                        message: '哎呀，数据丢失了!',
                        type: 'error'
                    });
                });


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
  .single-h1{width: 100%;height: 60px;background-color: #9acfea;font-size: 30px;text-align: center;line-height: 60px;}
  .box{width:1000px;height: 550px;margin: 0 auto;}
  .single-img{width:1000px;height: 550px;}
  .single_box{width: 100%;height: 100px;background-color: #9acfea;margin-bottom: 5px;text-align: center;}
  .single-h2{font-size: 30px;height: 50px;line-height: 50px;}
  article{font-size: 20px;}
</style>
