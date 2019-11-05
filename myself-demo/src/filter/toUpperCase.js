import Vue from 'vue'
//字体大写
const Upper = Vue.filter('upper',function (value) {
  return value.toUpperCase();
})

export default Upper;
