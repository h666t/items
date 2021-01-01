import {createStore} from 'redux';


type StateItem = {
  name: string,
  url: string,
  github: string
}

const reducer = (state: { [key: string]: StateItem }, action: any) => {
  state = state || {
    'block-ui': {
      name: 'block-ui 组件库',
      url: 'http://huang-haotian.gitee.io/block-uiwebsite/#/',
      github: 'https://github.com/h666t/blockui'
    },
    'tally-react': {
      name: '极简记账-react版',
      url : "http://huang-haotian.gitee.io/tally-react/#/",
      github : "https://github.com/h666t/tally-react"
    },
    'tally-vue' : {
      name : "极简记账-vue版",
      url : "http://huang-haotian.gitee.io/tally-vue/#/",
      github : "https://github.com/h666t/tally"
    },
    "search" : {
      name : "search 搜索",
      url : "http://huang-haotian.gitee.io/search/",
      github : "https://github.com/h666t/search"
    },
    "gastly" : {
      name : "会动的代码",
      url : "http://huang-haotian.gitee.io/gastly/",
      github : "https://github.com/h666t/Gastly"
    }
  };
  switch (action.type) {
    case 'add':
      return {n: state.n + action.payload};
    default :
      return state;
  }
};

const store = createStore(reducer);

export {store};