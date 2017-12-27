/**
 * @jest-environment node
 */

import buildings from './buildings';

it('renders without crashing', () => {
  for (var building in buildings) {
    console.log(building);
    expect(buildings[building]).toHaveProperty('costs');
    expect(buildings[building]).toHaveProperty('baseCost');
    expect(buildings[building]).toHaveProperty('id');
    expect(buildings[building]).toHaveProperty('text');
    expect(buildings[building]).toHaveProperty('name');
    expect(buildings[building]).toHaveProperty('multiplier');
    expect(buildings[building]).toHaveProperty('incomeRate');
    expect(buildings[building]['text']).toHaveProperty('beforeLink');
    expect(buildings[building]['text']).toHaveProperty('link');
    expect(buildings[building]['text']).toHaveProperty('afterLink');

  }
});
