import Ember from 'ember';

export function initialize(app) {

  app.deferReadiness();

  let AssetMap = Ember.Object.extend();

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.getJSON('assets/assetMap.json', resolve).fail(reject);
    });

    promise.then(function(assetMap) {
        AssetMap.reopen({
            assetMap: assetMap,
            resolve: function(name) { 
                return assetMap.assets[name];
            }
        });
    }, function() {
        AssetMap.reopen({
            resolve: function(name) { 
                return name;
            }
        });
    }).then(function() {
        app.register('assetMap:main', AssetMap, {singleton: true});
        app.inject('component', 'assets', 'assetMap:main');
        app.advanceReadiness();
    });
}

export default {
  name: 'asset-map',
  initialize
};
