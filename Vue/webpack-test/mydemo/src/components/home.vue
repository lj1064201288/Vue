<template>
    <div>
     home
    </div>
</template>
<script>
export default {
    props:["time","check_login","roles"],
    data:function () {
        return {
            c_name:"",
            c_password:""
        }
      },
      methods:{
          login:function(){
              if(this.c_name&&this.c_password){
                  // this.check_login({name:this.c_name,pw:this.c_password})
                 // this.$emit("check_login",{name:this.c_name,pw:this.c_password})
              }
          }
      },
      mounted:function(){
        console.log(this.$route.params,"home")
      }
}
</script>
