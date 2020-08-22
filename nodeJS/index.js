var fs = require("fs");

fs.readFile("data.txt", function(error, data){
    let obj =  JSON.parse(data.toString());

    obj.forEach(item => {
        if (item.product == "苹果"){
            item.price = "8888";
        }else if (item.product == "华为"){
            item.price = "6666";
        }else if (item.product == "小米"){
            item.price = "3333";
        }
    });

    obj = JSON.stringify(obj);

    console.log(obj);
    fs.writeFile("data.txt", obj, function(error){
        if (error){
            console.log("存入失败", error);
            return false;
        }

        console.log("存入成功！！！");
    });
})