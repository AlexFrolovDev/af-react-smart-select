import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { dts } from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

const config = [
  {
    input: "src/lib/index.ts",
    output: [
      /* {
        file: packageJson.main,
        format: "cjs",
        plugins: [terser()],
      }, */
      {
        file: packageJson.module,
        format: "esm",
        plugins: [terser()],
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.build.json",
        declarationDir: "./lib",
        declaration: true,
      }),
      peerDepsExternal(),
      resolve(),
      /* commonjs(), */
      /* terser() */
    ],
  },
  {
    input: "./lib/SmartSelect.d.ts",
    output: [{ file: "./lib/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;
