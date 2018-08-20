import Vue from 'vue';
import VButton from '../src/components/VButton.vue';
const expect = chai.expect;
const Constructor = Vue.extend(VButton)

describe('VButton 组件测试', function () {
  it('VButton 组件存在', function () {
    expect(VButton).to.exist
  })
  it('VButton 组件可以设置icon', function () {
    const vm = new Constructor({
      propsData: { iconName: 'warning' }
    }).$mount()
    const element = vm.$el.querySelector('use')
    expect(element.getAttribute('xlink:href')).to.equal('#i-warning')
    vm.$destroy()
  })
  it('VButton 组件可以设置icon的位置', function () {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        iconName: 'phone',
        iconPosition: 'right'
      }
    }).$mount(div)
    const element = vm.$el.querySelector('.icon')
    expect(getComputedStyle(element).order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('VButton 组件可以设置loading状态', function () {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: { loading: true }
    }).$mount(div)
    const elementUse = vm.$el.querySelector('use')
    const elementSvg = vm.$el.querySelector('.icon')
    const iconName = elementUse.getAttribute('xlink:href')
    const animationName = getComputedStyle(elementSvg).animationName
    const isLoadingState = (iconName === '#i-loading') && (animationName.indexOf('loading') !== -1)
    expect(isLoadingState).to.be.true
    vm.$el.remove()
    vm.$destroy()
  })
  it('VButton 组件可以设置禁用状态状态', function () {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: { disable: true }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).pointerEvents).to.equal('none')
    vm.$el.remove()
    vm.$destroy()
  })
  it('VButton 组件可以响应点击事件', function () {
    const vm = new Constructor({}).$mount()
    const callback = sinon.spy();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
    vm.$destroy()
  })
  it('测试异步代码', function (done) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({}).$mount(div)
    setTimeout(() => {
      expect(getComputedStyle(vm.$el).backgroundColor).to.equal('rgba(0, 0, 0, 0)')
      done()
    }, 200)
  })
})