<template>
  <div class="home">
    <slider></slider>
    <owel></owel>
    <trend></trend>
    <feature></feature>
    <contact></contact>
  </div>
</template>
<script>
import slider from '@/components/slider';
import owel from '@/components/owel';
import trend from '@/components/trend';
import feature from '@/components/feature';
import contact from '@/components/contact';
export default {
  name: "Home",
  components: {
    slider,
    owel,
    trend,
    feature,
    contact,
  },
};
</script>
