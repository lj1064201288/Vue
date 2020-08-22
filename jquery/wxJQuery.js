//使用闭包，防止与外部命名冲突
(function (window) {

    //主体函数
    function wxJQuery(selector) {

        //如果参数是对象,直接使用对象
        if (typeof (selector) === "object") {

            this.el = [selector]; //集合

        } else {

            //通过参数获取元素对象
            this.el = document.querySelectorAll(selector); //集合

        }

    };

    //使用原型链设置方法，可以节约空间。

    //指定某个索引的元素
    wxJQuery.prototype.eq = function(index){

        if(isNaN(index)){index = 0;} //下标非数字处理
        index = parseInt(index); //转为数字
        if(index < 0 ){ index = 0; } //下标向左越界处理
        if(index > this.el.length ){ index = this.el.length; } //下标向右越界处理
 
        this.el = [this.el[index]]; //集合

        return this  //链式调用;
        
    }

    //指定某个索引的元素
    wxJQuery.prototype.each = function(fn){

        for (let i = 0; i < this.el.length; i++) {
            
            this.el[i].fn = fn;
            
            //使用this.el[i]执行调用fn,fn里面的this就指向的this.el[i]
            this.el[i].fn(this.el[i],i);
        }
       
        return this  //链式调用;
        
    }

    //html操作
    wxJQuery.prototype.html = function (val) {

        if (val) { //有值就设置每一个元素的内容
            for (let i = 0; i < this.el.length; i++) {
                this.el[i].innerHTML = val;
            }
            return this; //返回实例化的对象本身，以便链式调用。

        } else { //没值就获取第一个元素的内容

            return this.el[0].innerHTML;
        }
    }

    //css操作
    wxJQuery.prototype.css = function (option) {

        for (let i = 0; i < this.el.length; i++) {

            //依次设置style的每个属性
            for (const key in option) {
                if (option.hasOwnProperty(key)) {
                    this.el[i].style[key] = option[key];
                }
            }

        }
    }

    //事件操作
    wxJQuery.prototype.on = function (ev, fn) {

        // let _this = this;

        for (let i = 0; i < this.el.length; i++) {

            this.el[i].addEventListener(ev, function (e) {

                //_this
                this.fn = fn; //转移fn调用this指向this.el[0]
                this.fn(e);
            });

        }

        return this; //链式调用

    }


    //实例化
    function instance(selector) {
        return new wxJQuery(selector);
    }

    //将$赋值为实例化函数
    window.$ = instance;

})(window);
//直接传window提高性能，不用每次通过作用域链找到顶层。