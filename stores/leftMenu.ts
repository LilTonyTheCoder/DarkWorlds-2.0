import { defineStore } from 'pinia'

export const useLeftMenuStore = defineStore('leftMenu', {
  state: () => ({
    isOpen: false as boolean
   }),

  actions: {
    toggle(): void {
      this.isOpen = !this.isOpen
    },
  },
})
