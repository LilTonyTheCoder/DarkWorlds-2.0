import { defineStore } from 'pinia'

export const useLeftMenuStore = defineStore('leftMenu', {
  state: () => ({
    isOpen: false
   }),

  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
})
