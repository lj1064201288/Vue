<?php
    header("Content-type: text/html; charset=utf-8");

    // 制定允许其他域名访问 必须带类似http://的协议
    header("Access-Control-Allow-Origin:http://www.test.com");
    //这里只支持一个域名，所有前端测试都用统一域名，不要使用IP
    header('Access-Control-Allow-Methods:POST'); // 响应类型post
    header('Access-Control-Allow-Credentials:true'); //运行跨域操作
    header('Access-Control-Allow-Headers:x-requested-with, content-type'); // 响应头设置

    session_start();

    // 获取前端传过来的数据
    $cardID = $_POST['cardId'];

    $cardPwd = $_POST["cardPwd"];

    $cardVer = $_POST["verNum"];

    

    // 数据库连接
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "lulutong";

    // 连接数据库
    $conn = new mysqli($servername, $username, $password, $dbname);

    mysqli_query($conn , "set names utf8");
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    // sql查询语句
    $sql = 'select * from userinfo where cardId = '.$cardID.' and password = '.$cardPwd.' or cardId = '.$cardID.' and cardNum = '.$cardPwd;
    $result = $conn -> query($sql);
    // echo $sql;
    if ($cardVer == $_SESSION['authnum_session']){
        if ($result){
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
            if ($cardPwd == $row['password']){
                echo TRUE;
            }else{
                echo FALSE;
            }
        }else {
            echo FALSE;
        }
    }else {
        echo "验证码错误";
    }
    
?>