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

type keys = 'name' | 'creditCode' | 'typeOfEnterprise' | 'legalRepresentative'

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

  // 信用代码
  creditCode: {
    show: true,
    label: {
      text: '统一社会信用代码',
      spacing: 0,
      bold: true,
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
  // 公司名称
  name: {
    show: true,
    label: {
      text: '名称',
      spacing: 180,
      bold: true,
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
  // 类型
  typeOfEnterprise: {
    show: true,
    label: {
      text: '类型',
      spacing: 180,
      bold: true,
      left: 300,
      top: 1120,
      fontSize: 48,
    },
    value: {
      text: '股份有限公司（上市）',
      left: 630,
      top: 1120,
      fontSize: 48,
      bold: false,
      spacing: 0,
    }
  },
  // 法人
  legalRepresentative: {
    show: true,
    label: {
      text: '法定代表人',
      spacing: 10,
      bold: true,
      left: 300,
      top: 1220,
      fontSize: 48,
    },
    value: {
      text: '逆苍天',
      left: 630,
      top: 1220,
      fontSize: 48,
      bold: false,
      spacing: 0,
    }
  }
})

export {
  config
}