    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
            colors: {
              'bg-main-clr' : '#F3F3F3;',
              'btn-primary-clr': '#2F80ED',
              'fnt-clr-1': '#1C1B1B',
              'fnt-clr-2': '#1c1b1b99',
              'card-clr': '#1111110d',
          },
        },
      },
      plugins: [],
    }