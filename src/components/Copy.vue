<template>
  <div class="copy">
    <h3>复制</h3>
    <input ref="input" type="text" v-model="value" />
    <button
      @click="onCopy"
    >Copy</button>
    <button @click="onClear">clear</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'copy',
  setup() {
    const input = ref()
    const value = ref('')
    const onCopy = () => {
      input.value.select()
      document.execCommand('Copy')
    }

    const onClear = () => {
      value.value = ''
      input.value.select()
      document.execCommand('Copy')
    }

    return {
      onCopy,
      input,
      value,
      onClear
    }
  }
})
</script>