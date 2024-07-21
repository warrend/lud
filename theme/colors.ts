const greyBase = 214;
const primaryBase = 190;
const accentBase = 10;
const errorBase = 0;
const successBase = 120;

const slates = {
  slate50: '#f1f5f9',
  slate100: '#e2e8f0',
  slate200: '#cbd5e1',
  slate300: '#94a3b8',
  slate400: '#64748b',
  slate500: '#475569',
  slate600: '#334155',
  slate700: '#1e293b',
  slate800: '#0f172a',
  slate900: 'hsl(228, 84%, 5%)',
};

const blacks = {
  black100: 'hsl(0, 0%, 40%)',
  black200: 'hsl(0, 0%, 30%)',
  black300: 'hsl(0, 0%, 20%)',
  black400: 'hsl(0, 0%, 10%)',
  black500: 'hsl(0, 0%, 5%)',
};

const greys = {
  grey100: `hsl(${greyBase}, 21%, 97%)`,
  grey200: `hsl(${greyBase}, 18%, 93%)`,
  grey300: `hsl(${greyBase}, 16%, 80%)`,
  grey400: `hsl(${greyBase}, 16%, 67%)`,
  grey500: `hsl(${greyBase}, 15%, 60%)`,
  grey600: `hsl(${greyBase}, 14%, 50%)`,
  grey700: `hsl(${greyBase}, 13%, 44%)`,
  grey800: `hsl(${greyBase}, 15%, 34%)`,
  grey900: `hsl(${greyBase}, 15%, 28%)`,
};

const primaries = {
  primary50: `hsl(${primaryBase}, 99%, 98%)`,
  primary100: `hsl(${primaryBase}, 98%, 92%)`,
  primary200: `hsl(${primaryBase}, 95%, 86%)`,
  primary300: `hsl(${primaryBase}, 92%, 72%)`,
  primary400: `hsl(${primaryBase}, 90%, 61%)`,
  primary500: `hsl(${primaryBase}, 90%, 55%)`,
  primary600: `hsl(${primaryBase}, 90%, 42%)`,
  primary700: `hsl(${primaryBase}, 90%, 31%)`,
  primary800: `hsl(${primaryBase}, 90%, 21%)`,
  primary900: `hsl(${primaryBase}, 90%, 15%)`,
};

const accents = {
  accent100: `hsl(${accentBase}, 80%, 98%)`,
  accent200: `hsl(${accentBase}, 80%, 96%)`,
  accent300: `hsl(${accentBase}, 80%, 92%)`,
  accent400: `hsl(${accentBase}, 80%, 81%)`,
  accent500: `hsl(${accentBase}, 80%, 70%)`,
  accent600: `hsl(${accentBase}, 80%, 62%)`,
  accent700: `hsl(${accentBase}, 80%, 54%)`,
  accent800: `hsl(${accentBase}, 80%, 41%)`,
  accent900: `hsl(${accentBase}, 80%, 24%)`,
};

const errors = {
  error100: `hsl(${errorBase}, 98%, 95%)`,
  error200: `hsl(${errorBase}, 96%, 82%)`,
  error300: `hsl(${errorBase}, 95%, 72%)`,
  error400: `hsl(${errorBase}, 94%, 61%)`,
  error500: `hsl(${errorBase}, 92%, 50%)`,
  error600: `hsl(${errorBase}, 90%, 42%)`,
  error700: `hsl(${errorBase}, 90%, 34%)`,
  error800: `hsl(${errorBase}, 90%, 21%)`,
  error900: `hsl(${errorBase}, 90%, 14%)`,
};

const successes = {
  success100: `hsl(${successBase}, 98%, 93%)`,
  success200: `hsl(${successBase}, 96%, 82%)`,
  success300: `hsl(${successBase}, 94%, 72%)`,
  success400: `hsl(${successBase}, 92%, 61%)`,
  success500: `hsl(${successBase}, 90%, 50%)`,
  success600: `hsl(${successBase}, 90%, 42%)`,
  success700: `hsl(${successBase}, 90%, 34%)`,
  success800: `hsl(${successBase}, 90%, 21%)`,
  success900: `hsl(${successBase}, 90%, 12%)`,
};

export const colors = {
  ...slates,
  ...blacks,
  ...greys,
  ...primaries,
  ...accents,
  ...errors,
  ...successes,
};
