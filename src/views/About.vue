<template>
  <div class="about">
    <h1>{{ PageName }}</h1>
    <h1>{{ PageDescription }}</h1>
  </div>
</template>
<script>
export default {
  data: function(){
   return{
      PageName:"About",
      PageDescription:"this is about page",
   };
  },
  name: "About",

};
</script>
