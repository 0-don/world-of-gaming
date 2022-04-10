module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'objektiv-mk1': ['Objektiv Mk1'],
    },
    extend: {
      colors: {
        purple: {
          // unkwnonw
          light: '#85d7ff',
          // Button Text
          DEFAULT: '#9147ff',
          // Button:Mouseover Text:hover Input:Border
          dark: '#772ce8',
        },

        lightGray: {
          DEFAULT: '#5e5e60',
        },
        dark: {
          // Input:normal
          light: '#464649',
          lightAlt: '#1f1f23',
          // containers
          DEFAULT: '#18181b',
          // Background Input:Focus
          dark: '#0e0e10',
        },
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
