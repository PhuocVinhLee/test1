import { EventBus } from 'native-event-bus';
const bus = new EventBus('theme-change');
let theme = document.documentElement.classList.contains('theme-white') ? 'white' : 'black';
export const $theme = {
    get() {
        return theme;
    },
    set(value) {
        if (!document.documentElement.classList.replace(`theme-` + (value === 'white' ? 'black' : 'white'), 'theme-' + value)) {
            document.documentElement.classList.add('theme-' + value);
        }
    },
    onchange(callback) {
        bus.on('change', callback);
        return () => bus.off('change', callback);
    },
};
const mo = new MutationObserver(() => {
    const newTheme = document.documentElement.classList.contains('theme-white') ? 'white' : 'black';
    if (theme === newTheme)
        return;
    theme = newTheme;
    bus.emit('change', newTheme);
});
mo.observe(document.documentElement, { attributeFilter: ['class'] });
//# sourceMappingURL=index.js.map