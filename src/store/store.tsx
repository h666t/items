import {createStore} from 'redux';

const reducer = (state :any, action: any) => {
  state = state || {
    items : {
      'block-ui': {
        name: 'block-ui 组件库',
        url: 'http://huang-haotian.gitee.io/block-uiwebsite/#/',
        github: 'https://github.com/h666t/blockui'
      },
      'tally-react': {
        name: '极简记账-react版',
        url: 'http://huang-haotian.gitee.io/tally-react/#/',
        github: 'https://github.com/h666t/tally-react'
      },
      'tally-vue': {
        name: '极简记账-vue版',
        url: 'http://huang-haotian.gitee.io/tally-vue/#/',
        github: 'https://github.com/h666t/tally'
      },
      'search': {
        name: 'search 搜索',
        url: 'http://huang-haotian.gitee.io/search/',
        github: 'https://github.com/h666t/search'
      },
      'gastly': {
        name: '会动的代码',
        url: 'http://huang-haotian.gitee.io/gastly/',
        github: 'https://github.com/h666t/Gastly'
      },
      'to-do-it': {
        name: '命令行to-do工具',
        github: 'https://github.com/h666t/todoit-cli-nodejs'
      },
      'translation': {
        name: '命令行翻译工具',
        github: 'https://github.com/h666t/translation'
      }
    }
  };
  switch (action.type) {
    default :
      return state
  }
};

// @ts-ignore
const store = createStore(reducer);

export {store};