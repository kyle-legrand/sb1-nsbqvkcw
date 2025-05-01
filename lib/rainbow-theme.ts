export const rainbowColors = {
  red: '#FF0000',
  orange: '#FF7F00',
  yellow: '#FFFF00',
  green: '#00FF00',
  blue: '#0000FF',
  indigo: '#4B0082',
  violet: '#9400D3',
};

export const rainbowGradient = {
  light: `linear-gradient(45deg, ${rainbowColors.red}, ${rainbowColors.orange}, ${rainbowColors.yellow}, ${rainbowColors.green}, ${rainbowColors.blue}, ${rainbowColors.indigo}, ${rainbowColors.violet})`,
  dark: `linear-gradient(45deg, ${rainbowColors.violet}, ${rainbowColors.indigo}, ${rainbowColors.blue}, ${rainbowColors.green}, ${rainbowColors.yellow}, ${rainbowColors.orange}, ${rainbowColors.red})`,
};

export const rainbowTheme = {
  colors: {
    primary: rainbowColors.blue,
    secondary: rainbowColors.violet,
    accent: rainbowColors.green,
    background: {
      light: '#FFFFFF',
      dark: '#000000',
    },
    text: {
      light: '#000000',
      dark: '#FFFFFF',
    },
  },
  gradients: {
    primary: rainbowGradient.light,
    secondary: rainbowGradient.dark,
  },
  animations: {
    rainbow: {
      light: `@keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }`,
      dark: `@keyframes rainbow-dark {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }`,
    },
  },
}; 