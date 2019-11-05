import Vue from 'vue'

//改变颜色
const changeColor = Vue.directive('changeColor',function (el,binding) {
  el.style.color = '#' + Math.random().toString(16).slice(2,8);
  el.style.fontSize = binding.value.font ;
  if (binding.arg ==='ita' ){
    el.style.fontStyle = 'italic';
  }else if (binding. arg === 'bold' ) {
    el.style.fontWeight = 'bold';
  }
});

//改变字体样式
const changeFontStyle = Vue.directive('changeFontStyle',function (el,binding) {
  el.style.fontStyle = binding.value.fontStyle;
})

// export default changeColor;
export {changeColor,changeFontStyle};
