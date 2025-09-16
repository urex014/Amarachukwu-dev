/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
        extend: {
          colors: {
            dark: {
              900: '#0f172a',
              800: '#1e293b',
            },
            light: {
              200: '#cbd5e1',
              100: '#f8fafc',
            }
          },
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          }
        }
      },
  plugins: [],
}



