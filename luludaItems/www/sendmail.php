<?php
/**
* @desc   SMTP �ʼ�������
* @param  �������������ʼ���Ϣ
* @author �ų�ΰ
* @date   2010-1-10 22:15:01
* @contact QQ:462178176
*/

header("Content-type: text/html; charset=utf-8");

require_once("class.mail.php");

session_start();

$MailServer = 'smtp.qq.com';      //SMTP ������
$MailPort   = '587';					 //SMTP�������˿ں� Ĭ��25
$MailId     = '2574019428@qq.com';  //�����������ʺ�
$MailPw     = 'liyndbqbitzlebhj';			     //��������������

if (isset($_POST['patient_name'])) {
	$patient_name = $_POST['patient_name'];
};
//2患者性别
if (isset($_POST['patient_sex'])) {
	$patient_sex = $_POST['patient_sex'];
};
//3患者年龄
if (isset($_POST['patient_age'])) {
	$patient_age = $_POST['patient_age'];
};
//4患者体重
if (isset($_POST['patient_kg'])) {
	$patient_kg = $_POST['patient_kg'];
};
//5原患疾病
if (isset($_POST['patient_disease'])) {
	$patient_disease = $_POST['patient_disease'];
};
//6就诊医院
if (isset($_POST['hospital'])) {
	$hospital = $_POST['hospital'];
};
//7就诊科室
if (isset($_POST['department'])) {
	$department = $_POST['department'];
};
//8怀疑药品名称
if (isset($_POST['medic_name'])) {
	$medic_name = $_POST['medic_name'];
};
//9怀疑药品生产企业名称
if (isset($_POST['medic_company'])) {
	$medic_company = $_POST['medic_company'];
};
//10怀疑药品生产批号
if (isset($_POST['medic_batchnumber'])) {
	$medic_batchnumber = $_POST['medic_batchnumber'];
};
//11并用药品名称
if (isset($_POST['withmedic_name'])) {
	$withmedic_name = $_POST['withmedic_name'];
};
//12并用药品生产企业名称
if (isset($_POST['withmedic_company'])) {
	$withmedic_company = $_POST['withmedic_company'];
};
//13并用药品生产批号
if (isset($_POST['withmedic_batchnumber'])) {
	$withmedic_batchnumber = $_POST['withmedic_batchnumber'];
};
//14不良反应过程描述
if (isset($_POST['describe'])) {
	$describe = $_POST['describe'];
};
//15报告者姓名
if (isset($_POST['reporter'])) {
	$reporter = $_POST['reporter'];
};
//16报告者联系方式
if (isset($_POST['reporter_phone'])) {
	$reporter_phone = $_POST['reporter_phone'];
};
//17填表日期
if (isset($_POST['addtime'])) {
	$addtime = $_POST['addtime'];
};
//18是否同意随访
if (isset($_POST['visit'])) {
	$visit = $_POST['visit'];
};
//19验证码
if (isset($_POST['ver'])) {
	$verification_code = $_POST['ver'];
};

// 数据库连接
$servername = "localhost"; // 地址
$username = "root"; // 数据库用户
$password = "root";	// 密码
$dbname = "lulutong";	// 数据库名称
$table = "adverse";	// 数据表

// 连接数据库
$conn = new mysqli($servername, $username, $password, $dbname);

// 插入数据语句
$sql = "insert into "
	.$table."(patient_name,patient_sex,patient_age,
	patient_kg,patient_disease,hospital,department,medic_name,
	medic_company,medic_batchnumber,withmedic_name,withmedic_company,
	withmedic_batchnumber,`describe`,reporter,reporter_phone,
	addtime,visit) values('" . $patient_name . "','" . $patient_sex . "','" 
	. $patient_age . "','" . $patient_kg . "','" . $patient_disease .
	 "','" . $hospital . "','" . $department . "','" . $medic_name . "',
	 '" . $medic_company . "','" . $medic_batchnumber . "',
	 '" . $withmedic_name . "','" . $withmedic_company . "',
	 '" . $withmedic_batchnumber . "','" . $describe . "',
	 '" . $reporter . "','" . $reporter_phone . "','" . $addtime . "',
	 '" . $visit . "')";

		
// echo $sql;
// exit;
// 设置编码
mysqli_query($conn , "set names utf8");

// 检测连接
if ($conn->connect_error) {
	die("连接失败: " . $conn->connect_error);
}

// 判断验证码是否正确
if ($verification_code == $_SESSION['authnum_session']){

	// 判断数据库数据存储
	if ($conn -> query($sql) === TRUE) {
		$Title = $reporter.'提交了病例反应';        
		$Content = " <p>尊敬的医生，您好！</p>
		<p>本次不良反应/不良事件报告表信息如下:</p>
		<table style =' border-collapse:collapse; border-spacing:0;'>
			<h2 style = 'margin:15px 0;'>患者信息</h2>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>患者姓名</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>朱天时</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>患者性别</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>男</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>患者年龄 </td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>22</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>体重</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>55kg</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>患者疾病</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>感冒</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>就诊医院</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>非洲流感专医院</td>
			</tr>
		</table>
		<table  style =' border-collapse:collapse; border-spacing:0;'>
			<h2 style = 'margin:15px 0;'>用药信息</h2>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>怀疑药品名称 </td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>感冒灵</td>
			</tr>
				<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>生产企业名称 </td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>感冒灵</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>生产批号 </td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>22</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>并用药品名称</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>暂无</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>生产企业名称</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>暂无</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>生产批号</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>暂无</td>
			</tr>
		</table>

		<table  style =' border-collapse:collapse; border-spacing:0;'>
			<h2 style = 'margin:15px 0;'>过程描述</h2>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>不良反应过程描述 </td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>备注：病人已神志不清，无法叙述</td>
			</tr>
				<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>报名者姓名 </td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>朱天时</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>报名者联系方式 </td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>18025866535</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>填报日期</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>2020-02-25</td>
			</tr>
			<tr>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 140px;'>是否同故意随访</td>
				<td style ='padding: 5px 10px;border: 1px solid rgb(173, 173, 173);width: 262px;'>是</td>
			</tr>
		
		</table>"; 

		$email = $_POST["email"]; // 获取前端邮箱数据
		$smtp = new smtp($MailServer,$MailPort,true,$MailId,$MailPw); // 连接邮箱服务器
		$smtp->debug = false; // 没看懂这是干什么的...

		try{
			// 执行邮件发送
			if($smtp->sendmail($email,$MailId, $Title, $Content, "HTML")){
				echo '发送成功';            
			} else {
				echo '发送邮件失败!';            //$succeed = 0;
			}
		}catch(PDOException $e){
			echo 'Connection failed:'.$e->getMessage();
		}
		
		echo "数据插入成功";

	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}else {
	echo "验证码错误";
}


?>