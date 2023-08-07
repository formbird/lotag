import { playwrightLauncher } from '@web/test-runner-playwright';

/** @type import('@web/test-runner').TestRunnerConfig*/
const config = {
    nodeResolve: true,
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' }),
    ],
    files: 'tests/*.test.js',
    rootDir: './'
}
export default config;
