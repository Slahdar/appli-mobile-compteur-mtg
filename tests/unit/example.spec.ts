import { mount } from '@vue/test-utils'
import GameSettings from '@/views/GameSettings.vue
import { describe, expect, test } from 'vitest'

describe('GameSettings.vue', () => {
  test('renders home vue', () => {
    const wrapper = mount(GameSettings)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
