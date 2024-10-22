<script setup lang="ts">
import { reactive } from "vue";
import Config from './components/Config.vue';
import TemplateConfig from './components/TemplateConfig.vue';

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
        <div class="draw-box"></div>
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
      width: 2970px;
      height: 2100px;
      transform: scale(0.2);
      transform-origin: top left;
      margin: 40px 120px;
      border: 1px solid #e6e6e6;
      background-color: #666;
    }
  }
}
</style>
