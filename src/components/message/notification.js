import Message from './message.vue'
import Vue from 'vue'

Message.newInstance = properties => {
  const props = properties || {}

  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Message, {
        props: props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  const message = Instance.$children[0]

  return {
    add(noticeProps) {
      message.add(noticeProps)
    },
    remove(name) {
      message.remove(name)
    }
  }
}

export default Message
