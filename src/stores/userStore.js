import instance from "../router/axios"
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null
  }),
  actions: {
    async login(data){
      try{
        await instance.put('/entrance/login', data)
        .then(response => {
          this.user = response.data
        })
      } catch (error) {
          console.log(error)
      }
    },
    async signup(data){
      try{
        await instance.post('/entrance/signup', data)
        .then(response => {
          this.user = response.data
        })
      } catch (error) {
          console.log(error)
      }
    },
    async logout(){
      try{
        await instance.post('/account/logout').then(() => {
          this.user = null
        })
      } catch (error){
        console.log(error)
      }
    },
  }
})
