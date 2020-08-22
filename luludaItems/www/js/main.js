
// 获取验证码节点
var imgVer = document.querySelector(".img-ver");
imgVer.addEventListener("click", function(){
    this.removeAttribute("src");
    this.setAttribute("src", "validatecode.php");
})


// 创建存储容器
let cardInfo = {};

// 密码显示关闭函数
function pwdChange(){
    // 获取显示节点
    var pwdShow = document.querySelector(".pwd-item span");
    // 获取密码输入框节点
    var pwdInput = document.querySelector("#log-pwd");
    // 添加点击事件
    pwdShow.addEventListener("click", function(){
        if (this.className.includes("glyphicon-eye-close")){
            this.classList.remove("glyphicon-eye-close");
            this.classList.add("glyphicon-eye-open");
            pwdInput.setAttribute('type', "text");
        }else if (this.className.includes("glyphicon-eye-open")){
            this.classList.remove("glyphicon-eye-open");
            this.classList.add("glyphicon-eye-close");
            pwdInput.setAttribute('type', "password");
        }
    })
}
pwdChange();


// 获取卡号数据
let cardId = document.querySelector('#card');
// 获取卡号密码
let cardPwd = document.querySelector("#log-pwd");
// 获取验证码
let varNum = document.querySelector("#ver");

// varNum.addEventListener("blur", function(){
//     AjaxPack({
//         url: "validatecode.php",
//         method: 'post',
//         aysn: true,
//         data: {
//             "varNum": this.value
//         },
//         success: function(re){
//             console.log(re);    
//         }
//     })
// })

// 获取下一步按钮节点
var nextBtn = document.querySelector("#btn-next");

// 添加获取焦点事件
cardId.addEventListener("focus", function(){
    let parEle = this.parentNode;
    if (parEle.querySelector(".war")){
        var removeEle = parEle.querySelector(".war");
        parEle.removeChild(removeEle);   
    }
    nextBtn.removeAttribute("disabled");
})

cardPwd.addEventListener("focus", function(){
    let parEle = this.parentNode;
    if (parEle.querySelector(".war")){
        var removeEle = parEle.querySelector(".war");
        parEle.removeChild(removeEle);
    }
    nextBtn.removeAttribute("disabled");
})


nextBtn.addEventListener("click", function(){
    getData();
})
// 将页面上填写的数据存入到缓存中
function getData(){
    
    
    // 卡号正则判断
    cardIdReg = /^[0-9]{12}$/;
    
    if (cardIdReg.test(cardId.value)){
        cardInfo.cardId = cardId.value;
    }else {
        // 创建一个提示节点
        var newEle = document.createElement("div");
        newEle.classList.add("war");
        newEle.classList.add("glyphicon");
        newEle.classList.add("glyphicon-exclamation-sign");
        newEle.innerHTML = "卡号格式不正确";
        let parEle = cardId.parentNode;
        parEle.appendChild(newEle);
        nextBtn.setAttribute("disabled", "disabled");
        return;
    }

    // 密码正则判断
    let cardPwdReg = /^[0-9]{6}$/;
    let ideCardReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
   
    if (cardPwdReg.test(cardPwd.value) || ideCardReg.test(cardPwd.value)){
        cardInfo.cardPwd = cardPwd.value;
        cardInfo.verNum = varNum.value;
        console.log(cardInfo);
        AjaxPack({
            "method": "get",
            "url": "getData.php",
            "aysn": true,
            "data": cardInfo,
            "success": function(re){
                if (re == 1){
                    nextBtn.removeAttribute("disabled");
                    window.open("clause.html");
                }else if (re == "验证码错误"){
                    nextBtn.setAttribute("disabled", "disabled");
                    cardPwd.value = "";
                    cardId.value = "";
                    varNum.value = "";
                    imgVer.removeAttribute("src");
                    imgVer.setAttribute("src", "validatecode.php");
                    alert("验证码错误");
                    
                    return;
                }else{
                    nextBtn.setAttribute("disabled", "disabled");
                    cardPwd.value = "";
                    cardId.value = "";
                    varNum.value = "";
                    imgVer.removeAttribute("src");
                    imgVer.setAttribute("src", "validatecode.php");
                    alert("账号或者密码错误");
                    return;
                }
            }
        });
    }else {
        // 创建一个提示节点
        let newEle = document.createElement("div");
        newEle.classList.add("war");
        newEle.classList.add("glyphicon");
        newEle.classList.add("glyphicon-exclamation-sign");
        newEle.innerHTML = "密码格式不正确";
        let parEle = cardPwd.parentNode;
        parEle.appendChild(newEle);
        nextBtn.setAttribute("disabled", "disabled");
        return;
    }

    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));
    
}

