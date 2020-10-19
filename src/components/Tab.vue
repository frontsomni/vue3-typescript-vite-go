<template>
  <div class="tab" ref="tab">
    <h3>Tab.vue</h3>
    <ul>
      <li
        v-for="(item, i) of list"
        :key="item.id"
        @click="onClickTab(i)"
        :class="i === selectedIndex && 'selected'"
      >
      item • {{item.value}}
      </li>
    </ul>
    <p>当前数值为：{{selectedIndex}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
interface TabItem {
  id: number
  value: string
}
export default defineComponent({
  setup() {
    const selectedIndex = ref(0)
    const list: Array<TabItem> = reactive([{
      id: 0,
      value: '1'
    }, {
      id: 1,
      value: '2'
    }, {
      id: 100,
      value: '3'
    }])
    const onClickTab = (index) => {
      selectedIndex.value = index
    }

    return {
      selectedIndex,
      list,
      onClickTab
    }
  }
})
</script>

<style scoped>
li{
  cursor: pointer;
  margin: 30px;
  border: 1px dashed currentColor;
}
li.selected{
  color: hotpink;
}
li::marker{
  font-size: 30px;
  content: "√";
}
</style>