import { type InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { getItem, setItem}from '../utils/locaStorage'

export const TOKEN_KEY = "AIMAN_USER_KEY"
export interface State{
    user: string|null
}


export const store = createStore<State>({
    state: {
        user: getItem(TOKEN_KEY),
    },
    mutations: {
        setUser(state,data){
            state.user = data
            setItem(TOKEN_KEY,state.user)
        }
    }
})


export default store