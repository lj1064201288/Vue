// 获取所有表单
var inputDoms =  $("input");
var textareaDom = $("input");

// 存储数据的容器
var data = {};

inputDoms.focus(function(){
    this.style.border = "1px #b3d4fc solid";
    if ($(this).next("div")[0] != undefined){
        $(this).next("div")[0].remove();
    }
})
inputDoms.blur(function(){
    this.style.border = "1px solid #f0f0f0";
})

// 创建提示列表
var hintList = [
    "患者姓名不能为空",
    "原患疾病不能为空",
    "怀疑药品名称不能为空",
    "生产企业名称不能为空",
    "生产批号不能为空",
    "不良反应过程描述不能为空",
    "报告者姓名不能为空",
    "报告者联系方式不能为空",
    "填表日期不能为空",
    "是否同意随访不能为空",
    "姓名格式有误",
    "电话号码格式有误"
]

// 正则检测
var nameReg = /^[\u4e00-\u9fa5]{2,18}$/,
    phoneReg = /^1[3456789]\d{9}$/;


// 获取所有必填表单的信息
var username = $("#username");
var illness = $("#illness");
var paDrugName = $("#pa-drug-name");
var drugManufacturing = $("#drug-manufacturing");
var batchNum = $("#batchNum");
var reDesc = $("#re-desc");
var applyName = $("#apply-name");
var contact = $("#contact");
var craeteDate = $("#craete-date");
var follow = $("#follow");

// 必填表单的信息处理函数
function process(ele, info, info2, reg){
    if (!ele.value){
        ele.style.border = "1px solid #dc8d99";
        var errEle = document.createElement("div");
        errEle.innerHTML = `<i class="icon-error">!</i><i class="text-error">${info}</i>`;
        ele.after(errEle);
    }else {
        if (reg && info2){
            if (reg.test(ele.value)){
                ele.style.border = "1px #b3d4fc solid";

            }else {
                ele.style.border = "1px solid #dc8d99";
                var errEle = document.createElement("div");
                errEle.classList.add("err");
                errEle.innerHTML = `<i class="icon-error">!</i><i class="text-error">${info2}</i>`;
                ele.after(errEle);
            }
        }
    }
}

username.blur(function(){
    process(this, hintList[0], hintList[10], nameReg);
});
illness.blur(function(){
    process(this, hintList[1]);
});
paDrugName.blur(function(){
    process(this, hintList[2]);
});
drugManufacturing.blur(function(){
    process(this, hintList[3]);
});
batchNum.blur(function(){
    process(this, hintList[4]);
});
reDesc.blur(function(){
    process(this, hintList[5]);
});
applyName.blur(function(){
    process(this, hintList[6], hintList[10], nameReg);
});
contact.blur(function(){
    process(this, hintList[7], hintList[11], phoneReg);
});
craeteDate.blur(function(){
    process(this, hintList[8]);
});
follow.blur(function(){
    process(this, hintList[9]);
})

reDesc.focus(function(){
    this.style.border = "1px #b3d4fc solid";
    if ($(this).next("div")[0] != undefined){
        $(this).next("div")[0].remove();
    }
})

// 获取验证码节点
var ver = $("#img-ver");
ver.click(function(){
    this.src = "validatecode.php";
})


// 获取提交节点
var submit = $(".submit");
submit.click(function(){
    data.patient_name = username.val();
    var patient_sex = $(".man");
    if (patient_sex[0].checked){
        data.patient_sex = "男";
    }else {
        data.patient_sex = "女";
    };
    data.patient_age = $("#age").val();
    data.patient_kg = $("#weight").val();
    data.patient_disease = illness.val();
    data.hospital = $("#hospital").val();
    data.department = $("#doctor").val();
    data.medic_name = paDrugName.val();
    data.medic_company = $("#drug-manufacturing").val();
    data.medic_batchnumber = $("#batchNum").val();
    data.withmedic_name = $("#drug-simultaneously").val();
    data.withmedic_company = $("#manufacturing-name").val();
    data.withmedic_batchnumber = $("#batchNum1").val();
    data.describe = $("#re-desc").val();
    data.reporter = $("#apply-name").val();
    data.reporter_phone = $("#contact").val();
    var addtime = $("#craete-date").val();
    addtime = new Date(addtime);    
    data.addtime = addtime.getTime();
    data.visit = $("#follow").val();
    data.ver = $('#ver').val();

    data.email = "1285215280@qq.com";
    
    if (
        data.patient_name
        && data.patient_sex &&
        data.patient_disease &&
        data.medic_name && 
        data.medic_company &&
        data.medic_batchnumber &&
        data.describe && data.reporter
        && data.reporter_phone &&
        data.addtime && 
        data.visit && 
        data.ver    
        ){
            AjaxPack({
                url: "sendmail.php",
                method: "post",
                data: data,
                aysn: true,
                success: function(re){
                    console.log(re);
                }
            })
        }else {
            alert("必填项需要全部填写")
        }

})


