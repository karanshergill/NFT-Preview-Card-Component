/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/index.html'],
  theme: {
    extend: {
      colors: {
        'Primary-Soft-Blue': 'hsl(215, 51%, 70%)',
        'Primary-Cyan': 'hsl(178, 100%, 50%)',
        'Neutral-Very-Dark-Blue-Main': 'hsl(217, 54%, 11%)',
        'Neutral-Very-Dark-Blue-Card': 'hsl(216, 50%, 16%)',
        'Neutral-Very-Dark-Blue-Line': 'hsl(215, 32%, 27%)',
        'Neutral-White': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

