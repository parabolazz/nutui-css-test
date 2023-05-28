import { createApp } from 'vue'
import './app.scss'
import registerVirtualList from '@tarojs/components-advanced/dist/components/virtual-list/vue'

import './theme.css'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(registerVirtualList)

export default App
