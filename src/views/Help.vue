<template>
  <div class="help">
    <h1>{{ PageName }}</h1>
    <h1>{{ PageDescription }}</h1>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      PageName: "Help",
      PageDescription: "this is help page",
    };
  },
  name: "Help",
};
</script>
