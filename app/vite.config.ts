import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
    test:{
        globals: true,
        root: './'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    plugins: [tsConfigPaths()]
})