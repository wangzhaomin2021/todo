<script setup lang="ts">
import { reactive } from "vue";

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
  <el-form :inline="true" :model="formInline" size="small">
    <!-- 代码 -->
    <el-row>
      <el-col :span="2"><span class="title">代码:</span></el-col>
      <el-col :span="4">
        <el-form-item label="字体">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <!-- <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item> -->
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 类型 -->
    <el-row>
      <el-col :span="2"><span class="title">类型:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 法人 -->
    <el-row>
      <el-col :span="2"><span class="title">法人:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 【经营】范围 -->
    <el-row>
      <el-col :span="2"><span class="title">范围:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 【注册】资本 -->
    <el-row>
      <el-col :span="2"><span class="title">资本:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 成立【日期】 -->
    <el-row>
      <el-col :span="2"><span class="title">成立:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 经营期限 -->
    <el-row>
      <el-col :span="2"><span class="title">期限:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 组成形式 -->
    <el-row>
      <el-col :span="2"><span class="title">组成:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 个体住所 -->
    <el-row>
      <el-col :span="2"><span class="title">个体住所:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 公司住所 -->
    <el-row>
      <el-col :span="2"><span class="title">公司住所:</span></el-col>
      <el-col :span="4">
        <el-form-item label="模板">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="间距">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="左边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="顶边">
          <el-input v-model="formInline.user" clearable />
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 二维码描述 -->
    <el-row>
      <el-col :span="2"><span class="title">二维码描述:</span></el-col>
      <el-col :span="8">
        <el-form-item label="模板">
          <el-input type="textarea" :rows="4" v-model="formInline.user" />
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="加粗">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="12">
            <el-form-item label="字号">
              <el-input v-model="formInline.user" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="间距">
              <el-input v-model="formInline.user" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="左边">
              <el-input v-model="formInline.user" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="顶边">
              <el-input v-model="formInline.user" clearable />
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
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
