

function wxSelector(option) {

    var _this = this;

    //默认根对象
    this.selector = document.querySelector(".wx-select");

    //参数替换
    if(option){
        option.el ? this.selector = document.querySelector(option.el) : "";
    }

    /*
     * 生成
     */
    //获取系统select
    this.systemSelector = this.selector.querySelector(".wx-select-system"); //系统select
    this.index = this.systemSelector.selectedIndex; //当前选中项的索引值

    //创建自定义区域
    this.selectCustom = document.createElement("div");
    this.selectCustom.className = "wx-select-custom";

    //创建自定义已选显示
    this.selectCustomOuter = document.createElement("div");
    this.selectCustomOuter.className = "wx-select-custom-outer";

    //创建自定义列表容器
    this.selectCustomList = document.createElement("ul"); //先不添加其他控制样式

    //添加自定义列表内容
    let listHTML = "";
    itemOptions = this.systemSelector.querySelectorAll("option");
    for (let i = 0; i < itemOptions.length; i++) {
        listHTML += `<li>${itemOptions[i].innerHTML}</li>`;
    }
    this.selectCustomList.innerHTML = listHTML;

    //依次生成写入页面
    this.selectCustom.append(this.selectCustomOuter);
    this.selectCustom.append(this.selectCustomList);
    this.selector.insertBefore(this.selectCustom, this.systemSelector);

    /*
     * 重置属性
     */
    //先把正常长度的列表显示出来,获取到插件的宽度
    let selectorWidth = this.selectCustomList.clientWidth
    //显示宽度设置
    this.selectCustom.style.width = selectorWidth + "px";
    //再添加定位的样式
    this.selectCustomList.className = "wx-select-custom-list";
    
    //获取列表所有项
    this.selectCustomListItems = this.selectCustomList.querySelectorAll("li");
    
    /*
     * 方法
     */
    //设置选中
    this.setOptionSeleted = function (_index) {
        let options = this.systemSelector.querySelectorAll("option");
        for (let i = 0; i < options.length; i++) {
            if (i == _index) {
                options[i].selected = true;
            }
        }
    }
    //获取项,不传索引就获取当前选中项
    this.getOption = function(_index) {
        let options = this.systemSelector.querySelectorAll("option");
        if (options) {
            for (let i = 0; i < options.length; i++) {
                if (_index !== undefined) {
                    if (i == _index) {
                        return options[i];
                    }
                } else {
                    if (options[i].selected === true) {
                        return options[i];
                    }
                }
            }
            return options[0];
        }else{
            return "";
        }
    }

    /*
     * 添加事件
     */
    //自定义样式内容改变
    this.changeCustomSelect = function (_index){
        var lis = this.selectCustomListItems;
        for(let k = 0; k < lis.length; k++){
            lis[k].classList.remove("wx-select-selected");
        }
        lis[_index].classList.add("wx-select-selected");
        this.selectCustomOuter.innerHTML = this.getOption(_index).innerHTML;
    }

    //自定义列表绑定模拟选中事件
    for (let i = 0; i < this.selectCustomListItems.length; i++) {
        this.selectCustomListItems[i].onclick = function () {

            //设置选中值
            _this.setOptionSeleted(i);

            //隐藏列表
            _this.selectCustomList.classList.remove("show");

            //自定义样式内容改变
            _this.changeCustomSelect(i);

        }
    }

    //显示区域绑定事件：自定义列表展开/关闭
    this.selectCustomOuter.addEventListener("click", function () {
        if (Array.prototype.includes.call(_this.selectCustomList.classList, "show")) {
            _this.selectCustomList.classList.remove("show");
        } else {
            _this.selectCustomList.classList.add("show");
        }
    })

    //原生select改变事件
    this.systemSelector.onchange = function () {
        //自定义样式内容改变
        _this.changeCustomSelect(this.selectedIndex);

    }

    /*
     * 初始化
     */
    //初始化显示区域
    _this.changeCustomSelect(this.index);

    window.addEventListener("click",function(e){
       
        //判断点击的对象是否在自定义选择框内
        var inPath = e.path.filter((item)=>{
            if(item.className && item.className==="wx-select-custom"){
                return true;
                console.log(item.className);
            }
        })
        //如果不自定义选择框内,就隐藏所有打开的选择列表
        if(inPath.length < 1){
            let arrlist = document.querySelectorAll(".wx-select-custom-list");
            for(let i = 0; i < arrlist.length; i++){
                arrlist[i].classList.remove("show");
            }
        }
        
        
    })

}
