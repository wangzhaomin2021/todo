<script setup lang="ts">
import { reactive, onMounted, ref, computed } from "vue";
import Config from './components/Config.vue';
import TemplateConfig from './components/TemplateConfig.vue';
import { Leafer, Rect } from 'leafer-ui'

const scale = ref(0.22);
const width = computed(() => 2970 * scale.value);
const widthStyle = computed(() => 2970 * scale.value + 'px');
const height = computed(() => 2100 * scale.value);
const heightStyle = computed(() => 2100 * scale.value + 'px');

const drawBoxRef = ref<HTMLDivElement>();

onMounted(() => {

  const leafer = new Leafer({
    view: drawBoxRef.value,
    type: 'draw'
    // width: width.value,
    // height: height.value,
  })

  const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79' // 背景色
  })

  leafer.add(rect)
})


const formInline = reactive({
  user: "",
  region: "",
  date: "",
});

const onSubmit = () => {
  console.log("submit!");
};


</script>

<template>
  <div class="layout">
    <div class="setting">
      <el-tabs type="border-card">
        <el-tab-pane label="Config">
          <Config />
        </el-tab-pane>
        <el-tab-pane label="TemplateConfig">
          <TemplateConfig />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="panel">
      <div class="draw-box" ref="drawBoxRef"></div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.layout {
  display: flex;

  .setting {
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
    height: 100vh;
    overflow: auto;
    border-right: 1px solid #e6e6e6;
  }

  .panel {
    width: 820px;
    height: 100vh;
    flex-shrink: 0;

    .draw-box {
      // box-sizing: border-box;
      // width: v-bind(widthStyle);
      // height: v-bind(heightStyle);
      width: 2970px;
      height: 2100px;
      transform: scale(0.22);
      transform-origin: 0 0;
      margin: 60px 88px;
      border: 2px solid #b0b0b0;
      // background-color: #666;
    }
  }
}
</style>
