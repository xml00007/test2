import DataTypes from 'sequelize';
export default class Model {
  constructor(define) {
    this.define = define;
    this.instance = null;
  }

  init() {
    if (this.instance !== null) return;
    this.instance = this.define(global.__seq, DataTypes);
  }

  all() {
    this.init();
    return this.instance.all();
  }

  count(...args) {
    this.init();
    return this.instance.count(...args);
  }

  max(...args) {
    this.init();
    return this.instance.max(...args);
  }

  min(...args) {
    this.init();
    return this.instance.min(...args);
  }

  sum(...args) {
    this.init();
    return this.instance.sum(...args);
  }

  //
  belongsTo() {
    this.init();
    return this.instance.belongsTo();
  }

  hasMany() {
    this.init();
    return this.instance.hasMany();
  }

  //
  build(values, options) {
    this.init();
    return this.instance.build(values, options);
  }

  bulkCreate(records, options) {
    this.init();
    return this.instance.bulkCreate(records, options);
  }

  save() {
    this.init();
    return this.instance.save();
  }

  find(...args) {
    this.init();
    return this.instance.find(...args);
  }

  findOne(...args) {
    this.init();
    return this.instance.findOne(...args);
  }
  /**
   * @param id
   * @param options
   * @returns {*|Query}
   */
  findById(...args) {
    this.init();
    return this.instance.findById(...args);
  }

  findOrCreate(...args) {
    this.init();
    return this.instance.findOrCreate(...args);
  }

  findCreateFind(...args) {
    this.init();
    return this.instance.findCreateFind(...args);
  }

  findAndCount(...args) {
    this.init();
    return this.instance.findAndCount(...args);
  }

  findAndCountAll(...args) {
    this.init();
    return this.instance.findAndCountAll(...args);
  }

  findAll(options) {
    this.init();
    return this.instance.findAll(options);
  }

  //
  create(...args) {
    this.init();
    return this.instance.create(...args);
  }

  update(...args) {
    this.init();
    return this.instance.update(...args);
  }

  upsert(...args) {
    this.init();
    return this.instance.upsert(...args);
  }

  //
  truncate(...args) {
    this.init();
    return this.instance.truncate(...args);
  }

  destroy(options) {
    this.init();
    return this.instance.destroy(options);
  }

  restore(options) {
    this.init();
    return this.instance.restore(options);
  }

  describe() {
    this.init();
    return this.instance.describe();
  }
}
