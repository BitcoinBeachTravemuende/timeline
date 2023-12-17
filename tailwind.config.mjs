/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
	theme: {
		extend: {
      colors: {
        // Inspired by https://colorhunt.co/palette/2b39643482aa6db3b5f9cc7b
        meetup: '#F7931A', // bitcoin
        techMeetup: '#0f172a', 
        techMeetupDark: '#6b7280',
        action: '#2B3964',
        actionDark: '#06b6d4',
        software: '#3482AA', 
        misc: '#6DB3B5', 
        cinema: '#F9CC7B', 
        cinemaDark: '#e5a32d', 
        unknown: '#F1E3CB'
      }
    },
	},
	plugins: [],
}
