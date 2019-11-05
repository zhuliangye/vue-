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
          <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <!--点-->
            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
              <!--提示信息-->
              <bm-info-window :show="map.show">北京中公教育五方桥培训基地优就业欢迎您！</bm-info-window>
            </bm-marker>
          </baidu-map>
        </div>

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
    // 导入组件
    import  Navcon from './Navcon'
    import Leftnav from './Leftnav'
    export default {
        name: 'Position',
        data() {
            return {
                showclass: 'asideshow',
                showtype: false,
                map:{
                    center: {lng: 116.567334, lat: 39.875253},
                    zoom: 15,
                    show: true,
                    dragging: true
                },

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
        methods: {
            handler ({BMap, map}) {
                let me = this;
                console.log(BMap, map)
                // 鼠标缩放
                map.enableScrollWheelZoom(true);
                // 点击事件获取经纬度
                map.addEventListener('click', function (e) {
                    console.log(e.point.lng, e.point.lat)
                })
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
  .map {
    width: 100%;
    height: 800px;
  }
</style>
