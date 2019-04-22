<template>
  <div class="hello">
    <img src="../assets/vortex.jpeg">
    <div class="text">\{{msg}}</div>
    {{#if_eq hasComponent "Yes"}}
    <vm-button tag="a" href="http://vortex.zj.chinamobile.com/components" block size="lg" class="bg-blue button-item">组件库</vm-button>
    {{/if_eq}}
  </div>
</template>

<script>
{{#if_eq hasComponent "Yes"}}
import { Button } from 'vortex-mobile';
{{/if_eq}}
export default {
  name: 'HelloMobileTemplate',
  {{#if_eq hasComponent "Yes"}}
  components: {
    [Button.name]: Button,
  },
  {{/if_eq}}
  data() {
    return {
      msg: 'Welcome to vortex',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
img {
  width: 200px;
  text-align: center;
  padding-top: 100px;
}
.text {
  margin-top: 100px;
  text-align: center;
  font-size: 32px;
}
{{#if_eq hasComponent "Yes"}}
.button-item {
  position: fixed;
  bottom: 0;
}
{{/if_eq}}
</style>
