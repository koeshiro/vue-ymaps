import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import clear from 'rollup-plugin-clear';
import babel from '@rollup/plugin-babel';
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: './src/index.js',
        plugins: [
            css({ output: 'main.css' }),
            eslint({}),
            resolve({}),
            clear({ targets: ['dist/cjs'] }),
            babel({}),
            terser({ toplevel: true })
        ],
        output: {
            dir: 'dist/cjs',
            format: 'cjs'
        }
    },
    {
        input: './src/index.js',
        plugins: [
            css({ output: 'main.css' }),
            eslint({}),
            clear({ targets: ['dist/esm'] }),
            resolve({}),
            terser({ module: true })
        ],
        output: {
            dir: 'dist/esm',
            format: 'module'
        }
    },
]