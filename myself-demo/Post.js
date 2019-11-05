let http = require('http')
http.createServer(function (req,res) {
  res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
  let alldata = '';
  req.on('data',function (chunk){
    alldata += chunk;
  });
  req.on('end',function () {
    let obj=JSON.parse(alldata);
    // console.log(obj.user);
    // console.log(obj.pass)
    if(obj.user==='admin' && obj.pass==='admin'){
      res.end('1');
    }else{
      res.end('-1');
    }
  });

}).listen(3001,()=>{
  console.log('服务器已启动')
})
