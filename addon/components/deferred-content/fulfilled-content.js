import Ember from 'ember';
import layout from '../../templates/components/deferred-content/fulfilled-content';

const {
  Component,
  computed,
  set
} = Ember;

export default Component.extend({
  layout,
  promise: computed({
    set(key, promise) {
      set(this, 'isFulfilled', false);
      set(this, 'result', null);

      promise.then((result) => {
        set(this, 'isFulfilled', true);
        set(this, 'result', result);

        return result;
      });

      return promise;
    }
  })
});
