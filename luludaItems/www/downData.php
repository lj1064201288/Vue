<?php
    header("Content-type: text/html; charset=utf-8");

    // 制定允许其他域名访问 必须带类似http://的协议
    header("Access-Control-Allow-Origin:http://www.test.com");
    //这里只支持一个域名，所有前端测试都用统一域名，不要使用IP
    header('Access-Control-Allow-Methods:POST'); // 响应类型post
    header('Access-Control-Allow-Credentials:true'); //运行跨域操作
    header('Access-Control-Allow-Headers:x-requested-with, content-type'); // 响应头设置

    $user = $_POST['username'];
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];
    $cardId = $_POST['cardId'];
    $cardPwd = $_POST['cardPwd'];
    $certNum = $_POST['certNum'];
    $certType = $_POST['certType'];
    $createTime = $_POST['createTime'];
    $email = $_POST['email'];
    $payee = $_POST['payee'];
    $payeeCartNum = $_POST['payeeCartNum'];
    $payeeCartType = $_POST['payeeCartType'];
    $payeeJudge = $_POST['payeeJudge'];
    $address = $_POST['address'];
    $payeeaddress = $_POST['payeeaddress'];
    $payeebirthday = $_POST['payeebirthday'];
    $payeeemail = $_POST['payeeemail'];
    $payeephone = $_POST['payeephone'];
    $payeesex = $_POST['payeesex'];
    $phone = $_POST['phone'];
    $sex = $_POST['sex'];
    $cardstatus = $_POST["cardstatus"];
    $createTime = $_POST["createTime"];
    $scopeTime = $_POST["scopeTime"];

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

    $sql = "update userinfo set 
            username = '".$user.
            "', cardType = '".$certType.
            "', cardNum = '".$certNum.
            "', sex = '".$sex.
            "', birthday = '".$birthday.
            "', email = '".$email.
            "', phone = '".$phone.
            "', address = '".$address.
            "', cardstatus = '".$cardstatus.
            "', payee = '".$payee.
            "', payeeCartType = '".$payeeCartType.
            "', issecure = '".$payeeJudge.
            "', payeeSex = '".$payeesex.
            "', payeecartNum = '".$payeeCartNum.
            "', payeebirthday = '".$payeebirthday.
            "', payeeemail = '".$payeeemail.
            "', payeeaddress = '".$payeeaddress.
            "', payeephone = '".$payeephone.
            "', createTime = '".$createTime.
            "', scopeTime = '".$scopeTime.
            "' where `cardId` = '".$cardId."' and `password` = '".$cardPwd."'";
   
    // echo $sql;
    if ($conn -> query($sql) === TRUE) {
        echo "数据更新成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

?>