import {createStore} from 'redux'


const reducer = (state: any,action: any) => {
  state = state || { n : 0 }
  switch (action.type) {
    case 'add':
      return {n:state.n + action.payload}
    default :
      return state
  }
}

const store = createStore(reducer)

export {store}