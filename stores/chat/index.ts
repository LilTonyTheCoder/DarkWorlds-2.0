import { defineStore } from 'pinia'

type ChatMessage = { time: string, name: string, text: string }

type ChatStore = {
  messages: ChatMessage[]
}

export const useChatStore = defineStore('chat', {
  state: (): ChatStore => ({
    messages: [
      {
        time: '19:12',
        name: 'Champ',
        text: 'hello world'
      },
      {
        time: '19:22',
        name: 'bender',
        text: 'I bend the world'
      },
      {
        time: '19:25',
        name: 'bender',
        text: 'oh, btw, Im afk'
      }
    ]
  }),

  actions: {
    postMessageToChat (payload: ChatMessage) {
      this.messages.push(payload)
    }
  }
})
