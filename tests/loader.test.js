import { expect } from '@esm-bundle/chai';
import { loadScript } from '..';


// test if side effects are run
it('loads and runs script', async () => {
    await loadScript('/tests/data/module.js')
    expect(window.__loader_test).to.equal('loaded');
});

