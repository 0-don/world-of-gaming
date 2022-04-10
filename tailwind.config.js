module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'objektiv-mk1-light': ['Objektiv_Mk1_Light'],
      'objektiv-mk1-thin': ['Objektiv_Mk1_Thin'],
      'objektiv-mk1-regular': ['Objektiv_Mk1_Regular'],
      'objektiv-mk1-bold': ['Objektiv_Mk1_Bold'],
      'sf-pro-display-regular': ['SF_Pro_Display_Regular'],
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
