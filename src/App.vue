<template>
  <div>
    <h3>Home</h3>
    <router-view class="full-screen"></router-view>
    <p><router-link to="/tab">Go to Tab</router-link></p>
    <p>
      <router-link to="/copy">Go to Copy</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'App',
})
</script>


<style scoped>
.full-screen{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;;
  height: 100%;
  background: #fff;
}
</style>