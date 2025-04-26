import react from '@vitejs/plugin-react'

export default {
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
}