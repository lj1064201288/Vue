// 生效时间选中范围
function scopcTime(){
    let t = new Date();
    let startTime = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`;
    let endTime = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()+2}`;
    cardInfo.createTime = startTime;
    // 获取时间范围节点
    var startTimeDom = document.querySelector(".timestart");
    var endTimeDom = document.querySelector(".timeend");
    startTimeDom.innerHTML = startTime;
    endTimeDom.innerHTML = endTime;
}



// 正则
var nameReg = /^[\u4e00-\u9fa5]{2,18}$/,
    ideCardReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i,
    phoneReg = /^1[3456789]\d{9}$/,
    emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
    passportReg = /^((1[45]\d{7})|(G\d{8})|(P\d{7})|(S\d{7,8}))?$/;



// 获取表单内容输入框
var username = document.querySelector("#username");
var certType = document.querySelector("#cert-type");
var certNum = document.querySelector("#cert-num");
var manDom = document.querySelector("#man");
var womanDom = document.querySelector("#woman");
var birthday = document.querySelector("#birthday");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var address = document.querySelector("#address");

// 获取下一页按钮节点
var btnNext = document.querySelector("#btn-next");

// 打开本地数据
var cardInfo = JSON.parse(localStorage.getItem("cardInfo"));



// 使用身份证判断
function judgeIde(ide){
    var date = ide.substring(6, 14);
    return `${date.substring(0,4)}-${date.substring(4,6)}-${date.substring(6)}`;
}

// 输入身份证后验证
certNum.addEventListener("blur", function(){
    if (certType.value == 1){
        if (ideCardReg.test(this.value)){
            var certID = this.value;
            cardInfo.certNum = certID;

            if (certID[certID.length-2] % 2 == 0){
                if (manDom.checked == true){
                    manDom.checked = false;
                    womanDom.checked = true
                }
            }else if (certID[certID.length-2] % 2 != 0) {
                if (womanDom.checked == true){
                    womanDom.checked = false;
                    manDom.checked = true
                }
            }
            birthday.value = judgeIde(certID);
            let oldDate = new Date(birthday.value);
            let newDate = new Date();
            let age = Math.floor((newDate-oldDate)/1000/60/60/24/365);
            if(age < 18 || age > 70){
                alert("不满足受保条件");
                username.value = "";
                certNum.value = "";
                birthday.value = "";
                email.value = "";
                phone.value = "";
                address.value = "";
            }
            // 获取年龄显示节点
            let ageDom = document.querySelector(".age");
            ageDom.innerHTML = age;
        }else {
            this.value = "";
            this.placeholder = "身份证格式不正确";
        }
    }else if(certType.value == 2){

        if (passportReg.test(this.value)){
            var certID = this.value;
            cardInfo.certNum = certID;
            birthday.addEventListener("input", function(){
                // 添加年龄信息
                let oldDate = new Date(this.value);
                let newDate = new Date();
                let age = Math.floor((newDate-oldDate)/1000/60/60/24/365);
                if(age < 18 || age > 70){
                    alert("不满足投保条件")
                }
                
                // 获取年龄显示节点
                let ageDom = document.querySelector(".age");
                ageDom.innerHTML = age;
            })
        }else {
            this.value = "";
            this.placeholder = "护照格式不正确";
        }
    }
})

// 添加姓名正则判断
blurEvent(username, nameReg, 'username');

// 添加你邮箱判断
blurEvent(email, emailReg, 'email');

// 电话正则判断
blurEvent(phone, phoneReg, 'phone');


// 焦点结束事件
function blurEvent(element, reg, name){
    
    element.addEventListener("blur", function(){
       
        // 判断姓名是否正确
        if (reg.test(this.value)){
            cardInfo[name] = this.value;
        }else{
            this.value = "";
            this.placeholder = "填写格式不正确";
        }
    })
}

// 获取被保人节点
var payeeJudge = document.querySelector("#payee-judge");

var payee = document.querySelector("#payee");
var payeeCartType = document.querySelector("#payee-cert-type");
var payeeCartNum = document.querySelector("#payee-cert-num");
var payeemanDom = document.querySelector("#payee-man");
var payeewomanDom = document.querySelector("#payee-woman");
var payeebirthday = document.querySelector("#payee-birthday");
var payeeemail = document.querySelector("#payee-email");
var payeephone = document.querySelector("#payee-phone");
var payeeaddress = document.querySelector("#payee-address");

var scopeDete = document.querySelector(".scope-dete");

// 添加受保人姓名正则判断
blurEvent(payee, nameReg, "payee");

// 添加受保人邮箱判断
blurEvent(payeeemail, emailReg, "payeeemail");

// 电话受保人正则判断
blurEvent(payeephone, phoneReg, "payeephone");

// 添加一键复制事件
payeeJudge.addEventListener("input", function(){
    if (this.value == 1){
        payee.value = username.value;
        payeeCartType.value = certType.value;
        payeeCartNum.value = certNum.value;
        payeebirthday.value = birthday.value;
        payeeemail.value = email.value;
        payeephone.value = phone.value;
        payeeaddress.value = address.value;

        var certID = payeeCartNum.value;
        
        if (certID[certID.length-2] % 2 == 0){
            if (payeemanDom.checked == true){
                payeemanDom.checked = false;
                payeewomanDom.checked = true
            }
        }else if (certID[certID.length-2] % 2 != 0) {
            if (payeewomanDom.checked == true){
                payeewomanDom.checked = false;
                payeemanDom.checked = true
            }
        }
    }else{
        payee.value = "";
        payeeCartNum.value = "";
        payeebirthday.value = "";
        payeeemail.value = "";
        payeephone.value = "";
        payeeaddress.value = "";
        
        // 输入身份证后验证
        payeeCartNum.addEventListener("blur", function(){
            if (payeeCartType.value == 1){
                if (ideCardReg.test(this.value)){
                    var certID = this.value;
                    cardInfo.payeeCartType = certID;

                    if (certID[certID.length-2] % 2 == 0){
                        if (payeemanDom.checked == true){
                            payeemanDom.checked = false;
                            payeewomanDom.checked = true
                        }
                    }else if (certID[certID.length-2] % 2 != 0) {
                        if (payeewomanDom.checked == true){
                            payeewomanDom.checked = false;
                            payeemanDom.checked = true
                        }
                    }
                    payeebirthday.value = judgeIde(certID);
                    let oldDate = new Date(payeebirthday.value);
                    let newDate = new Date();
                    let age = Math.floor((newDate-oldDate)/1000/60/60/24/365);
                    if(age < 18 || age > 70){
                        alert("不满足受保条件");
                        payee.value = "";
                        payeeCartNum.value = "";
                        payeebirthday.value = "";
                        payeeemail.value = "";
                        payeephone.value = "";
                        payeeaddress.value = "";
                    }
                    

                    // 获取年龄显示节点
                    let payeeageDom = document.querySelector(".payee-age");
                    payeeageDom.innerHTML = age;
                }else {
                    this.value = "";
                    this.placeholder = "身份证格式不正确";
                }
            }else if(payeeCartType.value == 2 || payeeCartType.value == 0){
                if (passportReg.test(this.value)){
                    var certID = this.value;
                    cardInfo.payeecertNum = certID;
                    payeebirthday.addEventListener("blur", function(){
                        // 添加年龄信息
                        let oldDate = new Date(this.value);
                        let newDate = new Date();
                        let age = Math.floor((newDate-oldDate)/1000/60/60/24/365);
                        // 获取年龄显示节点
                        let payeeageDom = document.querySelector(".payee-age");
                        payeeageDom.innerHTML = age;
                    })
                }else {
                    this.value = "";
                    this.placeholder = "护照格式不正确";
                }
            }
        })
    }
})
btnNext.addEventListener("click", function(){
    cardInfo.username = username.value;
    if (certType.value == 1){
        cardInfo.certType = "身份证";
    }else {
        cardInfo.certType = "护照";
    }
    cardInfo.certNum = certNum.value;
    if (manDom.checked == true){
        cardInfo.sex = "男";
    }else{
        cardInfo.sex = "女";
    }
    cardInfo.birthday = birthday.value;
    cardInfo.email = email.value;
    cardInfo.phone = phone.value;
    cardInfo.address = address.value;
    cardInfo.payeeJudge = payeeJudge.value;
    if (payeeJudge.value == 0){
        cardInfo.payeeJudge = "子女";
    }else if(payeeJudge.value == 1){
        cardInfo.payeeJudge = "本人";
    }else if (payeeJudge.value == 2){
        cardInfo.payeeJudge = "被监护人";
    }
    cardInfo.payee = payee.value;
    cardInfo.payeeCartType = payeeCartType.value;
    
    if (payeeCartType.value == 1){
        cardInfo.payeeCartType = "身份证";
    }else {
        cardInfo.payeeCartType = "护照";
    }
    cardInfo.payeeCartNum = payeeCartNum.value;
    
    if (payeemanDom.checked == true){
        cardInfo.payeesex = "男";
    }else{
        cardInfo.payeesex = "女";
    }
    cardInfo.payeeemail = payeeemail.value;
    cardInfo.payeephone = payeephone.value; 
    cardInfo.payeeaddress = payeeaddress.value; 
    cardInfo.payeebirthday = payeebirthday.value;
    cardInfo.scopeTime = scopeDete.value;

    var keys = [];
    var values = [];

   

    for (const key in cardInfo){
        if (key == "email" || key == "payeeemail"){
                continue;
        }else {
            keys.push(key);
            values.push(cardInfo[key]);
        }
    }
    values = values.filter(item => {
        return item && item.trim;
    })
    
    if (keys.length == values.length){
        btnNext.removeAttribute("disabled");
        cardInfo.cardstatus = 1;
        AjaxPack({
            url: 'downData.php',
            data: cardInfo,
            method: 'post',
            aysn: true,
            success: function(re){
                if (re == "数据更新成功"){
                    window.open("info.html");
                }
            }
        })
    }
})

// 获取卡号节点
var cardDom = document.querySelector(".card-id span");

cardDom.innerHTML = cardInfo['cardId'];
scopcTime();