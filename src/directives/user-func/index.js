import Vue from 'vue'

export default Vue.directive('func', {
  inserted: function (el, binding) {
    console.log(binding.value)
    return false
  },
  bind: function (el, binding, vnode) {
    console.log(el,binding.value)

  },
})
