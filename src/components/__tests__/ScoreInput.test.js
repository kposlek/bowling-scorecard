import { describe, it, expect } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import ScoreInput from './../ScoreInput.vue';
import { useScoreStore } from '../../../stores/scoreStore';

describe('ScoreInput', () => {
  it('renders properly', () => {
    setActivePinia(createPinia());
    const store=useScoreStore()
    store.score= "Hello from Store!"
    const wrapper = mount(ScoreInput);
    expect(wrapper.text()).toContain("Hello from Store!");
    expect(wrapper.text()).toContain('Hello from ScoreInput!');
  });
});