import { $theme } from './index';

const mediaQuery = matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', e => {
  $theme.set(e.matches ? 'black' : 'white');
});
$theme.set(mediaQuery.matches ? 'black' : 'white');
