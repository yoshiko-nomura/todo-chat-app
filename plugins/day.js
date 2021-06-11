import dayjs from 'dayjs'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('dayjs', (string) => dayjs(string))
}
