<template>
  <div class="myform form-horizontal">
    <div class="form-group form-inline">
      <label for="username" class="control-label col-sm-2 col-sm-offset-3">姓名: </label>
      <input type="text" placeholder="请输入姓名" v-model="username" id="username" class="username form-control col-sm-3">
    </div>
    <div class="form-group form-inline">
      <label for="card" class="control-label col-sm-2 col-sm-offset-3">身份证号: </label>
      <input type="text" placeholder="请输入身份证号" v-model="card" id="card" class="card form-control col-sm-3">
      <span class="col-sm-2">{{cardVer}}</span>
    </div>
    <div class="form-group form-inline">
      <label for="validity" class="control-label col-sm-2 col-sm-offset-3">身份证有效期: </label>
      <input type="date" placeholder="身份证有效期" v-model="validity" id="validity" class="validity form-control col-sm-3">
    </div>
    <div class="form-group form-inline">
      <label class="control-label col-sm-2 col-sm-offset-3">户籍所在地: </label>
      <div class="form-group col-sm-3">
        <select name="prov" id="prov" class="form-control" v-model="districts">
          <option value="请选择">--请选择--</option>
          <option value="四川省">四川省</option>
          <option value="广东省">广东省</option>
          <option value="云南省">云南省</option>
        </select>
        <select name="city" id="city" class="form-control" v-model="re">
          <option value="请选择">--请选择--</option>
          <option v-for="(item, index) in citys" :key="index" :value="item">{{item}}</option>
        </select>
      </div>
    </div>
    <div class="form-group form-inline">
      <label for="phone" class="control-label col-sm-2 col-sm-offset-3">请输入手机号码: </label>
      <input type="text" placeholder="请输入手机号码" v-model="phone" id="phone" class="phone form-control col-sm-3">
      <span class="col-sm-2">{{phoneVer}}</span>
    </div>
    <div class="form-group form-inline">
      <label for="company" class="control-label col-sm-2 col-sm-offset-3">请输入公司: </label>
      <input type="text" placeholder="请输入公司" v-model="company" id="company" class="company form-control col-sm-3">
    </div>
    <div class="form-group form-inline">
      <label for="linkman" class="control-label col-sm-2 col-sm-offset-3">公司联系人: </label>
      <input type="text" placeholder="公司联系人" v-model="linkman" id="linkman" class="linkman form-control col-sm-3">
    </div>
    <div class="form-group form-inline">
      <label for="prove" class="control-label col-sm-2 col-sm-offset-3">准备材料: </label>
      <input type="text" id="prove" class="prove form-control col-sm-3 " v-model="prove">
    </div>
    <div class="form-group form-inline">
      <label for="area" class="control-label col-sm-2 col-sm-offset-3">落户地区: </label>
      <input type="text" placeholder="落户地区" v-model="area" id="area" class="area form-control col-sm-3">
    </div>
    <div class="form-group form-inline">
      <a href="javascript:" class="btn btn-success" @click="upDate">提交</a>
    </div>

  </div>
</template>

<script>

export default {
  name: "fill",
  props: ["obj", "getData"],
  data: function (){
    return{
      username:"",
      re: '请选择',
      card: "",
      validity: "",
      district: "请选择",
      phone: "",
      city: {
          "四川省": ['成都市', "德阳市", "绵阳市", "达州市", "宜宾市", "南充市"],
          "广东省": ['广州市', "汕头市", "深圳市", "珠海市", "潮汕市"],
          "云南省": ["香格里拉", "昆明市", "丽江市", "红河市"]
      },
      citys: "",
      company: "",
      linkman: "",
      area: "",
      prove: "",
      cardVer: "",
      phoneVer: "",
    }
  },
  watch: {
    card(value, old){
      if (value){
        var cardReg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        if (cardReg.test(value)){
          this.cardVer = "验证成功"
          $(".card").next("span").addClass('green');
        }else {
          this.cardVer = "身份证格式不正确"
          $(".card").next("span").removeClass("green");
        }
      }
    },
    phone(value, old){
      if (value) {
        var phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        if (phoneReg.test(value)) {
          this.phoneVer = "验证成功"
          $(".phone").next("span").addClass('green');
        } else {
          this.phoneVer = '手机号码格式不正确'
          $(".phone").next("span").removeClass("green");
        }
      }
    }
  },
  computed: {
    districts: {
      get: function (){
        return this.district;
      },
      set: function (value) {
          console.log(value);
          this.district = value;
          console.log(this.city);
          this.citys = this.city[value];
      }
    },
  },
  methods: {
    upDate: function (){
        this.getData({
          username: this.username,
          card: this.card,
          validity: this.validity,
          district: this.districts,
          re: this.re,
          phone: this.phone,
          company: this.company,
          linkman: this.linkman,
          area: this.area,
          prove: this.prove,

        })
    }
  },
  mounted() {
    if(this.obj.length >= 1){
      // console.log(this.obj)
      this.username = this.obj[0].username;
      this.card = this.obj[0].card;
      this.validity = this.obj[0].validity;
      this.district = this.obj[0].district;
      this.phone = this.obj[0].phone;
      this.company = this.obj[0].company;
      this.linkman = this.obj[0].linkman;
      this.area = this.obj[0].area;
      this.prove = this.obj[0].prove;
      this.re = this.obj[0].re;
      // console.log( this.username,  this.card, this.district, this.validity, this.phone, this.company, this.linkman)
      this.citys = this.city[this.district];
    }
  }
}
</script>

<style scoped>
.myform {
  padding: 30px;
  margin: 20px;
  border: 1px #dddddd solid;
  box-shadow: 1px 1px 5px 3px #eeeeee;

}
input {
  min-width: 200px;
}
span {
  color: red;
  margin-top: 10px;
}
.green {
  color: green;
}
#prov {
  margin-left: -15px;
}
</style>
