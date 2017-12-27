/**
 * @jest-environment node
 */

import technologies from './technologies';

it('technologies have the right properties', () => {
  for (var tech in technologies) {
    expect(technologies[tech]).toHaveProperty('cost');
    expect(technologies[tech]).toHaveProperty('costs');
  }
});
