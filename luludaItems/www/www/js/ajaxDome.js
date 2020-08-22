// Ajax构造函数
function AjaxPack(option){
    if (!option) {
        return false;
    }
    function changeToUrl(json) {
        let tmp = '';
        
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                //page=5&pagesize=8
                if (tmp !== '') {
                    tmp += "&";
                }
                
                tmp += `${key}=${json[key]}`;
            }
        }
        return tmp;
    }
      //初始化
      var method = "post";
      var asyn = true;
      var withCredentials = false; //跨域
      var data = {};
      var url = "";
      var outtime = 10000;
      var success = function () { };
      var error = function () { };
      var onouttime = function () { };

      if (!option.url) {
        console.log('必填访问地址');
        return false;
    }

    //替换传入值
    if (option.type) { type = option.type; }
    if (option.asyn) { asyn = option.asyn; }
    if (option.withCredentials) { withCredentials = option.withCredentials; }
    if (option.data) { data = option.data; }
    if (option.url) { url = option.url; }
    if (option.outtime) { outtime = option.outtime; }
    if (option.success) { success = option.success; }
    if (option.onouttime) { onouttime = option.onouttime; }
    
    //拼接查询字符串
    var datastr = changeToUrl(data);
    // 获取 XMLHttpRequest对象
    var xmlHttp = new XMLHttpRequest();
    
    // 连接服务器
    xmlHttp.open(method, url, asyn); //api地址
    
    //跨域
    if (withCredentials) {
        xmlHttp.withCredentials = withCredentials; //跨域
    }

    // 设置请求头的Content-Type
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 跨域处理
    xmlHttp.withCredentials = true; 
    // 发送数据
    xmlHttp.send(datastr);

    // 回调函数  success
    xmlHttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            success(this.responseText);
        }
    };
    xmlHttp.ontimeout = function () {
        onouttime();
    };
    xmlHttp.onerror = function () {
        console.log(arguments);
    }

}
