import { createStore } from 'vuex'

interface State {
  id: number
}

export const Store = createStore({
  state (): State {
    return {
      id: 1,
    }
  },
  getters: {
    getId(state: State): number {
      return state.id;
    }
  },
  mutations: {
    setId(state: State, payload: {id: number}): void {
      state.id = payload.id;
    },
  }
})
