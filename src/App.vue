<template>
  <HelloWorld msg="Vite" />
  <Tab />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Tab from './components/Tab.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Tab
  }
}
</script>
