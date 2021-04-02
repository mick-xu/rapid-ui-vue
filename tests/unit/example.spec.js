import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Alert from '@c/Alert'

describe('Alert.vue', () => {
  it('renders props.type when passed', () => {
    const type = 'info'
    const wrapper = shallowMount(Alert, {
      props: { type }
    })
    expect(wrapper.text()).to.include(type)
  })
})
