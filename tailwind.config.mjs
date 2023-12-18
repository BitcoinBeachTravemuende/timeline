/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
	theme: {
		extend: {
      colors: {
        // Inspired by https://colorhunt.co/palette/2b39643482aa6db3b5f9cc7b
        meetup: '#F7931A', // bitcoin
        action: '#2B3964',
        actionDark: '#06b6d4',
        tech: '#3482AA', 
        misc: '#6DB3B5', 
        cinema: '#F9CC7B', 
        cinemaDark: '#e5a32d'
      },
      animation: {
        'lightfire': 'lightfire-rotate 5s linear infinite',
      },
      keyframes: {
        'lightfire-rotate': {
          '0%': { opacity: .2, transform: 'rotate(0deg)' },
          '50%': { opacity: .4 },
          '100%': { opacity: .2, transform: 'rotate(45deg)' },
        },
      },
    },
	},
	plugins: [],
}
