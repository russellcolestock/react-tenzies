// import {defineConfig} from "vite"
// import react from "@vitejs/plugin-react"

// export default defineConfig({
// 	plugins: [
// 		react()
// 	]
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tenzies-game/', // 👈 important for GitHub Pages!
  plugins: [react()]
})
