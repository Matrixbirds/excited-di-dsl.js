'use strict';
const proto = module.exports = (deps) => ([
  {'$init': {$params: { id: 1 }}},
  {
    ['$instance']: {
      ['$before']() {
        console.log('we are sharing same context', this.$params.id);
        console.log('before >>>>>>');
      },
      ['$after']() {
        console.log('we are sharing same context', this.$params.id);
        console.log('after >>>>>>');
      }
    },
  instanceMethod() {
    console.log('instance method');
  },
  },
]);

exports = {
  fs: require('fs'),
};

proto({exports});
