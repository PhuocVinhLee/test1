import { EventBus } from 'native-event-bus';

export type ThemeOptions = 'white' | 'black';
const bus = new EventBus<ThemeOptions>('theme-change');
let theme: ThemeOptions = document.documentElement.classList.contains('theme-white') ? 'white' : 'black';

export const $theme = {
  get() {
    return theme;
  },
  set(value: 'white' | 'black') {
    if (!document.documentElement.classList.replace(`theme-` + (value === 'white' ? 'black' : 'white'), 'theme-' + value)) {
      document.documentElement.classList.add('theme-' + value);
    }
  },
  onchange(callback: (event: CustomEvent<ThemeOptions>) => void) {
    bus.on('change', callback);
    return () => bus.off('change', callback);
  },
};

const mo = new MutationObserver(() => {
  const newTheme = document.documentElement.classList.contains('theme-white') ? 'white' : 'black';
  if (theme === newTheme) return;
  theme = newTheme;
  bus.emit('change', newTheme);
});
mo.observe(document.documentElement, { attributeFilter: ['class'] });
