import Vue from 'vue'
// import Upper from "./toUpperCase";

const dateFormat = Vue.filter('dateFormat', function (dateStr, pattern = '') {
  let dt = new Date(dateStr);
  let y = dt.getFullYear();
  let m = (dt.getMonth() + 1).toString().padStart(2, '0');
  let d = dt.getDate().toString().padStart(2, '0');
  // return y + '-' + m + '-' + d;

  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    return `${y} - ${m} - ${d}`;
  } else {
    let hh = dt.getHours().toString().padStart(2, '0');
    let mm = dt.getMinutes().toString().padStart(2, '0');
    let ss = dt.getSeconds().toString().padStart(2, '0');
    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`;
  }
})

export default dateFormat;
