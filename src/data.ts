import { ref } from 'vue';

interface ITextConfig {
  text: string,
  left: number,
  top: number,
  bold: boolean,
  spacing: number,
  fontSize?: number,
  fontFamily?: string,
}

type keys = 'name' | 'creditCode'

type IConfig = {
  [prop in keys]: {
    show: boolean,
    label: ITextConfig,
    value: ITextConfig
  };
} & {
  template: string;
};

const config = ref<IConfig>({
  template: '公司正本',
  // 公司名称
  name: {
    show: true,
    label: {
      text: '名称',
      spacing: 0,
      bold: false,
      left: 300,
      top: 1020,
      fontSize: 48,
    },
    value: {
      text: '北京智谱华章科技有限公司',
      left: 630,
      top: 1020,
      fontSize: 48,
      bold: false,
      spacing: 0,
    }
  },
  // 信用代码
  creditCode: {
    show: true,
    label: {
      text: '统一社会信用代码',
      spacing: 0,
      bold: false,
      left: 300,
      top: 680,
      fontSize: 48,
    },
    value: {
      text: '911101087000000003',
      left: 300,
      top: 750,
      fontSize: 34,
      fontFamily: '宋体',
      bold: false,
      spacing: 0,
    }
  },
})

export {
  config
}