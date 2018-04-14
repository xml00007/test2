'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(define) {
    _classCallCheck(this, Model);

    this.define = define;
    this.instance = null;
  }

  _createClass(Model, [{
    key: 'init',
    value: function init() {
      if (this.instance !== null) return;
      this.instance = this.define(global.__seq, _sequelize2.default);
    }
  }, {
    key: 'all',
    value: function all() {
      this.init();
      return this.instance.all();
    }
  }, {
    key: 'count',
    value: function count() {
      var _instance;

      this.init();
      return (_instance = this.instance).count.apply(_instance, arguments);
    }
  }, {
    key: 'max',
    value: function max() {
      var _instance2;

      this.init();
      return (_instance2 = this.instance).max.apply(_instance2, arguments);
    }
  }, {
    key: 'min',
    value: function min() {
      var _instance3;

      this.init();
      return (_instance3 = this.instance).min.apply(_instance3, arguments);
    }
  }, {
    key: 'sum',
    value: function sum() {
      var _instance4;

      this.init();
      return (_instance4 = this.instance).sum.apply(_instance4, arguments);
    }

    //

  }, {
    key: 'belongsTo',
    value: function belongsTo() {
      this.init();
      return this.instance.belongsTo();
    }
  }, {
    key: 'hasMany',
    value: function hasMany() {
      this.init();
      return this.instance.hasMany();
    }

    //

  }, {
    key: 'build',
    value: function build(values, options) {
      this.init();
      return this.instance.build(values, options);
    }
  }, {
    key: 'bulkCreate',
    value: function bulkCreate(records, options) {
      this.init();
      return this.instance.bulkCreate(records, options);
    }
  }, {
    key: 'save',
    value: function save() {
      this.init();
      return this.instance.save();
    }
  }, {
    key: 'find',
    value: function find() {
      var _instance5;

      this.init();
      return (_instance5 = this.instance).find.apply(_instance5, arguments);
    }
  }, {
    key: 'findOne',
    value: function findOne() {
      var _instance6;

      this.init();
      return (_instance6 = this.instance).findOne.apply(_instance6, arguments);
    }
    /**
     * @param id
     * @param options
     * @returns {*|Query}
     */

  }, {
    key: 'findById',
    value: function findById() {
      var _instance7;

      this.init();
      return (_instance7 = this.instance).findById.apply(_instance7, arguments);
    }
  }, {
    key: 'findOrCreate',
    value: function findOrCreate() {
      var _instance8;

      this.init();
      return (_instance8 = this.instance).findOrCreate.apply(_instance8, arguments);
    }
  }, {
    key: 'findCreateFind',
    value: function findCreateFind() {
      var _instance9;

      this.init();
      return (_instance9 = this.instance).findCreateFind.apply(_instance9, arguments);
    }
  }, {
    key: 'findAndCount',
    value: function findAndCount() {
      var _instance10;

      this.init();
      return (_instance10 = this.instance).findAndCount.apply(_instance10, arguments);
    }
  }, {
    key: 'findAndCountAll',
    value: function findAndCountAll() {
      var _instance11;

      this.init();
      return (_instance11 = this.instance).findAndCountAll.apply(_instance11, arguments);
    }
  }, {
    key: 'findAll',
    value: function findAll(options) {
      this.init();
      return this.instance.findAll(options);
    }

    //

  }, {
    key: 'create',
    value: function create() {
      var _instance12;

      this.init();
      return (_instance12 = this.instance).create.apply(_instance12, arguments);
    }
  }, {
    key: 'update',
    value: function update() {
      var _instance13;

      this.init();
      return (_instance13 = this.instance).update.apply(_instance13, arguments);
    }
  }, {
    key: 'upsert',
    value: function upsert() {
      var _instance14;

      this.init();
      return (_instance14 = this.instance).upsert.apply(_instance14, arguments);
    }

    //

  }, {
    key: 'truncate',
    value: function truncate() {
      var _instance15;

      this.init();
      return (_instance15 = this.instance).truncate.apply(_instance15, arguments);
    }
  }, {
    key: 'destroy',
    value: function destroy(options) {
      this.init();
      return this.instance.destroy(options);
    }
  }, {
    key: 'restore',
    value: function restore(options) {
      this.init();
      return this.instance.restore(options);
    }
  }, {
    key: 'describe',
    value: function describe() {
      this.init();
      return this.instance.describe();
    }
  }]);

  return Model;
}();

exports.default = Model;
//# sourceMappingURL=Model.js.map