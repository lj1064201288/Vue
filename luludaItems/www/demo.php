<?php
date_default_timezone_set("PRC");

ini_set('display_errors',1);            //错误信息
ini_set('display_startup_errors',1);    //php启动错误信息
error_reporting(-1);                    //打印出所有的 错误信息
set_time_limit(0);
ini_set('memory_limit', '128M');
$baseDir = dirname(__FILE__);

require_once($baseDir.'/PHPMailer/src/PHPMailer.php');
require_once($baseDir.'/PHPMailer/src/Exception.php');
require_once($baseDir.'/PHPMailer/src/SMTP.php');

/*
 * 发送邮件
 * {arg@ send_mail 发件人邮箱  }
 * {arg@ to_mail 收件人邮件 }
 * {arg@ mail_subject 标题 }
 * {arg@ mail_context 内容 }
 */
function sendMail($Arr){

    $mail = new PHPMailer\PHPMailer\PHPMailer(true); // Passing `true` enables exceptions
    try {
        //Server settings
        //$mail->SMTPDebug = 1; // Enable verbose debug output
        $mail->isSMTP();    // Set mailer to use SMTP
        $mail->Host = 'smtp.qq.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
  
        //发送者账号
        $mail->Username = '2574019428@qq.com';   // SMTP username
        $mail->Password = 'liyndbqbitzlebhj';   // SMTP password

        $mail->SMTPSecure = 'ssl';  // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;  // TCP port to connect to

        //发件人 邮箱地址,姓名
        $mail->setFrom($Arr['send_mail'], '青山利康');

        //收件人 邮箱地址
        $mail->addAddress($Arr['to_mail']);

        //附件
        //$mail->addAttachment($Arr['attachment']);

        //Content
        $mail->isHTML(true);    // Set email format to HTML

        //主题
        $mail->Subject = $Arr['mail_subject'];

        //内容
        $mail->Body  = $Arr['mail_context'];

        //发送
        $mail->send();

        //输出
        echo date('Y-m-d H:i:s').' '. $Arr['to_mail'].' 发送成功<br>';

    } catch (Exception $e) {

        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;

    }
}

//start
try{

   

    //连数据库
    $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=LLT02', 'lltmysql', '123456',array(PDO::ATTR_PERSISTENT=>true));
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('set names utf8');

    //查询某条数据，内容拼接到$mail_context
    //$sql = "select * from `card` where status='1'";
    //这里就是表单的数据，组装成表格形式
    // $mail_context = "<table><tr><td>姓名</td><td>某某某</td></tr><tr><td>疑似药物</td><td>某某药</td></tr></table>";

    //邮件信息
    // $username = $_POST["username"];
    // $mail_subject = $username.'提交了病例反应';    
    // $send_mail = "lj1064201288@163.com";
    // $to_mail = $_POST["email"];

    // $mail_context = "<table border='1'><tr><td>姓名</td><td>". $username."
    //     </td></tr><tr><td>疑似药物</td><td>"."asdasd"."</td></tr>
    //     <tr><td>不良反应描述</td><td>"."asdaasd"."</td></tr></table>";
    
    // $mailData = array(
    //     'mail_subject'=>$mail_subject,
    //     'mail_context'=>$mail_context,
    //     'send_mail'=>$send_mail,
    //     'to_mail'=>$to_mail
    // );

    // //执行发送邮件函数
    // sendMail($mailData);


} catch (PDOException $e) {
    // echo 'SQL Query:'.$sql.'</br>';
    echo 'Connection failed:'.$e->getMessage();
}
?>
