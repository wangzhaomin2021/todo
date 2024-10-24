<script setup lang="ts">
import { config } from '../data';

const spans = {
  title: 3,
  text: 6,
  spacing: 4,
  bold: 3,
  left: 4,
  top: 4,
};


</script>

<template>
  <el-form :inline="true" :model="config" size="small">
    <!-- 类表头 -->
    <el-row class="header-like">
      <el-col :span="spans.title"></el-col>
      <el-col :span="spans.text">
        <el-form-item label="文本"></el-form-item>
      </el-col>
      <el-col :span="spans.spacing">
        <el-form-item label="间距"></el-form-item>
      </el-col>
      <el-col :span="spans.bold">
        <el-form-item label="加粗"></el-form-item>
      </el-col>
      <el-col :span="spans.left">
        <el-form-item label="左边"></el-form-item>
      </el-col>
      <el-col :span="spans.top">
        <el-form-item label="顶边"></el-form-item>
      </el-col>
    </el-row>

    <!-- 代码 -->
    <el-row>
      <el-col :span="spans.title"><span class="title">抬头:</span></el-col>
      <el-col :span="spans.text">
        <el-form-item label="">
          <el-input v-model="config.creditCode.label.text" />
        </el-form-item>
      </el-col>

      <el-col :span="spans.spacing">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.creditCode.label.spacing" controls-position="right"
            :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.bold">
        <el-form-item label="">
          <el-switch v-model="config.creditCode.label.bold"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="spans.left">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.creditCode.label.left" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.top">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.creditCode.label.top" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 名称 -->
    <el-row>
      <el-col :span="spans.title"><span class="title">名称:</span></el-col>
      <el-col :span="spans.text">
        <el-form-item label="">
          <el-input v-model="config.name.label.text" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.spacing">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.name.label.spacing" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.bold">
        <el-form-item label="">
          <el-switch v-model="config.name.label.bold"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="spans.left">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.name.label.left" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.top">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.name.label.top" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 类型 -->
    <el-row>
      <el-col :span="spans.title"><span class="title">类型:</span></el-col>
      <el-col :span="spans.text">
        <el-form-item label="">
          <el-input v-model="config.typeOfEnterprise.label.text" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.spacing">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.typeOfEnterprise.label.spacing" controls-position="right" :min="0"  />
        </el-form-item>
      </el-col>
      <el-col :span="spans.bold">
        <el-form-item label="">
          <el-switch v-model="config.typeOfEnterprise.label.bold"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="spans.left">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.typeOfEnterprise.label.left" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.top">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.typeOfEnterprise.label.top" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 法人 -->
    <el-row>
      <el-col :span="spans.title"><span class="title">法人:</span></el-col>
      <el-col :span="spans.text">
        <el-form-item label="">
          <el-input v-model="config.legalRepresentative.label.text"  />
        </el-form-item>
      </el-col>
      <el-col :span="spans.spacing">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.legalRepresentative.label.spacing" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.bold">
        <el-form-item label="">
          <el-switch v-model="config.legalRepresentative.label.bold"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="spans.left">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.legalRepresentative.label.left" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
      <el-col :span="spans.top">
        <el-form-item label="">
          <el-input-number :precision="0" v-model="config.legalRepresentative.label.top" controls-position="right" :min="0" />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 【经营】范围 -->
    <el-row>
      <el-col :span="2"><span class="title">范围:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 【注册】资本 -->
    <el-row>
      <el-col :span="2"><span class="title">资本:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 成立【日期】 -->
    <el-row>
      <el-col :span="2"><span class="title">成立:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 经营期限 -->
    <el-row>
      <el-col :span="2"><span class="title">期限:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 组成形式 -->
    <el-row>
      <el-col :span="2"><span class="title">组成:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 个体住所 -->
    <el-row>
      <el-col :span="2"><span class="title">个体住所:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 公司住所 -->
    <el-row>
      <el-col :span="2"><span class="title">公司住所:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="config.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 二维码描述 -->
    <el-row>
      <el-col :span="2"><span class="title">二维码描述:</span></el-col>
      <el-col :span="8">
        <el-form-item label="模板">
          <el-input type="textarea" :rows="4" v-model="config.user" />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="config.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="12">
            <el-form-item label="字号">
              <el-input v-model="config.user" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="间距">
              <el-input v-model="config.user" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="左边">
              <el-input v-model="config.user" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="顶边">
              <el-input v-model="config.user" clearable />
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped lang="scss">
.header-like {
  :deep(.el-form-item__label) {
    font-size: 12px;
    font-weight: bold;
    color: #666;
  }
}

.title {
  font-size: 12px;
  font-weight: bold;
  color: #666;
}
</style>
