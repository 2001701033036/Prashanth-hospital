/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your file paths here
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        bounceSlow: 'bounceSlow 4s ease-in-out infinite', // Define the custom animation
        bounceReverse: 'bounceSlow 5s ease-in-out infinite', // Define the custom animation

      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-30)' },
          '50%': { transform: 'translateY(-20px)' }, // Adjust the height of the bounce
        },
        bounceReverse: {
          '0%, 50%': { transform: 'translateY(30)' },
          '100%': { transform: 'translateY(90px)' }, // Adjust the height of the bounce
        },
      },
    },
  },

  plugins: [],

};



