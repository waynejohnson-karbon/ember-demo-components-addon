import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | equals', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue1', '1234');
    this.set('inputValue2', '1234');

    await render(hbs`{{equals this.inputValue1 this.inputValue2}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
