<script setup lang="ts">
import { config } from '../data';

</script>

<template>
  <el-form :inline="true" :model="config" size="small" label-width="76px">
    <!-- 抬头 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="抬头左边">
          <el-input-number :precision="0" v-model="config.creditCode.value.left" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="抬头顶边">
          <el-input-number :precision="0" v-model="config.creditCode.value.top" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="抬头字号">
          <el-input-number :precision="0" v-model="config.creditCode.value.fontSize" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 名称 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="名称左边">
          <el-input-number :precision="0" v-model="config.name.value.left" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="名称顶边">
          <el-input-number :precision="0" v-model="config.name.value.top" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="名称字号">
          <el-input-number :precision="0" v-model="config.name.value.fontSize" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 类型 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="类型左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="类型顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 法人 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="法人左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="法人顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 【经营】范围 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="经营左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="经营顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="经营字号">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 【注册】资本 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="资金左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="资金顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 成立【日期】 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="成立左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="成立顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 经营期限 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="期限左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="期限顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 组成形式 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="组成左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="组成顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 地址 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="地址左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="地址顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="地址字号">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 发证年 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="发证年左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="发证年顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 发证月 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="发证月左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="发证月顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 发证日 -->
    <el-row>
      <el-col :span="4">
        <el-form-item label="发证日左边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="发证日顶边">
          <el-input v-model="config.user" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 二维码 -->
    <el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="二维码左边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="二维码顶边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="二维码大小">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-row>

    <!-- 公章 -->
    <el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="公章左边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="公章顶边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="公章宽度">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="公章高度">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-row>

    <!-- 编号 -->
    <el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="编号内容">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编号左边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编号顶边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编号字号">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编号字体">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编号加粗">
            <el-switch v-model="config.user" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-row>

    <!-- 提示 -->
    <el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="提示左边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="提示顶边">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="提示宽度">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="提示高度">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-row>

    <!-- 打印机 -->
    <el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="打印机宽度">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="打印机高度">
            <el-input v-model="config.user" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="">
            <el-radio-group v-model="config.user">
              <el-radio value="A4">A4纸</el-radio>
              <el-radio value="A3">A3纸</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-row>
  </el-form>
</template>

<style scoped>
.title {
  font-size: 12px;
  font-weight: bold;
  color: #666;
}
</style>
