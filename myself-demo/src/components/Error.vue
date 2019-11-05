/**
* 404
*/
<template>
  <div class="page-404">
    <img :src="oimg" alt="">
  </div>
</template>
<script>
  import oimg from './../assets/error.jpg'
    export default {
        name: 'Error',

        data () {
            return {
               oimg:oimg,
            }
        }
    }
</script>
<style scoped>
img{width: 100%;height: 100%;}
</style>
