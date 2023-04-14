const nextJest = require('next/jest')

process.env.TZ = 'UTC';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^dh-marvel/components/(.*)$': '<rootDir>/components/$1',
        '^dh-marvel/features/(.*)$': '<rootDir>/features/$1',
        '^dh-marvel/services/(.*)$': '<rootDir>/services/$1',
        '^dh-marvel/pages/(.*)$': '<rootDir>/pages/$1',
        '^dh-marvel/test/(.*)$': '<rootDir>/test/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    collectCoverageFrom: [
        // 'components/**/*.ts',
        'components/**/*.tsx',
        '!components/**/*.stories.tsx',
        'features/**/*.ts',
        'features/**/*.tsx',
        // 'pages/**/*.ts',
        'pages/**/*.tsx',
        'services/**/*.ts',
        '!pages/_app.tsx',
        '!pages/_document.tsx',
        '!**/*.test.tsx',
        '!**/*.spec.tsx'
    ],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50
        },
        "./components/Form/Stepper": {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        },
    },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)