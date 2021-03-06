import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scroll-animation', 'Integration | Component | scroll animation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{scroll-animation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#scroll-animation}}
      template block text
    {{/scroll-animation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
