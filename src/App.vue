<script setup lang="ts">
import { reactive, onMounted, ref, computed, watch, } from "vue";
import Config from './components/Config.vue';
import TemplateConfig from './components/TemplateConfig.vue';
import { Leafer, Rect, Text } from 'leafer-ui';
import { config } from './data';

const scale = ref(0.25);
// const width = computed(() => 2970 * scale.value);
const widthStyle = computed(() => 2970 * scale.value + 'px');
// const height = computed(() => 2100 * scale.value);
const heightStyle = computed(() => 2100 * scale.value + 'px');

const drawBoxRef = ref<HTMLDivElement>();



onMounted(() => {

  const leafer = new Leafer({
    view: drawBoxRef.value,
    type: 'draw'
    // width: width.value,
    // height: height.value,
  })

  function draw() {
    console.log('draw')
    leafer.clear()
    const texts: Text[] = []
    for(const item of Object.values(config.value)) {
      console.log('item', item)
      if (typeof item === 'object' && item) {
        if (!item.show) continue

        // 收集绘制文本
        {
          const { left, top, text, bold, spacing, fontSize, fontFamily } = item.label
          if (text && [left, top, spacing, fontSize].every(Number.isInteger)) {
            const textObj = new Text({
              text: text,
              x: left * scale.value,
              y: top * scale.value,
              fill: '#000',
              fontWeight: bold ? 'bold' : 'normal',
              letterSpacing: spacing,
              fontSize: (fontSize || 48) * scale.value,
              fontFamily: fontFamily || '宋体',
            })
  
            texts.push(textObj)
          }
        }

        {
          const { left, top, text, bold, spacing, fontSize,fontFamily } = item.value
          if (text && [left, top, spacing, fontSize].every(Number.isInteger)) {
            const textObj = new Text({
              text: text,
              x: left * scale.value,
              y: top * scale.value,
              fill: '#000',
              letterSpacing: spacing,
              fontWeight: bold ? 'bold' : 'normal',
              fontSize: (fontSize || 48) * scale.value,
              fontFamily: fontFamily || '宋体',
            })
  
            texts.push(textObj)
          }
        }

      }
    }

    leafer.addMany(...texts)
  }

  watch(config, (newVal) => {
    console.log(newVal)
    draw()
  }, { deep: true })
})


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
      width: v-bind(widthStyle);
      height: v-bind(heightStyle);
      // width: 2970px;
      // height: 2100px;
      // transform: scale(0.22);
      // transform-origin: 0 0;
      // margin: 60px 88px;
      margin: 60px auto;
      border: 2px solid #b0b0b0;
      // background-color: #666;
    }
  }
}
</style>
