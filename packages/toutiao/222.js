webpackJsonp([5], {
  '+2u5': function(e, t, n) {
    'use strict';
    var r, o = n('gf5I');
    !function(e) {
      e && e.__esModule;
    }(o);
    !function(o) {
      function i(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
      }

      function a(e, t) {
        return e << t | e >>> 32 - t;
      }

      function s(e, t, n, r, o, s) {
        return i(a(i(i(t, e), i(r, s)), o), n);
      }

      function u(e, t, n, r, o, i, a) {
        return s(t & n | ~t & r, e, t, o, i, a);
      }

      function l(e, t, n, r, o, i, a) {
        return s(t & r | n & ~r, e, t, o, i, a);
      }

      function c(e, t, n, r, o, i, a) {
        return s(t ^ n ^ r, e, t, o, i, a);
      }

      function d(e, t, n, r, o, i, a) {
        return s(n ^ (t | ~r), e, t, o, i, a);
      }

      function f(e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        var n, r, o, a, s, f = 1732584193, p = -271733879, h = -1732584194, m = 271733878;
        for (n = 0; n < e.length; n += 16) r = f, o = p, a = h, s = m, f = u(f, p, h, m, e[n], 7, -680876936), m = u(m,
            f, p, h, e[n + 1], 12, -389564586), h = u(h, m, f, p, e[n + 2], 17, 606105819), p = u(p, h, m, f, e[n + 3],
            22, -1044525330), f = u(f, p, h, m, e[n + 4], 7, -176418897), m = u(m, f, p, h, e[n + 5], 12,
            1200080426), h = u(h, m, f, p, e[n + 6], 17, -1473231341), p = u(p, h, m, f, e[n + 7], 22,
            -45705983), f = u(f, p, h, m, e[n + 8], 7, 1770035416), m = u(m, f, p, h, e[n + 9], 12, -1958414417), h = u(
            h, m, f, p, e[n + 10], 17, -42063), p = u(p, h, m, f, e[n + 11], 22, -1990404162), f = u(f, p, h, m,
            e[n + 12], 7, 1804603682), m = u(m, f, p, h, e[n + 13], 12, -40341101), h = u(h, m, f, p, e[n + 14], 17,
            -1502002290), p = u(p, h, m, f, e[n + 15], 22, 1236535329), f = l(f, p, h, m, e[n + 1], 5,
            -165796510), m = l(m, f, p, h, e[n + 6], 9, -1069501632), h = l(h, m, f, p, e[n + 11], 14,
            643717713), p = l(p, h, m, f, e[n], 20, -373897302), f = l(f, p, h, m, e[n + 5], 5, -701558691), m = l(m, f,
            p, h, e[n + 10], 9, 38016083), h = l(h, m, f, p, e[n + 15], 14, -660478335), p = l(p, h, m, f, e[n + 4], 20,
            -405537848), f = l(f, p, h, m, e[n + 9], 5, 568446438), m = l(m, f, p, h, e[n + 14], 9, -1019803690), h = l(
            h, m, f, p, e[n + 3], 14, -187363961), p = l(p, h, m, f, e[n + 8], 20, 1163531501), f = l(f, p, h, m,
            e[n + 13], 5, -1444681467), m = l(m, f, p, h, e[n + 2], 9, -51403784), h = l(h, m, f, p, e[n + 7], 14,
            1735328473), p = l(p, h, m, f, e[n + 12], 20, -1926607734), f = c(f, p, h, m, e[n + 5], 4, -378558), m = c(
            m, f, p, h, e[n + 8], 11, -2022574463), h = c(h, m, f, p, e[n + 11], 16, 1839030562), p = c(p, h, m, f,
            e[n + 14], 23, -35309556), f = c(f, p, h, m, e[n + 1], 4, -1530992060), m = c(m, f, p, h, e[n + 4], 11,
            1272893353), h = c(h, m, f, p, e[n + 7], 16, -155497632), p = c(p, h, m, f, e[n + 10], 23,
            -1094730640), f = c(f, p, h, m, e[n + 13], 4, 681279174), m = c(m, f, p, h, e[n], 11, -358537222), h = c(h,
            m, f, p, e[n + 3], 16, -722521979), p = c(p, h, m, f, e[n + 6], 23, 76029189), f = c(f, p, h, m, e[n + 9],
            4, -640364487), m = c(m, f, p, h, e[n + 12], 11, -421815835), h = c(h, m, f, p, e[n + 15], 16,
            530742520), p = c(p, h, m, f, e[n + 2], 23, -995338651), f = d(f, p, h, m, e[n], 6, -198630844), m = d(m, f,
            p, h, e[n + 7], 10, 1126891415), h = d(h, m, f, p, e[n + 14], 15, -1416354905), p = d(p, h, m, f, e[n + 5],
            21, -57434055), f = d(f, p, h, m, e[n + 12], 6, 1700485571), m = d(m, f, p, h, e[n + 3], 10,
            -1894986606), h = d(h, m, f, p, e[n + 10], 15, -1051523), p = d(p, h, m, f, e[n + 1], 21,
            -2054922799), f = d(f, p, h, m, e[n + 8], 6, 1873313359), m = d(m, f, p, h, e[n + 15], 10,
            -30611744), h = d(h, m, f, p, e[n + 6], 15, -1560198380), p = d(p, h, m, f, e[n + 13], 21,
            1309151649), f = d(f, p, h, m, e[n + 4], 6, -145523070), m = d(m, f, p, h, e[n + 11], 10,
            -1120210379), h = d(h, m, f, p, e[n + 2], 15, 718787259), p = d(p, h, m, f, e[n + 9], 21,
            -343485551), f = i(f, r), p = i(p, o), h = i(h, a), m = i(m, s);
        return [f, p, h, m];
      }

      function p(e) {
        var t, n = '';
        for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n;
      }

      function h(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n;
      }

      function m(e) {
        return p(f(h(e), 8 * e.length));
      }

      function v(e, t) {
        var n, r, o = h(e), i = [], a = [];
        for (i[15] = a[15] = void 0, o.length > 16 && (o = f(o, 8 * e.length)), n = 0; n <
        16; n += 1) i[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
        return r = f(i.concat(h(t)), 512 + 8 * t.length), p(f(a.concat(r), 640));
      }

      function g(e) {
        var t, n, r = '0123456789abcdef', o = '';
        for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
        return o;
      }

      function y(e) {
        return unescape(encodeURIComponent(e));
      }

      function w(e) {
        return m(y(e));
      }

      function _(e) {
        return g(w(e));
      }

      function b(e, t) {
        return v(y(e), y(t));
      }

      function x(e, t) {
        return g(b(e, t));
      }

      function k(e, t, n) {
        return t ? n ? b(t, e) : x(t, e) : n ? w(e) : _(e);
      }

      void 0 !== (r = function() {
        return k;
      }.call(t, n, t, e)) && (e.exports = r);
    }();
  }, '+6Wo': function(e, t) {
  }, '+LfV': function(e, t, n) {
    var r = n('Uyjf'), o = n('nmRV');
    n('Xb9Y')('keys', function() {
      return function(e) {
        return o(r(e));
      };
    });
  }, '+YOn': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    function o(e, t, n, r, o) {
      window.gaevent(e, t, n, r, o), window.baevent(e, t, n, r, o);
    }

    function i() {
      window.resendGA(), window.resendBA();
    }

    function a() {
      'm.ixigua.com' === location.host ?
          (d.default.init(), p.default.init()) :
          (l.default.init(), p.default.init()), window.maevent = o, window.resendMA = i;
    }

    function s() {
      a(), m.default.init();
    }

    var u = n('yRjA'), l = r(u), c = n('AJa0'), d = r(c), f = n('bChP'), p = r(f), h = n('QVlm'), m = r(h);
    n('VPAO'), e.exports = s;
  }, '+cj+': function(e, t) {
    e.exports = '//s3.pstatp.com/growth/mobile_list/image/popup_banner_close_e6f62910.png';
  }, '/HVj': function(e, t, n) {
    'use strict';
    e.exports = function(e, t) {
      e.classList ?
          e.classList.remove(t) :
          e.className = e.className.replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1').
              replace(/\s+/g, ' ').
              replace(/^\s*|\s*$/g, '');
    };
  }, '/xZR': function(e, t) {
  }, 0: function(e, t) {
  }, '0vED': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('J5EE'), w = r(y),
        _ = function(e) {
          function t(e) {
            return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
          }

          return (0, p.default)(t, e), (0, l.default)(t, [
            {
              key: 'handleClick', value: function(e) {
              window.maevent(e.ga.category, 'click');
            },
            }, {
              key: 'singleImage', value: function(e) {
                var t = this;
                return m.default.createElement('section', {
                  'data-is-video': 'False',
                  'data-hot-time': '',
                  className: 'middle_mode has_action xpromt_item',
                  'data-group-id': '',
                  'data-item-id': '',
                  'data-format': '0',
                }, m.default.createElement('a', {
                      href: e.url, className: 'article_link clearfix ', onClick: function() {
                        t.handleClick(e);
                      }, 'data-action-label': 'click_xpromt_item',
                    }, m.default.createElement('div', {className: 'desc'},
                    m.default.createElement('h3', {className: 'dotdot line3 image-margin-right'}, e.title),
                    m.default.createElement('div', {className: 'item_info'},
                        m.default.createElement('span', {className: 'hot_label space'}, '鐑�'),
                        m.default.createElement('span', {className: 'src space'}, e.src))),
                    m.default.createElement('div', {className: 'list_img_holder', style: {background: 'none'}},
                        m.default.createElement(w.default,
                            {src: 'http://s3.pstatp.com/site/promotion/landing_page/img/' + e.pics[0]}))));
              },
            }, {
              key: 'smallImage', value: function(e) {
                var t = this;
                return m.default.createElement('section', {
                  'data-is-video': 'False',
                  'data-hot-time': '',
                  className: 'has_action xpromt_item',
                  'data-group-id': '',
                  'data-item-id': '',
                  'data-format': '0',
                }, m.default.createElement('a', {
                      href: e.url, className: 'article_link clearfix ', onClick: function() {
                        t.handleClick(e);
                      }, 'data-action-label': 'click_xpromt_item',
                    }, m.default.createElement('h3', {className: 'dotdot line3 '}, e.title),
                    m.default.createElement('div', {className: 'list_image'},
                        m.default.createElement('ul', {className: 'clearfix'}, e.pics.map(function(e) {
                          return m.default.createElement('li',
                              {className: 'list_img_holder', style: {background: 'none'}},
                              m.default.createElement(w.default, {
                                src: 'http://s3.pstatp.com/site/promotion/landing_page/img/' + e,
                                style: {opacity: 1},
                              }));
                        }))), m.default.createElement('div', {className: 'item_info'},
                        m.default.createElement('span', {className: 'hot_label space'}, '鐑�'),
                        m.default.createElement('span', {className: 'src space'}, e.src))));
              },
            }, {
              key: 'render', value: function() {
                var e = this.props.datum;
                return window.maevent(e.ga.category, 'show'), 1 === e.pics.length ?
                    this.singleImage(e) :
                    this.smallImage(e);
              },
            }]), t;
        }(h.Component);
    _.propTypes = {datum: g.default.object}, e.exports = _;
  }, '0wW8': function(e, t, n) {
    'use strict';

    function r() {
      var e = Math.floor((new Date).getTime() / 1e3), t = e.toString(16).toUpperCase(),
          n = o(e).toString().toUpperCase();
      if (8 !== t.length) return {as: '479BB4B7254C150', cp: '7E0AC8874BB0985'};
      for (var r = n.slice(0, 5), i = n.slice(-5), a = '', s = 0; s < 5; s++) a += r[s] + t[s];
      for (var u = '', l = 0; l < 5; l++) u += t[l + 3] + i[l];
      return {as: 'A1' + a + t.slice(-3), cp: t.slice(0, 3) + u + 'E1'};
    }

    var o = n('+2u5');
    e.exports = r;
  }, '1+Ds': function(e, t, n) {
    'use strict';
    e.exports = {
      nativeProxyServer: 'http://[::1]:8192/',
      installNumber: '5.3',
      NETWORKTIPS: {
        RETRY: '缃戠粶澶辫触,鐐瑰嚮閲嶈瘯',
        COMMENTRETRY: '璇勮鍔犺浇澶辫触,鐐瑰嚮閲嶈瘯',
        NETWORKERROR: '缃戠粶澶辫触',
        LOADING: '鍔犺浇涓�...',
        WAITE: '鍔犺浇涓�,璇风◢鍚�',
        RECOMMENDING: '姝ｅ湪鎺ㄨ崘...',
        RECOMMENDCOUNT: '涓烘偍鎺ㄨ崘浜�#n#绡囨枃绔�',
        RECOMMENDEMPTY: '鏆傛棤鏇存柊,璇蜂紤鎭竴浼氬効',
        RECOMMENDDISLIKE: '灏嗗噺灏戠被浼兼帹鑽�',
        HASMORE: '鏌ョ湅鏇村',
        SENDING: '姝ｅ湪鎻愪氦',
        SENDINGERROR: '鍙戣〃澶辫触',
        SENDINGSUCCESS: '鍙戣〃鎴愬姛',
        GEOLOCATIONERROR: '鑾峰彇鍦扮悊浣嶇疆澶辫触',
        NOSEARCHDATA: '鏆傛棤鎼滅储缁撴灉',
        SERVERERROR: '鏈嶅姟寮傚父,璇风◢鍚庨噸璇�',
        LOCALSTORAGEERROE: '璇峰湪 璁剧疆->Safari->闃绘Cookie 涓嬀閫� \'鏉ヨ嚜绗笁鏂瑰拰骞垮憡鍟�\',鎴�\'姘镐笉\',浠ュ厤褰卞搷澶存潯缃戞甯镐娇鐢�',
      },
    };
  }, '1P2o': function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', {value: !0}), t.default = !('undefined' == typeof window ||
        !window.document || !window.document.createElement), e.exports = t.default;
  }, '1uVg': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('Cqu5'), w = r(y),
        _ = n('lH70'), b = r(_);
    n('/xZR');
    var x = function(e) {
      function t() {
        (0, s.default)(this, t);
        var e = (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).call(this));
        return e.createMarkup = e.createMarkup.bind(e), e;
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'createMarkup', value: function(e) {
          return {__html: b.default.render(e)};
        },
        }, {
          key: 'render', value: function() {
            var e = this.props.datum, t = (0, w.default)(
                {middle_mode: e.middle_mode, taobaoAd: 'taobao' === e.ad_type, has_action: !0, 'item-hidden': e.honey});
            return m.default.createElement('section', {
              className: t,
              'data-hot-time': e.behot_time,
              'data-group-id': e.group_id,
              'data-item-id': e.item_id,
              'data-format': '0',
              dangerouslySetInnerHTML: this.createMarkup(e),
            });
          },
        }]), t;
    }(h.Component);
    x.propTypes = {datum: g.default.object}, e.exports = x;
  }, 2: function(e, t, n) {
    e.exports = n('Bbyf');
  }, '2SGS': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('YWnE'), w = r(y),
        _ = n('Xamz'), b = r(_), x = n('ZD21'), k = r(x);
    n('Yyv+');
    var T = function(e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'onRefreshBtnClick', value: function() {
          this.props.onRefreshBtnClick();
        },
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props.GTMValue.hideTopBar || this.props.hideTopBar,
                n = this.props.GTMValue.hideMsgBox || this.props.hideMsgBox;
            return m.default.createElement('header', {id: 'indexHeader', className: 'index--toutiaoribao'}, t ?
                null :
                m.default.createElement('div', {className: 'top_bar'},
                    m.default.createElement('div', {className: 'abs_m'},
                        m.default.createElement('a', {href: '#', className: 'refresh_title btn'}),
                        m.default.createElement(k.default, {
                          rotateRefreshBtn: this.props.rotateRefreshBtn, onRefreshClick: function() {
                            return e.onRefreshBtnClick();
                          },
                        })), this.props.showAuditInfo ?
                        m.default.createElement('span', {
                          className: 'abs_l', onClick: function() {
                            return e.props.onClickShowAuditInfo();
                          },
                        }, '杩斿洖') :
                        m.default.createElement('div', {className: 'abs_l'}, !n &&
                            m.default.createElement(b.default, null)), this.props.showAuditBtn ?
                        m.default.createElement('span', {
                          className: 'abs_r', onClick: function() {
                            return e.props.onClickShowAuditInfo();
                          },
                        }, '鑱旂郴鎴戜滑') :
                        m.default.createElement('div', {className: 'abs_r'}, m.default.createElement('a', {
                          href: w.default.appendQuery('//m.toutiao.com/search/', 'need_open_window=1'),
                          className: 'btn search',
                        }))));
          },
        }]), t;
    }(h.Component);
    T.propTypes = {
      GTMValue: g.default.object,
      onRefreshBtnClick: g.default.func,
      rotateRefreshBtn: g.default.bool,
      hideTopBar: g.default.bool,
      hideMsgBox: g.default.bool,
      showAuditBtn: g.default.bool,
      onClickShowAuditInfo: g.default.func,
      showAuditInfo: g.default.bool,
    }, T.defaultProps = {showAuditBtn: !1, showAuditInfo: !1}, e.exports = T;
  }, '2Z17': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    function o(e) {
      var t = 'transition' + e + 'Timeout', n = 'transition' + e;
      return function(e) {
        if (e[n]) {
          if (null == e[t]) return new Error(t +
              ' wasn\'t supplied to CSSTransitionGroup: this can cause unreliable animations and won\'t be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.');
          if ('number' != typeof e[t]) return new Error(t + ' must be a number (in milliseconds)');
        }
        return null;
      };
    }

    t.__esModule = !0, t.nameShape = void 0, t.transitionTimeout = o;
    var i = n('V80v'), a = (r(i), n('nhKt')), s = r(a);
    t.nameShape = s.default.oneOfType([
      s.default.string,
      s.default.shape({enter: s.default.string, leave: s.default.string, active: s.default.string}),
      s.default.shape({
        enter: s.default.string,
        enterActive: s.default.string,
        leave: s.default.string,
        leaveActive: s.default.string,
        appear: s.default.string,
        appearActive: s.default.string,
      })]);
  }, '3/fS': function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n('QVlm'), o = n('UoBj'), i = n('SJPe'), a = function(e, t) {
        function n(e) {
          return e * (Math.PI / 180);
        }

        function o(e, t) {
          var n = [0, 0], r = [n[0], n[1] + e], o = [n[0] + e / 2, n[1] + e / 2], i = [n[0], n[1] + e / 2], a = t,
              s = [];
          s.push('M' + n.join(',')), s.push('L' + r.join(',')), s.push('L' + o.join(',')), s.push('L' +
              n.join(',')), a.find('path').attr('d', s.join(' ')), a[0].setAttribute('refX', i[0]), a[0].setAttribute(
              'refY', i[1]);
        }

        function i(t) {
          t = e.extend({
            x: 0,
            y: 0,
            radius: 0,
            margin: 0,
            startDegree: 0,
            endDegree: 0,
            arrowSize: 0,
            arrowObj: e('#markerArrow'),
            pathObj: e('#svgPath'),
            color: '#ff0000',
          }, t);
          var i = t.radius, a = t.margin, s = i + a + i * Math.sin(n(t.endDegree)),
              u = i + a - i * Math.cos(n(t.endDegree)), l = i + a + i * Math.sin(n(t.startDegree)),
              c = i + a - i * Math.cos(n(t.startDegree));
          l = r.px2px(l), c = r.px2px(c), i = r.px2px(i), s = r.px2px(s), u = r.px2px(u);
          var d = [['M' + l, c].join(',')];
          d.push([
            ['A' + i, i].join(','), '0', [t.endDegree - t.startDegree > 180 ? '1' : '0', '1'].join(','),
            [s, u].join(',')].join(' '));
          var f = d.join(' ');
          e(t.pathObj).attr('d', f).css('stroke', t.color), e(t.arrowObj).find('path').css('fill', t.color), o(
              t.arrowSize, e(t.arrowObj));
        }

        return {drawArc: i};
      }(window.jQuery || window.Zepto, window), s = function(e, t) {
        var n = t.document,
            s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                  window.setTimeout(e, 1e3 / 60);
                }, u = {con: '', minDistance: 4},
            l = ['onPullStart', 'onMove', 'onRelease', 'needRefresh', 'doRefresh', 'noop'], c = 30, d = 300,
            f = function() {
              return 85 * ((r || {dpr: 1}).dpr || 1);
            }, p = 10, h = function(e) {
              return 5 * e / 12;
            }, m = function() {
              var e = document.createElement('canvas'), t = !(!e.getContext || !e.getContext('2d')),
                  n = navigator.userAgent.toLowerCase(),
                  r = (n.match(/chrome\/([\d.]+)/), n.match(/version\/([\d.]+).*safari/)),
                  o = (n.match(/firefox\/([\d.]+)/), n.match(/mx[\d.]+/)), i = !1;
              return o && r && (i = !0), !t && i;
            }(), v = function(t) {
              'string' == typeof t.con && (t.con = n.querySelector(t.con));
              var r = {}, i = this;
              e.each(l, function(e, t) {
                r[t] = i['_' + t].bind(i);
              }), this.options = e.extend({}, u, r,
                  t), this.shouldRefresh = !1, this.isRefreshing = !1, this.$pullTip = null, r.onPullEnd = this._onPullEnd.bind(
                  this), t = e.extend({}, r, t), this.touchPull = o.init(t), this.refreshTimes = 0;
            };
        return v.prototype = {
          _onPullStart: function(e, t) {
            this.isRefreshing || (e.preventDefault(), this.addPullTip(this.options.con));
          }, _onMove: function(e, t) {
            if (!this.isRefreshing) {
              e.preventDefault();
              var n = h(t);
              n = this.isRefreshing ? n + this.minRefreshDistance : n, this.movePullTip(n), this.changePullTip(n,
                  this.options.con);
            }
          }, _onPullEnd: function(e, n, r) {
            if (!this.isRefreshing) {
              var o = this;
              this.options.needRefresh(n), this.options.onRelease().then(function() {
                o.options.needRefresh() ? (t._vis_opt_queue = t._vis_opt_queue || [], t._vis_opt_queue.push(function() {
                  _vis_opt_goal_conversion(13359);
                }), o.isRefreshing = !0, o.refreshTimes += 1, o.options.doRefresh().always(function() {
                  o.reset();
                })) : (o.reset(), o.options.noop());
              });
            }
          }, transitionDefer: null, onTransitionEnd: function() {
            var e = this;
            e.shouldRefresh ? e.canvasObj.startAuto() : e.reset(), setTimeout(function() {
              e.transitionDefer.resolve();
            }, !1);
          }, _onRelease: function() {
            if (this.transitionDefer = e.Deferred(), this.pullTipExist()) {
              this.$pullTip[0].addEventListener('webkitTransitionEnd', this.onTransitionEnd.bind(this), !1);
              var t = this.shouldRefresh ? this.minRefreshDistance : 0;
              this.movePullTip(t, 'all ' + d + 'ms linear', !0);
            } else this.transitionDefer.resolve();
            return this.transitionDefer;
          }, _doRefresh: function() {
            var t = e.Deferred();
            return t.resolve(), t;
          }, _noop: function() {
          }, _needRefresh: function(e) {
            return e = h(e), !this.shouldRefresh && e >= this.minRefreshDistance &&
            (this.shouldRefresh = !0), this.shouldRefresh;
          }, pullTipExist: function() {
            return this.$pullTip && this.$pullTip[0];
          }, reset: function() {
            var e = this.isRefreshing;
            this.isRefreshing = !1, this.shouldRefresh = !1, this.removePullTip(e);
          }, canvasObj: function() {
            function t() {
              var e = (R + 1) % N.length;
              return R = e, e;
            }

            function n(e) {
              return 360 + e - q;
            }

            function r() {
              E || T.clearRect(0, 0, 2 * O, 2 * C);
            }

            function o(e) {
              if (!m) {
                var t = e.start, n = e.end, o = e.lineWidth, i = e.color, a = e.counterClockwise, s = e.co;
                e.clearRect && r(), T.save(), T.globalCompositeOperation = s, T.beginPath(), T.arc(O, C, A, _(t), _(n),
                    a), T.lineWidth = o, T.strokeStyle = i, T.stroke(), T.restore();
              }
            }

            function u() {
              if (!m) {
                var e = U.speed, r = U.startAngle, i = I, a = U.color, s = U.lineWidth, u = U.counterClockwise,
                    l = U.globalCompositeOperation, c = K || +new Date;
                i = +new Date, e = 360 / j * (i - c), K = i, I += e, i = Math.min(W, I);
                var d = 'draw' === V;
                if (!E && (o({start: r, end: i, color: a, lineWidth: s, counterClockwise: u, co: l, clearRect: d}), I >=
                    W)) if (T.closePath(), U = 'erase' !== V ? F : P, 'draw' ===
                    (V = 'erase' !== V ? 'erase' : 'draw')) {
                  D = U.color;
                  var f = t(D);
                  U.color = N[f], U.startAngle = (U.startAngle - q) % 360, I = U.startAngle, W = n(I);
                } else I = U.startAngle = P.startAngle;
              }
            }

            function l(e) {
              if (!m) {
                var t = P.speed, n = P.startAngle, r = P.startAngle, o = N[0];
                if (!isNaN(e)) {
                  e = Math.min(x.minRefreshDistance - c, e);
                  var i = e / (x.minRefreshDistance - c);
                  t = (W - p) * i - P.startAngle;
                }
                r += t, B = r, h({start: n, end: r, color: o, distance: e});
              }
            }

            function f() {
              var t = x.minRefreshDistance - c, n = t / j * 1.3, r = N[0], o = t, i = +new Date, a = e.Deferred();
              return s(function e() {
                if (o >= 0) {
                  var t = +new Date;
                  o -= n * (t - i), i = t;
                  var u = o / (x.minRefreshDistance - c), l = (W - p) * u - P.startAngle, d = B - l;
                  d = Math.min(d, B), h({start: d, end: B, color: r, distance: o}), s(e);
                } else a.resolve();
              }), a;
            }

            function h(t) {
              var n = t.distance, o = E ? 10 : 25, s = L, u = n / (x.minRefreshDistance - c);
              isNaN(n) || (o *= u, s = L * u), r(), E ?
                  a.drawArc({
                    x: O,
                    y: C,
                    radius: A,
                    margin: M,
                    startDegree: t.start,
                    endDegree: t.end,
                    arrowSize: o,
                    arrowObj: e(k).find('#markerArrow'),
                    pathObj: e(k).find('#svgPath'),
                    color: t.color,
                  }) :
                  (T.strokeStyle = t.color, T.fillStyle = t.color, i.drawArcedArrow(T, O, C, A, _(t.start), _(t.end),
                      !1, 1, 2, _(45), o, L, s));
            }

            function v(e) {
              var t = 0;
              if (e) {
                e = e.replace('matrix(', '').replace(')', ''), e = e.replace(/\s+/gi, '');
                t = e.split(',')[5] || 0;
              }
              return t;
            }

            function g() {
              var e = v(x.$pullTip.css('transform'));
              if (!(e < c)) {
                var t = d, n = e / t, r = e, o = +new Date;
                s(function e() {
                  if (r > c && x.$pullTip) {
                    var t = +new Date;
                    r -= n * (t - o), w(r - c), l(r - c), y(r - c), o = t, s(e);
                  }
                });
              }
            }

            function y(t) {
              var n = 1 * t / (x.minRefreshDistance - c);
              e(k).css('opacity', n);
            }

            function w(e, t) {
              var n = e;
              t || (n = Math.max(0, (e - c) / x.minRefreshDistance *
                  360)), k.style.webkitTransition = 'none', k.style.webkitTransform = 'rotate(' + n + 'deg)';
            }

            function _(e) {
              return e * (Math.PI / 180);
            }

            function b(e) {
              clearTimeout(H), e = e || 8e3, H = setTimeout(function() {
                x.reset();
              }, e);
            }

            var x = null, k = null, T = null, E = !1, O = 100, C = 100, A = 50, M = 0, L = 15, S = !1, j = 1e3,
                N = ['green', 'red', 'blue', '#f3b000'], D = N[0], R = 1, P = {
                  startAngle: 0,
                  speed: 5,
                  color: N[0],
                  counterClockwise: !1,
                  globalCompositeOperation: 'source-out',
                  lineWidth: L,
                }, F = {
                  startAngle: 0,
                  speed: 5,
                  color: 'white',
                  counterClockwise: !1,
                  globalCompositeOperation: 'destination-out',
                  lineWidth: L + 40,
                }, I = 0, B = 0, U = P, V = 'draw', q = 50, W = 0, K = 0, H = -1;
            return {
              init: function(e, t) {
                this.reset(), K = 0, S = !1, k = e.find('#load-tip-svg')[0] ||
                    e.find('#load-tip-canvas')[0], T = k.getContext ?
                    k.getContext('2d') :
                    k, E = !k.getContext, B = I = 0, P.startAngle = F.startAngle = 0, W = n(
                    I), R = 1, P.color = N[R], V = 'draw', U = P, x = t, E ?
                    (M = 9, O = C = A = (40 - 2 * M) / 2) :
                    (O = C = 100, M = 0, A = 50);
              }, reset: function() {
                k = null, T = null;
              }, drawArrowedArcByDis: function(e) {
                l(e);
              }, drawArc: function(e) {
                m ? console.log('not support') : u();
              }, clearCurrent: function() {
                m ? console.log('not support') : g();
              }, rotate: w, changeOpacity: y, autoRotate: function() {
                var e = k.style.webkitTransform;
                e = e.replace('rotate(', '').replace('deg', '').replace(')', '');
                var t = parseFloat(e), n = this, r = +new Date;
                s(function e() {
                  if (S) {
                    var o = +new Date, i = t + .24 * (o - r);
                    r = o, n.rotate(i, !0), t = i, s(e);
                  }
                });
              }, autoDraw: function() {
                if (!m) {
                  var t = function t() {
                    S && (E ? (S = !1, e(T).attr('class', 'spinner')) : (u(), s(t)));
                  };
                  f().done(function() {
                    s(t);
                  });
                }
              }, startAuto: function() {
                S = !0, x.touchPull.detachEvent(), this.autoDraw(), this.autoRotate(), b();
              }, stopAuto: function() {
                S = !1, x.touchPull.initEvent(), clearTimeout(H);
              },
            };
          }(), initCanvas: function() {
            this.canvasObj.init(this.$pullTip, this);
          }, addPullTip: function(t) {
            this.removePullTip(), t = this.options.con;
            var n = this.$pullTip;
            if (!n) {
              var r = [];
              r.push('<div class=\'list_top\'>'), r.push('<div class=\'list_top_con v2\'>');
              r.push('<canvas                             id=\'load-tip-canvas\'                             width=\'200\'                             height=\'200\'                             class=\'' +
                  (m ? 'not-support' : '') + '\'></canvas>'), r.push('</div></div>'), this.$pullTip = e(r.join('')).
                  insertAfter('body'), n = this.$pullTip, this.minRefreshDistance = n.outerHeight();
              var o = n[0];
              o.style.webkitTransition = 'none', o.style.webkitTransform = 'translate3d(0,10px,0)', o.style.top = t.getBoundingClientRect().top -
                  this.minRefreshDistance + 'px', this.initCanvas();
            }
          }, movePullTip: function(e, t, n) {
            if (this.pullTipExist()) {
              var r = Math.min(f(), e);
              this.$pullTip[0].style.webkitTransition = t ||
                  'none', this.$pullTip[0].style.webkitTransform = 'translate3d(0,' + r + 'px,0)', 0 === e ?
                  this.canvasObj.clearCurrent() :
                  e > c && (this.shouldRefresh ?
                  this.isRefreshing || !0 === n || this.canvasObj.rotate(e) :
                  (e <= f() - 5 && this.canvasObj.rotate(e), this.canvasObj.drawArrowedArcByDis(e -
                      c), this.canvasObj.changeOpacity(e - c)));
            }
          }, changePullTip: function(e, t) {
            this.pullTipExist();
          }, removePullTip: function(t) {
            if (this.pullTipExist()) if (t) {
              var n = this;
              n.canvasObj.stopAuto(), n.$pullTip[0].style.webkitTransition = 'all 100ms linear', n.$pullTip.css(
                  'opacity', .1), n.$pullTip[0].style.webkitTransform += ' scale(0.1)';
            } else this.$pullTip[0].removeEventListener('webkitTransitionEnd', this.onTransitionEnd,
                !1), this.$pullTip.remove(), this.$pullTip = null, e(window).trigger('pullrefresh_pulltip_removed');
          },
        }, {
          init: function(e) {
            return new v(e);
          },
        };
      }(t, window);
      e.exports = s;
    }).call(t, n('gXQ3'));
  }, '3Cyt': function(e, t, n) {
    (function(t, n) {/*! Browser bundle of nunjucks 3.0.1 (slim, only works with precompiled templates) */
      !function(t, n) {
        e.exports = n();
      }(0, function() {
        return function(e) {
          function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
          }

          var n = {};
          return t.m = e, t.c = n, t.p = '', t(0);
        }([
          function(e, t, n) {
            'use strict';
            var r = n(1), o = n(2), i = n(15), a = n(3), s = n(3);
            e.exports = {}, e.exports.Environment = o.Environment, e.exports.Template = o.Template, e.exports.Loader = i, e.exports.FileSystemLoader = a.FileSystemLoader, e.exports.PrecompiledLoader = a.PrecompiledLoader, e.exports.WebLoader = a.WebLoader, e.exports.compiler = n(
                3), e.exports.parser = n(3), e.exports.lexer = n(3), e.exports.runtime = n(
                8), e.exports.lib = r, e.exports.nodes = n(3), e.exports.installJinjaCompat = n(16);
            var u;
            e.exports.configure = function(e, t) {
              t = t || {}, r.isObject(e) && (t = e, e = null);
              var n;
              return a.FileSystemLoader ?
                  n = new a.FileSystemLoader(e, {watch: t.watch, noCache: t.noCache}) :
                  a.WebLoader && (n = new a.WebLoader(e,
                  {useCache: t.web && t.web.useCache, async: t.web && t.web.async})), u = new o.Environment(n, t), t &&
              t.express && u.express(t.express), u;
            }, e.exports.compile = function(t, n, r, o) {
              return u || e.exports.configure(), new e.exports.Template(t, n, r, o);
            }, e.exports.render = function(t, n, r) {
              return u || e.exports.configure(), u.render(t, n, r);
            }, e.exports.renderString = function(t, n, r) {
              return u || e.exports.configure(), u.renderString(t, n, r);
            }, s && (e.exports.precompile = s.precompile, e.exports.precompileString = s.precompileString);
          }, function(e, t) {
            'use strict';
            var n = Array.prototype, r = Object.prototype,
                o = {'&': '&amp;', '"': '&quot;', '\'': '&#39;', '<': '&lt;', '>': '&gt;'}, i = /[&"'<>]/g,
                a = function(e) {
                  return o[e];
                }, t = e.exports = {};
            t.prettifyError = function(e, n, r) {
              if (r.Update || (r = new t.TemplateError(r)), r.Update(e), !n) {
                var o = r;
                r = new Error(o.message), r.name = o.name;
              }
              return r;
            }, t.TemplateError = function(e, t, n) {
              var r = this;
              if (e instanceof Error) {
                r = e, e = e.name + ': ' + e.message;
                try {
                  r.name = '';
                } catch (e) {
                  r = this;
                }
              } else Error.captureStackTrace && Error.captureStackTrace(r);
              return r.name = 'Template render error', r.message = e, r.lineno = t, r.colno = n, r.firstUpdate = !0, r.Update = function(e) {
                var t = '(' + (e || 'unknown path') + ')';
                return this.firstUpdate && (this.lineno && this.colno ?
                    t += ' [Line ' + this.lineno + ', Column ' + this.colno + ']' :
                    this.lineno && (t += ' [Line ' + this.lineno + ']')), t += '\n ', this.firstUpdate &&
                (t += ' '), this.message = t + (this.message || ''), this.firstUpdate = !1, this;
              }, r;
            }, t.TemplateError.prototype = Error.prototype, t.escape = function(e) {
              return e.replace(i, a);
            }, t.isFunction = function(e) {
              return '[object Function]' === r.toString.call(e);
            }, t.isArray = Array.isArray || function(e) {
              return '[object Array]' === r.toString.call(e);
            }, t.isString = function(e) {
              return '[object String]' === r.toString.call(e);
            }, t.isObject = function(e) {
              return '[object Object]' === r.toString.call(e);
            }, t.groupBy = function(e, n) {
              for (var r = {}, o = t.isFunction(n) ? n : function(e) {
                return e[n];
              }, i = 0; i < e.length; i++) {
                var a = e[i], s = o(a, i);
                (r[s] || (r[s] = [])).push(a);
              }
              return r;
            }, t.toArray = function(e) {
              return Array.prototype.slice.call(e);
            }, t.without = function(e) {
              var n = [];
              if (!e) return n;
              for (var r = -1, o = e.length, i = t.toArray(arguments).slice(1); ++r < o;) -1 === t.indexOf(i, e[r]) &&
              n.push(e[r]);
              return n;
            }, t.extend = function(e, t) {
              for (var n in t) e[n] = t[n];
              return e;
            }, t.repeat = function(e, t) {
              for (var n = '', r = 0; r < t; r++) n += e;
              return n;
            }, t.each = function(e, t, r) {
              if (null != e) if (n.each && e.each === n.each) e.forEach(t, r); else if (e.length ===
                  +e.length) for (var o = 0, i = e.length; o < i; o++) t.call(r, e[o], o, e)
            }, t.map = function(e, t) {
              var r = [];
              if (null == e) return r;
              if (n.map && e.map === n.map) return e.map(t);
              for (var o = 0; o < e.length; o++) r[r.length] = t(e[o], o);
              return e.length === +e.length && (r.length = e.length), r;
            }, t.asyncIter = function(e, t, n) {
              function r() {
                o++, o < e.length ? t(e[o], o, r, n) : n();
              }

              var o = -1;
              r();
            }, t.asyncFor = function(e, n, r) {
              function o() {
                s++;
                var t = i[s];
                s < a ? n(t, e[t], s, a, o) : r();
              }

              var i = t.keys(e), a = i.length, s = -1;
              o();
            }, t.indexOf = Array.prototype.indexOf ? function(e, t, n) {
              return Array.prototype.indexOf.call(e, t, n);
            } : function(e, t, n) {
              var r = this.length >>> 0;
              for (n = +n || 0, Math.abs(n) === 1 / 0 && (n = 0), n < 0 && (n += r) < 0 && (n = 0); n <
              r; n++) if (e[n] === t) return n;
              return -1;
            }, Array.prototype.map || (Array.prototype.map = function() {
              throw new Error('map is unimplemented for this js engine');
            }), t.keys = function(e) {
              if (Object.prototype.keys) return e.keys();
              var t = [];
              for (var n in e) e.hasOwnProperty(n) && t.push(n);
              return t;
            }, t.inOperator = function(e, n) {
              if (t.isArray(n)) return -1 !== t.indexOf(n, e);
              if (t.isObject(n)) return e in n;
              if (t.isString(n)) return -1 !== n.indexOf(e);
              throw new Error('Cannot use "in" operator to search for "' + e + '" in unexpected types.');
            };
          }, function(e, t, n) {
            'use strict';

            function r(e, t, n) {
              a(function() {
                e(t, n);
              });
            }

            var o, i = n(3), a = n(4), s = n(1), u = n(6), l = n(3), c = n(7), d = n(3), f = n(8), p = n(9), h = n(10),
                m = f.Frame;
            d.PrecompiledLoader = n(14);
            var v = u.extend({
              init: function(e, t) {
                t = this.opts = t || {}, this.opts.dev = !!t.dev, this.opts.autoescape = null == t.autoescape ||
                    t.autoescape, this.opts.throwOnUndefined = !!t.throwOnUndefined, this.opts.trimBlocks = !!t.trimBlocks, this.opts.lstripBlocks = !!t.lstripBlocks, this.loaders = [], e ?
                    this.loaders = s.isArray(e) ? e : [e] :
                    d.FileSystemLoader ?
                        this.loaders = [new d.FileSystemLoader('views')] :
                        d.WebLoader && (this.loaders = [new d.WebLoader('/views')]), window.nunjucksPrecompiled &&
                this.loaders.unshift(new d.PrecompiledLoader(
                    window.nunjucksPrecompiled)), this.initCache(), this.globals = p(), this.filters = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [];
                for (var n in c) this.addFilter(n, c[n])
              }, initCache: function() {
                s.each(this.loaders, function(e) {
                  e.cache = {}, 'function' == typeof e.on && e.on('update', function(t) {
                    e.cache[t] = null;
                  });
                });
              }, addExtension: function(e, t) {
                return t._name = e, this.extensions[e] = t, this.extensionsList.push(t), this;
              }, removeExtension: function(e) {
                var t = this.getExtension(e);
                t && (this.extensionsList = s.without(this.extensionsList, t), delete this.extensions[e]);
              }, getExtension: function(e) {
                return this.extensions[e];
              }, hasExtension: function(e) {
                return !!this.extensions[e];
              }, addGlobal: function(e, t) {
                return this.globals[e] = t, this;
              }, getGlobal: function(e) {
                if (void 0 === this.globals[e]) throw new Error('global not found: ' + e);
                return this.globals[e];
              }, addFilter: function(e, t, n) {
                var r = t;
                return n && this.asyncFilters.push(e), this.filters[e] = r, this;
              }, getFilter: function(e) {
                if (!this.filters[e]) throw new Error('filter not found: ' + e);
                return this.filters[e];
              }, resolveTemplate: function(e, t, n) {
                return !(e.isRelative && t && e.isRelative(n) && e.resolve) ? n : e.resolve(t, n);
              }, getTemplate: function(e, t, n, r, i) {
                var a = this, u = null;
                if (e && e.raw && (e = e.raw), s.isFunction(n) && (i = n, n = null, t = t || !1), s.isFunction(t) &&
                    (i = t, t = !1), e instanceof o) u = e; else {
                  if ('string' != typeof e) throw new Error('template names must be a string: ' + e);
                  for (var l = 0; l < this.loaders.length; l++) {
                    var c = this.resolveTemplate(this.loaders[l], n, e);
                    if (u = this.loaders[l].cache[c]) break;
                  }
                }
                if (!u) {
                  var d, f = this, p = function(n, a) {
                    if (a || n || r || (n = new Error('template not found: ' + e)), n) {
                      if (!i) throw n;
                      i(n);
                    } else {
                      var s;
                      a ?
                          (s = new o(a.src, f, a.path, t), a.noCache || (a.loader.cache[e] = s)) :
                          s = new o('', f, '', t), i ? i(null, s) : d = s;
                    }
                  };
                  return s.asyncIter(this.loaders, function(t, r, o, i) {
                    function s(e, n) {
                      e ? i(e) : n ? (n.loader = t, i(null, n)) : o();
                    }

                    e = a.resolveTemplate(t, n, e), t.async ? t.getSource(e, s) : s(null, t.getSource(e));
                  }, p), d;
                }
                if (t && u.compile(), !i) return u;
                i(null, u);
              }, express: function(e) {
                function t(e, t) {
                  if (this.name = e, this.path = e, this.defaultEngine = t.defaultEngine, this.ext = i.extname(
                          e), !this.ext && !this.defaultEngine) throw new Error(
                      'No default engine was specified and no extension was provided.');
                  this.ext || (this.name += this.ext = ('.' !== this.defaultEngine[0] ? '.' : '') + this.defaultEngine);
                }

                var n = this;
                return t.prototype.render = function(e, t) {
                  n.render(this.name, e, t);
                }, e.set('view', t), e.set('nunjucksEnv', this), this;
              }, render: function(e, t, n) {
                s.isFunction(t) && (n = t, t = null);
                var o = null;
                return this.getTemplate(e, function(e, i) {
                  if (e && n) r(n, e); else {
                    if (e) throw e;
                    o = i.render(t, n);
                  }
                }), o;
              }, renderString: function(e, t, n, r) {
                return s.isFunction(n) && (r = n, n = {}), n = n || {}, new o(e, this, n.path).render(t, r);
              }, waterfall: h,
            }), g = u.extend({
              init: function(e, t, n) {
                this.env = n || new v, this.ctx = {};
                for (var r in e) e.hasOwnProperty(r) && (this.ctx[r] = e[r]);
                this.blocks = {}, this.exported = [];
                for (var o in t) this.addBlock(o, t[o])
              }, lookup: function(e) {
                return e in this.env.globals && !(e in this.ctx) ? this.env.globals[e] : this.ctx[e];
              }, setVariable: function(e, t) {
                this.ctx[e] = t;
              }, getVariables: function() {
                return this.ctx;
              }, addBlock: function(e, t) {
                return this.blocks[e] = this.blocks[e] || [], this.blocks[e].push(t), this;
              }, getBlock: function(e) {
                if (!this.blocks[e]) throw new Error('unknown block "' + e + '"');
                return this.blocks[e][0];
              }, getSuper: function(e, t, n, r, o, i) {
                var a = s.indexOf(this.blocks[t] || [], n), u = this.blocks[t][a + 1], l = this;
                if (-1 === a || !u) throw new Error('no super block available for "' + t + '"');
                u(e, l, r, o, i);
              }, addExport: function(e) {
                this.exported.push(e);
              }, getExported: function() {
                for (var e = {}, t = 0; t < this.exported.length; t++) {
                  var n = this.exported[t];
                  e[n] = this.ctx[n];
                }
                return e;
              },
            });
            o = u.extend({
              init: function(e, t, n, r) {
                if (this.env = t || new v, s.isObject(e)) switch (e.type) {
                  case'code':
                    this.tmplProps = e.obj;
                    break;
                  case'string':
                    this.tmplStr = e.obj;
                } else {
                  if (!s.isString(e)) throw new Error('src must be a string or an object describing the source');
                  this.tmplStr = e;
                }
                if (this.path = n, r) {
                  var o = this;
                  try {
                    o._compile();
                  } catch (e) {
                    throw s.prettifyError(this.path, this.env.opts.dev, e);
                  }
                } else this.compiled = !1;
              }, render: function(e, t, n) {
                'function' == typeof e ? (n = e, e = {}) : 'function' == typeof t && (n = t, t = null);
                var o = !0;
                t && (o = !1);
                var i = this;
                try {
                  i.compile();
                } catch (e) {
                  var a = s.prettifyError(this.path, this.env.opts.dev, e);
                  if (n) return r(n, a);
                  throw a;
                }
                var u = new g(e || {}, i.blocks, i.env), l = t ? t.push(!0) : new m;
                l.topLevel = !0;
                var c = null;
                return i.rootRenderFunc(i.env, u, l || new m, f, function(e, t) {
                  if (e && (e = s.prettifyError(i.path, i.env.opts.dev, e)), n) o ? r(n, e, t) : n(e, t); else {
                    if (e) throw e;
                    c = t;
                  }
                }), c;
              }, getExported: function(e, t, n) {
                'function' == typeof e && (n = e, e = {}), 'function' == typeof t && (n = t, t = null);
                try {
                  this.compile();
                } catch (e) {
                  if (n) return n(e);
                  throw e;
                }
                var r = t ? t.push() : new m;
                r.topLevel = !0;
                var o = new g(e || {}, this.blocks, this.env);
                this.rootRenderFunc(this.env, o, r, f, function(e) {
                  e ? n(e, null) : n(null, o.getExported());
                });
              }, compile: function() {
                this.compiled || this._compile();
              }, _compile: function() {
                var e;
                if (this.tmplProps) e = this.tmplProps; else {
                  var t = l.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path,
                      this.env.opts);
                  e = new Function(t)();
                }
                this.blocks = this._getBlocks(e), this.rootRenderFunc = e.root, this.compiled = !0;
              }, _getBlocks: function(e) {
                var t = {};
                for (var n in e) 'b_' === n.slice(0, 2) && (t[n.slice(2)] = e[n]);
                return t;
              },
            }), e.exports = {Environment: v, Template: o};
          }, function(e, t) {
          }, function(e, t, n) {
            'use strict';

            function r() {
              if (u.length) throw u.shift();
            }

            function o(e) {
              var t;
              t = s.length ? s.pop() : new i, t.task = e, a(t);
            }

            function i() {
              this.task = null;
            }

            var a = n(5), s = [], u = [], l = a.makeRequestCallFromTimer(r);
            e.exports = o, i.prototype.call = function() {
              try {
                this.task.call();
              } catch (e) {
                o.onerror ? o.onerror(e) : (u.push(e), l());
              } finally {
                this.task = null, s[s.length] = this;
              }
            };
          }, function(e, t) {
            (function(t) {
              'use strict';

              function n(e) {
                a.length || (i(), s = !0), a[a.length] = e;
              }

              function r() {
                for (; u < a.length;) {
                  var e = u;
                  if (u += 1, a[e].call(), u > l) {
                    for (var t = 0, n = a.length - u; t < n; t++) a[t] = a[t + u];
                    a.length -= u, u = 0;
                  }
                }
                a.length = 0, u = 0, s = !1;
              }

              function o(e) {
                return function() {
                  function t() {
                    clearTimeout(n), clearInterval(r), e();
                  }

                  var n = setTimeout(t, 0), r = setInterval(t, 50);
                };
              }

              e.exports = n;
              var i, a = [], s = !1, u = 0, l = 1024, c = void 0 !== t ? t : self,
                  d = c.MutationObserver || c.WebKitMutationObserver;
              i = 'function' == typeof d ? function(e) {
                var t = 1, n = new d(e), r = document.createTextNode('');
                return n.observe(r, {characterData: !0}), function() {
                  t = -t, r.data = t;
                };
              }(r) : o(r), n.requestFlush = i, n.makeRequestCallFromTimer = o;
            }).call(t, function() {
              return this;
            }());
          }, function(e, t) {
            'use strict';

            function n(e, t, r) {
              var o = function() {
              };
              o.prototype = e.prototype;
              var i = new o, a = /xyz/.test(function() {
                xyz;
              }) ? /\bparent\b/ : /.*/;
              r = r || {};
              for (var s in r) {
                var u = r[s], l = i[s];
                'function' == typeof l && 'function' == typeof u && a.test(u) ? i[s] = function(e, t) {
                  return function() {
                    var n = this.parent;
                    this.parent = t;
                    var r = e.apply(this, arguments);
                    return this.parent = n, r;
                  };
                }(u, l) : i[s] = u;
              }
              i.typename = t;
              var c = function() {
                i.init && i.init.apply(this, arguments);
              };
              return c.prototype = i, c.prototype.constructor = c, c.extend = function(e, t) {
                return 'object' == typeof e && (t = e, e = 'anonymous'), n(c, e, t);
              }, c;
            }

            e.exports = n(Object, 'Object', {});
          }, function(e, t, n) {
            'use strict';

            function r(e, t) {
              return null === e || void 0 === e || !1 === e ? t : e;
            }

            var o = n(1), i = n(8), a = {
              abs: Math.abs, batch: function(e, t, n) {
                var r, o = [], i = [];
                for (r = 0; r < e.length; r++) r % t == 0 && i.length && (o.push(i), i = []), i.push(e[r]);
                if (i.length) {
                  if (n) for (r = i.length; r < t; r++) i.push(n);
                  o.push(i);
                }
                return o;
              }, capitalize: function(e) {
                e = r(e, '');
                var t = e.toLowerCase();
                return i.copySafeness(e, t.charAt(0).toUpperCase() + t.slice(1));
              }, center: function(e, t) {
                if (e = r(e, ''), t = t || 80, e.length >= t) return e;
                var n = t - e.length, a = o.repeat(' ', n / 2 - n % 2), s = o.repeat(' ', n / 2);
                return i.copySafeness(e, a + e + s);
              }, default: function(e, t, n) {
                return n ? e || t : void 0 !== e ? e : t;
              }, dictsort: function(e, t, n) {
                if (!o.isObject(e)) throw new o.TemplateError('dictsort filter: val must be an object');
                var r = [];
                for (var i in e) r.push([i, e[i]]);
                var a;
                if (void 0 === n || 'key' === n) a = 0; else {
                  if ('value' !== n) throw new o.TemplateError(
                      'dictsort filter: You can only sort by either key or value');
                  a = 1;
                }
                return r.sort(function(e, n) {
                  var r = e[a], i = n[a];
                  return t || (o.isString(r) && (r = r.toUpperCase()), o.isString(i) && (i = i.toUpperCase())), r > i ?
                      1 :
                      r === i ?
                          0 :
                          -1;
                }), r;
              }, dump: function(e, t) {
                return JSON.stringify(e, null, t);
              }, escape: function(e) {
                return e instanceof i.SafeString ?
                    e :
                    (e = null === e || void 0 === e ? '' : e, i.markSafe(o.escape(e.toString())));
              }, safe: function(e) {
                return e instanceof i.SafeString ?
                    e :
                    (e = null === e || void 0 === e ? '' : e, i.markSafe(e.toString()));
              }, first: function(e) {
                return e[0];
              }, groupby: function(e, t) {
                return o.groupBy(e, t);
              }, indent: function(e, t, n) {
                if ('' === (e = r(e, ''))) return '';
                t = t || 4;
                for (var a = '', s = e.split('\n'), u = o.repeat(' ', t), l = 0; l < s.length; l++) a += 0 !== l || n ?
                    u + s[l] + '\n' :
                    s[l] + '\n';
                return i.copySafeness(e, a);
              }, join: function(e, t, n) {
                return t = t || '', n && (e = o.map(e, function(e) {
                  return e[n];
                })), e.join(t);
              }, last: function(e) {
                return e[e.length - 1];
              }, length: function(e) {
                var t = r(e, '');
                return void 0 !== t ?
                    'function' == typeof Map && t instanceof Map || 'function' == typeof Set && t instanceof Set ?
                        t.size :
                        !o.isObject(t) || t instanceof i.SafeString ?
                            t.length :
                            Object.keys(t).length :
                    0;
              }, list: function(e) {
                if (o.isString(e)) return e.split('');
                if (o.isObject(e)) {
                  var t = [];
                  if (Object.keys) t = Object.keys(e); else for (var n in e) t.push(n);
                  return o.map(t, function(t) {
                    return {key: t, value: e[t]};
                  });
                }
                if (o.isArray(e)) return e;
                throw new o.TemplateError('list filter: type not iterable');
              }, lower: function(e) {
                return e = r(e, ''), e.toLowerCase();
              }, nl2br: function(e) {
                return null === e || void 0 === e ? '' : i.copySafeness(e, e.replace(/\r\n|\n/g, '<br />\n'));
              }, random: function(e) {
                return e[Math.floor(Math.random() * e.length)];
              }, rejectattr: function(e, t) {
                return e.filter(function(e) {
                  return !e[t];
                });
              }, selectattr: function(e, t) {
                return e.filter(function(e) {
                  return !!e[t];
                });
              }, replace: function(e, t, n, r) {
                var o = e;
                if (t instanceof RegExp) return e.replace(t, n);
                void 0 === r && (r = -1);
                var a = '';
                if ('number' == typeof t) t += ''; else if ('string' != typeof t) return e;
                if ('number' == typeof e && (e += ''), 'string' != typeof e && !(e instanceof i.SafeString)) return e;
                if ('' === t) return a = n + e.split('').join(n) + n, i.copySafeness(e, a);
                var s = e.indexOf(t);
                if (0 === r || -1 === s) return e;
                for (var u = 0, l = 0; s > -1 && (-1 === r || l < r);) a += e.substring(u, s) + n, u = s +
                    t.length, l++, s = e.indexOf(t, u);
                return u < e.length && (a += e.substring(u)), i.copySafeness(o, a);
              }, reverse: function(e) {
                var t;
                return t = o.isString(e) ? a.list(e) : o.map(e, function(e) {
                  return e;
                }), t.reverse(), o.isString(e) ? i.copySafeness(e, t.join('')) : t;
              }, round: function(e, t, n) {
                t = t || 0;
                var r = Math.pow(10, t);
                return ('ceil' === n ? Math.ceil : 'floor' === n ? Math.floor : Math.round)(e * r) / r;
              }, slice: function(e, t, n) {
                for (var r = Math.floor(e.length / t), o = e.length % t, i = 0, a = [], s = 0; s < t; s++) {
                  var u = i + s * r;
                  s < o && i++;
                  var l = i + (s + 1) * r, c = e.slice(u, l);
                  n && s >= o && c.push(n), a.push(c);
                }
                return a;
              }, sum: function(e, t, n) {
                var r = 0;
                'number' == typeof n && (r += n), t && (e = o.map(e, function(e) {
                  return e[t];
                }));
                for (var i = 0; i < e.length; i++) r += e[i];
                return r;
              }, sort: i.makeMacro(['value', 'reverse', 'case_sensitive', 'attribute'], [], function(e, t, n, r) {
                return e = o.map(e, function(e) {
                  return e;
                }), e.sort(function(e, i) {
                  var a, s;
                  return r ? (a = e[r], s = i[r]) : (a = e, s = i), !n && o.isString(a) && o.isString(s) &&
                  (a = a.toLowerCase(), s = s.toLowerCase()), a < s ? t ? 1 : -1 : a > s ? t ? -1 : 1 : 0;
                }), e;
              }), string: function(e) {
                return i.copySafeness(e, e);
              }, striptags: function(e, t) {
                e = r(e, ''), t = t || !1;
                var n = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, o = a.trim(e.replace(n, '')), s = '';
                return s = t ?
                    o.replace(/^ +| +$/gm, '').
                        replace(/ +/g, ' ').
                        replace(/(\r\n)/g, '\n').
                        replace(/\n\n\n+/g, '\n\n') :
                    o.replace(/\s+/gi, ' '), i.copySafeness(e, s);
              }, title: function(e) {
                e = r(e, '');
                for (var t = e.split(' '), n = 0; n < t.length; n++) t[n] = a.capitalize(t[n]);
                return i.copySafeness(e, t.join(' '));
              }, trim: function(e) {
                return i.copySafeness(e, e.replace(/^\s*|\s*$/g, ''));
              }, truncate: function(e, t, n, o) {
                var a = e;
                if (e = r(e, ''), t = t || 255, e.length <= t) return e;
                if (n) e = e.substring(0, t); else {
                  var s = e.lastIndexOf(' ', t);
                  -1 === s && (s = t), e = e.substring(0, s);
                }
                return e += void 0 !== o && null !== o ? o : '...', i.copySafeness(a, e);
              }, upper: function(e) {
                return e = r(e, ''), e.toUpperCase();
              }, urlencode: function(e) {
                var t = encodeURIComponent;
                if (o.isString(e)) return t(e);
                var n;
                if (o.isArray(e)) n = e.map(function(e) {
                  return t(e[0]) + '=' + t(e[1]);
                }); else {
                  n = [];
                  for (var r in e) e.hasOwnProperty(r) && n.push(t(r) + '=' + t(e[r]))
                }
                return n.join('&');
              }, urlize: function(e, t, n) {
                isNaN(t) && (t = 1 / 0);
                var r = !0 === n ? ' rel="nofollow"' : '', o = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,
                    i = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, a = /^https?:\/\/.*$/, s = /^www\./,
                    u = /\.(?:org|net|com)(?:\:|\/|$)/;
                return e.split(/(\s+)/).filter(function(e) {
                  return e && e.length;
                }).map(function(e) {
                  var n = e.match(o), l = n && n[1] || e;
                  return a.test(l) ?
                      '<a href="' + l + '"' + r + '>' + l.substr(0, t) + '</a>' :
                      s.test(l) ?
                          '<a href="http://' + l + '"' + r + '>' + l.substr(0, t) + '</a>' :
                          i.test(l) ?
                              '<a href="mailto:' + l + '">' + l + '</a>' :
                              u.test(l) ?
                                  '<a href="http://' + l + '"' + r + '>' + l.substr(0, t) + '</a>' :
                                  e;
                }).join('');
              }, wordcount: function(e) {
                e = r(e, '');
                var t = e ? e.match(/\w+/g) : null;
                return t ? t.length : null;
              }, float: function(e, t) {
                var n = parseFloat(e);
                return isNaN(n) ? t : n;
              }, int: function(e, t) {
                var n = parseInt(e, 10);
                return isNaN(n) ? t : n;
              },
            };
            a.d = a.default, a.e = a.escape, e.exports = a;
          }, function(e, t, n) {
            'use strict';

            function r(e, t, n) {
              return function() {
                var r, o, s = a(arguments), u = i(arguments);
                if (s > e.length) {
                  r = Array.prototype.slice.call(arguments, 0, e.length);
                  var l = Array.prototype.slice.call(arguments, r.length, s);
                  for (o = 0; o < l.length; o++) o < t.length && (u[t[o]] = l[o]);
                  r.push(u);
                } else if (s < e.length) {
                  for (r = Array.prototype.slice.call(arguments, 0, s), o = s; o < e.length; o++) {
                    var c = e[o];
                    r.push(u[c]), delete u[c];
                  }
                  r.push(u);
                } else r = arguments;
                return n.apply(this, r);
              };
            }

            function o(e) {
              return e.__keywords = !0, e;
            }

            function i(e) {
              var t = e.length;
              if (t) {
                var n = e[t - 1];
                if (n && n.hasOwnProperty('__keywords')) return n;
              }
              return {};
            }

            function a(e) {
              var t = e.length;
              if (0 === t) return 0;
              var n = e[t - 1];
              return n && n.hasOwnProperty('__keywords') ? t - 1 : t;
            }

            function s(e) {
              if ('string' != typeof e) return e;
              this.val = e, this.length = e.length;
            }

            function u(e, t) {
              return e instanceof s ? new s(t) : t.toString();
            }

            function l(e) {
              var t = typeof e;
              return 'string' === t ? new s(e) : 'function' !== t ? e : function() {
                var t = e.apply(this, arguments);
                return 'string' == typeof t ? new s(t) : t;
              };
            }

            function c(e, t) {
              return e = void 0 !== e && null !== e ? e : '', !t || e instanceof s || (e = y.escape(e.toString())), e;
            }

            function d(e, t, n) {
              if (null === e || void 0 === e) throw new y.TemplateError(
                  'attempted to output null or undefined value', t + 1, n + 1);
              return e;
            }

            function f(e, t) {
              return e = e || {}, 'function' == typeof e[t] ? function() {
                return e[t].apply(e, arguments);
              } : e[t];
            }

            function p(e, t, n, r) {
              if (!e) throw new Error('Unable to call `' + t + '`, which is undefined or falsey');
              if ('function' != typeof e) throw new Error('Unable to call `' + t + '`, which is not a function');
              return e.apply(n, r);
            }

            function h(e, t, n) {
              var r = t.lookup(n);
              return void 0 !== r ? r : e.lookup(n);
            }

            function m(e, t, n) {
              return e.lineno ? e : new y.TemplateError(e, t, n);
            }

            function v(e, t, n, r) {
              if (y.isArray(e)) {
                var o = e.length;
                y.asyncIter(e, function(e, r, i) {
                  switch (t) {
                    case 1:
                      n(e, r, o, i);
                      break;
                    case 2:
                      n(e[0], e[1], r, o, i);
                      break;
                    case 3:
                      n(e[0], e[1], e[2], r, o, i);
                      break;
                    default:
                      e.push(r, i), n.apply(this, e);
                  }
                }, r);
              } else y.asyncFor(e, function(e, t, r, o, i) {
                n(e, t, r, o, i);
              }, r);
            }

            function g(e, t, n, r) {
              function o(e, t) {
                u++, s[e] = t, u === i && r(null, s.join(''));
              }

              var i, a, s, u = 0;
              if (y.isArray(e)) if (i = e.length, s = new Array(i), 0 === i) r(null, ''); else for (a = 0; a <
              e.length; a++) {
                var l = e[a];
                switch (t) {
                  case 1:
                    n(l, a, i, o);
                    break;
                  case 2:
                    n(l[0], l[1], a, i, o);
                    break;
                  case 3:
                    n(l[0], l[1], l[2], a, i, o);
                    break;
                  default:
                    l.push(a, o), n.apply(this, l);
                }
              } else {
                var c = y.keys(e);
                if (i = c.length, s = new Array(i), 0 === i) r(null, ''); else for (a = 0; a < c.length; a++) {
                  var d = c[a];
                  n(d, e[d], a, i, o);
                }
              }
            }

            var y = n(1), w = n(6), _ = w.extend({
              init: function(e, t) {
                this.variables = {}, this.parent = e, this.topLevel = !1, this.isolateWrites = t;
              }, set: function(e, t, n) {
                var r = e.split('.'), o = this.variables, i = this;
                if (n && (i = this.resolve(r[0], !0))) return void i.set(e, t);
                for (var a = 0; a < r.length - 1; a++) {
                  var s = r[a];
                  o[s] || (o[s] = {}), o = o[s];
                }
                o[r[r.length - 1]] = t;
              }, get: function(e) {
                var t = this.variables[e];
                return void 0 !== t ? t : null;
              }, lookup: function(e) {
                var t = this.parent, n = this.variables[e];
                return void 0 !== n ? n : t && t.lookup(e);
              }, resolve: function(e, t) {
                var n = t && this.isolateWrites ? void 0 : this.parent;
                return void 0 !== this.variables[e] ? this : n && n.resolve(e);
              }, push: function(e) {
                return new _(this, e);
              }, pop: function() {
                return this.parent;
              },
            });
            s.prototype = Object.create(String.prototype,
                {length: {writable: !0, configurable: !0, value: 0}}), s.prototype.valueOf = function() {
              return this.val;
            }, s.prototype.toString = function() {
              return this.val;
            }, e.exports = {
              Frame: _,
              makeMacro: r,
              makeKeywordArgs: o,
              numArgs: a,
              suppressValue: c,
              ensureDefined: d,
              memberLookup: f,
              contextOrFrameLookup: h,
              callWrap: p,
              handleError: m,
              isArray: y.isArray,
              keys: y.keys,
              SafeString: s,
              copySafeness: u,
              markSafe: l,
              asyncEach: v,
              asyncAll: g,
              inOperator: y.inOperator,
            };
          }, function(e, t) {
            'use strict';

            function n(e) {
              var t = -1;
              return {
                current: null, reset: function() {
                  t = -1, this.current = null;
                }, next: function() {
                  return t++, t >= e.length && (t = 0), this.current = e[t], this.current;
                },
              };
            }

            function r(e) {
              e = e || ',';
              var t = !0;
              return function() {
                var n = t ? '' : e;
                return t = !1, n;
              };
            }

            function o() {
              return {
                range: function(e, t, n) {
                  void 0 === t ? (t = e, e = 0, n = 1) : n || (n = 1);
                  var r, o = [];
                  if (n > 0) for (r = e; r < t; r += n) o.push(r); else for (r = e; r > t; r += n) o.push(r);
                  return o;
                }, cycler: function() {
                  return n(Array.prototype.slice.call(arguments));
                }, joiner: function(e) {
                  return r(e);
                },
              };
            }

            e.exports = o;
          }, function(e, t, n) {
            var r, o;
            (function(n, i) {
              !function(a) {
                'use strict';
                var s = function() {
                  var e = Array.prototype.slice.call(arguments);
                  'function' == typeof e[0] && e[0].apply(null, e.splice(1));
                }, u = function(e) {
                  'function' == typeof n ? n(e) : void 0 !== i && i.nextTick ? i.nextTick(e) : setTimeout(e, 0);
                }, l = function(e) {
                  var t = function(n) {
                    var r = function() {
                      return e.length && e[n].apply(null, arguments), r.next();
                    };
                    return r.next = function() {
                      return n < e.length - 1 ? t(n + 1) : null;
                    }, r;
                  };
                  return t(0);
                }, c = Array.isArray || function(e) {
                  return '[object Array]' === Object.prototype.toString.call(e);
                }, d = function(e, t, n) {
                  var r = n ? u : s;
                  if (t = t || function() {
                      }, !c(e)) {
                    var o = new Error('First argument to waterfall must be an array of functions');
                    return t(o);
                  }
                  if (!e.length) return t();
                  var i = function(e) {
                    return function(n) {
                      if (n) t.apply(null, arguments), t = function() {
                      }; else {
                        var o = Array.prototype.slice.call(arguments, 1), a = e.next();
                        a ? o.push(i(a)) : o.push(t), r(function() {
                          e.apply(null, o);
                        });
                      }
                    };
                  };
                  i(l(e))();
                };
                r = [], void 0 !== (o = function() {
                  return d;
                }.apply(t, r)) && (e.exports = o);
              }();
            }).call(t, n(11).setImmediate, n(13));
          }, function(e, r, o) {
            function i(e, t) {
              this._id = e, this._clearFn = t;
            }

            var a = Function.prototype.apply;
            r.setTimeout = function() {
              return new i(a.call(setTimeout, window, arguments), clearTimeout);
            }, r.setInterval = function() {
              return new i(a.call(setInterval, window, arguments), clearInterval);
            }, r.clearTimeout = r.clearInterval = function(e) {
              e && e.close();
            }, i.prototype.unref = i.prototype.ref = function() {
            }, i.prototype.close = function() {
              this._clearFn.call(window, this._id);
            }, r.enroll = function(e, t) {
              clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
            }, r.unenroll = function(e) {
              clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
            }, r._unrefActive = r.active = function(e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout();
              }, t));
            }, o(12), r.setImmediate = t, r.clearImmediate = n;
          }, function(e, t, n) {
            (function(e, t) {
              !function(e, n) {
                'use strict';

                function r(e) {
                  'function' != typeof e && (e = new Function('' + e));
                  for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                  var r = {callback: e, args: t};
                  return l[u] = r, s(u), u++;
                }

                function o(e) {
                  delete l[e];
                }

                function i(e) {
                  var t = e.callback, r = e.args;
                  switch (r.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(r[0]);
                      break;
                    case 2:
                      t(r[0], r[1]);
                      break;
                    case 3:
                      t(r[0], r[1], r[2]);
                      break;
                    default:
                      t.apply(n, r);
                  }
                }

                function a(e) {
                  if (c) setTimeout(a, 0, e); else {
                    var t = l[e];
                    if (t) {
                      c = !0;
                      try {
                        i(t);
                      } finally {
                        o(e), c = !1;
                      }
                    }
                  }
                }

                if (!e.setImmediate) {
                  var s, u = 1, l = {}, c = !1, d = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                  f = f && f.setTimeout ? f : e, '[object process]' === {}.toString.call(e.process) ? function() {
                    s = function(e) {
                      t.nextTick(function() {
                        a(e);
                      });
                    };
                  }() : function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0, n = e.onmessage;
                      return e.onmessage = function() {
                        t = !1;
                      }, e.postMessage('', '*'), e.onmessage = n, t;
                    }
                  }() ? function() {
                    var t = 'setImmediate$' + Math.random() + '$', n = function(n) {
                      n.source === e && 'string' == typeof n.data && 0 === n.data.indexOf(t) &&
                      a(+n.data.slice(t.length));
                    };
                    e.addEventListener ?
                        e.addEventListener('message', n, !1) :
                        e.attachEvent('onmessage', n), s = function(n) {
                      e.postMessage(t + n, '*');
                    };
                  }() : e.MessageChannel ? function() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                      a(e.data);
                    }, s = function(t) {
                      e.port2.postMessage(t);
                    };
                  }() : d && 'onreadystatechange' in d.createElement('script') ? function() {
                    var e = d.documentElement;
                    s = function(t) {
                      var n = d.createElement('script');
                      n.onreadystatechange = function() {
                        a(t), n.onreadystatechange = null, e.removeChild(n), n = null;
                      }, e.appendChild(n);
                    };
                  }() : function() {
                    s = function(e) {
                      setTimeout(a, 0, e);
                    };
                  }(), f.setImmediate = r, f.clearImmediate = o;
                }
              }('undefined' == typeof self ? void 0 === e ? this : e : self);
            }).call(t, function() {
              return this;
            }(), n(13));
          }, function(e, t) {
          }, function(e, t, n) {
            'use strict';
            var r = n(15), o = r.extend({
              init: function(e) {
                this.precompiled = e || {};
              }, getSource: function(e) {
                return this.precompiled[e] ? {src: {type: 'code', obj: this.precompiled[e]}, path: e} : null;
              },
            });
            e.exports = o;
          }, function(e, t, n) {
            'use strict';
            var r = n(3), o = n(6), i = n(1), a = o.extend({
              on: function(e, t) {
                this.listeners = this.listeners || {}, this.listeners[e] = this.listeners[e] ||
                    [], this.listeners[e].push(t);
              }, emit: function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                this.listeners && this.listeners[e] && i.each(this.listeners[e], function(e) {
                  e.apply(null, t);
                });
              }, resolve: function(e, t) {
                return r.resolve(r.dirname(e), t);
              }, isRelative: function(e) {
                return 0 === e.indexOf('./') || 0 === e.indexOf('../');
              },
            });
            e.exports = a;
          }, function(e, t) {
            function n() {
              'use strict';

              function e() {
                r.contextOrFrameLookup = l, i.prototype.assertType = c, a.prototype.parseAggregate = d, r.memberLookup = f;
              }

              function t(e) {
                return {index: e.index, lineno: e.lineno, colno: e.colno};
              }

              function n(e, t, n, o) {
                e = e || [], null === t && (t = o < 0 ? e.length - 1 : 0), null === n ?
                    n = o < 0 ? -1 : e.length :
                    n < 0 && (n += e.length), t < 0 && (t += e.length);
                for (var i = [], a = t; !(a < 0 || a > e.length) && !(o > 0 && a >= n) &&
                !(o < 0 && a <= n); a += o) i.push(r.memberLookup(e, a));
                return i;
              }

              var r = this.runtime, o = this.lib, i = this.compiler.Compiler, a = this.parser.Parser, s = this.nodes,
                  u = this.lexer, l = r.contextOrFrameLookup, c = i.prototype.assertType,
                  d = a.prototype.parseAggregate, f = r.memberLookup;
              r.contextOrFrameLookup = function(e, t, n) {
                var r = l.apply(this, arguments);
                if (void 0 === r) switch (n) {
                  case'True':
                    return !0;
                  case'False':
                    return !1;
                  case'None':
                    return null;
                }
                return r;
              };
              var p = s.Node.extend('Slice', {
                fields: ['start', 'stop', 'step'], init: function(e, t, n, r, o) {
                  n = n || new s.Literal(e, t, null), r = r || new s.Literal(e, t, null), o = o ||
                      new s.Literal(e, t, 1), this.parent(e, t, n, r, o);
                },
              });
              i.prototype.assertType = function(e) {
                if (!(e instanceof p)) return c.apply(this, arguments);
              }, i.prototype.compileSlice = function(e, t) {
                this.emit('('), this._compileExpression(e.start, t), this.emit('),('), this._compileExpression(e.stop,
                    t), this.emit('),('), this._compileExpression(e.step, t), this.emit(')');
              }, a.prototype.parseAggregate = function() {
                var e = this, n = t(this.tokens);
                n.colno--, n.index--;
                try {
                  return d.apply(this);
                } catch (d) {
                  var r = t(this.tokens), i = function() {
                    return o.extend(e.tokens, r), d;
                  };
                  o.extend(this.tokens, n), this.peeked = !1;
                  var a = this.peekToken();
                  if (a.type !== u.TOKEN_LEFT_BRACKET) throw i();
                  this.nextToken();
                  for (var l = new p(a.lineno, a.colno), c = !1, f = 0; f <= l.fields.length &&
                  !this.skip(u.TOKEN_RIGHT_BRACKET); f++) {
                    if (f === l.fields.length) {
                      if (!c) break;
                      this.fail('parseSlice: too many slice components', a.lineno, a.colno);
                    }
                    if (this.skip(u.TOKEN_COLON)) c = !0; else {
                      var h = l.fields[f];
                      l[h] = this.parseExpression(), c = this.skip(u.TOKEN_COLON) || c;
                    }
                  }
                  if (!c) throw i();
                  return new s.Array(a.lineno, a.colno, [l]);
                }
              };
              var h = {
                pop: function(e) {
                  if (void 0 === e) return this.pop();
                  if (e >= this.length || e < 0) throw new Error('KeyError');
                  return this.splice(e, 1);
                }, append: function(e) {
                  return this.push(e);
                }, remove: function(e) {
                  for (var t = 0; t < this.length; t++) if (this[t] === e) return this.splice(t, 1);
                  throw new Error('ValueError');
                }, count: function(e) {
                  for (var t = 0, n = 0; n < this.length; n++) this[n] === e && t++;
                  return t;
                }, index: function(e) {
                  var t;
                  if (-1 === (t = this.indexOf(e))) throw new Error('ValueError');
                  return t;
                }, find: function(e) {
                  return this.indexOf(e);
                }, insert: function(e, t) {
                  return this.splice(e, 0, t);
                },
              }, m = {
                items: function() {
                  var e = [];
                  for (var t in this) e.push([t, this[t]]);
                  return e;
                }, values: function() {
                  var e = [];
                  for (var t in this) e.push(this[t]);
                  return e;
                }, keys: function() {
                  var e = [];
                  for (var t in this) e.push(t);
                  return e;
                }, get: function(e, t) {
                  var n = this[e];
                  return void 0 === n && (n = t), n;
                }, has_key: function(e) {
                  return this.hasOwnProperty(e);
                }, pop: function(e, t) {
                  var n = this[e];
                  if (void 0 === n && void 0 !== t) n = t; else {
                    if (void 0 === n) throw new Error('KeyError');
                    delete this[e];
                  }
                  return n;
                }, popitem: function() {
                  for (var e in this) {
                    var t = this[e];
                    return delete this[e], [e, t];
                  }
                  throw new Error('KeyError');
                }, setdefault: function(e, t) {
                  return e in this ? this[e] : (void 0 === t && (t = null), this[e] = t);
                }, update: function(e) {
                  for (var t in e) this[t] = e[t];
                  return null;
                },
              };
              return m.iteritems = m.items, m.itervalues = m.values, m.iterkeys = m.keys, r.memberLookup = function(
                  e, t, r) {
                return 4 === arguments.length ?
                    n.apply(this, arguments) :
                    (e = e || {}, o.isArray(e) && h.hasOwnProperty(t) ? function() {
                      return h[t].apply(e, arguments);
                    } : o.isObject(e) && m.hasOwnProperty(t) ? function() {
                      return m[t].apply(e, arguments);
                    } : f.apply(this, arguments));
              }, e;
            }

            e.exports = n;
          }]);
      });
    }).call(t, n('WB6W').setImmediate, n('WB6W').clearImmediate);
  }, '4/IU': function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n('gT+X'), o = n('bVOP'), i = n('YWnE'), a = function(e) {
        t('#app_iframe').remove(), t('body').
            append('<iframe id=\'app_iframe\' src=\'' + e + '\' style=\'display:none\'></iframe>');
      }, s = function(e) {
        ['home', 'detail', 'mediaProfile'].indexOf(e.type || 'home') > -1 ? o.androidLocalServer(e).then(function(e) {
        }, function(t) {
          a(e.nativeLink);
        }) : a(e.nativeLink);
      }, u = function(e) {
        var t = location.href, n = r.os.version;
        if (n >= 9 && !r.browser.qqbrowser) {
          var o = '//toutiao.com/m/detail/?', s = 'click_' + (r.browser.weixin ? 'weixin' : 'wap') + '_ios_deeplink',
              u = e.nativeLink.replace(/gd_label=(\w+)/, 'gd_label=' + s);
          -1 === u.indexOf('gd_label') && (u += '&gd_label=' + s);
          var l = {group_id: '', item_id: '', scheme: encodeURIComponent(u)};
          o += i.toQuery(l), setTimeout(function() {
            location.href = e.universalLink || o;
          }, 300);
        } else if (n >= 9) {
          var c = r.browser.safari, d = c ? 2e3 : 1300;
          setTimeout(function() {
            location.href = e.nativeLink, setTimeout(function() {
              'hidden' === i.pageVisible() && (location.href = t);
            }, d);
          }, 10);
        } else a(e.nativeLink);
      }, l = function(e) {
        if ('m.toutiaoribao.cn' === location.host) return void a(e.nativeLink);
        r.os.ios && r.os.version;
        r.browser.weixin, r.os.ios ? u(e) : s(e);
      };
      e.exports = {jumpToNativeapp: l};
    }).call(t, n('gXQ3'));
  }, '6+Kz': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    Object.defineProperty(t, '__esModule', {value: !0});
    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h);
    n('6AHJ');
    var v = function(e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'render', value: function() {
          return m.default.createElement('div', {className: 'audit-container'},
              m.default.createElement('p', null, 'Copyright 漏 2017 澶存潯鏃ユ姤 鐗堟潈鎵€鏈� 浜琁CP澶�17027596 '),
              m.default.createElement('p', null, '鍖椾含鎶栧姩闈掓槬绉戞妧鏈夐檺鍏徃'),
              m.default.createElement('p', null, '鍖椾含甯傛捣娣€鍖轰俊鎭矾鐢�28鍙稢搴э紙浜屽眰锛�02A瀹�-345鍙�'),
              m.default.createElement('p', null, '010-58341810'));
        },
        }]), t;
    }(h.Component);
    t.default = v;
  }, '6AHJ': function(e, t) {
  }, '6isv': function(e, t, n) {
    n('Pj6p'), e.exports = n('qGgm').Object.setPrototypeOf;
  }, '6uqe': function(e, t, n) {
    'use strict';
    var r = Object.prototype.hasOwnProperty, o = function() {
      for (var e = [], t = 0; t < 256; ++t) e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
      return e;
    }();
    t.arrayToObject = function(e, t) {
      for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] &&
      (n[r] = e[r]);
      return n;
    }, t.merge = function(e, n, o) {
      if (!n) return e;
      if ('object' != typeof n) {
        if (Array.isArray(e)) e.push(n); else {
          if ('object' != typeof e) return [e, n];
          (o.plainObjects || o.allowPrototypes || !r.call(Object.prototype, n)) && (e[n] = !0);
        }
        return e;
      }
      if ('object' != typeof e) return [e].concat(n);
      var i = e;
      return Array.isArray(e) && !Array.isArray(n) && (i = t.arrayToObject(e, o)), Array.isArray(e) &&
      Array.isArray(n) ? (n.forEach(function(n, i) {
        r.call(e, i) ? e[i] && 'object' == typeof e[i] ? e[i] = t.merge(e[i], n, o) : e.push(n) : e[i] = n;
      }), e) : Object.keys(n).reduce(function(e, r) {
        var i = n[r];
        return Object.prototype.hasOwnProperty.call(e, r) ? e[r] = t.merge(e[r], i, o) : e[r] = i, e;
      }, i);
    }, t.decode = function(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, ' '));
      } catch (t) {
        return e;
      }
    }, t.encode = function(e) {
      if (0 === e.length) return e;
      for (var t = 'string' == typeof e ? e : String(e), n = '', r = 0; r < t.length; ++r) {
        var i = t.charCodeAt(r);
        45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 ||
        i >= 97 && i <= 122 ?
            n += t.charAt(r) :
            i < 128 ?
                n += o[i] :
                i < 2048 ?
                    n += o[192 | i >> 6] + o[128 | 63 & i] :
                    i < 55296 || i >= 57344 ?
                        n += o[224 | i >> 12] + o[128 | i >> 6 & 63] + o[128 | 63 & i] :
                        (r += 1, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(r)), n += o[240 | i >> 18] +
                            o[128 | i >> 12 & 63] + o[128 | i >> 6 & 63] + o[128 | 63 & i]);
      }
      return n;
    }, t.compact = function(e, n) {
      if ('object' != typeof e || null === e) return e;
      var r = n || [], o = r.indexOf(e);
      if (-1 !== o) return r[o];
      if (r.push(e), Array.isArray(e)) {
        for (var i = [], a = 0; a < e.length; ++a) e[a] && 'object' == typeof e[a] ?
            i.push(t.compact(e[a], r)) :
            void 0 !== e[a] && i.push(e[a]);
        return i;
      }
      return Object.keys(e).forEach(function(n) {
        e[n] = t.compact(e[n], r);
      }), e;
    }, t.isRegExp = function(e) {
      return '[object RegExp]' === Object.prototype.toString.call(e);
    }, t.isBuffer = function(e) {
      return null !== e && void 0 !== e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
    };
  }, '73ks': function(e, t, n) {
    function r(e) {
      return '[object Function]' === (o(e) ? Object.prototype.toString.call(e) : '');
    }

    var o = n('XX4+');
    e.exports = r;
  }, '84PZ': function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e) {
        return e && e.__esModule ? e : {default: e};
      }

      function o(e) {
        setTimeout(function() {
          location.href = e;
        }, 100);
      }

      function i(e) {
        var t = e.downloadLink;
        if (window.GTMValue.preventDongTaiDaBao) return t;
        var n = {openurl: e.openUrl, postdata: [e.postData || d.default.getAppTrackData()]},
            r = m.default.appendQuery(t, 'append=' + encodeURIComponent((0, l.default)(n))),
            o = document.createElement('a');
        return o.href = t, g.default.parse(o.search.slice(1)).append && (r = t), r;
      }

      function a(e) {
        setTimeout(function() {
          t('body').
              append('<iframe id=\'app_dl_iframe\' src=\'' + e.yybHref + '\' style=\'display:none\'></iframe>'), setTimeout(
              function() {
                t('iframe#app_dl_iframe').remove(), location.href = e.fallback;
              }, 1500);
        }, 100);
      }

      function s(e) {
        var t = e.downloadLink;
        if (p.default.os.android) if (p.default.browser.weixin) {
          var n = encodeURIComponent(d.default.getNativeLink(e));
          o(m.default.appendQuery(t, 'android_scheme=' + n));
        } else a({yybHref: e.yybLink, fallback: i(e)}); else o(t);
      }

      var u = n('p7ii'), l = r(u), c = n('bVOP'), d = r(c), f = n('gT+X'), p = r(f), h = n('YWnE'), m = r(h),
          v = n('WE0y'), g = r(v);
      e.exports = {gotoAppDownload: s};
    }).call(t, n('gXQ3'));
  }, '8ICI': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = (r(h), n('gT+X')), v = r(m), g = n('YWnE'), y = r(g),
        w = function(e) {
          function t() {
            return (0, s.default)(this, t), (0, d.default)(this,
                (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
          }

          return (0, p.default)(t, e), (0, l.default)(t, [
            {
              key: 'componentDidMount', value: function() {
              window.ttGTM = {};
              var e = this;
              Math.floor(Date.now() / 1e3 / 900);
              !function(t, n, r, o, i) {
                t[o] = t[o] || [], t[o].push({'gtm.start': (new Date).getTime(), event: 'gtm.js'});
                var a = n.getElementsByTagName(r)[0], s = n.createElement(r);
                s.async = !0, '1' === y.default.request('_gtm') ?
                    s.src = '//www.googletagmanager.com/gtm.js?id=' + i :
                    s.src = '//s3a.pstatp.com/growth/fe_sdk/gtmsdk/' + i + '.js?v=' +
                        window.gtmExpireTime, s.onload = function() {
                  function t() {
                    var r;
                    if (r = window.isListPage ?
                            window.ttGTM.list :
                            v.default.browser.weixin ?
                                window.ttGTM.weixin :
                                window.ttGTM.detail, window.ttGTM.xpromtOptions &&
                        (r.xpromt = window.ttGTM.xpromtOptions), !r) return void(--n && setTimeout(t, 10));
                    window.GTMValue = r, e.props.loadGTMScript(r || {});
                  }

                  var n = 10;
                  t();
                }, a.parentNode.insertBefore(s, a);
              }(window, document, 'script', 'dataLayer', 'GTM-NRPFDC');
            },
            }, {
              key: 'render', value: function() {
                return null;
              },
            }]), t;
        }(h.Component);
    e.exports = w;
  }, '8pKO': function(e, t, n) {
    'use strict';

    function r(e) {
      if (!e) return e;
      var t = {};
      return i.Children.map(e, function(e) {
        return e;
      }).forEach(function(e) {
        t[e.key] = e;
      }), t;
    }

    function o(e, t) {
      function n(n) {
        return t.hasOwnProperty(n) ? t[n] : e[n];
      }

      e = e || {}, t = t || {};
      var r = {}, o = [];
      for (var i in e) t.hasOwnProperty(i) ? o.length && (r[i] = o, o = []) : o.push(i);
      var a = void 0, s = {};
      for (var u in t) {
        if (r.hasOwnProperty(u)) for (a = 0; a < r[u].length; a++) {
          var l = r[u][a];
          s[r[u][a]] = n(l);
        }
        s[u] = n(u);
      }
      for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
      return s;
    }

    t.__esModule = !0, t.getChildMapping = r, t.mergeChildMappings = o;
    var i = n('V80v');
  }, '9H67': function(e, t, n) {
    e.exports = {default: n('6isv'), __esModule: !0};
  }, AJa0: function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e) {
        return e && e.__esModule ? e : {default: e};
      }

      function o() {
      }

      function i() {
        return !window.isListPage && T.default.browser.weixin;
      }

      function a() {
        !function(e, t, n, r, o, i, a) {
          e.GoogleAnalyticsObject = o, e[o] = e[o] || function() {
            (e[o].q = e[o].q || []).push(arguments);
          }, e[o].l = 1 * new Date, i = t.createElement(n), a = t.getElementsByTagName(
              n)[0], i.async = 1, i.src = '//www.google-analytics.com/analytics.js', a.parentNode.insertBefore(i, a);
        }(window, document, 'script', 0, 'ga');
      }

      function s() {
        window.ga('create', 'UA-28423340-36', 'auto', 'testTracker',
            {siteSpeedSampleRate: 100}), window.gaeventTest = function(e, t, n, r, o) {
          console.log('gaTest:' + e + ',' + t + ',' + n), 'event' !== e &&
          window.ga('testTracker.send', 'event', e, t, n, void 0 !== r ? r : 1, o);
        };
      }

      function u() {
        if (!T.default.browser.weixin) return !1;
        var e, n;
        try {
          e = sessionStorage.getItem('weixinlist_query'), n = sessionStorage.getItem('weixinlist_count');
        } catch (e) {
          console.warn(e);
        }
        if (n && '1' === n) {
          var r = O.default.request(null, !0), o = location.hash, i = location.host, a = r,
              s = location.pathname + '?' + e;
          history.replaceState(null, null, s);
          var u = t.request(null, !0);
          a = t.extend({}, r, u, {weixin_list: 1});
          var l = (0, x.default)(a).map(function(e) {
            return e + '=' + a[e];
          }).join('&'), c = '//' + i + location.pathname + '?' + l + o;
          history.replaceState(null, null, c);
        }
      }

      function l() {
        var e = 'UA-28423340-51';
        (navigator.userAgent.indexOf('ArticleStreamSdk') > -1 || 'open' === O.default.request('utm_campaign')) &&
        (e = 'UA-28423340-11'), window.ga('create', e, 'auto', {siteSpeedSampleRate: 100});
      }

      function c() {
        var e = location.pathname;
        e && -1 !== e.indexOf('/sem/') ?
            window.ga('send', 'pageview', {page: e}) :
            window.ga('send', 'pageview', location.pathname + location.search + location.hash);
      }

      function d() {
        window.ga('set', 'dimension1', 'list'), T.default.browser.weixin ?
            window.ga('set', 'dimension2', 'weixin') :
            window.ga('set', 'dimension2', 'wap');
        var e = O.default.request('wxshare_count');
        !isNaN(e) && e > 0 && window.ga('set', 'dimension3', e);
        var t = O.default.request('isappinstalled');
        !isNaN(t) && t >= 0 && window.ga('set', 'dimension4', t - 0 ? 1 : 0);
        var n = O.default.request('app');
        n && window.ga('set', 'dimension5', n);
        var r = location.host;
        window.ga('set', 'dimension6', r);
        var o = O.default.request('utm_source') || '', i = o + '_' + (O.default.request('from') || '');
        (o || O.default.request('from')) && window.ga('set', 'dimension7', i);
        var a = O.default.request('share_type');
        a && window.ga('set', 'dimension8', a);
      }

      function f() {
        var e = 5;
        i() && (e = 5);
        var t = A.default.getTTWebID(), n = null !== t ? parseInt(t) % 1e3 : void 0;
        return !isNaN(n) && n >= 1 && n <= e;
      }

      function p() {
        var e = new Image;
        e.src = location.protocol + '//' + location.hostname + '/__utm.gif?utmp=' +
            encodeURIComponent(location.href), e.onload = function(e) {
          t(this).remove();
        }, t(function() {
          t('body').append(e);
        });
        window.addEventListener('error', function(e, t, n) {
          var r = e, o = t, i = n;
          'object' === (void 0 === e ? 'undefined' : (0, _.default)(e)) &&
          (r = e.message, o = e.fileName, i = e.lineNumber);
          var a = '[' + o + ' (' + i + ')]' + r;
          Math.floor(100 * Math.random()) < 10 && window.ga('send', 'exception', {exDescription: a, exFatal: !1});
        });
      }

      function h(e, t, n, r, o) {
        console.log('ga:' + e + ',' + t + ',' + n), window.ga('send', 'event', e, t, n, void 0 !== r ? r : 1, o);
      }

      function m(e) {
        window.ga('send', 'pageview', location.pathname + location.search + location.hash), console.log(
            'ga:pageview', location.pathname + location.search + location.hash);
      }

      function v() {
        i() || function() {
          var e = document.createElement('script');
          e.src = '//hm.baidu.com/hm.js?23e756494636a870d09e32c92e64fdd6';
          var t = document.getElementsByTagName('script')[0];
          t.parentNode.insertBefore(e, t);
        }();
      }

      function g() {
        window._taq.push(['create', 'TT-growth-01', 'm.toutiao.com']), window._taq.push(
            ['trackinit', 'mobile', 'wap', 1]), function() {
          var e = document.createElement('script');
          e.type = 'text/javascript', e.async = !0, e.src = document.location.protocol +
              '//s3.pstatp.com/adstatic/resource/landing_log/dist/1.0.13/static/js/toutiao-analytics.js';
          var t = document.getElementsByTagName('script')[0];
          t.parentNode.insertBefore(e, t);
        }();
      }

      function y() {
        a(), s(), u(), g(), f() &&
        (l(), d(), c(), v(), p(), window.gaevent = h, window.resendGA = m, window.gaqpush = window.gaqpush);
      }

      var w = n('gf5I'), _ = r(w), b = n('mZJ8'), x = r(b), k = n('gT+X'), T = r(k), E = n('YWnE'), O = r(E),
          C = n('bVOP'), A = r(C);
      window.gaevent = o, window.gaqpush = o, window.resendGA = o, window.gaeventTest = o, window._taq = window._taq ||
          [], e.exports = {init: y};
    }).call(t, n('gXQ3'));
  }, BQpG: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = (r(h), n('gT+X')), v = r(m), g = n('bVOP'), y = r(g), w = n('4/IU'),
        _ = r(w), b = function(e) {
          function t() {
            return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
          }

          return (0, p.default)(t, e), (0, l.default)(t, [
            {
              key: 'componentDidMount', value: function() {
              var e = document.createElement('script');
              e.text = 'var ttBannerConf', document.body.appendChild(e);
              var t = '//d.toutiao.com/N13p/';
              t = v.default.browser.weixin ? '//d.toutiao.com/2uYv/' : t, ttBannerConf = {
                pos: 'bottom',
                downloadLink: t,
                callback: function() {
                  this._el.on('click', '.download', function() {
                    window.maevent('bottom_banner', 'download'), v.default.os.android &&
                    _.default.jumpToNativeapp({nativeLink: y.default.getNativeLink({})});
                  });
                },
                isGrowthWap: !0,
              };
              var n = document.createElement('script');
              n.setAttribute('src', '//s3.pstatp.com/growth/fe_sdk/bannersdk/loader.js'), document.body.appendChild(n);
            },
            }, {
              key: 'render', value: function() {
                return null;
              },
            }]), t;
        }(h.Component);
    e.exports = b;
  }, BV5S: function(e, t, n) {
    'use strict';
    (function(t) {
      function n(e, t) {
        return a.inWords(a.datetime(e));
      }

      function r(e) {
        return (new Date).getTime() - e.getTime();
      }

      function o(e) {
        var t = new Date;
        return t.getMonth() > e.getMonth() || t.getDate() > e.getDate();
      }

      function i(e) {
        return (new Date).getFullYear() > e.getFullYear();
      }

      Date.prototype.format = function(e) {
        var t = {
          'M+': this.getMonth() + 1,
          'd+': this.getDate(),
          'h+': this.getHours(),
          'm+': this.getMinutes(),
          's+': this.getSeconds(),
          'q+': Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds(),
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)));
        for (var n in t) new RegExp('(' + n + ')').test(e) &&
        (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[n] : ('00' + t[n]).substr(('' + t[n]).length)));
        return e;
      };
      var a = {};
      a = {
        settings: {
          relative: !1,
          strings: {
            suffixAgo: '鍓�',
            seconds: '鍒氬垰',
            minute: '1鍒嗛挓',
            minutes: '%d鍒嗛挓',
            hour: '1灏忔椂',
            hours: '%d灏忔椂',
            days: '%d澶�',
            months: '%d鏈�',
            years: '%d骞�',
            numbers: [],
          },
          yearsAgoFormat: 'yyyy-MM-dd',
          daysAgoFormat: 'MM-dd hh:mm',
        }, inWords: function(e) {
          function n(e, n) {
            var r = t.isFunction(e) ? e(n, l) : e, o = c.numbers && c.numbers[n] || n;
            return r.replace(/%d/i, o);
          }

          var s = a.settings.relative;
          if (!s && i(e)) return e.format(this.settings.yearsAgoFormat);
          if (!s && o(e)) return e.format(this.settings.daysAgoFormat);
          var u, l = r(e), c = this.settings.strings, d = c.suffixAgo, f = Math.abs(l) / 1e3, p = f / 60, h = p / 60,
              m = h / 24, v = m / 30, g = m / 365;
          return u = f < 60 ?
              n(c.seconds, Math.floor(f)) :
              p < 60 ?
                  n(c.minutes, Math.floor(p)) :
                  h < 24 ?
                      n(c.hours, Math.floor(h)) :
                      m < 30 ?
                          n(c.days, Math.floor(m)) :
                          m < 365 ?
                              n(c.months, Math.floor(v)) :
                              n(c.years, Math.floor(g)), '鍒氬垰' === u ? u : u + d;
        }, parse: function(e) {
          var n = t.trim(e);
          return n = n.replace(/\.\d+/, ''), n = n.replace(/-/, '/').replace(/-/, '/'), n = n.replace(/T/, ' ').
              replace(/Z/, ' UTC'), n = n.replace(/([+-]\d\d):?(\d\d)/, ' $1$2'), new Date(n);
        }, datetime: function(e) {
          return a.parse(e);
        },
      }, e.exports = n;
    }).call(t, n('gXQ3'));
  }, Bbyf: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('V80v'), i = r(o), a = n('GF8f'), s = n('oFNu'), u = r(s), l = n('2SGS'), c = r(l), d = n('xDfE'),
        f = r(d), p = n('RvJg'), h = r(p), m = n('BQpG'), v = r(m), g = {
          list: {
            __all__: '鎺ㄨ崘',
            video: '瑙嗛',
            news_hot: '鐑偣',
            news_society: '绀句細',
            news_entertainment: '濞变箰',
            news_military: '鍐涗簨',
            news_tech: '绉戞妧',
            news_car: '姹借溅',
            news_sports: '浣撹偛',
            news_finance: '璐㈢粡',
            news_world: '鍥介檯',
            news_fashion: '鏃跺皻',
            news_game: '娓告垙',
            news_travel: '鏃呮父',
            news_history: '鍘嗗彶',
            news_discovery: '鎺㈢储',
            news_food: '缇庨',
            news_baby: '鑲插効',
            news_regimen: '鍏荤敓',
            news_story: '鏁呬簨',
            news_essay: '缇庢枃',
          }, defaultCategory: '__all__',
        };
    (0, a.render)(i.default.createElement(u.default,
        {topMenuInfo: g, Header: c.default, TopMenu: f.default, MainContent: h.default, DownloadBanner: v.default}),
        document.getElementById('main'));
  }, CDT0: function(e, t) {
    t.type = function(e) {
      return e.split(/ *; */).shift();
    }, t.params = function(e) {
      return e.split(/ *; */).reduce(function(e, t) {
        var n = t.split(/ *= */), r = n.shift(), o = n.shift();
        return r && o && (e[r] = o), e;
      }, {});
    }, t.parseLinks = function(e) {
      return e.split(/ *, */).reduce(function(e, t) {
        var n = t.split(/ *; */), r = n[0].slice(1, -1);
        return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e;
      }, {});
    }, t.cleanHeader = function(e, t) {
      return delete e['content-type'], delete e['content-length'], delete e['transfer-encoding'], delete e.host, t &&
      delete e.cookie, e;
    };
  }, Cqu5: function(e, t, n) {
    var r, o;
    /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    !function() {
      'use strict';

      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var o = typeof r;
            if ('string' === o || 'number' === o) e.push(r); else if (Array.isArray(r)) e.push(
                n.apply(null, r)); else if ('object' === o) for (var a in r) i.call(r, a) && r[a] && e.push(a)
          }
        }
        return e.join(' ');
      }

      var i = {}.hasOwnProperty;
      void 0 !== e && e.exports ? e.exports = n : (r = [], void 0 !== (o = function() {
        return n;
      }.apply(t, r)) && (e.exports = o));
    }();
  }, DhyE: function(e, t, n) {
    e.exports = {default: n('P71K'), __esModule: !0};
  }, DiDM: function(e, t) {
  }, 'Es/p': function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('J5EE'), w = r(y),
        _ = n('Cqu5'), b = r(_), x = n('H1Va'), k = function(e) {
          var t = e.datum;
          t.large_image_url = t.large_image_url || t.image_url;
          var n = (0, b.default)('src', 'space', {recommend_label: '鐧惧害缁忛獙' === t.source});
          return m.default.createElement('a', {
            href: 'javascript: void(0)',
            'data-action-label': t.action_label,
            'data-tag': t.tag,
            className: 'article_link clearfix channel__video',
          }, m.default.createElement('div', {className: 'item_detail'},
              m.default.createElement('div', {className: 'list_img_holder_large'},
                  m.default.createElement('div', {className: 'video_mask'}),
                  m.default.createElement('h3', {className: 'dotdot line3'}, t.title),
                  m.default.createElement(w.default, {src: t.large_image_url}),
                  m.default.createElement('span', {className: 'video-btn'})),
              m.default.createElement('div', {className: 'item_info'}, m.default.createElement('div', null, t.hot &&
                  m.default.createElement('span', {className: 'hot_label space'}, '鐑�'), t.recommend &&
                  m.default.createElement('span', {className: 'recommend_label space'}, '鑽�'), t.subject_label &&
                  m.default.createElement('span', {className: 'subject_label'}, ' ', t.subject_label), !t.subject_label &&
                  m.default.createElement('span', {className: n}, t.source),
                  m.default.createElement('span', {className: 'cmt space'}, '璇勮 ', t.comment_count),
                  m.default.createElement('span', {className: 'time', title: t.datetime}, t.timeago),
                  m.default.createElement('span', {'data-id': t.group_id, className: 'dislike-news fr'})))));
        };
    k.propTypes = {datum: g.default.object};
    var T = function(e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'handleClick', value: function(e) {
          window.maevent('feed', this.props.currentChannel, 'click-' + e.index), (0, x.actionLog)({
            label: e.action_label,
            value: e.group_id,
            extra_data: {item_id: e.item_id || 0},
          }), location.href = e.source_url;
        },
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props.datum, n = (0, b.default)({has_action: !0, 'item-hidden': t.honey});
            return m.default.createElement('section', {
              className: n,
              'data-hot-time': t.behot_time,
              'data-group-id': t.group_id,
              'data-item-id': t.item_id,
              'data-format': '0',
              onClick: function() {
                return e.handleClick(t);
              },
            }, m.default.createElement(k, {datum: t}));
          },
        }]), t;
    }(h.Component);
    T.propTypes = {datum: g.default.object, currentChannel: g.default.string}, e.exports = T;
  }, FKII: function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n('p7ii'), o = function(e) {
        return e && e.__esModule ? e : {default: e};
      }(r), i = {
        ad_ids: [],
        track_ids: [],
        click_ids: [],
        scrollChangeDisable: !1,
        attribute: '',
        testADFirstFlag: !0,
        extra_data: {
          utm_source: t.cookie('utm_source') || '',
          utm_campaign: t.cookie('utm_campaign') || '',
          utm_medium: t.cookie('utm_medium') || '',
          utm_term: t.cookie('utm_term') || '',
          utm_content: t.cookie('utm_content') || '',
          is_ad_event: 1,
        },
        pushAdQueue: function(e) {
          var n = t(e), r = n.attr('ad-id'), o = n.attr('ad-tag') || 'embeded_ad', i = n.attr('ad-log-extra') || '',
              a = n.attr('data-track');
          if (r) {
            a && this.sendTrackEvent(r, a);
            var s = n.parents('section');
            return this.sendShowEvent(r, o, i, s), this;
          }
        },
        initClickEvents: function(e) {
          var n = this, r = t(e).attr('ad-id'), o = t(e).attr('ad-tag') || 'embeded_ad',
              i = t(e).attr('ad-log-extra') || '';
          t(e).parents('section').find('.article_link').click(function(e) {
            var a = this.href, s = this, u = t(this).attr('ad-url'), l = t(e.target), c = l.attr('ad-url');
            return n.sendClickEvent(r, 'click', o, i, function() {
              if ('a' === s.tagName.toLowerCase()) return void(location.href = a);
              var e, d;
              if (t(s).attr('ad-load')) {
                var f = t.cookie('utm_source') || '', p = t.cookie('utm_campagin') || '',
                    h = t.cookie('utm_media') || '', m = t.cookie('utm_term') || '', v = t.cookie('utm_content') || '',
                    g = encodeURIComponent(t(s).find('.download').attr('ad-url'));
                if (l.hasClass('download')) e = 'feed_download_ad', d = 'click_start', n.sendClickEvent(r, d, e,
                    i), window.location.href = c; else if ((l.hasClass('text_info') ||
                        l.parent().hasClass('text_info')) &&
                    (e = 'feed_download_ad', d = 'click_card', n.sendClickEvent(r, d, e, i)), u) {
                  var y = 'value=' + r + '&log_extra=' + i + '&tag=' + o + '&utm_source=' + f + '&utm_campagin=' + p +
                      '&utm_medium=' + h + '&utm_term=' + m + '&utm_content=' + v +
                      '&is_ad_event=1&category=wap&download_url=' + g;
                  window.location.href = -1 === u.indexOf('?') ? u + '?' + y : u + '&' + y;
                } else window.location.href = t(s).find('.download').attr('ad-url');
              } else t(s).attr('ad-call') && (l.hasClass('phone') ?
                  (e = 'feed_call', d = 'click_call', n.sendClickEvent(r, d, e, i), window.location.href = 'tel:' + c) :
                  ((l.hasClass('text_info') || l.parent().hasClass('text_info')) &&
                  (e = 'feed_call', d = 'click_card', n.sendClickEvent(r, d, e, i)), window.location.href = u || 'tel' +
                      t(s).find('.phone').attr('ad-url')));
            }), !1;
          });
        },
        delAdId: function(e) {
          var n = t(e), r = n.attr('ad-id'), o = 'section' + n.parents('section').index(), i = o + r,
              a = this.ad_ids.indexOf(i);
          a >= 0 && this.ad_ids.splice(a, 1);
        },
        sendClickEvent: function(e, n, r, i, a) {
          if (this.click_ids.indexOf(e) >= 0) return this;
          this.click_ids.push(e);
          var s = this;
          return t.post('/log/action/',
              {label: n, value: e, tag: r, log_extra: i, extra_data: (0, o.default)(s.extra_data), category: 'wap'}).
              done(function() {
                s.click_ids = [];
              }).
              always(function() {
                a && a();
              }), this;
        },
        sendShowEvent: function(e, n, r, i) {
          function a(e, n, r, i) {
            t.post('/log/action/',
                {label: n, value: e, tag: r, log_extra: i, extra_data: (0, o.default)(d.extra_data), category: 'wap'});
          }

          var s, u, l = 'section' + i.index(), c = l + e, d = this;
          if (-1 !== this.ad_ids.indexOf(c)) return this;
          this.ad_ids.push(c);
          a(e, 'show', n, r);
          var f = i.find('.article_link');
          return f.attr('ad-load') ?
              (s = 'card_show', u = 'feed_download_ad', a(e, s, u, r)) :
              f.attr('ad-call') && (s = 'card_show', u = 'feed_call', a(e, s, u, r)), this;
        },
        sendTrackEvent: function(e, n) {
          if (this.track_ids.indexOf(e) >= 0) return this;
          this.track_ids.push(e);
          var r = t('iframe#ad_track');
          return r.length || (t('body').
              append('<iframe src=\'\' height=\'0\' width=\'0\' id=\'ad_track\' style=\'position:absolute; top:-10px\'/>'), r = t(
              'iframe#ad_track')), r.attr('src', n), console.log('track_url : ' + n), this;
        },
        scrollUpdate: function() {
          this.scrollChangeDisable || this._pollLogNodes();
        },
        _inView: function(e) {
          if (!this._isVisbile(e)) return !1;
          var t = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight;
          return t.top > 0 && t.top <= n || (this.delAdId(e), !1);
        },
        _isVisbile: function(e) {
          if (!e) return !1;
          for (; e && "BODY" !== e.tagName && "HTML" !== e.tagName;) {
            if ('none' === t(e).css('display')) return !1;
            e = e.parentNode;
          }
          return !0;
        },
        _pollLogNodes: function() {
          for (var e = this.attribute || 'alt_src', t = document.querySelectorAll('span[' + e +
              ']'), n = 0, r = t.length; n < r; ++n) {
            var o = t[n];
            if (this.initClickEvents(o), o && this._inView(o)) return 'undefined' != typeof indexFlow &&
            window.indexFlow.storeFlow(), this.pushAdQueue(o), !1;
          }
        },
        initShowEvents: function(e) {
          var n = e.attribute || 'alt_src', r = this;
          r.attribute = n, r._pollLogNodes();
          var o = t(window);
          return o.on('load scrollEnd.lazy', function(e) {
            r.scrollChangeDisable || r._pollLogNodes();
          }), o.on('channelChange', function() {
            r.testADFirstFlag = !0;
          }), this;
        },
      };
      e.exports = i;
    }).call(t, n('gXQ3'));
  }, FpI8: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('gT+X'), w = r(y),
        _ = n('hK0m'), b = r(_), x = n('bVOP'), k = r(x), T = n('PBT7'),
        E = ['bonus-container', 'bonus-wrapper', 'bonus-icon', 'icon-close', 'weixin-bonus', 'wap-bonus'],
        O = k.default.confused(E).map, C = T[0][1];
    E.forEach(function(e) {
      C = C.replace(new RegExp(e, 'ig'), O[e]);
    });
    var A = function(e) {
      function t() {
        var e, n, r, o;
        (0, s.default)(this, t);
        for (var a = arguments.length, u = Array(a), l = 0; l < a; l++) u[l] = arguments[l];
        return n = r = (0, d.default)(this,
            (e = t.__proto__ || (0, i.default)(t)).call.apply(e, [this].concat(u))), r.state = {
          showBonus: !1,
          showIcon: !0,
        }, o = n, (0, d.default)(r, o);
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'componentDidMount', value: function() {
          var e = C, t = document.head || document.getElementsByTagName('head')[0], n = document.createElement('style');
          if (n.type = 'text/css', n.styleSheet) n.styleSheet.cssText = e; else {
            var r = document.createTextNode(e);
            n.appendChild(r);
          }
          t.appendChild(n);
        },
        }, {
          key: 'showBonus', value: function() {
            window.maevent('lucky_money', 'click'), this.setState({showBonus: !0}), this.setState({showIcon: !1});
          },
        }, {
          key: 'clickBonus', value: function() {
            window.maevent('lucky_money', 'download');
            var e = '';
            w.default.os.android ?
                e = w.default.browser.weixin ?
                    '//d.toutiao.com/R7d3/' :
                    '//d.toutiao.com/fABU/?append=%7B%22postdata%22%3A%5B%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%7D%5D%7D&extra=%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%2C%22channel%22%3A%22wap_hongbao_2%22%7D' :
                w.default.os.iphone &&
                (e = '//d.toutiao.com/FLFG/?append=%7B%22postdata%22%3A%5B%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%7D%5D%7D&extra=%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%2C%22channel%22%3A%22wap_hongbao_ios%22%7D'), (0, b.default)(
                {downloadLink: e});
          },
        }, {
          key: 'closeIcon', value: function(e) {
            this.setState({showIcon: !1}), sessionStorage.setItem('hideBonus', !0);
          },
        }, {
          key: 'closeBonus', value: function(e) {
            e.preventDefault(), e.stopPropagation(), this.setState({showBonus: !1}), sessionStorage.setItem('hideBonus',
                !0);
          },
        }, {
          key: 'render', value: function() {
            var e = this, t = w.default.browser.weixin ? 'weixin-bonus' : 'wap-bonus', r = this.state, o = r.showBonus,
                i = r.showIcon;
            return w.default.browser.weixin || this.props.GTMValue.hideBonus || sessionStorage.getItem('hideBonus') ?
                null :
                m.default.createElement('div', {className: O['bonus-container']},
                    o ? m.default.createElement('div', {className: 'mask'}) : null,
                    m.default.createElement('div', {className: O['bonus-wrapper']}, i && !o ?
                        m.default.createElement('div', {className: 'icon-container'}, m.default.createElement('img', {
                          src: n('lFLa'), className: O['bonus-icon'], onClick: function() {
                            return e.showBonus();
                          },
                        })) :
                        null, o ? m.default.createElement('a', {
                      href: 'javascript:void(0)', className: O[t], onClick: function() {
                        return e.clickBonus();
                      },
                    }, m.default.createElement('i', {
                      className: 'bonus-close', onClick: function(t) {
                        return e.closeBonus(t);
                      },
                    })) : null));
          },
        }]), t;
    }(h.Component);
    A.propTypes = {GTMValue: g.default.object}, e.exports = A;
  }, Fsns: function(e, t) {
  }, H1Va: function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e) {
        e.tag = e.tag || 'headline';
        var n = {
          label: e.label,
          value: e.value,
          tag: e.tag || 'go_detail',
          extra_data: (0, i.default)(e.extra_data || {}),
        };
        t.post('/log/action/', n);
      }

      var o = n('p7ii'), i = function(e) {
        return e && e.__esModule ? e : {default: e};
      }(o);
      e.exports = {actionLog: r};
    }).call(t, n('gXQ3'));
  }, HjcX: function(e, t, n) {
    var r = n('K0Kg');
    r(r.S, 'Object', {create: n('izuk')});
  }, IFEe: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('J5EE'), w = r(y);
    n('IX8N');
    var _ = function(e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'handleClick', value: function(e) {
          window.maevent('creative', 'download', e);
        },
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props.datum;
            return m.default.createElement('section', {className: 'has_action'}, m.default.createElement('a', {
                  href: t.href, className: 'article_link ad-material-link clearfix', onClick: function() {
                    return e.handleClick(t.version);
                  },
                }, m.default.createElement('h3', {className: 'dotdot line3'}, ' ', t.title),
                m.default.createElement('div', {className: 'list_img_holder_large'},
                    m.default.createElement(w.default, {src: t.src})),
                m.default.createElement('div', {className: 'item_info'},
                    m.default.createElement('span', {className: 'ad-material space'}, 'APP'),
                    m.default.createElement('span', {className: 'src'}, t.app || '浠婃棩澶存潯'))));
          },
        }]), t;
    }(h.Component);
    _.propTypes = {datum: g.default.object}, e.exports = _;
  }, IJ1K: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    t.__esModule = !0;
    var o = n('9H67'), i = r(o), a = n('Ufk5'), s = r(a), u = n('gf5I'), l = r(u);
    t.default = function(e, t) {
      if ('function' != typeof t &&
          null !== t) throw new TypeError('Super expression must either be null or a function, not ' +
          (void 0 === t ? 'undefined' : (0, l.default)(t)));
      e.prototype = (0, s.default)(t && t.prototype,
          {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t &&
      (i.default ? (0, i.default)(e, t) : e.__proto__ = t);
    };
  }, IX8N: function(e, t) {
  }, J5EE: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('KC+J'), i = r(o), a = n('iltz'), s = r(a), u = n('fvPU'), l = r(u), c = n('hJ6a'), d = r(c),
        f = n('mRYa'), p = r(f), h = n('IJ1K'), m = r(h), v = n('V80v'), g = r(v), y = n('nhKt'), w = r(y),
        _ = n('kZEW'), b = r(_), x = function(e) {
          function t(e) {
            (0, l.default)(this, t);
            var n = (0, p.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e));
            return n.state = {inView: !1}, n;
          }

          return (0, m.default)(t, e), (0, d.default)(t, [
            {
              key: 'hanleError', value: function(e) {
              Math.floor(100 * Math.random()) || window.gaeventTest('image', 'error', e);
            },
            }, {
              key: 'hanleLoad', value: function() {
              },
            }, {
              key: 'handleFirstInView', value: function() {
                this.setState({inView: !0});
              },
            }, {
              key: 'render', value: function() {
                var e = this;
                return this.props.src ? g.default.createElement(b.default, {
                  onFirstInView: function() {
                    e.handleFirstInView();
                  },
                }, this.state.inView ? g.default.createElement('img', (0, i.default)({}, this.props, {
                  onError: function() {
                    return e.hanleError(e.props.src);
                  }, onLoad: function() {
                    return e.hanleLoad();
                  },
                })) : g.default.createElement('img', null)) : null;
              },
            }]), t;
        }(v.Component);
    x.propTypes = {src: w.default.string}, e.exports = x;
  }, JBQp: function(e, t, n) {
    'use strict';
    var r = n('nmRV'), o = n('i56E'), i = n('yE1a'), a = n('Uyjf'), s = n('uzur'), u = Object.assign;
    e.exports = !u || n('eHtw')(function() {
      var e = {}, t = {}, n = Symbol(), r = 'abcdefghijklmnopqrst';
      return e[n] = 7, r.split('').forEach(function(e) {
        t[e] = e;
      }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join('') != r;
    }) ? function(e, t) {
      for (var n = a(e), u = arguments.length, l = 1, c = o.f, d = i.f; u > l;) for (var f, p = s(
          arguments[l++]), h = c ? r(p).concat(c(p)) : r(p), m = h.length, v = 0;; m > v;) d.call(p, f = h[v++]) &&
      (n[f] = p[f]);
      return n;
    } : u;
  }, JQIT: function(e, t, n) {
    (function(t) {
      var n;
      n = 'undefined' != typeof window ?
          window :
          void 0 !== t ?
              t :
              'undefined' != typeof self ?
                  self :
                  {}, e.exports = n;
    }).call(t, n('dTv7'));
  }, Jfdv: function(e, t, n) {
    var r = n('qGgm'), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
    e.exports = function(e) {
      return o.stringify.apply(o, arguments);
    };
  }, 'KC+J': function(e, t, n) {
    'use strict';
    t.__esModule = !0;
    var r = n('dU2U'), o = function(e) {
      return e && e.__esModule ? e : {default: e};
    }(r);
    t.default = o.default || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e;
    };
  }, L8b0: function(e, t, n) {
    function r(e) {
      if (e) return o(e);
    }

    function o(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e;
    }

    var i = n('XX4+');
    e.exports = r, r.prototype.clearTimeout = function() {
      return clearTimeout(this._timer), clearTimeout(
          this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this;
    }, r.prototype.parse = function(e) {
      return this._parser = e, this;
    }, r.prototype.responseType = function(e) {
      return this._responseType = e, this;
    }, r.prototype.serialize = function(e) {
      return this._serializer = e, this;
    }, r.prototype.timeout = function(e) {
      if (!e || 'object' != typeof e) return this._timeout = e, this._responseTimeout = 0, this;
      for (var t in e) switch (t) {
        case'deadline':
          this._timeout = e.deadline;
          break;
        case'response':
          this._responseTimeout = e.response;
          break;
        default:
          console.warn('Unknown timeout option', t);
      }
      return this;
    }, r.prototype.retry = function(e) {
      return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 &&
      (e = 0), this._maxRetries = e, this._retries = 0, this;
    }, r.prototype._retry = function() {
      return this.clearTimeout(), this.req &&
      (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end();
    }, r.prototype.then = function(e, t) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn(
            'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'), this._fullfilledPromise = new Promise(
            function(e, t) {
              n.end(function(n, r) {
                n ? t(n) : e(r);
              });
            });
      }
      return this._fullfilledPromise.then(e, t);
    }, r.prototype.catch = function(e) {
      return this.then(void 0, e);
    }, r.prototype.use = function(e) {
      return e(this), this;
    }, r.prototype.ok = function(e) {
      if ('function' != typeof e) throw Error('Callback required');
      return this._okCallback = e, this;
    }, r.prototype._isResponseOK = function(e) {
      return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
    }, r.prototype.get = function(e) {
      return this._header[e.toLowerCase()];
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(e, t) {
      if (i(e)) {
        for (var n in e) this.set(n, e[n]);
        return this;
      }
      return this._header[e.toLowerCase()] = t, this.header[e] = t, this;
    }, r.prototype.unset = function(e) {
      return delete this._header[e.toLowerCase()], delete this.header[e], this;
    }, r.prototype.field = function(e, t) {
      if (null === e || void 0 === e) throw new Error('.field(name, val) name can not be empty');
      if (this._data && console.error(
              '.field() can\'t be used if .send() is used. Please use only .send() or only .field() & .attach()'), i(
              e)) {
        for (var n in e) this.field(n, e[n]);
        return this;
      }
      if (Array.isArray(t)) {
        for (var r in t) this.field(e, t[r]);
        return this;
      }
      if (null === t || void 0 === t) throw new Error('.field(name, val) val can not be empty');
      return 'boolean' == typeof t && (t = '' + t), this._getFormData().append(e, t), this;
    }, r.prototype.abort = function() {
      return this._aborted ?
          this :
          (this._aborted = !0, this.xhr && this.xhr.abort(), this.req &&
          this.req.abort(), this.clearTimeout(), this.emit('abort'), this);
    }, r.prototype.withCredentials = function(e) {
      return void 0 == e && (e = !0), this._withCredentials = e, this;
    }, r.prototype.redirects = function(e) {
      return this._maxRedirects = e, this;
    }, r.prototype.toJSON = function() {
      return {method: this.method, url: this.url, data: this._data, headers: this._header};
    }, r.prototype.send = function(e) {
      var t = i(e), n = this._header['content-type'];
      if (this._formData && console.error(
              '.send() can\'t be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()'), t &&
          !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {}); else if (e &&
          this._data && this._isHost(this._data)) throw Error('Can\'t merge these send calls');
      if (t && i(this._data)) for (var r in e) this._data[r] = e[r]; else 'string' == typeof e ?
          (n || this.type('form'), n = this._header['content-type'], this._data = 'application/x-www-form-urlencoded' ==
          n ? this._data ? this._data + '&' + e : e : (this._data || '') + e) :
          this._data = e;
      return !t || this._isHost(e) ? this : (n || this.type('json'), this);
    }, r.prototype.sortQuery = function(e) {
      return this._sort = void 0 === e || e, this;
    }, r.prototype._timeoutError = function(e, t, n) {
      if (!this._aborted) {
        var r = new Error(e + t + 'ms exceeded');
        r.timeout = t, r.code = 'ECONNABORTED', r.errno = n, this.timedout = !0, this.abort(), this.callback(r);
      }
    }, r.prototype._setTimeouts = function() {
      var e = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function() {
        e._timeoutError('Timeout of ', e._timeout, 'ETIME');
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer &&
      (this._responseTimeoutTimer = setTimeout(function() {
        e._timeoutError('Response timeout of ', e._responseTimeout, 'ETIMEDOUT');
      }, this._responseTimeout));
    };
  }, LC85: function(e, t, n) {
    function r() {
    }

    function o(e) {
      if (!m(e)) return e;
      var t = [];
      for (var n in e) i(t, n, e[n]);
      return t.join('&');
    }

    function i(e, t, n) {
      if (null != n) if (Array.isArray(n)) n.forEach(function(n) {
        i(e, t, n);
      }); else if (m(n)) for (var r in n) i(e, t + '[' + r + ']', n[r]); else e.push(encodeURIComponent(t) + '=' +
          encodeURIComponent(n)); else null === n && e.push(encodeURIComponent(t));
    }

    function a(e) {
      for (var t, n, r = {}, o = e.split('&'), i = 0, a = o.length; i < a; ++i) t = o[i], n = t.indexOf('='), -1 == n ?
          r[decodeURIComponent(t)] = '' :
          r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
      return r;
    }

    function s(e) {
      var t, n, r, o, i = e.split(/\r?\n/), a = {};
      i.pop();
      for (var s = 0, u = i.length; s < u; ++s) n = i[s], t = n.indexOf(':'), r = n.slice(0, t).toLowerCase(), o = _(
          n.slice(t + 1)), a[r] = o;
      return a;
    }

    function u(e) {
      return /[\/+]json\b/.test(e);
    }

    function l(e) {
      this.req = e, this.xhr = this.req.xhr, this.text = 'HEAD' != this.req.method &&
      ('' === this.xhr.responseType || 'text' === this.xhr.responseType) || void 0 === this.xhr.responseType ?
          this.xhr.responseText :
          null, this.statusText = this.req.xhr.statusText;
      var t = this.xhr.status;
      1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = s(
          this.xhr.getAllResponseHeaders()), this.header['content-type'] = this.xhr.getResponseHeader(
          'content-type'), this._setHeaderProperties(this.header), null === this.text && e._responseType ?
          this.body = this.xhr.response :
          this.body = 'HEAD' != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
    }

    function c(e, t) {
      var n = this;
      this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on(
          'end', function() {
            var e = null, t = null;
            try {
              t = new l(n);
            } catch (t) {
              return e = new Error('Parser is unable to parse the response'), e.parse = !0, e.original = t, n.xhr ?
                  (e.rawResponse = void 0 === n.xhr.responseType ?
                      n.xhr.responseText :
                      n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) :
                  (e.rawResponse = null, e.status = null), n.callback(e);
            }
            n.emit('response', t);
            var r;
            try {
              n._isResponseOK(t) || (r = new Error(t.statusText ||
                  'Unsuccessful HTTP response'), r.original = e, r.response = t, r.status = t.status);
            } catch (e) {
              r = e;
            }
            r ? n.callback(r, t) : n.callback(null, t);
          });
    }

    function d(e, t, n) {
      var r = w('DELETE', e);
      return 'function' == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }

    var f;
    'undefined' != typeof window ?
        f = window :
        'undefined' != typeof self ?
            f = self :
            (console.warn('Using browser-only version of superagent in non-browser environment'), f = this);
    var p = n('bgIt'), h = n('L8b0'), m = n('XX4+'), v = n('73ks'), g = n('pcGs'), y = n('raPt'),
        w = t = e.exports = function(e, n) {
          return 'function' == typeof n ?
              new t.Request('GET', e).end(n) :
              1 == arguments.length ?
                  new t.Request('GET', e) :
                  new t.Request(e, n);
        };
    t.Request = c, w.getXHR = function() {
      if (!(!f.XMLHttpRequest || f.location && 'file:' == f.location.protocol &&
              f.ActiveXObject)) return new XMLHttpRequest;
      try {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (e) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) {
      }
      throw Error('Browser-only verison of superagent could not find XHR');
    };
    var _ = ''.trim ? function(e) {
      return e.trim();
    } : function(e) {
      return e.replace(/(^\s*|\s*$)/g, '');
    };
    w.serializeObject = o, w.parseString = a, w.types = {
      html: 'text/html',
      json: 'application/json',
      xml: 'application/xml',
      urlencoded: 'application/x-www-form-urlencoded',
      form: 'application/x-www-form-urlencoded',
      'form-data': 'application/x-www-form-urlencoded',
    }, w.serialize = {
      'application/x-www-form-urlencoded': o,
      'application/json': JSON.stringify,
    }, w.parse = {'application/x-www-form-urlencoded': a, 'application/json': JSON.parse}, g(
        l.prototype), l.prototype._parseBody = function(e) {
      var t = w.parse[this.type];
      return this.req._parser ?
          this.req._parser(this, e) :
          (!t && u(this.type) && (t = w.parse['application/json']), t && e && (e.length || e instanceof Object) ?
              t(e) :
              null);
    }, l.prototype.toError = function() {
      var e = this.req, t = e.method, n = e.url, r = 'cannot ' + t + ' ' + n + ' (' + this.status + ')',
          o = new Error(r);
      return o.status = this.status, o.method = t, o.url = n, o;
    }, w.Response = l, p(c.prototype), h(c.prototype), c.prototype.type = function(e) {
      return this.set('Content-Type', w.types[e] || e), this;
    }, c.prototype.accept = function(e) {
      return this.set('Accept', w.types[e] || e), this;
    }, c.prototype.auth = function(e, t, n) {
      switch ('object' == typeof t && null !== t && (n = t), n ||
      (n = {type: 'function' == typeof btoa ? 'basic' : 'auto'}), n.type) {
        case'basic':
          this.set('Authorization', 'Basic ' + btoa(e + ':' + t));
          break;
        case'auto':
          this.username = e, this.password = t;
          break;
        case'bearer':
          this.set('Authorization', 'Bearer ' + e);
      }
      return this;
    }, c.prototype.query = function(e) {
      return 'string' != typeof e && (e = o(e)), e && this._query.push(e), this;
    }, c.prototype.attach = function(e, t, n) {
      if (t) {
        if (this._data) throw Error('superagent can\'t mix .send() and .attach()');
        this._getFormData().append(e, t, n || t.name);
      }
      return this;
    }, c.prototype._getFormData = function() {
      return this._formData || (this._formData = new f.FormData), this._formData;
    }, c.prototype.callback = function(e, t) {
      if (this._maxRetries && this._retries++ < this._maxRetries && y(e, t)) return this._retry();
      var n = this._callback;
      this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit('error', e)), n(e, t);
    }, c.prototype.crossDomainError = function() {
      var e = new Error(
          'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
      e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e);
    }, c.prototype.buffer = c.prototype.ca = c.prototype.agent = function() {
      return console.warn('This is not supported in browser version of superagent'), this;
    }, c.prototype.pipe = c.prototype.write = function() {
      throw Error('Streaming is not supported in browser version of superagent');
    }, c.prototype._appendQueryString = function() {
      var e = this._query.join('&');
      if (e && (this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + e), this._sort) {
        var t = this.url.indexOf('?');
        if (t >= 0) {
          var n = this.url.substring(t + 1).split('&');
          v(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + '?' + n.join('&');
        }
      }
    }, c.prototype._isHost = function(e) {
      return e && 'object' == typeof e && !Array.isArray(e) && '[object Object]' !== Object.prototype.toString.call(e);
    }, c.prototype.end = function(e) {
      return this._endCalled && console.warn(
          'Warning: .end() was called twice. This is not supported in superagent'), this._endCalled = !0, this._callback = e ||
          r, this._appendQueryString(), this._end();
    }, c.prototype._end = function() {
      var e = this, t = this.xhr = w.getXHR(), n = this._formData || this._data;
      this._setTimeouts(), t.onreadystatechange = function() {
        var n = t.readyState;
        if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == n) {
          var r;
          try {
            r = t.status;
          } catch (e) {
            r = 0;
          }
          if (!r) {
            if (e.timedout || e._aborted) return;
            return e.crossDomainError();
          }
          e.emit('end');
        }
      };
      var r = function(t, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit('progress', n);
      };
      if (this.hasListeners('progress')) try {
        t.onprogress = r.bind(null, 'download'), t.upload && (t.upload.onprogress = r.bind(null, 'upload'));
      } catch (e) {
      }
      try {
        this.username && this.password ?
            t.open(this.method, this.url, !0, this.username, this.password) :
            t.open(this.method, this.url, !0);
      } catch (e) {
        return this.callback(e);
      }
      if (this._withCredentials && (t.withCredentials = !0), !this._formData && 'GET' != this.method &&
          'HEAD' != this.method && 'string' != typeof n && !this._isHost(n)) {
        var o = this._header['content-type'], i = this._serializer || w.serialize[o ? o.split(';')[0] : ''];
        !i && u(o) && (i = w.serialize['application/json']), i && (n = i(n));
      }
      for (var a in this.header) null != this.header[a] && this.header.hasOwnProperty(a) &&
      t.setRequestHeader(a, this.header[a]);
      return this._responseType && (t.responseType = this._responseType), this.emit('request', this), t.send(
          void 0 !== n ? n : null), this;
    }, w.get = function(e, t, n) {
      var r = w('GET', e);
      return 'function' == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r;
    }, w.head = function(e, t, n) {
      var r = w('HEAD', e);
      return 'function' == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }, w.options = function(e, t, n) {
      var r = w('OPTIONS', e);
      return 'function' == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }, w.del = d, w.delete = d, w.patch = function(e, t, n) {
      var r = w('PATCH', e);
      return 'function' == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }, w.post = function(e, t, n) {
      var r = w('POST', e);
      return 'function' == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }, w.put = function(e, t, n) {
      var r = w('PUT', e);
      return 'function' == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    };
  }, 'MWb/': function(e, t, n) {
    'use strict';
    var r = n('6uqe'), o = Object.prototype.hasOwnProperty, i = {
      allowDots: !1,
      allowPrototypes: !1,
      arrayLimit: 20,
      decoder: r.decode,
      delimiter: '&',
      depth: 5,
      parameterLimit: 1e3,
      plainObjects: !1,
      strictNullHandling: !1,
    }, a = function(e, t) {
      for (var n = {}, r = e.split(t.delimiter, t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit), i = 0; i <
      r.length; ++i) {
        var a, s, u = r[i], l = -1 === u.indexOf(']=') ? u.indexOf('=') : u.indexOf(']=') + 1;
        -1 === l ?
            (a = t.decoder(u), s = t.strictNullHandling ? null : '') :
            (a = t.decoder(u.slice(0, l)), s = t.decoder(u.slice(l + 1))), o.call(n, a) ?
            n[a] = [].concat(n[a]).concat(s) :
            n[a] = s;
      }
      return n;
    }, s = function(e, t, n) {
      if (!e.length) return t;
      var r, o = e.shift();
      if ('[]' === o) r = [], r = r.concat(s(e, t, n)); else {
        r = n.plainObjects ? Object.create(null) : {};
        var i = '[' === o.charAt(0) && ']' === o.charAt(o.length - 1) ? o.slice(1, -1) : o, a = parseInt(i, 10);
        !isNaN(a) && o !== i && String(a) === i && a >= 0 && n.parseArrays && a <= n.arrayLimit ?
            (r = [], r[a] = s(e, t, n)) :
            r[i] = s(e, t, n);
      }
      return r;
    }, u = function(e, t, n) {
      if (e) {
        var r = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e, i = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g,
            u = i.exec(r), l = u ? r.slice(0, u.index) : r, c = [];
        if (l) {
          if (!n.plainObjects && o.call(Object.prototype, l) && !n.allowPrototypes) return;
          c.push(l);
        }
        for (var d = 0; null !== (u = a.exec(r)) && d < n.depth;) {
          if (d += 1, !n.plainObjects && o.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
          c.push(u[1]);
        }
        return u && c.push('[' + r.slice(u.index) + ']'), s(c, t, n);
      }
    };
    e.exports = function(e, t) {
      var n = t || {};
      if (null !== n.decoder && void 0 !== n.decoder && 'function' != typeof n.decoder) throw new TypeError(
          'Decoder has to be a function.');
      if (n.delimiter = 'string' == typeof n.delimiter || r.isRegExp(n.delimiter) ?
              n.delimiter :
              i.delimiter, n.depth = 'number' == typeof n.depth ? n.depth : i.depth, n.arrayLimit = 'number' ==
          typeof n.arrayLimit ? n.arrayLimit : i.arrayLimit, n.parseArrays = !1 !==
              n.parseArrays, n.decoder = 'function' == typeof n.decoder ?
              n.decoder :
              i.decoder, n.allowDots = 'boolean' == typeof n.allowDots ?
              n.allowDots :
              i.allowDots, n.plainObjects = 'boolean' == typeof n.plainObjects ?
              n.plainObjects :
              i.plainObjects, n.allowPrototypes = 'boolean' == typeof n.allowPrototypes ?
              n.allowPrototypes :
              i.allowPrototypes, n.parameterLimit = 'number' == typeof n.parameterLimit ?
              n.parameterLimit :
              i.parameterLimit, n.strictNullHandling = 'boolean' == typeof n.strictNullHandling ?
              n.strictNullHandling :
              i.strictNullHandling, '' === e || null === e || void 0 === e) return n.plainObjects ?
          Object.create(null) :
          {};
      for (var o = 'string' == typeof e ? a(e, n) : e, s = n.plainObjects ? Object.create(null) : {}, l = Object.keys(
          o), c = 0; c < l.length; ++c) {
        var d = l[c], f = u(d, o[d], n);
        s = r.merge(s, f, n);
      }
      return r.compact(s);
    };
  }, MyTs: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = (r(h), n('3/fS')), v = r(m);
    n('xsko');
    var g = function(e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'componentDidMount', value: function() {
          v.default.init({con: 'div[data-pull-fresh]', minDistance: 4});
        },
        }, {
          key: 'render', value: function() {
            return null;
          },
        }]), t;
    }(h.Component);
    e.exports = g;
  }, P71K: function(e, t, n) {
    n('bF+g');
    var r = n('qGgm').Object;
    e.exports = function(e, t, n) {
      return r.defineProperty(e, t, n);
    };
  }, PBT7: function(e, t, n) {
    t = e.exports = n('aIC1')(), t.push([
      e.i,
      '.bonus-container .icon-container {\n  position: fixed;\n  top: 50%;\n  display: inline-block;\n  right: 15px;\n  z-index: 1400;\n}\n[data-dpr="2"] .bonus-container .icon-container {\n  right: 30px;\n}\n[data-dpr="3"] .bonus-container .icon-container {\n  right: 45px;\n}\n.bonus-container .icon-container .bonus-icon {\n  width: 75px;\n}\n[data-dpr="2"] .bonus-container .icon-container .bonus-icon {\n  width: 150px;\n}\n[data-dpr="3"] .bonus-container .icon-container .bonus-icon {\n  width: 225px;\n}\n.bonus-container .icon-container .icon-close {\n  position: absolute;\n  top: -8px;\n  right: 0;\n  width: 20px;\n}\n[data-dpr="2"] .bonus-container .icon-container .icon-close {\n  top: -16px;\n}\n[data-dpr="3"] .bonus-container .icon-container .icon-close {\n  top: -24px;\n}\n[data-dpr="2"] .bonus-container .icon-container .icon-close {\n  width: 40px;\n}\n[data-dpr="3"] .bonus-container .icon-container .icon-close {\n  width: 60px;\n}\n.bonus-container .bonus-close {\n  width: 40px;\n  height: 32px;\n  background: url(' +
      n('+cj+') +
      ') no-repeat center;\n  background-size: 17px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  opacity: .7;\n}\n[data-dpr="2"] .bonus-container .bonus-close {\n  width: 80px;\n}\n[data-dpr="3"] .bonus-container .bonus-close {\n  width: 120px;\n}\n[data-dpr="2"] .bonus-container .bonus-close {\n  height: 64px;\n}\n[data-dpr="3"] .bonus-container .bonus-close {\n  height: 96px;\n}\n[data-dpr="2"] .bonus-container .bonus-close {\n  background-size: 34px;\n}\n[data-dpr="3"] .bonus-container .bonus-close {\n  background-size: 51px;\n}\n.bonus-container .weixin-bonus,\n.bonus-container .wap-bonus {\n  position: fixed;\n  width: 8.65625rem;\n  height: 11.5625rem;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 1400;\n}\n.bonus-container .weixin-bonus {\n  background: url(' +
      n('n4+h') +
      ') no-repeat center center;\n  background-size: cover;\n}\n.bonus-container .wap-bonus {\n  background: url(' +
      n('n4+h') +
      ') no-repeat center center;\n  background-size: cover;\n}\n.bonus-container .bonus {\n  display: block;\n}\n.bonus-container .mask {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.3);\n}\n',
      '']);
  }, Pekt: function(e, t, n) {
    'use strict';
    var r = n('XMdZ'), o = n('MWb/'), i = n('tF0L');
    e.exports = {formats: i, parse: o, stringify: r};
  }, Pj6p: function(e, t, n) {
    var r = n('K0Kg');
    r(r.S, 'Object', {setPrototypeOf: n('wYmI').set});
  }, QAx5: function(e, t, n) {
    (function(e, t) {
      !function(e, n) {
        'use strict';

        function r(e) {
          'function' != typeof e && (e = new Function('' + e));
          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
          var r = {callback: e, args: t};
          return l[u] = r, s(u), u++;
        }

        function o(e) {
          delete l[e];
        }

        function i(e) {
          var t = e.callback, r = e.args;
          switch (r.length) {
            case 0:
              t();
              break;
            case 1:
              t(r[0]);
              break;
            case 2:
              t(r[0], r[1]);
              break;
            case 3:
              t(r[0], r[1], r[2]);
              break;
            default:
              t.apply(n, r);
          }
        }

        function a(e) {
          if (c) setTimeout(a, 0, e); else {
            var t = l[e];
            if (t) {
              c = !0;
              try {
                i(t);
              } finally {
                o(e), c = !1;
              }
            }
          }
        }

        if (!e.setImmediate) {
          var s, u = 1, l = {}, c = !1, d = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
          f = f && f.setTimeout ? f : e, '[object process]' === {}.toString.call(e.process) ? function() {
            s = function(e) {
              t.nextTick(function() {
                a(e);
              });
            };
          }() : function() {
            if (e.postMessage && !e.importScripts) {
              var t = !0, n = e.onmessage;
              return e.onmessage = function() {
                t = !1;
              }, e.postMessage('', '*'), e.onmessage = n, t;
            }
          }() ? function() {
            var t = 'setImmediate$' + Math.random() + '$', n = function(n) {
              n.source === e && 'string' == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length));
            };
            e.addEventListener ? e.addEventListener('message', n, !1) : e.attachEvent('onmessage', n), s = function(n) {
              e.postMessage(t + n, '*');
            };
          }() : e.MessageChannel ? function() {
            var e = new MessageChannel;
            e.port1.onmessage = function(e) {
              a(e.data);
            }, s = function(t) {
              e.port2.postMessage(t);
            };
          }() : d && 'onreadystatechange' in d.createElement('script') ? function() {
            var e = d.documentElement;
            s = function(t) {
              var n = d.createElement('script');
              n.onreadystatechange = function() {
                a(t), n.onreadystatechange = null, e.removeChild(n), n = null;
              }, e.appendChild(n);
            };
          }() : function() {
            s = function(e) {
              setTimeout(a, 0, e);
            };
          }(), f.setImmediate = r, f.clearImmediate = o;
        }
      }('undefined' == typeof self ? void 0 === e ? this : e : self);
    }).call(t, n('dTv7'), n('WI/o'));
  }, QLF1: function(e, t) {
  }, QVlm: function(e, t, n) {
    'use strict';
    e.exports = function(e, t) {
      function n() {
        if (!i) {
          var e = 1 == t.scale ? 'width=device-width, ' : '';
          if (i = r.createElement('meta'), i.setAttribute('name', 'viewport'), i.setAttribute('content', e +
                  'initial-scale=' + t.scale + ', maximum-scale=' + t.scale + ', minimum-scale=' + t.scale +
                  ', user-scalable=no'), o.firstElementChild) o.firstElementChild.appendChild(i); else {
            var n = r.createElement('div');
            n.appendChild(i), r.write(n.innerHTML);
          }
        }
      }

      var r = e.document, o = r.documentElement, i = r.querySelector('meta[name=\'viewport\']'),
          a = r.querySelector('meta[name=\'responsive\']'), s = Math.floor(e.devicePixelRatio) || 1, u = [1, 2, 3], l = 1,
          c = 0, d = !1;
      if (t.init = function(n) {
            return window.noScaling = n, t.isScalable = d = function() {
              if (n) return !1;
              var t = e.navigator.appVersion.match(/iphone/gi), r = e.navigator.appVersion.match(/android/gi),
                  o = !!e.chrome, i = e.navigator.userAgent, a = i.match(/MicroMessenger\/([\d\.]+)/i);
              if (t) {
                var s = i.match(/(iPhone\sOS)\s([\d_]+)/);
                return !(parseFloat(s[2]) < 7);
              }
              if (r) {
                var u = i.match(/AppleWebKit\/([\d\.]+)/i), l = i.match(/UCBrowser\/([\d\.]+)/i),
                    c = (i.match(/MQQBrowser\/([\d\.]+)/i), i.match(/Chrome\/([\d\.]+)/i)), d = i.match(/MiuiBrowser/i);
                return !!(u && parseFloat(u[1]) >= 537.36 && (d || a && parseFloat(a[1]) >= 6.1)) ||
                    (!!(l && parseFloat(l[1]) >= 9.6) || !!(c && parseFloat(c[1]) >= 30 && o));
              }
              return !1;
            }(), t.changeScale(), this;
          }, a && d && (content = a.getAttribute('content'), content)) {
        var f = content.match(/initial\-dpr=([\d\.]+)/);
        f && (l = Math.floor(f[1]));
      }
      return t.scaleLock = !1, t.changeScale = function(t, r) {
        if (!this.scaleLock) {
          if (this.isScalable) {
            var t = Math.floor(t) || s;
            this.dpr = u.indexOf(t) > -1 ? t : 3;
          } else this.dpr = 1;
          this.scale = 1 / this.dpr, i && (i.parentNode.removeChild(i), i = null), n();
        }
        if (r && (this.scaleLock = r), o.getBoundingClientRect().width > e.innerWidth) {
          var a = 1 == this.scale ? 'device-width' : e.innerWidth;
          i.setAttribute('content', 'width=' + a + ',initial-scale=' + this.scale + ', maximum-scale=' + this.scale +
              ', minimum-scale=' + this.scale + ', user-scalable=no');
        }
        this.baseFontSize = o.getBoundingClientRect().width / 10, this.baseFontSize = Math.max(this.baseFontSize,
            32), o.style.fontSize = this.baseFontSize + 'px', o.setAttribute('data-dpr', this.dpr);
      }, r.addEventListener('DOMContentLoaded', function(e) {
        r.body.style.fontSize = 12 * l + 'px';
      }, !1), e.addEventListener('orientationchange', function(e) {
        clearTimeout(c), c = setTimeout(t.changeScale.bind(t), 300);
      }, !1), e.addEventListener('pageshow', function(e) {
        e.persisted && (clearTimeout(c), window.noScaling || (c = setTimeout(t.changeScale.bind(t), 300)));
      }, !1), t.rem2px = function(e) {
        var t = parseFloat(e) * this.dpr * this.baseFontSize;
        return 'string' == typeof e && e.match(/rem$/) && (t += 'px'), t;
      }, t.px2rem = function(e) {
        var t = parseFloat(e) * this.dpr / this.baseFontSize;
        return 'string' == typeof e && e.match(/px$/) && (t += 'rem'), t;
      }, t.px2px = function(e) {
        var t = parseFloat(e) * this.dpr;
        return 'string' == typeof e && e.match(/px$/) && (t += 'px'), t;
      }, t;
    }(window, window.responsive || (window.responsive = {dpr: 1}));
  }, RIBO: function(e, t) {
  }, RIhk: function(e, t, n) {
    n('XgqU'), e.exports = n('qGgm').Object.assign;
  }, RfGB: function(e, t) {
  }, RvJg: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('gf5I'), i = r(o), a = n('mZJ8'), s = r(a), u = n('p7ii'), l = r(u), c = n('iltz'), d = r(c),
        f = n('fvPU'), p = r(f), h = n('hJ6a'), m = r(h), v = n('mRYa'), g = r(v), y = n('IJ1K'), w = r(y),
        _ = n('V80v'), b = r(_), x = n('nhKt'), k = r(x), T = n('afpQ'), E = r(T), O = n('1uVg'), C = r(O),
        A = n('Es/p'), M = r(A), L = n('0vED'), S = r(L), j = n('IFEe'), N = r(j), D = n('MyTs'), R = r(D),
        P = n('YWnE'), F = r(P), I = n('BV5S'), B = r(I), U = n('FKII'), V = r(U), q = n('bVOP'), W = r(q),
        K = n('gT+X'), H = r(K);
    n('RIBO'), W.default.initScrollEvents();
    var G = function(e) {
      function t() {
        var e, n, r, o;
        (0, p.default)(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = r = (0, g.default)(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e,
            [this].concat(a))), r.state = {listData: r.props.listData}, o = n, (0, g.default)(r, o);
      }

      return (0, w.default)(t, e), (0, m.default)(t, [
        {
          key: 'componentWillReceiveProps', value: function(e) {
          if (0 !== e.listData.length && 0 === this.props.listData.length && this.showMaterial()) {
            var t = this.props.GTMValue.adMaterialOptions,
                n = JSON.parse(F.default.getCookieForLocal('ad_material_options')) || {},
                r = (new Date).getTime() - t.adMaterialUpateTime;
            r >= 0 ?
                n.adMaterialChannels &&
                F.default.setCookieForLocal('ad_material_options', (0, l.default)(t), 864e5 - r) :
                t = n;
            var o = t.adMaterialPos || 3, i = Math.floor(Math.random() * t.adMaterials.length), a = t.adMaterials[i];
            a.version = i, this.props.addADMaterial({adMaterial: a, pos: o}), window.maevent('creative', 'show', i, 1,
                {nonInteraction: !0});
          }
          this.updateTimeAgo(e.listData), this.updateXpromt(e);
        },
        }, {
          key: 'updateXpromt', value: function(e) {
            var t = e.currentChannel, n = e.GTMValue, r = e.listData, o = n.xpromt || {}, i = (0, s.default)(o),
                a = F.default.cloneDeep(r);
            if (-1 === i.indexOf(t)) return !1;
            o[t].forEach(function(e, t) {
              e.xpromt = !0, a.splice(e.position - 1, 0, e);
            }), this.setState({listData: a});
          },
        }, {
          key: 'componentDidMount', value: function() {
            var e = this;
            e.updateTimeAgo(this.props.listData), setInterval(function() {
              return e.updateTimeAgo(e.props.listData);
            }, 6e4), 'object' === (void 0 === V.default ? 'undefined' : (0, i.default)(V.default)) &&
            V.default.initShowEvents({attribute: 'data-show'});
          },
        }, {
          key: 'componentDidUpdate', value: function() {
            V.default.scrollChangeDisable = !1, V.default.scrollUpdate();
          },
        }, {
          key: 'updateTimeAgo', value: function(e) {
            var t = F.default.cloneDeep(e);
            t.forEach(function(e) {
              var t = (0, B.default)(e.datetime, {daysAgoFormat: 'MM-dd'});
              e.timeago = t;
            }), this.setState({listData: t});
          },
        }, {
          key: 'showMaterial', value: function() {
            var e = this.props.GTMValue.adMaterialOptions;
            return !(!e || !e.adMaterialChannels) &&
                (-1 !== e.adMaterialChannels.indexOf(F.default.hash('channel')) && !!e.adMaterials);
          },
        }, {
          key: 'render', value: function() {
            var e = this;
            return b.default.createElement('content', {id: 'pageletListContent', className: 'feed-list-container'},
                b.default.createElement(R.default, null),
                b.default.createElement('div', {className: 'list_content', 'data-pull-fresh': '1'},
                    this.state.listData.map(function(t, n) {
                      t.index = n + 1;
                      var r = t.index;
                      return t.action_label = 'click_' + ('__all__' === e.props.currentChannel ?
                          'headline' :
                          e.props.currentChannel), H.default.browser.liteh5 && H.default.os.ios && (t.source_url &&
                      (t.source_url = F.default.appendQuery(t.source_url, 'need_open_window=1')), t.url &&
                      (t.url = F.default.appendQuery(t.url, 'need_open_window=1'))), t.showAdMaterial ?
                          b.default.createElement(N.default, {key: r, datum: t.adMaterial}) :
                          t.ad_id ?
                              b.default.createElement(C.default, {key: r, datum: t}) :
                              'video' === e.props.currentChannel || !0 === window.isVideoListPage ?
                                  b.default.createElement(M.default,
                                      {key: r, datum: t, currentChannel: e.props.currentChannel}) :
                                  t.xpromt ?
                                      b.default.createElement(S.default, {key: r, datum: t}) :
                                      b.default.createElement(E.default,
                                          {key: r, datum: t, currentChannel: e.props.currentChannel});
                    })), b.default.createElement('div', {className: 'list_bottom'},
                    b.default.createElement('section', {className: 'loadmoretip'},
                        b.default.createElement('a', {href: '#'}, this.props.tips))));
          },
        }]), t;
    }(_.Component);
    G.propTypes = {
      GTMValue: k.default.object,
      listData: k.default.array,
      dispatch: k.default.func,
      currentChannel: k.default.string,
      tips: k.default.string,
      props: k.default.object,
      addADMaterial: k.default.func,
    }, e.exports = G;
  }, SJPe: function(e, t, n) {
    'use strict';
    var r = function() {
      var e = function(e, t, n, r, o, i, a, s) {
        'string' == typeof t && (t = parseFloat(t)), 'string' == typeof n && (n = parseFloat(n)), 'string' ==
        typeof r && (r = parseFloat(r)), 'string' == typeof o && (o = parseFloat(o)), 'string' == typeof i &&
        (i = parseFloat(i)), 'string' == typeof a && (a = parseFloat(a));
        Math.PI;
        switch (e.save(), e.beginPath(), e.moveTo(t, n), e.lineTo(r, o), e.lineTo(i, a), s) {
          case 0:
            var u = Math.sqrt((i - t) * (i - t) + (a - n) * (a - n));
            e.arcTo(r, o, t, n, .55 * u), e.fill();
            break;
          case 1:
            e.beginPath(), e.moveTo(t, n), e.lineTo(r, o), e.lineTo(i, a), e.lineTo(t, n), e.fill();
            break;
          case 2:
            e.stroke();
            break;
          case 3:
            var l = (t + r + i) / 3, c = (n + o + a) / 3;
            e.quadraticCurveTo(l, c, t, n), e.fill();
            break;
          case 4:
            var d, f, p, h, u;
            if (i == t) u = a - n, d = (r + t) / 2, p = (r + t) / 2, f = o + u / 5, h = o - u / 5; else {
              u = Math.sqrt((i - t) * (i - t) + (a - n) * (a - n));
              var m = (t + i) / 2, v = (n + a) / 2, g = (m + r) / 2, y = (v + o) / 2, w = (a - n) / (i - t),
                  _ = u / (2 * Math.sqrt(w * w + 1)) / 5, b = w * _;
              d = g - _, f = y - b, p = g + _, h = y + b;
            }
            e.bezierCurveTo(d, f, p, h, t, n), e.fill();
        }
        e.restore();
      }, t = function(e, t, r, o, i, a, s, u, l, c, d, f, p) {
        u = void 0 !== u ? u : 3, l = void 0 !== l ? l : 1, c = void 0 !== c ? c : Math.PI / 8, d = void 0 !== d ?
            d :
            10, f = void 0 !== f ? f : 1, e.save(), e.lineWidth = f, e.beginPath(), e.arc(t, r, o, i, a, s), e.stroke();
        var h, m, v, g, y;
        if (1 & l && (h = Math.cos(i) * o + t, m = Math.sin(i) * o + r, v = Math.atan2(t - h, m - r), s ?
                (g = h + 10 * Math.cos(v), y = m + 10 * Math.sin(v)) :
                (g = h - 10 * Math.cos(v), y = m - 10 * Math.sin(v)), n(e, h, m, g, y, u, 2, c, d)), 2 & l) {
          h = Math.cos(a) * o + t, m = Math.sin(a) * o + r, v = Math.atan2(t - h, m - r), s ?
              (g = h - 10 * Math.cos(v), y = m - 10 * Math.sin(v)) :
              (g = h + 10 * Math.cos(v), y = m + 10 * Math.sin(v)), n(e, h - p * Math.sin(a), m + p * Math.cos(a), g -
              p * Math.sin(a), y + p * Math.cos(a), u, 2, c, d);
        }
        e.restore();
      }, n = function(t, n, r, o, i, a, s, u, l) {
        'string' == typeof n && (n = parseFloat(n)), 'string' == typeof r && (r = parseFloat(r)), 'string' ==
        typeof o && (o = parseFloat(o)), 'string' == typeof i && (i = parseFloat(i)), a = void 0 !== a ?
            a :
            3, s = void 0 !== s ? s : 1, u = void 0 !== u ? u : Math.PI / 8, l = void 0 !== l ? l : 10;
        var c, d, f, p, h = 'function' != typeof a ? e : a, m = Math.sqrt((o - n) * (o - n) + (i - r) * (i - r)),
            v = (m - l / 3) / m;
        1 & s ? (c = Math.round(n + (o - n) * v), d = Math.round(r + (i - r) * v)) : (c = o, d = i), 2 & s ?
            (f = n + (o - n) * (1 - v), p = r + (i - r) * (1 - v)) :
            (f = n, p = r), t.beginPath(), t.moveTo(f, p), t.lineTo(c, d), t.stroke();
        var g = Math.atan2(i - r, o - n), y = Math.abs(l / Math.cos(u));
        if (1 & s) {
          var w = g + Math.PI + u, _ = o + Math.cos(w) * y, b = i + Math.sin(w) * y, x = g + Math.PI - u,
              k = o + Math.cos(x) * y, T = i + Math.sin(x) * y;
          h(t, _, b, o, i, k, T, a);
        }
        if (2 & s) {
          var w = g + u, _ = n + Math.cos(w) * y, b = r + Math.sin(w) * y, x = g - u, k = n + Math.cos(x) * y,
              T = r + Math.sin(x) * y;
          h(t, _, b, n, r, k, T, a);
        }
      };
      return {drawArrow: n, drawArcedArrow: t};
    }();
    e.exports = r;
  }, TsfP: function(e, t, n) {
    'use strict';
    var r = function() {
    };
    e.exports = r;
  }, Ufk5: function(e, t, n) {
    e.exports = {default: n('mJKx'), __esModule: !0};
  }, UoBj: function(e, t, n) {
    'use strict';
    (function(t) {
      e.exports = function(e, t) {
        var n = t.document, r = {NONE: 0, NOOP: 1, UP: 2, RIGHT: 3, DOWN: 4, LEFT: 5, LEFT_RIGHT: 6}, o = {
          con: '', minDistance: 4, onPullStart: function() {
          }, onMove: function() {
          }, onPullEnd: function() {
          },
        }, i = function(t) {
          'string' == typeof t.con && (t.con = n.querySelector(t.con)), this.options = e.extend({}, o,
              t), this.hasTouch = !1, this.direction = r.NONE, this.distanceX = this.startY = this.startX = 0, this.isPull = !1, this.initEvent();
        };
        return i.prototype = {
          initEvent: function() {
            var e = this;
            this._touchStart = function(t) {
              e.__start(t);
            }, this._touchMove = function(t) {
              e.__move(t);
            }, this._touchEnd = function(t) {
              e.__end(t);
            }, this.options.con.addEventListener('touchstart', this._touchStart, !1), this.options.con.addEventListener(
                'touchmove', this._touchMove, !1), this.options.con.addEventListener('touchend', this._touchEnd, !1);
          }, detachEvent: function() {
            this.options.con.removeEventListener('touchstart', this._touchStart,
                !1), this.options.con.removeEventListener('touchmove', this._touchMove,
                !1), this.options.con.removeEventListener('touchend', this._touchEnd, !1);
          }, __start: function(e) {
            e = e.targetTouches, 1 === e.length &&
            (this.startX = e[0].pageX, this.startY = e[0].pageY, this.direction = r.NONE, this.distanceX = 0, this.hasTouch = !0, this.startScrollY = t.scrollY);
          }, __move: function(e) {
            if (this.hasTouch) {
              if (this.direction === r.UP) return;
              var t = e.targetTouches[0];
              if (this.direction === r.NONE) {
                this.distanceX = t.pageX - this.startX, this.distanceY = t.pageY - this.startY;
                var n = Math.abs(this.distanceY), o = Math.abs(this.distanceX);
                o + n > this.options.minDistance && (this.direction = o > 1.73 * n ?
                    r.LEFT_RIGHT :
                    n > 1.73 * o ?
                        this.distanceY < 0 ?
                            r.UP :
                            r.DOWN :
                        r.NOOP, this.startScrollY < 10 && this.distanceY > 0 &&
                (this.direction = r.DOWN)), this.startScrollY < 10 && this.direction === r.DOWN &&
                this.distanceY > this.options.minDistance &&
                (this.isPull = !0, this.options.onPullStart(e, this.distanceY));
              }
              this.isPull && this.direction === r.DOWN &&
              (this.distanceY = t.pageY - this.startY, this.refreshY = parseInt(this.distanceY *
                  this.options.pullRatio), this.options.onMove(e, this.distanceY));
            }
          }, __end: function(e) {
            !this.hasTouch || r.LEFT_RIGHT !== this.direction && r.DOWN !== this.direction ||
            (this.direction === r.LEFT_RIGHT &&
            (e.preventDefault(), this.options.onPullEnd(e, this.distanceX, r.LEFT_RIGHT)), this.direction === r.DOWN &&
            this.isPull && (e.preventDefault(), this.options.onPullEnd(e, this.distanceY,
                r.DOWN))), this.hasTouch = !1, this.isPull = !1;
          },
        }, {
          init: function(e) {
            return new i(e);
          }, DIRECTION: r,
        };
      }(t, window);
    }).call(t, n('gXQ3'));
  }, VPAO: function(e, t, n) {
    'use strict';
    !function(e, t, n) {
      function r(e) {
        var t = a('__tasessionId');
        return t ?
            t && e && (s('__tasessionId', t, {expires: 1800}), d = !1) :
            (c = (new Date).getTime(), t = '' + o(9) + (new Date).getTime(), s('__tasessionId', t,
                {expires: 1800}), d = !0), t;
      }

      function o(e) {
        for (var t = ''; t.length < e; t += Math.random().toString(36).substr(2)) ;
        return t.substr(0, e);
      }

      function i(e) {
        for (var t, n, r = 1, o = arguments.length; r < o; r++) {
          t = arguments[r];
          for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e;
      }

      function a(e) {
        var n, r = new RegExp('(^| )' + e + '=([^;]*)(;|$)');
        return (n = t.cookie.match(r)) ? unescape(n[2]) : null;
      }

      function s(e, n, r) {
        var o, a = {path: '/'};
        i(a, r), a.expires && (o = new Date, o.setTime(o.getTime() + 1e3 * r.expires)), t.cookie = [
          e, '=', escape(n),
          a.expires ? '; expires=' + o.toUTCString() : '', a.path ? '; path=' + a.path : '',
          a.domain ? '; domain=' + a.domain : '', a.secure ? '; secure' : ''].join('');
      }

      var u = {}, l = {}, c = (new Date).getTime(), d = !1;
      u.setup = function(e) {
        i(l, e);
      }, u.send = function(t, n) {
        var o = [], a = {};
        if (i(a, l, n, {sid: r('event' === t), type: t}), 'close' !== t || (a.st = (new Date).getTime() - c, !d)) {
          for (var s in a) o.push(s + '=' + a[s]);
          o.push('t=' + (new Date).getTime()), o.push(
              'source=wap'), e._ta_log_img_ = new Image, e._ta_log_img_.src = '//m.toutiao.com/user_log/?' + o.join('&');
        }
      }, e.onpagehide = function(e) {
        u.send('close', {});
      }, e.taAnalysis = u;
    }(window, document);
  }, WB6W: function(e, t, n) {
    function r(e, t) {
      this._id = e, this._clearFn = t;
    }

    var o = Function.prototype.apply;
    t.setTimeout = function() {
      return new r(o.call(setTimeout, window, arguments), clearTimeout);
    }, t.setInterval = function() {
      return new r(o.call(setInterval, window, arguments), clearInterval);
    }, t.clearTimeout = t.clearInterval = function(e) {
      e && e.close();
    }, r.prototype.unref = r.prototype.ref = function() {
    }, r.prototype.close = function() {
      this._clearFn.call(window, this._id);
    }, t.enroll = function(e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
    }, t.unenroll = function(e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
    }, t._unrefActive = t.active = function(e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function() {
        e._onTimeout && e._onTimeout();
      }, t));
    }, n('QAx5');
    var i = n('JQIT');
    t.setImmediate = i.setImmediate, t.clearImmediate = i.clearImmediate;
  }, WE0y: function(e, t, n) {
    'use strict';
    t.decode = t.parse = n('sfAD'), t.encode = t.stringify = n('z9My');
  }, Wbk1: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule',
        {value: !0}), t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = void 0;
    var r = n('1P2o'), o = function(e) {
          return e && e.__esModule ? e : {default: e};
        }(r), i = 'transform', a = void 0, s = void 0, u = void 0, l = void 0, c = void 0, d = void 0, f = void 0,
        p = void 0, h = void 0, m = void 0, v = void 0;
    if (o.default) {
      var g = function() {
        for (var e = document.createElement('div').style, t = {
          O: function(e) {
            return 'o' + e.toLowerCase();
          }, Moz: function(e) {
            return e.toLowerCase();
          }, Webkit: function(e) {
            return 'webkit' + e;
          }, ms: function(e) {
            return 'MS' + e;
          },
        }, n = Object.keys(t), r = void 0, o = void 0, i = '', a = 0; a < n.length; a++) {
          var s = n[a];
          if (s + 'TransitionProperty' in e) {
            i = '-' + s.toLowerCase(), r = t[s]('TransitionEnd'), o = t[s]('AnimationEnd');
            break;
          }
        }
        return !r && 'transitionProperty' in e && (r = 'transitionend'), !o && 'animationName' in e &&
        (o = 'animationend'), e = null, {animationEnd: o, transitionEnd: r, prefix: i};
      }();
      a = g.prefix, t.transitionEnd = s = g.transitionEnd, t.animationEnd = u = g.animationEnd, t.transform = i = a +
          '-' + i, t.transitionProperty = l = a + '-transition-property', t.transitionDuration = c = a +
          '-transition-duration', t.transitionDelay = f = a + '-transition-delay', t.transitionTiming = d = a +
          '-transition-timing-function', t.animationName = p = a + '-animation-name', t.animationDuration = h = a +
          '-animation-duration', t.animationTiming = m = a + '-animation-delay', t.animationDelay = v = a +
          '-animation-timing-function';
    }
    t.transform = i, t.transitionProperty = l, t.transitionTiming = d, t.transitionDelay = f, t.transitionDuration = c, t.transitionEnd = s, t.animationName = p, t.animationDuration = h, t.animationTiming = m, t.animationDelay = v, t.animationEnd = u, t.default = {
      transform: i,
      end: s,
      property: l,
      timing: d,
      delay: f,
      duration: c,
    };
  }, 'X+OT': function(e, t) {
    !function(e) {
      'use strict';

      function t(e) {
        if ('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError(
            'Invalid character in header field name');
        return e.toLowerCase();
      }

      function n(e) {
        return 'string' != typeof e && (e = String(e)), e;
      }

      function r(e) {
        var t = {
          next: function() {
            var t = e.shift();
            return {done: void 0 === t, value: t};
          },
        };
        return g.iterable && (t[Symbol.iterator] = function() {
          return t;
        }), t;
      }

      function o(e) {
        this.map = {}, e instanceof o ? e.forEach(function(e, t) {
          this.append(t, e);
        }, this) : Array.isArray(e) ? e.forEach(function(e) {
          this.append(e[0], e[1]);
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
          this.append(t, e[t]);
        }, this);
      }

      function i(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
        e.bodyUsed = !0;
      }

      function a(e) {
        return new Promise(function(t, n) {
          e.onload = function() {
            t(e.result);
          }, e.onerror = function() {
            n(e.error);
          };
        });
      }

      function s(e) {
        var t = new FileReader, n = a(t);
        return t.readAsArrayBuffer(e), n;
      }

      function u(e) {
        var t = new FileReader, n = a(t);
        return t.readAsText(e), n;
      }

      function l(e) {
        for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(
            t[r]);
        return n.join('');
      }

      function c(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }

      function d() {
        return this.bodyUsed = !1, this._initBody = function(e) {
          if (this._bodyInit = e, e) if ('string' == typeof e) this._bodyText = e; else if (g.blob &&
              Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (g.formData &&
              FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (g.searchParams &&
              URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (g.arrayBuffer &&
              g.blob && w(e)) this._bodyArrayBuffer = c(e.buffer), this._bodyInit = new Blob(
              [this._bodyArrayBuffer]); else {
            if (!g.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !_(e)) throw new Error(
                'unsupported BodyInit type');
            this._bodyArrayBuffer = c(e);
          } else this._bodyText = '';
          this.headers.get('content-type') || ('string' == typeof e ?
              this.headers.set('content-type', 'text/plain;charset=UTF-8') :
              this._bodyBlob && this._bodyBlob.type ?
                  this.headers.set('content-type', this._bodyBlob.type) :
                  g.searchParams && URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
        }, g.blob && (this.blob = function() {
          var e = i(this);
          if (e) return e;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error('could not read FormData body as blob');
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s);
        }), this.text = function() {
          var e = i(this);
          if (e) return e;
          if (this._bodyBlob) return u(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(l(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error('could not read FormData body as text');
          return Promise.resolve(this._bodyText);
        }, g.formData && (this.formData = function() {
          return this.text().then(h);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }

      function f(e) {
        var t = e.toUpperCase();
        return b.indexOf(t) > -1 ? t : e;
      }

      function p(e, t) {
        t = t || {};
        var n = t.body;
        if (e instanceof p) {
          if (e.bodyUsed) throw new TypeError('Already read');
          this.url = e.url, this.credentials = e.credentials, t.headers ||
          (this.headers = new o(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit ||
          (n = e._bodyInit, e.bodyUsed = !0);
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || 'omit', !t.headers && this.headers ||
            (this.headers = new o(t.headers)), this.method = f(t.method || this.method || 'GET'), this.mode = t.mode ||
                this.mode || null, this.referrer = null, ('GET' === this.method || 'HEAD' === this.method) &&
            n) throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(n);
      }

      function h(e) {
        var t = new FormData;
        return e.trim().split('&').forEach(function(e) {
          if (e) {
            var n = e.split('='), r = n.shift().replace(/\+/g, ' '), o = n.join('=').replace(/\+/g, ' ');
            t.append(decodeURIComponent(r), decodeURIComponent(o));
          }
        }), t;
      }

      function m(e) {
        var t = new o;
        return e.split(/\r?\n/).forEach(function(e) {
          var n = e.split(':'), r = n.shift().trim();
          if (r) {
            var o = n.join(':').trim();
            t.append(r, o);
          }
        }), t;
      }

      function v(e, t) {
        t || (t = {}), this.type = 'default', this.status = 'status' in t ? t.status : 200, this.ok = this.status >=
            200 && this.status < 300, this.statusText = 'statusText' in t ? t.statusText : 'OK', this.headers = new o(
            t.headers), this.url = t.url || '', this._initBody(e);
      }

      if (!e.fetch) {
        var g = {
          searchParams: 'URLSearchParams' in e,
          iterable: 'Symbol' in e && 'iterator' in Symbol,
          blob: 'FileReader' in e && 'Blob' in e && function() {
            try {
              return new Blob, !0;
            } catch (e) {
              return !1;
            }
          }(),
          formData: 'FormData' in e,
          arrayBuffer: 'ArrayBuffer' in e,
        };
        if (g.arrayBuffer) var y = [
          '[object Int8Array]',
          '[object Uint8Array]',
          '[object Uint8ClampedArray]',
          '[object Int16Array]',
          '[object Uint16Array]',
          '[object Int32Array]',
          '[object Uint32Array]',
          '[object Float32Array]',
          '[object Float64Array]'], w = function(e) {
          return e && DataView.prototype.isPrototypeOf(e);
        }, _ = ArrayBuffer.isView || function(e) {
          return e && y.indexOf(Object.prototype.toString.call(e)) > -1;
        };
        o.prototype.append = function(e, r) {
          e = t(e), r = n(r);
          var o = this.map[e];
          this.map[e] = o ? o + ',' + r : r;
        }, o.prototype.delete = function(e) {
          delete this.map[t(e)];
        }, o.prototype.get = function(e) {
          return e = t(e), this.has(e) ? this.map[e] : null;
        }, o.prototype.has = function(e) {
          return this.map.hasOwnProperty(t(e));
        }, o.prototype.set = function(e, r) {
          this.map[t(e)] = n(r);
        }, o.prototype.forEach = function(e, t) {
          for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
        }, o.prototype.keys = function() {
          var e = [];
          return this.forEach(function(t, n) {
            e.push(n);
          }), r(e);
        }, o.prototype.values = function() {
          var e = [];
          return this.forEach(function(t) {
            e.push(t);
          }), r(e);
        }, o.prototype.entries = function() {
          var e = [];
          return this.forEach(function(t, n) {
            e.push([n, t]);
          }), r(e);
        }, g.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
        var b = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
        p.prototype.clone = function() {
          return new p(this, {body: this._bodyInit});
        }, d.call(p.prototype), d.call(v.prototype), v.prototype.clone = function() {
          return new v(this._bodyInit,
              {status: this.status, statusText: this.statusText, headers: new o(this.headers), url: this.url});
        }, v.error = function() {
          var e = new v(null, {status: 0, statusText: ''});
          return e.type = 'error', e;
        };
        var x = [301, 302, 303, 307, 308];
        v.redirect = function(e, t) {
          if (-1 === x.indexOf(t)) throw new RangeError('Invalid status code');
          return new v(null, {status: t, headers: {location: e}});
        }, e.Headers = o, e.Request = p, e.Response = v, e.fetch = function(e, t) {
          return new Promise(function(n, r) {
            var o = new p(e, t), i = new XMLHttpRequest;
            i.onload = function() {
              var e = {status: i.status, statusText: i.statusText, headers: m(i.getAllResponseHeaders() || '')};
              e.url = 'responseURL' in i ? i.responseURL : e.headers.get('X-Request-URL');
              var t = 'response' in i ? i.response : i.responseText;
              n(new v(t, e));
            }, i.onerror = function() {
              r(new TypeError('Network request failed'));
            }, i.ontimeout = function() {
              r(new TypeError('Network request failed'));
            }, i.open(o.method, o.url, !0), 'include' === o.credentials && (i.withCredentials = !0), 'responseType' in
            i && g.blob && (i.responseType = 'blob'), o.headers.forEach(function(e, t) {
              i.setRequestHeader(t, e);
            }), i.send(void 0 === o._bodyInit ? null : o._bodyInit);
          });
        }, e.fetch.polyfill = !0;
      }
    }('undefined' != typeof self ? self : this);
  }, X3Bo: function(e, t, n) {
    n('+LfV'), e.exports = n('qGgm').Object.keys;
  }, XMdZ: function(e, t, n) {
    'use strict';
    var r = n('6uqe'), o = n('tF0L'), i = {
      brackets: function(e) {
        return e + '[]';
      }, indices: function(e, t) {
        return e + '[' + t + ']';
      }, repeat: function(e) {
        return e;
      },
    }, a = Date.prototype.toISOString, s = {
      delimiter: '&', encode: !0, encoder: r.encode, encodeValuesOnly: !1, serializeDate: function(e) {
        return a.call(e);
      }, skipNulls: !1, strictNullHandling: !1,
    }, u = function e(t, n, o, i, a, s, u, l, c, d, f, p) {
      var h = t;
      if ('function' == typeof u) h = u(n, h); else if (h instanceof Date) h = d(h); else if (null === h) {
        if (i) return s && !p ? s(n) : n;
        h = '';
      }
      if ('string' == typeof h || 'number' == typeof h || 'boolean' == typeof h || r.isBuffer(h)) {
        if (s) {
          return [f(p ? n : s(n)) + '=' + f(s(h))];
        }
        return [f(n) + '=' + f(String(h))];
      }
      var m = [];
      if (void 0 === h) return m;
      var v;
      if (Array.isArray(u)) v = u; else {
        var g = Object.keys(h);
        v = l ? g.sort(l) : g;
      }
      for (var y = 0; y < v.length; ++y) {
        var w = v[y];
        a && null === h[w] || (m = Array.isArray(h) ?
            m.concat(e(h[w], o(n, w), o, i, a, s, u, l, c, d, f, p)) :
            m.concat(e(h[w], n + (c ? '.' + w : '[' + w + ']'), o, i, a, s, u, l, c, d, f, p)));
      }
      return m;
    };
    e.exports = function(e, t) {
      var n = e, r = t || {};
      if (null !== r.encoder && void 0 !== r.encoder && 'function' != typeof r.encoder) throw new TypeError(
          'Encoder has to be a function.');
      var a = void 0 === r.delimiter ? s.delimiter : r.delimiter,
          l = 'boolean' == typeof r.strictNullHandling ? r.strictNullHandling : s.strictNullHandling,
          c = 'boolean' == typeof r.skipNulls ? r.skipNulls : s.skipNulls,
          d = 'boolean' == typeof r.encode ? r.encode : s.encode,
          f = 'function' == typeof r.encoder ? r.encoder : s.encoder, p = 'function' == typeof r.sort ? r.sort : null,
          h = void 0 !== r.allowDots && r.allowDots,
          m = 'function' == typeof r.serializeDate ? r.serializeDate : s.serializeDate,
          v = 'boolean' == typeof r.encodeValuesOnly ? r.encodeValuesOnly : s.encodeValuesOnly;
      if (void 0 === r.format) r.format = o.default; else if (!Object.prototype.hasOwnProperty.call(o.formatters,
              r.format)) throw new TypeError('Unknown format option provided.');
      var g, y, w = o.formatters[r.format];
      'function' == typeof r.filter ? (y = r.filter, n = y('', n)) : Array.isArray(r.filter) && (y = r.filter, g = y);
      var _ = [];
      if ('object' != typeof n || null === n) return '';
      var b;
      b = r.arrayFormat in i ? r.arrayFormat : 'indices' in r ? r.indices ? 'indices' : 'repeat' : 'indices';
      var x = i[b];
      g || (g = Object.keys(n)), p && g.sort(p);
      for (var k = 0; k < g.length; ++k) {
        var T = g[k];
        c && null === n[T] || (_ = _.concat(u(n[T], T, x, l, c, d ? f : null, y, p, h, m, w, v)));
      }
      return _.join(a);
    };
  }, 'XX4+': function(e, t) {
    function n(e) {
      return null !== e && 'object' == typeof e;
    }

    e.exports = n;
  }, Xamz: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('GF8f'), g = r(v), y = n('YWnE'), w = r(y),
        _ = n('lxt5'), b = r(_), x = function(e) {
          function t(e) {
            (0, s.default)(this, t);
            var n = (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
            return n.state = {showMsg: !1}, n;
          }

          return (0, p.default)(t, e), (0, l.default)(t, [
            {
              key: 'appendPopBanner', value: function() {
              var e = this;
              g.default.unstable_renderSubtreeIntoContainer(this, m.default.createElement(b.default, {
                handleClose: function() {
                  e.handleCloseClick();
                },
              }), this.container);
            },
            }, {
              key: 'componentDidMount', value: function() {
                !w.default.getCookieForLocal('show_msg') && this.setState({showMsg: !0});
              },
            }, {
              key: 'createContainerElement', value: function() {
                this.container = document.createElement('div'), document.body.appendChild(this.container);
              },
            }, {
              key: 'onMsgClick', value: function() {
                this.setState({showMsg: !1}), w.default.setCookieForLocal('show_msg', !0, 864e5), window.maevent(
                    'left_button', 'click'), this.createContainerElement(), this.appendPopBanner();
              },
            }, {
              key: 'handleCloseClick', value: function() {
                document.body.removeChild(this.container);
              },
            }, {
              key: 'render', value: function() {
                var e = this;
                return m.default.createElement('a', {
                  href: 'javascript:;', className: 'msg-box', onClick: function() {
                    return e.onMsgClick();
                  },
                }, this.state.showMsg && m.default.createElement('div', {className: 'circle'}));
              },
            }]), t;
        }(h.Component);
    e.exports = x;
  }, XgqU: function(e, t, n) {
    var r = n('K0Kg');
    r(r.S + r.F, 'Object', {assign: n('JBQp')});
  }, YNWe: function(e, t) {
  }, YWnE: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    function o() {
      try {
        return localStorage.setItem('test', 'test'), localStorage.removeItem('test'), !0;
      } catch (e) {
        return !1;
      }
    }

    function i(e) {
      for (var t in localStorage) {
        var n = t.split('___');
        if (3 === n.length && n[0] === e) {
          var r = parseInt(n[1]), o = parseInt(n[2]);
          if (Date.now() - r < o) return localStorage[t];
        }
      }
      return null;
    }

    function a(e, t, n) {
      for (var r in localStorage) {
        r.split('__')[0] === e && localStorage.removeItem(r);
      }
      localStorage[e + '___' + Date.now() + '___' + n] = t;
    }

    function s(e, t) {
      if (!t) return e;
      var n, r = document.createElement('a');
      return r.href = e, n = r.search ? r.search + '&' + t : '?' + t, r.protocol + '//' + r.host + r.pathname + n +
      r.hash;
    }

    function u(e) {
      for (var t = location.search, n = t.substring(1).split('&'), r = {}, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        a && (r[a.substring(0, a.indexOf('=')).toLowerCase()] = a.substring(a.indexOf('=') + 1, a.length));
      }
      if (!e) return r;
      var s = r[e.toLowerCase()];
      return s ? s.trim() : '';
    }

    function l() {
      var e = location.hash.substr(1), t = {};
      if (e) for (var n = e.split('&'), r = 0; r < n.length; r++) {
        var o = n[r].split('=');
        t[o[0]] = o[1];
      }
      if ('string' == typeof arguments[0]) return t[arguments[0]];
      if ('object' === (0, y.default)(arguments[0])) {
        for (var i in arguments[0]) t[i] = arguments[0][i];
        var a = (0, v.default)(t).map(function(e) {
          return 'h=' + t[e];
        }).join('&');
        location.href = '#' + a.substring(0, a.length - 1);
      }
    }

    function c() {
      var e = 'Other', t = window.navigator.userAgent, n = {
        Wechat: /micromessenger/,
        QQBrowser: /qqbrowser/,
        UC: /ubrowser|ucbrowser|ucweb/,
        Shoujibaidu: /baiduboxapp|baiduhd|bidubrowser|baidubrowser/,
        SamsungBrowser: /samsungbrowser/,
        MiuiBrowser: /miuibrowser/,
        Sogou: /sogoumobilebrowser|sogousearch/,
        Explorer2345: /2345explorer|2345chrome|mb2345browser/,
        Liebao: /lbbrowser/,
        Weibo: /__weibo__/,
        OPPO: /oppobrowser/,
        toutiao: /newsarticle/,
        MobileQQ: /mobile.*qq/,
        Firefox: /firefox/,
        Maxthon: /maxthon/,
        Se360: /360se/,
        Ee360: /360ee/,
        Safari: /(iphone|ipad).*version.*mobile.*safari/,
        Chrome: /chrome|crios/,
        AndroidBrowser: /android.*safari|android.*release.*browser/,
      };
      for (var r in n) if (n[r].exec(t.toLowerCase())) {
        e = r;
        break;
      }
      return e;
    }

    function d(e) {
      return (0, v.default)(e).map(function(t) {
        return [t, e[t]].join('=');
      }).join('&');
    }

    function f(e) {
      return JSON.parse((0, h.default)(e));
    }

    var p = n('p7ii'), h = r(p), m = n('mZJ8'), v = r(m), g = n('gf5I'), y = r(g), w = function(e, t, n) {
      if (void 0 === t) {
        var r = null;
        if (document.cookie && '' !== document.cookie) for (var o = document.cookie.split(';'), i = 0; i <
        o.length; i++) {
          var a = o[i].trim();
          if (a.substring(0, e.length + 1) === e + '=') {
            r = decodeURIComponent(a.substring(e.length + 1));
            break;
          }
        }
        return r;
      }
      n = n || {}, null === t && (t = '', n.expires = -1);
      var s = '';
      if (n.expires && ('number' == typeof n.expires || n.expires.toUTCString)) {
        var u;
        'number' == typeof n.expires ?
            (u = new Date, u.setTime(u.getTime() + n.expires)) :
            u = n.expires, s = '; expires=' + u.toUTCString();
      }
      var l = n.path ? '; path=' + n.path : '', c = n.domain ? '; domain=' + n.domain : '',
          d = n.secure ? '; secure' : '';
      document.cookie = [e, '=', encodeURIComponent(t), s, l, c, d].join('');
    }, _ = {
      vendor: function() {
        for (var e = ['O', 'ms', 'Moz', 'Khtml', 'Webkit', 'webkit', ''], t = document.createElement(
            'div'), n = e.length; n--;) {
          var r = e[n];
          if ((r ? r + 'Transform' : 'transform') in t.style) return r;
        }
        return null;
      }, prefix: function(e, t) {
        if (null !== _.vendor()) {
          var n = _.vendor() ? '-' + _.vendor().toLowerCase() + '-' : '', r = _.vendor() || '';
          if (t) {
            return n + e.replace(/([A-Z])/g, function(e, t) {
              return '-' + e.toLowerCase();
            });
          }
          return r +
              ('' !== _.vendor() ? e.charAt(0).toUpperCase() + e.substr(1) : e).replace(/(-[a-z])/g, function(e, t) {
                return e.charAt(1).toUpperCase();
              });
        }
      }, canRun2d: function() {
        return null !== _.vendor();
      }, canRun3d: function() {
        var e = document.createElement('div');
        if (!_.canRun2d() || !window.getComputedStyle) return !1;
        var t = _.prefix('transform');
        document.body.appendChild(e), e.style[t] = 'translate3d(1px,1px,1px)';
        var n = window.getComputedStyle(e)[t] || '';
        return document.body.removeChild(e), !!/^matrix3d\((.*)\)$/.exec(n);
      }, canRunCanvas: function() {
        var e;
        try {
          return e = document.createElement('canvas'), e.getContext('2d'), !0;
        } catch (e) {
          return !1;
        }
      }, canRunWebgl: function() {
        var e, t;
        try {
          return e = document.createElement('canvas'), t = e.getContext('webgl') ||
              e.getContext('experimental-webgl'), t.getSupportedExtensions(), !0;
        } catch (e) {
          return !1;
        }
      }, canUsePageVisibility: function() {
        return null !== _.vendor() && void 0 !== document[_.prefix('hidden')];
      },
    }, b = function() {
      return _.canUsePageVisibility() ? document[_.prefix('hidden')] ? 'hidden' : 'visible' : 'unknown';
    };
    e.exports = {
      cookie: w,
      support: _,
      pageVisible: b,
      localStorageEnabled: o,
      getCookieForLocal: i,
      setCookieForLocal: a,
      appendQuery: s,
      request: u,
      hash: l,
      getBrowserName: c,
      toQuery: d,
      cloneDeep: f,
    };
  }, 'Yyv+': function(e, t) {
  }, ZD21: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    Object.defineProperty(t, '__esModule', {value: !0});
    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('Cqu5'), w = r(y);
    n('DiDM');
    var _ = function(e) {
      function t(e) {
        (0, s.default)(this, t);
        var n = (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
        return n.state = {rotateRefreshBtn: e.rotateRefreshBtn || !1}, n;
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'componentWillReceiveProps', value: function(e) {
          this.setState({rotateRefreshBtn: e.rotateRefreshBtn});
        },
        }, {
          key: 'onRefreshBtnClick', value: function() {
            var e = this;
            this.setState({rotateRefreshBtn: !0}), setTimeout(function() {
              e.setState({rotateRefreshBtn: !1});
            }, 1e3), this.props.onRefreshClick && this.props.onRefreshClick();
          },
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props.className || '',
                n = (0, w.default)('refresh_btn', {rotate: this.state.rotateRefreshBtn});
            return m.default.createElement('div', {
              className: 'refreshBtn-container ' + t, onClick: function() {
                return e.onRefreshBtnClick();
              },
            }, m.default.createElement('i', {className: n}));
          },
        }]), t;
    }(h.Component);
    _.propTypes = {
      onRefreshClick: g.default.func,
      rotateRefreshBtn: g.default.bool,
      className: g.default.string,
    }, t.default = _;
  }, aIC1: function(e, t) {
    e.exports = function() {
      var e = [];
      return e.toString = function() {
        for (var e = [], t = 0; t < this.length; t++) {
          var n = this[t];
          n[2] ? e.push('@media ' + n[2] + '{' + n[1] + '}') : e.push(n[1]);
        }
        return e.join('');
      }, e.i = function(t, n) {
        'string' == typeof t && (t = [[null, t, '']]);
        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          'number' == typeof i && (r[i] = !0);
        }
        for (o = 0; o < t.length; o++) {
          var a = t[o];
          'number' == typeof a[0] && r[a[0]] ||
          (n && !a[2] ? a[2] = n : n && (a[2] = '(' + a[2] + ') and (' + n + ')'), e.push(a));
        }
      }, e;
    };
  }, aZsa: function(e, t, n) {
    'use strict';
    e.exports = n('zTA1');
  }, afpQ: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('J5EE'), w = r(y),
        _ = n('Cqu5'), b = r(_), x = n('H1Va'), k = function(e) {
          var t = e.datum, n = (0, b.default)('dotdot', 'line3', {'image-margin-right': t.middle_mode}),
              r = (0, b.default)('src', 'space', {recommend_label: '鐧惧害缁忛獙' === t.source}),
              o = (0, b.default)('dislike-news', 'fr', {'mid-space': t.middle_mode}),
              i = (0, b.default)('item_detail', {desc: t.middle_mode});
          return m.default.createElement('a', {
            href: 'javascript: void(0)',
            'data-action-label': t.action_label,
            'data-tag': t.tag,
            className: 'article_link clearfix ',
          }, m.default.createElement('div', {className: i},
              m.default.createElement('h3', {className: n}, t.title), t.more_mode &&
              m.default.createElement('div', {className: 'list_image'},
                  m.default.createElement('ul', {className: 'clearfix'}, t.image_list.map(function(e, t) {
                    return m.default.createElement('li', {key: t, className: 'list_img_holder'},
                        m.default.createElement(w.default, {src: e.url}));
                  }))), t.large_mode &&
              m.default.createElement('div', {className: 'list_img_holder_large list_img_holder_large_fix'},
                  m.default.createElement(w.default, {src: t.large_image_url}), t.has_video &&
                  m.default.createElement('span', {className: 'video-btn'})),
              m.default.createElement('div', {className: 'item_info'}, m.default.createElement('div', null, t.is_stick &&
                  m.default.createElement('span', {className: 'stick_label space'}, t.label || '缃《'), t.hot &&
                  m.default.createElement('span', {className: 'hot_label space'}, '鐑�'), t.recommend &&
                  m.default.createElement('span', {className: 'recommend_label space'}, '鑽�'), t.subject_label &&
                  m.default.createElement('span', {className: 'subject_label'}, ' ', t.subject_label), !t.subject_label &&
                  m.default.createElement('span', {className: r}, t.source),
                  m.default.createElement('span', {className: 'cmt space'}, '璇勮 ', t.comment_count), !t.middle_mode &&
                  m.default.createElement('span', {className: 'time', title: t.datetime}, t.timeago),
                  m.default.createElement('span', {'data-id': t.group_id, className: o})))), t.middle_mode &&
              m.default.createElement('div', {className: 'list_img_holder'},
                  m.default.createElement(w.default, {src: t.image_url}), t.has_video &&
                  m.default.createElement('span', {className: 'video-btn'})));
        };
    k.propTypes = {datum: g.default.object};
    var T = function(e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'handleClick', value: function(e) {
          window.maevent('feed', this.props.currentChannel, 'click-' + e.index), (0, x.actionLog)({
            label: e.action_label,
            value: e.group_id,
            extra_data: {item_id: e.item_id || 0},
          }), location.href = e.source_url;
        },
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props.datum;
            t.has_video &&
            (t.large_mode = !1, t.middle_mode = !0, t.image_url = t.image_url || t.large_image_url, t.image_url &&
            t.large_image_url || (t.middle_mode = !1));
            var n = (0, b.default)({middle_mode: t.middle_mode, has_action: !0, 'item-hidden': t.honey});
            return t.is_stick && 1 !== t.index ?
                null :
                m.default.createElement('section', {
                  className: n,
                  'data-hot-time': t.behot_time,
                  'data-group-id': t.group_id,
                  'data-item-id': t.item_id,
                  'data-format': '0',
                  onClick: function() {
                    return e.handleClick(t);
                  },
                }, m.default.createElement(k, {datum: t}));
          },
        }]), t;
    }(h.Component);
    T.propTypes = {datum: g.default.object, currentChannel: g.default.string}, e.exports = T;
  }, bChP: function(e, t, n) {
    'use strict';

    function r() {
    }

    function o(e) {
      !function(e, t, n, r, o, i) {
        e.ToutiaoAnalyticsObject = n, e[n] = e[n] || function() {
          (e[n].q = e[n].q || []).push(arguments);
        }, e[n].t = 1 * new Date, e[n].s = '', e[n].i = i;
        var a = t.createElement('script');
        if (a.async = 1, a.src = '//s3.bytecdn.cn/ta/resource/v0/analytics.js?v=0.1.15', t.getElementsByTagName(
                'head')[0].appendChild(a), i) {
          var s = document.createElement('iframe');
          s.style.display = 'none', s.id = 'bytedance-ba-cid-iframe', s.addEventListener('load', function() {
            this.loaded = !0;
          }, !1), s.src = i, document.getElementsByTagName('body')[0].appendChild(s);
        }
      }(window, document, 'ba', 0, 0, '//s3.bytecdn.cn/ta/resource/v0/crossDomain.html?v=0.1.15'), window.ba('create',
          e, {crossDomain: !0}), window.ba('send', 'pageview');
    }

    function i(e, t, n, r, o) {
      console.log('ba:' + e + ',' + t + ',' + n), window.ba('send', 'event',
          {eventCategory: e, eventAction: t, eventLabel: n});
    }

    function a() {
      o(u.default.browser.weixin ? '941fa8db85144e' : '2016b6cb651225'), window.baevent = i;
    }

    var s = n('gT+X'), u = function(e) {
      return e && e.__esModule ? e : {default: e};
    }(s);
    window.baevent = r, window.baeventTest = r, window.resendBA = r, e.exports = {init: a};
  }, 'bF+g': function(e, t, n) {
    var r = n('K0Kg');
    r(r.S + r.F * !n('n/J0'), 'Object', {defineProperty: n('cuVL').f});
  }, bVOP: function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e) {
        return e && e.__esModule ? e : {default: e};
      }

      function o() {
        var e = C.default.cookie('tt_webid');
        return e ? parseInt(e).toString() === e ? e : parseInt(e / Math.pow(2, 32)).toString() : null;
      }

      function i() {
        window.scrollTo(0, 0);
      }

      function a() {
        if (!E.default.browser.weixin) return !1;
        var e = C.default.request('isappinstalled') - 0, t = C.default.request('wxshare_count');
        return !(!e || t && !(t < 2));
      }

      function s(e) {
        return e.match(/https?:\/\/(m\.)?toutiao\.com\/[a|i](\d+)/i);
      }

      function u(e, t) {
        if (t = void 0 !== t && t, window.ttGTM) {
          var n = null;
          return n = window.isListPage ?
              window.ttGTM.list :
              E.default.browser.weixin ?
                  window.ttGTM.weixin :
                  window.ttGTM.detail, n = n || {}, e in n ? n[e] : t;
        }
        return t;
      }

      function l(e, t) {
        e && '?' !== e[0] && (e = '?' + e);
        var n, r;
        return n = new RegExp('[\\?&]' + encodeURIComponent(t) + '=([^&#]*)'), r = n.exec(e), null === r ?
            '' :
            decodeURIComponent(r[1].replace(/\+/g, ' '));
      }

      function c(e) {
        var t, n = {
          joke_essay: 5,
          news_article: 14,
          news_article_social: 20,
          joke_essay_social: 21,
          saying_essay_social: 22,
          explore_article: 25,
          joke_zone: 27,
          toutiaoribao: 118,
        }, r = e.app || C.default.request('app') || 'news_article', o = 1;
        return E.default.os.android && (o = 3), r.length ?
            (t = n[r], 21 !== t && 24 !== t || (t = 5), 22 === t && (t = 9), 20 === t && 3 === o && (t = 14), 'snssdk' +
            t + o + '://') :
            '';
      }

      function d(e) {
        function t(e, t) {
          var n = null;
          return t && t.isNewVideo && (n = 64), n && (e += '&flags=' + n), e;
        }

        var n = c(e), r = e.gdLabel || 'click_weixin_home', o = e.type || 'home', i = e.id, a = '';
        switch (o) {
          case'detail':
            a = n + 'detail?groupid=' + i + '&gd_label=' + r, n = t(a, e);
            break;
          case'comment':
            a = n + 'detail?groupid=' + i + '&showcomment=1&gd_label=' + r + '&gd_ext_json=' +
                (0, k.default)({enter_comment: r}), n = t(a, e);
            break;
          case'mediaProfile':
            a = n + 'media_account?media_id=' + i + '&gd_ext_json=' + (0, k.default)({event: 'pgc_profile', label: r});
            break;
          case'home':
            a = n + 'home/news?growth_from=' + r + '&gd_ext_json=' + (0, k.default)({event: 'home', label: r});
        }
        return a += '&needlaunchlog=1';
      }

      function f(e) {
        return C.default.cookie(e) || C.default.request(e) || '';
      }

      function p() {
        return {
          __type__: 'app_track',
          resolution: window.screen.availWidth * window.devicePixelRatio + '*' +
          window.screen.availHeight * window.devicePixelRatio,
          webid: o() || '',
          utm_source: f('utm_source'),
        };
      }

      function h(e) {
        var t = function(e) {
          for (var t = [], n = 0; n < e; n++) {
            var r = String.fromCharCode(Math.floor(26 * Math.random()) + 65);
            Math.ceil(10 * Math.random()) % 2 == 1 && (r = r.toLowerCase()), t.push(r);
          }
          return t.join('');
        }, n = function() {
          return Math.ceil(15 * Math.random());
        }, r = {};
        return e.forEach(function(e) {
          var o = t(n()) + t(n());
          r[e] = o;
        }), {map: r};
      }

      function m() {
        function e(e) {
          var o = document.body.scrollHeight;
          (window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) >=
          o - window.innerHeight - r && t(window).trigger('scrollBottom', e.type), 'scroll' === e.type &&
          (n && clearTimeout(n), n = setTimeout(function() {
            t(window).trigger('scrollEnd');
          }, 300));
        }

        var n, r = 100 * (window.responsive || {dpr: 1}).dpr;
        t(window).on('scroll load afterflow', e);
      }

      function v() {
        var e = o(), t = null !== e ? parseInt(e) % 10 : void 0;
        return [1, 2].indexOf(t) > -1 && t;
      }

      function g(e) {
        return fetch(e).then(function(e) {
          return e;
        }, function(e) {
          throw new Error(e);
        }).then(function(e) {
          return e.json();
        }).then(function(e) {
        });
      }

      function y(e) {
        var t = (0, b.default)({}, e,
            {gdLabel: E.default.browser.weixin ? 'click_weixin_local' : 'click_wap_local', app: 'news_article'}),
            n = d(t), r = 'open_url=' + encodeURIComponent(n), o = 'http://127.0.0.1:28192?' + r;
        return g('http://[::1]:28192?' + r).then(function(e) {
        }, function(e) {
          return g(o);
        });
      }

      function w() {
        return 'CN' === window.country_code && !(['鍖椾含', '涓婃捣', '骞垮窞', '娣卞湷'].indexOf(window.city) > -1);
      }

      var _ = n('dU2U'), b = r(_), x = n('p7ii'), k = r(x), T = n('gT+X'), E = r(T), O = n('YWnE'), C = r(O);
      n('X+OT'), n('wtgB').polyfill(), window.loadimg = function() {
      }, window.errorimg = function() {
      };
      var A = function() {
        var e = w(), t = E.default.browser.weixin && E.default.os.android, n = '';
        return e && t && (n = 'http://d.toutiao.com/y9BJ/'), n;
      }(), M = {
        scrollTop: i,
        isAppInstalled: a,
        isGroupUrl: s,
        getGTMValue: u,
        getParam: l,
        getScheme: c,
        getNativeLink: d,
        getUTMValue: f,
        getAppTrackData: p,
        confused: h,
        initScrollEvents: m,
        testAD: v,
        getTTWebID: o,
        androidLocalServer: y,
        bottomBannerSDKShortLink: A,
      };
      e.exports = M;
    }).call(t, n('gXQ3'));
  }, bgIt: function(e, t, n) {
    function r(e) {
      if (e) return o(e);
    }

    function o(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e;
    }

    e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(
          t), this;
    }, r.prototype.once = function(e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }

      return n.fn = t, this.on(e, n), this;
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(
        e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks['$' + e];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks['$' + e], this;
      for (var r, o = 0; o < n.length; o++) if ((r = n[o]) === t || r.fn === t) {
        n.splice(o, 1);
        break;
      }
      return this;
    }, r.prototype.emit = function(e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1), n = this._callbacks['$' + e];
      if (n) {
        n = n.slice(0);
        for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t)
      }
      return this;
    }, r.prototype.listeners = function(e) {
      return this._callbacks = this._callbacks || {}, this._callbacks['$' + e] || [];
    }, r.prototype.hasListeners = function(e) {
      return !!this.listeners(e).length;
    };
  }, bpTx: function(e, t, n) {
    'use strict';

    function r(e, t) {
      return e.classList ? !!t && e.classList.contains(t) : -1 !== (' ' + e.className + ' ').indexOf(' ' + t + ' ');
    }

    Object.defineProperty(t, '__esModule', {value: !0}), t.default = r, e.exports = t.default;
  }, dU2U: function(e, t, n) {
    e.exports = {default: n('RIhk'), __esModule: !0};
  }, dWRr: function(e, t) {
  }, efr4: function(e, t) {
    e.exports = function(e, t, n, r) {
      var o = n.root;
      n.root = function(e, t, n, i, a, s) {
        var u = e.getTemplate;
        e.getTemplate = function(e, t, o, i, a) {
          'function' == typeof t && (a = t = !1);
          var s = function(e) {
            try {
              return r[e];
            } catch (t) {
              if (n.get('_require')) return n.get('_require')(e);
              console.warn('Could not load template "%s"', e);
            }
          }, u = s(e);
          n.set('_require', s), t && u.compile(), a(null, u);
        }, o(e, t, n, i, a, function(t, n) {
          e.getTemplate = u, s(t, n);
        });
      };
      var i = {obj: n, type: 'code'};
      return new e.Template(i, t);
    };
  }, f3r1: function(e, t, n) {
    'use strict';
    var r = n('QTPg'), o = n('7k3f'), i = n('0hfc');
    e.exports = function() {
      function e(e, t, n, r, a, s) {
        s !== i && o(!1,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
      };
      return n.checkPropTypes = r, n.PropTypes = n, n;
    };
  }, fvPU: function(e, t, n) {
    'use strict';
    t.__esModule = !0, t.default = function(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    };
  }, hAp8: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('YWnE'), w = r(y),
        _ = n('aZsa');
    n('QLF1');
    var b = 'ttvideo' === w.default.request('activity') || 'm.ixigua.com' === location.host, x = function(e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).apply(this, arguments));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'render', value: function() {
          return m.default.createElement(_, {
            transitionName: 'refreshTip',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300,
          }, this.props.showRefreshTip &&
              m.default.createElement('p', {className: 'refresh-tip', key: 'refreshTip'}, '涓轰綘鎺ㄨ崘浜�',
                  this.props.fetchNumber, b ? '涓棰�' : '绡囨枃绔�'));
        },
        }]), t;
    }(h.Component);
    x.propTypes = {showRefreshTip: g.default.bool, fetchNumber: g.default.number}, e.exports = x;
  }, hJ6a: function(e, t, n) {
    'use strict';
    t.__esModule = !0;
    var r = n('DhyE'), o = function(e) {
      return e && e.__esModule ? e : {default: e};
    }(r);
    t.default = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), (0, o.default)(e,
              r.key, r);
        }
      }

      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }();
  }, hK0m: function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e) {
        var n = {
          downloadLink: '//d.toutiao.com/e6jY/',
          yybLink: 'tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141',
          nativeLink: '',
          universalLink: '',
          openUrl: '',
        };
        (0, i.default)(n, e || {}), 'm.toutiaoribao.cn' === location.host &&
        (n.downloadLink = 'http://d.toutiaoribao.cn/NtNA/', n.app = 'toutiaoribao');
        var r = 'click_' + (l.browser.weixin ? 'weixin' : 'wap') + '_' + (window.isListPage ? 'list' : 'detail') + '_' +
            n.pos;
        (0, i.default)(n, {gdLabel: r}), window.group_id && t.extend(!0, n,
            {id: window.group_id, type: 'detail', isNewVideo: window.isNewVideoPage}), n.nativeLink = n.nativeLink ||
            u.getNativeLink(n), l.os.ios ? l.browser.weixin ? (s.jumpToNativeapp(n), setTimeout(function() {
          a.gotoAppDownload(n);
        }, 1e3)) : (a.gotoAppDownload(n), setTimeout(function() {
          s.jumpToNativeapp(n);
        }, 1e3)) : (s.jumpToNativeapp(n), a.gotoAppDownload(n));
      }

      var o = n('dU2U'), i = function(e) {
        return e && e.__esModule ? e : {default: e};
      }(o), a = n('84PZ'), s = n('4/IU'), u = n('bVOP'), l = n('gT+X');
      e.exports = r;
    }).call(t, n('gXQ3'));
  }, kZEW: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    function o() {
      x.forEach(function(e) {
        !e.visible && a(e) && (k.push(e), e.visible = !0, e.props.onFirstInView());
      }), i();
    }

    function i() {
      k.forEach(function(e, t) {
        var n = x.indexOf(e);
        n > -1 && x.splice(n, 1);
      });
    }

    function a(e) {
      var t = w.default.findDOMNode(e), n = t.getBoundingClientRect();
      return n.top >= 0 && n.top <= (window.innerHeight || document.documentElement.clientHeight) || n.bottom >= 0 &&
          n.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    var s = n('iltz'), u = r(s), l = n('fvPU'), c = r(l), d = n('hJ6a'), f = r(d), p = n('mRYa'), h = r(p),
        m = n('IJ1K'), v = r(m), g = n('V80v'), y = (r(g), n('GF8f')), w = r(y), _ = n('nhKt'), b = r(_), x = [],
        k = [], T = function(e) {
          function t() {
            return (0, c.default)(this, t), (0, h.default)(this, (t.__proto__ || (0, u.default)(t)).apply(this, arguments));
          }

          return (0, v.default)(t, e), (0, f.default)(t, [
            {
              key: 'componentDidMount', value: function() {
              0 === x.length && window.addEventListener('scroll', o), x.push(this), o();
            },
            }, {
              key: 'componentWillUnmount', value: function() {
                var e = x.indexOf(this);
                -1 !== e && x.splice(e, 1), 0 === x.length && window.removeEventListener('scroll', o);
              },
            }, {
              key: 'render', value: function() {
                return this.props.children;
              },
            }]), t;
        }(g.Component);
    T.propTypes = {children: b.default.oneOfType([b.default.arrayOf(b.default.node), b.default.node])}, e.exports = T;
  }, lFLa: function(e, t) {
    e.exports = '//s3a.pstatp.com/growth/mobile_list/image/bonus_icon@3x_f4035aa1.png';
  }, lH70: function(e, t, n) {
    var r, o = n('3Cyt');
    r = o.currentEnv ? o.currentEnv : o.currentEnv = new o.Environment([], {autoescape: !0});
    var i = o.webpackDependencies || (o.webpackDependencies = {}), a = n('efr4');
    !function() {
      (o.nunjucksPrecompiled = o.nunjucksPrecompiled ||
          {})['app/components/ListCardAD/template.nunjucks'] = function() {
        function e(e, t, n, r, o) {
          var i = '';
          try {
            var a = null;
            if (i += '\n<i class="icon_ad">\n    <span data-show="show"\n        ad-log-extra="', i += r.suppressValue(
                    r.contextOrFrameLookup(t, n, 'log_extra'),
                    e.opts.autoescape), i += '"\n        data-track="', i += r.suppressValue(
                    r.contextOrFrameLookup(t, n, 'ad_track_url'),
                    e.opts.autoescape), i += '"\n        ad-id="', i += r.suppressValue(
                    r.contextOrFrameLookup(t, n, 'ad_id'),
                    e.opts.autoescape), i += '"\n        ad-tag="embeded_ad"\n        ad-label="', i += r.suppressValue(
                    r.contextOrFrameLookup(t, n, 'ad_label'),
                    e.opts.autoescape), i += '">\n    </span>\n</i>\n\n', r.contextOrFrameLookup(t, n,
                    'is_download_ad') || r.contextOrFrameLookup(t, n, 'is_phone_ad')) {
              if (i += '\n<div class="article_link clearfix creative_type"\n    ad-tag="{tag}}"\n    ad-url="', i += r.suppressValue(
                      r.contextOrFrameLookup(t, n, 'source_url'),
                      e.opts.autoescape), i += '"\n    ', r.contextOrFrameLookup(t, n, 'is_download_ad') &&
                  (i += 'ad-load="true"'), i += '\n    ad-id="', i += r.suppressValue(
                      r.contextOrFrameLookup(t, n, 'ad_id'),
                      e.opts.autoescape), i += '"\n    ad-log-extra="', i += r.suppressValue(
                      r.contextOrFrameLookup(t, n, 'log_extra'), e.opts.autoescape), i += '">\n\n    ', 2 ==
                  r.contextOrFrameLookup(t, n, 'image_mode') &&
                  (i += '\n    <div class="desc">\n    '), i += '\n\n    <h3 class="dotdot line3 ', 2 ==
                  r.contextOrFrameLookup(t, n, 'image_mode') &&
                  (i += 'image-margin-right'), i += '"\n        ', r.contextOrFrameLookup(t, n, 'highlight') &&
                  (i += 'highlight="', i += r.suppressValue(
                      e.getFilter('dump').call(t, r.memberLookup(r.contextOrFrameLookup(t, n, 'highlight'), 'title')),
                      e.opts.autoescape), i += '"'), i += '>\n        ', i += r.suppressValue(
                      r.contextOrFrameLookup(t, n, 'title'), e.opts.autoescape), i += '\n    </h3>\n\n    ', 4 ==
                  r.contextOrFrameLookup(t, n, 'image_mode')) {
                i += '\n    <div class="list_image">\n        <ul class="clearfix">\n            ', n = n.push();
                var s = r.contextOrFrameLookup(t, n, 'imglist');
                if (s) for (var u = s.length, l = 0; l < s.length; l++) {
                  var c = s[l];
                  n.set('img', c), n.set('loop.index', l + 1), n.set('loop.index0', l), n.set('loop.revindex', u -
                      l), n.set('loop.revindex0', u - l - 1), n.set('loop.first', 0 === l), n.set('loop.last', l === u -
                      1), n.set('loop.length',
                      u), i += '\n            <li class="list_img_holder">\n                <img src="', i += r.suppressValue(
                      r.memberLookup(c, 'url'),
                      e.opts.autoescape), i += '" onerror=\'errorimg.call(this)\' onload=\'loadimg.call(this)\'>\n            </li>\n            ';
                }
                n = n.pop(), i += '\n        </ul>\n    </div>\n    ';
              }
              i += '\n\n    ', 3 == r.contextOrFrameLookup(t, n, 'image_mode') &&
              (i += '\n    <div class="list_img_holder_large ', r.contextOrFrameLookup(t, n, 'ad_label') ||
              (i += 'list_img_holder_large_fix'), i += '">\n        <img ', r.contextOrFrameLookup(t, n, 'ad_type') ||
              (i += 'src="', i += r.suppressValue(r.contextOrFrameLookup(t, n, 'image_url'),
                  e.opts.autoescape), i += '"'), i += ' \n            onerror=\'errorimg.call(this)\'  \n            onload=\'loadimg.call(this)\' />\n        ', r.contextOrFrameLookup(
                  t, n, 'has_video') &&
              (i += '\n        <span class="video-btn"></span>\n        '), i += '\n    </div>\n\n    <div class="text_info large_info">\n        ', r.contextOrFrameLookup(
                  t, n, 'source') &&
              (i += '\n        <span class="source">', i += r.suppressValue(r.contextOrFrameLookup(t, n, 'source'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(t, n,
                  'is_download_ad') && (i += '\n        <span class="download" ad-url="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'download_url'),
                  e.opts.autoescape), i += '">绔嬪嵆涓嬭浇</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(t,
                  n, 'is_phone_ad') && (i += '\n        <span class="phone" ad-url="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'phone_number'), e.opts.autoescape), i += '">', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'button_text'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n    </div>\n    '), i += '\n\n    <div class="item_info">\n        ', r.contextOrFrameLookup(
                  t, n, 'ad_label') && (i += '\n        <span class="gg_label space">', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'ad_label'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n\n        <span class="cmt space">璇勮 ', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'comment_count'), e.opts.autoescape), i += '</span>\n\n        ', 2 ==
              !r.contextOrFrameLookup(t, n, 'image_mode') &&
              (i += '\n        <span class="time" title="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'datetime'), e.opts.autoescape), i += '">', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'timeago'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n    </div>\n\n    ', 2 ==
              r.contextOrFrameLookup(t, n, 'image_mode') &&
              (i += '\n    </div>\n    <div class="list_img_holder ">\n        <img src="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'image_url'),
                  e.opts.autoescape), i += '" onerror=\'errorimg.call(this)\'  onload=\'loadimg.call(this)\'>\n    </div>\n    '), i += '\n\n    ', 2 !=
              r.contextOrFrameLookup(t, n, 'image_mode') && 4 != r.contextOrFrameLookup(t, n, 'image_mode') ||
              (i += '\n    <div class="text_info">\n        ', r.contextOrFrameLookup(t, n, 'source') &&
              (i += '\n        <span class="source">', i += r.suppressValue(r.contextOrFrameLookup(t, n, 'source'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(t, n,
                  'is_download_ad') && (i += '\n        <span class="download" ad-url="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'download_url'),
                  e.opts.autoescape), i += '">绔嬪嵆涓嬭浇</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(t,
                  n, 'is_phone_ad') && (i += '\n        <span class="phone" ad-url="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'phone_number'), e.opts.autoescape), i += '">', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'button_text'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n    </div>\n    '), i += '\n</div>\n';
            } else {
              if (i += '\n<a href="', i += r.suppressValue(r.contextOrFrameLookup(t, n, 'source_url'),
                      e.opts.autoescape), i += '"\n    class="article_link clearfix "\n    data-action-label="', i += r.suppressValue(
                      r.contextOrFrameLookup(t, n, 'action_label'),
                      e.opts.autoescape), i += '"\n    data-tag="', i += r.suppressValue(
                      r.contextOrFrameLookup(t, n, 'tag'),
                      e.opts.autoescape), i += '">\n\n    ', r.contextOrFrameLookup(t, n, 'middle_mode') &&
                  (i += '\n    <div class="desc">\n    '), i += '\n\n    <h3 class="dotdot line3 ', r.contextOrFrameLookup(
                      t, n, 'middle_mode') && (i += 'image-margin-right'), i += '"\n        ', r.contextOrFrameLookup(t,
                      n, 'highlight') && (i += 'highlight="', i += r.suppressValue(e.getFilter('jsonify').
                          call(t, r.memberLookup(r.contextOrFrameLookup(t, n, 'highlight'), 'title')),
                      e.opts.autoescape), i += '"'), i += '>\n        ', i += r.suppressValue(
                      r.contextOrFrameLookup(t, n, 'title'),
                      e.opts.autoescape), i += '\n    </h3>\n\n    ', r.contextOrFrameLookup(t, n, 'more_mode')) {
                i += '\n    <div class="list_image">\n        <ul class="clearfix">\n            ', n = n.push();
                var d = r.contextOrFrameLookup(t, n, 'image_list');
                if (d) for (var f = d.length, p = 0; p < d.length; p++) {
                  var h = d[p];
                  n.set('img', h), n.set('loop.index', p + 1), n.set('loop.index0', p), n.set('loop.revindex', f -
                      p), n.set('loop.revindex0', f - p - 1), n.set('loop.first', 0 === p), n.set('loop.last', p === f -
                      1), n.set('loop.length',
                      f), i += '\n            <li class="list_img_holder">\n                <img src="', i += r.suppressValue(
                      r.memberLookup(h, 'url'),
                      e.opts.autoescape), i += '" onerror=\'errorimg.call(this)\' onload=\'loadimg.call(this)\'>\n            </li>\n            ';
                }
                n = n.pop(), i += '\n        </ul>\n    </div>\n    ';
              }
              i += '\n\n    ', (r.contextOrFrameLookup(t, n, 'large_mode') || 'taobao' ==
                  r.contextOrFrameLookup(t, n, 'ad_type')) &&
              (i += '\n    <div class="list_img_holder_large ', r.contextOrFrameLookup(t, n, 'ad_label') ||
              (i += 'list_img_holder_large_fix'), i += '">\n        <img ', r.contextOrFrameLookup(t, n, 'ad_type') ||
              (i += 'src="', i += r.suppressValue(r.contextOrFrameLookup(t, n, 'large_image_url'),
                  e.opts.autoescape), i += '"'), i += '\n            onerror=\'errorimg.call(this)\'\n            onload=\'loadimg.call(this)\' />\n        ', r.contextOrFrameLookup(
                  t, n, 'has_video') &&
              (i += '\n        <span class="video-btn"></span>\n        '), i += '\n    </div>\n    '), i += '\n    <div class="item_info">\n        ', r.contextOrFrameLookup(
                  t, n, 'hot') &&
              (i += '\n        <span class="hot_label space">鐑�</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(
                  t, n, 'recommend') &&
              (i += '\n        <span class="recommend_label space">鑽�</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(
                  t, n, 'subject_label') && (i += '\n        <span class="subject_label">', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'subject_label'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(t, n,
                  'ad_label') && (i += '\n        <span class="gg_label space">', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'ad_label'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n\n        ', r.contextOrFrameLookup(t, n,
                  'subject_label') ||
              (i += '\n        <span class="src space', '鐧惧害缁忛獙' == r.contextOrFrameLookup(t, n, 'source') &&
              (i += 'recommend_label'), i += '">', i += r.suppressValue(r.contextOrFrameLookup(t, n, 'source'),
                  e.opts.autoescape), i += '</span>'), i += '\n\n        <span class="cmt space">璇勮 ', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'comment_count'),
                  e.opts.autoescape), i += '</span>\n\n        ', r.contextOrFrameLookup(t, n, 'middle_mode') ||
              (i += '\n        <span class="time" title="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'datetime'), e.opts.autoescape), i += '">', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'timeago'),
                  e.opts.autoescape), i += '</span>\n        '), i += '\n\n        <span data-id="', i += r.suppressValue(
                  r.contextOrFrameLookup(t, n, 'group_id'),
                  e.opts.autoescape), i += '"\n            class="dislike-news ', r.contextOrFrameLookup(t, n,
                  'middle_mode') &&
              (i += 'mid-space'), i += ' fr">\n        </span>\n    </div>\n    ', r.contextOrFrameLookup(t, n,
                  'middle_mode') &&
              (i += '\n    </div>\n    <div class="list_img_holder">\n        <img ', r.contextOrFrameLookup(t, n,
                  'ad_type') || (i += 'src="', i += r.suppressValue(r.contextOrFrameLookup(t, n, 'image_url'),
                  e.opts.autoescape), i += '"'), i += '\n            onerror=\'errorimg.call(this)\'\n            onload=\'loadimg.call(this)\'/>\n        ', r.contextOrFrameLookup(
                  t, n, 'has_video') &&
              (i += '\n        <span class="video-btn"></span>\n        '), i += '\n    </div>\n    '), i += '\n';
            }
            i += '\n</a>\n', a ? a.rootRenderFunc(e, t, n, r, o) : o(null, i);
          } catch (e) {
            o(r.handleError(e, null, null));
          }
        }

        return {root: e};
      }();
    }(), e.exports = a(o, r, o.nunjucksPrecompiled['app/components/ListCardAD/template.nunjucks'], i);
  }, lxt5: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = n('hK0m'), w = r(y);
    n('dWRr');
    var _ = function(e) {
      function t(e) {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
      }

      return (0, p.default)(t, e), (0, l.default)(t, [
        {
          key: 'handleClose', value: function() {
          window.maevent('left_top', 'close', ''), this.props.handleClose();
        },
        }, {
          key: 'handleDownload', value: function() {
            window.maevent('left_top', 'download'), (0, w.default)({downloadLink: '//d.toutiao.com/2ePc/'});
          },
        }, {
          key: 'render', value: function() {
            var e = this;
            return m.default.createElement('div', {id: 'pageletPopupBanner', className: 'tt-modal'},
                m.default.createElement('div', {className: 'popup'},
                    m.default.createElement('div', {className: 'banner'}),
                    m.default.createElement('p', null, '宸插姞杞藉ソ鎮ㄦ劅鍏磋叮鐨勫ご鏉�'), m.default.createElement('div', {
                      className: 'download-btn', 'data-node': 'downloadBtn', onClick: function() {
                        return e.handleDownload();
                      },
                    }, '绔嬪嵆鎵撳紑'), m.default.createElement('div', {
                      className: 'close', 'data-node': 'close', onClick: function() {
                        e.handleClose();
                      },
                    })));
          },
        }]), t;
    }(h.Component);
    _.propTypes = {handleClose: g.default.func}, e.exports = _;
  }, mJKx: function(e, t, n) {
    n('HjcX');
    var r = n('qGgm').Object;
    e.exports = function(e, t) {
      return r.create(e, t);
    };
  }, mRYa: function(e, t, n) {
    'use strict';
    t.__esModule = !0;
    var r = n('gf5I'), o = function(e) {
      return e && e.__esModule ? e : {default: e};
    }(r);
    t.default = function(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' !== (void 0 === t ? 'undefined' : (0, o.default)(t)) && 'function' != typeof t ? e : t;
    };
  }, mZJ8: function(e, t, n) {
    e.exports = {default: n('X3Bo'), __esModule: !0};
  }, 'n4+h': function(e, t) {
    e.exports = '//s3a.pstatp.com/growth/mobile_list/image/wap_bonus@3x_74f1994d.png';
  }, nbcz: function(e, t) {
    e.exports = function() {
      for (var e = arguments.length, t = [], n = 0; n < e; n++) t[n] = arguments[n];
      if (t = t.filter(function(e) {
            return null != e;
          }), 0 !== t.length) return 1 === t.length ? t[0] : t.reduce(function(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      });
    };
  }, nhKt: function(e, t, n) {
    e.exports = n('f3r1')();
  }, oFNu: function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e) {
        return e && e.__esModule ? e : {default: e};
      }

      function o(e) {
        var t = e.cache_key || 'listArticleReact___all__', n = e.data || [];
        try {
          localStorage[t] = (0, b.default)(n), localStorage[t + '_lastmodified'] = +new Date;
        } catch (e) {
          console.log('娴忚鍣ㄥ凡绂佺敤localStorage!');
        }
      }

      function i(e) {
        var t = e.cache_key, n = e.listData, r = e.channel;
        if (!t) return !1;
        if (n[r]) return !1;
        if (!Y.default.localStorageEnabled) return !1;
        if (!localStorage.getItem(t)) return !1;
        var o = Number(localStorage.getItem(t + '_lastmodified' || 0)), i = +new Date - o;
        return !('number' != typeof o || i >= 6e5);
      }

      var a = n('KC+J'), s = r(a), u = n('mZJ8'), l = r(u), c = n('iltz'), d = r(c), f = n('fvPU'), p = r(f),
          h = n('hJ6a'), m = r(h), v = n('mRYa'), g = r(v), y = n('IJ1K'), w = r(y), _ = n('p7ii'), b = r(_),
          x = n('V80v'), k = r(x), T = n('nhKt'), E = r(T), O = n('2SGS'), C = r(O), A = n('xDfE'), M = r(A),
          L = n('RvJg'), S = r(L), j = n('BQpG'), N = r(j), D = n('wFHU'), R = r(D), P = n('FpI8'), F = r(P),
          I = n('8ICI'), B = r(I), U = n('hAp8'), V = r(U), q = n('6+Kz'), W = r(q), K = n('+YOn'), H = r(K),
          G = n('YWnE'), Y = r(G), J = n('LC85'), z = r(J), X = n('1+Ds'), Q = n('Pekt'), $ = r(Q), Z = n('0wW8'),
          ee = r(Z), te = n('bVOP'), ne = r(te), re = n('FKII'), oe = r(re);
      n('Fsns'), n('s+Cy'), n('YNWe'), n('+6Wo');
      var ie = function(e) {
        function n(e) {
          (0, p.default)(this, n);
          var t = (0, g.default)(this, (n.__proto__ || (0, d.default)(n)).call(this, e));
          return (0, H.default)(), t.channelCategoryList = t.props.topMenuInfo.list, t.defaultCategory = t.props.topMenuInfo.defaultCategory, t.state = {
            GTMValue: {},
            tabList: t.getTabs(),
            defaultChannel: t.getInitCurrentChannel(),
            currentChannel: '',
            listData: {},
            fetchNumber: 0,
            showRefreshTip: !1,
            fetchTips: X.NETWORKTIPS.LOADING,
            doADTest: {position: 0, doADTest: !1},
            showAuditInfo: !1,
          }, t.channelScrollPosition = {}, t.fetchLock = !1, t;
        }

        return (0, w.default)(n, e), (0, m.default)(n, [
          {
            key: 'getTabs', value: function() {
            var e = this, t = Y.default.localStorageEnabled() ? localStorage.menuDefaults : '';
            return (t ? t.split(',') : (0, l.default)(this.channelCategoryList).slice(0, 12)).reduce(function(t, n) {
              if (e.channelCategoryList[n]) return t[n] = e.channelCategoryList[n], t;
            }, {});
          },
          }, {
            key: 'getInitCurrentChannel', value: function() {
              var e = Y.default.hash('channel') || Y.default.request('channel') || this.defaultCategory;
              return -1 === (0, l.default)(this.channelCategoryList).indexOf(e) && (e = this.defaultCategory), -1 ===
              (0, l.default)(this.getTabs()).indexOf(e) && (e = this.defaultCategory), window.maevent('channel', e,
                  ''), e;
            },
          }, {
            key: 'changeHash', value: function(e, t) {
              var n = function() {
                var e = [], t = Y.default.request();
                for (var n in t) 'channel' !== n && e.push([n, encodeURIComponent(t[n])].join('='));
                return e.join('&') || '';
              }(), r = (n ? n + '&' : '') + [t, t].join('#');
              history.replaceState ?
                  history.replaceState({channel: e}, null, location.pathname + '?' + r) :
                  location.hash = t;
            },
          }, {
            key: 'shouldFetchListData', value: function(e, t) {
              if (i({cache_key: 'listArticleReact_' + e, listData: t, channel: e})) {
                var n = JSON.parse(localStorage.getItem('listArticleReact_' + e));
                return t[e] = n, this.setState({listData: t}), !1;
              }
              return !this.fetchLock;
            },
          }, {
            key: 'fetchListData', value: function(e, n) {
              var r = this;
              this.fetchLock = !0;
              var i = this.state.listData, a = n ? n.direction || 'prepend' : 'prepend', s = i[e] || [], u = 0, l = 0;
              s.length && (u = s[s.length - 1].behot_time, l = s[0].behot_time);
              var c = {
                tag: e,
                ac: 'wap',
                count: 20,
                format: 'json_raw',
                as: (0, ee.default)().as,
                cp: (0, ee.default)().cp,
                max_behot_time: 'append' === a ? u : void 0,
                min_behot_time: 'prepend' === a ? l : void 0,
              };
              z.default.get('/list/?' + $.default.stringify(c)).end(function(n, u) {
                if (r.fetchLock = !1, n) return r.setState({fetchTips: X.NETWORKTIPS.RETRY}), null;
                var l = JSON.parse(u.text);
                if (0 === l.return_count) return r.setState({fetchTips: X.NETWORKTIPS.RECOMMENDEMPTY}), null;
                var c = l.data;
                r.state.doADTest.doADTest && c.splice(r.state.doADTest.position - 1, 0, {doADTest: !0}), o(
                    {cache_key: 'listArticleReact_' + (e || '__all__'), data: c}), 'append' === a ?
                    (s = [].concat(s, c), window.refreshCount ?
                        window.refreshCount = window.refreshCount + 1 :
                        window.refreshCount = 1) :
                    'prepend' === a && (s = [].concat(c, s)), 'prepend' === a &&
                (r.setState({showRefreshTip: !0}), setTimeout(function() {
                  r.setState({showRefreshTip: !1});
                }, 2e3), ne.default.scrollTop()), setTimeout(function() {
                  t(window).trigger('load');
                }, 300), i[e] = s, r.setState(
                    {listData: i, fetchNumber: l.return_count, fetchTips: X.NETWORKTIPS.LOADING});
              });
            },
          }, {
            key: 'fetchListDataIfNeed', value: function(e, t) {
              var n = this;
              this.shouldFetchListData(e, this.state.listData) &&
              (this.setState({rotateRefreshBtn: !0}), setTimeout(function() {
                n.setState({rotateRefreshBtn: !1});
              }, 1e3), this.fetchListData(e, t));
            },
          }, {
            key: 'handleRefreshBtnClick', value: function(e, t) {
              var n = e || this.state.currentChannel;
              this.shouldFetchListData(n, this.state.listData) &&
              this.fetchListData(n, t), oe.default.scrollChangeDisable = !0, window.maevent('refresh', 'click');
            },
          }, {
            key: 'handleMenuClick', value: function(e, t) {
              this.state.listData[e] || this.fetchListDataIfNeed(e), this.changeHash(e,
                  t), this.changeChannelScrollPosition(e), this.setState({currentChannel: e}), window.maevent('channel',
                  e, '');
            },
          }, {
            key: 'changeChannelScrollPosition', value: function(e) {
              var t = this.state.currentChannel;
              this.channelScrollPosition[t] = window.scrollY, window.scrollTo(0, this.channelScrollPosition[e] || 0);
            },
          }, {
            key: 'handleMoreClick', value: function() {
              window.location = Y.default.appendQuery('/channels/', 'need_open_window=1'), window.maevent('channel',
                  'channel_more');
            },
          }, {
            key: 'getListData', value: function(e) {
              this.fetchListDataIfNeed(this.state.currentChannel, e);
            },
          }, {
            key: 'handleScroll', value: function(e) {
              'append' === e && ne.default.checkReferrer && window.refreshCount >= 20 ||
              this.getListData({direction: e});
            },
          }, {
            key: 'handleAddADMaterial', value: function(e) {
              var t = this.state, n = t.listData;
              n[t.currentChannel].splice(e.pos, 0, {showAdMaterial: !0, adMaterial: e.adMaterial}), this.setState(
                  {listData: n}), this.fetchListData();
            },
          }, {
            key: 'handleLoadGTMScript', value: function(e) {
              this.setState({GTMValue: e});
            },
          }, {
            key: 'handleDoADTest', value: function(e) {
              this.setState({doADTest: {position: e, doADTest: !0}});
            },
          }, {
            key: 'componentWillMount', value: function() {
              var e = this.state.defaultChannel;
              this.setState({currentChannel: e});
            },
          }, {
            key: 'componentDidMount', value: function() {
              this.fetchListDataIfNeed(this.state.defaultChannel);
            },
          }, {
            key: 'render', value: function() {
              var e = this, t = this.state.GTMValue.hideTopBar, n = this.state, r = n.tabList, o = n.currentChannel,
                  i = n.listData, a = n.fetchNumber, u = n.showRefreshTip, l = n.fetchTips, c = n.rotateRefreshBtn,
                  d = n.GTMValue;
              this.props.isLite && (t = !1);
              var f = this.props.Header || C.default, p = this.props.TopMenu || M.default,
                  h = this.props.MainContent || S.default, m = this.props.DownloadBanner || N.default;
              return k.default.createElement('div', {
                id: 'indexContainer',
                className: 'indexContainer ' + (t ? 'hideHeader ' : 'withHeader ') + (this.props.className || ''),
              }, k.default.createElement(f, (0, s.default)({
                GTMValue: d, rotateRefreshBtn: c, onRefreshBtnClick: function() {
                  e.handleRefreshBtnClick();
                }, onClickShowAuditInfo: function() {
                  return e.setState({showAuditInfo: !e.state.showAuditInfo});
                }, showAuditInfo: this.state.showAuditInfo,
              }, this.props)), this.state.showAuditInfo ?
                  k.default.createElement(W.default, null) :
                  k.default.createElement('div', null, k.default.createElement(p, {
                        GTMValue: d, tabList: r, defaultChannel: this.state.defaultChannel, onMenuClick: function(t, n) {
                          e.handleMenuClick(t, n);
                        }, onMoreClick: function() {
                          e.handleMoreClick();
                        },
                      }), a ? k.default.createElement(V.default, {fetchNumber: a, showRefreshTip: u}) : null,
                      k.default.createElement(R.default, {
                        handleScroll: function(t) {
                          return e.handleScroll(t);
                        },
                      }, k.default.createElement(h, {
                        GTMValue: d, listData: i[o] || [], tips: l, currentChannel: o, addADMaterial: function(t) {
                          e.handleAddADMaterial(t);
                        },
                      })), !this.props.hideBonus && k.default.createElement(F.default, {GTMValue: d}),
                      k.default.createElement(B.default, {
                        loadGTMScript: function(t) {
                          e.handleLoadGTMScript(t);
                        },
                      }), !this.props.hideDownloadBanner && k.default.createElement(m, null)));
            },
          }]), n;
      }(x.Component);
      ie.propTypes = {
        topMenuInfo: E.default.object,
        GTMValue: E.default.object,
        className: E.default.string,
        hideBonus: E.default.bool,
        hideDownloadBanner: E.default.bool,
        isLite: E.default.bool,
        Header: E.default.func,
        TopMenu: E.default.func,
        MainContent: E.default.func,
        DownloadBanner: E.default.func,
      }, e.exports = ie;
    }).call(t, n('gXQ3'));
  }, p7ii: function(e, t, n) {
    e.exports = {default: n('Jfdv'), __esModule: !0};
  }, pcGs: function(e, t, n) {
    function r(e) {
      if (e) return o(e);
    }

    function o(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e;
    }

    var i = n('CDT0');
    e.exports = r, r.prototype.get = function(e) {
      return this.header[e.toLowerCase()];
    }, r.prototype._setHeaderProperties = function(e) {
      var t = e['content-type'] || '';
      this.type = i.type(t);
      var n = i.params(t);
      for (var r in n) this[r] = n[r];
      this.links = {};
      try {
        e.link && (this.links = i.parseLinks(e.link));
      } catch (e) {
      }
    }, r.prototype._setStatusProperties = function(e) {
      var t = e / 100 | 0;
      this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 ==
          t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) &&
          this.toError(), this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 ==
          e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 ==
          e, this.notFound = 404 == e;
    };
  }, rCoH: function(e, t, n) {
    'use strict';

    function r(e) {
      var t = (new Date).getTime(), n = Math.max(0, 16 - (t - d)), r = setTimeout(e, n);
      return d = t, r;
    }

    Object.defineProperty(t, '__esModule', {value: !0});
    var o = n('1P2o'), i = function(e) {
      return e && e.__esModule ? e : {default: e};
    }(o), a = ['', 'webkit', 'moz', 'o', 'ms'], s = 'clearTimeout', u = r, l = void 0, c = function(e, t) {
      return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + 'AnimationFrame';
    };
    i.default && a.some(function(e) {
      var t = c(e, 'request');
      if (t in window) return s = c(e, 'cancel'), u = function(e) {
        return window[t](e);
      };
    });
    var d = (new Date).getTime();
    l = function(e) {
      return u(e);
    }, l.cancel = function(e) {
      window[s] && 'function' == typeof window[s] && window[s](e);
    }, t.default = l, e.exports = t.default;
  }, raPt: function(e, t) {
    var n = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
    e.exports = function(e, t) {
      return !!(e && e.code && ~n.indexOf(e.code)) || (!!(t && t.status && t.status >= 500) ||
          (!!(e && 'timeout' in e && 'ECONNABORTED' == e.code) || !!(e && 'crossDomain' in e)));
    };
  }, 's+Cy': function(e, t) {
  }, sfAD: function(e, t, n) {
    'use strict';

    function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }

    e.exports = function(e, t, n, i) {
      t = t || '&', n = n || '=';
      var a = {};
      if ('string' != typeof e || 0 === e.length) return a;
      var s = /\+/g;
      e = e.split(t);
      var u = 1e3;
      i && 'number' == typeof i.maxKeys && (u = i.maxKeys);
      var l = e.length;
      u > 0 && l > u && (l = u);
      for (var c = 0; c < l; ++c) {
        var d, f, p, h, m = e[c].replace(s, '%20'), v = m.indexOf(n);
        v >= 0 ? (d = m.substr(0, v), f = m.substr(v + 1)) : (d = m, f = ''), p = decodeURIComponent(
            d), h = decodeURIComponent(f), r(a, p) ? o(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h;
      }
      return a;
    };
    var o = Array.isArray || function(e) {
      return '[object Array]' === Object.prototype.toString.call(e);
    };
  }, tF0L: function(e, t, n) {
    'use strict';
    var r = String.prototype.replace, o = /%20/g;
    e.exports = {
      default: 'RFC3986', formatters: {
        RFC1738: function(e) {
          return r.call(e, o, '+');
        }, RFC3986: function(e) {
          return e;
        },
      }, RFC1738: 'RFC1738', RFC3986: 'RFC3986',
    };
  }, wFHU: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('iltz'), i = r(o), a = n('fvPU'), s = r(a), u = n('hJ6a'), l = r(u), c = n('mRYa'), d = r(c),
        f = n('IJ1K'), p = r(f), h = n('V80v'), m = r(h), v = n('nhKt'), g = r(v), y = function(e) {
          function t() {
            (0, s.default)(this, t);
            var e = (0, d.default)(this, (t.__proto__ || (0, i.default)(t)).call(this));
            return e.handleScroll = e.handleScroll.bind(e), e.handleTouchStart = e.handleTouchStart.bind(
                e), e.handleTouchEnd = e.handleTouchEnd.bind(e), e.state = {scrollY: 0, touchStartY: 0}, e;
          }

          return (0, p.default)(t, e), (0, l.default)(t, [
            {
              key: 'componentDidMount', value: function() {
              window.addEventListener('scroll', this.handleScroll), window.addEventListener('touchstart',
                  this.handleTouchStart), window.addEventListener('touchend', this.handleTouchEnd);
            },
            }, {
              key: 'componentWillUnmount', value: function() {
                window.removeEventListener('scroll', this.handleScroll), window.removeEventListener('touchstart',
                    this.handleTouchStart), window.removeEventListener('touchend', this.handleTouchEnd);
              },
            }, {
              key: 'handleScroll', value: function(e) {
                var t = 100 * (window.responsive || {dpr: 1}).dpr, n = document.body.scrollHeight;
                (window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) >=
                n - window.innerHeight - t && this.props.handleScroll('append');
              },
            }, {
              key: 'handleTouchStart', value: function(e) {
                var t = e.changedTouches[0].clientY;
                this.setState({touchStartY: t});
                var n = window.scrollY || window.pageYOffset || document.body.scrollTop ||
                    document.documentElement.scrollTop;
                this.setState({scrollY: n});
              },
            }, {
              key: 'handleTouchEnd', value: function(e) {
                var t = e.changedTouches[0].clientY;
                if (this.state.scrollY <= 0) {
                  t - this.state.touchStartY > 100 && (e.preventDefault(), this.props.handleScroll('prepend'));
                }
              },
            }, {
              key: 'render', value: function() {
                return m.default.createElement('div', null, this.props.children);
              },
            }]), t;
        }(h.Component);
    y.propTypes = {
      handleScroll: g.default.func,
      children: g.default.oneOfType([g.default.arrayOf(g.default.node), g.default.node]),
    }, y.defaultProps = {
      handleScroll: function() {
      },
    }, e.exports = y;
  }, wYmI: function(e, t, n) {
    var r = n('OPoG'), o = n('5z3G'), i = function(e, t) {
      if (o(e), !r(t) && null !== t) throw TypeError(t + ': can\'t set as prototype!');
    };
    e.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? function(e, t, r) {
        try {
          r = n('QgN4')(Function.call, n('faNU').f(Object.prototype, '__proto__').set, 2), r(e, []), t = !(e instanceof
              Array);
        } catch (e) {
          t = !0;
        }
        return function(e, n) {
          return i(e, n), t ? e.__proto__ = n : r(e, n), e;
        };
      }({}, !1) : void 0), check: i,
    };
  }, wtgB: function(e, t, n) {
    (function(t, r) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
      !function(t, n) {
        e.exports = n();
      }(0, function() {
        'use strict';

        function e(e) {
          var t = typeof e;
          return null !== e && ('object' === t || 'function' === t);
        }

        function o(e) {
          return 'function' == typeof e;
        }

        function i(e) {
          H = e;
        }

        function a(e) {
          G = e;
        }

        function s() {
          return void 0 !== K ? function() {
            K(l);
          } : u();
        }

        function u() {
          var e = setTimeout;
          return function() {
            return e(l, 1);
          };
        }

        function l() {
          for (var e = 0; e < W; e += 2) {
            (0, $[e])($[e + 1]), $[e] = void 0, $[e + 1] = void 0;
          }
          W = 0;
        }

        function c(e, t) {
          var n = arguments, r = this, o = new this.constructor(f);
          void 0 === o[ee] && S(o);
          var i = r._state;
          return i ? function() {
            var e = n[i - 1];
            G(function() {
              return A(i, o, e, r._result);
            });
          }() : T(r, o, e, t), o;
        }

        function d(e) {
          var t = this;
          if (e && 'object' == typeof e && e.constructor === t) return e;
          var n = new t(f);
          return _(n, e), n;
        }

        function f() {
        }

        function p() {
          return new TypeError('You cannot resolve a promise with itself');
        }

        function h() {
          return new TypeError('A promises callback cannot return that same promise.');
        }

        function m(e) {
          try {
            return e.then;
          } catch (e) {
            return oe.error = e, oe;
          }
        }

        function v(e, t, n, r) {
          try {
            e.call(t, n, r);
          } catch (e) {
            return e;
          }
        }

        function g(e, t, n) {
          G(function(e) {
            var r = !1, o = v(n, t, function(n) {
              r || (r = !0, t !== n ? _(e, n) : x(e, n));
            }, function(t) {
              r || (r = !0, k(e, t));
            }, 'Settle: ' + (e._label || ' unknown promise'));
            !r && o && (r = !0, k(e, o));
          }, e);
        }

        function y(e, t) {
          t._state === ne ? x(e, t._result) : t._state === re ? k(e, t._result) : T(t, void 0, function(t) {
            return _(e, t);
          }, function(t) {
            return k(e, t);
          });
        }

        function w(e, t, n) {
          t.constructor === e.constructor && n === c && t.constructor.resolve === d ?
              y(e, t) :
              n === oe ?
                  (k(e, oe.error), oe.error = null) :
                  void 0 === n ?
                      x(e, t) :
                      o(n) ?
                          g(e, t, n) :
                          x(e, t);
        }

        function _(t, n) {
          t === n ? k(t, p()) : e(n) ? w(t, n, m(n)) : x(t, n);
        }

        function b(e) {
          e._onerror && e._onerror(e._result), E(e);
        }

        function x(e, t) {
          e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && G(E, e));
        }

        function k(e, t) {
          e._state === te && (e._state = re, e._result = t, G(b, e));
        }

        function T(e, t, n, r) {
          var o = e._subscribers, i = o.length;
          e._onerror = null, o[i] = t, o[i + ne] = n, o[i + re] = r, 0 === i && e._state && G(E, e);
        }

        function E(e) {
          var t = e._subscribers, n = e._state;
          if (0 !== t.length) {
            for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) r = t[a], o = t[a + n], r ?
                A(n, r, o, i) :
                o(i);
            e._subscribers.length = 0;
          }
        }

        function O() {
          this.error = null;
        }

        function C(e, t) {
          try {
            return e(t);
          } catch (e) {
            return ie.error = e, ie;
          }
        }

        function A(e, t, n, r) {
          var i = o(n), a = void 0, s = void 0, u = void 0, l = void 0;
          if (i) {
            if (a = C(n, r), a === ie ? (l = !0, s = a.error, a.error = null) : u = !0, t === a) return void k(t, h());
          } else a = r, u = !0;
          t._state !== te || (i && u ? _(t, a) : l ? k(t, s) : e === ne ? x(t, a) : e === re && k(t, a));
        }

        function M(e, t) {
          try {
            t(function(t) {
              _(e, t);
            }, function(t) {
              k(e, t);
            });
          } catch (t) {
            k(e, t);
          }
        }

        function L() {
          return ae++;
        }

        function S(e) {
          e[ee] = ae++, e._state = void 0, e._result = void 0, e._subscribers = [];
        }

        function j(e, t) {
          this._instanceConstructor = e, this.promise = new e(f), this.promise[ee] || S(this.promise), q(t) ?
              (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 ===
              this.length ?
                  x(this.promise, this._result) :
                  (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining &&
                  x(this.promise, this._result))) :
              k(this.promise, N());
        }

        function N() {
          return new Error('Array Methods must be provided an Array');
        }

        function D(e) {
          return new j(this, e).promise;
        }

        function R(e) {
          var t = this;
          return new t(q(e) ? function(n, r) {
            for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
          } : function(e, t) {
            return t(new TypeError('You must pass an array to race.'));
          });
        }

        function P(e) {
          var t = this, n = new t(f);
          return k(n, e), n;
        }

        function F() {
          throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
        }

        function I() {
          throw new TypeError(
              'Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
        }

        function B(e) {
          this[ee] = L(), this._result = this._state = void 0, this._subscribers = [], f !== e &&
          ('function' != typeof e && F(), this instanceof B ? M(this, e) : I());
        }

        function U() {
          var e = void 0;
          if (void 0 !== r) e = r; else if ('undefined' != typeof self) e = self; else try {
            e = Function('return this')();
          } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
          }
          var t = e.Promise;
          if (t) {
            var n = null;
            try {
              n = Object.prototype.toString.call(t.resolve());
            } catch (e) {
            }
            if ('[object Promise]' === n && !t.cast) return;
          }
          e.Promise = B;
        }

        var V = void 0;
        V = Array.isArray ? Array.isArray : function(e) {
          return '[object Array]' === Object.prototype.toString.call(e);
        };
        var q = V, W = 0, K = void 0, H = void 0, G = function(e, t) {
              $[W] = e, $[W + 1] = t, 2 === (W += 2) && (H ? H(l) : Z());
            }, Y = 'undefined' != typeof window ? window : void 0, J = Y || {},
            z = J.MutationObserver || J.WebKitMutationObserver,
            X = 'undefined' == typeof self && void 0 !== t && '[object process]' === {}.toString.call(t),
            Q = 'undefined' != typeof Uint8ClampedArray && 'undefined' != typeof importScripts && 'undefined' !=
                typeof MessageChannel, $ = new Array(1e3), Z = void 0;
        Z = X ? function() {
          return function() {
            return t.nextTick(l);
          };
        }() : z ? function() {
          var e = 0, t = new z(l), n = document.createTextNode('');
          return t.observe(n, {characterData: !0}), function() {
            n.data = e = ++e % 2;
          };
        }() : Q ? function() {
          var e = new MessageChannel;
          return e.port1.onmessage = l, function() {
            return e.port2.postMessage(0);
          };
        }() : void 0 === Y ? function() {
          try {
            var e = n(0);
            return K = e.runOnLoop || e.runOnContext, s();
          } catch (e) {
            return u();
          }
        }() : u();
        var ee = Math.random().toString(36).substring(16), te = void 0, ne = 1, re = 2, oe = new O, ie = new O, ae = 0;
        return j.prototype._enumerate = function(e) {
          for (var t = 0; this._state === te && t < e.length; t++) this._eachEntry(e[t], t)
        }, j.prototype._eachEntry = function(e, t) {
          var n = this._instanceConstructor, r = n.resolve;
          if (r === d) {
            var o = m(e);
            if (o === c && e._state !== te) this._settledAt(e._state, t, e._result); else if ('function' !=
                typeof o) this._remaining--, this._result[t] = e; else if (n === B) {
              var i = new n(f);
              w(i, e, o), this._willSettleAt(i, t);
            } else this._willSettleAt(new n(function(t) {
              return t(e);
            }), t);
          } else this._willSettleAt(r(e), t);
        }, j.prototype._settledAt = function(e, t, n) {
          var r = this.promise;
          r._state === te && (this._remaining--, e === re ? k(r, n) : this._result[t] = n), 0 === this._remaining &&
          x(r, this._result);
        }, j.prototype._willSettleAt = function(e, t) {
          var n = this;
          T(e, void 0, function(e) {
            return n._settledAt(ne, t, e);
          }, function(e) {
            return n._settledAt(re, t, e);
          });
        }, B.all = D, B.race = R, B.resolve = d, B.reject = P, B._setScheduler = i, B._setAsap = a, B._asap = G, B.prototype = {
          constructor: B,
          then: c,
          catch: function(e) {
            return this.then(null, e);
          },
        }, B.polyfill = U, B.Promise = B, B;
      });
    }).call(t, n('WI/o'), n('dTv7'));
  }, xDfE: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    var o = n('mZJ8'), i = r(o), a = n('iltz'), s = r(a), u = n('fvPU'), l = r(u), c = n('hJ6a'), d = r(c),
        f = n('mRYa'), p = r(f), h = n('IJ1K'), m = r(h), v = n('V80v'), g = r(v), y = n('nhKt'), w = r(y),
        _ = n('Cqu5'), b = r(_);
    n('RfGB');
    var x = function(e) {
      function t(e) {
        (0, l.default)(this, t);
        var n = (0, p.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e));
        return n.state = {currentChannel: e.defaultChannel}, n;
      }

      return (0, m.default)(t, e), (0, d.default)(t, [
        {
          key: 'onMenuClick', value: function(e) {
          var t = e.currentTarget.dataset.channel, n = e.currentTarget.dataset.query;
          this.setState({currentChannel: t}), this.props.onMenuClick && this.props.onMenuClick(t, n), e.preventDefault();
        },
        }, {
          key: 'onMoreClick', value: function(e) {
            this.props.onMoreClick && this.props.onMoreClick(), e.preventDefault();
          },
        }, {
          key: 'componentDidMount', value: function() {
            var e = this.state.currentChannel, t = this._topMenuList.querySelector('[data-channel="' + e + '"]');
            this.doTabSwitch(t);
          },
        }, {
          key: 'componentDidUpdate', value: function() {
            var e = this.state.currentChannel, t = this._topMenuList.querySelector('[data-channel="' + e + '"]');
            this.doTabSwitch(t);
          },
        }, {
          key: 'doTabSwitch', value: function(e) {
            var t = e.parentNode, n = e, r = document.body.clientWidth, o = t.clientWidth, i = t.scrollWidth,
                a = t.scrollLeft, s = n.clientWidth, u = n.getBoundingClientRect().left, l = void 0;
            l = u + a <= o / 2 - s / 2 ?
                0 :
                u + a > i - o / 2 - s / 2 ?
                    Math.max(i - o, 0) :
                    -r / 2 + s / 2 + u + a, t.scrollLeft = l;
          },
        }, {
          key: 'render', value: function() {
            var e = this, t = this.props.tabList, n = this.props.GTMValue || {},
                r = n.hideTopMenuMore || this.props.hideTopMenuMore, o = this.props.className || '';
            return g.default.createElement('div', {className: 'top_menu_bar ' + o}, r ?
                null :
                g.default.createElement('div', {className: 'top_menu_more'},
                    g.default.createElement('div', {className: 'list_shadow'}), g.default.createElement('a', {
                      className: 'more_btn', href: 'javascript:void(0)', onClick: function(t) {
                        return e.onMoreClick(t);
                      },
                    }, g.default.createElement('span', {className: 'cross'}))), g.default.createElement('div', {
              className: 'top_menu_list', ref: function(t) {
                e._topMenuList = t;
              },
            }, (0, i.default)(t).map(function(n) {
              var r = (0, b.default)('btn', {cur: n === e.state.currentChannel});
              return g.default.createElement('a', {
                href: 'javascript:void(0)',
                key: n,
                'data-channel': n,
                'data-query': 'channel=' + n,
                className: r,
                onClick: function(t) {
                  return e.onMenuClick(t);
                },
              }, t[n]);
            })));
          },
        }]), t;
    }(v.Component);
    x.propTypes = {
      defaultChannel: w.default.string,
      tabList: w.default.object,
      GTMValue: w.default.object,
      onMenuClick: w.default.func,
      onMoreClick: w.default.func,
      hideTopMenuMore: w.default.bool,
      className: w.default.string,
    }, e.exports = x;
  }, xWHt: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function i(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function a(e, t) {
      if ('function' != typeof t &&
          null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype,
          {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }

    t.__esModule = !0;
    var s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e;
        }, u = n('nbcz'), l = r(u), c = n('V80v'), d = r(c), f = n('nhKt'), p = r(f), h = n('TsfP'), m = (r(h), n('8pKO')),
        v = (p.default.any, p.default.func, p.default.node, {
          component: 'span', childFactory: function(e) {
            return e;
          },
        }), g = function(e) {
          function t(n, r) {
            o(this, t);
            var a = i(this, e.call(this, n, r));
            return a.performAppear = function(e, t) {
              a.currentlyTransitioningKeys[e] = !0, t.componentWillAppear ?
                  t.componentWillAppear(a._handleDoneAppearing.bind(a, e, t)) :
                  a._handleDoneAppearing(e, t);
            }, a._handleDoneAppearing = function(e, t) {
              t.componentDidAppear && t.componentDidAppear(), delete a.currentlyTransitioningKeys[e];
              var n = (0, m.getChildMapping)(a.props.children);
              n && n.hasOwnProperty(e) || a.performLeave(e, t);
            }, a.performEnter = function(e, t) {
              a.currentlyTransitioningKeys[e] = !0, t.componentWillEnter ?
                  t.componentWillEnter(a._handleDoneEntering.bind(a, e, t)) :
                  a._handleDoneEntering(e, t);
            }, a._handleDoneEntering = function(e, t) {
              t.componentDidEnter && t.componentDidEnter(), delete a.currentlyTransitioningKeys[e];
              var n = (0, m.getChildMapping)(a.props.children);
              n && n.hasOwnProperty(e) || a.performLeave(e, t);
            }, a.performLeave = function(e, t) {
              a.currentlyTransitioningKeys[e] = !0, t.componentWillLeave ?
                  t.componentWillLeave(a._handleDoneLeaving.bind(a, e, t)) :
                  a._handleDoneLeaving(e, t);
            }, a._handleDoneLeaving = function(e, t) {
              t.componentDidLeave && t.componentDidLeave(), delete a.currentlyTransitioningKeys[e];
              var n = (0, m.getChildMapping)(a.props.children);
              n && n.hasOwnProperty(e) ? a.keysToEnter.push(e) : a.setState(function(t) {
                var n = s({}, t.children);
                return delete n[e], {children: n};
              });
            }, a.childRefs = Object.create(null), a.state = {children: (0, m.getChildMapping)(n.children)}, a;
          }

          return a(t, e), t.prototype.componentWillMount = function() {
            this.currentlyTransitioningKeys = {}, this.keysToEnter = [], this.keysToLeave = [];
          }, t.prototype.componentDidMount = function() {
            var e = this.state.children;
            for (var t in e) e[t] && this.performAppear(t, this.childRefs[t])
          }, t.prototype.componentWillReceiveProps = function(e) {
            var t = (0, m.getChildMapping)(e.children), n = this.state.children;
            this.setState({children: (0, m.mergeChildMappings)(n, t)});
            for (var r in t) {
              var o = n && n.hasOwnProperty(r);
              !t[r] || o || this.currentlyTransitioningKeys[r] || this.keysToEnter.push(r);
            }
            for (var i in n) {
              var a = t && t.hasOwnProperty(i);
              !n[i] || a || this.currentlyTransitioningKeys[i] || this.keysToLeave.push(i);
            }
          }, t.prototype.componentDidUpdate = function() {
            var e = this, t = this.keysToEnter;
            this.keysToEnter = [], t.forEach(function(t) {
              return e.performEnter(t, e.childRefs[t]);
            });
            var n = this.keysToLeave;
            this.keysToLeave = [], n.forEach(function(t) {
              return e.performLeave(t, e.childRefs[t]);
            });
          }, t.prototype.render = function() {
            var e = this, t = [];
            for (var n in this.state.children) !function(n) {
              var r = e.state.children[n];
              if (r) {
                var o = 'string' != typeof r.ref, i = e.props.childFactory(r), a = function(t) {
                  e.childRefs[n] = t;
                };
                i === r && o && (a = (0, l.default)(r.ref, a)), t.push(d.default.cloneElement(i, {key: n, ref: a}));
              }
            }(n);
            var r = s({}, this.props);
            return delete r.transitionLeave, delete r.transitionName, delete r.transitionAppear, delete r.transitionEnter, delete r.childFactory, delete r.transitionLeaveTimeout, delete r.transitionEnterTimeout, delete r.transitionAppearTimeout, delete r.component, d.default.createElement(
                this.props.component, r, t);
          }, t;
        }(d.default.Component);
    g.displayName = 'TransitionGroup', g.propTypes = {}, g.defaultProps = v, t.default = g, e.exports = t.default;
  }, xbLF: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function i(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function a(e, t) {
      if ('function' != typeof t &&
          null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype,
          {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }

    function s(e, t) {
      return x.length ? x.forEach(function(n) {
        return e.addEventListener(n, t, !1);
      }) : setTimeout(t, 0), function() {
        x.length && x.forEach(function(n) {
          return e.removeEventListener(n, t, !1);
        });
      };
    }

    t.__esModule = !0;
    var u = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e;
        }, l = n('ye30'), c = r(l), d = n('/HVj'), f = r(d), p = n('rCoH'), h = r(p), m = n('Wbk1'), v = n('V80v'),
        g = r(v), y = n('nhKt'), w = r(y), _ = n('GF8f'), b = n('2Z17'), x = [];
    m.transitionEnd && x.push(m.transitionEnd), m.animationEnd && x.push(m.animationEnd);
    var k = (w.default.node, b.nameShape.isRequired, w.default.bool, w.default.bool, w.default.bool, w.default.number, w.default.number, w.default.number, function(e) {
      function t() {
        var n, r, a;
        o(this, t);
        for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return n = r = i(this, e.call.apply(e, [this].concat(u))), r.componentWillAppear = function(e) {
          r.props.appear ? r.transition('appear', e, r.props.appearTimeout) : e();
        }, r.componentWillEnter = function(e) {
          r.props.enter ? r.transition('enter', e, r.props.enterTimeout) : e();
        }, r.componentWillLeave = function(e) {
          r.props.leave ? r.transition('leave', e, r.props.leaveTimeout) : e();
        }, a = n, i(r, a);
      }

      return a(t, e), t.prototype.componentWillMount = function() {
        this.classNameAndNodeQueue = [], this.transitionTimeouts = [];
      }, t.prototype.componentWillUnmount = function() {
        this.unmounted = !0, this.timeout && clearTimeout(this.timeout), this.transitionTimeouts.forEach(function(e) {
          clearTimeout(e);
        }), this.classNameAndNodeQueue.length = 0;
      }, t.prototype.transition = function(e, t, n) {
        var r = (0, _.findDOMNode)(this);
        if (!r) return void(t && t());
        var o = this.props.name[e] || this.props.name + '-' + e, i = this.props.name[e + 'Active'] || o + '-active',
            a = null, u = void 0;
        (0, c.default)(r, o), this.queueClassAndNode(i, r);
        var l = function(e) {
          e && e.target !== r ||
          (clearTimeout(a), u && u(), (0, f.default)(r, o), (0, f.default)(r, i), u && u(), t && t());
        };
        n ? (a = setTimeout(l, n), this.transitionTimeouts.push(a)) : m.transitionEnd && (u = s(r, l));
      }, t.prototype.queueClassAndNode = function(e, t) {
        var n = this;
        this.classNameAndNodeQueue.push({className: e, node: t}), this.rafHandle ||
        (this.rafHandle = (0, h.default)(function() {
          return n.flushClassNameAndNodeQueue();
        }));
      }, t.prototype.flushClassNameAndNodeQueue = function() {
        this.unmounted || this.classNameAndNodeQueue.forEach(function(e) {
          e.node.scrollTop, (0, c.default)(e.node, e.className);
        }), this.classNameAndNodeQueue.length = 0, this.rafHandle = null;
      }, t.prototype.render = function() {
        var e = u({}, this.props);
        return delete e.name, delete e.appear, delete e.enter, delete e.leave, delete e.appearTimeout, delete e.enterTimeout, delete e.leaveTimeout, delete e.children, g.default.cloneElement(
            g.default.Children.only(this.props.children), e);
      }, t;
    }(g.default.Component));
    k.displayName = 'CSSTransitionGroupChild', k.propTypes = {}, t.default = k, e.exports = t.default;
  }, xsko: function(e, t) {
  }, yRjA: function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e) {
        return e && e.__esModule ? e : {default: e};
      }

      function o() {
      }

      function i() {
        return !window.isListPage && T.default.browser.weixin;
      }

      function a() {
        !function(e, t, n, r, o, i, a) {
          e.GoogleAnalyticsObject = o, e[o] = e[o] || function() {
            (e[o].q = e[o].q || []).push(arguments);
          }, e[o].l = 1 * new Date, i = t.createElement(n), a = t.getElementsByTagName(
              n)[0], i.async = 1, i.src = '//www.google-analytics.com/analytics.js', a.parentNode.insertBefore(i, a);
        }(window, document, 'script', 0, 'ga');
      }

      function s() {
        window.ga('create', 'UA-28423340-36', 'auto', 'testTracker',
            {siteSpeedSampleRate: 100}), window.gaeventTest = function(e, t, n, r, o) {
          console.log('gaTest:' + e + ',' + t + ',' + n), 'event' !== e &&
          window.ga('testTracker.send', 'event', e, t, n, void 0 !== r ? r : 1, o);
        };
      }

      function u() {
        if (!T.default.browser.weixin) return !1;
        var e, n;
        try {
          e = sessionStorage.getItem('weixinlist_query'), n = sessionStorage.getItem('weixinlist_count');
        } catch (e) {
          console.warn(e);
        }
        if (n && '1' === n) {
          var r = O.default.request(null, !0), o = location.hash, i = location.host, a = r,
              s = location.pathname + '?' + e;
          history.replaceState(null, null, s);
          var u = t.request(null, !0);
          a = t.extend({}, r, u, {weixin_list: 1});
          var l = (0, x.default)(a).map(function(e) {
            return e + '=' + a[e];
          }).join('&'), c = '//' + i + location.pathname + '?' + l + o;
          history.replaceState(null, null, c);
        }
      }

      function l() {
        var e = 17;
        i() && (e = 16), T.default.browser.weixin && (e = 41);
        var t = 'UA-28423340-' + e;
        navigator.userAgent.indexOf('ArticleStreamSdk') > -1 || 'open' === O.default.request('utm_campaign') ?
            t = 'UA-28423340-11' :
            'm.ixigua.com' === location.host && (t = 'UA-28423340-51'), window.ga('create', t, 'auto',
            {siteSpeedSampleRate: 100});
      }

      function c() {
        var e = location.pathname;
        e && -1 !== e.indexOf('/sem/') ?
            window.ga('send', 'pageview', {page: e}) :
            window.ga('send', 'pageview', location.pathname + location.search + location.hash);
      }

      function d() {
        var e = O.default.request('wxshare_count');
        !isNaN(e) && e > 0 && window.ga('set', 'dimension1', e);
        var t = O.default.request('wxshare_banner');
        !isNaN(t) && t > 0 && window.ga('set', 'dimension10', t);
        var n = O.default.request('readmore');
        !isNaN(n) && n > 0 && window.ga('set', 'dimension2', n);
        var r = O.default.hash('channel') || O.default.request('channel') || '__all__';
        r && window.ga('set', 'dimension4', r);
        var o = Number(window.hasVideo);
        if (0 !== o && 1 !== o || window.ga('set', 'dimension5', o), i()) {
          var a = O.default.request('app');
          a && window.ga('set', 'dimension6', a);
          var s = O.default.request('utm_medium');
          s && window.ga('set', 'dimension7', s);
          var u = O.default.request('isappinstalled');
          !isNaN(u) && u >= 0 && window.ga('set', 'dimension8', u - 0 ? 1 : 0);
        } else window.ga(function(e) {
          var t = e.get('clientId');
          window.ga('set', 'dimension7', t);
        }), window.ga('set', 'dimension6', O.default.getBrowserName()), window.ga('set', 'dimension8',
            navigator.userAgent), window.ga('set', 'dimension9', window.city || '');
        var l = location.pathname;
        l && -1 !== l.indexOf('/sem/') && O.default.request('atdl') &&
        window.ga('set', 'dimension5', O.default.request('atdl'));
      }

      function f() {
        var e = 2;
        i() && (e = 5);
        var t = A.default.getTTWebID(), n = null !== t ? parseInt(t) % 100 : void 0;
        return !isNaN(n) && n >= 1 && n <= e;
      }

      function p() {
        var e = new Image;
        e.src = location.protocol + '//' + location.hostname + '/__utm.gif?utmp=' +
            encodeURIComponent(location.href), e.onload = function(e) {
          t(this).remove();
        }, t(function() {
          t('body').append(e);
        });
        window.addEventListener('error', function(e, t, n) {
          var r = e, o = t, i = n;
          'object' === (void 0 === e ? 'undefined' : (0, _.default)(e)) &&
          (r = e.message, o = e.fileName, i = e.lineNumber);
          var a = '[' + o + ' (' + i + ')]' + r;
          Math.floor(100 * Math.random()) < 10 && window.ga('send', 'exception', {exDescription: a, exFatal: !1});
        });
      }

      function h(e, t, n, r, o) {
        console.log('ga:' + e + ',' + t + ',' + n), window.ga('send', 'event', e, t, n, void 0 !== r ? r : 1, o);
      }

      function m(e) {
        window.ga('send', 'pageview', location.pathname + location.search + location.hash), console.log(
            'ga:pageview', location.pathname + location.search + location.hash);
      }

      function v() {
        i() || function() {
          var e = document.createElement('script');
          e.src = '//hm.baidu.com/hm.js?23e756494636a870d09e32c92e64fdd6';
          var t = document.getElementsByTagName('script')[0];
          t.parentNode.insertBefore(e, t);
        }();
      }

      function g() {
        window._taq.push(['create', 'TT-growth-01', 'm.toutiao.com']), window._taq.push(
            ['trackinit', 'mobile', 'wap', 1]), function() {
          var e = document.createElement('script');
          e.type = 'text/javascript', e.async = !0, e.src = document.location.protocol +
              '//s3.pstatp.com/adstatic/resource/landing_log/dist/1.0.13/static/js/toutiao-analytics.js';
          var t = document.getElementsByTagName('script')[0];
          t.parentNode.insertBefore(e, t);
        }();
      }

      function y() {
        a(), s(), u(), g(), f() &&
        (l(), d(), c(), v(), p(), window.gaevent = h, window.resendGA = m, window.gaqpush = window.gaqpush);
      }

      var w = n('gf5I'), _ = r(w), b = n('mZJ8'), x = r(b), k = n('gT+X'), T = r(k), E = n('YWnE'), O = r(E),
          C = n('bVOP'), A = r(C);
      window.gaevent = o, window.gaqpush = o, window.resendGA = o, window.gaeventTest = o, window._taq = window._taq ||
          [], e.exports = {init: y};
    }).call(t, n('gXQ3'));
  }, ye30: function(e, t, n) {
    'use strict';

    function r(e, t) {
      e.classList ? e.classList.add(t) : (0, i.default)(e) || (e.className = e.className + ' ' + t);
    }

    Object.defineProperty(t, '__esModule', {value: !0}), t.default = r;
    var o = n('bpTx'), i = function(e) {
      return e && e.__esModule ? e : {default: e};
    }(o);
    e.exports = t.default;
  }, z9My: function(e, t, n) {
    'use strict';

    function r(e, t) {
      if (e.map) return e.map(t);
      for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
      return n;
    }

    var o = function(e) {
      switch (typeof e) {
        case'string':
          return e;
        case'boolean':
          return e ? 'true' : 'false';
        case'number':
          return isFinite(e) ? e : '';
        default:
          return '';
      }
    };
    e.exports = function(e, t, n, s) {
      return t = t || '&', n = n || '=', null === e && (e = void 0), 'object' == typeof e ? r(a(e), function(a) {
        var s = encodeURIComponent(o(a)) + n;
        return i(e[a]) ? r(e[a], function(e) {
          return s + encodeURIComponent(o(e));
        }).join(t) : s + encodeURIComponent(o(e[a]));
      }).join(t) : s ? encodeURIComponent(o(s)) + n + encodeURIComponent(o(e)) : '';
    };
    var i = Array.isArray || function(e) {
      return '[object Array]' === Object.prototype.toString.call(e);
    }, a = Object.keys || function(e) {
      var t = [];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
      return t;
    };
  }, zTA1: function(e, t, n) {
    'use strict';

    function r(e) {
      return e && e.__esModule ? e : {default: e};
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }

    function i(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function a(e, t) {
      if ('function' != typeof t &&
          null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype,
          {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }

    t.__esModule = !0;
    var s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e;
        }, u = n('V80v'), l = r(u), c = n('nhKt'), d = r(c), f = n('xWHt'), p = r(f), h = n('xbLF'), m = r(h),
        v = n('2Z17'),
        g = (v.nameShape.isRequired, d.default.bool, d.default.bool, d.default.bool, (0, v.transitionTimeout)(
            'Appear'), (0, v.transitionTimeout)('Enter'), (0, v.transitionTimeout)('Leave'), {
          transitionAppear: !1,
          transitionEnter: !0,
          transitionLeave: !0,
        }), y = function(e) {
          function t() {
            var n, r, a;
            o(this, t);
            for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return n = r = i(this, e.call.apply(e, [this].concat(u))), r._wrapChild = function(e) {
              return l.default.createElement(m.default, {
                name: r.props.transitionName,
                appear: r.props.transitionAppear,
                enter: r.props.transitionEnter,
                leave: r.props.transitionLeave,
                appearTimeout: r.props.transitionAppearTimeout,
                enterTimeout: r.props.transitionEnterTimeout,
                leaveTimeout: r.props.transitionLeaveTimeout,
              }, e);
            }, a = n, i(r, a);
          }

          return a(t, e), t.prototype.render = function() {
            return l.default.createElement(p.default, s({}, this.props, {childFactory: this._wrapChild}));
          }, t;
        }(l.default.Component);
    y.displayName = 'CSSTransitionGroup', y.propTypes = {}, y.defaultProps = g, t.default = y, e.exports = t.default;
  },
}, [2]);