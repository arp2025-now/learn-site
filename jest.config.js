/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        moduleResolution: 'node16',
        module: 'commonjs',
        noEmit: false,
        rootDir: '.',
        ignoreDeprecations: '5.0',
      },
    }],
  },
}
