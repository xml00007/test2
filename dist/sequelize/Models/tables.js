'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Model = require('./mysql/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smartRequire = function smartRequire(modelPath) {
  var _oldPath = _path2.default.join(__dirname, modelPath);
  var _mockPath = _path2.default.join(__dirname, modelPath.replace('mysql', 'mysql/__mock__'));
  try {
    if (process.env.UNIT_TEST) return require(_mockPath);
  } catch (err) {}
  return require(_oldPath);
};
exports.default = {
  // mysql
  linuxDoc: new _Model2.default(smartRequire('./mysql/account_balance_withdraw')),
  bank_base: new _Model2.default(smartRequire('./mysql/bank_base')),
  bank_info: new _Model2.default(smartRequire('./mysql/bank_info')),
  bank_subbranch: new _Model2.default(smartRequire('./mysql/bank_subbranch')),
  deduct_repay_record: new _Model2.default(smartRequire('./mysql/deduct_repay_record')),
  system_config: new _Model2.default(smartRequire('./mysql/system_config')),
  system_op_log: new _Model2.default(smartRequire('./mysql/system_op_log')),
  user: new _Model2.default(smartRequire('./mysql/user')),
  user_bank_card: new _Model2.default(smartRequire('./mysql/user_bank_card')),
  user_identity_status: new _Model2.default(smartRequire('./mysql/user_identity_status')),
  user_location: new _Model2.default(smartRequire('./mysql/user_location')),
  user_login_log: new _Model2.default(smartRequire('./mysql/user_login_log')),
  user_payment_order: new _Model2.default(smartRequire('./mysql/user_payment_order')),
  user_repay_apply: new _Model2.default(smartRequire('./mysql/user_repay_apply')),
  user_credit: new _Model2.default(smartRequire('./mysql/user_credit')),
  user_state: new _Model2.default(smartRequire('./mysql/user_state')),
  user_tag: new _Model2.default(smartRequire('./mysql/user_tag')),
  user_token: new _Model2.default(smartRequire('./mysql/user_token')),
  withdraw: new _Model2.default(smartRequire('./mysql/withdraw')),
  withdraw_apply: new _Model2.default(smartRequire('./mysql/withdraw_apply')),
  withdraw_apply_bak: new _Model2.default(smartRequire('./mysql/withdraw_apply_bak')),
  withdraw_apply_state: new _Model2.default(smartRequire('./mysql/withdraw_apply_state')),
  withdraw_failure_record: new _Model2.default(smartRequire('./mysql/withdraw_failure_record')),
  channel_credit_item_status: new _Model2.default(smartRequire('./mysql/channel_credit_item_status')),
  user_limit: new _Model2.default(smartRequire('./mysql/user_limit')),
  user_limit_log: new _Model2.default(smartRequire('./mysql/user_limit_log')),
  track_action_error_log: new _Model2.default(smartRequire('./mysql/track_action_error_log')),
  user_coupon: new _Model2.default(smartRequire('./mysql/user_coupon')),
  id_generate: new _Model2.default(smartRequire('./mysql/id_generate')),
  withdraw_channel_task: new _Model2.default(smartRequire('./mysql/withdraw_channel_task')),
  credit_channel_task: new _Model2.default(smartRequire('./mysql/credit_channel_task')),
  channel_append_info: new _Model2.default(smartRequire('./mysql/channel_append_info')),
  withdraw_service_fee_record: new _Model2.default(smartRequire('./mysql/withdraw_service_fee_record')),
  flow_node_config: new _Model2.default(smartRequire('./mysql/flow_node_config')),
  flow_login_node_config: new _Model2.default(smartRequire('./mysql/flow_login_node_config')),
  flow_node_state: new _Model2.default(smartRequire('./mysql/flow_node_state')),
  flow_node_state_history: new _Model2.default(smartRequire('./mysql/flow_node_state_history')),
  outer_api_request_log: new _Model2.default(smartRequire('./mysql/outer_api_request_log')),
  channel_user_product_info: new _Model2.default(smartRequire('./mysql/channel_user_product_info')),
  channel_relation: new _Model2.default(smartRequire('./mysql/channel_relation')),
  user_process_config: new _Model2.default(smartRequire('./mysql/user_process_config')),
  outer_callback_log: new _Model2.default(smartRequire('./mysql/outer_callback_log')),
  user_contract: new _Model2.default(smartRequire('./mysql/user_contract')),
  credit_card_auth: new _Model2.default(smartRequire('./mysql/credit_card_auth')),
  credit_card_auth_log: new _Model2.default(smartRequire('./mysql/credit_card_auth_log')),
  exclusion_rule: new _Model2.default(smartRequire('./mysql/exclusion_rule')),
  third_channel_cache_data: new _Model2.default(smartRequire('./mysql/third_channel_cache_data')),
  channel_url_config: new _Model2.default(smartRequire('./mysql/channel_url_config'))
};
//# sourceMappingURL=tables.js.map