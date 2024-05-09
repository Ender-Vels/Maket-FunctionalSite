<script>
import HeaderBlock from "./components/Header/HeaderBlock.vue";
export default {
  components:{
    HeaderBlock
  }
}
</script>

<template>
<div class="app container">
  <HeaderBlock/>
</div>
<RouterView/>
</template>

<style>
@import "style.css";
</style>
