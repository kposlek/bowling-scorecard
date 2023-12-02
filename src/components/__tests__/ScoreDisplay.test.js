import { describe, it, expect } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import ScoreDisplay from './../ScoreDisplay.vue';
import { useScoreStore } from '../../../stores/scoreStore';

describe('ScoreDisplay', () => {
  it('renders properly', () => {
    setActivePinia(createPinia());
    const store=useScoreStore()
    store.score= "Hello from Store!"
    const wrapper = mount(ScoreDisplay);
    expect(wrapper.text()).toContain("Hello from Store!");
    expect(wrapper.text()).toContain('Hello from ScoreDisplay!');
  });
});