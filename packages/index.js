import Checkbox from './checkbox'
import Button from './button'
import Dialog from './dialog'
import Form from './form'
import FormItem from './form-item'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Input from './input'
import './fonts/iconfont.scss'
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Form,
  FormItem,
  Switch
]
const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
