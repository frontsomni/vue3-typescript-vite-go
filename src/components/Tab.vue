<template>
  <div class="tab" ref="tab">
    <ul>
      <li
        v-for="(item, i) of list"
        :key="item.id"
        @click="onClickTab(i)"
        :class="i === selectedIndex && 'selected'"
      >
        item • {{ item.value }}
      </li>
    </ul>
    <p>当前数值为：{{ selectedIndex }}</p>
  </div>
</template>

<script lang="ts">
import {
  createApp,
  defineAsyncComponent,
  computed,
  defineComponent,
  getCurrentInstance,
  isProxy,
  isRef,
  onMounted,
  reactive,
  ref,
  toRef,
  toRefs,
  unref,
  watch,
  Ref,
  watchEffect,
} from "vue"


interface ITab {
  selectedIndex: Ref<number>
  list: Array<{
    id: number
    value: string
  }>
  onClickTab(index: number): void
}


export default defineComponent({
  setup() {
    const selectedIndex: ITab['selectedIndex'] = ref(0);
    const list: ITab['list'] = reactive([
      {
        id: 0,
        value: "1",
      },
      {
        id: 1,
        value: "2",
      },
      {
        id: 100,
        value: "3",
      },
      {
        id: 200,
        value: '100'
      }
    ])

    const onClickTab: ITab['onClickTab']  = (index) => {
      selectedIndex.value = 11;
    };

    return {
      selectedIndex,
      onClickTab,
      list
    };
  },
});
</script>

<style scoped>
li {
  cursor: pointer;
  margin: 30px;
  border: 1px dashed currentColor;
}
li.selected {
  color: hotpink;
}
li::marker {
  font-size: 30px;
  content: "√";
}
</style>