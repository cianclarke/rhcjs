var rhcLib = require('../rhc.js'),
fixtures = require('./fixtures'),
assert = require('assert'),
rhc;

module.exports = {
  setUp : function(fin){
    rhc = rhcLib({
      username : 'test@test.com',
      password : 'test123'
    });
    return fin();
  },
  'It should list apps' : function(done){
    rhc.apps(function(err, res){
      assert.ok(!err, err);
      assert.ok(res);
      return done();
    });
  },
  'It should create an app' : function(done){
    rhc.app.create({ name : 'foo', cartridge : 'nodejs' }, function(err, res){
      assert.ok(!err, err);
      assert.ok(res);
      return done();
    })
  },
  'It should show an app' : function(done){
    rhc.app.show({ app : 'foo' }, function(err, res){
      assert.ok(!err, err);
      assert.ok(res);
      return done();
    })
  },
  'it should delete an app' : function(done){
    rhc.app.del({app : 'foo'}, function(err, res){
      assert.ok(!err, err);
      assert.ok(res);
      return done();
    });
  },
  tearDown : function(fin){
    fixtures.done();
    return fin();
  }
};