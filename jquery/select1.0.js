

function WXSelect(option) {

    var selector = document.querySelectorAll(".wx-select");

   if(option){
        option.el ? selector = document.querySelectorAll(option.el) : "";
    } 

    //设置select选中
    function setOptionSeleted(_select, _index) {
        let options = _select.querySelectorAll("option");
        for (let i = 0; i < options.length; i++) {
            if (i == _index) {
                options[i].selected = true;
            }
        }
    }

    //通过索引获取select的option项,默认当前选中项
    function getOption(_select, _index) {
        let options = _select.querySelectorAll("option");
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

    //改变自定义样式和显示值
    function changeCustomSelect(_selectcustom, _outer, _sys, _index){
        for(let k = 0; k < _selectcustom.length; k++){
            _selectcustom[k].classList.remove("wx-select-selected");
        }
        _selectcustom[_index].classList.add("wx-select-selected");
        _outer.innerHTML = getOption(_sys, _index).innerHTML;
    }

    //遍历所有selector
    for (let i = 0; i < selector.length; i++) {

        //获取系统select
        let systemSelector = selector[i].querySelector(".wx-select-system"); //系统select
        var index = systemSelector.selectedIndex;

        //创建整个区域
        let selectCustom = document.createElement("div");
        selectCustom.className = "wx-select-custom";

        //创建已选显示
        let selectCustomOuter = document.createElement("div");
        selectCustomOuter.className = "wx-select-custom-outer";

        //创建列表容器
        let selectCustomList = document.createElement("ul");

        //添加列表
        let listHTML = "";
        itemOptions = systemSelector.querySelectorAll("option");
        for (let i = 0; i < itemOptions.length; i++) {
            listHTML += `<li`;
            if (i == index) listHTML += ` class="wx-select-selected" `; //选中状态
            listHTML += `>${itemOptions[i].innerHTML}</li>`;
        }
        selectCustomList.innerHTML = listHTML;

        selectCustom.append(selectCustomOuter);
        selectCustom.append(selectCustomList);
        selector[i].insertBefore(selectCustom, systemSelector);

        let selectorWidth = selectCustomList.clientWidth
        //先把正常长度的列表显示出来,获取到插件的宽度
        selectCustom.style.width = selectorWidth  + "px";
        //再添加定位的样式
        selectCustomList.className = "wx-select-custom-list";

        //设置选中值
        selectCustomOuter.innerHTML = getOption(systemSelector).innerHTML;

        //格式保留
        // selector[i].innerHTML = `<div class="wx-select-custom">
        //     <div class="wx-select-custom-outer">HTML基础及H5标签</div>
        //     <ul class="wx-select-custom-list">
        //         <li>HTML基础及H5标签</li>
        //         <li class="wx-select-selected">HTML基础及H5标签</li>
        //         <li>HTML基础及H5标签</li>
        //     </ul>
        // </div>`;

        var lis = selectCustomList.querySelectorAll("li");
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {

                //设置选中值
                setOptionSeleted(systemSelector, i);

                //改动显示值
                selectCustomOuter.innerHTML = this.innerHTML;

                //隐藏列表
                selectCustomList.classList.remove("show");

                for(let k = 0; k < lis.length; k++){
                    lis[k].classList.remove("wx-select-selected");
                }
                lis[i].classList.add("wx-select-selected");

            }
        }

        //列表展开/关闭
        selectCustomOuter.addEventListener("click", function () {
            if(Array.prototype.includes.call(selectCustomList.classList,"show")){
                selectCustomList.classList.remove("show");               
            }else{
                selectCustomList.classList.add("show");
            }
        })

        systemSelector.onchange = function(){
          
            changeCustomSelect(lis,selectCustomOuter, this, this.selectedIndex );
            
        }

    }

}

