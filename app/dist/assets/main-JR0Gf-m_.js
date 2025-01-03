var _y = Object.defineProperty;
var Ey = (e, t, r) =>
  t in e
    ? _y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Kn = (e, t, r) => (Ey(e, typeof t != 'symbol' ? t + '' : t, r), r);
function ky(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const i in n)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => n[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o);
  }
})();
function Sy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var kh = { exports: {} },
  Ha = {},
  Sh = { exports: {} },
  pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var es = Symbol.for('react.element'),
  Cy = Symbol.for('react.portal'),
  Ry = Symbol.for('react.fragment'),
  Ty = Symbol.for('react.strict_mode'),
  Ay = Symbol.for('react.profiler'),
  Iy = Symbol.for('react.provider'),
  Ny = Symbol.for('react.context'),
  Py = Symbol.for('react.forward_ref'),
  Oy = Symbol.for('react.suspense'),
  Fy = Symbol.for('react.memo'),
  by = Symbol.for('react.lazy'),
  hf = Symbol.iterator;
function jy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (hf && e[hf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ch = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rh = Object.assign,
  Th = {};
function $i(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Th),
    (this.updater = r || Ch);
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
$i.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ah() {}
Ah.prototype = $i.prototype;
function Kc(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Th),
    (this.updater = r || Ch);
}
var Gc = (Kc.prototype = new Ah());
Gc.constructor = Kc;
Rh(Gc, $i.prototype);
Gc.isPureReactComponent = !0;
var mf = Array.isArray,
  Ih = Object.prototype.hasOwnProperty,
  Jc = { current: null },
  Nh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ph(e, t, r) {
  var n,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Ih.call(t, n) && !Nh.hasOwnProperty(n) && (i[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = r;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) i[n] === void 0 && (i[n] = a[n]);
  return {
    $$typeof: es,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Jc.current,
  };
}
function Ly(e, t) {
  return {
    $$typeof: es,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === es;
}
function Dy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var gf = /\/+/g;
function Rl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Dy('' + e.key)
    : t.toString(36);
}
function Ps(e, t, r, n, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case es:
          case Cy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = n === '' ? '.' + Rl(s, 0) : n),
      mf(i)
        ? ((r = ''),
          e != null && (r = e.replace(gf, '$&/') + '/'),
          Ps(i, t, r, '', function (f) {
            return f;
          }))
        : i != null &&
          (Qc(i) &&
            (i = Ly(
              i,
              r +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(gf, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (n = n === '' ? '.' : n + ':'), mf(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = n + Rl(o, a);
      s += Ps(o, t, r, u, i);
    }
  else if (((u = jy(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = n + Rl(o, a++)), (s += Ps(o, t, r, u, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return s;
}
function fs(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    Ps(e, n, '', '', function (o) {
      return t.call(r, o, i++);
    }),
    n
  );
}
function By(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var yt = { current: null },
  Os = { transition: null },
  $y = {
    ReactCurrentDispatcher: yt,
    ReactCurrentBatchConfig: Os,
    ReactCurrentOwner: Jc,
  };
function Oh() {
  throw Error('act(...) is not supported in production builds of React.');
}
pe.Children = {
  map: fs,
  forEach: function (e, t, r) {
    fs(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
pe.Component = $i;
pe.Fragment = Ry;
pe.Profiler = Ay;
pe.PureComponent = Kc;
pe.StrictMode = Ty;
pe.Suspense = Oy;
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y;
pe.act = Oh;
pe.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var n = Rh({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Jc.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Ih.call(t, u) &&
        !Nh.hasOwnProperty(u) &&
        (n[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = r;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    n.children = a;
  }
  return { $$typeof: es, type: e.type, key: i, ref: o, props: n, _owner: s };
};
pe.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ny,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Iy, _context: e }),
    (e.Consumer = e)
  );
};
pe.createElement = Ph;
pe.createFactory = function (e) {
  var t = Ph.bind(null, e);
  return (t.type = e), t;
};
pe.createRef = function () {
  return { current: null };
};
pe.forwardRef = function (e) {
  return { $$typeof: Py, render: e };
};
pe.isValidElement = Qc;
pe.lazy = function (e) {
  return { $$typeof: by, _payload: { _status: -1, _result: e }, _init: By };
};
pe.memo = function (e, t) {
  return { $$typeof: Fy, type: e, compare: t === void 0 ? null : t };
};
pe.startTransition = function (e) {
  var t = Os.transition;
  Os.transition = {};
  try {
    e();
  } finally {
    Os.transition = t;
  }
};
pe.unstable_act = Oh;
pe.useCallback = function (e, t) {
  return yt.current.useCallback(e, t);
};
pe.useContext = function (e) {
  return yt.current.useContext(e);
};
pe.useDebugValue = function () {};
pe.useDeferredValue = function (e) {
  return yt.current.useDeferredValue(e);
};
pe.useEffect = function (e, t) {
  return yt.current.useEffect(e, t);
};
pe.useId = function () {
  return yt.current.useId();
};
pe.useImperativeHandle = function (e, t, r) {
  return yt.current.useImperativeHandle(e, t, r);
};
pe.useInsertionEffect = function (e, t) {
  return yt.current.useInsertionEffect(e, t);
};
pe.useLayoutEffect = function (e, t) {
  return yt.current.useLayoutEffect(e, t);
};
pe.useMemo = function (e, t) {
  return yt.current.useMemo(e, t);
};
pe.useReducer = function (e, t, r) {
  return yt.current.useReducer(e, t, r);
};
pe.useRef = function (e) {
  return yt.current.useRef(e);
};
pe.useState = function (e) {
  return yt.current.useState(e);
};
pe.useSyncExternalStore = function (e, t, r) {
  return yt.current.useSyncExternalStore(e, t, r);
};
pe.useTransition = function () {
  return yt.current.useTransition();
};
pe.version = '18.3.1';
Sh.exports = pe;
var B = Sh.exports;
const ie = Sy(B),
  Uy = ky({ __proto__: null, default: ie }, [B]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zy = B,
  My = Symbol.for('react.element'),
  Vy = Symbol.for('react.fragment'),
  Wy = Object.prototype.hasOwnProperty,
  Hy = zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fh(e, t, r) {
  var n,
    i = {},
    o = null,
    s = null;
  r !== void 0 && (o = '' + r),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) Wy.call(t, n) && !Zy.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: My,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Hy.current,
  };
}
Ha.Fragment = Vy;
Ha.jsx = Fh;
Ha.jsxs = Fh;
kh.exports = Ha;
var A = kh.exports,
  Cu = {},
  bh = { exports: {} },
  Bt = {},
  jh = { exports: {} },
  Lh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(V, Q) {
    var ee = V.length;
    V.push(Q);
    e: for (; 0 < ee; ) {
      var ye = (ee - 1) >>> 1,
        ve = V[ye];
      if (0 < i(ve, Q)) (V[ye] = Q), (V[ee] = ve), (ee = ye);
      else break e;
    }
  }
  function r(V) {
    return V.length === 0 ? null : V[0];
  }
  function n(V) {
    if (V.length === 0) return null;
    var Q = V[0],
      ee = V.pop();
    if (ee !== Q) {
      V[0] = ee;
      e: for (var ye = 0, ve = V.length, Qt = ve >>> 1; ye < Qt; ) {
        var he = 2 * (ye + 1) - 1,
          Re = V[he],
          Ze = he + 1,
          ft = V[Ze];
        if (0 > i(Re, ee))
          Ze < ve && 0 > i(ft, Re)
            ? ((V[ye] = ft), (V[Ze] = ee), (ye = Ze))
            : ((V[ye] = Re), (V[he] = ee), (ye = he));
        else if (Ze < ve && 0 > i(ft, ee))
          (V[ye] = ft), (V[Ze] = ee), (ye = Ze);
        else break e;
      }
    }
    return Q;
  }
  function i(V, Q) {
    var ee = V.sortIndex - Q.sortIndex;
    return ee !== 0 ? ee : V.id - Q.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var u = [],
    f = [],
    d = 1,
    h = null,
    w = 3,
    S = !1,
    x = !1,
    E = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(V) {
    for (var Q = r(f); Q !== null; ) {
      if (Q.callback === null) n(f);
      else if (Q.startTime <= V)
        n(f), (Q.sortIndex = Q.expirationTime), t(u, Q);
      else break;
      Q = r(f);
    }
  }
  function C(V) {
    if (((E = !1), v(V), !x))
      if (r(u) !== null) (x = !0), M(P);
      else {
        var Q = r(f);
        Q !== null && Fe(C, Q.startTime - V);
      }
  }
  function P(V, Q) {
    (x = !1), E && ((E = !1), y(U), (U = -1)), (S = !0);
    var ee = w;
    try {
      for (
        v(Q), h = r(u);
        h !== null && (!(h.expirationTime > Q) || (V && !Oe()));

      ) {
        var ye = h.callback;
        if (typeof ye == 'function') {
          (h.callback = null), (w = h.priorityLevel);
          var ve = ye(h.expirationTime <= Q);
          (Q = e.unstable_now()),
            typeof ve == 'function' ? (h.callback = ve) : h === r(u) && n(u),
            v(Q);
        } else n(u);
        h = r(u);
      }
      if (h !== null) var Qt = !0;
      else {
        var he = r(f);
        he !== null && Fe(C, he.startTime - Q), (Qt = !1);
      }
      return Qt;
    } finally {
      (h = null), (w = ee), (S = !1);
    }
  }
  var j = !1,
    b = null,
    U = -1,
    ae = 5,
    Y = -1;
  function Oe() {
    return !(e.unstable_now() - Y < ae);
  }
  function te() {
    if (b !== null) {
      var V = e.unstable_now();
      Y = V;
      var Q = !0;
      try {
        Q = b(!0, V);
      } finally {
        Q ? se() : ((j = !1), (b = null));
      }
    } else j = !1;
  }
  var se;
  if (typeof m == 'function')
    se = function () {
      m(te);
    };
  else if (typeof MessageChannel < 'u') {
    var xe = new MessageChannel(),
      Ce = xe.port2;
    (xe.port1.onmessage = te),
      (se = function () {
        Ce.postMessage(null);
      });
  } else
    se = function () {
      R(te, 0);
    };
  function M(V) {
    (b = V), j || ((j = !0), se());
  }
  function Fe(V, Q) {
    U = R(function () {
      V(e.unstable_now());
    }, Q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (V) {
      V.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || S || ((x = !0), M(P));
    }),
    (e.unstable_forceFrameRate = function (V) {
      0 > V || 125 < V
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (ae = 0 < V ? Math.floor(1e3 / V) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return w;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(u);
    }),
    (e.unstable_next = function (V) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = w;
      }
      var ee = w;
      w = Q;
      try {
        return V();
      } finally {
        w = ee;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (V, Q) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var ee = w;
      w = V;
      try {
        return Q();
      } finally {
        w = ee;
      }
    }),
    (e.unstable_scheduleCallback = function (V, Q, ee) {
      var ye = e.unstable_now();
      switch (
        (typeof ee == 'object' && ee !== null
          ? ((ee = ee.delay),
            (ee = typeof ee == 'number' && 0 < ee ? ye + ee : ye))
          : (ee = ye),
        V)
      ) {
        case 1:
          var ve = -1;
          break;
        case 2:
          ve = 250;
          break;
        case 5:
          ve = 1073741823;
          break;
        case 4:
          ve = 1e4;
          break;
        default:
          ve = 5e3;
      }
      return (
        (ve = ee + ve),
        (V = {
          id: d++,
          callback: Q,
          priorityLevel: V,
          startTime: ee,
          expirationTime: ve,
          sortIndex: -1,
        }),
        ee > ye
          ? ((V.sortIndex = ee),
            t(f, V),
            r(u) === null &&
              V === r(f) &&
              (E ? (y(U), (U = -1)) : (E = !0), Fe(C, ee - ye)))
          : ((V.sortIndex = ve), t(u, V), x || S || ((x = !0), M(P))),
        V
      );
    }),
    (e.unstable_shouldYield = Oe),
    (e.unstable_wrapCallback = function (V) {
      var Q = w;
      return function () {
        var ee = w;
        w = Q;
        try {
          return V.apply(this, arguments);
        } finally {
          w = ee;
        }
      };
    });
})(Lh);
jh.exports = Lh;
var qy = jh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ky = B,
  Dt = qy;
function D(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Dh = new Set(),
  To = {};
function Vn(e, t) {
  ki(e, t), ki(e + 'Capture', t);
}
function ki(e, t) {
  for (To[e] = t, e = 0; e < t.length; e++) Dh.add(t[e]);
}
var Dr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ru = Object.prototype.hasOwnProperty,
  Gy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yf = {},
  vf = {};
function Jy(e) {
  return Ru.call(vf, e)
    ? !0
    : Ru.call(yf, e)
      ? !1
      : Gy.test(e)
        ? (vf[e] = !0)
        : ((yf[e] = !0), !1);
}
function Qy(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Yy(e, t, r, n) {
  if (t === null || typeof t > 'u' || Qy(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function vt(e, t, r, n, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var at = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    at[e] = new vt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  at[t] = new vt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  at[e] = new vt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  at[e] = new vt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    at[e] = new vt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  at[e] = new vt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  at[e] = new vt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  at[e] = new vt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  at[e] = new vt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yc = /[\-:]([a-z])/g;
function Xc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Yc, Xc);
    at[t] = new vt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Yc, Xc);
    at[t] = new vt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Yc, Xc);
  at[t] = new vt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  at[e] = new vt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new vt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  at[e] = new vt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ed(e, t, r, n) {
  var i = at.hasOwnProperty(t) ? at[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Yy(t, r, i, n) && (r = null),
    n || i === null
      ? Jy(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : '') : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (r = i === 3 || (i === 4 && r === !0) ? '' : '' + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Vr = Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ps = Symbol.for('react.element'),
  ti = Symbol.for('react.portal'),
  ri = Symbol.for('react.fragment'),
  td = Symbol.for('react.strict_mode'),
  Tu = Symbol.for('react.profiler'),
  Bh = Symbol.for('react.provider'),
  $h = Symbol.for('react.context'),
  rd = Symbol.for('react.forward_ref'),
  Au = Symbol.for('react.suspense'),
  Iu = Symbol.for('react.suspense_list'),
  nd = Symbol.for('react.memo'),
  Gr = Symbol.for('react.lazy'),
  Uh = Symbol.for('react.offscreen'),
  wf = Symbol.iterator;
function Ki(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (wf && e[wf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Le = Object.assign,
  Tl;
function oo(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Tl = (t && t[1]) || '';
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Al = !1;
function Il(e, t) {
  if (!e || Al) return '';
  Al = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var n = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          n = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        n = f;
      }
      e();
    }
  } catch (f) {
    if (f && n && typeof f.stack == 'string') {
      for (
        var i = f.stack.split(`
`),
          o = n.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var u =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Al = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : '') ? oo(e) : '';
}
function Xy(e) {
  switch (e.tag) {
    case 5:
      return oo(e.type);
    case 16:
      return oo('Lazy');
    case 13:
      return oo('Suspense');
    case 19:
      return oo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e;
    case 11:
      return (e = Il(e.type.render, !1)), e;
    case 1:
      return (e = Il(e.type, !0)), e;
    default:
      return '';
  }
}
function Nu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ri:
      return 'Fragment';
    case ti:
      return 'Portal';
    case Tu:
      return 'Profiler';
    case td:
      return 'StrictMode';
    case Au:
      return 'Suspense';
    case Iu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case $h:
        return (e.displayName || 'Context') + '.Consumer';
      case Bh:
        return (e._context.displayName || 'Context') + '.Provider';
      case rd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case nd:
        return (
          (t = e.displayName || null), t !== null ? t : Nu(e.type) || 'Memo'
        );
      case Gr:
        (t = e._payload), (e = e._init);
        try {
          return Nu(e(t));
        } catch {}
    }
  return null;
}
function ev(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Nu(t);
    case 8:
      return t === td ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function zh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function tv(e) {
  var t = zh(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < 'u' &&
    typeof r.get == 'function' &&
    typeof r.set == 'function'
  ) {
    var i = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (n = '' + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (s) {
          n = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hs(e) {
  e._valueTracker || (e._valueTracker = tv(e));
}
function Mh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = '';
  return (
    e && (n = zh(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Xs(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pu(e, t) {
  var r = t.checked;
  return Le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function xf(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = hn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Vh(e, t) {
  (t = t.checked), t != null && ed(e, 'checked', t, !1);
}
function Ou(e, t) {
  Vh(e, t);
  var r = hn(t.value),
    n = t.type;
  if (r != null)
    n === 'number'
      ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r);
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Fu(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Fu(e, t.type, hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _f(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type;
    if (
      !(
        (n !== 'submit' && n !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== '' && (e.name = r);
}
function Fu(e, t, r) {
  (t !== 'number' || Xs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
}
var so = Array.isArray;
function hi(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = '' + hn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function bu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ef(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(D(92));
      if (so(r)) {
        if (1 < r.length) throw Error(D(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ''), (r = t);
  }
  e._wrapperState = { initialValue: hn(r) };
}
function Wh(e, t) {
  var r = hn(t.value),
    n = hn(t.defaultValue);
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n);
}
function kf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Hh(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ju(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Hh(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var ms,
  Zh = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ms = ms || document.createElement('div'),
          ms.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ms.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ao(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(mo).forEach(function (e) {
  rv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mo[t] = mo[e]);
  });
});
function qh(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (mo.hasOwnProperty(e) && mo[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Kh(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        i = qh(r, t[r], n);
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var nv = Le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Lu(e, t) {
  if (t) {
    if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(D(62));
  }
}
function Du(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Bu = null;
function id(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $u = null,
  mi = null,
  gi = null;
function Sf(e) {
  if ((e = ns(e))) {
    if (typeof $u != 'function') throw Error(D(280));
    var t = e.stateNode;
    t && ((t = Ja(t)), $u(e.stateNode, e.type, t));
  }
}
function Gh(e) {
  mi ? (gi ? gi.push(e) : (gi = [e])) : (mi = e);
}
function Jh() {
  if (mi) {
    var e = mi,
      t = gi;
    if (((gi = mi = null), Sf(e), t)) for (e = 0; e < t.length; e++) Sf(t[e]);
  }
}
function Qh(e, t) {
  return e(t);
}
function Yh() {}
var Nl = !1;
function Xh(e, t, r) {
  if (Nl) return e(t, r);
  Nl = !0;
  try {
    return Qh(e, t, r);
  } finally {
    (Nl = !1), (mi !== null || gi !== null) && (Yh(), Jh());
  }
}
function Io(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Ja(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != 'function') throw Error(D(231, t, typeof r));
  return r;
}
var Uu = !1;
if (Dr)
  try {
    var Gi = {};
    Object.defineProperty(Gi, 'passive', {
      get: function () {
        Uu = !0;
      },
    }),
      window.addEventListener('test', Gi, Gi),
      window.removeEventListener('test', Gi, Gi);
  } catch {
    Uu = !1;
  }
function iv(e, t, r, n, i, o, s, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, f);
  } catch (d) {
    this.onError(d);
  }
}
var go = !1,
  ea = null,
  ta = !1,
  zu = null,
  ov = {
    onError: function (e) {
      (go = !0), (ea = e);
    },
  };
function sv(e, t, r, n, i, o, s, a, u) {
  (go = !1), (ea = null), iv.apply(ov, arguments);
}
function av(e, t, r, n, i, o, s, a, u) {
  if ((sv.apply(this, arguments), go)) {
    if (go) {
      var f = ea;
      (go = !1), (ea = null);
    } else throw Error(D(198));
    ta || ((ta = !0), (zu = f));
  }
}
function Wn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function em(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cf(e) {
  if (Wn(e) !== e) throw Error(D(188));
}
function lv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wn(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return Cf(i), e;
        if (o === n) return Cf(i), t;
        o = o.sibling;
      }
      throw Error(D(188));
    }
    if (r.return !== n.return) (r = i), (n = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(D(189));
      }
    }
    if (r.alternate !== n) throw Error(D(190));
  }
  if (r.tag !== 3) throw Error(D(188));
  return r.stateNode.current === r ? e : t;
}
function tm(e) {
  return (e = lv(e)), e !== null ? rm(e) : null;
}
function rm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = rm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nm = Dt.unstable_scheduleCallback,
  Rf = Dt.unstable_cancelCallback,
  uv = Dt.unstable_shouldYield,
  cv = Dt.unstable_requestPaint,
  Ve = Dt.unstable_now,
  dv = Dt.unstable_getCurrentPriorityLevel,
  od = Dt.unstable_ImmediatePriority,
  im = Dt.unstable_UserBlockingPriority,
  ra = Dt.unstable_NormalPriority,
  fv = Dt.unstable_LowPriority,
  om = Dt.unstable_IdlePriority,
  Za = null,
  wr = null;
function pv(e) {
  if (wr && typeof wr.onCommitFiberRoot == 'function')
    try {
      wr.onCommitFiberRoot(Za, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nr = Math.clz32 ? Math.clz32 : gv,
  hv = Math.log,
  mv = Math.LN2;
function gv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hv(e) / mv) | 0)) | 0;
}
var gs = 64,
  ys = 4194304;
function ao(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function na(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = r & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (n = ao(a)) : ((o &= s), o !== 0 && (n = ao(o)));
  } else (s = r & ~i), s !== 0 ? (n = ao(s)) : o !== 0 && (n = ao(o));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - nr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function yv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vv(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - nr(o),
      a = 1 << s,
      u = i[s];
    u === -1
      ? (!(a & r) || a & n) && (i[s] = yv(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Mu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sm() {
  var e = gs;
  return (gs <<= 1), !(gs & 4194240) && (gs = 64), e;
}
function Pl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ts(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nr(t)),
    (e[t] = r);
}
function wv(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - nr(r),
      o = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
  }
}
function sd(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - nr(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var _e = 0;
function am(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lm,
  ad,
  um,
  cm,
  dm,
  Vu = !1,
  vs = [],
  on = null,
  sn = null,
  an = null,
  No = new Map(),
  Po = new Map(),
  Yr = [],
  xv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Tf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      on = null;
      break;
    case 'dragenter':
    case 'dragleave':
      sn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      an = null;
      break;
    case 'pointerover':
    case 'pointerout':
      No.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Po.delete(t.pointerId);
  }
}
function Ji(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ns(t)), t !== null && ad(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function _v(e, t, r, n, i) {
  switch (t) {
    case 'focusin':
      return (on = Ji(on, e, t, r, n, i)), !0;
    case 'dragenter':
      return (sn = Ji(sn, e, t, r, n, i)), !0;
    case 'mouseover':
      return (an = Ji(an, e, t, r, n, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return No.set(o, Ji(No.get(o) || null, e, t, r, n, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Po.set(o, Ji(Po.get(o) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function fm(e) {
  var t = kn(e.target);
  if (t !== null) {
    var r = Wn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = em(r)), t !== null)) {
          (e.blockedOn = t),
            dm(e.priority, function () {
              um(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Bu = n), r.target.dispatchEvent(n), (Bu = null);
    } else return (t = ns(r)), t !== null && ad(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Af(e, t, r) {
  Fs(e) && r.delete(t);
}
function Ev() {
  (Vu = !1),
    on !== null && Fs(on) && (on = null),
    sn !== null && Fs(sn) && (sn = null),
    an !== null && Fs(an) && (an = null),
    No.forEach(Af),
    Po.forEach(Af);
}
function Qi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vu ||
      ((Vu = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, Ev)));
}
function Oo(e) {
  function t(i) {
    return Qi(i, e);
  }
  if (0 < vs.length) {
    Qi(vs[0], e);
    for (var r = 1; r < vs.length; r++) {
      var n = vs[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    on !== null && Qi(on, e),
      sn !== null && Qi(sn, e),
      an !== null && Qi(an, e),
      No.forEach(t),
      Po.forEach(t),
      r = 0;
    r < Yr.length;
    r++
  )
    (n = Yr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Yr.length && ((r = Yr[0]), r.blockedOn === null); )
    fm(r), r.blockedOn === null && Yr.shift();
}
var yi = Vr.ReactCurrentBatchConfig,
  ia = !0;
function kv(e, t, r, n) {
  var i = _e,
    o = yi.transition;
  yi.transition = null;
  try {
    (_e = 1), ld(e, t, r, n);
  } finally {
    (_e = i), (yi.transition = o);
  }
}
function Sv(e, t, r, n) {
  var i = _e,
    o = yi.transition;
  yi.transition = null;
  try {
    (_e = 4), ld(e, t, r, n);
  } finally {
    (_e = i), (yi.transition = o);
  }
}
function ld(e, t, r, n) {
  if (ia) {
    var i = Wu(e, t, r, n);
    if (i === null) zl(e, t, n, oa, r), Tf(e, n);
    else if (_v(i, e, t, r, n)) n.stopPropagation();
    else if ((Tf(e, n), t & 4 && -1 < xv.indexOf(e))) {
      for (; i !== null; ) {
        var o = ns(i);
        if (
          (o !== null && lm(o),
          (o = Wu(e, t, r, n)),
          o === null && zl(e, t, n, oa, r),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else zl(e, t, n, null, r);
  }
}
var oa = null;
function Wu(e, t, r, n) {
  if (((oa = null), (e = id(n)), (e = kn(e)), e !== null))
    if (((t = Wn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = em(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (oa = e), null;
}
function pm(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (dv()) {
        case od:
          return 1;
        case im:
          return 4;
        case ra:
        case fv:
          return 16;
        case om:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  ud = null,
  bs = null;
function hm() {
  if (bs) return bs;
  var e,
    t = ud,
    r = t.length,
    n,
    i = 'value' in tn ? tn.value : tn.textContent,
    o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var s = r - e;
  for (n = 1; n <= s && t[r - n] === i[o - n]; n++);
  return (bs = i.slice(e, 1 < n ? 1 - n : void 0));
}
function js(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ws() {
  return !0;
}
function If() {
  return !1;
}
function $t(e) {
  function t(r, n, i, o, s) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ws
        : If),
      (this.isPropagationStopped = If),
      this
    );
  }
  return (
    Le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = ws));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = ws));
      },
      persist: function () {},
      isPersistent: ws,
    }),
    t
  );
}
var Ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cd = $t(Ui),
  rs = Le({}, Ui, { view: 0, detail: 0 }),
  Cv = $t(rs),
  Ol,
  Fl,
  Yi,
  qa = Le({}, rs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Yi &&
            (Yi && e.type === 'mousemove'
              ? ((Ol = e.screenX - Yi.screenX), (Fl = e.screenY - Yi.screenY))
              : (Fl = Ol = 0),
            (Yi = e)),
          Ol);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Fl;
    },
  }),
  Nf = $t(qa),
  Rv = Le({}, qa, { dataTransfer: 0 }),
  Tv = $t(Rv),
  Av = Le({}, rs, { relatedTarget: 0 }),
  bl = $t(Av),
  Iv = Le({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nv = $t(Iv),
  Pv = Le({}, Ui, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ov = $t(Pv),
  Fv = Le({}, Ui, { data: 0 }),
  Pf = $t(Fv),
  bv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  jv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Lv = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Dv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lv[e]) ? !!t[e] : !1;
}
function dd() {
  return Dv;
}
var Bv = Le({}, rs, {
    key: function (e) {
      if (e.key) {
        var t = bv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = js(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? jv[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dd,
    charCode: function (e) {
      return e.type === 'keypress' ? js(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? js(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  $v = $t(Bv),
  Uv = Le({}, qa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Of = $t(Uv),
  zv = Le({}, rs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dd,
  }),
  Mv = $t(zv),
  Vv = Le({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wv = $t(Vv),
  Hv = Le({}, qa, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zv = $t(Hv),
  qv = [9, 13, 27, 32],
  fd = Dr && 'CompositionEvent' in window,
  yo = null;
Dr && 'documentMode' in document && (yo = document.documentMode);
var Kv = Dr && 'TextEvent' in window && !yo,
  mm = Dr && (!fd || (yo && 8 < yo && 11 >= yo)),
  Ff = ' ',
  bf = !1;
function gm(e, t) {
  switch (e) {
    case 'keyup':
      return qv.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ym(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ni = !1;
function Gv(e, t) {
  switch (e) {
    case 'compositionend':
      return ym(t);
    case 'keypress':
      return t.which !== 32 ? null : ((bf = !0), Ff);
    case 'textInput':
      return (e = t.data), e === Ff && bf ? null : e;
    default:
      return null;
  }
}
function Jv(e, t) {
  if (ni)
    return e === 'compositionend' || (!fd && gm(e, t))
      ? ((e = hm()), (bs = ud = tn = null), (ni = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return mm && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Qv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Qv[e.type] : t === 'textarea';
}
function vm(e, t, r, n) {
  Gh(n),
    (t = sa(t, 'onChange')),
    0 < t.length &&
      ((r = new cd('onChange', 'change', null, r, n)),
      e.push({ event: r, listeners: t }));
}
var vo = null,
  Fo = null;
function Yv(e) {
  Im(e, 0);
}
function Ka(e) {
  var t = si(e);
  if (Mh(t)) return e;
}
function Xv(e, t) {
  if (e === 'change') return t;
}
var wm = !1;
if (Dr) {
  var jl;
  if (Dr) {
    var Ll = 'oninput' in document;
    if (!Ll) {
      var Lf = document.createElement('div');
      Lf.setAttribute('oninput', 'return;'),
        (Ll = typeof Lf.oninput == 'function');
    }
    jl = Ll;
  } else jl = !1;
  wm = jl && (!document.documentMode || 9 < document.documentMode);
}
function Df() {
  vo && (vo.detachEvent('onpropertychange', xm), (Fo = vo = null));
}
function xm(e) {
  if (e.propertyName === 'value' && Ka(Fo)) {
    var t = [];
    vm(t, Fo, e, id(e)), Xh(Yv, t);
  }
}
function e1(e, t, r) {
  e === 'focusin'
    ? (Df(), (vo = t), (Fo = r), vo.attachEvent('onpropertychange', xm))
    : e === 'focusout' && Df();
}
function t1(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ka(Fo);
}
function r1(e, t) {
  if (e === 'click') return Ka(t);
}
function n1(e, t) {
  if (e === 'input' || e === 'change') return Ka(t);
}
function i1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sr = typeof Object.is == 'function' ? Object.is : i1;
function bo(e, t) {
  if (sr(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Ru.call(t, i) || !sr(e[i], t[i])) return !1;
  }
  return !0;
}
function Bf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $f(e, t) {
  var r = Bf(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Bf(r);
  }
}
function _m(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? _m(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Em() {
  for (var e = window, t = Xs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string';
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Xs(e.document);
  }
  return t;
}
function pd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function o1(e) {
  var t = Em(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    _m(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && pd(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        'selectionStart' in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          o = Math.min(n.start, i);
        (n = n.end === void 0 ? o : Math.min(n.end, i)),
          !e.extend && o > n && ((i = n), (n = o), (o = i)),
          (i = $f(r, o));
        var s = $f(r, n);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > n
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var s1 = Dr && 'documentMode' in document && 11 >= document.documentMode,
  ii = null,
  Hu = null,
  wo = null,
  Zu = !1;
function Uf(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Zu ||
    ii == null ||
    ii !== Xs(n) ||
    ((n = ii),
    'selectionStart' in n && pd(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (wo && bo(wo, n)) ||
      ((wo = n),
      (n = sa(Hu, 'onSelect')),
      0 < n.length &&
        ((t = new cd('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = ii))));
}
function xs(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  );
}
var oi = {
    animationend: xs('Animation', 'AnimationEnd'),
    animationiteration: xs('Animation', 'AnimationIteration'),
    animationstart: xs('Animation', 'AnimationStart'),
    transitionend: xs('Transition', 'TransitionEnd'),
  },
  Dl = {},
  km = {};
Dr &&
  ((km = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete oi.animationend.animation,
    delete oi.animationiteration.animation,
    delete oi.animationstart.animation),
  'TransitionEvent' in window || delete oi.transitionend.transition);
function Ga(e) {
  if (Dl[e]) return Dl[e];
  if (!oi[e]) return e;
  var t = oi[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in km) return (Dl[e] = t[r]);
  return e;
}
var Sm = Ga('animationend'),
  Cm = Ga('animationiteration'),
  Rm = Ga('animationstart'),
  Tm = Ga('transitionend'),
  Am = new Map(),
  zf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function yn(e, t) {
  Am.set(e, t), Vn(t, [e]);
}
for (var Bl = 0; Bl < zf.length; Bl++) {
  var $l = zf[Bl],
    a1 = $l.toLowerCase(),
    l1 = $l[0].toUpperCase() + $l.slice(1);
  yn(a1, 'on' + l1);
}
yn(Sm, 'onAnimationEnd');
yn(Cm, 'onAnimationIteration');
yn(Rm, 'onAnimationStart');
yn('dblclick', 'onDoubleClick');
yn('focusin', 'onFocus');
yn('focusout', 'onBlur');
yn(Tm, 'onTransitionEnd');
ki('onMouseEnter', ['mouseout', 'mouseover']);
ki('onMouseLeave', ['mouseout', 'mouseover']);
ki('onPointerEnter', ['pointerout', 'pointerover']);
ki('onPointerLeave', ['pointerout', 'pointerover']);
Vn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Vn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Vn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Vn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Vn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Vn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var lo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  u1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(lo));
function Mf(e, t, r) {
  var n = e.type || 'unknown-event';
  (e.currentTarget = r), av(n, t, void 0, e), (e.currentTarget = null);
}
function Im(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = n.length - 1; 0 <= s; s--) {
          var a = n[s],
            u = a.instance,
            f = a.currentTarget;
          if (((a = a.listener), u !== o && i.isPropagationStopped())) break e;
          Mf(i, a, f), (o = u);
        }
      else
        for (s = 0; s < n.length; s++) {
          if (
            ((a = n[s]),
            (u = a.instance),
            (f = a.currentTarget),
            (a = a.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Mf(i, a, f), (o = u);
        }
    }
  }
  if (ta) throw ((e = zu), (ta = !1), (zu = null), e);
}
function Te(e, t) {
  var r = t[Qu];
  r === void 0 && (r = t[Qu] = new Set());
  var n = e + '__bubble';
  r.has(n) || (Nm(t, e, 2, !1), r.add(n));
}
function Ul(e, t, r) {
  var n = 0;
  t && (n |= 4), Nm(r, e, n, t);
}
var _s = '_reactListening' + Math.random().toString(36).slice(2);
function jo(e) {
  if (!e[_s]) {
    (e[_s] = !0),
      Dh.forEach(function (r) {
        r !== 'selectionchange' && (u1.has(r) || Ul(r, !1, e), Ul(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_s] || ((t[_s] = !0), Ul('selectionchange', !1, t));
  }
}
function Nm(e, t, r, n) {
  switch (pm(t)) {
    case 1:
      var i = kv;
      break;
    case 4:
      i = Sv;
      break;
    default:
      i = ld;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Uu ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
        ? e.addEventListener(t, r, { passive: i })
        : e.addEventListener(t, r, !1);
}
function zl(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var s = n.tag;
      if (s === 3 || s === 4) {
        var a = n.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = n.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = kn(a)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            n = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Xh(function () {
    var f = o,
      d = id(r),
      h = [];
    e: {
      var w = Am.get(e);
      if (w !== void 0) {
        var S = cd,
          x = e;
        switch (e) {
          case 'keypress':
            if (js(r) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = $v;
            break;
          case 'focusin':
            (x = 'focus'), (S = bl);
            break;
          case 'focusout':
            (x = 'blur'), (S = bl);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = bl;
            break;
          case 'click':
            if (r.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            S = Nf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = Tv;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = Mv;
            break;
          case Sm:
          case Cm:
          case Rm:
            S = Nv;
            break;
          case Tm:
            S = Wv;
            break;
          case 'scroll':
            S = Cv;
            break;
          case 'wheel':
            S = Zv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = Ov;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = Of;
        }
        var E = (t & 4) !== 0,
          R = !E && e === 'scroll',
          y = E ? (w !== null ? w + 'Capture' : null) : w;
        E = [];
        for (var m = f, v; m !== null; ) {
          v = m;
          var C = v.stateNode;
          if (
            (v.tag === 5 &&
              C !== null &&
              ((v = C),
              y !== null && ((C = Io(m, y)), C != null && E.push(Lo(m, C, v)))),
            R)
          )
            break;
          m = m.return;
        }
        0 < E.length &&
          ((w = new S(w, x, null, r, d)), h.push({ event: w, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((w = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          w &&
            r !== Bu &&
            (x = r.relatedTarget || r.fromElement) &&
            (kn(x) || x[Br]))
        )
          break e;
        if (
          (S || w) &&
          ((w =
            d.window === d
              ? d
              : (w = d.ownerDocument)
                ? w.defaultView || w.parentWindow
                : window),
          S
            ? ((x = r.relatedTarget || r.toElement),
              (S = f),
              (x = x ? kn(x) : null),
              x !== null &&
                ((R = Wn(x)), x !== R || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((S = null), (x = f)),
          S !== x)
        ) {
          if (
            ((E = Nf),
            (C = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((E = Of),
              (C = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (m = 'pointer')),
            (R = S == null ? w : si(S)),
            (v = x == null ? w : si(x)),
            (w = new E(C, m + 'leave', S, r, d)),
            (w.target = R),
            (w.relatedTarget = v),
            (C = null),
            kn(d) === f &&
              ((E = new E(y, m + 'enter', x, r, d)),
              (E.target = v),
              (E.relatedTarget = R),
              (C = E)),
            (R = C),
            S && x)
          )
            t: {
              for (E = S, y = x, m = 0, v = E; v; v = Gn(v)) m++;
              for (v = 0, C = y; C; C = Gn(C)) v++;
              for (; 0 < m - v; ) (E = Gn(E)), m--;
              for (; 0 < v - m; ) (y = Gn(y)), v--;
              for (; m--; ) {
                if (E === y || (y !== null && E === y.alternate)) break t;
                (E = Gn(E)), (y = Gn(y));
              }
              E = null;
            }
          else E = null;
          S !== null && Vf(h, w, S, E, !1),
            x !== null && R !== null && Vf(h, R, x, E, !0);
        }
      }
      e: {
        if (
          ((w = f ? si(f) : window),
          (S = w.nodeName && w.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && w.type === 'file'))
        )
          var P = Xv;
        else if (jf(w))
          if (wm) P = n1;
          else {
            P = t1;
            var j = e1;
          }
        else
          (S = w.nodeName) &&
            S.toLowerCase() === 'input' &&
            (w.type === 'checkbox' || w.type === 'radio') &&
            (P = r1);
        if (P && (P = P(e, f))) {
          vm(h, P, r, d);
          break e;
        }
        j && j(e, w, f),
          e === 'focusout' &&
            (j = w._wrapperState) &&
            j.controlled &&
            w.type === 'number' &&
            Fu(w, 'number', w.value);
      }
      switch (((j = f ? si(f) : window), e)) {
        case 'focusin':
          (jf(j) || j.contentEditable === 'true') &&
            ((ii = j), (Hu = f), (wo = null));
          break;
        case 'focusout':
          wo = Hu = ii = null;
          break;
        case 'mousedown':
          Zu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Zu = !1), Uf(h, r, d);
          break;
        case 'selectionchange':
          if (s1) break;
        case 'keydown':
        case 'keyup':
          Uf(h, r, d);
      }
      var b;
      if (fd)
        e: {
          switch (e) {
            case 'compositionstart':
              var U = 'onCompositionStart';
              break e;
            case 'compositionend':
              U = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              U = 'onCompositionUpdate';
              break e;
          }
          U = void 0;
        }
      else
        ni
          ? gm(e, r) && (U = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (U = 'onCompositionStart');
      U &&
        (mm &&
          r.locale !== 'ko' &&
          (ni || U !== 'onCompositionStart'
            ? U === 'onCompositionEnd' && ni && (b = hm())
            : ((tn = d),
              (ud = 'value' in tn ? tn.value : tn.textContent),
              (ni = !0))),
        (j = sa(f, U)),
        0 < j.length &&
          ((U = new Pf(U, e, null, r, d)),
          h.push({ event: U, listeners: j }),
          b ? (U.data = b) : ((b = ym(r)), b !== null && (U.data = b)))),
        (b = Kv ? Gv(e, r) : Jv(e, r)) &&
          ((f = sa(f, 'onBeforeInput')),
          0 < f.length &&
            ((d = new Pf('onBeforeInput', 'beforeinput', null, r, d)),
            h.push({ event: d, listeners: f }),
            (d.data = b)));
    }
    Im(h, t);
  });
}
function Lo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function sa(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Io(e, r)),
      o != null && n.unshift(Lo(e, o, i)),
      (o = Io(e, t)),
      o != null && n.push(Lo(e, o, i))),
      (e = e.return);
  }
  return n;
}
function Gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vf(e, t, r, n, i) {
  for (var o = t._reactName, s = []; r !== null && r !== n; ) {
    var a = r,
      u = a.alternate,
      f = a.stateNode;
    if (u !== null && u === n) break;
    a.tag === 5 &&
      f !== null &&
      ((a = f),
      i
        ? ((u = Io(r, o)), u != null && s.unshift(Lo(r, u, a)))
        : i || ((u = Io(r, o)), u != null && s.push(Lo(r, u, a)))),
      (r = r.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var c1 = /\r\n?/g,
  d1 = /\u0000|\uFFFD/g;
function Wf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      c1,
      `
`,
    )
    .replace(d1, '');
}
function Es(e, t, r) {
  if (((t = Wf(t)), Wf(e) !== t && r)) throw Error(D(425));
}
function aa() {}
var qu = null,
  Ku = null;
function Gu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ju = typeof setTimeout == 'function' ? setTimeout : void 0,
  f1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hf = typeof Promise == 'function' ? Promise : void 0,
  p1 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hf < 'u'
        ? function (e) {
            return Hf.resolve(null).then(e).catch(h1);
          }
        : Ju;
function h1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(i), Oo(t);
          return;
        }
        n--;
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++;
    r = i;
  } while (r);
  Oo(t);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Zf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e;
        t--;
      } else r === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zi = Math.random().toString(36).slice(2),
  mr = '__reactFiber$' + zi,
  Do = '__reactProps$' + zi,
  Br = '__reactContainer$' + zi,
  Qu = '__reactEvents$' + zi,
  m1 = '__reactListeners$' + zi,
  g1 = '__reactHandles$' + zi;
function kn(e) {
  var t = e[mr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Br] || r[mr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Zf(e); e !== null; ) {
          if ((r = e[mr])) return r;
          e = Zf(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function ns(e) {
  return (
    (e = e[mr] || e[Br]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function si(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Ja(e) {
  return e[Do] || null;
}
var Yu = [],
  ai = -1;
function vn(e) {
  return { current: e };
}
function Ie(e) {
  0 > ai || ((e.current = Yu[ai]), (Yu[ai] = null), ai--);
}
function Se(e, t) {
  ai++, (Yu[ai] = e.current), (e.current = t);
}
var mn = {},
  dt = vn(mn),
  Ct = vn(!1),
  jn = mn;
function Si(e, t) {
  var r = e.type.contextTypes;
  if (!r) return mn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in r) i[o] = t[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Rt(e) {
  return (e = e.childContextTypes), e != null;
}
function la() {
  Ie(Ct), Ie(dt);
}
function qf(e, t, r) {
  if (dt.current !== mn) throw Error(D(168));
  Se(dt, t), Se(Ct, r);
}
function Pm(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(D(108, ev(e) || 'Unknown', i));
  return Le({}, r, n);
}
function ua(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (jn = dt.current),
    Se(dt, e),
    Se(Ct, Ct.current),
    !0
  );
}
function Kf(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(D(169));
  r
    ? ((e = Pm(e, t, jn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Ie(Ct),
      Ie(dt),
      Se(dt, e))
    : Ie(Ct),
    Se(Ct, r);
}
var Nr = null,
  Qa = !1,
  Vl = !1;
function Om(e) {
  Nr === null ? (Nr = [e]) : Nr.push(e);
}
function y1(e) {
  (Qa = !0), Om(e);
}
function wn() {
  if (!Vl && Nr !== null) {
    Vl = !0;
    var e = 0,
      t = _e;
    try {
      var r = Nr;
      for (_e = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Nr = null), (Qa = !1);
    } catch (i) {
      throw (Nr !== null && (Nr = Nr.slice(e + 1)), nm(od, wn), i);
    } finally {
      (_e = t), (Vl = !1);
    }
  }
  return null;
}
var li = [],
  ui = 0,
  ca = null,
  da = 0,
  Vt = [],
  Wt = 0,
  Ln = null,
  Pr = 1,
  Or = '';
function _n(e, t) {
  (li[ui++] = da), (li[ui++] = ca), (ca = e), (da = t);
}
function Fm(e, t, r) {
  (Vt[Wt++] = Pr), (Vt[Wt++] = Or), (Vt[Wt++] = Ln), (Ln = e);
  var n = Pr;
  e = Or;
  var i = 32 - nr(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var o = 32 - nr(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (n & ((1 << s) - 1)).toString(32)),
      (n >>= s),
      (i -= s),
      (Pr = (1 << (32 - nr(t) + i)) | (r << i) | n),
      (Or = o + e);
  } else (Pr = (1 << o) | (r << i) | n), (Or = e);
}
function hd(e) {
  e.return !== null && (_n(e, 1), Fm(e, 1, 0));
}
function md(e) {
  for (; e === ca; )
    (ca = li[--ui]), (li[ui] = null), (da = li[--ui]), (li[ui] = null);
  for (; e === Ln; )
    (Ln = Vt[--Wt]),
      (Vt[Wt] = null),
      (Or = Vt[--Wt]),
      (Vt[Wt] = null),
      (Pr = Vt[--Wt]),
      (Vt[Wt] = null);
}
var jt = null,
  bt = null,
  Pe = !1,
  tr = null;
function bm(e, t) {
  var r = Ht(5, null, null, 0);
  (r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Gf(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (jt = e), (bt = ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (jt = e), (bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Ln !== null ? { id: Pr, overflow: Or } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ht(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (jt = e),
            (bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ec(e) {
  if (Pe) {
    var t = bt;
    if (t) {
      var r = t;
      if (!Gf(e, t)) {
        if (Xu(e)) throw Error(D(418));
        t = ln(r.nextSibling);
        var n = jt;
        t && Gf(e, t)
          ? bm(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (jt = e));
      }
    } else {
      if (Xu(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (Pe = !1), (jt = e);
    }
  }
}
function Jf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  jt = e;
}
function ks(e) {
  if (e !== jt) return !1;
  if (!Pe) return Jf(e), (Pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Gu(e.type, e.memoizedProps))),
    t && (t = bt))
  ) {
    if (Xu(e)) throw (jm(), Error(D(418)));
    for (; t; ) bm(e, t), (t = ln(t.nextSibling));
  }
  if ((Jf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === '/$') {
            if (t === 0) {
              bt = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      bt = null;
    }
  } else bt = jt ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function jm() {
  for (var e = bt; e; ) e = ln(e.nextSibling);
}
function Ci() {
  (bt = jt = null), (Pe = !1);
}
function gd(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
var v1 = Vr.ReactCurrentBatchConfig;
function Xi(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(D(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(D(147, e));
      var i = n,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(D(284));
    if (!r._owner) throw Error(D(290, e));
  }
  return e;
}
function Ss(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Qf(e) {
  var t = e._init;
  return t(e._payload);
}
function Lm(e) {
  function t(y, m) {
    if (e) {
      var v = y.deletions;
      v === null ? ((y.deletions = [m]), (y.flags |= 16)) : v.push(m);
    }
  }
  function r(y, m) {
    if (!e) return null;
    for (; m !== null; ) t(y, m), (m = m.sibling);
    return null;
  }
  function n(y, m) {
    for (y = new Map(); m !== null; )
      m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling);
    return y;
  }
  function i(y, m) {
    return (y = fn(y, m)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, m, v) {
    return (
      (y.index = v),
      e
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((y.flags |= 2), m) : v)
            : ((y.flags |= 2), m))
        : ((y.flags |= 1048576), m)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, m, v, C) {
    return m === null || m.tag !== 6
      ? ((m = Jl(v, y.mode, C)), (m.return = y), m)
      : ((m = i(m, v)), (m.return = y), m);
  }
  function u(y, m, v, C) {
    var P = v.type;
    return P === ri
      ? d(y, m, v.props.children, C, v.key)
      : m !== null &&
          (m.elementType === P ||
            (typeof P == 'object' &&
              P !== null &&
              P.$$typeof === Gr &&
              Qf(P) === m.type))
        ? ((C = i(m, v.props)), (C.ref = Xi(y, m, v)), (C.return = y), C)
        : ((C = Ms(v.type, v.key, v.props, null, y.mode, C)),
          (C.ref = Xi(y, m, v)),
          (C.return = y),
          C);
  }
  function f(y, m, v, C) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Ql(v, y.mode, C)), (m.return = y), m)
      : ((m = i(m, v.children || [])), (m.return = y), m);
  }
  function d(y, m, v, C, P) {
    return m === null || m.tag !== 7
      ? ((m = Pn(v, y.mode, C, P)), (m.return = y), m)
      : ((m = i(m, v)), (m.return = y), m);
  }
  function h(y, m, v) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = Jl('' + m, y.mode, v)), (m.return = y), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case ps:
          return (
            (v = Ms(m.type, m.key, m.props, null, y.mode, v)),
            (v.ref = Xi(y, null, m)),
            (v.return = y),
            v
          );
        case ti:
          return (m = Ql(m, y.mode, v)), (m.return = y), m;
        case Gr:
          var C = m._init;
          return h(y, C(m._payload), v);
      }
      if (so(m) || Ki(m))
        return (m = Pn(m, y.mode, v, null)), (m.return = y), m;
      Ss(y, m);
    }
    return null;
  }
  function w(y, m, v, C) {
    var P = m !== null ? m.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return P !== null ? null : a(y, m, '' + v, C);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case ps:
          return v.key === P ? u(y, m, v, C) : null;
        case ti:
          return v.key === P ? f(y, m, v, C) : null;
        case Gr:
          return (P = v._init), w(y, m, P(v._payload), C);
      }
      if (so(v) || Ki(v)) return P !== null ? null : d(y, m, v, C, null);
      Ss(y, v);
    }
    return null;
  }
  function S(y, m, v, C, P) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (y = y.get(v) || null), a(m, y, '' + C, P);
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case ps:
          return (y = y.get(C.key === null ? v : C.key) || null), u(m, y, C, P);
        case ti:
          return (y = y.get(C.key === null ? v : C.key) || null), f(m, y, C, P);
        case Gr:
          var j = C._init;
          return S(y, m, v, j(C._payload), P);
      }
      if (so(C) || Ki(C)) return (y = y.get(v) || null), d(m, y, C, P, null);
      Ss(m, C);
    }
    return null;
  }
  function x(y, m, v, C) {
    for (
      var P = null, j = null, b = m, U = (m = 0), ae = null;
      b !== null && U < v.length;
      U++
    ) {
      b.index > U ? ((ae = b), (b = null)) : (ae = b.sibling);
      var Y = w(y, b, v[U], C);
      if (Y === null) {
        b === null && (b = ae);
        break;
      }
      e && b && Y.alternate === null && t(y, b),
        (m = o(Y, m, U)),
        j === null ? (P = Y) : (j.sibling = Y),
        (j = Y),
        (b = ae);
    }
    if (U === v.length) return r(y, b), Pe && _n(y, U), P;
    if (b === null) {
      for (; U < v.length; U++)
        (b = h(y, v[U], C)),
          b !== null &&
            ((m = o(b, m, U)), j === null ? (P = b) : (j.sibling = b), (j = b));
      return Pe && _n(y, U), P;
    }
    for (b = n(y, b); U < v.length; U++)
      (ae = S(b, y, U, v[U], C)),
        ae !== null &&
          (e && ae.alternate !== null && b.delete(ae.key === null ? U : ae.key),
          (m = o(ae, m, U)),
          j === null ? (P = ae) : (j.sibling = ae),
          (j = ae));
    return (
      e &&
        b.forEach(function (Oe) {
          return t(y, Oe);
        }),
      Pe && _n(y, U),
      P
    );
  }
  function E(y, m, v, C) {
    var P = Ki(v);
    if (typeof P != 'function') throw Error(D(150));
    if (((v = P.call(v)), v == null)) throw Error(D(151));
    for (
      var j = (P = null), b = m, U = (m = 0), ae = null, Y = v.next();
      b !== null && !Y.done;
      U++, Y = v.next()
    ) {
      b.index > U ? ((ae = b), (b = null)) : (ae = b.sibling);
      var Oe = w(y, b, Y.value, C);
      if (Oe === null) {
        b === null && (b = ae);
        break;
      }
      e && b && Oe.alternate === null && t(y, b),
        (m = o(Oe, m, U)),
        j === null ? (P = Oe) : (j.sibling = Oe),
        (j = Oe),
        (b = ae);
    }
    if (Y.done) return r(y, b), Pe && _n(y, U), P;
    if (b === null) {
      for (; !Y.done; U++, Y = v.next())
        (Y = h(y, Y.value, C)),
          Y !== null &&
            ((m = o(Y, m, U)), j === null ? (P = Y) : (j.sibling = Y), (j = Y));
      return Pe && _n(y, U), P;
    }
    for (b = n(y, b); !Y.done; U++, Y = v.next())
      (Y = S(b, y, U, Y.value, C)),
        Y !== null &&
          (e && Y.alternate !== null && b.delete(Y.key === null ? U : Y.key),
          (m = o(Y, m, U)),
          j === null ? (P = Y) : (j.sibling = Y),
          (j = Y));
    return (
      e &&
        b.forEach(function (te) {
          return t(y, te);
        }),
      Pe && _n(y, U),
      P
    );
  }
  function R(y, m, v, C) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === ri &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case ps:
          e: {
            for (var P = v.key, j = m; j !== null; ) {
              if (j.key === P) {
                if (((P = v.type), P === ri)) {
                  if (j.tag === 7) {
                    r(y, j.sibling),
                      (m = i(j, v.props.children)),
                      (m.return = y),
                      (y = m);
                    break e;
                  }
                } else if (
                  j.elementType === P ||
                  (typeof P == 'object' &&
                    P !== null &&
                    P.$$typeof === Gr &&
                    Qf(P) === j.type)
                ) {
                  r(y, j.sibling),
                    (m = i(j, v.props)),
                    (m.ref = Xi(y, j, v)),
                    (m.return = y),
                    (y = m);
                  break e;
                }
                r(y, j);
                break;
              } else t(y, j);
              j = j.sibling;
            }
            v.type === ri
              ? ((m = Pn(v.props.children, y.mode, C, v.key)),
                (m.return = y),
                (y = m))
              : ((C = Ms(v.type, v.key, v.props, null, y.mode, C)),
                (C.ref = Xi(y, m, v)),
                (C.return = y),
                (y = C));
          }
          return s(y);
        case ti:
          e: {
            for (j = v.key; m !== null; ) {
              if (m.key === j)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  r(y, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = y),
                    (y = m);
                  break e;
                } else {
                  r(y, m);
                  break;
                }
              else t(y, m);
              m = m.sibling;
            }
            (m = Ql(v, y.mode, C)), (m.return = y), (y = m);
          }
          return s(y);
        case Gr:
          return (j = v._init), R(y, m, j(v._payload), C);
      }
      if (so(v)) return x(y, m, v, C);
      if (Ki(v)) return E(y, m, v, C);
      Ss(y, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        m !== null && m.tag === 6
          ? (r(y, m.sibling), (m = i(m, v)), (m.return = y), (y = m))
          : (r(y, m), (m = Jl(v, y.mode, C)), (m.return = y), (y = m)),
        s(y))
      : r(y, m);
  }
  return R;
}
var Ri = Lm(!0),
  Dm = Lm(!1),
  fa = vn(null),
  pa = null,
  ci = null,
  yd = null;
function vd() {
  yd = ci = pa = null;
}
function wd(e) {
  var t = fa.current;
  Ie(fa), (e._currentValue = t);
}
function tc(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function vi(e, t) {
  (pa = e),
    (yd = ci = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (kt = !0), (e.firstContext = null));
}
function Kt(e) {
  var t = e._currentValue;
  if (yd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ci === null)) {
      if (pa === null) throw Error(D(308));
      (ci = e), (pa.dependencies = { lanes: 0, firstContext: e });
    } else ci = ci.next = e;
  return t;
}
var Sn = null;
function xd(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function Bm(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), xd(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    $r(e, n)
  );
}
function $r(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Jr = !1;
function _d(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $m(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function jr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ge & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      $r(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), xd(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    $r(e, r)
  );
}
function Ls(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), sd(e, r);
  }
}
function Yf(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var s = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (r = r.next);
      } while (r !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function ha(e, t, r, n) {
  var i = e.updateQueue;
  Jr = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      f = u.next;
    (u.next = null), s === null ? (o = f) : (s.next = f), (s = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = f) : (a.next = f),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = i.baseState;
    (s = 0), (d = f = u = null), (a = o);
    do {
      var w = a.lane,
        S = a.eventTime;
      if ((n & w) === w) {
        d !== null &&
          (d = d.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            E = a;
          switch (((w = t), (S = r), E.tag)) {
            case 1:
              if (((x = E.payload), typeof x == 'function')) {
                h = x.call(S, h, w);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = E.payload),
                (w = typeof x == 'function' ? x.call(S, h, w) : x),
                w == null)
              )
                break e;
              h = Le({}, h, w);
              break e;
            case 2:
              Jr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (w = i.effects),
          w === null ? (i.effects = [a]) : w.push(a));
      } else
        (S = {
          eventTime: S,
          lane: w,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((f = d = S), (u = h)) : (d = d.next = S),
          (s |= w);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (w = a),
          (a = w.next),
          (w.next = null),
          (i.lastBaseUpdate = w),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = h),
      (i.baseState = u),
      (i.firstBaseUpdate = f),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Bn |= s), (e.lanes = s), (e.memoizedState = h);
  }
}
function Xf(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != 'function'))
          throw Error(D(191, i));
        i.call(n);
      }
    }
}
var is = {},
  xr = vn(is),
  Bo = vn(is),
  $o = vn(is);
function Cn(e) {
  if (e === is) throw Error(D(174));
  return e;
}
function Ed(e, t) {
  switch ((Se($o, t), Se(Bo, e), Se(xr, is), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ju(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ju(t, e));
  }
  Ie(xr), Se(xr, t);
}
function Ti() {
  Ie(xr), Ie(Bo), Ie($o);
}
function Um(e) {
  Cn($o.current);
  var t = Cn(xr.current),
    r = ju(t, e.type);
  t !== r && (Se(Bo, e), Se(xr, r));
}
function kd(e) {
  Bo.current === e && (Ie(xr), Ie(Bo));
}
var be = vn(0);
function ma(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Wl = [];
function Sd() {
  for (var e = 0; e < Wl.length; e++)
    Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var Ds = Vr.ReactCurrentDispatcher,
  Hl = Vr.ReactCurrentBatchConfig,
  Dn = 0,
  je = null,
  Xe = null,
  tt = null,
  ga = !1,
  xo = !1,
  Uo = 0,
  w1 = 0;
function lt() {
  throw Error(D(321));
}
function Cd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!sr(e[r], t[r])) return !1;
  return !0;
}
function Rd(e, t, r, n, i, o) {
  if (
    ((Dn = o),
    (je = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ds.current = e === null || e.memoizedState === null ? k1 : S1),
    (e = r(n, i)),
    xo)
  ) {
    o = 0;
    do {
      if (((xo = !1), (Uo = 0), 25 <= o)) throw Error(D(301));
      (o += 1),
        (tt = Xe = null),
        (t.updateQueue = null),
        (Ds.current = C1),
        (e = r(n, i));
    } while (xo);
  }
  if (
    ((Ds.current = ya),
    (t = Xe !== null && Xe.next !== null),
    (Dn = 0),
    (tt = Xe = je = null),
    (ga = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function Td() {
  var e = Uo !== 0;
  return (Uo = 0), e;
}
function cr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return tt === null ? (je.memoizedState = tt = e) : (tt = tt.next = e), tt;
}
function Gt() {
  if (Xe === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = tt === null ? je.memoizedState : tt.next;
  if (t !== null) (tt = t), (Xe = e);
  else {
    if (e === null) throw Error(D(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      tt === null ? (je.memoizedState = tt = e) : (tt = tt.next = e);
  }
  return tt;
}
function zo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Zl(e) {
  var t = Gt(),
    r = t.queue;
  if (r === null) throw Error(D(311));
  r.lastRenderedReducer = e;
  var n = Xe,
    i = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (n.baseQueue = i = o), (r.pending = null);
  }
  if (i !== null) {
    (o = i.next), (n = n.baseState);
    var a = (s = null),
      u = null,
      f = o;
    do {
      var d = f.lane;
      if ((Dn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (n = f.hasEagerState ? f.eagerState : e(n, f.action));
      else {
        var h = {
          lane: d,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        u === null ? ((a = u = h), (s = n)) : (u = u.next = h),
          (je.lanes |= d),
          (Bn |= d);
      }
      f = f.next;
    } while (f !== null && f !== o);
    u === null ? (s = n) : (u.next = a),
      sr(n, t.memoizedState) || (kt = !0),
      (t.memoizedState = n),
      (t.baseState = s),
      (t.baseQueue = u),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (je.lanes |= o), (Bn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function ql(e) {
  var t = Gt(),
    r = t.queue;
  if (r === null) throw Error(D(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    sr(o, t.memoizedState) || (kt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function zm() {}
function Mm(e, t) {
  var r = je,
    n = Gt(),
    i = t(),
    o = !sr(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (kt = !0)),
    (n = n.queue),
    Ad(Hm.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || o || (tt !== null && tt.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Mo(9, Wm.bind(null, r, n, i, t), void 0, null),
      nt === null)
    )
      throw Error(D(349));
    Dn & 30 || Vm(r, t, i);
  }
  return i;
}
function Vm(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (je.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Wm(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Zm(t) && qm(e);
}
function Hm(e, t, r) {
  return r(function () {
    Zm(t) && qm(e);
  });
}
function Zm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !sr(e, r);
  } catch {
    return !0;
  }
}
function qm(e) {
  var t = $r(e, 1);
  t !== null && ir(t, e, 1, -1);
}
function ep(e) {
  var t = cr();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = E1.bind(null, je, e)),
    [t.memoizedState, e]
  );
}
function Mo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (je.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Km() {
  return Gt().memoizedState;
}
function Bs(e, t, r, n) {
  var i = cr();
  (je.flags |= e),
    (i.memoizedState = Mo(1 | t, r, void 0, n === void 0 ? null : n));
}
function Ya(e, t, r, n) {
  var i = Gt();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (Xe !== null) {
    var s = Xe.memoizedState;
    if (((o = s.destroy), n !== null && Cd(n, s.deps))) {
      i.memoizedState = Mo(t, r, o, n);
      return;
    }
  }
  (je.flags |= e), (i.memoizedState = Mo(1 | t, r, o, n));
}
function tp(e, t) {
  return Bs(8390656, 8, e, t);
}
function Ad(e, t) {
  return Ya(2048, 8, e, t);
}
function Gm(e, t) {
  return Ya(4, 2, e, t);
}
function Jm(e, t) {
  return Ya(4, 4, e, t);
}
function Qm(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ym(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Ya(4, 4, Qm.bind(null, t, e), r)
  );
}
function Id() {}
function Xm(e, t) {
  var r = Gt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Cd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function eg(e, t) {
  var r = Gt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Cd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function tg(e, t, r) {
  return Dn & 21
    ? (sr(r, t) || ((r = sm()), (je.lanes |= r), (Bn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (kt = !0)), (e.memoizedState = r));
}
function x1(e, t) {
  var r = _e;
  (_e = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (_e = r), (Hl.transition = n);
  }
}
function rg() {
  return Gt().memoizedState;
}
function _1(e, t, r) {
  var n = dn(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ng(e))
  )
    ig(t, r);
  else if (((r = Bm(e, t, r, n)), r !== null)) {
    var i = mt();
    ir(r, e, n, i), og(r, t, n);
  }
}
function E1(e, t, r) {
  var n = dn(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (ng(e)) ig(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, r);
        if (((i.hasEagerState = !0), (i.eagerState = a), sr(a, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), xd(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = Bm(e, t, i, n)),
      r !== null && ((i = mt()), ir(r, e, n, i), og(r, t, n));
  }
}
function ng(e) {
  var t = e.alternate;
  return e === je || (t !== null && t === je);
}
function ig(e, t) {
  xo = ga = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function og(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), sd(e, r);
  }
}
var ya = {
    readContext: Kt,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  k1 = {
    readContext: Kt,
    useCallback: function (e, t) {
      return (cr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Kt,
    useEffect: tp,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Bs(4194308, 4, Qm.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = cr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = cr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = _1.bind(null, je, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = cr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ep,
    useDebugValue: Id,
    useDeferredValue: function (e) {
      return (cr().memoizedState = e);
    },
    useTransition: function () {
      var e = ep(!1),
        t = e[0];
      return (e = x1.bind(null, e[1])), (cr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = je,
        i = cr();
      if (Pe) {
        if (r === void 0) throw Error(D(407));
        r = r();
      } else {
        if (((r = t()), nt === null)) throw Error(D(349));
        Dn & 30 || Vm(n, t, r);
      }
      i.memoizedState = r;
      var o = { value: r, getSnapshot: t };
      return (
        (i.queue = o),
        tp(Hm.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        Mo(9, Wm.bind(null, n, o, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = cr(),
        t = nt.identifierPrefix;
      if (Pe) {
        var r = Or,
          n = Pr;
        (r = (n & ~(1 << (32 - nr(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Uo++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':');
      } else (r = w1++), (t = ':' + t + 'r' + r.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  S1 = {
    readContext: Kt,
    useCallback: Xm,
    useContext: Kt,
    useEffect: Ad,
    useImperativeHandle: Ym,
    useInsertionEffect: Gm,
    useLayoutEffect: Jm,
    useMemo: eg,
    useReducer: Zl,
    useRef: Km,
    useState: function () {
      return Zl(zo);
    },
    useDebugValue: Id,
    useDeferredValue: function (e) {
      var t = Gt();
      return tg(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(zo)[0],
        t = Gt().memoizedState;
      return [e, t];
    },
    useMutableSource: zm,
    useSyncExternalStore: Mm,
    useId: rg,
    unstable_isNewReconciler: !1,
  },
  C1 = {
    readContext: Kt,
    useCallback: Xm,
    useContext: Kt,
    useEffect: Ad,
    useImperativeHandle: Ym,
    useInsertionEffect: Gm,
    useLayoutEffect: Jm,
    useMemo: eg,
    useReducer: ql,
    useRef: Km,
    useState: function () {
      return ql(zo);
    },
    useDebugValue: Id,
    useDeferredValue: function (e) {
      var t = Gt();
      return Xe === null ? (t.memoizedState = e) : tg(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(zo)[0],
        t = Gt().memoizedState;
      return [e, t];
    },
    useMutableSource: zm,
    useSyncExternalStore: Mm,
    useId: rg,
    unstable_isNewReconciler: !1,
  };
function Xt(e, t) {
  if (e && e.defaultProps) {
    (t = Le({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function rc(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Le({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Xa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = mt(),
      i = dn(e),
      o = jr(n, i);
    (o.payload = t),
      r != null && (o.callback = r),
      (t = un(e, o, i)),
      t !== null && (ir(t, e, i, n), Ls(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = mt(),
      i = dn(e),
      o = jr(n, i);
    (o.tag = 1),
      (o.payload = t),
      r != null && (o.callback = r),
      (t = un(e, o, i)),
      t !== null && (ir(t, e, i, n), Ls(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = mt(),
      n = dn(e),
      i = jr(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = un(e, i, n)),
      t !== null && (ir(t, e, n, r), Ls(t, e, n));
  },
};
function rp(e, t, r, n, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bo(r, n) || !bo(i, o)
        : !0
  );
}
function sg(e, t, r) {
  var n = !1,
    i = mn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Kt(o))
      : ((i = Rt(t) ? jn : dt.current),
        (n = t.contextTypes),
        (o = (n = n != null) ? Si(e, i) : mn)),
    (t = new t(r, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xa),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function np(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Xa.enqueueReplaceState(t, t.state, null);
}
function nc(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = {}), _d(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Kt(o))
    : ((o = Rt(t) ? jn : dt.current), (i.context = Si(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (rc(e, t, o, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Xa.enqueueReplaceState(i, i.state, null),
      ha(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ai(e, t) {
  try {
    var r = '',
      n = t;
    do (r += Xy(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Kl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ic(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var R1 = typeof WeakMap == 'function' ? WeakMap : Map;
function ag(e, t, r) {
  (r = jr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      wa || ((wa = !0), (hc = n)), ic(e, t);
    }),
    r
  );
}
function lg(e, t, r) {
  (r = jr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == 'function') {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        ic(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (r.callback = function () {
        ic(e, t),
          typeof n != 'function' &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    r
  );
}
function ip(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new R1();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = U1.bind(null, e, t, r)), t.then(e, e));
}
function op(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sp(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = jr(-1, 1)), (t.tag = 2), un(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var T1 = Vr.ReactCurrentOwner,
  kt = !1;
function pt(e, t, r, n) {
  t.child = e === null ? Dm(t, null, r, n) : Ri(t, e.child, r, n);
}
function ap(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return (
    vi(t, i),
    (n = Rd(e, t, r, n, o, i)),
    (r = Td()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ur(e, t, i))
      : (Pe && r && hd(t), (t.flags |= 1), pt(e, t, n, i), t.child)
  );
}
function lp(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == 'function' &&
      !Dd(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ug(e, t, o, n, i))
      : ((e = Ms(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : bo), r(s, n) && e.ref === t.ref)
    )
      return Ur(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = fn(o, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ug(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bo(o, n) && e.ref === t.ref)
      if (((kt = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (kt = !0);
      else return (t.lanes = e.lanes), Ur(e, t, i);
  }
  return oc(e, t, r, n, i);
}
function cg(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Se(fi, Ft),
        (Ft |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Se(fi, Ft),
          (Ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : r),
        Se(fi, Ft),
        (Ft |= n);
    }
  else
    o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Se(fi, Ft),
      (Ft |= n);
  return pt(e, t, i, r), t.child;
}
function dg(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function oc(e, t, r, n, i) {
  var o = Rt(r) ? jn : dt.current;
  return (
    (o = Si(t, o)),
    vi(t, i),
    (r = Rd(e, t, r, n, o, i)),
    (n = Td()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ur(e, t, i))
      : (Pe && n && hd(t), (t.flags |= 1), pt(e, t, r, i), t.child)
  );
}
function up(e, t, r, n, i) {
  if (Rt(r)) {
    var o = !0;
    ua(t);
  } else o = !1;
  if ((vi(t, i), t.stateNode === null))
    $s(e, t), sg(t, r, n), nc(t, r, n, i), (n = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var u = s.context,
      f = r.contextType;
    typeof f == 'object' && f !== null
      ? (f = Kt(f))
      : ((f = Rt(r) ? jn : dt.current), (f = Si(t, f)));
    var d = r.getDerivedStateFromProps,
      h =
        typeof d == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== n || u !== f) && np(t, s, n, f)),
      (Jr = !1);
    var w = t.memoizedState;
    (s.state = w),
      ha(t, n, s, i),
      (u = t.memoizedState),
      a !== n || w !== u || Ct.current || Jr
        ? (typeof d == 'function' && (rc(t, r, d, n), (u = t.memoizedState)),
          (a = Jr || rp(t, r, a, n, w, u, f))
            ? (h ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = u)),
          (s.props = n),
          (s.state = u),
          (s.context = f),
          (n = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (n = !1));
  } else {
    (s = t.stateNode),
      $m(e, t),
      (a = t.memoizedProps),
      (f = t.type === t.elementType ? a : Xt(t.type, a)),
      (s.props = f),
      (h = t.pendingProps),
      (w = s.context),
      (u = r.contextType),
      typeof u == 'object' && u !== null
        ? (u = Kt(u))
        : ((u = Rt(r) ? jn : dt.current), (u = Si(t, u)));
    var S = r.getDerivedStateFromProps;
    (d =
      typeof S == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== h || w !== u) && np(t, s, n, u)),
      (Jr = !1),
      (w = t.memoizedState),
      (s.state = w),
      ha(t, n, s, i);
    var x = t.memoizedState;
    a !== h || w !== x || Ct.current || Jr
      ? (typeof S == 'function' && (rc(t, r, S, n), (x = t.memoizedState)),
        (f = Jr || rp(t, r, f, n, w, x, u) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(n, x, u),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(n, x, u)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = x)),
        (s.props = n),
        (s.state = x),
        (s.context = u),
        (n = f))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return sc(e, t, r, n, o, i);
}
function sc(e, t, r, n, i, o) {
  dg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!n && !s) return i && Kf(t, r, !1), Ur(e, t, o);
  (n = t.stateNode), (T1.current = t);
  var a =
    s && typeof r.getDerivedStateFromError != 'function' ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ri(t, e.child, null, o)), (t.child = Ri(t, null, a, o)))
      : pt(e, t, a, o),
    (t.memoizedState = n.state),
    i && Kf(t, r, !0),
    t.child
  );
}
function fg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qf(e, t.context, !1),
    Ed(e, t.containerInfo);
}
function cp(e, t, r, n, i) {
  return Ci(), gd(i), (t.flags |= 256), pt(e, t, r, n), t.child;
}
var ac = { dehydrated: null, treeContext: null, retryLane: 0 };
function lc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pg(e, t, r) {
  var n = t.pendingProps,
    i = be.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Se(be, i & 1),
    e === null)
  )
    return (
      ec(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = n.children),
          (e = n.fallback),
          o
            ? ((n = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(n & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = rl(s, n, 0, null)),
              (e = Pn(e, n, r, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = lc(r)),
              (t.memoizedState = ac),
              e)
            : Nd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return A1(e, t, s, n, a, i, r);
  if (o) {
    (o = n.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var u = { mode: 'hidden', children: n.children };
    return (
      !(s & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = u),
          (t.deletions = null))
        : ((n = fn(i, u)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = fn(a, o)) : ((o = Pn(o, s, r, null)), (o.flags |= 2)),
      (o.return = t),
      (n.return = t),
      (n.sibling = o),
      (t.child = n),
      (n = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? lc(r)
          : {
              baseLanes: s.baseLanes | r,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~r),
      (t.memoizedState = ac),
      n
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (n = fn(o, { mode: 'visible', children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Nd(e, t) {
  return (
    (t = rl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cs(e, t, r, n) {
  return (
    n !== null && gd(n),
    Ri(t, e.child, null, r),
    (e = Nd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function A1(e, t, r, n, i, o, s) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Kl(Error(D(422)))), Cs(e, t, s, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = n.fallback),
          (i = t.mode),
          (n = rl({ mode: 'visible', children: n.children }, i, 0, null)),
          (o = Pn(o, i, s, null)),
          (o.flags |= 2),
          (n.return = t),
          (o.return = t),
          (n.sibling = o),
          (t.child = n),
          t.mode & 1 && Ri(t, e.child, null, s),
          (t.child.memoizedState = lc(s)),
          (t.memoizedState = ac),
          o);
  if (!(t.mode & 1)) return Cs(e, t, s, null);
  if (i.data === '$!') {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (o = Error(D(419))), (n = Kl(o, n, void 0)), Cs(e, t, s, n);
  }
  if (((a = (s & e.childLanes) !== 0), kt || a)) {
    if (((n = nt), n !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), $r(e, i), ir(n, e, i, -1));
    }
    return Ld(), (n = Kl(Error(D(421)))), Cs(e, t, s, n);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = z1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (bt = ln(i.nextSibling)),
      (jt = t),
      (Pe = !0),
      (tr = null),
      e !== null &&
        ((Vt[Wt++] = Pr),
        (Vt[Wt++] = Or),
        (Vt[Wt++] = Ln),
        (Pr = e.id),
        (Or = e.overflow),
        (Ln = t)),
      (t = Nd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function dp(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), tc(e.return, t, r);
}
function Gl(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = r),
      (o.tailMode = i));
}
function hg(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((pt(e, t, n.children, r), (n = be.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dp(e, r, t);
        else if (e.tag === 19) dp(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Se(be, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && ma(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          Gl(t, !1, i, r, o);
        break;
      case 'backwards':
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ma(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        Gl(t, !0, r, null, o);
        break;
      case 'together':
        Gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $s(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ur(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, r = fn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = fn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function I1(e, t, r) {
  switch (t.tag) {
    case 3:
      fg(t), Ci();
      break;
    case 5:
      Um(t);
      break;
    case 1:
      Rt(t.type) && ua(t);
      break;
    case 4:
      Ed(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      Se(fa, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Se(be, be.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? pg(e, t, r)
            : (Se(be, be.current & 1),
              (e = Ur(e, t, r)),
              e !== null ? e.sibling : null);
      Se(be, be.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return hg(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Se(be, be.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cg(e, t, r);
  }
  return Ur(e, t, r);
}
var mg, uc, gg, yg;
mg = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
uc = function () {};
gg = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), Cn(xr.current);
    var o = null;
    switch (r) {
      case 'input':
        (i = Pu(e, i)), (n = Pu(e, n)), (o = []);
        break;
      case 'select':
        (i = Le({}, i, { value: void 0 })),
          (n = Le({}, n, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = bu(e, i)), (n = bu(e, n)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof n.onClick == 'function' &&
          (e.onclick = aa);
    }
    Lu(r, n);
    var s;
    r = null;
    for (f in i)
      if (!n.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
        if (f === 'style') {
          var a = i[f];
          for (s in a) a.hasOwnProperty(s) && (r || (r = {}), (r[s] = ''));
        } else
          f !== 'dangerouslySetInnerHTML' &&
            f !== 'children' &&
            f !== 'suppressContentEditableWarning' &&
            f !== 'suppressHydrationWarning' &&
            f !== 'autoFocus' &&
            (To.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in n) {
      var u = n[f];
      if (
        ((a = i != null ? i[f] : void 0),
        n.hasOwnProperty(f) && u !== a && (u != null || a != null))
      )
        if (f === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (r || (r = {}), (r[s] = ''));
            for (s in u)
              u.hasOwnProperty(s) &&
                a[s] !== u[s] &&
                (r || (r = {}), (r[s] = u[s]));
          } else r || (o || (o = []), o.push(f, r)), (r = u);
        else
          f === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(f, u))
            : f === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (o = o || []).push(f, '' + u)
              : f !== 'suppressContentEditableWarning' &&
                f !== 'suppressHydrationWarning' &&
                (To.hasOwnProperty(f)
                  ? (u != null && f === 'onScroll' && Te('scroll', e),
                    o || a === u || (o = []))
                  : (o = o || []).push(f, u));
    }
    r && (o = o || []).push('style', r);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
yg = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function eo(e, t) {
  if (!Pe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case 'collapsed':
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function ut(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function N1(e, t, r) {
  var n = t.pendingProps;
  switch ((md(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ut(t), null;
    case 1:
      return Rt(t.type) && la(), ut(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Ti(),
        Ie(Ct),
        Ie(dt),
        Sd(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ks(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tr !== null && (yc(tr), (tr = null)))),
        uc(e, t),
        ut(t),
        null
      );
    case 5:
      kd(t);
      var i = Cn($o.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        gg(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(D(166));
          return ut(t), null;
        }
        if (((e = Cn(xr.current)), ks(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[mr] = t), (n[Do] = o), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              Te('cancel', n), Te('close', n);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Te('load', n);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < lo.length; i++) Te(lo[i], n);
              break;
            case 'source':
              Te('error', n);
              break;
            case 'img':
            case 'image':
            case 'link':
              Te('error', n), Te('load', n);
              break;
            case 'details':
              Te('toggle', n);
              break;
            case 'input':
              xf(n, o), Te('invalid', n);
              break;
            case 'select':
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                Te('invalid', n);
              break;
            case 'textarea':
              Ef(n, o), Te('invalid', n);
          }
          Lu(r, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === 'children'
                ? typeof a == 'string'
                  ? n.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Es(n.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    n.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Es(n.textContent, a, e),
                    (i = ['children', '' + a]))
                : To.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  Te('scroll', n);
            }
          switch (r) {
            case 'input':
              hs(n), _f(n, o, !0);
              break;
            case 'textarea':
              hs(n), kf(n);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (n.onclick = aa);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Hh(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                  ? (e = s.createElement(r, { is: n.is }))
                  : ((e = s.createElement(r)),
                    r === 'select' &&
                      ((s = e),
                      n.multiple
                        ? (s.multiple = !0)
                        : n.size && (s.size = n.size)))
              : (e = s.createElementNS(e, r)),
            (e[mr] = t),
            (e[Do] = n),
            mg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Du(r, n)), r)) {
              case 'dialog':
                Te('cancel', e), Te('close', e), (i = n);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Te('load', e), (i = n);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < lo.length; i++) Te(lo[i], e);
                i = n;
                break;
              case 'source':
                Te('error', e), (i = n);
                break;
              case 'img':
              case 'image':
              case 'link':
                Te('error', e), Te('load', e), (i = n);
                break;
              case 'details':
                Te('toggle', e), (i = n);
                break;
              case 'input':
                xf(e, n), (i = Pu(e, n)), Te('invalid', e);
                break;
              case 'option':
                i = n;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = Le({}, n, { value: void 0 })),
                  Te('invalid', e);
                break;
              case 'textarea':
                Ef(e, n), (i = bu(e, n)), Te('invalid', e);
                break;
              default:
                i = n;
            }
            Lu(r, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === 'style'
                  ? Kh(e, u)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Zh(e, u))
                    : o === 'children'
                      ? typeof u == 'string'
                        ? (r !== 'textarea' || u !== '') && Ao(e, u)
                        : typeof u == 'number' && Ao(e, '' + u)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (To.hasOwnProperty(o)
                          ? u != null && o === 'onScroll' && Te('scroll', e)
                          : u != null && ed(e, o, u, s));
              }
            switch (r) {
              case 'input':
                hs(e), _f(e, n, !1);
                break;
              case 'textarea':
                hs(e), kf(e);
                break;
              case 'option':
                n.value != null && e.setAttribute('value', '' + hn(n.value));
                break;
              case 'select':
                (e.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? hi(e, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      hi(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = aa);
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus;
                break e;
              case 'img':
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ut(t), null;
    case 6:
      if (e && t.stateNode != null) yg(e, t, e.memoizedProps, n);
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(D(166));
        if (((r = Cn($o.current)), Cn(xr.current), ks(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[mr] = t),
            (o = n.nodeValue !== r) && ((e = jt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Es(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Es(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[mr] = t),
            (t.stateNode = n);
      }
      return ut(t), null;
    case 13:
      if (
        (Ie(be),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Pe && bt !== null && t.mode & 1 && !(t.flags & 128))
          jm(), Ci(), (t.flags |= 98560), (o = !1);
        else if (((o = ks(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(D(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(D(317));
            o[mr] = t;
          } else
            Ci(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ut(t), (o = !1);
        } else tr !== null && (yc(tr), (tr = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || be.current & 1 ? et === 0 && (et = 3) : Ld())),
          t.updateQueue !== null && (t.flags |= 4),
          ut(t),
          null);
    case 4:
      return (
        Ti(), uc(e, t), e === null && jo(t.stateNode.containerInfo), ut(t), null
      );
    case 10:
      return wd(t.type._context), ut(t), null;
    case 17:
      return Rt(t.type) && la(), ut(t), null;
    case 19:
      if ((Ie(be), (o = t.memoizedState), o === null)) return ut(t), null;
      if (((n = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (n) eo(o, !1);
        else {
          if (et !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ma(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    eo(o, !1),
                    n = s.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (o = r),
                    (e = n),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Se(be, (be.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ve() > Ii &&
            ((t.flags |= 128), (n = !0), eo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ma(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              eo(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !Pe)
            )
              return ut(t), null;
          } else
            2 * Ve() - o.renderingStartTime > Ii &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), eo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((r = o.last),
            r !== null ? (r.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ve()),
          (t.sibling = null),
          (r = be.current),
          Se(be, n ? (r & 1) | 2 : r & 1),
          t)
        : (ut(t), null);
    case 22:
    case 23:
      return (
        jd(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Ft & 1073741824 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ut(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function P1(e, t) {
  switch ((md(t), t.tag)) {
    case 1:
      return (
        Rt(t.type) && la(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ti(),
        Ie(Ct),
        Ie(dt),
        Sd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return kd(t), null;
    case 13:
      if (
        (Ie(be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Ci();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ie(be), null;
    case 4:
      return Ti(), null;
    case 10:
      return wd(t.type._context), null;
    case 22:
    case 23:
      return jd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rs = !1,
  ct = !1,
  O1 = typeof WeakSet == 'function' ? WeakSet : Set,
  K = null;
function di(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null);
      } catch (n) {
        ze(e, t, n);
      }
    else r.current = null;
}
function cc(e, t, r) {
  try {
    r();
  } catch (n) {
    ze(e, t, n);
  }
}
var fp = !1;
function F1(e, t) {
  if (((qu = ia), (e = Em()), pd(e))) {
    if ('selectionStart' in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var s = 0,
            a = -1,
            u = -1,
            f = 0,
            d = 0,
            h = e,
            w = null;
          t: for (;;) {
            for (
              var S;
              h !== r || (i !== 0 && h.nodeType !== 3) || (a = s + i),
                h !== o || (n !== 0 && h.nodeType !== 3) || (u = s + n),
                h.nodeType === 3 && (s += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (w = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (w === r && ++f === i && (a = s),
                w === o && ++d === n && (u = s),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = w), (w = h.parentNode);
            }
            h = S;
          }
          r = a === -1 || u === -1 ? null : { start: a, end: u };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Ku = { focusedElem: e, selectionRange: r }, ia = !1, K = t; K !== null; )
    if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (K = e);
    else
      for (; K !== null; ) {
        t = K;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var E = x.memoizedProps,
                    R = x.memoizedState,
                    y = t.stateNode,
                    m = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Xt(t.type, E),
                      R,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (C) {
          ze(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (K = e);
          break;
        }
        K = t.return;
      }
  return (x = fp), (fp = !1), x;
}
function _o(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && cc(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function el(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function dc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function vg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mr], delete t[Do], delete t[Qu], delete t[m1], delete t[g1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = aa));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (fc(e, t, r), e = e.sibling; e !== null; ) fc(e, t, r), (e = e.sibling);
}
function pc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (pc(e, t, r), e = e.sibling; e !== null; ) pc(e, t, r), (e = e.sibling);
}
var ot = null,
  er = !1;
function Zr(e, t, r) {
  for (r = r.child; r !== null; ) xg(e, t, r), (r = r.sibling);
}
function xg(e, t, r) {
  if (wr && typeof wr.onCommitFiberUnmount == 'function')
    try {
      wr.onCommitFiberUnmount(Za, r);
    } catch {}
  switch (r.tag) {
    case 5:
      ct || di(r, t);
    case 6:
      var n = ot,
        i = er;
      (ot = null),
        Zr(e, t, r),
        (ot = n),
        (er = i),
        ot !== null &&
          (er
            ? ((e = ot),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ot.removeChild(r.stateNode));
      break;
    case 18:
      ot !== null &&
        (er
          ? ((e = ot),
            (r = r.stateNode),
            e.nodeType === 8
              ? Ml(e.parentNode, r)
              : e.nodeType === 1 && Ml(e, r),
            Oo(e))
          : Ml(ot, r.stateNode));
      break;
    case 4:
      (n = ot),
        (i = er),
        (ot = r.stateNode.containerInfo),
        (er = !0),
        Zr(e, t, r),
        (ot = n),
        (er = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ct &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && cc(r, t, s),
            (i = i.next);
        } while (i !== n);
      }
      Zr(e, t, r);
      break;
    case 1:
      if (
        !ct &&
        (di(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == 'function')
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          ze(r, t, a);
        }
      Zr(e, t, r);
      break;
    case 21:
      Zr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((ct = (n = ct) || r.memoizedState !== null), Zr(e, t, r), (ct = n))
        : Zr(e, t, r);
      break;
    default:
      Zr(e, t, r);
  }
}
function hp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new O1()),
      t.forEach(function (n) {
        var i = M1.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function Yt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ot = a.stateNode), (er = !1);
              break e;
            case 3:
              (ot = a.stateNode.containerInfo), (er = !0);
              break e;
            case 4:
              (ot = a.stateNode.containerInfo), (er = !0);
              break e;
          }
          a = a.return;
        }
        if (ot === null) throw Error(D(160));
        xg(o, s, i), (ot = null), (er = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (f) {
        ze(i, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _g(t, e), (t = t.sibling);
}
function _g(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Yt(t, e), lr(e), n & 4)) {
        try {
          _o(3, e, e.return), el(3, e);
        } catch (E) {
          ze(e, e.return, E);
        }
        try {
          _o(5, e, e.return);
        } catch (E) {
          ze(e, e.return, E);
        }
      }
      break;
    case 1:
      Yt(t, e), lr(e), n & 512 && r !== null && di(r, r.return);
      break;
    case 5:
      if (
        (Yt(t, e),
        lr(e),
        n & 512 && r !== null && di(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ao(i, '');
        } catch (E) {
          ze(e, e.return, E);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = r !== null ? r.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && Vh(i, o),
              Du(a, s);
            var f = Du(a, o);
            for (s = 0; s < u.length; s += 2) {
              var d = u[s],
                h = u[s + 1];
              d === 'style'
                ? Kh(i, h)
                : d === 'dangerouslySetInnerHTML'
                  ? Zh(i, h)
                  : d === 'children'
                    ? Ao(i, h)
                    : ed(i, d, h, f);
            }
            switch (a) {
              case 'input':
                Ou(i, o);
                break;
              case 'textarea':
                Wh(i, o);
                break;
              case 'select':
                var w = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? hi(i, !!o.multiple, S, !1)
                  : w !== !!o.multiple &&
                    (o.defaultValue != null
                      ? hi(i, !!o.multiple, o.defaultValue, !0)
                      : hi(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Do] = o;
          } catch (E) {
            ze(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Yt(t, e), lr(e), n & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (E) {
          ze(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Yt(t, e), lr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Oo(t.containerInfo);
        } catch (E) {
          ze(e, e.return, E);
        }
      break;
    case 4:
      Yt(t, e), lr(e);
      break;
    case 13:
      Yt(t, e),
        lr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fd = Ve())),
        n & 4 && hp(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((ct = (f = ct) || d), Yt(t, e), (ct = f)) : Yt(t, e),
        lr(e),
        n & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !d && e.mode & 1)
        )
          for (K = e, d = e.child; d !== null; ) {
            for (h = K = d; K !== null; ) {
              switch (((w = K), (S = w.child), w.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, w, w.return);
                  break;
                case 1:
                  di(w, w.return);
                  var x = w.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (n = w), (r = w.return);
                    try {
                      (t = n),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (E) {
                      ze(n, r, E);
                    }
                  }
                  break;
                case 5:
                  di(w, w.return);
                  break;
                case 22:
                  if (w.memoizedState !== null) {
                    gp(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = w), (K = S)) : gp(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (i = h.stateNode),
                  f
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = qh('display', s)));
              } catch (E) {
                ze(e, e.return, E);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = f ? '' : h.memoizedProps;
              } catch (E) {
                ze(e, e.return, E);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Yt(t, e), lr(e), n & 4 && hp(e);
      break;
    case 21:
      break;
    default:
      Yt(t, e), lr(e);
  }
}
function lr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (wg(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(D(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Ao(i, ''), (n.flags &= -33));
          var o = pp(e);
          pc(e, o, i);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            a = pp(e);
          fc(e, a, s);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      ze(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function b1(e, t, r) {
  (K = e), Eg(e);
}
function Eg(e, t, r) {
  for (var n = (e.mode & 1) !== 0; K !== null; ) {
    var i = K,
      o = i.child;
    if (i.tag === 22 && n) {
      var s = i.memoizedState !== null || Rs;
      if (!s) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || ct;
        a = Rs;
        var f = ct;
        if (((Rs = s), (ct = u) && !f))
          for (K = i; K !== null; )
            (s = K),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? yp(i)
                : u !== null
                  ? ((u.return = s), (K = u))
                  : yp(i);
        for (; o !== null; ) (K = o), Eg(o), (o = o.sibling);
        (K = i), (Rs = a), (ct = f);
      }
      mp(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (K = o)) : mp(e);
  }
}
function mp(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ct || el(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ct)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Xt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Xf(t, o, n);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Xf(t, s, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && r.focus();
                    break;
                  case 'img':
                    u.src && (r.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var d = f.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Oo(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        ct || (t.flags & 512 && dc(t));
      } catch (w) {
        ze(t, t.return, w);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (K = r);
      break;
    }
    K = t.return;
  }
}
function gp(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (K = r);
      break;
    }
    K = t.return;
  }
}
function yp(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            el(4, t);
          } catch (u) {
            ze(t, r, u);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == 'function') {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (u) {
              ze(t, i, u);
            }
          }
          var o = t.return;
          try {
            dc(t);
          } catch (u) {
            ze(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            dc(t);
          } catch (u) {
            ze(t, s, u);
          }
      }
    } catch (u) {
      ze(t, t.return, u);
    }
    if (t === e) {
      K = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (K = a);
      break;
    }
    K = t.return;
  }
}
var j1 = Math.ceil,
  va = Vr.ReactCurrentDispatcher,
  Pd = Vr.ReactCurrentOwner,
  Zt = Vr.ReactCurrentBatchConfig,
  ge = 0,
  nt = null,
  Je = null,
  st = 0,
  Ft = 0,
  fi = vn(0),
  et = 0,
  Vo = null,
  Bn = 0,
  tl = 0,
  Od = 0,
  Eo = null,
  Et = null,
  Fd = 0,
  Ii = 1 / 0,
  Ar = null,
  wa = !1,
  hc = null,
  cn = null,
  Ts = !1,
  rn = null,
  xa = 0,
  ko = 0,
  mc = null,
  Us = -1,
  zs = 0;
function mt() {
  return ge & 6 ? Ve() : Us !== -1 ? Us : (Us = Ve());
}
function dn(e) {
  return e.mode & 1
    ? ge & 2 && st !== 0
      ? st & -st
      : v1.transition !== null
        ? (zs === 0 && (zs = sm()), zs)
        : ((e = _e),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pm(e.type))),
          e)
    : 1;
}
function ir(e, t, r, n) {
  if (50 < ko) throw ((ko = 0), (mc = null), Error(D(185)));
  ts(e, r, n),
    (!(ge & 2) || e !== nt) &&
      (e === nt && (!(ge & 2) && (tl |= r), et === 4 && Xr(e, st)),
      Tt(e, n),
      r === 1 && ge === 0 && !(t.mode & 1) && ((Ii = Ve() + 500), Qa && wn()));
}
function Tt(e, t) {
  var r = e.callbackNode;
  vv(e, t);
  var n = na(e, e === nt ? st : 0);
  if (n === 0)
    r !== null && Rf(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Rf(r), t === 1))
      e.tag === 0 ? y1(vp.bind(null, e)) : Om(vp.bind(null, e)),
        p1(function () {
          !(ge & 6) && wn();
        }),
        (r = null);
    else {
      switch (am(n)) {
        case 1:
          r = od;
          break;
        case 4:
          r = im;
          break;
        case 16:
          r = ra;
          break;
        case 536870912:
          r = om;
          break;
        default:
          r = ra;
      }
      r = Ng(r, kg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function kg(e, t) {
  if (((Us = -1), (zs = 0), ge & 6)) throw Error(D(327));
  var r = e.callbackNode;
  if (wi() && e.callbackNode !== r) return null;
  var n = na(e, e === nt ? st : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = _a(e, n);
  else {
    t = n;
    var i = ge;
    ge |= 2;
    var o = Cg();
    (nt !== e || st !== t) && ((Ar = null), (Ii = Ve() + 500), Nn(e, t));
    do
      try {
        B1();
        break;
      } catch (a) {
        Sg(e, a);
      }
    while (!0);
    vd(),
      (va.current = o),
      (ge = i),
      Je !== null ? (t = 0) : ((nt = null), (st = 0), (t = et));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Mu(e)), i !== 0 && ((n = i), (t = gc(e, i)))), t === 1)
    )
      throw ((r = Vo), Nn(e, 0), Xr(e, n), Tt(e, Ve()), r);
    if (t === 6) Xr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !L1(i) &&
          ((t = _a(e, n)),
          t === 2 && ((o = Mu(e)), o !== 0 && ((n = o), (t = gc(e, o)))),
          t === 1))
      )
        throw ((r = Vo), Nn(e, 0), Xr(e, n), Tt(e, Ve()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          En(e, Et, Ar);
          break;
        case 3:
          if (
            (Xr(e, n), (n & 130023424) === n && ((t = Fd + 500 - Ve()), 10 < t))
          ) {
            if (na(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              mt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ju(En.bind(null, e, Et, Ar), t);
            break;
          }
          En(e, Et, Ar);
          break;
        case 4:
          if ((Xr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var s = 31 - nr(n);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (n &= ~o);
          }
          if (
            ((n = i),
            (n = Ve() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * j1(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Ju(En.bind(null, e, Et, Ar), n);
            break;
          }
          En(e, Et, Ar);
          break;
        case 5:
          En(e, Et, Ar);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Tt(e, Ve()), e.callbackNode === r ? kg.bind(null, e) : null;
}
function gc(e, t) {
  var r = Eo;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    (e = _a(e, t)),
    e !== 2 && ((t = Et), (Et = r), t !== null && yc(t)),
    e
  );
}
function yc(e) {
  Et === null ? (Et = e) : Et.push.apply(Et, e);
}
function L1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!sr(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Xr(e, t) {
  for (
    t &= ~Od,
      t &= ~tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - nr(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function vp(e) {
  if (ge & 6) throw Error(D(327));
  wi();
  var t = na(e, 0);
  if (!(t & 1)) return Tt(e, Ve()), null;
  var r = _a(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Mu(e);
    n !== 0 && ((t = n), (r = gc(e, n)));
  }
  if (r === 1) throw ((r = Vo), Nn(e, 0), Xr(e, t), Tt(e, Ve()), r);
  if (r === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, Et, Ar),
    Tt(e, Ve()),
    null
  );
}
function bd(e, t) {
  var r = ge;
  ge |= 1;
  try {
    return e(t);
  } finally {
    (ge = r), ge === 0 && ((Ii = Ve() + 500), Qa && wn());
  }
}
function $n(e) {
  rn !== null && rn.tag === 0 && !(ge & 6) && wi();
  var t = ge;
  ge |= 1;
  var r = Zt.transition,
    n = _e;
  try {
    if (((Zt.transition = null), (_e = 1), e)) return e();
  } finally {
    (_e = n), (Zt.transition = r), (ge = t), !(ge & 6) && wn();
  }
}
function jd() {
  (Ft = fi.current), Ie(fi);
}
function Nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), f1(r)), Je !== null))
    for (r = Je.return; r !== null; ) {
      var n = r;
      switch ((md(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && la();
          break;
        case 3:
          Ti(), Ie(Ct), Ie(dt), Sd();
          break;
        case 5:
          kd(n);
          break;
        case 4:
          Ti();
          break;
        case 13:
          Ie(be);
          break;
        case 19:
          Ie(be);
          break;
        case 10:
          wd(n.type._context);
          break;
        case 22:
        case 23:
          jd();
      }
      r = r.return;
    }
  if (
    ((nt = e),
    (Je = e = fn(e.current, null)),
    (st = Ft = t),
    (et = 0),
    (Vo = null),
    (Od = tl = Bn = 0),
    (Et = Eo = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((r = Sn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          o = r.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (n.next = s);
        }
        r.pending = n;
      }
    Sn = null;
  }
  return e;
}
function Sg(e, t) {
  do {
    var r = Je;
    try {
      if ((vd(), (Ds.current = ya), ga)) {
        for (var n = je.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        ga = !1;
      }
      if (
        ((Dn = 0),
        (tt = Xe = je = null),
        (xo = !1),
        (Uo = 0),
        (Pd.current = null),
        r === null || r.return === null)
      ) {
        (et = 1), (Vo = t), (Je = null);
        break;
      }
      e: {
        var o = e,
          s = r.return,
          a = r,
          u = t;
        if (
          ((t = st),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var f = u,
            d = a,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var w = d.alternate;
            w
              ? ((d.updateQueue = w.updateQueue),
                (d.memoizedState = w.memoizedState),
                (d.lanes = w.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var S = op(s);
          if (S !== null) {
            (S.flags &= -257),
              sp(S, s, a, o, t),
              S.mode & 1 && ip(o, f, t),
              (t = S),
              (u = f);
            var x = t.updateQueue;
            if (x === null) {
              var E = new Set();
              E.add(u), (t.updateQueue = E);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ip(o, f, t), Ld();
              break e;
            }
            u = Error(D(426));
          }
        } else if (Pe && a.mode & 1) {
          var R = op(s);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              sp(R, s, a, o, t),
              gd(Ai(u, a));
            break e;
          }
        }
        (o = u = Ai(u, a)),
          et !== 4 && (et = 2),
          Eo === null ? (Eo = [o]) : Eo.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = ag(o, u, t);
              Yf(o, y);
              break e;
            case 1:
              a = u;
              var m = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (cn === null || !cn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = lg(o, a, t);
                Yf(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Tg(r);
    } catch (P) {
      (t = P), Je === r && r !== null && (Je = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Cg() {
  var e = va.current;
  return (va.current = ya), e === null ? ya : e;
}
function Ld() {
  (et === 0 || et === 3 || et === 2) && (et = 4),
    nt === null || (!(Bn & 268435455) && !(tl & 268435455)) || Xr(nt, st);
}
function _a(e, t) {
  var r = ge;
  ge |= 2;
  var n = Cg();
  (nt !== e || st !== t) && ((Ar = null), Nn(e, t));
  do
    try {
      D1();
      break;
    } catch (i) {
      Sg(e, i);
    }
  while (!0);
  if ((vd(), (ge = r), (va.current = n), Je !== null)) throw Error(D(261));
  return (nt = null), (st = 0), et;
}
function D1() {
  for (; Je !== null; ) Rg(Je);
}
function B1() {
  for (; Je !== null && !uv(); ) Rg(Je);
}
function Rg(e) {
  var t = Ig(e.alternate, e, Ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tg(e) : (Je = t),
    (Pd.current = null);
}
function Tg(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = P1(r, t)), r !== null)) {
        (r.flags &= 32767), (Je = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (et = 6), (Je = null);
        return;
      }
    } else if (((r = N1(r, t, Ft)), r !== null)) {
      Je = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Je = t;
      return;
    }
    Je = t = e;
  } while (t !== null);
  et === 0 && (et = 5);
}
function En(e, t, r) {
  var n = _e,
    i = Zt.transition;
  try {
    (Zt.transition = null), (_e = 1), $1(e, t, r, n);
  } finally {
    (Zt.transition = i), (_e = n);
  }
  return null;
}
function $1(e, t, r, n) {
  do wi();
  while (rn !== null);
  if (ge & 6) throw Error(D(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (wv(e, o),
    e === nt && ((Je = nt = null), (st = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ts ||
      ((Ts = !0),
      Ng(ra, function () {
        return wi(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    (o = Zt.transition), (Zt.transition = null);
    var s = _e;
    _e = 1;
    var a = ge;
    (ge |= 4),
      (Pd.current = null),
      F1(e, r),
      _g(r, e),
      o1(Ku),
      (ia = !!qu),
      (Ku = qu = null),
      (e.current = r),
      b1(r),
      cv(),
      (ge = a),
      (_e = s),
      (Zt.transition = o);
  } else e.current = r;
  if (
    (Ts && ((Ts = !1), (rn = e), (xa = i)),
    (o = e.pendingLanes),
    o === 0 && (cn = null),
    pv(r.stateNode),
    Tt(e, Ve()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (wa) throw ((wa = !1), (e = hc), (hc = null), e);
  return (
    xa & 1 && e.tag !== 0 && wi(),
    (o = e.pendingLanes),
    o & 1 ? (e === mc ? ko++ : ((ko = 0), (mc = e))) : (ko = 0),
    wn(),
    null
  );
}
function wi() {
  if (rn !== null) {
    var e = am(xa),
      t = Zt.transition,
      r = _e;
    try {
      if (((Zt.transition = null), (_e = 16 > e ? 16 : e), rn === null))
        var n = !1;
      else {
        if (((e = rn), (rn = null), (xa = 0), ge & 6)) throw Error(D(331));
        var i = ge;
        for (ge |= 4, K = e.current; K !== null; ) {
          var o = K,
            s = o.child;
          if (K.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                for (K = f; K !== null; ) {
                  var d = K;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, d, o);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (K = h);
                  else
                    for (; K !== null; ) {
                      d = K;
                      var w = d.sibling,
                        S = d.return;
                      if ((vg(d), d === f)) {
                        K = null;
                        break;
                      }
                      if (w !== null) {
                        (w.return = S), (K = w);
                        break;
                      }
                      K = S;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var E = x.child;
                if (E !== null) {
                  x.child = null;
                  do {
                    var R = E.sibling;
                    (E.sibling = null), (E = R);
                  } while (E !== null);
                }
              }
              K = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (K = s);
          else
            e: for (; K !== null; ) {
              if (((o = K), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (K = y);
                break e;
              }
              K = o.return;
            }
        }
        var m = e.current;
        for (K = m; K !== null; ) {
          s = K;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (K = v);
          else
            e: for (s = m; K !== null; ) {
              if (((a = K), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, a);
                  }
                } catch (P) {
                  ze(a, a.return, P);
                }
              if (a === s) {
                K = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (K = C);
                break e;
              }
              K = a.return;
            }
        }
        if (
          ((ge = i), wn(), wr && typeof wr.onPostCommitFiberRoot == 'function')
        )
          try {
            wr.onPostCommitFiberRoot(Za, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (_e = r), (Zt.transition = t);
    }
  }
  return !1;
}
function wp(e, t, r) {
  (t = Ai(r, t)),
    (t = ag(e, t, 1)),
    (e = un(e, t, 1)),
    (t = mt()),
    e !== null && (ts(e, 1, t), Tt(e, t));
}
function ze(e, t, r) {
  if (e.tag === 3) wp(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' &&
            (cn === null || !cn.has(n)))
        ) {
          (e = Ai(r, e)),
            (e = lg(t, e, 1)),
            (t = un(t, e, 1)),
            (e = mt()),
            t !== null && (ts(t, 1, e), Tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function U1(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = mt()),
    (e.pingedLanes |= e.suspendedLanes & r),
    nt === e &&
      (st & r) === r &&
      (et === 4 || (et === 3 && (st & 130023424) === st && 500 > Ve() - Fd)
        ? Nn(e, 0)
        : (Od |= r)),
    Tt(e, t);
}
function Ag(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ys), (ys <<= 1), !(ys & 130023424) && (ys = 4194304))
      : (t = 1));
  var r = mt();
  (e = $r(e, t)), e !== null && (ts(e, t, r), Tt(e, r));
}
function z1(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Ag(e, r);
}
function M1(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  n !== null && n.delete(t), Ag(e, r);
}
var Ig;
Ig = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ct.current) kt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (kt = !1), I1(e, t, r);
      kt = !!(e.flags & 131072);
    }
  else (kt = !1), Pe && t.flags & 1048576 && Fm(t, da, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      $s(e, t), (e = t.pendingProps);
      var i = Si(t, dt.current);
      vi(t, r), (i = Rd(null, t, n, e, i, r));
      var o = Td();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Rt(n) ? ((o = !0), ua(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            _d(t),
            (i.updater = Xa),
            (t.stateNode = i),
            (i._reactInternals = t),
            nc(t, n, e, r),
            (t = sc(null, t, n, !0, o, r)))
          : ((t.tag = 0), Pe && o && hd(t), pt(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          ($s(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = W1(n)),
          (e = Xt(n, e)),
          i)
        ) {
          case 0:
            t = oc(null, t, n, e, r);
            break e;
          case 1:
            t = up(null, t, n, e, r);
            break e;
          case 11:
            t = ap(null, t, n, e, r);
            break e;
          case 14:
            t = lp(null, t, n, Xt(n.type, e), r);
            break e;
        }
        throw Error(D(306, n, ''));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        oc(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        up(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((fg(t), e === null)) throw Error(D(387));
        (n = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          $m(e, t),
          ha(t, n, null, r);
        var s = t.memoizedState;
        if (((n = s.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Ai(Error(D(423)), t)), (t = cp(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Ai(Error(D(424)), t)), (t = cp(e, t, n, r, i));
            break e;
          } else
            for (
              bt = ln(t.stateNode.containerInfo.firstChild),
                jt = t,
                Pe = !0,
                tr = null,
                r = Dm(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Ci(), n === i)) {
            t = Ur(e, t, r);
            break e;
          }
          pt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Um(t),
        e === null && ec(t),
        (n = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Gu(n, i) ? (s = null) : o !== null && Gu(n, o) && (t.flags |= 32),
        dg(e, t),
        pt(e, t, s, r),
        t.child
      );
    case 6:
      return e === null && ec(t), null;
    case 13:
      return pg(e, t, r);
    case 4:
      return (
        Ed(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ri(t, null, n, r)) : pt(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        ap(e, t, n, i, r)
      );
    case 7:
      return pt(e, t, t.pendingProps, r), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Se(fa, n._currentValue),
          (n._currentValue = s),
          o !== null)
        )
          if (sr(o.value, s)) {
            if (o.children === i.children && !Ct.current) {
              t = Ur(e, t, r);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === n) {
                    if (o.tag === 1) {
                      (u = jr(-1, r & -r)), (u.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var d = f.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (f.pending = u);
                      }
                    }
                    (o.lanes |= r),
                      (u = o.alternate),
                      u !== null && (u.lanes |= r),
                      tc(o.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(D(341));
                (s.lanes |= r),
                  (a = s.alternate),
                  a !== null && (a.lanes |= r),
                  tc(s, r, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        pt(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        vi(t, r),
        (i = Kt(i)),
        (n = n(i)),
        (t.flags |= 1),
        pt(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = Xt(n, t.pendingProps)),
        (i = Xt(n.type, i)),
        lp(e, t, n, i, r)
      );
    case 15:
      return ug(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        $s(e, t),
        (t.tag = 1),
        Rt(n) ? ((e = !0), ua(t)) : (e = !1),
        vi(t, r),
        sg(t, n, i),
        nc(t, n, i, r),
        sc(null, t, n, !0, e, r)
      );
    case 19:
      return hg(e, t, r);
    case 22:
      return cg(e, t, r);
  }
  throw Error(D(156, t.tag));
};
function Ng(e, t) {
  return nm(e, t);
}
function V1(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ht(e, t, r, n) {
  return new V1(e, t, r, n);
}
function Dd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function W1(e) {
  if (typeof e == 'function') return Dd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === rd)) return 11;
    if (e === nd) return 14;
  }
  return 2;
}
function fn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ht(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Ms(e, t, r, n, i, o) {
  var s = 2;
  if (((n = e), typeof e == 'function')) Dd(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case ri:
        return Pn(r.children, i, o, t);
      case td:
        (s = 8), (i |= 8);
        break;
      case Tu:
        return (
          (e = Ht(12, r, t, i | 2)), (e.elementType = Tu), (e.lanes = o), e
        );
      case Au:
        return (e = Ht(13, r, t, i)), (e.elementType = Au), (e.lanes = o), e;
      case Iu:
        return (e = Ht(19, r, t, i)), (e.elementType = Iu), (e.lanes = o), e;
      case Uh:
        return rl(r, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Bh:
              s = 10;
              break e;
            case $h:
              s = 9;
              break e;
            case rd:
              s = 11;
              break e;
            case nd:
              s = 14;
              break e;
            case Gr:
              (s = 16), (n = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ht(s, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
  );
}
function Pn(e, t, r, n) {
  return (e = Ht(7, e, n, t)), (e.lanes = r), e;
}
function rl(e, t, r, n) {
  return (
    (e = Ht(22, e, n, t)),
    (e.elementType = Uh),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jl(e, t, r) {
  return (e = Ht(6, e, null, t)), (e.lanes = r), e;
}
function Ql(e, t, r) {
  return (
    (t = Ht(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function H1(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Bd(e, t, r, n, i, o, s, a, u) {
  return (
    (e = new H1(e, t, r, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ht(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _d(o),
    e
  );
}
function Z1(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ti,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Pg(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Rt(r)) return Pm(e, r, t);
  }
  return t;
}
function Og(e, t, r, n, i, o, s, a, u) {
  return (
    (e = Bd(r, n, !0, e, i, o, s, a, u)),
    (e.context = Pg(null)),
    (r = e.current),
    (n = mt()),
    (i = dn(r)),
    (o = jr(n, i)),
    (o.callback = t ?? null),
    un(r, o, i),
    (e.current.lanes = i),
    ts(e, i, n),
    Tt(e, n),
    e
  );
}
function nl(e, t, r, n) {
  var i = t.current,
    o = mt(),
    s = dn(i);
  return (
    (r = Pg(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = jr(o, s)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = un(i, t, s)),
    e !== null && (ir(e, i, s, o), Ls(e, i, s)),
    s
  );
}
function Ea(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function $d(e, t) {
  xp(e, t), (e = e.alternate) && xp(e, t);
}
function q1() {
  return null;
}
var Fg =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ud(e) {
  this._internalRoot = e;
}
il.prototype.render = Ud.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  nl(e, t, null, null);
};
il.prototype.unmount = Ud.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $n(function () {
      nl(null, e, null, null);
    }),
      (t[Br] = null);
  }
};
function il(e) {
  this._internalRoot = e;
}
il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cm();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Yr.length && t !== 0 && t < Yr[r].priority; r++);
    Yr.splice(r, 0, e), r === 0 && fm(e);
  }
};
function zd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function _p() {}
function K1(e, t, r, n, i) {
  if (i) {
    if (typeof n == 'function') {
      var o = n;
      n = function () {
        var f = Ea(s);
        o.call(f);
      };
    }
    var s = Og(t, n, e, 0, null, !1, !1, '', _p);
    return (
      (e._reactRootContainer = s),
      (e[Br] = s.current),
      jo(e.nodeType === 8 ? e.parentNode : e),
      $n(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == 'function') {
    var a = n;
    n = function () {
      var f = Ea(u);
      a.call(f);
    };
  }
  var u = Bd(e, 0, !1, null, null, !1, !1, '', _p);
  return (
    (e._reactRootContainer = u),
    (e[Br] = u.current),
    jo(e.nodeType === 8 ? e.parentNode : e),
    $n(function () {
      nl(t, u, r, n);
    }),
    u
  );
}
function sl(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var u = Ea(s);
        a.call(u);
      };
    }
    nl(t, s, e, i);
  } else s = K1(r, t, e, i, n);
  return Ea(s);
}
lm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ao(t.pendingLanes);
        r !== 0 &&
          (sd(t, r | 1), Tt(t, Ve()), !(ge & 6) && ((Ii = Ve() + 500), wn()));
      }
      break;
    case 13:
      $n(function () {
        var n = $r(e, 1);
        if (n !== null) {
          var i = mt();
          ir(n, e, 1, i);
        }
      }),
        $d(e, 1);
  }
};
ad = function (e) {
  if (e.tag === 13) {
    var t = $r(e, 134217728);
    if (t !== null) {
      var r = mt();
      ir(t, e, 134217728, r);
    }
    $d(e, 134217728);
  }
};
um = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      r = $r(e, t);
    if (r !== null) {
      var n = mt();
      ir(r, e, t, n);
    }
    $d(e, t);
  }
};
cm = function () {
  return _e;
};
dm = function (e, t) {
  var r = _e;
  try {
    return (_e = e), t();
  } finally {
    _e = r;
  }
};
$u = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((Ou(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Ja(n);
            if (!i) throw Error(D(90));
            Mh(n), Ou(n, i);
          }
        }
      }
      break;
    case 'textarea':
      Wh(e, r);
      break;
    case 'select':
      (t = r.value), t != null && hi(e, !!r.multiple, t, !1);
  }
};
Qh = bd;
Yh = $n;
var G1 = { usingClientEntryPoint: !1, Events: [ns, si, Ja, Gh, Jh, bd] },
  to = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  J1 = {
    bundleType: to.bundleType,
    version: to.version,
    rendererPackageName: to.rendererPackageName,
    rendererConfig: to.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = tm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: to.findFiberByHostInstance || q1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!As.isDisabled && As.supportsFiber)
    try {
      (Za = As.inject(J1)), (wr = As);
    } catch {}
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G1;
Bt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zd(t)) throw Error(D(200));
  return Z1(e, t, null, r);
};
Bt.createRoot = function (e, t) {
  if (!zd(e)) throw Error(D(299));
  var r = !1,
    n = '',
    i = Fg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Bd(e, 1, !1, null, null, r, !1, n, i)),
    (e[Br] = t.current),
    jo(e.nodeType === 8 ? e.parentNode : e),
    new Ud(t)
  );
};
Bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(D(188))
      : ((e = Object.keys(e).join(',')), Error(D(268, e)));
  return (e = tm(t)), (e = e === null ? null : e.stateNode), e;
};
Bt.flushSync = function (e) {
  return $n(e);
};
Bt.hydrate = function (e, t, r) {
  if (!ol(t)) throw Error(D(200));
  return sl(null, e, t, !0, r);
};
Bt.hydrateRoot = function (e, t, r) {
  if (!zd(e)) throw Error(D(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    o = '',
    s = Fg;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
    (t = Og(t, null, e, 1, r ?? null, i, !1, o, s)),
    (e[Br] = t.current),
    jo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new il(t);
};
Bt.render = function (e, t, r) {
  if (!ol(t)) throw Error(D(200));
  return sl(null, e, t, !1, r);
};
Bt.unmountComponentAtNode = function (e) {
  if (!ol(e)) throw Error(D(40));
  return e._reactRootContainer
    ? ($n(function () {
        sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Br] = null);
        });
      }),
      !0)
    : !1;
};
Bt.unstable_batchedUpdates = bd;
Bt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!ol(r)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return sl(e, t, r, !1, n);
};
Bt.version = '18.3.1-next-f1338f8080-20240426';
function bg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg);
    } catch (e) {
      console.error(e);
    }
}
bg(), (bh.exports = Bt);
var Q1 = bh.exports,
  Ep = Q1;
(Cu.createRoot = Ep.createRoot), (Cu.hydrateRoot = Ep.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wo() {
  return (
    (Wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wo.apply(this, arguments)
  );
}
var nn;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(nn || (nn = {}));
const kp = 'popstate';
function Y1(e) {
  e === void 0 && (e = {});
  function t(n, i) {
    let { pathname: o, search: s, hash: a } = n.location;
    return vc(
      '',
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default',
    );
  }
  function r(n, i) {
    return typeof i == 'string' ? i : ka(i);
  }
  return ew(t, r, null, e);
}
function Qe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function jg(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function X1() {
  return Math.random().toString(36).substr(2, 8);
}
function Sp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vc(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Wo(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Mi(t) : t,
      { state: r, key: (t && t.key) || n || X1() },
    )
  );
}
function ka(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e;
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function Mi(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf('?');
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function ew(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = n,
    s = i.history,
    a = nn.Pop,
    u = null,
    f = d();
  f == null && ((f = 0), s.replaceState(Wo({}, s.state, { idx: f }), ''));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function h() {
    a = nn.Pop;
    let R = d(),
      y = R == null ? null : R - f;
    (f = R), u && u({ action: a, location: E.location, delta: y });
  }
  function w(R, y) {
    a = nn.Push;
    let m = vc(E.location, R, y);
    f = d() + 1;
    let v = Sp(m, f),
      C = E.createHref(m);
    try {
      s.pushState(v, '', C);
    } catch (P) {
      if (P instanceof DOMException && P.name === 'DataCloneError') throw P;
      i.location.assign(C);
    }
    o && u && u({ action: a, location: E.location, delta: 1 });
  }
  function S(R, y) {
    a = nn.Replace;
    let m = vc(E.location, R, y);
    f = d();
    let v = Sp(m, f),
      C = E.createHref(m);
    s.replaceState(v, '', C),
      o && u && u({ action: a, location: E.location, delta: 0 });
  }
  function x(R) {
    let y = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      m = typeof R == 'string' ? R : ka(R);
    return (
      (m = m.replace(/ $/, '%20')),
      Qe(
        y,
        'No window.location.(origin|href) available to create URL for href: ' +
          m,
      ),
      new URL(m, y)
    );
  }
  let E = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(R) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(kp, h),
        (u = R),
        () => {
          i.removeEventListener(kp, h), (u = null);
        }
      );
    },
    createHref(R) {
      return t(i, R);
    },
    createURL: x,
    encodeLocation(R) {
      let y = x(R);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: w,
    replace: S,
    go(R) {
      return s.go(R);
    },
  };
  return E;
}
var Cp;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Cp || (Cp = {}));
function tw(e, t, r) {
  r === void 0 && (r = '/');
  let n = typeof t == 'string' ? Mi(t) : t,
    i = Md(n.pathname || '/', r);
  if (i == null) return null;
  let o = Lg(e);
  rw(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) {
    let u = hw(i);
    s = dw(o[a], u);
  }
  return s;
}
function Lg(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '');
  let i = (o, s, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (Qe(
        u.relativePath.startsWith(n),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (u.relativePath = u.relativePath.slice(n.length)));
    let f = pn([n, u.relativePath]),
      d = r.concat(u);
    o.children &&
      o.children.length > 0 &&
      (Qe(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + f + '".'),
      ),
      Lg(o.children, t, d, f)),
      !(o.path == null && !o.index) &&
        t.push({ path: f, score: uw(f, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) i(o, s);
      else for (let u of Dg(o.path)) i(o, s, u);
    }),
    t
  );
}
function Dg(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    i = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (n.length === 0) return i ? [o, ''] : [o];
  let s = Dg(n.join('/')),
    a = [];
  return (
    a.push(...s.map((u) => (u === '' ? o : [o, u].join('/')))),
    i && a.push(...s),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function rw(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : cw(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const nw = /^:[\w-]+$/,
  iw = 3,
  ow = 2,
  sw = 1,
  aw = 10,
  lw = -2,
  Rp = (e) => e === '*';
function uw(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Rp) && (n += lw),
    t && (n += ow),
    r
      .filter((i) => !Rp(i))
      .reduce((i, o) => i + (nw.test(o) ? iw : o === '' ? sw : aw), n)
  );
}
function cw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function dw(e, t) {
  let { routesMeta: r } = e,
    n = {},
    i = '/',
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let a = r[s],
      u = s === r.length - 1,
      f = i === '/' ? t : t.slice(i.length) || '/',
      d = fw(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        f,
      );
    if (!d) return null;
    Object.assign(n, d.params);
    let h = a.route;
    o.push({
      params: n,
      pathname: pn([i, d.pathname]),
      pathnameBase: vw(pn([i, d.pathnameBase])),
      route: h,
    }),
      d.pathnameBase !== '/' && (i = pn([i, d.pathnameBase]));
  }
  return o;
}
function fw(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = pw(e.path, e.caseSensitive, e.end),
    i = t.match(r);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, '$1'),
    a = i.slice(1);
  return {
    params: n.reduce((f, d, h) => {
      let { paramName: w, isOptional: S } = d;
      if (w === '*') {
        let E = a[h] || '';
        s = o.slice(0, o.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const x = a[h];
      return (
        S && !x ? (f[w] = void 0) : (f[w] = (x || '').replace(/%2F/g, '/')), f
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function pw(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    jg(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let n = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, u) => (
            n.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), n]
  );
}
function hw(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      jg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function Md(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function mw(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: i = '',
  } = typeof e == 'string' ? Mi(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : gw(r, t)) : t,
    search: ww(n),
    hash: xw(i),
  };
}
function gw(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? r.length > 1 && r.pop() : i !== '.' && r.push(i);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Yl(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(n) +
      '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function yw(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Bg(e, t) {
  let r = yw(e);
  return t
    ? r.map((n, i) => (i === e.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function $g(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == 'string'
    ? (i = Mi(e))
    : ((i = Wo({}, e)),
      Qe(
        !i.pathname || !i.pathname.includes('?'),
        Yl('?', 'pathname', 'search', i),
      ),
      Qe(
        !i.pathname || !i.pathname.includes('#'),
        Yl('#', 'pathname', 'hash', i),
      ),
      Qe(!i.search || !i.search.includes('#'), Yl('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    s = o ? '/' : i.pathname,
    a;
  if (s == null) a = r;
  else {
    let h = t.length - 1;
    if (!n && s.startsWith('..')) {
      let w = s.split('/');
      for (; w[0] === '..'; ) w.shift(), (h -= 1);
      i.pathname = w.join('/');
    }
    a = h >= 0 ? t[h] : '/';
  }
  let u = mw(i, a),
    f = s && s !== '/' && s.endsWith('/'),
    d = (o || s === '.') && r.endsWith('/');
  return !u.pathname.endsWith('/') && (f || d) && (u.pathname += '/'), u;
}
const pn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  vw = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  ww = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  xw = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function _w(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Ug = ['post', 'put', 'patch', 'delete'];
new Set(Ug);
const Ew = ['get', ...Ug];
new Set(Ew);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ho() {
  return (
    (Ho = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ho.apply(this, arguments)
  );
}
const Vd = B.createContext(null),
  kw = B.createContext(null),
  Hn = B.createContext(null),
  al = B.createContext(null),
  Zn = B.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zg = B.createContext(null);
function Sw(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  os() || Qe(!1);
  let { basename: n, navigator: i } = B.useContext(Hn),
    { hash: o, pathname: s, search: a } = Vg(e, { relative: r }),
    u = s;
  return (
    n !== '/' && (u = s === '/' ? n : pn([n, s])),
    i.createHref({ pathname: u, search: a, hash: o })
  );
}
function os() {
  return B.useContext(al) != null;
}
function Vi() {
  return os() || Qe(!1), B.useContext(al).location;
}
function Mg(e) {
  B.useContext(Hn).static || B.useLayoutEffect(e);
}
function ss() {
  let { isDataRoute: e } = B.useContext(Zn);
  return e ? Dw() : Cw();
}
function Cw() {
  os() || Qe(!1);
  let e = B.useContext(Vd),
    { basename: t, future: r, navigator: n } = B.useContext(Hn),
    { matches: i } = B.useContext(Zn),
    { pathname: o } = Vi(),
    s = JSON.stringify(Bg(i, r.v7_relativeSplatPath)),
    a = B.useRef(!1);
  return (
    Mg(() => {
      a.current = !0;
    }),
    B.useCallback(
      function (f, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof f == 'number') {
          n.go(f);
          return;
        }
        let h = $g(f, JSON.parse(s), o, d.relative === 'path');
        e == null &&
          t !== '/' &&
          (h.pathname = h.pathname === '/' ? t : pn([t, h.pathname])),
          (d.replace ? n.replace : n.push)(h, d.state, d);
      },
      [t, n, s, o, e],
    )
  );
}
function Vg(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = B.useContext(Hn),
    { matches: i } = B.useContext(Zn),
    { pathname: o } = Vi(),
    s = JSON.stringify(Bg(i, n.v7_relativeSplatPath));
  return B.useMemo(() => $g(e, JSON.parse(s), o, r === 'path'), [e, s, o, r]);
}
function Rw(e, t) {
  return Tw(e, t);
}
function Tw(e, t, r, n) {
  os() || Qe(!1);
  let { navigator: i } = B.useContext(Hn),
    { matches: o } = B.useContext(Zn),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : '/';
  s && s.route;
  let f = Vi(),
    d;
  if (t) {
    var h;
    let R = typeof t == 'string' ? Mi(t) : t;
    u === '/' || ((h = R.pathname) != null && h.startsWith(u)) || Qe(!1),
      (d = R);
  } else d = f;
  let w = d.pathname || '/',
    S = w;
  if (u !== '/') {
    let R = u.replace(/^\//, '').split('/');
    S = '/' + w.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let x = tw(e, { pathname: S }),
    E = Ow(
      x &&
        x.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, a, R.params),
            pathname: pn([
              u,
              i.encodeLocation
                ? i.encodeLocation(R.pathname).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === '/'
                ? u
                : pn([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(R.pathnameBase).pathname
                      : R.pathnameBase,
                  ]),
          }),
        ),
      o,
      r,
      n,
    );
  return t && E
    ? B.createElement(
        al.Provider,
        {
          value: {
            location: Ho(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              d,
            ),
            navigationType: nn.Pop,
          },
        },
        E,
      )
    : E;
}
function Aw() {
  let e = Lw(),
    t = _w(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return B.createElement(
    B.Fragment,
    null,
    B.createElement('h2', null, 'Unexpected Application Error!'),
    B.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? B.createElement('pre', { style: i }, r) : null,
    null,
  );
}
const Iw = B.createElement(Aw, null);
class Nw extends B.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      'React Router caught the following error during render',
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? B.createElement(
          Zn.Provider,
          { value: this.props.routeContext },
          B.createElement(zg.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Pw(e) {
  let { routeContext: t, match: r, children: n } = e,
    i = B.useContext(Vd);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    B.createElement(Zn.Provider, { value: t }, n)
  );
}
function Ow(e, t, r, n) {
  var i;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var o;
    if ((o = r) != null && o.errors) e = r.matches;
    else return null;
  }
  let s = e,
    a = (i = r) == null ? void 0 : i.errors;
  if (a != null) {
    let d = s.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0,
    );
    d >= 0 || Qe(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let u = !1,
    f = -1;
  if (r && n && n.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let h = s[d];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (f = d),
        h.route.id)
      ) {
        let { loaderData: w, errors: S } = r,
          x =
            h.route.loader &&
            w[h.route.id] === void 0 &&
            (!S || S[h.route.id] === void 0);
        if (h.route.lazy || x) {
          (u = !0), f >= 0 ? (s = s.slice(0, f + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, h, w) => {
    let S,
      x = !1,
      E = null,
      R = null;
    r &&
      ((S = a && h.route.id ? a[h.route.id] : void 0),
      (E = h.route.errorElement || Iw),
      u &&
        (f < 0 && w === 0
          ? ((x = !0), (R = null))
          : f === w &&
            ((x = !0), (R = h.route.hydrateFallbackElement || null))));
    let y = t.concat(s.slice(0, w + 1)),
      m = () => {
        let v;
        return (
          S
            ? (v = E)
            : x
              ? (v = R)
              : h.route.Component
                ? (v = B.createElement(h.route.Component, null))
                : h.route.element
                  ? (v = h.route.element)
                  : (v = d),
          B.createElement(Pw, {
            match: h,
            routeContext: { outlet: d, matches: y, isDataRoute: r != null },
            children: v,
          })
        );
      };
    return r && (h.route.ErrorBoundary || h.route.errorElement || w === 0)
      ? B.createElement(Nw, {
          location: r.location,
          revalidation: r.revalidation,
          component: E,
          error: S,
          children: m(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Wg = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Wg || {}),
  Sa = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Sa || {});
function Fw(e) {
  let t = B.useContext(Vd);
  return t || Qe(!1), t;
}
function bw(e) {
  let t = B.useContext(kw);
  return t || Qe(!1), t;
}
function jw(e) {
  let t = B.useContext(Zn);
  return t || Qe(!1), t;
}
function Hg(e) {
  let t = jw(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Qe(!1), r.route.id;
}
function Lw() {
  var e;
  let t = B.useContext(zg),
    r = bw(Sa.UseRouteError),
    n = Hg(Sa.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Dw() {
  let { router: e } = Fw(Wg.UseNavigateStable),
    t = Hg(Sa.UseNavigateStable),
    r = B.useRef(!1);
  return (
    Mg(() => {
      r.current = !0;
    }),
    B.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          r.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, Ho({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function Xn(e) {
  Qe(!1);
}
function Bw(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: i = nn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  os() && Qe(!1);
  let u = t.replace(/^\/*/, '/'),
    f = B.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: s,
        future: Ho({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, s],
    );
  typeof n == 'string' && (n = Mi(n));
  let {
      pathname: d = '/',
      search: h = '',
      hash: w = '',
      state: S = null,
      key: x = 'default',
    } = n,
    E = B.useMemo(() => {
      let R = Md(d, u);
      return R == null
        ? null
        : {
            location: { pathname: R, search: h, hash: w, state: S, key: x },
            navigationType: i,
          };
    }, [u, d, h, w, S, x, i]);
  return E == null
    ? null
    : B.createElement(
        Hn.Provider,
        { value: f },
        B.createElement(al.Provider, { children: r, value: E }),
      );
}
function $w(e) {
  let { children: t, location: r } = e;
  return Rw(wc(t), r);
}
new Promise(() => {});
function wc(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    B.Children.forEach(e, (n, i) => {
      if (!B.isValidElement(n)) return;
      let o = [...t, i];
      if (n.type === B.Fragment) {
        r.push.apply(r, wc(n.props.children, o));
        return;
      }
      n.type !== Xn && Qe(!1), !n.props.index || !n.props.children || Qe(!1);
      let s = {
        id: n.props.id || o.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (s.children = wc(n.props.children, o)), r.push(s);
    }),
    r
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xc() {
  return (
    (xc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xc.apply(this, arguments)
  );
}
function Uw(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Mw(e, t) {
  return e.button === 0 && (!t || t === '_self') && !zw(e);
}
const Vw = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Ww = '6';
try {
  window.__reactRouterVersion = Ww;
} catch {}
const Hw = 'startTransition',
  Tp = Uy[Hw];
function Zw(e) {
  let { basename: t, children: r, future: n, window: i } = e,
    o = B.useRef();
  o.current == null && (o.current = Y1({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, u] = B.useState({ action: s.action, location: s.location }),
    { v7_startTransition: f } = n || {},
    d = B.useCallback(
      (h) => {
        f && Tp ? Tp(() => u(h)) : u(h);
      },
      [u, f],
    );
  return (
    B.useLayoutEffect(() => s.listen(d), [s, d]),
    B.createElement(Bw, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: n,
    })
  );
}
const qw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Kw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Wd = B.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: u,
        to: f,
        preventScrollReset: d,
        unstable_viewTransition: h,
      } = t,
      w = Uw(t, Vw),
      { basename: S } = B.useContext(Hn),
      x,
      E = !1;
    if (typeof f == 'string' && Kw.test(f) && ((x = f), qw))
      try {
        let v = new URL(window.location.href),
          C = f.startsWith('//') ? new URL(v.protocol + f) : new URL(f),
          P = Md(C.pathname, S);
        C.origin === v.origin && P != null
          ? (f = P + C.search + C.hash)
          : (E = !0);
      } catch {}
    let R = Sw(f, { relative: i }),
      y = Gw(f, {
        replace: s,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: h,
      });
    function m(v) {
      n && n(v), v.defaultPrevented || y(v);
    }
    return B.createElement(
      'a',
      xc({}, w, { href: x || R, onClick: E || o ? n : m, ref: r, target: u }),
    );
  });
var Ap;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Ap || (Ap = {}));
var Ip;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Ip || (Ip = {}));
function Gw(e, t) {
  let {
      target: r,
      replace: n,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = ss(),
    f = Vi(),
    d = Vg(e, { relative: s });
  return B.useCallback(
    (h) => {
      if (Mw(h, r)) {
        h.preventDefault();
        let w = n !== void 0 ? n : ka(f) === ka(d);
        u(e, {
          replace: w,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [f, u, d, n, i, r, e, o, s, a],
  );
}
const Jw = globalThis || void 0 || self;
function Qw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Zg = { exports: {} },
  He = (Zg.exports = {}),
  dr,
  fr;
function _c() {
  throw new Error('setTimeout has not been defined');
}
function Ec() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    typeof setTimeout == 'function' ? (dr = setTimeout) : (dr = _c);
  } catch {
    dr = _c;
  }
  try {
    typeof clearTimeout == 'function' ? (fr = clearTimeout) : (fr = Ec);
  } catch {
    fr = Ec;
  }
})();
function qg(e) {
  if (dr === setTimeout) return setTimeout(e, 0);
  if ((dr === _c || !dr) && setTimeout)
    return (dr = setTimeout), setTimeout(e, 0);
  try {
    return dr(e, 0);
  } catch {
    try {
      return dr.call(null, e, 0);
    } catch {
      return dr.call(this, e, 0);
    }
  }
}
function Yw(e) {
  if (fr === clearTimeout) return clearTimeout(e);
  if ((fr === Ec || !fr) && clearTimeout)
    return (fr = clearTimeout), clearTimeout(e);
  try {
    return fr(e);
  } catch {
    try {
      return fr.call(null, e);
    } catch {
      return fr.call(this, e);
    }
  }
}
var Fr = [],
  xi = !1,
  Rn,
  Vs = -1;
function Xw() {
  !xi ||
    !Rn ||
    ((xi = !1),
    Rn.length ? (Fr = Rn.concat(Fr)) : (Vs = -1),
    Fr.length && Kg());
}
function Kg() {
  if (!xi) {
    var e = qg(Xw);
    xi = !0;
    for (var t = Fr.length; t; ) {
      for (Rn = Fr, Fr = []; ++Vs < t; ) Rn && Rn[Vs].run();
      (Vs = -1), (t = Fr.length);
    }
    (Rn = null), (xi = !1), Yw(e);
  }
}
He.nextTick = function (e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  Fr.push(new Gg(e, t)), Fr.length === 1 && !xi && qg(Kg);
};
function Gg(e, t) {
  (this.fun = e), (this.array = t);
}
Gg.prototype.run = function () {
  this.fun.apply(null, this.array);
};
He.title = 'browser';
He.browser = !0;
He.env = {};
He.argv = [];
He.version = '';
He.versions = {};
function Wr() {}
He.on = Wr;
He.addListener = Wr;
He.once = Wr;
He.off = Wr;
He.removeListener = Wr;
He.removeAllListeners = Wr;
He.emit = Wr;
He.prependListener = Wr;
He.prependOnceListener = Wr;
He.listeners = function (e) {
  return [];
};
He.binding = function (e) {
  throw new Error('process.binding is not supported');
};
He.cwd = function () {
  return '/';
};
He.chdir = function (e) {
  throw new Error('process.chdir is not supported');
};
He.umask = function () {
  return 0;
};
var ex = Zg.exports;
const Zo = Qw(ex);
function Jg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: tx } = Object.prototype,
  { getPrototypeOf: Hd } = Object,
  ll = ((e) => (t) => {
    const r = tx.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ar = (e) => ((e = e.toLowerCase()), (t) => ll(t) === e),
  ul = (e) => (t) => typeof t === e,
  { isArray: Wi } = Array,
  qo = ul('undefined');
function rx(e) {
  return (
    e !== null &&
    !qo(e) &&
    e.constructor !== null &&
    !qo(e.constructor) &&
    Lt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Qg = ar('ArrayBuffer');
function nx(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Qg(e.buffer)),
    t
  );
}
const ix = ul('string'),
  Lt = ul('function'),
  Yg = ul('number'),
  cl = (e) => e !== null && typeof e == 'object',
  ox = (e) => e === !0 || e === !1,
  Ws = (e) => {
    if (ll(e) !== 'object') return !1;
    const t = Hd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  sx = ar('Date'),
  ax = ar('File'),
  lx = ar('Blob'),
  ux = ar('FileList'),
  cx = (e) => cl(e) && Lt(e.pipe),
  dx = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Lt(e.append) &&
          ((t = ll(e)) === 'formdata' ||
            (t === 'object' &&
              Lt(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  fx = ar('URLSearchParams'),
  [px, hx, mx, gx] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    ar,
  ),
  yx = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function as(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let n, i;
  if ((typeof e != 'object' && (e = [e]), Wi(e)))
    for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let a;
    for (n = 0; n < s; n++) (a = o[n]), t.call(null, e[a], a, e);
  }
}
function Xg(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    i;
  for (; n-- > 0; ) if (((i = r[n]), t === i.toLowerCase())) return i;
  return null;
}
const Tn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : Jw,
  e0 = (e) => !qo(e) && e !== Tn;
function kc() {
  const { caseless: e } = (e0(this) && this) || {},
    t = {},
    r = (n, i) => {
      const o = (e && Xg(t, i)) || i;
      Ws(t[o]) && Ws(n)
        ? (t[o] = kc(t[o], n))
        : Ws(n)
          ? (t[o] = kc({}, n))
          : Wi(n)
            ? (t[o] = n.slice())
            : (t[o] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && as(arguments[n], r);
  return t;
}
const vx = (e, t, r, { allOwnKeys: n } = {}) => (
    as(
      t,
      (i, o) => {
        r && Lt(i) ? (e[o] = Jg(i, r)) : (e[o] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  wx = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  xx = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  _x = (e, t, r, n) => {
    let i, o, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!n || n(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = r !== !1 && Hd(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  Ex = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  kx = (e) => {
    if (!e) return null;
    if (Wi(e)) return e;
    let t = e.length;
    if (!Yg(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  Sx = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Hd(Uint8Array)),
  Cx = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  Rx = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  Tx = ar('HTMLFormElement'),
  Ax = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
      return n.toUpperCase() + i;
    }),
  Np = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Ix = ar('RegExp'),
  t0 = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    as(r, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (n[o] = s || i);
    }),
      Object.defineProperties(e, n);
  },
  Nx = (e) => {
    t0(e, (t, r) => {
      if (Lt(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
        return !1;
      const n = e[r];
      if (Lt(n)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  Px = (e, t) => {
    const r = {},
      n = (i) => {
        i.forEach((o) => {
          r[o] = !0;
        });
      };
    return Wi(e) ? n(e) : n(String(e).split(t)), r;
  },
  Ox = () => {},
  Fx = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Xl = 'abcdefghijklmnopqrstuvwxyz',
  Pp = '0123456789',
  r0 = { DIGIT: Pp, ALPHA: Xl, ALPHA_DIGIT: Xl + Xl.toUpperCase() + Pp },
  bx = (e = 16, t = r0.ALPHA_DIGIT) => {
    let r = '';
    const { length: n } = t;
    for (; e--; ) r += t[(Math.random() * n) | 0];
    return r;
  };
function jx(e) {
  return !!(
    e &&
    Lt(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const Lx = (e) => {
    const t = new Array(10),
      r = (n, i) => {
        if (cl(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            t[i] = n;
            const o = Wi(n) ? [] : {};
            return (
              as(n, (s, a) => {
                const u = r(s, i + 1);
                !qo(u) && (o[a] = u);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return n;
      };
    return r(e, 0);
  },
  Dx = ar('AsyncFunction'),
  Bx = (e) => e && (cl(e) || Lt(e)) && Lt(e.then) && Lt(e.catch),
  n0 = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, n) => (
            Tn.addEventListener(
              'message',
              ({ source: i, data: o }) => {
                i === Tn && o === r && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Tn.postMessage(r, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == 'function',
    Lt(Tn.postMessage),
  ),
  $x =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Tn)
      : (typeof Zo < 'u' && Zo.nextTick) || n0,
  N = {
    isArray: Wi,
    isArrayBuffer: Qg,
    isBuffer: rx,
    isFormData: dx,
    isArrayBufferView: nx,
    isString: ix,
    isNumber: Yg,
    isBoolean: ox,
    isObject: cl,
    isPlainObject: Ws,
    isReadableStream: px,
    isRequest: hx,
    isResponse: mx,
    isHeaders: gx,
    isUndefined: qo,
    isDate: sx,
    isFile: ax,
    isBlob: lx,
    isRegExp: Ix,
    isFunction: Lt,
    isStream: cx,
    isURLSearchParams: fx,
    isTypedArray: Sx,
    isFileList: ux,
    forEach: as,
    merge: kc,
    extend: vx,
    trim: yx,
    stripBOM: wx,
    inherits: xx,
    toFlatObject: _x,
    kindOf: ll,
    kindOfTest: ar,
    endsWith: Ex,
    toArray: kx,
    forEachEntry: Cx,
    matchAll: Rx,
    isHTMLForm: Tx,
    hasOwnProperty: Np,
    hasOwnProp: Np,
    reduceDescriptors: t0,
    freezeMethods: Nx,
    toObjectSet: Px,
    toCamelCase: Ax,
    noop: Ox,
    toFiniteNumber: Fx,
    findKey: Xg,
    global: Tn,
    isContextDefined: e0,
    ALPHABET: r0,
    generateString: bx,
    isSpecCompliantForm: jx,
    toJSONObject: Lx,
    isAsyncFn: Dx,
    isThenable: Bx,
    setImmediate: n0,
    asap: $x,
  };
var i0 = {},
  dl = {};
dl.byteLength = Mx;
dl.toByteArray = Wx;
dl.fromByteArray = qx;
var gr = [],
  Mt = [],
  Ux = typeof Uint8Array < 'u' ? Uint8Array : Array,
  eu = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var Jn = 0, zx = eu.length; Jn < zx; ++Jn)
  (gr[Jn] = eu[Jn]), (Mt[eu.charCodeAt(Jn)] = Jn);
Mt[45] = 62;
Mt[95] = 63;
function o0(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error('Invalid string. Length must be a multiple of 4');
  var r = e.indexOf('=');
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - (r % 4);
  return [r, n];
}
function Mx(e) {
  var t = o0(e),
    r = t[0],
    n = t[1];
  return ((r + n) * 3) / 4 - n;
}
function Vx(e, t, r) {
  return ((t + r) * 3) / 4 - r;
}
function Wx(e) {
  var t,
    r = o0(e),
    n = r[0],
    i = r[1],
    o = new Ux(Vx(e, n, i)),
    s = 0,
    a = i > 0 ? n - 4 : n,
    u;
  for (u = 0; u < a; u += 4)
    (t =
      (Mt[e.charCodeAt(u)] << 18) |
      (Mt[e.charCodeAt(u + 1)] << 12) |
      (Mt[e.charCodeAt(u + 2)] << 6) |
      Mt[e.charCodeAt(u + 3)]),
      (o[s++] = (t >> 16) & 255),
      (o[s++] = (t >> 8) & 255),
      (o[s++] = t & 255);
  return (
    i === 2 &&
      ((t = (Mt[e.charCodeAt(u)] << 2) | (Mt[e.charCodeAt(u + 1)] >> 4)),
      (o[s++] = t & 255)),
    i === 1 &&
      ((t =
        (Mt[e.charCodeAt(u)] << 10) |
        (Mt[e.charCodeAt(u + 1)] << 4) |
        (Mt[e.charCodeAt(u + 2)] >> 2)),
      (o[s++] = (t >> 8) & 255),
      (o[s++] = t & 255)),
    o
  );
}
function Hx(e) {
  return (
    gr[(e >> 18) & 63] + gr[(e >> 12) & 63] + gr[(e >> 6) & 63] + gr[e & 63]
  );
}
function Zx(e, t, r) {
  for (var n, i = [], o = t; o < r; o += 3)
    (n =
      ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (e[o + 2] & 255)),
      i.push(Hx(n));
  return i.join('');
}
function qx(e) {
  for (
    var t, r = e.length, n = r % 3, i = [], o = 16383, s = 0, a = r - n;
    s < a;
    s += o
  )
    i.push(Zx(e, s, s + o > a ? a : s + o));
  return (
    n === 1
      ? ((t = e[r - 1]), i.push(gr[t >> 2] + gr[(t << 4) & 63] + '=='))
      : n === 2 &&
        ((t = (e[r - 2] << 8) + e[r - 1]),
        i.push(gr[t >> 10] + gr[(t >> 4) & 63] + gr[(t << 2) & 63] + '=')),
    i.join('')
  );
}
var Zd = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ Zd.read =
  function (e, t, r, n, i) {
    var o,
      s,
      a = i * 8 - n - 1,
      u = (1 << a) - 1,
      f = u >> 1,
      d = -7,
      h = r ? i - 1 : 0,
      w = r ? -1 : 1,
      S = e[t + h];
    for (
      h += w, o = S & ((1 << -d) - 1), S >>= -d, d += a;
      d > 0;
      o = o * 256 + e[t + h], h += w, d -= 8
    );
    for (
      s = o & ((1 << -d) - 1), o >>= -d, d += n;
      d > 0;
      s = s * 256 + e[t + h], h += w, d -= 8
    );
    if (o === 0) o = 1 - f;
    else {
      if (o === u) return s ? NaN : (S ? -1 : 1) * (1 / 0);
      (s = s + Math.pow(2, n)), (o = o - f);
    }
    return (S ? -1 : 1) * s * Math.pow(2, o - n);
  };
Zd.write = function (e, t, r, n, i, o) {
  var s,
    a,
    u,
    f = o * 8 - i - 1,
    d = (1 << f) - 1,
    h = d >> 1,
    w = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    S = n ? 0 : o - 1,
    x = n ? 1 : -1,
    E = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
  for (
    t = Math.abs(t),
      isNaN(t) || t === 1 / 0
        ? ((a = isNaN(t) ? 1 : 0), (s = d))
        : ((s = Math.floor(Math.log(t) / Math.LN2)),
          t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
          s + h >= 1 ? (t += w / u) : (t += w * Math.pow(2, 1 - h)),
          t * u >= 2 && (s++, (u /= 2)),
          s + h >= d
            ? ((a = 0), (s = d))
            : s + h >= 1
              ? ((a = (t * u - 1) * Math.pow(2, i)), (s = s + h))
              : ((a = t * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
    i >= 8;
    e[r + S] = a & 255, S += x, a /= 256, i -= 8
  );
  for (
    s = (s << i) | a, f += i;
    f > 0;
    e[r + S] = s & 255, S += x, s /= 256, f -= 8
  );
  e[r + S - x] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (e) {
  const t = dl,
    r = Zd,
    n =
      typeof Symbol == 'function' && typeof Symbol.for == 'function'
        ? Symbol.for('nodejs.util.inspect.custom')
        : null;
  (e.Buffer = d), (e.SlowBuffer = P), (e.INSPECT_MAX_BYTES = 50);
  const i = 2147483647;
  e.kMaxLength = i;
  const { Uint8Array: o, ArrayBuffer: s, SharedArrayBuffer: a } = globalThis;
  (d.TYPED_ARRAY_SUPPORT = u()),
    !d.TYPED_ARRAY_SUPPORT &&
      typeof console < 'u' &&
      typeof console.error == 'function' &&
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
      );
  function u() {
    try {
      const p = new o(1),
        l = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(l, o.prototype),
        Object.setPrototypeOf(p, l),
        p.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(d.prototype, 'parent', {
    enumerable: !0,
    get: function () {
      if (d.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(d.prototype, 'offset', {
      enumerable: !0,
      get: function () {
        if (d.isBuffer(this)) return this.byteOffset;
      },
    });
  function f(p) {
    if (p > i)
      throw new RangeError(
        'The value "' + p + '" is invalid for option "size"',
      );
    const l = new o(p);
    return Object.setPrototypeOf(l, d.prototype), l;
  }
  function d(p, l, c) {
    if (typeof p == 'number') {
      if (typeof l == 'string')
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return x(p);
    }
    return h(p, l, c);
  }
  d.poolSize = 8192;
  function h(p, l, c) {
    if (typeof p == 'string') return E(p, l);
    if (s.isView(p)) return y(p);
    if (p == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof p,
      );
    if (
      re(p, s) ||
      (p && re(p.buffer, s)) ||
      (typeof a < 'u' && (re(p, a) || (p && re(p.buffer, a))))
    )
      return m(p, l, c);
    if (typeof p == 'number')
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    const g = p.valueOf && p.valueOf();
    if (g != null && g !== p) return d.from(g, l, c);
    const k = v(p);
    if (k) return k;
    if (
      typeof Symbol < 'u' &&
      Symbol.toPrimitive != null &&
      typeof p[Symbol.toPrimitive] == 'function'
    )
      return d.from(p[Symbol.toPrimitive]('string'), l, c);
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof p,
    );
  }
  (d.from = function (p, l, c) {
    return h(p, l, c);
  }),
    Object.setPrototypeOf(d.prototype, o.prototype),
    Object.setPrototypeOf(d, o);
  function w(p) {
    if (typeof p != 'number')
      throw new TypeError('"size" argument must be of type number');
    if (p < 0)
      throw new RangeError(
        'The value "' + p + '" is invalid for option "size"',
      );
  }
  function S(p, l, c) {
    return (
      w(p),
      p <= 0
        ? f(p)
        : l !== void 0
          ? typeof c == 'string'
            ? f(p).fill(l, c)
            : f(p).fill(l)
          : f(p)
    );
  }
  d.alloc = function (p, l, c) {
    return S(p, l, c);
  };
  function x(p) {
    return w(p), f(p < 0 ? 0 : C(p) | 0);
  }
  (d.allocUnsafe = function (p) {
    return x(p);
  }),
    (d.allocUnsafeSlow = function (p) {
      return x(p);
    });
  function E(p, l) {
    if (((typeof l != 'string' || l === '') && (l = 'utf8'), !d.isEncoding(l)))
      throw new TypeError('Unknown encoding: ' + l);
    const c = j(p, l) | 0;
    let g = f(c);
    const k = g.write(p, l);
    return k !== c && (g = g.slice(0, k)), g;
  }
  function R(p) {
    const l = p.length < 0 ? 0 : C(p.length) | 0,
      c = f(l);
    for (let g = 0; g < l; g += 1) c[g] = p[g] & 255;
    return c;
  }
  function y(p) {
    if (re(p, o)) {
      const l = new o(p);
      return m(l.buffer, l.byteOffset, l.byteLength);
    }
    return R(p);
  }
  function m(p, l, c) {
    if (l < 0 || p.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (p.byteLength < l + (c || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return (
      l === void 0 && c === void 0
        ? (g = new o(p))
        : c === void 0
          ? (g = new o(p, l))
          : (g = new o(p, l, c)),
      Object.setPrototypeOf(g, d.prototype),
      g
    );
  }
  function v(p) {
    if (d.isBuffer(p)) {
      const l = C(p.length) | 0,
        c = f(l);
      return c.length === 0 || p.copy(c, 0, 0, l), c;
    }
    if (p.length !== void 0)
      return typeof p.length != 'number' || De(p.length) ? f(0) : R(p);
    if (p.type === 'Buffer' && Array.isArray(p.data)) return R(p.data);
  }
  function C(p) {
    if (p >= i)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          i.toString(16) +
          ' bytes',
      );
    return p | 0;
  }
  function P(p) {
    return +p != p && (p = 0), d.alloc(+p);
  }
  (d.isBuffer = function (l) {
    return l != null && l._isBuffer === !0 && l !== d.prototype;
  }),
    (d.compare = function (l, c) {
      if (
        (re(l, o) && (l = d.from(l, l.offset, l.byteLength)),
        re(c, o) && (c = d.from(c, c.offset, c.byteLength)),
        !d.isBuffer(l) || !d.isBuffer(c))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
        );
      if (l === c) return 0;
      let g = l.length,
        k = c.length;
      for (let I = 0, F = Math.min(g, k); I < F; ++I)
        if (l[I] !== c[I]) {
          (g = l[I]), (k = c[I]);
          break;
        }
      return g < k ? -1 : k < g ? 1 : 0;
    }),
    (d.isEncoding = function (l) {
      switch (String(l).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !0;
        default:
          return !1;
      }
    }),
    (d.concat = function (l, c) {
      if (!Array.isArray(l))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (l.length === 0) return d.alloc(0);
      let g;
      if (c === void 0) for (c = 0, g = 0; g < l.length; ++g) c += l[g].length;
      const k = d.allocUnsafe(c);
      let I = 0;
      for (g = 0; g < l.length; ++g) {
        let F = l[g];
        if (re(F, o))
          I + F.length > k.length
            ? (d.isBuffer(F) || (F = d.from(F)), F.copy(k, I))
            : o.prototype.set.call(k, F, I);
        else if (d.isBuffer(F)) F.copy(k, I);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        I += F.length;
      }
      return k;
    });
  function j(p, l) {
    if (d.isBuffer(p)) return p.length;
    if (s.isView(p) || re(p, s)) return p.byteLength;
    if (typeof p != 'string')
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof p,
      );
    const c = p.length,
      g = arguments.length > 2 && arguments[2] === !0;
    if (!g && c === 0) return 0;
    let k = !1;
    for (;;)
      switch (l) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return c;
        case 'utf8':
        case 'utf-8':
          return O(p).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return c * 2;
        case 'hex':
          return c >>> 1;
        case 'base64':
          return $(p).length;
        default:
          if (k) return g ? -1 : O(p).length;
          (l = ('' + l).toLowerCase()), (k = !0);
      }
  }
  d.byteLength = j;
  function b(p, l, c) {
    let g = !1;
    if (
      ((l === void 0 || l < 0) && (l = 0),
      l > this.length ||
        ((c === void 0 || c > this.length) && (c = this.length), c <= 0) ||
        ((c >>>= 0), (l >>>= 0), c <= l))
    )
      return '';
    for (p || (p = 'utf8'); ; )
      switch (p) {
        case 'hex':
          return ve(this, l, c);
        case 'utf8':
        case 'utf-8':
          return Fe(this, l, c);
        case 'ascii':
          return ee(this, l, c);
        case 'latin1':
        case 'binary':
          return ye(this, l, c);
        case 'base64':
          return M(this, l, c);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Qt(this, l, c);
        default:
          if (g) throw new TypeError('Unknown encoding: ' + p);
          (p = (p + '').toLowerCase()), (g = !0);
      }
  }
  d.prototype._isBuffer = !0;
  function U(p, l, c) {
    const g = p[l];
    (p[l] = p[c]), (p[c] = g);
  }
  (d.prototype.swap16 = function () {
    const l = this.length;
    if (l % 2 !== 0)
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    for (let c = 0; c < l; c += 2) U(this, c, c + 1);
    return this;
  }),
    (d.prototype.swap32 = function () {
      const l = this.length;
      if (l % 4 !== 0)
        throw new RangeError('Buffer size must be a multiple of 32-bits');
      for (let c = 0; c < l; c += 4) U(this, c, c + 3), U(this, c + 1, c + 2);
      return this;
    }),
    (d.prototype.swap64 = function () {
      const l = this.length;
      if (l % 8 !== 0)
        throw new RangeError('Buffer size must be a multiple of 64-bits');
      for (let c = 0; c < l; c += 8)
        U(this, c, c + 7),
          U(this, c + 1, c + 6),
          U(this, c + 2, c + 5),
          U(this, c + 3, c + 4);
      return this;
    }),
    (d.prototype.toString = function () {
      const l = this.length;
      return l === 0
        ? ''
        : arguments.length === 0
          ? Fe(this, 0, l)
          : b.apply(this, arguments);
    }),
    (d.prototype.toLocaleString = d.prototype.toString),
    (d.prototype.equals = function (l) {
      if (!d.isBuffer(l)) throw new TypeError('Argument must be a Buffer');
      return this === l ? !0 : d.compare(this, l) === 0;
    }),
    (d.prototype.inspect = function () {
      let l = '';
      const c = e.INSPECT_MAX_BYTES;
      return (
        (l = this.toString('hex', 0, c)
          .replace(/(.{2})/g, '$1 ')
          .trim()),
        this.length > c && (l += ' ... '),
        '<Buffer ' + l + '>'
      );
    }),
    n && (d.prototype[n] = d.prototype.inspect),
    (d.prototype.compare = function (l, c, g, k, I) {
      if ((re(l, o) && (l = d.from(l, l.offset, l.byteLength)), !d.isBuffer(l)))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof l,
        );
      if (
        (c === void 0 && (c = 0),
        g === void 0 && (g = l ? l.length : 0),
        k === void 0 && (k = 0),
        I === void 0 && (I = this.length),
        c < 0 || g > l.length || k < 0 || I > this.length)
      )
        throw new RangeError('out of range index');
      if (k >= I && c >= g) return 0;
      if (k >= I) return -1;
      if (c >= g) return 1;
      if (((c >>>= 0), (g >>>= 0), (k >>>= 0), (I >>>= 0), this === l))
        return 0;
      let F = I - k,
        de = g - c;
      const Be = Math.min(F, de),
        Ne = this.slice(k, I),
        $e = l.slice(c, g);
      for (let ke = 0; ke < Be; ++ke)
        if (Ne[ke] !== $e[ke]) {
          (F = Ne[ke]), (de = $e[ke]);
          break;
        }
      return F < de ? -1 : de < F ? 1 : 0;
    });
  function ae(p, l, c, g, k) {
    if (p.length === 0) return -1;
    if (
      (typeof c == 'string'
        ? ((g = c), (c = 0))
        : c > 2147483647
          ? (c = 2147483647)
          : c < -2147483648 && (c = -2147483648),
      (c = +c),
      De(c) && (c = k ? 0 : p.length - 1),
      c < 0 && (c = p.length + c),
      c >= p.length)
    ) {
      if (k) return -1;
      c = p.length - 1;
    } else if (c < 0)
      if (k) c = 0;
      else return -1;
    if ((typeof l == 'string' && (l = d.from(l, g)), d.isBuffer(l)))
      return l.length === 0 ? -1 : Y(p, l, c, g, k);
    if (typeof l == 'number')
      return (
        (l = l & 255),
        typeof o.prototype.indexOf == 'function'
          ? k
            ? o.prototype.indexOf.call(p, l, c)
            : o.prototype.lastIndexOf.call(p, l, c)
          : Y(p, [l], c, g, k)
      );
    throw new TypeError('val must be string, number or Buffer');
  }
  function Y(p, l, c, g, k) {
    let I = 1,
      F = p.length,
      de = l.length;
    if (
      g !== void 0 &&
      ((g = String(g).toLowerCase()),
      g === 'ucs2' || g === 'ucs-2' || g === 'utf16le' || g === 'utf-16le')
    ) {
      if (p.length < 2 || l.length < 2) return -1;
      (I = 2), (F /= 2), (de /= 2), (c /= 2);
    }
    function Be($e, ke) {
      return I === 1 ? $e[ke] : $e.readUInt16BE(ke * I);
    }
    let Ne;
    if (k) {
      let $e = -1;
      for (Ne = c; Ne < F; Ne++)
        if (Be(p, Ne) === Be(l, $e === -1 ? 0 : Ne - $e)) {
          if (($e === -1 && ($e = Ne), Ne - $e + 1 === de)) return $e * I;
        } else $e !== -1 && (Ne -= Ne - $e), ($e = -1);
    } else
      for (c + de > F && (c = F - de), Ne = c; Ne >= 0; Ne--) {
        let $e = !0;
        for (let ke = 0; ke < de; ke++)
          if (Be(p, Ne + ke) !== Be(l, ke)) {
            $e = !1;
            break;
          }
        if ($e) return Ne;
      }
    return -1;
  }
  (d.prototype.includes = function (l, c, g) {
    return this.indexOf(l, c, g) !== -1;
  }),
    (d.prototype.indexOf = function (l, c, g) {
      return ae(this, l, c, g, !0);
    }),
    (d.prototype.lastIndexOf = function (l, c, g) {
      return ae(this, l, c, g, !1);
    });
  function Oe(p, l, c, g) {
    c = Number(c) || 0;
    const k = p.length - c;
    g ? ((g = Number(g)), g > k && (g = k)) : (g = k);
    const I = l.length;
    g > I / 2 && (g = I / 2);
    let F;
    for (F = 0; F < g; ++F) {
      const de = parseInt(l.substr(F * 2, 2), 16);
      if (De(de)) return F;
      p[c + F] = de;
    }
    return F;
  }
  function te(p, l, c, g) {
    return X(O(l, p.length - c), p, c, g);
  }
  function se(p, l, c, g) {
    return X(H(l), p, c, g);
  }
  function xe(p, l, c, g) {
    return X($(l), p, c, g);
  }
  function Ce(p, l, c, g) {
    return X(z(l, p.length - c), p, c, g);
  }
  (d.prototype.write = function (l, c, g, k) {
    if (c === void 0) (k = 'utf8'), (g = this.length), (c = 0);
    else if (g === void 0 && typeof c == 'string')
      (k = c), (g = this.length), (c = 0);
    else if (isFinite(c))
      (c = c >>> 0),
        isFinite(g)
          ? ((g = g >>> 0), k === void 0 && (k = 'utf8'))
          : ((k = g), (g = void 0));
    else
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported',
      );
    const I = this.length - c;
    if (
      ((g === void 0 || g > I) && (g = I),
      (l.length > 0 && (g < 0 || c < 0)) || c > this.length)
    )
      throw new RangeError('Attempt to write outside buffer bounds');
    k || (k = 'utf8');
    let F = !1;
    for (;;)
      switch (k) {
        case 'hex':
          return Oe(this, l, c, g);
        case 'utf8':
        case 'utf-8':
          return te(this, l, c, g);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return se(this, l, c, g);
        case 'base64':
          return xe(this, l, c, g);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Ce(this, l, c, g);
        default:
          if (F) throw new TypeError('Unknown encoding: ' + k);
          (k = ('' + k).toLowerCase()), (F = !0);
      }
  }),
    (d.prototype.toJSON = function () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function M(p, l, c) {
    return l === 0 && c === p.length
      ? t.fromByteArray(p)
      : t.fromByteArray(p.slice(l, c));
  }
  function Fe(p, l, c) {
    c = Math.min(p.length, c);
    const g = [];
    let k = l;
    for (; k < c; ) {
      const I = p[k];
      let F = null,
        de = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (k + de <= c) {
        let Be, Ne, $e, ke;
        switch (de) {
          case 1:
            I < 128 && (F = I);
            break;
          case 2:
            (Be = p[k + 1]),
              (Be & 192) === 128 &&
                ((ke = ((I & 31) << 6) | (Be & 63)), ke > 127 && (F = ke));
            break;
          case 3:
            (Be = p[k + 1]),
              (Ne = p[k + 2]),
              (Be & 192) === 128 &&
                (Ne & 192) === 128 &&
                ((ke = ((I & 15) << 12) | ((Be & 63) << 6) | (Ne & 63)),
                ke > 2047 && (ke < 55296 || ke > 57343) && (F = ke));
            break;
          case 4:
            (Be = p[k + 1]),
              (Ne = p[k + 2]),
              ($e = p[k + 3]),
              (Be & 192) === 128 &&
                (Ne & 192) === 128 &&
                ($e & 192) === 128 &&
                ((ke =
                  ((I & 15) << 18) |
                  ((Be & 63) << 12) |
                  ((Ne & 63) << 6) |
                  ($e & 63)),
                ke > 65535 && ke < 1114112 && (F = ke));
        }
      }
      F === null
        ? ((F = 65533), (de = 1))
        : F > 65535 &&
          ((F -= 65536),
          g.push(((F >>> 10) & 1023) | 55296),
          (F = 56320 | (F & 1023))),
        g.push(F),
        (k += de);
    }
    return Q(g);
  }
  const V = 4096;
  function Q(p) {
    const l = p.length;
    if (l <= V) return String.fromCharCode.apply(String, p);
    let c = '',
      g = 0;
    for (; g < l; )
      c += String.fromCharCode.apply(String, p.slice(g, (g += V)));
    return c;
  }
  function ee(p, l, c) {
    let g = '';
    c = Math.min(p.length, c);
    for (let k = l; k < c; ++k) g += String.fromCharCode(p[k] & 127);
    return g;
  }
  function ye(p, l, c) {
    let g = '';
    c = Math.min(p.length, c);
    for (let k = l; k < c; ++k) g += String.fromCharCode(p[k]);
    return g;
  }
  function ve(p, l, c) {
    const g = p.length;
    (!l || l < 0) && (l = 0), (!c || c < 0 || c > g) && (c = g);
    let k = '';
    for (let I = l; I < c; ++I) k += qe[p[I]];
    return k;
  }
  function Qt(p, l, c) {
    const g = p.slice(l, c);
    let k = '';
    for (let I = 0; I < g.length - 1; I += 2)
      k += String.fromCharCode(g[I] + g[I + 1] * 256);
    return k;
  }
  d.prototype.slice = function (l, c) {
    const g = this.length;
    (l = ~~l),
      (c = c === void 0 ? g : ~~c),
      l < 0 ? ((l += g), l < 0 && (l = 0)) : l > g && (l = g),
      c < 0 ? ((c += g), c < 0 && (c = 0)) : c > g && (c = g),
      c < l && (c = l);
    const k = this.subarray(l, c);
    return Object.setPrototypeOf(k, d.prototype), k;
  };
  function he(p, l, c) {
    if (p % 1 !== 0 || p < 0) throw new RangeError('offset is not uint');
    if (p + l > c)
      throw new RangeError('Trying to access beyond buffer length');
  }
  (d.prototype.readUintLE = d.prototype.readUIntLE =
    function (l, c, g) {
      (l = l >>> 0), (c = c >>> 0), g || he(l, c, this.length);
      let k = this[l],
        I = 1,
        F = 0;
      for (; ++F < c && (I *= 256); ) k += this[l + F] * I;
      return k;
    }),
    (d.prototype.readUintBE = d.prototype.readUIntBE =
      function (l, c, g) {
        (l = l >>> 0), (c = c >>> 0), g || he(l, c, this.length);
        let k = this[l + --c],
          I = 1;
        for (; c > 0 && (I *= 256); ) k += this[l + --c] * I;
        return k;
      }),
    (d.prototype.readUint8 = d.prototype.readUInt8 =
      function (l, c) {
        return (l = l >>> 0), c || he(l, 1, this.length), this[l];
      }),
    (d.prototype.readUint16LE = d.prototype.readUInt16LE =
      function (l, c) {
        return (
          (l = l >>> 0),
          c || he(l, 2, this.length),
          this[l] | (this[l + 1] << 8)
        );
      }),
    (d.prototype.readUint16BE = d.prototype.readUInt16BE =
      function (l, c) {
        return (
          (l = l >>> 0),
          c || he(l, 2, this.length),
          (this[l] << 8) | this[l + 1]
        );
      }),
    (d.prototype.readUint32LE = d.prototype.readUInt32LE =
      function (l, c) {
        return (
          (l = l >>> 0),
          c || he(l, 4, this.length),
          (this[l] | (this[l + 1] << 8) | (this[l + 2] << 16)) +
            this[l + 3] * 16777216
        );
      }),
    (d.prototype.readUint32BE = d.prototype.readUInt32BE =
      function (l, c) {
        return (
          (l = l >>> 0),
          c || he(l, 4, this.length),
          this[l] * 16777216 +
            ((this[l + 1] << 16) | (this[l + 2] << 8) | this[l + 3])
        );
      }),
    (d.prototype.readBigUInt64LE = it(function (l) {
      (l = l >>> 0), xn(l, 'offset');
      const c = this[l],
        g = this[l + 7];
      (c === void 0 || g === void 0) && qn(l, this.length - 8);
      const k =
          c + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24,
        I = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + g * 2 ** 24;
      return BigInt(k) + (BigInt(I) << BigInt(32));
    })),
    (d.prototype.readBigUInt64BE = it(function (l) {
      (l = l >>> 0), xn(l, 'offset');
      const c = this[l],
        g = this[l + 7];
      (c === void 0 || g === void 0) && qn(l, this.length - 8);
      const k =
          c * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l],
        I = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + g;
      return (BigInt(k) << BigInt(32)) + BigInt(I);
    })),
    (d.prototype.readIntLE = function (l, c, g) {
      (l = l >>> 0), (c = c >>> 0), g || he(l, c, this.length);
      let k = this[l],
        I = 1,
        F = 0;
      for (; ++F < c && (I *= 256); ) k += this[l + F] * I;
      return (I *= 128), k >= I && (k -= Math.pow(2, 8 * c)), k;
    }),
    (d.prototype.readIntBE = function (l, c, g) {
      (l = l >>> 0), (c = c >>> 0), g || he(l, c, this.length);
      let k = c,
        I = 1,
        F = this[l + --k];
      for (; k > 0 && (I *= 256); ) F += this[l + --k] * I;
      return (I *= 128), F >= I && (F -= Math.pow(2, 8 * c)), F;
    }),
    (d.prototype.readInt8 = function (l, c) {
      return (
        (l = l >>> 0),
        c || he(l, 1, this.length),
        this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l]
      );
    }),
    (d.prototype.readInt16LE = function (l, c) {
      (l = l >>> 0), c || he(l, 2, this.length);
      const g = this[l] | (this[l + 1] << 8);
      return g & 32768 ? g | 4294901760 : g;
    }),
    (d.prototype.readInt16BE = function (l, c) {
      (l = l >>> 0), c || he(l, 2, this.length);
      const g = this[l + 1] | (this[l] << 8);
      return g & 32768 ? g | 4294901760 : g;
    }),
    (d.prototype.readInt32LE = function (l, c) {
      return (
        (l = l >>> 0),
        c || he(l, 4, this.length),
        this[l] | (this[l + 1] << 8) | (this[l + 2] << 16) | (this[l + 3] << 24)
      );
    }),
    (d.prototype.readInt32BE = function (l, c) {
      return (
        (l = l >>> 0),
        c || he(l, 4, this.length),
        (this[l] << 24) | (this[l + 1] << 16) | (this[l + 2] << 8) | this[l + 3]
      );
    }),
    (d.prototype.readBigInt64LE = it(function (l) {
      (l = l >>> 0), xn(l, 'offset');
      const c = this[l],
        g = this[l + 7];
      (c === void 0 || g === void 0) && qn(l, this.length - 8);
      const k =
        this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (g << 24);
      return (
        (BigInt(k) << BigInt(32)) +
        BigInt(
          c + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24,
        )
      );
    })),
    (d.prototype.readBigInt64BE = it(function (l) {
      (l = l >>> 0), xn(l, 'offset');
      const c = this[l],
        g = this[l + 7];
      (c === void 0 || g === void 0) && qn(l, this.length - 8);
      const k =
        (c << 24) + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
      return (
        (BigInt(k) << BigInt(32)) +
        BigInt(
          this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + g,
        )
      );
    })),
    (d.prototype.readFloatLE = function (l, c) {
      return (
        (l = l >>> 0), c || he(l, 4, this.length), r.read(this, l, !0, 23, 4)
      );
    }),
    (d.prototype.readFloatBE = function (l, c) {
      return (
        (l = l >>> 0), c || he(l, 4, this.length), r.read(this, l, !1, 23, 4)
      );
    }),
    (d.prototype.readDoubleLE = function (l, c) {
      return (
        (l = l >>> 0), c || he(l, 8, this.length), r.read(this, l, !0, 52, 8)
      );
    }),
    (d.prototype.readDoubleBE = function (l, c) {
      return (
        (l = l >>> 0), c || he(l, 8, this.length), r.read(this, l, !1, 52, 8)
      );
    });
  function Re(p, l, c, g, k, I) {
    if (!d.isBuffer(p))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > k || l < I)
      throw new RangeError('"value" argument is out of bounds');
    if (c + g > p.length) throw new RangeError('Index out of range');
  }
  (d.prototype.writeUintLE = d.prototype.writeUIntLE =
    function (l, c, g, k) {
      if (((l = +l), (c = c >>> 0), (g = g >>> 0), !k)) {
        const de = Math.pow(2, 8 * g) - 1;
        Re(this, l, c, g, de, 0);
      }
      let I = 1,
        F = 0;
      for (this[c] = l & 255; ++F < g && (I *= 256); )
        this[c + F] = (l / I) & 255;
      return c + g;
    }),
    (d.prototype.writeUintBE = d.prototype.writeUIntBE =
      function (l, c, g, k) {
        if (((l = +l), (c = c >>> 0), (g = g >>> 0), !k)) {
          const de = Math.pow(2, 8 * g) - 1;
          Re(this, l, c, g, de, 0);
        }
        let I = g - 1,
          F = 1;
        for (this[c + I] = l & 255; --I >= 0 && (F *= 256); )
          this[c + I] = (l / F) & 255;
        return c + g;
      }),
    (d.prototype.writeUint8 = d.prototype.writeUInt8 =
      function (l, c, g) {
        return (
          (l = +l),
          (c = c >>> 0),
          g || Re(this, l, c, 1, 255, 0),
          (this[c] = l & 255),
          c + 1
        );
      }),
    (d.prototype.writeUint16LE = d.prototype.writeUInt16LE =
      function (l, c, g) {
        return (
          (l = +l),
          (c = c >>> 0),
          g || Re(this, l, c, 2, 65535, 0),
          (this[c] = l & 255),
          (this[c + 1] = l >>> 8),
          c + 2
        );
      }),
    (d.prototype.writeUint16BE = d.prototype.writeUInt16BE =
      function (l, c, g) {
        return (
          (l = +l),
          (c = c >>> 0),
          g || Re(this, l, c, 2, 65535, 0),
          (this[c] = l >>> 8),
          (this[c + 1] = l & 255),
          c + 2
        );
      }),
    (d.prototype.writeUint32LE = d.prototype.writeUInt32LE =
      function (l, c, g) {
        return (
          (l = +l),
          (c = c >>> 0),
          g || Re(this, l, c, 4, 4294967295, 0),
          (this[c + 3] = l >>> 24),
          (this[c + 2] = l >>> 16),
          (this[c + 1] = l >>> 8),
          (this[c] = l & 255),
          c + 4
        );
      }),
    (d.prototype.writeUint32BE = d.prototype.writeUInt32BE =
      function (l, c, g) {
        return (
          (l = +l),
          (c = c >>> 0),
          g || Re(this, l, c, 4, 4294967295, 0),
          (this[c] = l >>> 24),
          (this[c + 1] = l >>> 16),
          (this[c + 2] = l >>> 8),
          (this[c + 3] = l & 255),
          c + 4
        );
      });
  function Ze(p, l, c, g, k) {
    Sl(l, g, k, p, c, 7);
    let I = Number(l & BigInt(4294967295));
    (p[c++] = I),
      (I = I >> 8),
      (p[c++] = I),
      (I = I >> 8),
      (p[c++] = I),
      (I = I >> 8),
      (p[c++] = I);
    let F = Number((l >> BigInt(32)) & BigInt(4294967295));
    return (
      (p[c++] = F),
      (F = F >> 8),
      (p[c++] = F),
      (F = F >> 8),
      (p[c++] = F),
      (F = F >> 8),
      (p[c++] = F),
      c
    );
  }
  function ft(p, l, c, g, k) {
    Sl(l, g, k, p, c, 7);
    let I = Number(l & BigInt(4294967295));
    (p[c + 7] = I),
      (I = I >> 8),
      (p[c + 6] = I),
      (I = I >> 8),
      (p[c + 5] = I),
      (I = I >> 8),
      (p[c + 4] = I);
    let F = Number((l >> BigInt(32)) & BigInt(4294967295));
    return (
      (p[c + 3] = F),
      (F = F >> 8),
      (p[c + 2] = F),
      (F = F >> 8),
      (p[c + 1] = F),
      (F = F >> 8),
      (p[c] = F),
      c + 8
    );
  }
  (d.prototype.writeBigUInt64LE = it(function (l, c = 0) {
    return Ze(this, l, c, BigInt(0), BigInt('0xffffffffffffffff'));
  })),
    (d.prototype.writeBigUInt64BE = it(function (l, c = 0) {
      return ft(this, l, c, BigInt(0), BigInt('0xffffffffffffffff'));
    })),
    (d.prototype.writeIntLE = function (l, c, g, k) {
      if (((l = +l), (c = c >>> 0), !k)) {
        const Be = Math.pow(2, 8 * g - 1);
        Re(this, l, c, g, Be - 1, -Be);
      }
      let I = 0,
        F = 1,
        de = 0;
      for (this[c] = l & 255; ++I < g && (F *= 256); )
        l < 0 && de === 0 && this[c + I - 1] !== 0 && (de = 1),
          (this[c + I] = (((l / F) >> 0) - de) & 255);
      return c + g;
    }),
    (d.prototype.writeIntBE = function (l, c, g, k) {
      if (((l = +l), (c = c >>> 0), !k)) {
        const Be = Math.pow(2, 8 * g - 1);
        Re(this, l, c, g, Be - 1, -Be);
      }
      let I = g - 1,
        F = 1,
        de = 0;
      for (this[c + I] = l & 255; --I >= 0 && (F *= 256); )
        l < 0 && de === 0 && this[c + I + 1] !== 0 && (de = 1),
          (this[c + I] = (((l / F) >> 0) - de) & 255);
      return c + g;
    }),
    (d.prototype.writeInt8 = function (l, c, g) {
      return (
        (l = +l),
        (c = c >>> 0),
        g || Re(this, l, c, 1, 127, -128),
        l < 0 && (l = 255 + l + 1),
        (this[c] = l & 255),
        c + 1
      );
    }),
    (d.prototype.writeInt16LE = function (l, c, g) {
      return (
        (l = +l),
        (c = c >>> 0),
        g || Re(this, l, c, 2, 32767, -32768),
        (this[c] = l & 255),
        (this[c + 1] = l >>> 8),
        c + 2
      );
    }),
    (d.prototype.writeInt16BE = function (l, c, g) {
      return (
        (l = +l),
        (c = c >>> 0),
        g || Re(this, l, c, 2, 32767, -32768),
        (this[c] = l >>> 8),
        (this[c + 1] = l & 255),
        c + 2
      );
    }),
    (d.prototype.writeInt32LE = function (l, c, g) {
      return (
        (l = +l),
        (c = c >>> 0),
        g || Re(this, l, c, 4, 2147483647, -2147483648),
        (this[c] = l & 255),
        (this[c + 1] = l >>> 8),
        (this[c + 2] = l >>> 16),
        (this[c + 3] = l >>> 24),
        c + 4
      );
    }),
    (d.prototype.writeInt32BE = function (l, c, g) {
      return (
        (l = +l),
        (c = c >>> 0),
        g || Re(this, l, c, 4, 2147483647, -2147483648),
        l < 0 && (l = 4294967295 + l + 1),
        (this[c] = l >>> 24),
        (this[c + 1] = l >>> 16),
        (this[c + 2] = l >>> 8),
        (this[c + 3] = l & 255),
        c + 4
      );
    }),
    (d.prototype.writeBigInt64LE = it(function (l, c = 0) {
      return Ze(
        this,
        l,
        c,
        -BigInt('0x8000000000000000'),
        BigInt('0x7fffffffffffffff'),
      );
    })),
    (d.prototype.writeBigInt64BE = it(function (l, c = 0) {
      return ft(
        this,
        l,
        c,
        -BigInt('0x8000000000000000'),
        BigInt('0x7fffffffffffffff'),
      );
    }));
  function Ut(p, l, c, g, k, I) {
    if (c + g > p.length) throw new RangeError('Index out of range');
    if (c < 0) throw new RangeError('Index out of range');
  }
  function Pt(p, l, c, g, k) {
    return (
      (l = +l),
      (c = c >>> 0),
      k || Ut(p, l, c, 4),
      r.write(p, l, c, g, 23, 4),
      c + 4
    );
  }
  (d.prototype.writeFloatLE = function (l, c, g) {
    return Pt(this, l, c, !0, g);
  }),
    (d.prototype.writeFloatBE = function (l, c, g) {
      return Pt(this, l, c, !1, g);
    });
  function Hr(p, l, c, g, k) {
    return (
      (l = +l),
      (c = c >>> 0),
      k || Ut(p, l, c, 8),
      r.write(p, l, c, g, 52, 8),
      c + 8
    );
  }
  (d.prototype.writeDoubleLE = function (l, c, g) {
    return Hr(this, l, c, !0, g);
  }),
    (d.prototype.writeDoubleBE = function (l, c, g) {
      return Hr(this, l, c, !1, g);
    }),
    (d.prototype.copy = function (l, c, g, k) {
      if (!d.isBuffer(l)) throw new TypeError('argument should be a Buffer');
      if (
        (g || (g = 0),
        !k && k !== 0 && (k = this.length),
        c >= l.length && (c = l.length),
        c || (c = 0),
        k > 0 && k < g && (k = g),
        k === g || l.length === 0 || this.length === 0)
      )
        return 0;
      if (c < 0) throw new RangeError('targetStart out of bounds');
      if (g < 0 || g >= this.length) throw new RangeError('Index out of range');
      if (k < 0) throw new RangeError('sourceEnd out of bounds');
      k > this.length && (k = this.length),
        l.length - c < k - g && (k = l.length - c + g);
      const I = k - g;
      return (
        this === l && typeof o.prototype.copyWithin == 'function'
          ? this.copyWithin(c, g, k)
          : o.prototype.set.call(l, this.subarray(g, k), c),
        I
      );
    }),
    (d.prototype.fill = function (l, c, g, k) {
      if (typeof l == 'string') {
        if (
          (typeof c == 'string'
            ? ((k = c), (c = 0), (g = this.length))
            : typeof g == 'string' && ((k = g), (g = this.length)),
          k !== void 0 && typeof k != 'string')
        )
          throw new TypeError('encoding must be a string');
        if (typeof k == 'string' && !d.isEncoding(k))
          throw new TypeError('Unknown encoding: ' + k);
        if (l.length === 1) {
          const F = l.charCodeAt(0);
          ((k === 'utf8' && F < 128) || k === 'latin1') && (l = F);
        }
      } else
        typeof l == 'number'
          ? (l = l & 255)
          : typeof l == 'boolean' && (l = Number(l));
      if (c < 0 || this.length < c || this.length < g)
        throw new RangeError('Out of range index');
      if (g <= c) return this;
      (c = c >>> 0), (g = g === void 0 ? this.length : g >>> 0), l || (l = 0);
      let I;
      if (typeof l == 'number') for (I = c; I < g; ++I) this[I] = l;
      else {
        const F = d.isBuffer(l) ? l : d.from(l, k),
          de = F.length;
        if (de === 0)
          throw new TypeError(
            'The value "' + l + '" is invalid for argument "value"',
          );
        for (I = 0; I < g - c; ++I) this[I + c] = F[I % de];
      }
      return this;
    });
  const wt = {};
  function xt(p, l, c) {
    wt[p] = class extends c {
      constructor() {
        super(),
          Object.defineProperty(this, 'message', {
            value: l.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${p}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return p;
      }
      set code(k) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: k,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${p}]: ${this.message}`;
      }
    };
  }
  xt(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (p) {
      return p
        ? `${p} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds';
    },
    RangeError,
  ),
    xt(
      'ERR_INVALID_ARG_TYPE',
      function (p, l) {
        return `The "${p}" argument must be of type number. Received type ${typeof l}`;
      },
      TypeError,
    ),
    xt(
      'ERR_OUT_OF_RANGE',
      function (p, l, c) {
        let g = `The value of "${p}" is out of range.`,
          k = c;
        return (
          Number.isInteger(c) && Math.abs(c) > 2 ** 32
            ? (k = qi(String(c)))
            : typeof c == 'bigint' &&
              ((k = String(c)),
              (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) &&
                (k = qi(k)),
              (k += 'n')),
          (g += ` It must be ${l}. Received ${k}`),
          g
        );
      },
      RangeError,
    );
  function qi(p) {
    let l = '',
      c = p.length;
    const g = p[0] === '-' ? 1 : 0;
    for (; c >= g + 4; c -= 3) l = `_${p.slice(c - 3, c)}${l}`;
    return `${p.slice(0, c)}${l}`;
  }
  function ds(p, l, c) {
    xn(l, 'offset'),
      (p[l] === void 0 || p[l + c] === void 0) && qn(l, p.length - (c + 1));
  }
  function Sl(p, l, c, g, k, I) {
    if (p > c || p < l) {
      const F = typeof l == 'bigint' ? 'n' : '';
      let de;
      throw (
        (l === 0 || l === BigInt(0)
          ? (de = `>= 0${F} and < 2${F} ** ${(I + 1) * 8}${F}`)
          : (de = `>= -(2${F} ** ${(I + 1) * 8 - 1}${F}) and < 2 ** ${(I + 1) * 8 - 1}${F}`),
        new wt.ERR_OUT_OF_RANGE('value', de, p))
      );
    }
    ds(g, k, I);
  }
  function xn(p, l) {
    if (typeof p != 'number') throw new wt.ERR_INVALID_ARG_TYPE(l, 'number', p);
  }
  function qn(p, l, c) {
    throw Math.floor(p) !== p
      ? (xn(p, c), new wt.ERR_OUT_OF_RANGE('offset', 'an integer', p))
      : l < 0
        ? new wt.ERR_BUFFER_OUT_OF_BOUNDS()
        : new wt.ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${l}`, p);
  }
  const _ = /[^+/0-9A-Za-z-_]/g;
  function T(p) {
    if (((p = p.split('=')[0]), (p = p.trim().replace(_, '')), p.length < 2))
      return '';
    for (; p.length % 4 !== 0; ) p = p + '=';
    return p;
  }
  function O(p, l) {
    l = l || 1 / 0;
    let c;
    const g = p.length;
    let k = null;
    const I = [];
    for (let F = 0; F < g; ++F) {
      if (((c = p.charCodeAt(F)), c > 55295 && c < 57344)) {
        if (!k) {
          if (c > 56319) {
            (l -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (F + 1 === g) {
            (l -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          k = c;
          continue;
        }
        if (c < 56320) {
          (l -= 3) > -1 && I.push(239, 191, 189), (k = c);
          continue;
        }
        c = (((k - 55296) << 10) | (c - 56320)) + 65536;
      } else k && (l -= 3) > -1 && I.push(239, 191, 189);
      if (((k = null), c < 128)) {
        if ((l -= 1) < 0) break;
        I.push(c);
      } else if (c < 2048) {
        if ((l -= 2) < 0) break;
        I.push((c >> 6) | 192, (c & 63) | 128);
      } else if (c < 65536) {
        if ((l -= 3) < 0) break;
        I.push((c >> 12) | 224, ((c >> 6) & 63) | 128, (c & 63) | 128);
      } else if (c < 1114112) {
        if ((l -= 4) < 0) break;
        I.push(
          (c >> 18) | 240,
          ((c >> 12) & 63) | 128,
          ((c >> 6) & 63) | 128,
          (c & 63) | 128,
        );
      } else throw new Error('Invalid code point');
    }
    return I;
  }
  function H(p) {
    const l = [];
    for (let c = 0; c < p.length; ++c) l.push(p.charCodeAt(c) & 255);
    return l;
  }
  function z(p, l) {
    let c, g, k;
    const I = [];
    for (let F = 0; F < p.length && !((l -= 2) < 0); ++F)
      (c = p.charCodeAt(F)), (g = c >> 8), (k = c % 256), I.push(k), I.push(g);
    return I;
  }
  function $(p) {
    return t.toByteArray(T(p));
  }
  function X(p, l, c, g) {
    let k;
    for (k = 0; k < g && !(k + c >= l.length || k >= p.length); ++k)
      l[k + c] = p[k];
    return k;
  }
  function re(p, l) {
    return (
      p instanceof l ||
      (p != null &&
        p.constructor != null &&
        p.constructor.name != null &&
        p.constructor.name === l.name)
    );
  }
  function De(p) {
    return p !== p;
  }
  const qe = (function () {
    const p = '0123456789abcdef',
      l = new Array(256);
    for (let c = 0; c < 16; ++c) {
      const g = c * 16;
      for (let k = 0; k < 16; ++k) l[g + k] = p[c] + p[k];
    }
    return l;
  })();
  function it(p) {
    return typeof BigInt > 'u' ? Cl : p;
  }
  function Cl() {
    throw new Error('BigInt not supported');
  }
})(i0);
const Kx = i0.Buffer;
function le(e, t, r, n, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
N.inherits(le, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const s0 = le.prototype,
  a0 = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  a0[e] = { value: e };
});
Object.defineProperties(le, a0);
Object.defineProperty(s0, 'isAxiosError', { value: !0 });
le.from = (e, t, r, n, i, o) => {
  const s = Object.create(s0);
  return (
    N.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (a) => a !== 'isAxiosError',
    ),
    le.call(s, e.message, t, r, n, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const Gx = null;
function Sc(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function l0(e) {
  return N.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Op(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = l0(i)), !r && o ? '[' + i + ']' : i;
        })
        .join(r ? '.' : '')
    : t;
}
function Jx(e) {
  return N.isArray(e) && !e.some(Sc);
}
const Qx = N.toFlatObject(N, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function fl(e, t, r) {
  if (!N.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (r = N.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (E, R) {
        return !N.isUndefined(R[E]);
      },
    ));
  const n = r.metaTokens,
    i = r.visitor || d,
    o = r.dots,
    s = r.indexes,
    u = (r.Blob || (typeof Blob < 'u' && Blob)) && N.isSpecCompliantForm(t);
  if (!N.isFunction(i)) throw new TypeError('visitor must be a function');
  function f(x) {
    if (x === null) return '';
    if (N.isDate(x)) return x.toISOString();
    if (!u && N.isBlob(x))
      throw new le('Blob is not supported. Use a Buffer instead.');
    return N.isArrayBuffer(x) || N.isTypedArray(x)
      ? u && typeof Blob == 'function'
        ? new Blob([x])
        : Kx.from(x)
      : x;
  }
  function d(x, E, R) {
    let y = x;
    if (x && !R && typeof x == 'object') {
      if (N.endsWith(E, '{}'))
        (E = n ? E : E.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (N.isArray(x) && Jx(x)) ||
        ((N.isFileList(x) || N.endsWith(E, '[]')) && (y = N.toArray(x)))
      )
        return (
          (E = l0(E)),
          y.forEach(function (v, C) {
            !(N.isUndefined(v) || v === null) &&
              t.append(
                s === !0 ? Op([E], C, o) : s === null ? E : E + '[]',
                f(v),
              );
          }),
          !1
        );
    }
    return Sc(x) ? !0 : (t.append(Op(R, E, o), f(x)), !1);
  }
  const h = [],
    w = Object.assign(Qx, {
      defaultVisitor: d,
      convertValue: f,
      isVisitable: Sc,
    });
  function S(x, E) {
    if (!N.isUndefined(x)) {
      if (h.indexOf(x) !== -1)
        throw Error('Circular reference detected in ' + E.join('.'));
      h.push(x),
        N.forEach(x, function (y, m) {
          (!(N.isUndefined(y) || y === null) &&
            i.call(t, y, N.isString(m) ? m.trim() : m, E, w)) === !0 &&
            S(y, E ? E.concat(m) : [m]);
        }),
        h.pop();
    }
  }
  if (!N.isObject(e)) throw new TypeError('data must be an object');
  return S(e), t;
}
function Fp(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function qd(e, t) {
  (this._pairs = []), e && fl(e, this, t);
}
const u0 = qd.prototype;
u0.append = function (t, r) {
  this._pairs.push([t, r]);
};
u0.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, Fp);
      }
    : Fp;
  return this._pairs
    .map(function (i) {
      return r(i[0]) + '=' + r(i[1]);
    }, '')
    .join('&');
};
function Yx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function c0(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || Yx,
    i = r && r.serialize;
  let o;
  if (
    (i
      ? (o = i(t, r))
      : (o = N.isURLSearchParams(t) ? t.toString() : new qd(t, r).toString(n)),
    o)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class bp {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    N.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const d0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Xx = typeof URLSearchParams < 'u' ? URLSearchParams : qd,
  e_ = typeof FormData < 'u' ? FormData : null,
  t_ = typeof Blob < 'u' ? Blob : null,
  r_ = {
    isBrowser: !0,
    classes: { URLSearchParams: Xx, FormData: e_, Blob: t_ },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Kd = typeof window < 'u' && typeof document < 'u',
  Cc = (typeof navigator == 'object' && navigator) || void 0,
  n_ =
    Kd &&
    (!Cc || ['ReactNative', 'NativeScript', 'NS'].indexOf(Cc.product) < 0),
  i_ =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  o_ = (Kd && window.location.href) || 'http://localhost',
  s_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Kd,
        hasStandardBrowserEnv: n_,
        hasStandardBrowserWebWorkerEnv: i_,
        navigator: Cc,
        origin: o_,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  At = { ...s_, ...r_ };
function a_(e, t) {
  return fl(
    e,
    new At.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, i, o) {
          return At.isNode && N.isBuffer(r)
            ? (this.append(n, r.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function l_(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function u_(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++) (o = r[n]), (t[o] = e[o]);
  return t;
}
function f0(e) {
  function t(r, n, i, o) {
    let s = r[o++];
    if (s === '__proto__') return !0;
    const a = Number.isFinite(+s),
      u = o >= r.length;
    return (
      (s = !s && N.isArray(i) ? i.length : s),
      u
        ? (N.hasOwnProp(i, s) ? (i[s] = [i[s], n]) : (i[s] = n), !a)
        : ((!i[s] || !N.isObject(i[s])) && (i[s] = []),
          t(r, n, i[s], o) && N.isArray(i[s]) && (i[s] = u_(i[s])),
          !a)
    );
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const r = {};
    return (
      N.forEachEntry(e, (n, i) => {
        t(l_(n), i, r, 0);
      }),
      r
    );
  }
  return null;
}
function c_(e, t, r) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (r || JSON.stringify)(e);
}
const ls = {
  transitional: d0,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        o = N.isObject(t);
      if ((o && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t)))
        return i ? JSON.stringify(f0(t)) : t;
      if (
        N.isArrayBuffer(t) ||
        N.isBuffer(t) ||
        N.isStream(t) ||
        N.isFile(t) ||
        N.isBlob(t) ||
        N.isReadableStream(t)
      )
        return t;
      if (N.isArrayBufferView(t)) return t.buffer;
      if (N.isURLSearchParams(t))
        return (
          r.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return a_(t, this.formSerializer).toString();
        if ((a = N.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return fl(
            a ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return o || i ? (r.setContentType('application/json', !1), c_(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || ls.transitional,
        n = r && r.forcedJSONParsing,
        i = this.responseType === 'json';
      if (N.isResponse(t) || N.isReadableStream(t)) return t;
      if (t && N.isString(t) && ((n && !this.responseType) || i)) {
        const s = !(r && r.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === 'SyntaxError'
              ? le.from(a, le.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: At.classes.FormData, Blob: At.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
N.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ls.headers[e] = {};
});
const d_ = N.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  f_ = (e) => {
    const t = {};
    let r, n, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (i = s.indexOf(':')),
              (r = s.substring(0, i).trim().toLowerCase()),
              (n = s.substring(i + 1).trim()),
              !(!r || (t[r] && d_[r])) &&
                (r === 'set-cookie'
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ', ' + n : n));
          }),
      t
    );
  },
  jp = Symbol('internals');
function ro(e) {
  return e && String(e).trim().toLowerCase();
}
function Hs(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(Hs) : String(e);
}
function p_(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const h_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tu(e, t, r, n, i) {
  if (N.isFunction(n)) return n.call(this, t, r);
  if ((i && (t = r), !!N.isString(t))) {
    if (N.isString(n)) return t.indexOf(n) !== -1;
    if (N.isRegExp(n)) return n.test(t);
  }
}
function m_(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function g_(e, t) {
  const r = N.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (i, o, s) {
        return this[n].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
let It = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function o(a, u, f) {
      const d = ro(u);
      if (!d) throw new Error('header name must be a non-empty string');
      const h = N.findKey(i, d);
      (!h || i[h] === void 0 || f === !0 || (f === void 0 && i[h] !== !1)) &&
        (i[h || u] = Hs(a));
    }
    const s = (a, u) => N.forEach(a, (f, d) => o(f, d, u));
    if (N.isPlainObject(t) || t instanceof this.constructor) s(t, r);
    else if (N.isString(t) && (t = t.trim()) && !h_(t)) s(f_(t), r);
    else if (N.isHeaders(t)) for (const [a, u] of t.entries()) o(u, a, n);
    else t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (((t = ro(t)), t)) {
      const n = N.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r) return i;
        if (r === !0) return p_(i);
        if (N.isFunction(r)) return r.call(this, i, n);
        if (N.isRegExp(r)) return r.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, r) {
    if (((t = ro(t)), t)) {
      const n = N.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || tu(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(s) {
      if (((s = ro(s)), s)) {
        const a = N.findKey(n, s);
        a && (!r || tu(n, n[a], a, r)) && (delete n[a], (i = !0));
      }
    }
    return N.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      i = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || tu(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const r = this,
      n = {};
    return (
      N.forEach(this, (i, o) => {
        const s = N.findKey(n, o);
        if (s) {
          (r[s] = Hs(i)), delete r[o];
          return;
        }
        const a = t ? m_(o) : String(o).trim();
        a !== o && delete r[o], (r[a] = Hs(i)), (n[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      N.forEach(this, (n, i) => {
        n != null && n !== !1 && (r[i] = t && N.isArray(n) ? n.join(', ') : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ': ' + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[jp] = this[jp] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const a = ro(s);
      n[a] || (g_(i, s), (n[a] = !0));
    }
    return N.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
It.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
N.reduceDescriptors(It.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
N.freezeMethods(It);
function ru(e, t) {
  const r = this || ls,
    n = t || r,
    i = It.from(n.headers);
  let o = n.data;
  return (
    N.forEach(e, function (a) {
      o = a.call(r, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function p0(e) {
  return !!(e && e.__CANCEL__);
}
function Hi(e, t, r) {
  le.call(this, e ?? 'canceled', le.ERR_CANCELED, t, r),
    (this.name = 'CanceledError');
}
N.inherits(Hi, le, { __CANCEL__: !0 });
function h0(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new le(
          'Request failed with status code ' + r.status,
          [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function y_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function v_(e, t) {
  e = e || 10;
  const r = new Array(e),
    n = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const f = Date.now(),
        d = n[o];
      s || (s = f), (r[i] = u), (n[i] = f);
      let h = o,
        w = 0;
      for (; h !== i; ) (w += r[h++]), (h = h % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), f - s < t)) return;
      const S = d && f - d;
      return S ? Math.round((w * 1e3) / S) : void 0;
    }
  );
}
function w_(e, t) {
  let r = 0,
    n = 1e3 / t,
    i,
    o;
  const s = (f, d = Date.now()) => {
    (r = d), (i = null), o && (clearTimeout(o), (o = null)), e.apply(null, f);
  };
  return [
    (...f) => {
      const d = Date.now(),
        h = d - r;
      h >= n
        ? s(f, d)
        : ((i = f),
          o ||
            (o = setTimeout(() => {
              (o = null), s(i);
            }, n - h)));
    },
    () => i && s(i),
  ];
}
const Ca = (e, t, r = 3) => {
    let n = 0;
    const i = v_(50, 250);
    return w_((o) => {
      const s = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        u = s - n,
        f = i(u),
        d = s <= a;
      n = s;
      const h = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: u,
        rate: f || void 0,
        estimated: f && a && d ? (a - s) / f : void 0,
        event: o,
        lengthComputable: a != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(h);
    }, r);
  },
  Lp = (e, t) => {
    const r = e != null;
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
  },
  Dp =
    (e) =>
    (...t) =>
      N.asap(() => e(...t)),
  x_ = At.hasStandardBrowserEnv
    ? (function () {
        const t =
            At.navigator && /(msie|trident)/i.test(At.navigator.userAgent),
          r = document.createElement('a');
        let n;
        function i(o) {
          let s = o;
          return (
            t && (r.setAttribute('href', s), (s = r.href)),
            r.setAttribute('href', s),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
            }
          );
        }
        return (
          (n = i(window.location.href)),
          function (s) {
            const a = N.isString(s) ? i(s) : s;
            return a.protocol === n.protocol && a.host === n.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  __ = At.hasStandardBrowserEnv
    ? {
        write(e, t, r, n, i, o) {
          const s = [e + '=' + encodeURIComponent(t)];
          N.isNumber(r) && s.push('expires=' + new Date(r).toGMTString()),
            N.isString(n) && s.push('path=' + n),
            N.isString(i) && s.push('domain=' + i),
            o === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function E_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function k_(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function m0(e, t) {
  return e && !E_(t) ? k_(e, t) : t;
}
const Bp = (e) => (e instanceof It ? { ...e } : e);
function Un(e, t) {
  t = t || {};
  const r = {};
  function n(f, d, h) {
    return N.isPlainObject(f) && N.isPlainObject(d)
      ? N.merge.call({ caseless: h }, f, d)
      : N.isPlainObject(d)
        ? N.merge({}, d)
        : N.isArray(d)
          ? d.slice()
          : d;
  }
  function i(f, d, h) {
    if (N.isUndefined(d)) {
      if (!N.isUndefined(f)) return n(void 0, f, h);
    } else return n(f, d, h);
  }
  function o(f, d) {
    if (!N.isUndefined(d)) return n(void 0, d);
  }
  function s(f, d) {
    if (N.isUndefined(d)) {
      if (!N.isUndefined(f)) return n(void 0, f);
    } else return n(void 0, d);
  }
  function a(f, d, h) {
    if (h in t) return n(f, d);
    if (h in e) return n(void 0, f);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (f, d) => i(Bp(f), Bp(d), !0),
  };
  return (
    N.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const h = u[d] || i,
        w = h(e[d], t[d], d);
      (N.isUndefined(w) && h !== a) || (r[d] = w);
    }),
    r
  );
}
const g0 = (e) => {
    const t = Un({}, e);
    let {
      data: r,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: s,
      auth: a,
    } = t;
    (t.headers = s = It.from(s)),
      (t.url = c0(m0(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        s.set(
          'Authorization',
          'Basic ' +
            btoa(
              (a.username || '') +
                ':' +
                (a.password ? unescape(encodeURIComponent(a.password)) : ''),
            ),
        );
    let u;
    if (N.isFormData(r)) {
      if (At.hasStandardBrowserEnv || At.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((u = s.getContentType()) !== !1) {
        const [f, ...d] = u
          ? u
              .split(';')
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        s.setContentType([f || 'multipart/form-data', ...d].join('; '));
      }
    }
    if (
      At.hasStandardBrowserEnv &&
      (n && N.isFunction(n) && (n = n(t)), n || (n !== !1 && x_(t.url)))
    ) {
      const f = i && o && __.read(o);
      f && s.set(i, f);
    }
    return t;
  },
  S_ = typeof XMLHttpRequest < 'u',
  C_ =
    S_ &&
    function (e) {
      return new Promise(function (r, n) {
        const i = g0(e);
        let o = i.data;
        const s = It.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: u, onDownloadProgress: f } = i,
          d,
          h,
          w,
          S,
          x;
        function E() {
          S && S(),
            x && x(),
            i.cancelToken && i.cancelToken.unsubscribe(d),
            i.signal && i.signal.removeEventListener('abort', d);
        }
        let R = new XMLHttpRequest();
        R.open(i.method.toUpperCase(), i.url, !0), (R.timeout = i.timeout);
        function y() {
          if (!R) return;
          const v = It.from(
              'getAllResponseHeaders' in R && R.getAllResponseHeaders(),
            ),
            P = {
              data:
                !a || a === 'text' || a === 'json'
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: v,
              config: e,
              request: R,
            };
          h0(
            function (b) {
              r(b), E();
            },
            function (b) {
              n(b), E();
            },
            P,
          ),
            (R = null);
        }
        'onloadend' in R
          ? (R.onloadend = y)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf('file:') === 0)) ||
                setTimeout(y);
            }),
          (R.onabort = function () {
            R &&
              (n(new le('Request aborted', le.ECONNABORTED, e, R)), (R = null));
          }),
          (R.onerror = function () {
            n(new le('Network Error', le.ERR_NETWORK, e, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let C = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const P = i.transitional || d0;
            i.timeoutErrorMessage && (C = i.timeoutErrorMessage),
              n(
                new le(
                  C,
                  P.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
                  e,
                  R,
                ),
              ),
              (R = null);
          }),
          o === void 0 && s.setContentType(null),
          'setRequestHeader' in R &&
            N.forEach(s.toJSON(), function (C, P) {
              R.setRequestHeader(P, C);
            }),
          N.isUndefined(i.withCredentials) ||
            (R.withCredentials = !!i.withCredentials),
          a && a !== 'json' && (R.responseType = i.responseType),
          f && (([w, x] = Ca(f, !0)), R.addEventListener('progress', w)),
          u &&
            R.upload &&
            (([h, S] = Ca(u)),
            R.upload.addEventListener('progress', h),
            R.upload.addEventListener('loadend', S)),
          (i.cancelToken || i.signal) &&
            ((d = (v) => {
              R &&
                (n(!v || v.type ? new Hi(null, e, R) : v),
                R.abort(),
                (R = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(d),
            i.signal &&
              (i.signal.aborted ? d() : i.signal.addEventListener('abort', d)));
        const m = y_(i.url);
        if (m && At.protocols.indexOf(m) === -1) {
          n(new le('Unsupported protocol ' + m + ':', le.ERR_BAD_REQUEST, e));
          return;
        }
        R.send(o || null);
      });
    },
  R_ = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let n = new AbortController(),
        i;
      const o = function (f) {
        if (!i) {
          (i = !0), a();
          const d = f instanceof Error ? f : this.reason;
          n.abort(
            d instanceof le ? d : new Hi(d instanceof Error ? d.message : d),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), o(new le(`timeout ${t} of ms exceeded`, le.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((f) => {
            f.unsubscribe
              ? f.unsubscribe(o)
              : f.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((f) => f.addEventListener('abort', o));
      const { signal: u } = n;
      return (u.unsubscribe = () => N.asap(a)), u;
    }
  },
  T_ = function* (e, t) {
    let r = e.byteLength;
    if (!t || r < t) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < r; ) (i = n + t), yield e.slice(n, i), (n = i);
  },
  A_ = async function* (e, t) {
    for await (const r of I_(e)) yield* T_(r, t);
  },
  I_ = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: r, value: n } = await t.read();
        if (r) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  $p = (e, t, r, n) => {
    const i = A_(e, t);
    let o = 0,
      s,
      a = (u) => {
        s || ((s = !0), n && n(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: f, value: d } = await i.next();
            if (f) {
              a(), u.close();
              return;
            }
            let h = d.byteLength;
            if (r) {
              let w = (o += h);
              r(w);
            }
            u.enqueue(new Uint8Array(d));
          } catch (f) {
            throw (a(f), f);
          }
        },
        cancel(u) {
          return a(u), i.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  pl =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  y0 = pl && typeof ReadableStream == 'function',
  N_ =
    pl &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  v0 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  P_ =
    y0 &&
    v0(() => {
      let e = !1;
      const t = new Request(At.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  Up = 64 * 1024,
  Rc = y0 && v0(() => N.isReadableStream(new Response('').body)),
  Ra = { stream: Rc && ((e) => e.body) };
pl &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Ra[t] &&
        (Ra[t] = N.isFunction(e[t])
          ? (r) => r[t]()
          : (r, n) => {
              throw new le(
                `Response type '${t}' is not supported`,
                le.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
const O_ = async (e) => {
    if (e == null) return 0;
    if (N.isBlob(e)) return e.size;
    if (N.isSpecCompliantForm(e))
      return (
        await new Request(At.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (N.isArrayBufferView(e) || N.isArrayBuffer(e)) return e.byteLength;
    if ((N.isURLSearchParams(e) && (e = e + ''), N.isString(e)))
      return (await N_(e)).byteLength;
  },
  F_ = async (e, t) => {
    const r = N.toFiniteNumber(e.getContentLength());
    return r ?? O_(t);
  },
  b_ =
    pl &&
    (async (e) => {
      let {
        url: t,
        method: r,
        data: n,
        signal: i,
        cancelToken: o,
        timeout: s,
        onDownloadProgress: a,
        onUploadProgress: u,
        responseType: f,
        headers: d,
        withCredentials: h = 'same-origin',
        fetchOptions: w,
      } = g0(e);
      f = f ? (f + '').toLowerCase() : 'text';
      let S = R_([i, o && o.toAbortSignal()], s),
        x;
      const E =
        S &&
        S.unsubscribe &&
        (() => {
          S.unsubscribe();
        });
      let R;
      try {
        if (
          u &&
          P_ &&
          r !== 'get' &&
          r !== 'head' &&
          (R = await F_(d, n)) !== 0
        ) {
          let P = new Request(t, { method: 'POST', body: n, duplex: 'half' }),
            j;
          if (
            (N.isFormData(n) &&
              (j = P.headers.get('content-type')) &&
              d.setContentType(j),
            P.body)
          ) {
            const [b, U] = Lp(R, Ca(Dp(u)));
            n = $p(P.body, Up, b, U);
          }
        }
        N.isString(h) || (h = h ? 'include' : 'omit');
        const y = 'credentials' in Request.prototype;
        x = new Request(t, {
          ...w,
          signal: S,
          method: r.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: y ? h : void 0,
        });
        let m = await fetch(x);
        const v = Rc && (f === 'stream' || f === 'response');
        if (Rc && (a || (v && E))) {
          const P = {};
          ['status', 'statusText', 'headers'].forEach((ae) => {
            P[ae] = m[ae];
          });
          const j = N.toFiniteNumber(m.headers.get('content-length')),
            [b, U] = (a && Lp(j, Ca(Dp(a), !0))) || [];
          m = new Response(
            $p(m.body, Up, b, () => {
              U && U(), E && E();
            }),
            P,
          );
        }
        f = f || 'text';
        let C = await Ra[N.findKey(Ra, f) || 'text'](m, e);
        return (
          !v && E && E(),
          await new Promise((P, j) => {
            h0(P, j, {
              data: C,
              headers: It.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: x,
            });
          })
        );
      } catch (y) {
        throw (
          (E && E(),
          y && y.name === 'TypeError' && /fetch/i.test(y.message)
            ? Object.assign(new le('Network Error', le.ERR_NETWORK, e, x), {
                cause: y.cause || y,
              })
            : le.from(y, y && y.code, e, x))
        );
      }
    }),
  Tc = { http: Gx, xhr: C_, fetch: b_ };
N.forEach(Tc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const zp = (e) => `- ${e}`,
  j_ = (e) => N.isFunction(e) || e === null || e === !1,
  w0 = {
    getAdapter: (e) => {
      e = N.isArray(e) ? e : [e];
      const { length: t } = e;
      let r, n;
      const i = {};
      for (let o = 0; o < t; o++) {
        r = e[o];
        let s;
        if (
          ((n = r),
          !j_(r) && ((n = Tc[(s = String(r)).toLowerCase()]), n === void 0))
        )
          throw new le(`Unknown adapter '${s}'`);
        if (n) break;
        i[s || '#' + o] = n;
      }
      if (!n) {
        const o = Object.entries(i).map(
          ([a, u]) =>
            `adapter ${a} ` +
            (u === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(zp).join(`
`)
            : ' ' + zp(o[0])
          : 'as no adapter specified';
        throw new le(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: Tc,
  };
function nu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Hi(null, e);
}
function Mp(e) {
  return (
    nu(e),
    (e.headers = It.from(e.headers)),
    (e.data = ru.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    w0
      .getAdapter(e.adapter || ls.adapter)(e)
      .then(
        function (n) {
          return (
            nu(e),
            (n.data = ru.call(e, e.transformResponse, n)),
            (n.headers = It.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            p0(n) ||
              (nu(e),
              n &&
                n.response &&
                ((n.response.data = ru.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = It.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const x0 = '1.7.7',
  Gd = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Gd[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const Vp = {};
Gd.transitional = function (t, r, n) {
  function i(o, s) {
    return (
      '[Axios v' +
      x0 +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (n ? '. ' + n : '')
    );
  }
  return (o, s, a) => {
    if (t === !1)
      throw new le(
        i(s, ' has been removed' + (r ? ' in ' + r : '')),
        le.ERR_DEPRECATED,
      );
    return (
      r &&
        !Vp[s] &&
        ((Vp[s] = !0),
        console.warn(
          i(
            s,
            ' has been deprecated since v' +
              r +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(o, s, a) : !0
    );
  };
};
function L_(e, t, r) {
  if (typeof e != 'object')
    throw new le('options must be an object', le.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i],
      s = t[o];
    if (s) {
      const a = e[o],
        u = a === void 0 || s(a, o, e);
      if (u !== !0)
        throw new le('option ' + o + ' must be ' + u, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new le('Unknown option ' + o, le.ERR_BAD_OPTION);
  }
}
const Ac = { assertOptions: L_, validators: Gd },
  qr = Ac.validators;
let On = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new bp(), response: new bp() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, '') : '';
        try {
          n.stack
            ? o &&
              !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (n.stack +=
                `
` + o)
            : (n.stack = o);
        } catch {}
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Un(this.defaults, r));
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 &&
      Ac.assertOptions(
        n,
        {
          silentJSONParsing: qr.transitional(qr.boolean),
          forcedJSONParsing: qr.transitional(qr.boolean),
          clarifyTimeoutError: qr.transitional(qr.boolean),
        },
        !1,
      ),
      i != null &&
        (N.isFunction(i)
          ? (r.paramsSerializer = { serialize: i })
          : Ac.assertOptions(
              i,
              { encode: qr.function, serialize: qr.function },
              !0,
            )),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase());
    let s = o && N.merge(o.common, o[r.method]);
    o &&
      N.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (x) => {
          delete o[x];
        },
      ),
      (r.headers = It.concat(s, o));
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == 'function' && E.runWhen(r) === !1) ||
        ((u = u && E.synchronous), a.unshift(E.fulfilled, E.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (E) {
      f.push(E.fulfilled, E.rejected);
    });
    let d,
      h = 0,
      w;
    if (!u) {
      const x = [Mp.bind(this), void 0];
      for (
        x.unshift.apply(x, a),
          x.push.apply(x, f),
          w = x.length,
          d = Promise.resolve(r);
        h < w;

      )
        d = d.then(x[h++], x[h++]);
      return d;
    }
    w = a.length;
    let S = r;
    for (h = 0; h < w; ) {
      const x = a[h++],
        E = a[h++];
      try {
        S = x(S);
      } catch (R) {
        E.call(this, R);
        break;
      }
    }
    try {
      d = Mp.call(this, S);
    } catch (x) {
      return Promise.reject(x);
    }
    for (h = 0, w = f.length; h < w; ) d = d.then(f[h++], f[h++]);
    return d;
  }
  getUri(t) {
    t = Un(this.defaults, t);
    const r = m0(t.baseURL, t.url);
    return c0(r, t.params, t.paramsSerializer);
  }
};
N.forEach(['delete', 'get', 'head', 'options'], function (t) {
  On.prototype[t] = function (r, n) {
    return this.request(
      Un(n || {}, { method: t, url: r, data: (n || {}).data }),
    );
  };
});
N.forEach(['post', 'put', 'patch'], function (t) {
  function r(n) {
    return function (o, s, a) {
      return this.request(
        Un(a || {}, {
          method: t,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: s,
        }),
      );
    };
  }
  (On.prototype[t] = r()), (On.prototype[t + 'Form'] = r(!0));
});
let D_ = class _0 {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let r;
    this.promise = new Promise(function (o) {
      r = o;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; ) n._listeners[o](i);
      n._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((a) => {
          n.subscribe(a), (o = a);
        }).then(i);
        return (
          (s.cancel = function () {
            n.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, a) {
        n.reason || ((n.reason = new Hi(o, s, a)), r(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (n) => {
        t.abort(n);
      };
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new _0(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function B_(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function $_(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const Ic = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ic).forEach(([e, t]) => {
  Ic[t] = e;
});
function E0(e) {
  const t = new On(e),
    r = Jg(On.prototype.request, t);
  return (
    N.extend(r, On.prototype, t, { allOwnKeys: !0 }),
    N.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (i) {
      return E0(Un(e, i));
    }),
    r
  );
}
const Me = E0(ls);
Me.Axios = On;
Me.CanceledError = Hi;
Me.CancelToken = D_;
Me.isCancel = p0;
Me.VERSION = x0;
Me.toFormData = fl;
Me.AxiosError = le;
Me.Cancel = Me.CanceledError;
Me.all = function (t) {
  return Promise.all(t);
};
Me.spread = B_;
Me.isAxiosError = $_;
Me.mergeConfig = Un;
Me.AxiosHeaders = It;
Me.formToJSON = (e) => f0(N.isHTMLForm(e) ? new FormData(e) : e);
Me.getAdapter = w0.getAdapter;
Me.HttpStatusCode = Ic;
Me.default = Me;
const {
  Axios: SC,
  AxiosError: U_,
  CanceledError: CC,
  isCancel: RC,
  CancelToken: TC,
  VERSION: AC,
  all: IC,
  Cancel: NC,
  isAxiosError: PC,
  spread: OC,
  toFormData: FC,
  AxiosHeaders: bC,
  HttpStatusCode: jC,
  formToJSON: LC,
  getAdapter: DC,
  mergeConfig: BC,
} = Me;
class z_ {
  constructor(t, r, n = 1e3) {
    Kn(this, 'path');
    Kn(this, 'axiosInstance');
    (this.path = r),
      (this.axiosInstance = Me.create({ baseURL: t, timeout: n }));
  }
  async query(t, r) {
    return await this.request('execute', t, r);
  }
  async mutate(t, r) {
    return await this.request('execute', t, r);
  }
  async execute(t, r) {
    return await this.request('execute', t, r);
  }
  async request(t, r, n) {
    var s,
      a,
      u,
      f,
      d,
      h,
      w,
      S,
      x,
      E,
      R,
      y,
      m,
      v,
      C,
      P,
      j,
      b,
      U,
      ae,
      Y,
      Oe,
      te,
      se,
      xe,
      Ce;
    const i = this.getRandomRequestId(),
      o = { jsonrpc: '2.0', id: i, method: t, params: r };
    try {
      const M = await this.axiosInstance.post(this.path, o, n);
      return (M == null ? void 0 : M.status) === 200
        ? ((s = M == null ? void 0 : M.data) == null ? void 0 : s.id) !== i
          ? {
              error: {
                code: 400,
                id: (a = M == null ? void 0 : M.data) == null ? void 0 : a.id,
                jsonrpc:
                  (u = M == null ? void 0 : M.data) == null
                    ? void 0
                    : u.jsonrpc,
                error: {
                  name: 'MissmatchedRequestIdError',
                  cause: {
                    name: 'MissmatchedRequestIdError',
                    info: {
                      message: `Missmatched RequestId expected ${i}, got ${(f = M == null ? void 0 : M.data) == null ? void 0 : f.id}`,
                    },
                  },
                },
              },
            }
          : (d = M == null ? void 0 : M.data) != null && d.error
            ? {
                error: {
                  code: 400,
                  id: (h = M == null ? void 0 : M.data) == null ? void 0 : h.id,
                  jsonrpc:
                    (w = M == null ? void 0 : M.data) == null
                      ? void 0
                      : w.jsonrpc,
                  error: {
                    name:
                      (x =
                        (S = M == null ? void 0 : M.data) == null
                          ? void 0
                          : S.error) == null
                        ? void 0
                        : x.type,
                    cause: {
                      name:
                        ((y =
                          (R =
                            (E = M == null ? void 0 : M.data) == null
                              ? void 0
                              : E.error) == null
                            ? void 0
                            : R.data) == null
                          ? void 0
                          : y.type) ??
                        ((v =
                          (m = M == null ? void 0 : M.data) == null
                            ? void 0
                            : m.error) == null
                          ? void 0
                          : v.type),
                      info: {
                        message:
                          (b =
                            (j =
                              (P =
                                (C = M == null ? void 0 : M.data) == null
                                  ? void 0
                                  : C.error) == null
                                ? void 0
                                : P.data) == null
                              ? void 0
                              : j.data) == null
                            ? void 0
                            : b.type,
                      },
                    },
                  },
                },
              }
            : {
                result:
                  (U = M == null ? void 0 : M.data) == null ? void 0 : U.result,
              }
        : {
            error: {
              id: (ae = M == null ? void 0 : M.data) == null ? void 0 : ae.id,
              jsonrpc:
                (Y = M == null ? void 0 : M.data) == null ? void 0 : Y.jsonrpc,
              code: (M == null ? void 0 : M.status) ?? null,
              error: {
                name: 'InvalidRequestError',
                cause: {
                  name: 'InvalidRequestError',
                  info: {
                    message:
                      (xe =
                        (se =
                          (te =
                            (Oe = M == null ? void 0 : M.data) == null
                              ? void 0
                              : Oe.error) == null
                            ? void 0
                            : te.data) == null
                          ? void 0
                          : se.data) == null
                        ? void 0
                        : xe.type,
                  },
                },
              },
            },
          };
    } catch (M) {
      return {
        error: {
          id: i,
          jsonrpc: '2.0',
          code: M.response.code,
          error: {
            name: 'UnknownServerError',
            cause: {
              name: 'UnknownServerError',
              info: {
                message:
                  (Ce = M == null ? void 0 : M.response) == null
                    ? void 0
                    : Ce.data,
              },
            },
          },
        },
      };
    }
  }
  getRandomRequestId() {
    return Math.floor(Math.random() * Math.pow(2, 32));
  }
}
class M_ {
  constructor(t) {
    Kn(this, 'client');
    this.client = t;
  }
  async refreshToken(t, r) {
    return await this.client.post(`${r}/admin-api/refresh-jwt-token`, {
      refreshToken: t,
    });
  }
  async health(t) {
    return await this.client.get(`${t.url}/admin-api/health`);
  }
}
class V_ {
  constructor(t) {
    Kn(this, 'axios');
    this.axios = t;
  }
  async get(t, r) {
    return this.request(this.axios.get(t, { headers: r }));
  }
  async post(t, r, n = {}) {
    return this.request(this.axios.post(t, r, { headers: n }));
  }
  async put(t, r, n) {
    return this.request(
      this.axios.put(t, r, {
        headers: n == null ? void 0 : n.reduce((i, o) => ({ ...i, ...o }), {}),
      }),
    );
  }
  async delete(t, r) {
    return this.request(
      this.axios.delete(t, {
        headers: r == null ? void 0 : r.reduce((n, i) => ({ ...n, ...i }), {}),
      }),
    );
  }
  async patch(t, r, n) {
    return this.request(
      this.axios.patch(t, r, {
        headers: n == null ? void 0 : n.reduce((i, o) => ({ ...i, ...o }), {}),
      }),
    );
  }
  async head(t, r) {
    return this.request(
      this.axios.head(t, {
        headers: r == null ? void 0 : r.reduce((n, i) => ({ ...n, ...i }), {}),
      }),
    );
  }
  async request(t) {
    var r, n, i, o, s;
    try {
      const a = await t;
      return ((n =
        (r = a == null ? void 0 : a.config) == null ? void 0 : r.method) == null
        ? void 0
        : n.toUpperCase()) === 'HEAD'
        ? { data: null }
        : a.data;
    } catch (a) {
      if (a instanceof U_) {
        if (
          ((o =
            (i = a == null ? void 0 : a.config) == null ? void 0 : i.method) ==
          null
            ? void 0
            : o.toUpperCase()) === 'HEAD'
        )
          return { error: { code: a.request.status, message: a.message } };
        const u = (s = a.response) == null ? void 0 : s.data.error;
        return !u || !u.message
          ? { error: Wp }
          : { error: { code: u.code, message: u.message } };
      }
      return { error: Wp };
    }
  }
}
const Wp = { code: 500, message: 'Something went wrong' };
class W_ {
  constructor(t) {
    Kn(this, 'nodeApi');
    this.nodeApi = new M_(t);
  }
  node() {
    return this.nodeApi;
  }
}
const k0 = new W_(new V_(Me));
var St = function () {
  return (
    (St =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    St.apply(this, arguments)
  );
};
function Ko(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var Ae = '-ms-',
  So = '-moz-',
  we = '-webkit-',
  S0 = 'comm',
  hl = 'rule',
  Jd = 'decl',
  H_ = '@import',
  C0 = '@keyframes',
  Z_ = '@layer',
  R0 = Math.abs,
  Qd = String.fromCharCode,
  Nc = Object.assign;
function q_(e, t) {
  return rt(e, 0) ^ 45
    ? (((((((t << 2) ^ rt(e, 0)) << 2) ^ rt(e, 1)) << 2) ^ rt(e, 2)) << 2) ^
        rt(e, 3)
    : 0;
}
function T0(e) {
  return e.trim();
}
function Ir(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, r) {
  return e.replace(t, r);
}
function Zs(e, t, r) {
  return e.indexOf(t, r);
}
function rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ni(e, t, r) {
  return e.slice(t, r);
}
function hr(e) {
  return e.length;
}
function A0(e) {
  return e.length;
}
function uo(e, t) {
  return t.push(e), e;
}
function K_(e, t) {
  return e.map(t).join('');
}
function Hp(e, t) {
  return e.filter(function (r) {
    return !Ir(r, t);
  });
}
var ml = 1,
  Pi = 1,
  I0 = 0,
  Jt = 0,
  Ge = 0,
  Zi = '';
function gl(e, t, r, n, i, o, s, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: o,
    line: ml,
    column: Pi,
    length: s,
    return: '',
    siblings: a,
  };
}
function Kr(e, t) {
  return Nc(
    gl('', null, null, '', null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function Qn(e) {
  for (; e.root; ) e = Kr(e.root, { children: [e] });
  uo(e, e.siblings);
}
function G_() {
  return Ge;
}
function J_() {
  return (
    (Ge = Jt > 0 ? rt(Zi, --Jt) : 0), Pi--, Ge === 10 && ((Pi = 1), ml--), Ge
  );
}
function or() {
  return (
    (Ge = Jt < I0 ? rt(Zi, Jt++) : 0), Pi++, Ge === 10 && ((Pi = 1), ml++), Ge
  );
}
function Fn() {
  return rt(Zi, Jt);
}
function qs() {
  return Jt;
}
function yl(e, t) {
  return Ni(Zi, e, t);
}
function Pc(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Q_(e) {
  return (ml = Pi = 1), (I0 = hr((Zi = e))), (Jt = 0), [];
}
function Y_(e) {
  return (Zi = ''), e;
}
function iu(e) {
  return T0(yl(Jt - 1, Oc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function X_(e) {
  for (; (Ge = Fn()) && Ge < 33; ) or();
  return Pc(e) > 2 || Pc(Ge) > 3 ? '' : ' ';
}
function eE(e, t) {
  for (
    ;
    --t &&
    or() &&
    !(Ge < 48 || Ge > 102 || (Ge > 57 && Ge < 65) || (Ge > 70 && Ge < 97));

  );
  return yl(e, qs() + (t < 6 && Fn() == 32 && or() == 32));
}
function Oc(e) {
  for (; or(); )
    switch (Ge) {
      case e:
        return Jt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Oc(Ge);
        break;
      case 40:
        e === 41 && Oc(e);
        break;
      case 92:
        or();
        break;
    }
  return Jt;
}
function tE(e, t) {
  for (; or() && e + Ge !== 57; ) if (e + Ge === 84 && Fn() === 47) break;
  return '/*' + yl(t, Jt - 1) + '*' + Qd(e === 47 ? e : or());
}
function rE(e) {
  for (; !Pc(Fn()); ) or();
  return yl(e, Jt);
}
function nE(e) {
  return Y_(Ks('', null, null, null, [''], (e = Q_(e)), 0, [0], e));
}
function Ks(e, t, r, n, i, o, s, a, u) {
  for (
    var f = 0,
      d = 0,
      h = s,
      w = 0,
      S = 0,
      x = 0,
      E = 1,
      R = 1,
      y = 1,
      m = 0,
      v = '',
      C = i,
      P = o,
      j = n,
      b = v;
    R;

  )
    switch (((x = m), (m = or()))) {
      case 40:
        if (x != 108 && rt(b, h - 1) == 58) {
          Zs((b += ce(iu(m), '&', '&\f')), '&\f', R0(f ? a[f - 1] : 0)) != -1 &&
            (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += iu(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += X_(x);
        break;
      case 92:
        b += eE(qs() - 1, 7);
        continue;
      case 47:
        switch (Fn()) {
          case 42:
          case 47:
            uo(iE(tE(or(), qs()), t, r, u), u);
            break;
          default:
            b += '/';
        }
        break;
      case 123 * E:
        a[f++] = hr(b) * y;
      case 125 * E:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            R = 0;
          case 59 + d:
            y == -1 && (b = ce(b, /\f/g, '')),
              S > 0 &&
                hr(b) - h &&
                uo(
                  S > 32
                    ? qp(b + ';', n, r, h - 1, u)
                    : qp(ce(b, ' ', '') + ';', n, r, h - 2, u),
                  u,
                );
            break;
          case 59:
            b += ';';
          default:
            if (
              (uo(
                (j = Zp(b, t, r, f, d, i, a, v, (C = []), (P = []), h, o)),
                o,
              ),
              m === 123)
            )
              if (d === 0) Ks(b, t, j, j, C, o, h, a, P);
              else
                switch (w === 99 && rt(b, 3) === 110 ? 100 : w) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ks(
                      e,
                      j,
                      j,
                      n && uo(Zp(e, j, j, 0, 0, i, a, v, i, (C = []), h, P), P),
                      i,
                      P,
                      h,
                      a,
                      n ? C : P,
                    );
                    break;
                  default:
                    Ks(b, j, j, j, [''], P, 0, a, P);
                }
        }
        (f = d = S = 0), (E = y = 1), (v = b = ''), (h = s);
        break;
      case 58:
        (h = 1 + hr(b)), (S = x);
      default:
        if (E < 1) {
          if (m == 123) --E;
          else if (m == 125 && E++ == 0 && J_() == 125) continue;
        }
        switch (((b += Qd(m)), m * E)) {
          case 38:
            y = d > 0 ? 1 : ((b += '\f'), -1);
            break;
          case 44:
            (a[f++] = (hr(b) - 1) * y), (y = 1);
            break;
          case 64:
            Fn() === 45 && (b += iu(or())),
              (w = Fn()),
              (d = h = hr((v = b += rE(qs())))),
              m++;
            break;
          case 45:
            x === 45 && hr(b) == 2 && (E = 0);
        }
    }
  return o;
}
function Zp(e, t, r, n, i, o, s, a, u, f, d, h) {
  for (
    var w = i - 1, S = i === 0 ? o : [''], x = A0(S), E = 0, R = 0, y = 0;
    E < n;
    ++E
  )
    for (var m = 0, v = Ni(e, w + 1, (w = R0((R = s[E])))), C = e; m < x; ++m)
      (C = T0(R > 0 ? S[m] + ' ' + v : ce(v, /&\f/g, S[m]))) && (u[y++] = C);
  return gl(e, t, r, i === 0 ? hl : a, u, f, d, h);
}
function iE(e, t, r, n) {
  return gl(e, t, r, S0, Qd(G_()), Ni(e, 2, -2), 0, n);
}
function qp(e, t, r, n, i) {
  return gl(e, t, r, Jd, Ni(e, 0, n), Ni(e, n + 1, -1), n, i);
}
function N0(e, t, r) {
  switch (q_(e, t)) {
    case 5103:
      return we + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return we + e + e;
    case 4789:
      return So + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + e + So + e + Ae + e + e;
    case 5936:
      switch (rt(e, t + 11)) {
        case 114:
          return we + e + Ae + ce(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return we + e + Ae + ce(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return we + e + Ae + ce(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return we + e + Ae + e + e;
    case 6165:
      return we + e + Ae + 'flex-' + e + e;
    case 5187:
      return (
        we + e + ce(e, /(\w+).+(:[^]+)/, we + 'box-$1$2' + Ae + 'flex-$1$2') + e
      );
    case 5443:
      return (
        we +
        e +
        Ae +
        'flex-item-' +
        ce(e, /flex-|-self/g, '') +
        (Ir(e, /flex-|baseline/)
          ? ''
          : Ae + 'grid-row-' + ce(e, /flex-|-self/g, '')) +
        e
      );
    case 4675:
      return (
        we +
        e +
        Ae +
        'flex-line-pack' +
        ce(e, /align-content|flex-|-self/g, '') +
        e
      );
    case 5548:
      return we + e + Ae + ce(e, 'shrink', 'negative') + e;
    case 5292:
      return we + e + Ae + ce(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        we +
        'box-' +
        ce(e, '-grow', '') +
        we +
        e +
        Ae +
        ce(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return we + ce(e, /([^-])(transform)/g, '$1' + we + '$2') + e;
    case 6187:
      return (
        ce(
          ce(ce(e, /(zoom-|grab)/, we + '$1'), /(image-set)/, we + '$1'),
          e,
          '',
        ) + e
      );
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, we + '$1$`$1');
    case 4968:
      return (
        ce(
          ce(e, /(.+:)(flex-)?(.*)/, we + 'box-pack:$3' + Ae + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        we +
        e +
        e
      );
    case 4200:
      if (!Ir(e, /flex-|baseline/))
        return Ae + 'grid-column-align' + Ni(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Ae + ce(e, 'template-', '') + e;
    case 4384:
    case 3616:
      return r &&
        r.some(function (n, i) {
          return (t = i), Ir(n.props, /grid-\w+-end/);
        })
        ? ~Zs(e + (r = r[t].value), 'span', 0)
          ? e
          : Ae +
            ce(e, '-start', '') +
            e +
            Ae +
            'grid-row-span:' +
            (~Zs(r, 'span', 0) ? Ir(r, /\d+/) : +Ir(r, /\d+/) - +Ir(e, /\d+/)) +
            ';'
        : Ae + ce(e, '-start', '') + e;
    case 4896:
    case 4128:
      return r &&
        r.some(function (n) {
          return Ir(n.props, /grid-\w+-start/);
        })
        ? e
        : Ae + ce(ce(e, '-end', '-span'), 'span ', '') + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, we + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (hr(e) - 1 - t > 6)
        switch (rt(e, t + 1)) {
          case 109:
            if (rt(e, t + 4) !== 45) break;
          case 102:
            return (
              ce(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  we +
                  '$2-$3$1' +
                  So +
                  (rt(e, t + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~Zs(e, 'stretch', 0)
              ? N0(ce(e, 'stretch', 'fill-available'), t, r) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return ce(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (n, i, o, s, a, u, f) {
          return (
            Ae +
            i +
            ':' +
            o +
            f +
            (s ? Ae + i + '-span:' + (a ? u : +u - +o) + f : '') +
            e
          );
        },
      );
    case 4949:
      if (rt(e, t + 6) === 121) return ce(e, ':', ':' + we) + e;
      break;
    case 6444:
      switch (rt(e, rt(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            ce(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                we +
                (rt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                we +
                '$2$3$1' +
                Ae +
                '$2box$3',
            ) + e
          );
        case 100:
          return ce(e, ':', ':' + Ae) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ce(e, 'scroll-', 'scroll-snap-') + e;
  }
  return e;
}
function Ta(e, t) {
  for (var r = '', n = 0; n < e.length; n++) r += t(e[n], n, e, t) || '';
  return r;
}
function oE(e, t, r, n) {
  switch (e.type) {
    case Z_:
      if (e.children.length) break;
    case H_:
    case Jd:
      return (e.return = e.return || e.value);
    case S0:
      return '';
    case C0:
      return (e.return = e.value + '{' + Ta(e.children, n) + '}');
    case hl:
      if (!hr((e.value = e.props.join(',')))) return '';
  }
  return hr((r = Ta(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
function sE(e) {
  var t = A0(e);
  return function (r, n, i, o) {
    for (var s = '', a = 0; a < t; a++) s += e[a](r, n, i, o) || '';
    return s;
  };
}
function aE(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function lE(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Jd:
        e.return = N0(e.value, e.length, r);
        return;
      case C0:
        return Ta([Kr(e, { value: ce(e.value, '@', '@' + we) })], n);
      case hl:
        if (e.length)
          return K_((r = e.props), function (i) {
            switch (Ir(i, (n = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                Qn(Kr(e, { props: [ce(i, /:(read-\w+)/, ':' + So + '$1')] })),
                  Qn(Kr(e, { props: [i] })),
                  Nc(e, { props: Hp(r, n) });
                break;
              case '::placeholder':
                Qn(
                  Kr(e, {
                    props: [ce(i, /:(plac\w+)/, ':' + we + 'input-$1')],
                  }),
                ),
                  Qn(Kr(e, { props: [ce(i, /:(plac\w+)/, ':' + So + '$1')] })),
                  Qn(Kr(e, { props: [ce(i, /:(plac\w+)/, Ae + 'input-$1')] })),
                  Qn(Kr(e, { props: [i] })),
                  Nc(e, { props: Hp(r, n) });
                break;
            }
            return '';
          });
    }
}
var uE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ot = {},
  Oi =
    (typeof Zo < 'u' &&
      Ot !== void 0 &&
      (Ot.REACT_APP_SC_ATTR || Ot.SC_ATTR)) ||
    'data-styled',
  P0 = 'active',
  O0 = 'data-styled-version',
  vl = '6.1.11',
  Yd = `/*!sc*/
`,
  Xd = typeof window < 'u' && 'HTMLElement' in window,
  cE = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof Zo < 'u' &&
        Ot !== void 0 &&
        Ot.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        Ot.REACT_APP_SC_DISABLE_SPEEDY !== ''
      ? Ot.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
        Ot.REACT_APP_SC_DISABLE_SPEEDY
      : typeof Zo < 'u' &&
        Ot !== void 0 &&
        Ot.SC_DISABLE_SPEEDY !== void 0 &&
        Ot.SC_DISABLE_SPEEDY !== '' &&
        Ot.SC_DISABLE_SPEEDY !== 'false' &&
        Ot.SC_DISABLE_SPEEDY),
  wl = Object.freeze([]),
  Fi = Object.freeze({});
function dE(e, t, r) {
  return (
    r === void 0 && (r = Fi), (e.theme !== r.theme && e.theme) || t || r.theme
  );
}
var F0 = new Set([
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'u',
    'ul',
    'use',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]),
  fE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  pE = /(^-|-$)/g;
function Kp(e) {
  return e.replace(fE, '-').replace(pE, '');
}
var hE = /(a)(d)/gi,
  Is = 52,
  Gp = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Fc(e) {
  var t,
    r = '';
  for (t = Math.abs(e); t > Is; t = (t / Is) | 0) r = Gp(t % Is) + r;
  return (Gp(t % Is) + r).replace(hE, '$1-$2');
}
var ou,
  b0 = 5381,
  pi = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  j0 = function (e) {
    return pi(b0, e);
  };
function L0(e) {
  return Fc(j0(e) >>> 0);
}
function mE(e) {
  return e.displayName || e.name || 'Component';
}
function su(e) {
  return typeof e == 'string' && !0;
}
var D0 = typeof Symbol == 'function' && Symbol.for,
  B0 = D0 ? Symbol.for('react.memo') : 60115,
  gE = D0 ? Symbol.for('react.forward_ref') : 60112,
  yE = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  vE = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  $0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  wE =
    (((ou = {})[gE] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ou[B0] = $0),
    ou);
function Jp(e) {
  return ('type' in (t = e) && t.type.$$typeof) === B0
    ? $0
    : '$$typeof' in e
      ? wE[e.$$typeof]
      : yE;
  var t;
}
var xE = Object.defineProperty,
  _E = Object.getOwnPropertyNames,
  Qp = Object.getOwnPropertySymbols,
  EE = Object.getOwnPropertyDescriptor,
  kE = Object.getPrototypeOf,
  Yp = Object.prototype;
function U0(e, t, r) {
  if (typeof t != 'string') {
    if (Yp) {
      var n = kE(t);
      n && n !== Yp && U0(e, n, r);
    }
    var i = _E(t);
    Qp && (i = i.concat(Qp(t)));
    for (var o = Jp(e), s = Jp(t), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!(u in vE || (r && r[u]) || (s && u in s) || (o && u in o))) {
        var f = EE(t, u);
        try {
          xE(e, u, f);
        } catch {}
      }
    }
  }
  return e;
}
function bi(e) {
  return typeof e == 'function';
}
function ef(e) {
  return typeof e == 'object' && 'styledComponentId' in e;
}
function An(e, t) {
  return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
}
function bc(e, t) {
  if (e.length === 0) return '';
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function Go(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    e.constructor.name === Object.name &&
    !('props' in e && e.$$typeof)
  );
}
function jc(e, t, r) {
  if ((r === void 0 && (r = !1), !r && !Go(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++) e[n] = jc(e[n], t[n]);
  else if (Go(t)) for (var n in t) e[n] = jc(e[n], t[n]);
  return e;
}
function tf(e, t) {
  Object.defineProperty(e, 'toString', { value: t });
}
function us(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error(
    'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
      .concat(e, ' for more information.')
      .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : ''),
  );
}
var SE = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
        return r;
      }),
      (e.prototype.insertRules = function (t, r) {
        if (t >= this.groupSizes.length) {
          for (var n = this.groupSizes, i = n.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw us(16, ''.concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(n),
            (this.length = o);
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), u = ((s = 0), r.length);
          s < u;
          s++
        )
          this.tag.insertRule(a, r[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var r = this.groupSizes[t],
            n = this.indexOfGroup(t),
            i = n + r;
          this.groupSizes[t] = 0;
          for (var o = n; o < i; o++) this.tag.deleteRule(n);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var r = '';
        if (t >= this.length || this.groupSizes[t] === 0) return r;
        for (
          var n = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + n,
            s = i;
          s < o;
          s++
        )
          r += ''.concat(this.tag.getRule(s)).concat(Yd);
        return r;
      }),
      e
    );
  })(),
  Gs = new Map(),
  Aa = new Map(),
  Js = 1,
  Ns = function (e) {
    if (Gs.has(e)) return Gs.get(e);
    for (; Aa.has(Js); ) Js++;
    var t = Js++;
    return Gs.set(e, t), Aa.set(t, e), t;
  },
  CE = function (e, t) {
    (Js = t + 1), Gs.set(e, t), Aa.set(t, e);
  },
  RE = 'style['.concat(Oi, '][').concat(O0, '="').concat(vl, '"]'),
  TE = new RegExp(
    '^'.concat(Oi, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  AE = function (e, t, r) {
    for (var n, i = r.split(','), o = 0, s = i.length; o < s; o++)
      (n = i[o]) && e.registerName(t, n);
  },
  IE = function (e, t) {
    for (
      var r,
        n = ((r = t.textContent) !== null && r !== void 0 ? r : '').split(Yd),
        i = [],
        o = 0,
        s = n.length;
      o < s;
      o++
    ) {
      var a = n[o].trim();
      if (a) {
        var u = a.match(TE);
        if (u) {
          var f = 0 | parseInt(u[1], 10),
            d = u[2];
          f !== 0 && (CE(d, f), AE(e, d, u[3]), e.getTag().insertRules(f, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  };
function NE() {
  return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
}
var z0 = function (e) {
    var t = document.head,
      r = e || t,
      n = document.createElement('style'),
      i = (function (a) {
        var u = Array.from(a.querySelectorAll('style['.concat(Oi, ']')));
        return u[u.length - 1];
      })(r),
      o = i !== void 0 ? i.nextSibling : null;
    n.setAttribute(Oi, P0), n.setAttribute(O0, vl);
    var s = NE();
    return s && n.setAttribute('nonce', s), r.insertBefore(n, o), n;
  },
  PE = (function () {
    function e(t) {
      (this.element = z0(t)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (r) {
          if (r.sheet) return r.sheet;
          for (var n = document.styleSheets, i = 0, o = n.length; i < o; i++) {
            var s = n[i];
            if (s.ownerNode === r) return s;
          }
          throw us(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        try {
          return this.sheet.insertRule(r, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var r = this.sheet.cssRules[t];
        return r && r.cssText ? r.cssText : '';
      }),
      e
    );
  })(),
  OE = (function () {
    function e(t) {
      (this.element = z0(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        if (t <= this.length && t >= 0) {
          var n = document.createTextNode(r);
          return (
            this.element.insertBefore(n, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : '';
      }),
      e
    );
  })(),
  FE = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        return (
          t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : '';
      }),
      e
    );
  })(),
  Xp = Xd,
  bE = { isServer: !Xd, useCSSOMInjection: !cE },
  M0 = (function () {
    function e(t, r, n) {
      t === void 0 && (t = Fi), r === void 0 && (r = {});
      var i = this;
      (this.options = St(St({}, bE), t)),
        (this.gs = r),
        (this.names = new Map(n)),
        (this.server = !!t.isServer),
        !this.server &&
          Xd &&
          Xp &&
          ((Xp = !1),
          (function (o) {
            for (
              var s = document.querySelectorAll(RE), a = 0, u = s.length;
              a < u;
              a++
            ) {
              var f = s[a];
              f &&
                f.getAttribute(Oi) !== P0 &&
                (IE(o, f), f.parentNode && f.parentNode.removeChild(f));
            }
          })(this)),
        tf(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                a = s.length,
                u = '',
                f = function (h) {
                  var w = (function (y) {
                    return Aa.get(y);
                  })(h);
                  if (w === void 0) return 'continue';
                  var S = o.names.get(w),
                    x = s.getGroup(h);
                  if (S === void 0 || x.length === 0) return 'continue';
                  var E = ''
                      .concat(Oi, '.g')
                      .concat(h, '[id="')
                      .concat(w, '"]'),
                    R = '';
                  S !== void 0 &&
                    S.forEach(function (y) {
                      y.length > 0 && (R += ''.concat(y, ','));
                    }),
                    (u += ''
                      .concat(x)
                      .concat(E, '{content:"')
                      .concat(R, '"}')
                      .concat(Yd));
                },
                d = 0;
              d < a;
              d++
            )
              f(d);
            return u;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return Ns(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            St(St({}, this.options), t),
            this.gs,
            (r && this.names) || void 0,
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (r) {
              var n = r.useCSSOMInjection,
                i = r.target;
              return r.isServer ? new FE(i) : n ? new PE(i) : new OE(i);
            })(this.options)),
            new SE(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, r) {
        return this.names.has(t) && this.names.get(t).has(r);
      }),
      (e.prototype.registerName = function (t, r) {
        if ((Ns(t), this.names.has(t))) this.names.get(t).add(r);
        else {
          var n = new Set();
          n.add(r), this.names.set(t, n);
        }
      }),
      (e.prototype.insertRules = function (t, r, n) {
        this.registerName(t, r), this.getTag().insertRules(Ns(t), n);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Ns(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  jE = /&/g,
  LE = /^\s*\/\/.*$/gm;
function V0(e, t) {
  return e.map(function (r) {
    return (
      r.type === 'rule' &&
        ((r.value = ''.concat(t, ' ').concat(r.value)),
        (r.value = r.value.replaceAll(',', ','.concat(t, ' '))),
        (r.props = r.props.map(function (n) {
          return ''.concat(t, ' ').concat(n);
        }))),
      Array.isArray(r.children) &&
        r.type !== '@keyframes' &&
        (r.children = V0(r.children, t)),
      r
    );
  });
}
function DE(e) {
  var t,
    r,
    n,
    i = Fi,
    o = i.options,
    s = o === void 0 ? Fi : o,
    a = i.plugins,
    u = a === void 0 ? wl : a,
    f = function (w, S, x) {
      return x.startsWith(r) && x.endsWith(r) && x.replaceAll(r, '').length > 0
        ? '.'.concat(t)
        : w;
    },
    d = u.slice();
  d.push(function (w) {
    w.type === hl &&
      w.value.includes('&') &&
      (w.props[0] = w.props[0].replace(jE, r).replace(n, f));
  }),
    s.prefix && d.push(lE),
    d.push(oE);
  var h = function (w, S, x, E) {
    S === void 0 && (S = ''),
      x === void 0 && (x = ''),
      E === void 0 && (E = '&'),
      (t = E),
      (r = S),
      (n = new RegExp('\\'.concat(r, '\\b'), 'g'));
    var R = w.replace(LE, ''),
      y = nE(x || S ? ''.concat(x, ' ').concat(S, ' { ').concat(R, ' }') : R);
    s.namespace && (y = V0(y, s.namespace));
    var m = [];
    return (
      Ta(
        y,
        sE(
          d.concat(
            aE(function (v) {
              return m.push(v);
            }),
          ),
        ),
      ),
      m
    );
  };
  return (
    (h.hash = u.length
      ? u
          .reduce(function (w, S) {
            return S.name || us(15), pi(w, S.name);
          }, b0)
          .toString()
      : ''),
    h
  );
}
var BE = new M0(),
  Lc = DE(),
  W0 = ie.createContext({
    shouldForwardProp: void 0,
    styleSheet: BE,
    stylis: Lc,
  });
W0.Consumer;
ie.createContext(void 0);
function eh() {
  return B.useContext(W0);
}
var H0 = (function () {
    function e(t, r) {
      var n = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = Lc);
        var s = n.name + o.hash;
        i.hasNameForId(n.id, s) ||
          i.insertRules(n.id, s, o(n.rules, s, '@keyframes'));
      }),
        (this.name = t),
        (this.id = 'sc-keyframes-'.concat(t)),
        (this.rules = r),
        tf(this, function () {
          throw us(12, String(n.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Lc), this.name + t.hash;
      }),
      e
    );
  })(),
  $E = function (e) {
    return e >= 'A' && e <= 'Z';
  };
function th(e) {
  for (var t = '', r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === '-' && e[0] === '-') return e;
    $E(n) ? (t += '-' + n.toLowerCase()) : (t += n);
  }
  return t.startsWith('ms-') ? '-' + t : t;
}
var Z0 = function (e) {
    return e == null || e === !1 || e === '';
  },
  q0 = function (e) {
    var t,
      r,
      n = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !Z0(o) &&
        ((Array.isArray(o) && o.isCss) || bi(o)
          ? n.push(''.concat(th(i), ':'), o, ';')
          : Go(o)
            ? n.push.apply(
                n,
                Ko(Ko([''.concat(i, ' {')], q0(o), !1), ['}'], !1),
              )
            : n.push(
                ''
                  .concat(th(i), ': ')
                  .concat(
                    ((t = i),
                    (r = o) == null || typeof r == 'boolean' || r === ''
                      ? ''
                      : typeof r != 'number' ||
                          r === 0 ||
                          t in uE ||
                          t.startsWith('--')
                        ? String(r).trim()
                        : ''.concat(r, 'px')),
                    ';',
                  ),
              ));
    }
    return n;
  };
function bn(e, t, r, n) {
  if (Z0(e)) return [];
  if (ef(e)) return ['.'.concat(e.styledComponentId)];
  if (bi(e)) {
    if (!bi((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return bn(i, t, r, n);
  }
  var o;
  return e instanceof H0
    ? r
      ? (e.inject(r, n), [e.getName(n)])
      : [e]
    : Go(e)
      ? q0(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            wl,
            e.map(function (s) {
              return bn(s, t, r, n);
            }),
          )
        : [e.toString()];
}
function UE(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (bi(r) && !ef(r)) return !1;
  }
  return !0;
}
var zE = j0(vl),
  ME = (function () {
    function e(t, r, n) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (n === void 0 || n.isStatic) && UE(t)),
        (this.componentId = r),
        (this.baseHash = pi(zE, r)),
        (this.baseStyle = n),
        M0.registerId(r);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, r, n) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, r, n)
          : '';
        if (this.isStatic && !n.hash)
          if (
            this.staticRulesId &&
            r.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = An(i, this.staticRulesId);
          else {
            var o = bc(bn(this.rules, t, r, n)),
              s = Fc(pi(this.baseHash, o) >>> 0);
            if (!r.hasNameForId(this.componentId, s)) {
              var a = n(o, '.'.concat(s), void 0, this.componentId);
              r.insertRules(this.componentId, s, a);
            }
            (i = An(i, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var u = pi(this.baseHash, n.hash), f = '', d = 0;
            d < this.rules.length;
            d++
          ) {
            var h = this.rules[d];
            if (typeof h == 'string') f += h;
            else if (h) {
              var w = bc(bn(h, t, r, n));
              (u = pi(u, w + d)), (f += w);
            }
          }
          if (f) {
            var S = Fc(u >>> 0);
            r.hasNameForId(this.componentId, S) ||
              r.insertRules(
                this.componentId,
                S,
                n(f, '.'.concat(S), void 0, this.componentId),
              ),
              (i = An(i, S));
          }
        }
        return i;
      }),
      e
    );
  })(),
  K0 = ie.createContext(void 0);
K0.Consumer;
var au = {};
function VE(e, t, r) {
  var n = ef(e),
    i = e,
    o = !su(e),
    s = t.attrs,
    a = s === void 0 ? wl : s,
    u = t.componentId,
    f =
      u === void 0
        ? (function (C, P) {
            var j = typeof C != 'string' ? 'sc' : Kp(C);
            au[j] = (au[j] || 0) + 1;
            var b = ''.concat(j, '-').concat(L0(vl + j + au[j]));
            return P ? ''.concat(P, '-').concat(b) : b;
          })(t.displayName, t.parentComponentId)
        : u,
    d = t.displayName,
    h =
      d === void 0
        ? (function (C) {
            return su(C) ? 'styled.'.concat(C) : 'Styled('.concat(mE(C), ')');
          })(e)
        : d,
    w =
      t.displayName && t.componentId
        ? ''.concat(Kp(t.displayName), '-').concat(t.componentId)
        : t.componentId || f,
    S = n && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    x = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var E = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var R = t.shouldForwardProp;
      x = function (C, P) {
        return E(C, P) && R(C, P);
      };
    } else x = E;
  }
  var y = new ME(r, w, n ? i.componentStyle : void 0);
  function m(C, P) {
    return (function (j, b, U) {
      var ae = j.attrs,
        Y = j.componentStyle,
        Oe = j.defaultProps,
        te = j.foldedComponentIds,
        se = j.styledComponentId,
        xe = j.target,
        Ce = ie.useContext(K0),
        M = eh(),
        Fe = j.shouldForwardProp || M.shouldForwardProp,
        V = dE(b, Ce, Oe) || Fi,
        Q = (function (Re, Ze, ft) {
          for (
            var Ut,
              Pt = St(St({}, Ze), { className: void 0, theme: ft }),
              Hr = 0;
            Hr < Re.length;
            Hr += 1
          ) {
            var wt = bi((Ut = Re[Hr])) ? Ut(Pt) : Ut;
            for (var xt in wt)
              Pt[xt] =
                xt === 'className'
                  ? An(Pt[xt], wt[xt])
                  : xt === 'style'
                    ? St(St({}, Pt[xt]), wt[xt])
                    : wt[xt];
          }
          return (
            Ze.className && (Pt.className = An(Pt.className, Ze.className)), Pt
          );
        })(ae, b, V),
        ee = Q.as || xe,
        ye = {};
      for (var ve in Q)
        Q[ve] === void 0 ||
          ve[0] === '$' ||
          ve === 'as' ||
          (ve === 'theme' && Q.theme === V) ||
          (ve === 'forwardedAs'
            ? (ye.as = Q.forwardedAs)
            : (Fe && !Fe(ve, ee)) || (ye[ve] = Q[ve]));
      var Qt = (function (Re, Ze) {
          var ft = eh(),
            Ut = Re.generateAndInjectStyles(Ze, ft.styleSheet, ft.stylis);
          return Ut;
        })(Y, Q),
        he = An(te, se);
      return (
        Qt && (he += ' ' + Qt),
        Q.className && (he += ' ' + Q.className),
        (ye[su(ee) && !F0.has(ee) ? 'class' : 'className'] = he),
        (ye.ref = U),
        B.createElement(ee, ye)
      );
    })(v, C, P);
  }
  m.displayName = h;
  var v = ie.forwardRef(m);
  return (
    (v.attrs = S),
    (v.componentStyle = y),
    (v.displayName = h),
    (v.shouldForwardProp = x),
    (v.foldedComponentIds = n
      ? An(i.foldedComponentIds, i.styledComponentId)
      : ''),
    (v.styledComponentId = w),
    (v.target = n ? i.target : e),
    Object.defineProperty(v, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (C) {
        this._foldedDefaultProps = n
          ? (function (P) {
              for (var j = [], b = 1; b < arguments.length; b++)
                j[b - 1] = arguments[b];
              for (var U = 0, ae = j; U < ae.length; U++) jc(P, ae[U], !0);
              return P;
            })({}, i.defaultProps, C)
          : C;
      },
    }),
    tf(v, function () {
      return '.'.concat(v.styledComponentId);
    }),
    o &&
      U0(v, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    v
  );
}
function rh(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var nh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function G0(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (bi(e) || Go(e)) return nh(bn(rh(wl, Ko([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == 'string'
    ? bn(n)
    : nh(bn(rh(n, t)));
}
function Dc(e, t, r) {
  if ((r === void 0 && (r = Fi), !t)) throw us(1, t);
  var n = function (i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, r, G0.apply(void 0, Ko([i], o, !1)));
  };
  return (
    (n.attrs = function (i) {
      return Dc(
        e,
        t,
        St(St({}, r), {
          attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
        }),
      );
    }),
    (n.withConfig = function (i) {
      return Dc(e, t, St(St({}, r), i));
    }),
    n
  );
}
var J0 = function (e) {
    return Dc(VE, e);
  },
  G = J0;
F0.forEach(function (e) {
  G[e] = J0(e);
});
function WE(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = bc(G0.apply(void 0, Ko([e], t, !1))),
    i = L0(n);
  return new H0(i, n);
}
const HE = G.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`,
  ZE = WE`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,
  qE = G.svg`
  width: 2.5rem; // equivalent to w-10
  height: 2.5rem; // equivalent to h-10
  color: #b67352;
  animation: ${ZE} 1s linear infinite;
  fill: #ecb159;

  @media (prefers-color-scheme: dark) {
    color: #4b5563; // dark:text-gray-600
  }
`;
function KE() {
  return ie.createElement(
    HE,
    { role: 'status' },
    ie.createElement(
      qE,
      {
        'aria-hidden': 'true',
        viewBox: '0 0 100 101',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      ie.createElement('path', {
        d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
        fill: 'currentColor',
      }),
      ie.createElement('path', {
        d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
        fill: 'currentFill',
      }),
    ),
  );
}
const GE = (e) => {
    const [t, r] = B.useState(null),
      [n, i] = B.useState(null),
      [o, s] = B.useState(!1),
      [a, u] = B.useState(null),
      [f, d] = B.useState(null),
      h = 1e3;
    B.useEffect(() => {
      u(e.getNodeUrl()), d(e.getApplicationId());
    }, [e]);
    function w(m) {
      try {
        return new URL(m), !0;
      } catch {
        return !1;
      }
    }
    function S(m) {
      if (m.length < 32 || m.length > 44) {
        i('Application ID must be between 32 and 44 characters long.');
        return;
      }
      if (
        !/^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/.test(
          m,
        )
      ) {
        i('Application ID must contain only base58 characters.');
        return;
      }
    }
    const x = (m) => {
        r(''), u(m);
      },
      E = (m) => {
        i(''), d(m), S(m);
      },
      R = B.useCallback(async () => {
        if (a)
          if (w(a.toString())) {
            s(!0);
            const m = new Promise((C) => setTimeout(C, h)),
              v = k0.node().health({ url: a });
            Promise.all([m, v]).then(([, C]) => {
              C.data
                ? (r(''),
                  e.setNodeUrl(a),
                  e.setApplicationId(f || ''),
                  e.successRoute())
                : r('Connection failed. Please check if node url is correct.'),
                s(!1);
            });
          } else r('Connection failed. Please check if node url is correct.');
      }, [e, a, f]),
      y = () => !!(!a || n || !f);
    return ie.createElement(
      'div',
      {
        style: {
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          backgroundColor: '#111111',
        },
      },
      ie.createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        ie.createElement(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#1c1c1c',
              padding: '2rem',
              gap: '1rem',
              borderRadius: '0.5rem',
            },
          },
          ie.createElement(
            'div',
            {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                padding: '0 3.5rem',
              },
            },
            ie.createElement(
              'div',
              {
                style: { color: 'white', fontSize: '2.5rem', fontWeight: 600 },
              },
              'App setup',
            ),
            o
              ? ie.createElement(KE, null)
              : ie.createElement(
                  ie.Fragment,
                  null,
                  ie.createElement(
                    'div',
                    {
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      },
                    },
                    ie.createElement(
                      ie.Fragment,
                      null,
                      ie.createElement('input', {
                        type: 'text',
                        placeholder: 'application id',
                        value: (f == null ? void 0 : f.toString()) || '',
                        onChange: (m) => {
                          E(m.target.value);
                        },
                        style: {
                          width: '400px',
                          padding: '0.5rem',
                          borderRadius: '0.375rem',
                        },
                      }),
                      ie.createElement(
                        'div',
                        { style: { color: '#ef4444', fontSize: '0.875rem' } },
                        n,
                      ),
                    ),
                    ie.createElement('input', {
                      type: 'text',
                      placeholder: 'node url',
                      inputMode: 'url',
                      value: (a == null ? void 0 : a.toString()) || '',
                      onChange: (m) => {
                        x(m.target.value);
                      },
                      style: {
                        width: '400px',
                        padding: '0.5rem',
                        borderRadius: '0.375rem',
                      },
                    }),
                    ie.createElement(
                      'div',
                      { style: { color: '#ef4444', fontSize: '0.875rem' } },
                      t,
                    ),
                    ie.createElement(
                      'button',
                      {
                        style: {
                          backgroundColor: '#6b7280',
                          color: 'white',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '0.5rem',
                          height: '46px',
                          fontSize: '1rem',
                          fontWeight: 500,
                          borderRadius: '0.375rem',
                          border: 'none',
                          outline: 'none',
                          padding: '0.5rem',
                          cursor: y() ? 'not-allowed' : 'pointer',
                        },
                        disabled: y(),
                        onClick: () => {
                          R();
                        },
                      },
                      ie.createElement('span', null, 'Set values'),
                    ),
                  ),
                ),
          ),
        ),
      ),
    );
  },
  JE = 'app-url',
  rf = 'access-token',
  nf = 'refresh-token',
  Q0 = (e) => {
    localStorage.setItem(rf, JSON.stringify(e));
  },
  xl = () => {
    if (typeof window < 'u' && window.localStorage) {
      const e = localStorage.getItem(rf);
      if (e) return JSON.parse(e);
    }
    return null;
  },
  Y0 = (e) => {
    localStorage.setItem(nf, JSON.stringify(e));
  },
  of = () => {
    if (typeof window < 'u' && window.localStorage) {
      const e = localStorage.getItem(nf);
      if (e) return JSON.parse(e);
    }
    return null;
  },
  QE = () => {
    if (typeof window < 'u' && window.localStorage) {
      let e = JSON.parse(localStorage.getItem(JE));
      if (e) return e;
    }
    return null;
  },
  lu = () => {
    localStorage.removeItem(rf), localStorage.removeItem(nf);
  },
  YE = ({ getApplicationId: e, getNodeUrl: t, sucessRedirect: r }) => {
    const [n, i] = B.useState(''),
      o = () => {
        const s = t(),
          a = e();
        if (!s) {
          i('Node URL is not set');
          return;
        }
        if (!a) {
          i('Application ID is not set');
          return;
        }
        const u = encodeURIComponent(window.location.href),
          f = `${s}/admin-dashboard/?application_id=${a}&callback_url=${u}`;
        window.location.href = f;
      };
    return (
      B.useEffect(() => {
        const s = new URLSearchParams(window.location.search),
          a = s.get('access_token'),
          u = s.get('refresh_token');
        if (a && u) {
          const f = decodeURIComponent(a),
            d = decodeURIComponent(u);
          Q0(f), Y0(d), r();
        }
      }, []),
      ie.createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.5rem',
            maxWidth: '400px',
          },
        },
        ie.createElement(
          'div',
          {
            style: {
              marginTop: '1.5rem',
              display: 'grid',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: '500',
              textAlign: 'center',
            },
          },
          ie.createElement(
            'span',
            { style: { marginBottom: '0.5rem', color: '#fff' } },
            'Login with Admin Dashboard',
          ),
        ),
        ie.createElement(
          'button',
          {
            style: {
              backgroundColor: '#FF7A00',
              color: 'white',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              height: '46px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              borderRadius: '0.375rem',
              border: 'none',
              outline: 'none',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
            },
            onClick: o,
          },
          'Login',
        ),
        ie.createElement(
          'div',
          {
            style: {
              color: '#ef4444',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
            },
          },
          n,
        ),
      )
    );
  };
class co extends Error {}
co.prototype.name = 'InvalidTokenError';
function XE(e) {
  return decodeURIComponent(
    atob(e).replace(/(.)/g, (t, r) => {
      let n = r.charCodeAt(0).toString(16).toUpperCase();
      return n.length < 2 && (n = '0' + n), '%' + n;
    }),
  );
}
function ek(e) {
  let t = e.replace(/-/g, '+').replace(/_/g, '/');
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += '==';
      break;
    case 3:
      t += '=';
      break;
    default:
      throw new Error('base64 string is not of the correct length');
  }
  try {
    return XE(t);
  } catch {
    return atob(t);
  }
}
function tk(e, t) {
  if (typeof e != 'string')
    throw new co('Invalid token specified: must be a string');
  t || (t = {});
  const r = t.header === !0 ? 0 : 1,
    n = e.split('.')[r];
  if (typeof n != 'string')
    throw new co(`Invalid token specified: missing part #${r + 1}`);
  let i;
  try {
    i = ek(n);
  } catch (o) {
    throw new co(
      `Invalid token specified: invalid base64 for part #${r + 1} (${o.message})`,
    );
  }
  try {
    return JSON.parse(i);
  } catch (o) {
    throw new co(
      `Invalid token specified: invalid json for part #${r + 1} (${o.message})`,
    );
  }
}
const rk = [
    'UnknownServerError',
    'RpcExecutionError',
    'FunctionCallError',
    'CallError',
    'MissmatchedRequestIdError',
    'InvalidRequestError',
  ],
  X0 = async ({ refreshToken: e, getNodeUrl: t }) => {
    const r = await k0.node().refreshToken(e, t());
    return r.error
      ? { error: r.error }
      : (Q0(r.data.access_token), Y0(r.data.refresh_token), { data: r.data });
  },
  ih = async (e, t) => {
    var s, a, u, f;
    const r = {
        message: 'Your session is no longer valid. Please log in again.',
        code: 401,
      },
      n = { message: '', code: 403 },
      i = {
        message: 'Server Error: Something went wrong. Please try again.',
        code: 500,
      };
    if (e.code === 401) {
      if (
        ((u =
          (a = (s = e == null ? void 0 : e.error) == null ? void 0 : s.cause) ==
          null
            ? void 0
            : a.info) == null
          ? void 0
          : u.message) === 'Token expired.'
      )
        try {
          const d = of(),
            h = await X0({ refreshToken: d, getNodeUrl: t });
          return h != null && h.error ? (lu(), r) : n;
        } catch {
          return lu(), r;
        }
      return lu(), r;
    }
    const o = (f = e == null ? void 0 : e.error) == null ? void 0 : f.name;
    return rk.includes(o)
      ? { message: `${o}: ${e.error.cause.info.message}`, code: e.code }
      : i;
  },
  nk = ({ children: e, getNodeUrl: t }) => {
    const r = B.useCallback((o) => {
        try {
          return tk(o);
        } catch (s) {
          return console.error(s), null;
        }
      }, []),
      n = B.useCallback(
        (o) => {
          const s = r(o);
          if (!s || !s.exp) return !0;
          const a = Math.floor(Date.now() / 1e3);
          return s.exp - a <= 5 * 60;
        },
        [r],
      ),
      i = B.useCallback(async () => {
        const o = xl(),
          s = of();
        if (!(!o || !s) && n(o))
          try {
            await X0({ refreshToken: s, getNodeUrl: t });
          } catch (a) {
            console.error(a);
          }
      }, [t, n]);
    return (
      B.useEffect(() => {
        i();
        const o = setInterval(
          () => {
            i();
          },
          20 * 60 * 1e3,
        );
        return () => clearInterval(o);
      }, [i]),
      ie.createElement(ie.Fragment, null, e)
    );
  },
  ik = { title: 'Calimero Network' },
  ok = { footer: ik },
  sk = G.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 1rem;

  .footer-text {
    margin: 0px 0px 0.35em;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0px;
    text-transform: none;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
  }
`;
function ak() {
  const e = ok.footer;
  return A.jsx(sk, {
    children: A.jsx('a', {
      href: 'https://www.calimero.network',
      className: 'footer-text',
      target: '_blank',
      rel: 'noreferrer',
      children: e.title,
    }),
  });
}
const lk = '/assets/calimero-logo-Bn6or8b2.svg',
  uk = G.div`
  background-color: #111111;
  height: 100vh;
  width: 100%;

  .login-navbar {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .logo-container {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .calimero-logo {
    width: 160px;
    height: 43.3px;
  }

  .dashboard-text {
    position: absolute;
    left: 3.2rem;
    top: 2rem;
    width: max-content;
    font-size: 12px;
    color: #fff;
  }

  .content-card {
    display: flex;
    justify-content: center;
    height: calc(100vh - 75.3px);
    align-items: center;
    color: #fff;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
function ey({ children: e }) {
  return A.jsxs(uk, {
    children: [
      A.jsx('div', {
        className: 'login-navbar',
        children: A.jsxs('div', {
          className: 'logo-container',
          children: [
            A.jsx('img', {
              src: lk,
              alt: 'Calimero Admin Dashboard Logo',
              className: 'calimero-logo',
            }),
            A.jsx('h4', {
              className: 'dashboard-text',
              children: 'Calimero Network',
            }),
          ],
        }),
      }),
      A.jsxs('div', {
        className: 'content-card',
        children: [
          A.jsx('div', { className: 'content-wrapper', children: e }),
          A.jsx(ak, {}),
        ],
      }),
    ],
  });
}
const sf = 'app-url',
  ty = 'context-id',
  af = 'application-id',
  ry = () => {
    try {
      if (typeof window < 'u' && window.localStorage) {
        let e = localStorage.getItem(sf);
        if (e) {
          let t = JSON.parse(e);
          if (t && t.length > 0) return t;
        }
      }
      return null;
    } catch {
      return null;
    }
  },
  ny = (e) => {
    localStorage.setItem(sf, JSON.stringify(e));
  },
  ck = () => {
    if (typeof window < 'u' && window.localStorage) {
      const e = localStorage.getItem(ty);
      if (e) return JSON.parse(e);
    }
    return null;
  },
  dk = (e) => {
    localStorage.setItem(ty, JSON.stringify(e));
  },
  fk = () => {
    localStorage.removeItem(sf);
  },
  pk = () => {
    localStorage.removeItem(af);
  },
  hk = () => {
    if (typeof window < 'u' && window.localStorage) {
      const e = localStorage.getItem(af);
      if (e) return JSON.parse(e);
    }
    return null;
  },
  iy = (e) => {
    localStorage.setItem(af, JSON.stringify(e));
  },
  oy = () => {
    const e = xl();
    if (!e) return null;
    const t = e.split('.');
    if (t.length !== 3) throw new Error('Invalid JWT token');
    return JSON.parse(atob(t[1]));
  },
  mk = () => xl();
function Jo() {
  let e = ry();
  if (!e) {
    let t = 'http://localhost:2428';
    return ny(t), t;
  }
  return e ?? '';
}
function kr() {
  let e = ck();
  if (!e) {
    let t = oy(),
      r = (t == null ? void 0 : t.context_id) ?? '';
    return dk(r), r;
  }
  return e ?? '';
}
function lf() {
  let e = hk();
  if (!e) {
    let t = 'bafa0e4f0794a67bfb8a4c6eca5da2760555a8e0ed889a39b522131b57b7010e';
    return iy(t), t;
  }
  return e ?? '';
}
function gk() {
  const e = ss();
  return A.jsx(ey, {
    children: A.jsx(GE, {
      successRoute: () => e('/auth'),
      getNodeUrl: Jo,
      setNodeUrl: ny,
      setApplicationId: iy,
      getApplicationId: lf,
    }),
  });
}
const yk = G.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #111111;
  position: relative;

  .back-button {
    height: fit-content;
    color: white;
    padding: 1rem;
    cursor: pointer;
  }

  .flex-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .title {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }

  .card {
    background-color: #1c1c1c;
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;
function vk() {
  const e = ss();
  function t() {
    fk(), pk(), e('/');
  }
  return A.jsx(ey, {
    children: A.jsx(yk, {
      children: A.jsxs('div', {
        className: 'flex-wrapper',
        children: [
          A.jsxs('div', {
            className: 'card',
            children: [
              A.jsx('div', {
                className: 'title-wrapper',
                children: A.jsx('div', {
                  className: 'title',
                  children: 'App template',
                }),
              }),
              A.jsx(YE, {
                getNodeUrl: Jo,
                getApplicationId: lf,
                sucessRedirect: () => e('/home'),
              }),
            ],
          }),
          A.jsx('div', {
            className: 'back-button',
            onClick: t,
            children: 'Return to setup',
          }),
        ],
      }),
    }),
  });
}
const wk = G.div`
  display: flex;
  min-height: calc(100vh - 4rem);
  width: 100vw;
  background-color: #111111;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`,
  xk = G.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at top center,
    rgba(37, 99, 235, 0.1) 0%,
    rgba(0, 0, 0, 0) 50%
  );
`,
  _k = G.div`
  text-align: center;
  position: relative;
  z-index: 10;
  margin-bottom: 2rem;
`,
  Ek = G.h1`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;
  color: white;

  @media (min-width: 640px) {
    font-size: 5rem;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
  }

  @media (min-width: 1024px) {
    font-size: 7rem;
  }
`,
  kk = G.span`
  background: linear-gradient(to right, #38bdf8, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,
  Sk = G.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
`,
  Ck = G.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  position: relative;
  z-index: 10;
`,
  oh = G(Wd)`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  ${(e) =>
    e.$primary
      ? `
    background: linear-gradient(to right, #38bdf8, #8b5cf6);
    color: white;
    &:hover {
      opacity: 0.9;
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
    }
  `
      : `
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
  `}
`;
function Rk() {
  const e = ss(),
    t = QE(),
    r = lf(),
    n = xl(),
    i = of();
  return (
    B.useEffect(() => {
      (!t || !r || !n || !i) && e('/auth');
    }, [n, r, e, i, t]),
    A.jsxs(wk, {
      children: [
        A.jsx(xk, {}),
        A.jsxs(_k, {
          children: [
            A.jsxs(Ek, {
              children: ['Welcome to ', A.jsx(kk, { children: 'Privack' })],
            }),
            A.jsx(Sk, {
              children:
                'Secure and private receipt acknowledgment system for the modern web',
            }),
          ],
        }),
        A.jsxs(Ck, {
          children: [
            A.jsx(oh, {
              to: '/dashboard',
              $primary: !0,
              children: 'View Dashboard',
            }),
            A.jsx(oh, { to: '/create', children: 'Create Receipt' }),
          ],
        }),
      ],
    })
  );
}
var cs = (e) => e.type === 'checkbox',
  In = (e) => e instanceof Date,
  ht = (e) => e == null;
const sy = (e) => typeof e == 'object';
var We = (e) => !ht(e) && !Array.isArray(e) && sy(e) && !In(e),
  Tk = (e) =>
    We(e) && e.target ? (cs(e.target) ? e.target.checked : e.target.value) : e,
  Ak = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Ik = (e, t) => e.has(Ak(t)),
  Nk = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return We(t) && t.hasOwnProperty('isPrototypeOf');
  },
  uf =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function zt(e) {
  let t;
  const r = Array.isArray(e),
    n = typeof FileList < 'u' ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(uf && (e instanceof Blob || n)) && (r || We(e)))
    if (((t = r ? [] : {}), !r && !Nk(e))) t = e;
    else for (const i in e) e.hasOwnProperty(i) && (t[i] = zt(e[i]));
  else return e;
  return t;
}
var _l = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Ke = (e) => e === void 0,
  q = (e, t, r) => {
    if (!t || !We(e)) return r;
    const n = _l(t.split(/[,[\].]+?/)).reduce((i, o) => (ht(i) ? i : i[o]), e);
    return Ke(n) || n === e ? (Ke(e[t]) ? r : e[t]) : n;
  },
  pr = (e) => typeof e == 'boolean',
  cf = (e) => /^\w*$/.test(e),
  ay = (e) => _l(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Ee = (e, t, r) => {
    let n = -1;
    const i = cf(t) ? [t] : ay(t),
      o = i.length,
      s = o - 1;
    for (; ++n < o; ) {
      const a = i[n];
      let u = r;
      if (n !== s) {
        const f = e[a];
        u = We(f) || Array.isArray(f) ? f : isNaN(+i[n + 1]) ? {} : [];
      }
      if (a === '__proto__' || a === 'constructor' || a === 'prototype') return;
      (e[a] = u), (e = e[a]);
    }
    return e;
  };
const sh = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  rr = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  Sr = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  };
ie.createContext(null);
var Pk = (e, t, r, n = !0) => {
    const i = { defaultValues: t._defaultValues };
    for (const o in e)
      Object.defineProperty(i, o, {
        get: () => {
          const s = o;
          return (
            t._proxyFormState[s] !== rr.all &&
              (t._proxyFormState[s] = !n || rr.all),
            e[s]
          );
        },
      });
    return i;
  },
  _t = (e) => We(e) && !Object.keys(e).length,
  Ok = (e, t, r, n) => {
    r(e);
    const { name: i, ...o } = e;
    return (
      _t(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((s) => t[s] === rr.all)
    );
  },
  Qs = (e) => (Array.isArray(e) ? e : [e]);
function Fk(e) {
  const t = ie.useRef(e);
  (t.current = e),
    ie.useEffect(() => {
      const r =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        r && r.unsubscribe();
      };
    }, [e.disabled]);
}
var vr = (e) => typeof e == 'string',
  bk = (e, t, r, n, i) =>
    vr(e)
      ? (n && t.watch.add(e), q(r, e, i))
      : Array.isArray(e)
        ? e.map((o) => (n && t.watch.add(o), q(r, o)))
        : (n && (t.watchAll = !0), r),
  ly = (e, t, r, n, i) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: i || !0 },
        }
      : {},
  ah = (e) => ({
    isOnSubmit: !e || e === rr.onSubmit,
    isOnBlur: e === rr.onBlur,
    isOnChange: e === rr.onChange,
    isOnAll: e === rr.all,
    isOnTouch: e === rr.onTouched,
  }),
  lh = (e, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length)),
      ));
const Co = (e, t, r, n) => {
  for (const i of r || Object.keys(e)) {
    const o = q(e, i);
    if (o) {
      const { _f: s, ...a } = o;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], i) && !n) return !0;
        if (s.ref && t(s.ref, s.name) && !n) return !0;
        if (Co(a, t)) break;
      } else if (We(a) && Co(a, t)) break;
    }
  }
};
var jk = (e, t, r) => {
    const n = Qs(q(e, r));
    return Ee(n, 'root', t[r]), Ee(e, r, n), e;
  },
  df = (e) => e.type === 'file',
  yr = (e) => typeof e == 'function',
  Ia = (e) => {
    if (!uf) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ys = (e) => vr(e),
  ff = (e) => e.type === 'radio',
  Na = (e) => e instanceof RegExp;
const uh = { value: !1, isValid: !1 },
  ch = { value: !0, isValid: !0 };
var uy = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((r) => r && r.checked && !r.disabled)
        .map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Ke(e[0].attributes.value)
        ? Ke(e[0].value) || e[0].value === ''
          ? ch
          : { value: e[0].value, isValid: !0 }
        : ch
      : uh;
  }
  return uh;
};
const dh = { isValid: !1, value: null };
var cy = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        dh,
      )
    : dh;
function fh(e, t, r = 'validate') {
  if (Ys(e) || (Array.isArray(e) && e.every(Ys)) || (pr(e) && !e))
    return { type: r, message: Ys(e) ? e : '', ref: t };
}
var Yn = (e) => (We(e) && !Na(e) ? e : { value: e, message: '' }),
  ph = async (e, t, r, n, i, o) => {
    const {
        ref: s,
        refs: a,
        required: u,
        maxLength: f,
        minLength: d,
        min: h,
        max: w,
        pattern: S,
        validate: x,
        name: E,
        valueAsNumber: R,
        mount: y,
      } = e._f,
      m = q(r, E);
    if (!y || t.has(E)) return {};
    const v = a ? a[0] : s,
      C = (te) => {
        i &&
          v.reportValidity &&
          (v.setCustomValidity(pr(te) ? '' : te || ''), v.reportValidity());
      },
      P = {},
      j = ff(s),
      b = cs(s),
      U = j || b,
      ae =
        ((R || df(s)) && Ke(s.value) && Ke(m)) ||
        (Ia(s) && s.value === '') ||
        m === '' ||
        (Array.isArray(m) && !m.length),
      Y = ly.bind(null, E, n, P),
      Oe = (te, se, xe, Ce = Sr.maxLength, M = Sr.minLength) => {
        const Fe = te ? se : xe;
        P[E] = {
          type: te ? Ce : M,
          message: Fe,
          ref: s,
          ...Y(te ? Ce : M, Fe),
        };
      };
    if (
      o
        ? !Array.isArray(m) || !m.length
        : u &&
          ((!U && (ae || ht(m))) ||
            (pr(m) && !m) ||
            (b && !uy(a).isValid) ||
            (j && !cy(a).isValid))
    ) {
      const { value: te, message: se } = Ys(u)
        ? { value: !!u, message: u }
        : Yn(u);
      if (
        te &&
        ((P[E] = {
          type: Sr.required,
          message: se,
          ref: v,
          ...Y(Sr.required, se),
        }),
        !n)
      )
        return C(se), P;
    }
    if (!ae && (!ht(h) || !ht(w))) {
      let te, se;
      const xe = Yn(w),
        Ce = Yn(h);
      if (!ht(m) && !isNaN(m)) {
        const M = s.valueAsNumber || (m && +m);
        ht(xe.value) || (te = M > xe.value),
          ht(Ce.value) || (se = M < Ce.value);
      } else {
        const M = s.valueAsDate || new Date(m),
          Fe = (ee) => new Date(new Date().toDateString() + ' ' + ee),
          V = s.type == 'time',
          Q = s.type == 'week';
        vr(xe.value) &&
          m &&
          (te = V
            ? Fe(m) > Fe(xe.value)
            : Q
              ? m > xe.value
              : M > new Date(xe.value)),
          vr(Ce.value) &&
            m &&
            (se = V
              ? Fe(m) < Fe(Ce.value)
              : Q
                ? m < Ce.value
                : M < new Date(Ce.value));
      }
      if ((te || se) && (Oe(!!te, xe.message, Ce.message, Sr.max, Sr.min), !n))
        return C(P[E].message), P;
    }
    if ((f || d) && !ae && (vr(m) || (o && Array.isArray(m)))) {
      const te = Yn(f),
        se = Yn(d),
        xe = !ht(te.value) && m.length > +te.value,
        Ce = !ht(se.value) && m.length < +se.value;
      if ((xe || Ce) && (Oe(xe, te.message, se.message), !n))
        return C(P[E].message), P;
    }
    if (S && !ae && vr(m)) {
      const { value: te, message: se } = Yn(S);
      if (
        Na(te) &&
        !m.match(te) &&
        ((P[E] = {
          type: Sr.pattern,
          message: se,
          ref: s,
          ...Y(Sr.pattern, se),
        }),
        !n)
      )
        return C(se), P;
    }
    if (x) {
      if (yr(x)) {
        const te = await x(m, r),
          se = fh(te, v);
        if (se && ((P[E] = { ...se, ...Y(Sr.validate, se.message) }), !n))
          return C(se.message), P;
      } else if (We(x)) {
        let te = {};
        for (const se in x) {
          if (!_t(te) && !n) break;
          const xe = fh(await x[se](m, r), v, se);
          xe &&
            ((te = { ...xe, ...Y(se, xe.message) }),
            C(xe.message),
            n && (P[E] = te));
        }
        if (!_t(te) && ((P[E] = { ref: v, ...te }), !n)) return P;
      }
    }
    return C(!0), P;
  };
function Lk(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = Ke(e) ? n++ : e[t[n++]];
  return e;
}
function Dk(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ke(e[t])) return !1;
  return !0;
}
function Ye(e, t) {
  const r = Array.isArray(t) ? t : cf(t) ? [t] : ay(t),
    n = r.length === 1 ? e : Lk(e, r),
    i = r.length - 1,
    o = r[i];
  return (
    n && delete n[o],
    i !== 0 &&
      ((We(n) && _t(n)) || (Array.isArray(n) && Dk(n))) &&
      Ye(e, r.slice(0, -1)),
    e
  );
}
var uu = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const o of e) o.next && o.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((o) => o !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Bc = (e) => ht(e) || !sy(e);
function en(e, t) {
  if (Bc(e) || Bc(t)) return e === t;
  if (In(e) && In(t)) return e.getTime() === t.getTime();
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (const i of r) {
    const o = e[i];
    if (!n.includes(i)) return !1;
    if (i !== 'ref') {
      const s = t[i];
      if (
        (In(o) && In(s)) ||
        (We(o) && We(s)) ||
        (Array.isArray(o) && Array.isArray(s))
          ? !en(o, s)
          : o !== s
      )
        return !1;
    }
  }
  return !0;
}
var dy = (e) => e.type === 'select-multiple',
  Bk = (e) => ff(e) || cs(e),
  cu = (e) => Ia(e) && e.isConnected,
  fy = (e) => {
    for (const t in e) if (yr(e[t])) return !0;
    return !1;
  };
function Pa(e, t = {}) {
  const r = Array.isArray(e);
  if (We(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (We(e[n]) && !fy(e[n]))
        ? ((t[n] = Array.isArray(e[n]) ? [] : {}), Pa(e[n], t[n]))
        : ht(e[n]) || (t[n] = !0);
  return t;
}
function py(e, t, r) {
  const n = Array.isArray(e);
  if (We(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || (We(e[i]) && !fy(e[i]))
        ? Ke(t) || Bc(r[i])
          ? (r[i] = Array.isArray(e[i]) ? Pa(e[i], []) : { ...Pa(e[i]) })
          : py(e[i], ht(t) ? {} : t[i], r[i])
        : (r[i] = !en(e[i], t[i]));
  return r;
}
var no = (e, t) => py(e, t, Pa(t)),
  hy = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    Ke(e)
      ? e
      : t
        ? e === ''
          ? NaN
          : e && +e
        : r && vr(e)
          ? new Date(e)
          : n
            ? n(e)
            : e;
function du(e) {
  const t = e.ref;
  return df(t)
    ? t.files
    : ff(t)
      ? cy(e.refs).value
      : dy(t)
        ? [...t.selectedOptions].map(({ value: r }) => r)
        : cs(t)
          ? uy(e.refs).value
          : hy(Ke(t.value) ? e.ref.value : t.value, e);
}
var $k = (e, t, r, n) => {
    const i = {};
    for (const o of e) {
      const s = q(t, o);
      s && Ee(i, o, s._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: n,
    };
  },
  io = (e) =>
    Ke(e)
      ? e
      : Na(e)
        ? e.source
        : We(e)
          ? Na(e.value)
            ? e.value.source
            : e.value
          : e;
const hh = 'AsyncFunction';
var Uk = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (yr(e.validate) && e.validate.constructor.name === hh) ||
      (We(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === hh))
    ),
  zk = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function mh(e, t, r) {
  const n = q(e, r);
  if (n || cf(r)) return { error: n, name: r };
  const i = r.split('.');
  for (; i.length; ) {
    const o = i.join('.'),
      s = q(t, o),
      a = q(e, o);
    if (s && !Array.isArray(s) && r !== o) return { name: r };
    if (a && a.type) return { name: o, error: a };
    i.pop();
  }
  return { name: r };
}
var Mk = (e, t, r, n, i) =>
    i.isOnAll
      ? !1
      : !r && i.isOnTouch
        ? !(t || e)
        : (r ? n.isOnBlur : i.isOnBlur)
          ? !e
          : (r ? n.isOnChange : i.isOnChange)
            ? e
            : !0,
  Vk = (e, t) => !_l(q(e, t)).length && Ye(e, t);
const Wk = {
  mode: rr.onSubmit,
  reValidateMode: rr.onChange,
  shouldFocusError: !0,
};
function Hk(e = {}) {
  let t = { ...Wk, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: yr(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    n = {},
    i =
      We(t.defaultValues) || We(t.values)
        ? zt(t.defaultValues || t.values) || {}
        : {},
    o = t.shouldUnregister ? {} : zt(i),
    s = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    u,
    f = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    h = { values: uu(), array: uu(), state: uu() },
    w = ah(t.mode),
    S = ah(t.reValidateMode),
    x = t.criteriaMode === rr.all,
    E = (_) => (T) => {
      clearTimeout(f), (f = setTimeout(_, T));
    },
    R = async (_) => {
      if (!t.disabled && (d.isValid || _)) {
        const T = t.resolver ? _t((await U()).errors) : await Y(n, !0);
        T !== r.isValid && h.state.next({ isValid: T });
      }
    },
    y = (_, T) => {
      !t.disabled &&
        (d.isValidating || d.validatingFields) &&
        ((_ || Array.from(a.mount)).forEach((O) => {
          O && (T ? Ee(r.validatingFields, O, T) : Ye(r.validatingFields, O));
        }),
        h.state.next({
          validatingFields: r.validatingFields,
          isValidating: !_t(r.validatingFields),
        }));
    },
    m = (_, T = [], O, H, z = !0, $ = !0) => {
      if (H && O && !t.disabled) {
        if (((s.action = !0), $ && Array.isArray(q(n, _)))) {
          const X = O(q(n, _), H.argA, H.argB);
          z && Ee(n, _, X);
        }
        if ($ && Array.isArray(q(r.errors, _))) {
          const X = O(q(r.errors, _), H.argA, H.argB);
          z && Ee(r.errors, _, X), Vk(r.errors, _);
        }
        if (d.touchedFields && $ && Array.isArray(q(r.touchedFields, _))) {
          const X = O(q(r.touchedFields, _), H.argA, H.argB);
          z && Ee(r.touchedFields, _, X);
        }
        d.dirtyFields && (r.dirtyFields = no(i, o)),
          h.state.next({
            name: _,
            isDirty: te(_, T),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else Ee(o, _, T);
    },
    v = (_, T) => {
      Ee(r.errors, _, T), h.state.next({ errors: r.errors });
    },
    C = (_) => {
      (r.errors = _), h.state.next({ errors: r.errors, isValid: !1 });
    },
    P = (_, T, O, H) => {
      const z = q(n, _);
      if (z) {
        const $ = q(o, _, Ke(O) ? q(i, _) : O);
        Ke($) || (H && H.defaultChecked) || T
          ? Ee(o, _, T ? $ : du(z._f))
          : Ce(_, $),
          s.mount && R();
      }
    },
    j = (_, T, O, H, z) => {
      let $ = !1,
        X = !1;
      const re = { name: _ };
      if (!t.disabled) {
        const De = !!(q(n, _) && q(n, _)._f && q(n, _)._f.disabled);
        if (!O || H) {
          d.isDirty &&
            ((X = r.isDirty),
            (r.isDirty = re.isDirty = te()),
            ($ = X !== re.isDirty));
          const qe = De || en(q(i, _), T);
          (X = !!(!De && q(r.dirtyFields, _))),
            qe || De ? Ye(r.dirtyFields, _) : Ee(r.dirtyFields, _, !0),
            (re.dirtyFields = r.dirtyFields),
            ($ = $ || (d.dirtyFields && X !== !qe));
        }
        if (O) {
          const qe = q(r.touchedFields, _);
          qe ||
            (Ee(r.touchedFields, _, O),
            (re.touchedFields = r.touchedFields),
            ($ = $ || (d.touchedFields && qe !== O)));
        }
        $ && z && h.state.next(re);
      }
      return $ ? re : {};
    },
    b = (_, T, O, H) => {
      const z = q(r.errors, _),
        $ = d.isValid && pr(T) && r.isValid !== T;
      if (
        (t.delayError && O
          ? ((u = E(() => v(_, O))), u(t.delayError))
          : (clearTimeout(f),
            (u = null),
            O ? Ee(r.errors, _, O) : Ye(r.errors, _)),
        (O ? !en(z, O) : z) || !_t(H) || $)
      ) {
        const X = {
          ...H,
          ...($ && pr(T) ? { isValid: T } : {}),
          errors: r.errors,
          name: _,
        };
        (r = { ...r, ...X }), h.state.next(X);
      }
    },
    U = async (_) => {
      y(_, !0);
      const T = await t.resolver(
        o,
        t.context,
        $k(_ || a.mount, n, t.criteriaMode, t.shouldUseNativeValidation),
      );
      return y(_), T;
    },
    ae = async (_) => {
      const { errors: T } = await U(_);
      if (_)
        for (const O of _) {
          const H = q(T, O);
          H ? Ee(r.errors, O, H) : Ye(r.errors, O);
        }
      else r.errors = T;
      return T;
    },
    Y = async (_, T, O = { valid: !0 }) => {
      for (const H in _) {
        const z = _[H];
        if (z) {
          const { _f: $, ...X } = z;
          if ($) {
            const re = a.array.has($.name),
              De = z._f && Uk(z._f);
            De && d.validatingFields && y([H], !0);
            const qe = await ph(
              z,
              a.disabled,
              o,
              x,
              t.shouldUseNativeValidation && !T,
              re,
            );
            if (
              (De && d.validatingFields && y([H]),
              qe[$.name] && ((O.valid = !1), T))
            )
              break;
            !T &&
              (q(qe, $.name)
                ? re
                  ? jk(r.errors, qe, $.name)
                  : Ee(r.errors, $.name, qe[$.name])
                : Ye(r.errors, $.name));
          }
          !_t(X) && (await Y(X, T, O));
        }
      }
      return O.valid;
    },
    Oe = () => {
      for (const _ of a.unMount) {
        const T = q(n, _);
        T &&
          (T._f.refs ? T._f.refs.every((O) => !cu(O)) : !cu(T._f.ref)) &&
          Ze(_);
      }
      a.unMount = new Set();
    },
    te = (_, T) => !t.disabled && (_ && T && Ee(o, _, T), !en(ye(), i)),
    se = (_, T, O) =>
      bk(_, a, { ...(s.mount ? o : Ke(T) ? i : vr(_) ? { [_]: T } : T) }, O, T),
    xe = (_) =>
      _l(q(s.mount ? o : i, _, t.shouldUnregister ? q(i, _, []) : [])),
    Ce = (_, T, O = {}) => {
      const H = q(n, _);
      let z = T;
      if (H) {
        const $ = H._f;
        $ &&
          (!$.disabled && Ee(o, _, hy(T, $)),
          (z = Ia($.ref) && ht(T) ? '' : T),
          dy($.ref)
            ? [...$.ref.options].forEach(
                (X) => (X.selected = z.includes(X.value)),
              )
            : $.refs
              ? cs($.ref)
                ? $.refs.length > 1
                  ? $.refs.forEach(
                      (X) =>
                        (!X.defaultChecked || !X.disabled) &&
                        (X.checked = Array.isArray(z)
                          ? !!z.find((re) => re === X.value)
                          : z === X.value),
                    )
                  : $.refs[0] && ($.refs[0].checked = !!z)
                : $.refs.forEach((X) => (X.checked = X.value === z))
              : df($.ref)
                ? ($.ref.value = '')
                : (($.ref.value = z),
                  $.ref.type || h.values.next({ name: _, values: { ...o } })));
      }
      (O.shouldDirty || O.shouldTouch) &&
        j(_, z, O.shouldTouch, O.shouldDirty, !0),
        O.shouldValidate && ee(_);
    },
    M = (_, T, O) => {
      for (const H in T) {
        const z = T[H],
          $ = `${_}.${H}`,
          X = q(n, $);
        (a.array.has(_) || We(z) || (X && !X._f)) && !In(z)
          ? M($, z, O)
          : Ce($, z, O);
      }
    },
    Fe = (_, T, O = {}) => {
      const H = q(n, _),
        z = a.array.has(_),
        $ = zt(T);
      Ee(o, _, $),
        z
          ? (h.array.next({ name: _, values: { ...o } }),
            (d.isDirty || d.dirtyFields) &&
              O.shouldDirty &&
              h.state.next({
                name: _,
                dirtyFields: no(i, o),
                isDirty: te(_, $),
              }))
          : H && !H._f && !ht($)
            ? M(_, $, O)
            : Ce(_, $, O),
        lh(_, a) && h.state.next({ ...r }),
        h.values.next({ name: s.mount ? _ : void 0, values: { ...o } });
    },
    V = async (_) => {
      s.mount = !0;
      const T = _.target;
      let O = T.name,
        H = !0;
      const z = q(n, O),
        $ = () => (T.type ? du(z._f) : Tk(_)),
        X = (re) => {
          H =
            Number.isNaN(re) ||
            (In(re) && isNaN(re.getTime())) ||
            en(re, q(o, O, re));
        };
      if (z) {
        let re, De;
        const qe = $(),
          it = _.type === sh.BLUR || _.type === sh.FOCUS_OUT,
          Cl =
            (!zk(z._f) && !t.resolver && !q(r.errors, O) && !z._f.deps) ||
            Mk(it, q(r.touchedFields, O), r.isSubmitted, S, w),
          p = lh(O, a, it);
        Ee(o, O, qe),
          it
            ? (z._f.onBlur && z._f.onBlur(_), u && u(0))
            : z._f.onChange && z._f.onChange(_);
        const l = j(O, qe, it, !1),
          c = !_t(l) || p;
        if (
          (!it && h.values.next({ name: O, type: _.type, values: { ...o } }),
          Cl)
        )
          return (
            d.isValid && (t.mode === 'onBlur' && it ? R() : it || R()),
            c && h.state.next({ name: O, ...(p ? {} : l) })
          );
        if ((!it && p && h.state.next({ ...r }), t.resolver)) {
          const { errors: g } = await U([O]);
          if ((X(qe), H)) {
            const k = mh(r.errors, n, O),
              I = mh(g, n, k.name || O);
            (re = I.error), (O = I.name), (De = _t(g));
          }
        } else
          y([O], !0),
            (re = (await ph(z, a.disabled, o, x, t.shouldUseNativeValidation))[
              O
            ]),
            y([O]),
            X(qe),
            H && (re ? (De = !1) : d.isValid && (De = await Y(n, !0)));
        H && (z._f.deps && ee(z._f.deps), b(O, De, re, l));
      }
    },
    Q = (_, T) => {
      if (q(r.errors, T) && _.focus) return _.focus(), 1;
    },
    ee = async (_, T = {}) => {
      let O, H;
      const z = Qs(_);
      if (t.resolver) {
        const $ = await ae(Ke(_) ? _ : z);
        (O = _t($)), (H = _ ? !z.some((X) => q($, X)) : O);
      } else
        _
          ? ((H = (
              await Promise.all(
                z.map(async ($) => {
                  const X = q(n, $);
                  return await Y(X && X._f ? { [$]: X } : X);
                }),
              )
            ).every(Boolean)),
            !(!H && !r.isValid) && R())
          : (H = O = await Y(n));
      return (
        h.state.next({
          ...(!vr(_) || (d.isValid && O !== r.isValid) ? {} : { name: _ }),
          ...(t.resolver || !_ ? { isValid: O } : {}),
          errors: r.errors,
        }),
        T.shouldFocus && !H && Co(n, Q, _ ? z : a.mount),
        H
      );
    },
    ye = (_) => {
      const T = { ...(s.mount ? o : i) };
      return Ke(_) ? T : vr(_) ? q(T, _) : _.map((O) => q(T, O));
    },
    ve = (_, T) => ({
      invalid: !!q((T || r).errors, _),
      isDirty: !!q((T || r).dirtyFields, _),
      error: q((T || r).errors, _),
      isValidating: !!q(r.validatingFields, _),
      isTouched: !!q((T || r).touchedFields, _),
    }),
    Qt = (_) => {
      _ && Qs(_).forEach((T) => Ye(r.errors, T)),
        h.state.next({ errors: _ ? r.errors : {} });
    },
    he = (_, T, O) => {
      const H = (q(n, _, { _f: {} })._f || {}).ref,
        z = q(r.errors, _) || {},
        { ref: $, message: X, type: re, ...De } = z;
      Ee(r.errors, _, { ...De, ...T, ref: H }),
        h.state.next({ name: _, errors: r.errors, isValid: !1 }),
        O && O.shouldFocus && H && H.focus && H.focus();
    },
    Re = (_, T) =>
      yr(_)
        ? h.values.subscribe({ next: (O) => _(se(void 0, T), O) })
        : se(_, T, !0),
    Ze = (_, T = {}) => {
      for (const O of _ ? Qs(_) : a.mount)
        a.mount.delete(O),
          a.array.delete(O),
          T.keepValue || (Ye(n, O), Ye(o, O)),
          !T.keepError && Ye(r.errors, O),
          !T.keepDirty && Ye(r.dirtyFields, O),
          !T.keepTouched && Ye(r.touchedFields, O),
          !T.keepIsValidating && Ye(r.validatingFields, O),
          !t.shouldUnregister && !T.keepDefaultValue && Ye(i, O);
      h.values.next({ values: { ...o } }),
        h.state.next({ ...r, ...(T.keepDirty ? { isDirty: te() } : {}) }),
        !T.keepIsValid && R();
    },
    ft = ({ disabled: _, name: T, field: O, fields: H }) => {
      ((pr(_) && s.mount) || _ || a.disabled.has(T)) &&
        (_ ? a.disabled.add(T) : a.disabled.delete(T),
        j(T, du(O ? O._f : q(H, T)._f), !1, !1, !0));
    },
    Ut = (_, T = {}) => {
      let O = q(n, _);
      const H = pr(T.disabled) || pr(t.disabled);
      return (
        Ee(n, _, {
          ...(O || {}),
          _f: {
            ...(O && O._f ? O._f : { ref: { name: _ } }),
            name: _,
            mount: !0,
            ...T,
          },
        }),
        a.mount.add(_),
        O
          ? ft({
              field: O,
              disabled: pr(T.disabled) ? T.disabled : t.disabled,
              name: _,
            })
          : P(_, !0, T.value),
        {
          ...(H ? { disabled: T.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!T.required,
                min: io(T.min),
                max: io(T.max),
                minLength: io(T.minLength),
                maxLength: io(T.maxLength),
                pattern: io(T.pattern),
              }
            : {}),
          name: _,
          onChange: V,
          onBlur: V,
          ref: (z) => {
            if (z) {
              Ut(_, T), (O = q(n, _));
              const $ =
                  (Ke(z.value) &&
                    z.querySelectorAll &&
                    z.querySelectorAll('input,select,textarea')[0]) ||
                  z,
                X = Bk($),
                re = O._f.refs || [];
              if (X ? re.find((De) => De === $) : $ === O._f.ref) return;
              Ee(n, _, {
                _f: {
                  ...O._f,
                  ...(X
                    ? {
                        refs: [
                          ...re.filter(cu),
                          $,
                          ...(Array.isArray(q(i, _)) ? [{}] : []),
                        ],
                        ref: { type: $.type, name: _ },
                      }
                    : { ref: $ }),
                },
              }),
                P(_, !1, void 0, $);
            } else
              (O = q(n, _, {})),
                O._f && (O._f.mount = !1),
                (t.shouldUnregister || T.shouldUnregister) &&
                  !(Ik(a.array, _) && s.action) &&
                  a.unMount.add(_);
          },
        }
      );
    },
    Pt = () => t.shouldFocusError && Co(n, Q, a.mount),
    Hr = (_) => {
      pr(_) &&
        (h.state.next({ disabled: _ }),
        Co(
          n,
          (T, O) => {
            const H = q(n, O);
            H &&
              ((T.disabled = H._f.disabled || _),
              Array.isArray(H._f.refs) &&
                H._f.refs.forEach((z) => {
                  z.disabled = H._f.disabled || _;
                }));
          },
          0,
          !1,
        ));
    },
    wt = (_, T) => async (O) => {
      let H;
      O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
      let z = zt(o);
      if (a.disabled.size) for (const $ of a.disabled) Ee(z, $, void 0);
      if ((h.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: $, values: X } = await U();
        (r.errors = $), (z = X);
      } else await Y(n);
      if ((Ye(r.errors, 'root'), _t(r.errors))) {
        h.state.next({ errors: {} });
        try {
          await _(z, O);
        } catch ($) {
          H = $;
        }
      } else T && (await T({ ...r.errors }, O)), Pt(), setTimeout(Pt);
      if (
        (h.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: _t(r.errors) && !H,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        H)
      )
        throw H;
    },
    xt = (_, T = {}) => {
      q(n, _) &&
        (Ke(T.defaultValue)
          ? Fe(_, zt(q(i, _)))
          : (Fe(_, T.defaultValue), Ee(i, _, zt(T.defaultValue))),
        T.keepTouched || Ye(r.touchedFields, _),
        T.keepDirty ||
          (Ye(r.dirtyFields, _),
          (r.isDirty = T.defaultValue ? te(_, zt(q(i, _))) : te())),
        T.keepError || (Ye(r.errors, _), d.isValid && R()),
        h.state.next({ ...r }));
    },
    qi = (_, T = {}) => {
      const O = _ ? zt(_) : i,
        H = zt(O),
        z = _t(_),
        $ = z ? i : H;
      if ((T.keepDefaultValues || (i = O), !T.keepValues)) {
        if (T.keepDirtyValues) {
          const X = new Set([...a.mount, ...Object.keys(no(i, o))]);
          for (const re of Array.from(X))
            q(r.dirtyFields, re) ? Ee($, re, q(o, re)) : Fe(re, q($, re));
        } else {
          if (uf && Ke(_))
            for (const X of a.mount) {
              const re = q(n, X);
              if (re && re._f) {
                const De = Array.isArray(re._f.refs)
                  ? re._f.refs[0]
                  : re._f.ref;
                if (Ia(De)) {
                  const qe = De.closest('form');
                  if (qe) {
                    qe.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (o = t.shouldUnregister ? (T.keepDefaultValues ? zt(i) : {}) : zt($)),
          h.array.next({ values: { ...$ } }),
          h.values.next({ values: { ...$ } });
      }
      (a = {
        mount: T.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (s.mount = !d.isValid || !!T.keepIsValid || !!T.keepDirtyValues),
        (s.watch = !!t.shouldUnregister),
        h.state.next({
          submitCount: T.keepSubmitCount ? r.submitCount : 0,
          isDirty: z
            ? !1
            : T.keepDirty
              ? r.isDirty
              : !!(T.keepDefaultValues && !en(_, i)),
          isSubmitted: T.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: z
            ? {}
            : T.keepDirtyValues
              ? T.keepDefaultValues && o
                ? no(i, o)
                : r.dirtyFields
              : T.keepDefaultValues && _
                ? no(i, _)
                : T.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: T.keepTouched ? r.touchedFields : {},
          errors: T.keepErrors ? r.errors : {},
          isSubmitSuccessful: T.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    ds = (_, T) => qi(yr(_) ? _(o) : _, T);
  return {
    control: {
      register: Ut,
      unregister: Ze,
      getFieldState: ve,
      handleSubmit: wt,
      setError: he,
      _executeSchema: U,
      _getWatch: se,
      _getDirty: te,
      _updateValid: R,
      _removeUnmounted: Oe,
      _updateFieldArray: m,
      _updateDisabledField: ft,
      _getFieldArray: xe,
      _reset: qi,
      _resetDefaultValues: () =>
        yr(t.defaultValues) &&
        t.defaultValues().then((_) => {
          ds(_, t.resetOptions), h.state.next({ isLoading: !1 });
        }),
      _updateFormState: (_) => {
        r = { ...r, ..._ };
      },
      _disableForm: Hr,
      _subjects: h,
      _proxyFormState: d,
      _setErrors: C,
      get _fields() {
        return n;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return s;
      },
      set _state(_) {
        s = _;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return a;
      },
      set _names(_) {
        a = _;
      },
      get _formState() {
        return r;
      },
      set _formState(_) {
        r = _;
      },
      get _options() {
        return t;
      },
      set _options(_) {
        t = { ...t, ..._ };
      },
    },
    trigger: ee,
    register: Ut,
    handleSubmit: wt,
    watch: Re,
    setValue: Fe,
    getValues: ye,
    reset: ds,
    resetField: xt,
    clearErrors: Qt,
    unregister: Ze,
    setError: he,
    setFocus: (_, T = {}) => {
      const O = q(n, _),
        H = O && O._f;
      if (H) {
        const z = H.refs ? H.refs[0] : H.ref;
        z.focus && (z.focus(), T.shouldSelect && yr(z.select) && z.select());
      }
    },
    getFieldState: ve,
  };
}
function Zk(e = {}) {
  const t = ie.useRef(void 0),
    r = ie.useRef(void 0),
    [n, i] = ie.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: yr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: yr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...Hk(e), formState: n });
  const o = t.current.control;
  return (
    (o._options = e),
    Fk({
      subject: o._subjects.state,
      next: (s) => {
        Ok(s, o._proxyFormState, o._updateFormState) && i({ ...o._formState });
      },
    }),
    ie.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    ie.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const s = o._getDirty();
        s !== n.isDirty && o._subjects.state.next({ isDirty: s });
      }
    }, [o, n.isDirty]),
    ie.useEffect(() => {
      e.values && !en(e.values, r.current)
        ? (o._reset(e.values, o._options.resetOptions),
          (r.current = e.values),
          i((s) => ({ ...s })))
        : o._resetDefaultValues();
    }, [e.values, o]),
    ie.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    ie.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    ie.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (t.current.formState = Pk(n, o)),
    t.current
  );
}
const gh = (e, t, r) => {
    if (e && 'reportValidity' in e) {
      const n = q(r, t);
      e.setCustomValidity((n && n.message) || ''), e.reportValidity();
    }
  },
  my = (e, t) => {
    for (const r in t.fields) {
      const n = t.fields[r];
      n && n.ref && 'reportValidity' in n.ref
        ? gh(n.ref, r, e)
        : n.refs && n.refs.forEach((i) => gh(i, r, e));
    }
  },
  qk = (e, t) => {
    t.shouldUseNativeValidation && my(e, t);
    const r = {};
    for (const n in e) {
      const i = q(t.fields, n),
        o = Object.assign(e[n] || {}, { ref: i && i.ref });
      if (Kk(t.names || Object.keys(e), n)) {
        const s = Object.assign({}, q(r, n));
        Ee(s, 'root', o), Ee(r, n, s);
      } else Ee(r, n, o);
    }
    return r;
  },
  Kk = (e, t) => e.some((r) => r.startsWith(t + '.'));
var Gk = function (e, t) {
    for (var r = {}; e.length; ) {
      var n = e[0],
        i = n.code,
        o = n.message,
        s = n.path.join('.');
      if (!r[s])
        if ('unionErrors' in n) {
          var a = n.unionErrors[0].errors[0];
          r[s] = { message: a.message, type: a.code };
        } else r[s] = { message: o, type: i };
      if (
        ('unionErrors' in n &&
          n.unionErrors.forEach(function (d) {
            return d.errors.forEach(function (h) {
              return e.push(h);
            });
          }),
        t)
      ) {
        var u = r[s].types,
          f = u && u[n.code];
        r[s] = ly(s, t, r, i, f ? [].concat(f, n.message) : n.message);
      }
      e.shift();
    }
    return r;
  },
  Jk = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      function (n, i, o) {
        try {
          return Promise.resolve(
            (function (s, a) {
              try {
                var u = Promise.resolve(
                  e[r.mode === 'sync' ? 'parse' : 'parseAsync'](n, t),
                ).then(function (f) {
                  return (
                    o.shouldUseNativeValidation && my({}, o),
                    { errors: {}, values: r.raw ? n : f }
                  );
                });
              } catch (f) {
                return a(f);
              }
              return u && u.then ? u.then(void 0, a) : u;
            })(0, function (s) {
              if (
                (function (a) {
                  return Array.isArray(a == null ? void 0 : a.errors);
                })(s)
              )
                return {
                  values: {},
                  errors: qk(
                    Gk(
                      s.errors,
                      !o.shouldUseNativeValidation && o.criteriaMode === 'all',
                    ),
                    o,
                  ),
                };
              throw s;
            }),
          );
        } catch (s) {
          return Promise.reject(s);
        }
      }
    );
  },
  me;
(function (e) {
  e.assertEqual = (i) => i;
  function t(i) {}
  e.assertIs = t;
  function r(i) {
    throw new Error();
  }
  (e.assertNever = r),
    (e.arrayToEnum = (i) => {
      const o = {};
      for (const s of i) o[s] = s;
      return o;
    }),
    (e.getValidEnumValues = (i) => {
      const o = e.objectKeys(i).filter((a) => typeof i[i[a]] != 'number'),
        s = {};
      for (const a of o) s[a] = i[a];
      return e.objectValues(s);
    }),
    (e.objectValues = (i) =>
      e.objectKeys(i).map(function (o) {
        return i[o];
      })),
    (e.objectKeys =
      typeof Object.keys == 'function'
        ? (i) => Object.keys(i)
        : (i) => {
            const o = [];
            for (const s in i)
              Object.prototype.hasOwnProperty.call(i, s) && o.push(s);
            return o;
          }),
    (e.find = (i, o) => {
      for (const s of i) if (o(s)) return s;
    }),
    (e.isInteger =
      typeof Number.isInteger == 'function'
        ? (i) => Number.isInteger(i)
        : (i) => typeof i == 'number' && isFinite(i) && Math.floor(i) === i);
  function n(i, o = ' | ') {
    return i.map((s) => (typeof s == 'string' ? `'${s}'` : s)).join(o);
  }
  (e.joinValues = n),
    (e.jsonStringifyReplacer = (i, o) =>
      typeof o == 'bigint' ? o.toString() : o);
})(me || (me = {}));
var yh;
(function (e) {
  e.mergeShapes = (t, r) => ({ ...t, ...r });
})(yh || (yh = {}));
const Z = me.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  Qr = (e) => {
    switch (typeof e) {
      case 'undefined':
        return Z.undefined;
      case 'string':
        return Z.string;
      case 'number':
        return isNaN(e) ? Z.nan : Z.number;
      case 'boolean':
        return Z.boolean;
      case 'function':
        return Z.function;
      case 'bigint':
        return Z.bigint;
      case 'symbol':
        return Z.symbol;
      case 'object':
        return Array.isArray(e)
          ? Z.array
          : e === null
            ? Z.null
            : e.then &&
                typeof e.then == 'function' &&
                e.catch &&
                typeof e.catch == 'function'
              ? Z.promise
              : typeof Map < 'u' && e instanceof Map
                ? Z.map
                : typeof Set < 'u' && e instanceof Set
                  ? Z.set
                  : typeof Date < 'u' && e instanceof Date
                    ? Z.date
                    : Z.object;
      default:
        return Z.unknown;
    }
  },
  L = me.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]);
class qt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (n) => {
        this.issues = [...this.issues, n];
      }),
      (this.addIssues = (n = []) => {
        this.issues = [...this.issues, ...n];
      });
    const r = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, r)
      : (this.__proto__ = r),
      (this.name = 'ZodError'),
      (this.issues = t);
  }
  format(t) {
    const r =
        t ||
        function (o) {
          return o.message;
        },
      n = { _errors: [] },
      i = (o) => {
        for (const s of o.issues)
          if (s.code === 'invalid_union') s.unionErrors.map(i);
          else if (s.code === 'invalid_return_type') i(s.returnTypeError);
          else if (s.code === 'invalid_arguments') i(s.argumentsError);
          else if (s.path.length === 0) n._errors.push(r(s));
          else {
            let a = n,
              u = 0;
            for (; u < s.path.length; ) {
              const f = s.path[u];
              u === s.path.length - 1
                ? ((a[f] = a[f] || { _errors: [] }), a[f]._errors.push(r(s)))
                : (a[f] = a[f] || { _errors: [] }),
                (a = a[f]),
                u++;
            }
          }
      };
    return i(this), n;
  }
  static assert(t) {
    if (!(t instanceof qt)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, me.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {},
      n = [];
    for (const i of this.issues)
      i.path.length > 0
        ? ((r[i.path[0]] = r[i.path[0]] || []), r[i.path[0]].push(t(i)))
        : n.push(t(i));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
qt.create = (e) => new qt(e);
const Qo = (e, t) => {
  let r;
  switch (e.code) {
    case L.invalid_type:
      e.received === Z.undefined
        ? (r = 'Required')
        : (r = `Expected ${e.expected}, received ${e.received}`);
      break;
    case L.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, me.jsonStringifyReplacer)}`;
      break;
    case L.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${me.joinValues(e.keys, ', ')}`;
      break;
    case L.invalid_union:
      r = 'Invalid input';
      break;
    case L.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${me.joinValues(e.options)}`;
      break;
    case L.invalid_enum_value:
      r = `Invalid enum value. Expected ${me.joinValues(e.options)}, received '${e.received}'`;
      break;
    case L.invalid_arguments:
      r = 'Invalid function arguments';
      break;
    case L.invalid_return_type:
      r = 'Invalid function return type';
      break;
    case L.invalid_date:
      r = 'Invalid date';
      break;
    case L.invalid_string:
      typeof e.validation == 'object'
        ? 'includes' in e.validation
          ? ((r = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == 'number' &&
              (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
          : 'startsWith' in e.validation
            ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
            : 'endsWith' in e.validation
              ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
              : me.assertNever(e.validation)
        : e.validation !== 'regex'
          ? (r = `Invalid ${e.validation}`)
          : (r = 'Invalid');
      break;
    case L.too_small:
      e.type === 'array'
        ? (r = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`)
        : e.type === 'string'
          ? (r = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`)
          : e.type === 'number'
            ? (r = `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`)
            : e.type === 'date'
              ? (r = `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`)
              : (r = 'Invalid input');
      break;
    case L.too_big:
      e.type === 'array'
        ? (r = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`)
        : e.type === 'string'
          ? (r = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`)
          : e.type === 'number'
            ? (r = `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
            : e.type === 'bigint'
              ? (r = `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
              : e.type === 'date'
                ? (r = `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`)
                : (r = 'Invalid input');
      break;
    case L.custom:
      r = 'Invalid input';
      break;
    case L.invalid_intersection_types:
      r = 'Intersection results could not be merged';
      break;
    case L.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case L.not_finite:
      r = 'Number must be finite';
      break;
    default:
      (r = t.defaultError), me.assertNever(e);
  }
  return { message: r };
};
let Qk = Qo;
function $c() {
  return Qk;
}
const Uc = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: i } = e,
    o = [...r, ...(i.path || [])],
    s = { ...i, path: o };
  if (i.message !== void 0) return { ...i, path: o, message: i.message };
  let a = '';
  const u = n
    .filter((f) => !!f)
    .slice()
    .reverse();
  for (const f of u) a = f(s, { data: t, defaultError: a }).message;
  return { ...i, path: o, message: a };
};
function W(e, t) {
  const r = $c(),
    n = Uc({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        r,
        r === Qo ? void 0 : Qo,
      ].filter((i) => !!i),
    });
  e.common.issues.push(n);
}
class gt {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(t, r) {
    const n = [];
    for (const i of r) {
      if (i.status === 'aborted') return oe;
      i.status === 'dirty' && t.dirty(), n.push(i.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const i of r) {
      const o = await i.key,
        s = await i.value;
      n.push({ key: o, value: s });
    }
    return gt.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const i of r) {
      const { key: o, value: s } = i;
      if (o.status === 'aborted' || s.status === 'aborted') return oe;
      o.status === 'dirty' && t.dirty(),
        s.status === 'dirty' && t.dirty(),
        o.value !== '__proto__' &&
          (typeof s.value < 'u' || i.alwaysSet) &&
          (n[o.value] = s.value);
    }
    return { status: t.value, value: n };
  }
}
const oe = Object.freeze({ status: 'aborted' }),
  fo = (e) => ({ status: 'dirty', value: e }),
  Nt = (e) => ({ status: 'valid', value: e }),
  vh = (e) => e.status === 'aborted',
  wh = (e) => e.status === 'dirty',
  ji = (e) => e.status === 'valid',
  Oa = (e) => typeof Promise < 'u' && e instanceof Promise;
function Fa(e, t, r, n) {
  if (typeof t == 'function' ? e !== t || !n : !t.has(e))
    throw new TypeError(
      'Cannot read private member from an object whose class did not declare it',
    );
  return t.get(e);
}
function gy(e, t, r, n, i) {
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError(
      'Cannot write private member to an object whose class did not declare it',
    );
  return t.set(e, r), r;
}
var J;
(function (e) {
  (e.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == 'string' ? t : t == null ? void 0 : t.message);
})(J || (J = {}));
var po, ho;
class Er {
  constructor(t, r, n, i) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = r),
      (this._path = n),
      (this._key = i);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const xh = (e, t) => {
  if (ji(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new qt(e.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function ue(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: r,
    required_error: n,
    description: i,
  } = e;
  if (t && (r || n))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (s, a) => {
          var u, f;
          const { message: d } = e;
          return s.code === 'invalid_enum_value'
            ? { message: d ?? a.defaultError }
            : typeof a.data > 'u'
              ? {
                  message:
                    (u = d ?? n) !== null && u !== void 0 ? u : a.defaultError,
                }
              : s.code !== 'invalid_type'
                ? { message: a.defaultError }
                : {
                    message:
                      (f = d ?? r) !== null && f !== void 0
                        ? f
                        : a.defaultError,
                  };
        },
        description: i,
      };
}
class fe {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Qr(t.data);
  }
  _getOrReturnCtx(t, r) {
    return (
      r || {
        common: t.parent.common,
        data: t.data,
        parsedType: Qr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new gt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Qr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Oa(r)) throw new Error('Synchronous parse encountered promise.');
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const i = {
        common: {
          issues: [],
          async:
            (n = r == null ? void 0 : r.async) !== null && n !== void 0
              ? n
              : !1,
          contextualErrorMap: r == null ? void 0 : r.errorMap,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Qr(t),
      },
      o = this._parseSync({ data: t, path: i.path, parent: i });
    return xh(i, o);
  }
  '~validate'(t) {
    var r, n;
    const i = {
      common: { issues: [], async: !!this['~standard'].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Qr(t),
    };
    if (!this['~standard'].async)
      try {
        const o = this._parseSync({ data: t, path: [], parent: i });
        return ji(o) ? { value: o.value } : { issues: i.common.issues };
      } catch (o) {
        !(
          (n =
            (r = o == null ? void 0 : o.message) === null || r === void 0
              ? void 0
              : r.toLowerCase()) === null || n === void 0
        ) &&
          n.includes('encountered') &&
          (this['~standard'].async = !0),
          (i.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: i }).then((o) =>
      ji(o) ? { value: o.value } : { issues: i.common.issues },
    );
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
        common: {
          issues: [],
          contextualErrorMap: r == null ? void 0 : r.errorMap,
          async: !0,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Qr(t),
      },
      i = this._parse({ data: t, path: n.path, parent: n }),
      o = await (Oa(i) ? i : Promise.resolve(i));
    return xh(n, o);
  }
  refine(t, r) {
    const n = (i) =>
      typeof r == 'string' || typeof r > 'u'
        ? { message: r }
        : typeof r == 'function'
          ? r(i)
          : r;
    return this._refinement((i, o) => {
      const s = t(i),
        a = () => o.addIssue({ code: L.custom, ...n(i) });
      return typeof Promise < 'u' && s instanceof Promise
        ? s.then((u) => (u ? !0 : (a(), !1)))
        : s
          ? !0
          : (a(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, i) =>
      t(n) ? !0 : (i.addIssue(typeof r == 'function' ? r(n, i) : r), !1),
    );
  }
  _refinement(t) {
    return new Mr({
      schema: this,
      typeName: ne.ZodEffects,
      effect: { type: 'refinement', refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this['~standard'] = {
        version: 1,
        vendor: 'zod',
        validate: (r) => this['~validate'](r),
      });
  }
  optional() {
    return Lr.create(this, this._def);
  }
  nullable() {
    return Mn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return _r.create(this);
  }
  promise() {
    return Xo.create(this, this._def);
  }
  or(t) {
    return La.create([this, t], this._def);
  }
  and(t) {
    return Da.create(this, t, this._def);
  }
  transform(t) {
    return new Mr({
      ...ue(this._def),
      schema: this,
      typeName: ne.ZodEffects,
      effect: { type: 'transform', transform: t },
    });
  }
  default(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new Ma({
      ...ue(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ne.ZodDefault,
    });
  }
  brand() {
    return new xy({ typeName: ne.ZodBranded, type: this, ...ue(this._def) });
  }
  catch(t) {
    const r = typeof t == 'function' ? t : () => t;
    return new Va({
      ...ue(this._def),
      innerType: this,
      catchValue: r,
      typeName: ne.ZodCatch,
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({ ...this._def, description: t });
  }
  pipe(t) {
    return El.create(this, t);
  }
  readonly() {
    return Wa.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Yk = /^c[^\s-]{8,}$/i,
  Xk = /^[0-9a-z]+$/,
  eS = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  tS =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  rS = /^[a-z0-9_-]{21}$/i,
  nS = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  iS =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  oS =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  sS = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let fu;
const aS =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  lS =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  uS =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  cS =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  dS = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  fS = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  yy =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  pS = new RegExp(`^${yy}$`);
function vy(e) {
  let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function hS(e) {
  return new RegExp(`^${vy(e)}$`);
}
function mS(e) {
  let t = `${yy}T${vy(e)}`;
  const r = [];
  return (
    r.push(e.local ? 'Z?' : 'Z'),
    e.offset && r.push('([+-]\\d{2}:?\\d{2})'),
    (t = `${t}(${r.join('|')})`),
    new RegExp(`^${t}$`)
  );
}
function gS(e, t) {
  return !!(
    ((t === 'v4' || !t) && aS.test(e)) ||
    ((t === 'v6' || !t) && uS.test(e))
  );
}
function yS(e, t) {
  if (!nS.test(e)) return !1;
  try {
    const [r] = e.split('.'),
      n = r
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), '='),
      i = JSON.parse(atob(n));
    return !(
      typeof i != 'object' ||
      i === null ||
      !i.typ ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function vS(e, t) {
  return !!(
    ((t === 'v4' || !t) && lS.test(e)) ||
    ((t === 'v6' || !t) && cS.test(e))
  );
}
class br extends fe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== Z.string)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        W(o, {
          code: L.invalid_type,
          expected: Z.string,
          received: o.parsedType,
        }),
        oe
      );
    }
    const n = new gt();
    let i;
    for (const o of this._def.checks)
      if (o.kind === 'min')
        t.data.length < o.value &&
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            code: L.too_small,
            minimum: o.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'max')
        t.data.length > o.value &&
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            code: L.too_big,
            maximum: o.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'length') {
        const s = t.data.length > o.value,
          a = t.data.length < o.value;
        (s || a) &&
          ((i = this._getOrReturnCtx(t, i)),
          s
            ? W(i, {
                code: L.too_big,
                maximum: o.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : a &&
              W(i, {
                code: L.too_small,
                minimum: o.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          n.dirty());
      } else if (o.kind === 'email')
        oS.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            validation: 'email',
            code: L.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'emoji')
        fu || (fu = new RegExp(sS, 'u')),
          fu.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            W(i, {
              validation: 'emoji',
              code: L.invalid_string,
              message: o.message,
            }),
            n.dirty());
      else if (o.kind === 'uuid')
        tS.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            validation: 'uuid',
            code: L.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'nanoid')
        rS.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            validation: 'nanoid',
            code: L.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'cuid')
        Yk.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            validation: 'cuid',
            code: L.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'cuid2')
        Xk.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            validation: 'cuid2',
            code: L.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'ulid')
        eS.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            validation: 'ulid',
            code: L.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === 'url')
        try {
          new URL(t.data);
        } catch {
          (i = this._getOrReturnCtx(t, i)),
            W(i, {
              validation: 'url',
              code: L.invalid_string,
              message: o.message,
            }),
            n.dirty();
        }
      else
        o.kind === 'regex'
          ? ((o.regex.lastIndex = 0),
            o.regex.test(t.data) ||
              ((i = this._getOrReturnCtx(t, i)),
              W(i, {
                validation: 'regex',
                code: L.invalid_string,
                message: o.message,
              }),
              n.dirty()))
          : o.kind === 'trim'
            ? (t.data = t.data.trim())
            : o.kind === 'includes'
              ? t.data.includes(o.value, o.position) ||
                ((i = this._getOrReturnCtx(t, i)),
                W(i, {
                  code: L.invalid_string,
                  validation: { includes: o.value, position: o.position },
                  message: o.message,
                }),
                n.dirty())
              : o.kind === 'toLowerCase'
                ? (t.data = t.data.toLowerCase())
                : o.kind === 'toUpperCase'
                  ? (t.data = t.data.toUpperCase())
                  : o.kind === 'startsWith'
                    ? t.data.startsWith(o.value) ||
                      ((i = this._getOrReturnCtx(t, i)),
                      W(i, {
                        code: L.invalid_string,
                        validation: { startsWith: o.value },
                        message: o.message,
                      }),
                      n.dirty())
                    : o.kind === 'endsWith'
                      ? t.data.endsWith(o.value) ||
                        ((i = this._getOrReturnCtx(t, i)),
                        W(i, {
                          code: L.invalid_string,
                          validation: { endsWith: o.value },
                          message: o.message,
                        }),
                        n.dirty())
                      : o.kind === 'datetime'
                        ? mS(o).test(t.data) ||
                          ((i = this._getOrReturnCtx(t, i)),
                          W(i, {
                            code: L.invalid_string,
                            validation: 'datetime',
                            message: o.message,
                          }),
                          n.dirty())
                        : o.kind === 'date'
                          ? pS.test(t.data) ||
                            ((i = this._getOrReturnCtx(t, i)),
                            W(i, {
                              code: L.invalid_string,
                              validation: 'date',
                              message: o.message,
                            }),
                            n.dirty())
                          : o.kind === 'time'
                            ? hS(o).test(t.data) ||
                              ((i = this._getOrReturnCtx(t, i)),
                              W(i, {
                                code: L.invalid_string,
                                validation: 'time',
                                message: o.message,
                              }),
                              n.dirty())
                            : o.kind === 'duration'
                              ? iS.test(t.data) ||
                                ((i = this._getOrReturnCtx(t, i)),
                                W(i, {
                                  validation: 'duration',
                                  code: L.invalid_string,
                                  message: o.message,
                                }),
                                n.dirty())
                              : o.kind === 'ip'
                                ? gS(t.data, o.version) ||
                                  ((i = this._getOrReturnCtx(t, i)),
                                  W(i, {
                                    validation: 'ip',
                                    code: L.invalid_string,
                                    message: o.message,
                                  }),
                                  n.dirty())
                                : o.kind === 'jwt'
                                  ? yS(t.data, o.alg) ||
                                    ((i = this._getOrReturnCtx(t, i)),
                                    W(i, {
                                      validation: 'jwt',
                                      code: L.invalid_string,
                                      message: o.message,
                                    }),
                                    n.dirty())
                                  : o.kind === 'cidr'
                                    ? vS(t.data, o.version) ||
                                      ((i = this._getOrReturnCtx(t, i)),
                                      W(i, {
                                        validation: 'cidr',
                                        code: L.invalid_string,
                                        message: o.message,
                                      }),
                                      n.dirty())
                                    : o.kind === 'base64'
                                      ? dS.test(t.data) ||
                                        ((i = this._getOrReturnCtx(t, i)),
                                        W(i, {
                                          validation: 'base64',
                                          code: L.invalid_string,
                                          message: o.message,
                                        }),
                                        n.dirty())
                                      : o.kind === 'base64url'
                                        ? fS.test(t.data) ||
                                          ((i = this._getOrReturnCtx(t, i)),
                                          W(i, {
                                            validation: 'base64url',
                                            code: L.invalid_string,
                                            message: o.message,
                                          }),
                                          n.dirty())
                                        : me.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((i) => t.test(i), {
      validation: r,
      code: L.invalid_string,
      ...J.errToObj(n),
    });
  }
  _addCheck(t) {
    return new br({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: 'email', ...J.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: 'url', ...J.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: 'emoji', ...J.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: 'uuid', ...J.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: 'nanoid', ...J.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: 'cuid', ...J.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: 'cuid2', ...J.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: 'ulid', ...J.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: 'base64', ...J.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: 'base64url', ...J.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: 'jwt', ...J.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: 'ip', ...J.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: 'cidr', ...J.errToObj(t) });
  }
  datetime(t) {
    var r, n;
    return typeof t == 'string'
      ? this._addCheck({
          kind: 'datetime',
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
                ? void 0
                : t.precision,
          offset:
            (r = t == null ? void 0 : t.offset) !== null && r !== void 0
              ? r
              : !1,
          local:
            (n = t == null ? void 0 : t.local) !== null && n !== void 0
              ? n
              : !1,
          ...J.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: 'date', message: t });
  }
  time(t) {
    return typeof t == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: t })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
                ? void 0
                : t.precision,
          ...J.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: 'duration', ...J.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({ kind: 'regex', regex: t, ...J.errToObj(r) });
  }
  includes(t, r) {
    return this._addCheck({
      kind: 'includes',
      value: t,
      position: r == null ? void 0 : r.position,
      ...J.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(t, r) {
    return this._addCheck({ kind: 'startsWith', value: t, ...J.errToObj(r) });
  }
  endsWith(t, r) {
    return this._addCheck({ kind: 'endsWith', value: t, ...J.errToObj(r) });
  }
  min(t, r) {
    return this._addCheck({ kind: 'min', value: t, ...J.errToObj(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: 'max', value: t, ...J.errToObj(r) });
  }
  length(t, r) {
    return this._addCheck({ kind: 'length', value: t, ...J.errToObj(r) });
  }
  nonempty(t) {
    return this.min(1, J.errToObj(t));
  }
  trim() {
    return new br({
      ...this._def,
      checks: [...this._def.checks, { kind: 'trim' }],
    });
  }
  toLowerCase() {
    return new br({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toLowerCase' }],
    });
  }
  toUpperCase() {
    return new br({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toUpperCase' }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === 'ip');
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === 'cidr');
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === 'base64');
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === 'base64url');
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
br.create = (e) => {
  var t;
  return new br({
    checks: [],
    typeName: ne.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ue(e),
  });
};
function wS(e, t) {
  const r = (e.toString().split('.')[1] || '').length,
    n = (t.toString().split('.')[1] || '').length,
    i = r > n ? r : n,
    o = parseInt(e.toFixed(i).replace('.', '')),
    s = parseInt(t.toFixed(i).replace('.', ''));
  return (o % s) / Math.pow(10, i);
}
class Li extends fe {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== Z.number)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        W(o, {
          code: L.invalid_type,
          expected: Z.number,
          received: o.parsedType,
        }),
        oe
      );
    }
    let n;
    const i = new gt();
    for (const o of this._def.checks)
      o.kind === 'int'
        ? me.isInteger(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          W(n, {
            code: L.invalid_type,
            expected: 'integer',
            received: 'float',
            message: o.message,
          }),
          i.dirty())
        : o.kind === 'min'
          ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
            ((n = this._getOrReturnCtx(t, n)),
            W(n, {
              code: L.too_small,
              minimum: o.value,
              type: 'number',
              inclusive: o.inclusive,
              exact: !1,
              message: o.message,
            }),
            i.dirty())
          : o.kind === 'max'
            ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
              ((n = this._getOrReturnCtx(t, n)),
              W(n, {
                code: L.too_big,
                maximum: o.value,
                type: 'number',
                inclusive: o.inclusive,
                exact: !1,
                message: o.message,
              }),
              i.dirty())
            : o.kind === 'multipleOf'
              ? wS(t.data, o.value) !== 0 &&
                ((n = this._getOrReturnCtx(t, n)),
                W(n, {
                  code: L.not_multiple_of,
                  multipleOf: o.value,
                  message: o.message,
                }),
                i.dirty())
              : o.kind === 'finite'
                ? Number.isFinite(t.data) ||
                  ((n = this._getOrReturnCtx(t, n)),
                  W(n, { code: L.not_finite, message: o.message }),
                  i.dirty())
                : me.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, J.toString(r));
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, J.toString(r));
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, J.toString(r));
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, J.toString(r));
  }
  setLimit(t, r, n, i) {
    return new Li({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: r, inclusive: n, message: J.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new Li({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: 'int', message: J.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !1,
      message: J.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !1,
      message: J.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !0,
      message: J.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !0,
      message: J.toString(t),
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: 'multipleOf',
      value: t,
      message: J.toString(r),
    });
  }
  finite(t) {
    return this._addCheck({ kind: 'finite', message: J.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: J.toString(t),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: J.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === 'int' || (t.kind === 'multipleOf' && me.isInteger(t.value)),
    );
  }
  get isFinite() {
    let t = null,
      r = null;
    for (const n of this._def.checks) {
      if (n.kind === 'finite' || n.kind === 'int' || n.kind === 'multipleOf')
        return !0;
      n.kind === 'min'
        ? (r === null || n.value > r) && (r = n.value)
        : n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
Li.create = (e) =>
  new Li({
    checks: [],
    typeName: ne.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ue(e),
  });
class Di extends fe {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== Z.bigint) return this._getInvalidInput(t);
    let n;
    const i = new gt();
    for (const o of this._def.checks)
      o.kind === 'min'
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((n = this._getOrReturnCtx(t, n)),
          W(n, {
            code: L.too_small,
            type: 'bigint',
            minimum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          i.dirty())
        : o.kind === 'max'
          ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
            ((n = this._getOrReturnCtx(t, n)),
            W(n, {
              code: L.too_big,
              type: 'bigint',
              maximum: o.value,
              inclusive: o.inclusive,
              message: o.message,
            }),
            i.dirty())
          : o.kind === 'multipleOf'
            ? t.data % o.value !== BigInt(0) &&
              ((n = this._getOrReturnCtx(t, n)),
              W(n, {
                code: L.not_multiple_of,
                multipleOf: o.value,
                message: o.message,
              }),
              i.dirty())
            : me.assertNever(o);
    return { status: i.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return (
      W(r, {
        code: L.invalid_type,
        expected: Z.bigint,
        received: r.parsedType,
      }),
      oe
    );
  }
  gte(t, r) {
    return this.setLimit('min', t, !0, J.toString(r));
  }
  gt(t, r) {
    return this.setLimit('min', t, !1, J.toString(r));
  }
  lte(t, r) {
    return this.setLimit('max', t, !0, J.toString(r));
  }
  lt(t, r) {
    return this.setLimit('max', t, !1, J.toString(r));
  }
  setLimit(t, r, n, i) {
    return new Di({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: r, inclusive: n, message: J.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new Di({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: J.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: J.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: J.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: J.toString(t),
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: 'multipleOf',
      value: t,
      message: J.toString(r),
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Di.create = (e) => {
  var t;
  return new Di({
    checks: [],
    typeName: ne.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ue(e),
  });
};
class zc extends fe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Z.boolean)
    ) {
      const n = this._getOrReturnCtx(t);
      return (
        W(n, {
          code: L.invalid_type,
          expected: Z.boolean,
          received: n.parsedType,
        }),
        oe
      );
    }
    return Nt(t.data);
  }
}
zc.create = (e) =>
  new zc({
    typeName: ne.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ue(e),
  });
class Yo extends fe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== Z.date)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        W(o, {
          code: L.invalid_type,
          expected: Z.date,
          received: o.parsedType,
        }),
        oe
      );
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return W(o, { code: L.invalid_date }), oe;
    }
    const n = new gt();
    let i;
    for (const o of this._def.checks)
      o.kind === 'min'
        ? t.data.getTime() < o.value &&
          ((i = this._getOrReturnCtx(t, i)),
          W(i, {
            code: L.too_small,
            message: o.message,
            inclusive: !0,
            exact: !1,
            minimum: o.value,
            type: 'date',
          }),
          n.dirty())
        : o.kind === 'max'
          ? t.data.getTime() > o.value &&
            ((i = this._getOrReturnCtx(t, i)),
            W(i, {
              code: L.too_big,
              message: o.message,
              inclusive: !0,
              exact: !1,
              maximum: o.value,
              type: 'date',
            }),
            n.dirty())
          : me.assertNever(o);
    return { status: n.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new Yo({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, r) {
    return this._addCheck({
      kind: 'min',
      value: t.getTime(),
      message: J.toString(r),
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: 'max',
      value: t.getTime(),
      message: J.toString(r),
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'min' && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
Yo.create = (e) =>
  new Yo({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: ne.ZodDate,
    ...ue(e),
  });
class Mc extends fe {
  _parse(t) {
    if (this._getType(t) !== Z.symbol) {
      const n = this._getOrReturnCtx(t);
      return (
        W(n, {
          code: L.invalid_type,
          expected: Z.symbol,
          received: n.parsedType,
        }),
        oe
      );
    }
    return Nt(t.data);
  }
}
Mc.create = (e) => new Mc({ typeName: ne.ZodSymbol, ...ue(e) });
class ba extends fe {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const n = this._getOrReturnCtx(t);
      return (
        W(n, {
          code: L.invalid_type,
          expected: Z.undefined,
          received: n.parsedType,
        }),
        oe
      );
    }
    return Nt(t.data);
  }
}
ba.create = (e) => new ba({ typeName: ne.ZodUndefined, ...ue(e) });
class ja extends fe {
  _parse(t) {
    if (this._getType(t) !== Z.null) {
      const n = this._getOrReturnCtx(t);
      return (
        W(n, {
          code: L.invalid_type,
          expected: Z.null,
          received: n.parsedType,
        }),
        oe
      );
    }
    return Nt(t.data);
  }
}
ja.create = (e) => new ja({ typeName: ne.ZodNull, ...ue(e) });
class Vc extends fe {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Nt(t.data);
  }
}
Vc.create = (e) => new Vc({ typeName: ne.ZodAny, ...ue(e) });
class _i extends fe {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Nt(t.data);
  }
}
_i.create = (e) => new _i({ typeName: ne.ZodUnknown, ...ue(e) });
class gn extends fe {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return (
      W(r, { code: L.invalid_type, expected: Z.never, received: r.parsedType }),
      oe
    );
  }
}
gn.create = (e) => new gn({ typeName: ne.ZodNever, ...ue(e) });
class Wc extends fe {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const n = this._getOrReturnCtx(t);
      return (
        W(n, {
          code: L.invalid_type,
          expected: Z.void,
          received: n.parsedType,
        }),
        oe
      );
    }
    return Nt(t.data);
  }
}
Wc.create = (e) => new Wc({ typeName: ne.ZodVoid, ...ue(e) });
class _r extends fe {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t),
      i = this._def;
    if (r.parsedType !== Z.array)
      return (
        W(r, {
          code: L.invalid_type,
          expected: Z.array,
          received: r.parsedType,
        }),
        oe
      );
    if (i.exactLength !== null) {
      const s = r.data.length > i.exactLength.value,
        a = r.data.length < i.exactLength.value;
      (s || a) &&
        (W(r, {
          code: s ? L.too_big : L.too_small,
          minimum: a ? i.exactLength.value : void 0,
          maximum: s ? i.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: i.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (i.minLength !== null &&
        r.data.length < i.minLength.value &&
        (W(r, {
          code: L.too_small,
          minimum: i.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.minLength.message,
        }),
        n.dirty()),
      i.maxLength !== null &&
        r.data.length > i.maxLength.value &&
        (W(r, {
          code: L.too_big,
          maximum: i.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.maxLength.message,
        }),
        n.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((s, a) => i.type._parseAsync(new Er(r, s, r.path, a))),
      ).then((s) => gt.mergeArray(n, s));
    const o = [...r.data].map((s, a) =>
      i.type._parseSync(new Er(r, s, r.path, a)),
    );
    return gt.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new _r({
      ...this._def,
      minLength: { value: t, message: J.toString(r) },
    });
  }
  max(t, r) {
    return new _r({
      ...this._def,
      maxLength: { value: t, message: J.toString(r) },
    });
  }
  length(t, r) {
    return new _r({
      ...this._def,
      exactLength: { value: t, message: J.toString(r) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
_r.create = (e, t) =>
  new _r({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ne.ZodArray,
    ...ue(t),
  });
function ei(e) {
  if (e instanceof Ue) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = Lr.create(ei(n));
    }
    return new Ue({ ...e._def, shape: () => t });
  } else
    return e instanceof _r
      ? new _r({ ...e._def, type: ei(e.element) })
      : e instanceof Lr
        ? Lr.create(ei(e.unwrap()))
        : e instanceof Mn
          ? Mn.create(ei(e.unwrap()))
          : e instanceof zr
            ? zr.create(e.items.map((t) => ei(t)))
            : e;
}
class Ue extends fe {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      r = me.objectKeys(t);
    return (this._cached = { shape: t, keys: r });
  }
  _parse(t) {
    if (this._getType(t) !== Z.object) {
      const f = this._getOrReturnCtx(t);
      return (
        W(f, {
          code: L.invalid_type,
          expected: Z.object,
          received: f.parsedType,
        }),
        oe
      );
    }
    const { status: n, ctx: i } = this._processInputParams(t),
      { shape: o, keys: s } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof gn && this._def.unknownKeys === 'strip')
    )
      for (const f in i.data) s.includes(f) || a.push(f);
    const u = [];
    for (const f of s) {
      const d = o[f],
        h = i.data[f];
      u.push({
        key: { status: 'valid', value: f },
        value: d._parse(new Er(i, h, i.path, f)),
        alwaysSet: f in i.data,
      });
    }
    if (this._def.catchall instanceof gn) {
      const f = this._def.unknownKeys;
      if (f === 'passthrough')
        for (const d of a)
          u.push({
            key: { status: 'valid', value: d },
            value: { status: 'valid', value: i.data[d] },
          });
      else if (f === 'strict')
        a.length > 0 &&
          (W(i, { code: L.unrecognized_keys, keys: a }), n.dirty());
      else if (f !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const f = this._def.catchall;
      for (const d of a) {
        const h = i.data[d];
        u.push({
          key: { status: 'valid', value: d },
          value: f._parse(new Er(i, h, i.path, d)),
          alwaysSet: d in i.data,
        });
      }
    }
    return i.common.async
      ? Promise.resolve()
          .then(async () => {
            const f = [];
            for (const d of u) {
              const h = await d.key,
                w = await d.value;
              f.push({ key: h, value: w, alwaysSet: d.alwaysSet });
            }
            return f;
          })
          .then((f) => gt.mergeObjectSync(n, f))
      : gt.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      J.errToObj,
      new Ue({
        ...this._def,
        unknownKeys: 'strict',
        ...(t !== void 0
          ? {
              errorMap: (r, n) => {
                var i, o, s, a;
                const u =
                  (s =
                    (o = (i = this._def).errorMap) === null || o === void 0
                      ? void 0
                      : o.call(i, r, n).message) !== null && s !== void 0
                    ? s
                    : n.defaultError;
                return r.code === 'unrecognized_keys'
                  ? {
                      message:
                        (a = J.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : u,
                    }
                  : { message: u };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Ue({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new Ue({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(t) {
    return new Ue({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new Ue({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: ne.ZodObject,
    });
  }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  catchall(t) {
    return new Ue({ ...this._def, catchall: t });
  }
  pick(t) {
    const r = {};
    return (
      me.objectKeys(t).forEach((n) => {
        t[n] && this.shape[n] && (r[n] = this.shape[n]);
      }),
      new Ue({ ...this._def, shape: () => r })
    );
  }
  omit(t) {
    const r = {};
    return (
      me.objectKeys(this.shape).forEach((n) => {
        t[n] || (r[n] = this.shape[n]);
      }),
      new Ue({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return ei(this);
  }
  partial(t) {
    const r = {};
    return (
      me.objectKeys(this.shape).forEach((n) => {
        const i = this.shape[n];
        t && !t[n] ? (r[n] = i) : (r[n] = i.optional());
      }),
      new Ue({ ...this._def, shape: () => r })
    );
  }
  required(t) {
    const r = {};
    return (
      me.objectKeys(this.shape).forEach((n) => {
        if (t && !t[n]) r[n] = this.shape[n];
        else {
          let o = this.shape[n];
          for (; o instanceof Lr; ) o = o._def.innerType;
          r[n] = o;
        }
      }),
      new Ue({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return wy(me.objectKeys(this.shape));
  }
}
Ue.create = (e, t) =>
  new Ue({
    shape: () => e,
    unknownKeys: 'strip',
    catchall: gn.create(),
    typeName: ne.ZodObject,
    ...ue(t),
  });
Ue.strictCreate = (e, t) =>
  new Ue({
    shape: () => e,
    unknownKeys: 'strict',
    catchall: gn.create(),
    typeName: ne.ZodObject,
    ...ue(t),
  });
Ue.lazycreate = (e, t) =>
  new Ue({
    shape: e,
    unknownKeys: 'strip',
    catchall: gn.create(),
    typeName: ne.ZodObject,
    ...ue(t),
  });
class La extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = this._def.options;
    function i(o) {
      for (const a of o) if (a.result.status === 'valid') return a.result;
      for (const a of o)
        if (a.result.status === 'dirty')
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const s = o.map((a) => new qt(a.ctx.common.issues));
      return W(r, { code: L.invalid_union, unionErrors: s }), oe;
    }
    if (r.common.async)
      return Promise.all(
        n.map(async (o) => {
          const s = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return {
            result: await o._parseAsync({
              data: r.data,
              path: r.path,
              parent: s,
            }),
            ctx: s,
          };
        }),
      ).then(i);
    {
      let o;
      const s = [];
      for (const u of n) {
        const f = { ...r, common: { ...r.common, issues: [] }, parent: null },
          d = u._parseSync({ data: r.data, path: r.path, parent: f });
        if (d.status === 'valid') return d;
        d.status === 'dirty' && !o && (o = { result: d, ctx: f }),
          f.common.issues.length && s.push(f.common.issues);
      }
      if (o) return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((u) => new qt(u));
      return W(r, { code: L.invalid_union, unionErrors: a }), oe;
    }
  }
  get options() {
    return this._def.options;
  }
}
La.create = (e, t) => new La({ options: e, typeName: ne.ZodUnion, ...ue(t) });
const Tr = (e) =>
  e instanceof $a
    ? Tr(e.schema)
    : e instanceof Mr
      ? Tr(e.innerType())
      : e instanceof Ua
        ? [e.value]
        : e instanceof zn
          ? e.options
          : e instanceof za
            ? me.objectValues(e.enum)
            : e instanceof Ma
              ? Tr(e._def.innerType)
              : e instanceof ba
                ? [void 0]
                : e instanceof ja
                  ? [null]
                  : e instanceof Lr
                    ? [void 0, ...Tr(e.unwrap())]
                    : e instanceof Mn
                      ? [null, ...Tr(e.unwrap())]
                      : e instanceof xy || e instanceof Wa
                        ? Tr(e.unwrap())
                        : e instanceof Va
                          ? Tr(e._def.innerType)
                          : [];
class pf extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Z.object)
      return (
        W(r, {
          code: L.invalid_type,
          expected: Z.object,
          received: r.parsedType,
        }),
        oe
      );
    const n = this.discriminator,
      i = r.data[n],
      o = this.optionsMap.get(i);
    return o
      ? r.common.async
        ? o._parseAsync({ data: r.data, path: r.path, parent: r })
        : o._parseSync({ data: r.data, path: r.path, parent: r })
      : (W(r, {
          code: L.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [n],
        }),
        oe);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, r, n) {
    const i = new Map();
    for (const o of r) {
      const s = Tr(o.shape[t]);
      if (!s.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
        );
      for (const a of s) {
        if (i.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(a)}`,
          );
        i.set(a, o);
      }
    }
    return new pf({
      typeName: ne.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: i,
      ...ue(n),
    });
  }
}
function Hc(e, t) {
  const r = Qr(e),
    n = Qr(t);
  if (e === t) return { valid: !0, data: e };
  if (r === Z.object && n === Z.object) {
    const i = me.objectKeys(t),
      o = me.objectKeys(e).filter((a) => i.indexOf(a) !== -1),
      s = { ...e, ...t };
    for (const a of o) {
      const u = Hc(e[a], t[a]);
      if (!u.valid) return { valid: !1 };
      s[a] = u.data;
    }
    return { valid: !0, data: s };
  } else if (r === Z.array && n === Z.array) {
    if (e.length !== t.length) return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const s = e[o],
        a = t[o],
        u = Hc(s, a);
      if (!u.valid) return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === Z.date && n === Z.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Da extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      i = (o, s) => {
        if (vh(o) || vh(s)) return oe;
        const a = Hc(o.value, s.value);
        return a.valid
          ? ((wh(o) || wh(s)) && r.dirty(), { status: r.value, value: a.data })
          : (W(n, { code: L.invalid_intersection_types }), oe);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([o, s]) => i(o, s))
      : i(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
}
Da.create = (e, t, r) =>
  new Da({ left: e, right: t, typeName: ne.ZodIntersection, ...ue(r) });
class zr extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.array)
      return (
        W(n, {
          code: L.invalid_type,
          expected: Z.array,
          received: n.parsedType,
        }),
        oe
      );
    if (n.data.length < this._def.items.length)
      return (
        W(n, {
          code: L.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        oe
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (W(n, {
        code: L.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      r.dirty());
    const o = [...n.data]
      .map((s, a) => {
        const u = this._def.items[a] || this._def.rest;
        return u ? u._parse(new Er(n, s, n.path, a)) : null;
      })
      .filter((s) => !!s);
    return n.common.async
      ? Promise.all(o).then((s) => gt.mergeArray(r, s))
      : gt.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new zr({ ...this._def, rest: t });
  }
}
zr.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new zr({ items: e, typeName: ne.ZodTuple, rest: null, ...ue(t) });
};
class Ba extends fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.object)
      return (
        W(n, {
          code: L.invalid_type,
          expected: Z.object,
          received: n.parsedType,
        }),
        oe
      );
    const i = [],
      o = this._def.keyType,
      s = this._def.valueType;
    for (const a in n.data)
      i.push({
        key: o._parse(new Er(n, a, n.path, a)),
        value: s._parse(new Er(n, n.data[a], n.path, a)),
        alwaysSet: a in n.data,
      });
    return n.common.async
      ? gt.mergeObjectAsync(r, i)
      : gt.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof fe
      ? new Ba({ keyType: t, valueType: r, typeName: ne.ZodRecord, ...ue(n) })
      : new Ba({
          keyType: br.create(),
          valueType: t,
          typeName: ne.ZodRecord,
          ...ue(r),
        });
  }
}
class Zc extends fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.map)
      return (
        W(n, { code: L.invalid_type, expected: Z.map, received: n.parsedType }),
        oe
      );
    const i = this._def.keyType,
      o = this._def.valueType,
      s = [...n.data.entries()].map(([a, u], f) => ({
        key: i._parse(new Er(n, a, n.path, [f, 'key'])),
        value: o._parse(new Er(n, u, n.path, [f, 'value'])),
      }));
    if (n.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const u of s) {
          const f = await u.key,
            d = await u.value;
          if (f.status === 'aborted' || d.status === 'aborted') return oe;
          (f.status === 'dirty' || d.status === 'dirty') && r.dirty(),
            a.set(f.value, d.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = new Map();
      for (const u of s) {
        const f = u.key,
          d = u.value;
        if (f.status === 'aborted' || d.status === 'aborted') return oe;
        (f.status === 'dirty' || d.status === 'dirty') && r.dirty(),
          a.set(f.value, d.value);
      }
      return { status: r.value, value: a };
    }
  }
}
Zc.create = (e, t, r) =>
  new Zc({ valueType: t, keyType: e, typeName: ne.ZodMap, ...ue(r) });
class Bi extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.set)
      return (
        W(n, { code: L.invalid_type, expected: Z.set, received: n.parsedType }),
        oe
      );
    const i = this._def;
    i.minSize !== null &&
      n.data.size < i.minSize.value &&
      (W(n, {
        code: L.too_small,
        minimum: i.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: i.minSize.message,
      }),
      r.dirty()),
      i.maxSize !== null &&
        n.data.size > i.maxSize.value &&
        (W(n, {
          code: L.too_big,
          maximum: i.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: i.maxSize.message,
        }),
        r.dirty());
    const o = this._def.valueType;
    function s(u) {
      const f = new Set();
      for (const d of u) {
        if (d.status === 'aborted') return oe;
        d.status === 'dirty' && r.dirty(), f.add(d.value);
      }
      return { status: r.value, value: f };
    }
    const a = [...n.data.values()].map((u, f) =>
      o._parse(new Er(n, u, n.path, f)),
    );
    return n.common.async ? Promise.all(a).then((u) => s(u)) : s(a);
  }
  min(t, r) {
    return new Bi({
      ...this._def,
      minSize: { value: t, message: J.toString(r) },
    });
  }
  max(t, r) {
    return new Bi({
      ...this._def,
      maxSize: { value: t, message: J.toString(r) },
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Bi.create = (e, t) =>
  new Bi({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: ne.ZodSet,
    ...ue(t),
  });
class Ro extends fe {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Z.function)
      return (
        W(r, {
          code: L.invalid_type,
          expected: Z.function,
          received: r.parsedType,
        }),
        oe
      );
    function n(a, u) {
      return Uc({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          $c(),
          Qo,
        ].filter((f) => !!f),
        issueData: { code: L.invalid_arguments, argumentsError: u },
      });
    }
    function i(a, u) {
      return Uc({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          $c(),
          Qo,
        ].filter((f) => !!f),
        issueData: { code: L.invalid_return_type, returnTypeError: u },
      });
    }
    const o = { errorMap: r.common.contextualErrorMap },
      s = r.data;
    if (this._def.returns instanceof Xo) {
      const a = this;
      return Nt(async function (...u) {
        const f = new qt([]),
          d = await a._def.args.parseAsync(u, o).catch((S) => {
            throw (f.addIssue(n(u, S)), f);
          }),
          h = await Reflect.apply(s, this, d);
        return await a._def.returns._def.type.parseAsync(h, o).catch((S) => {
          throw (f.addIssue(i(h, S)), f);
        });
      });
    } else {
      const a = this;
      return Nt(function (...u) {
        const f = a._def.args.safeParse(u, o);
        if (!f.success) throw new qt([n(u, f.error)]);
        const d = Reflect.apply(s, this, f.data),
          h = a._def.returns.safeParse(d, o);
        if (!h.success) throw new qt([i(d, h.error)]);
        return h.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Ro({ ...this._def, args: zr.create(t).rest(_i.create()) });
  }
  returns(t) {
    return new Ro({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, n) {
    return new Ro({
      args: t || zr.create([]).rest(_i.create()),
      returns: r || _i.create(),
      typeName: ne.ZodFunction,
      ...ue(n),
    });
  }
}
class $a extends fe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
$a.create = (e, t) => new $a({ getter: e, typeName: ne.ZodLazy, ...ue(t) });
class Ua extends fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return (
        W(r, {
          received: r.data,
          code: L.invalid_literal,
          expected: this._def.value,
        }),
        oe
      );
    }
    return { status: 'valid', value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ua.create = (e, t) => new Ua({ value: e, typeName: ne.ZodLiteral, ...ue(t) });
function wy(e, t) {
  return new zn({ values: e, typeName: ne.ZodEnum, ...ue(t) });
}
class zn extends fe {
  constructor() {
    super(...arguments), po.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const r = this._getOrReturnCtx(t),
        n = this._def.values;
      return (
        W(r, {
          expected: me.joinValues(n),
          received: r.parsedType,
          code: L.invalid_type,
        }),
        oe
      );
    }
    if (
      (Fa(this, po) || gy(this, po, new Set(this._def.values)),
      !Fa(this, po).has(t.data))
    ) {
      const r = this._getOrReturnCtx(t),
        n = this._def.values;
      return (
        W(r, { received: r.data, code: L.invalid_enum_value, options: n }), oe
      );
    }
    return Nt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values) t[r] = r;
    return t;
  }
  extract(t, r = this._def) {
    return zn.create(t, { ...this._def, ...r });
  }
  exclude(t, r = this._def) {
    return zn.create(
      this.options.filter((n) => !t.includes(n)),
      { ...this._def, ...r },
    );
  }
}
po = new WeakMap();
zn.create = wy;
class za extends fe {
  constructor() {
    super(...arguments), ho.set(this, void 0);
  }
  _parse(t) {
    const r = me.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(t);
    if (n.parsedType !== Z.string && n.parsedType !== Z.number) {
      const i = me.objectValues(r);
      return (
        W(n, {
          expected: me.joinValues(i),
          received: n.parsedType,
          code: L.invalid_type,
        }),
        oe
      );
    }
    if (
      (Fa(this, ho) ||
        gy(this, ho, new Set(me.getValidEnumValues(this._def.values))),
      !Fa(this, ho).has(t.data))
    ) {
      const i = me.objectValues(r);
      return (
        W(n, { received: n.data, code: L.invalid_enum_value, options: i }), oe
      );
    }
    return Nt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ho = new WeakMap();
za.create = (e, t) =>
  new za({ values: e, typeName: ne.ZodNativeEnum, ...ue(t) });
class Xo extends fe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Z.promise && r.common.async === !1)
      return (
        W(r, {
          code: L.invalid_type,
          expected: Z.promise,
          received: r.parsedType,
        }),
        oe
      );
    const n = r.parsedType === Z.promise ? r.data : Promise.resolve(r.data);
    return Nt(
      n.then((i) =>
        this._def.type.parseAsync(i, {
          path: r.path,
          errorMap: r.common.contextualErrorMap,
        }),
      ),
    );
  }
}
Xo.create = (e, t) => new Xo({ type: e, typeName: ne.ZodPromise, ...ue(t) });
class Mr extends fe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ne.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t),
      i = this._def.effect || null,
      o = {
        addIssue: (s) => {
          W(n, s), s.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), i.type === 'preprocess')) {
      const s = i.transform(n.data, o);
      if (n.common.async)
        return Promise.resolve(s).then(async (a) => {
          if (r.value === 'aborted') return oe;
          const u = await this._def.schema._parseAsync({
            data: a,
            path: n.path,
            parent: n,
          });
          return u.status === 'aborted'
            ? oe
            : u.status === 'dirty' || r.value === 'dirty'
              ? fo(u.value)
              : u;
        });
      {
        if (r.value === 'aborted') return oe;
        const a = this._def.schema._parseSync({
          data: s,
          path: n.path,
          parent: n,
        });
        return a.status === 'aborted'
          ? oe
          : a.status === 'dirty' || r.value === 'dirty'
            ? fo(a.value)
            : a;
      }
    }
    if (i.type === 'refinement') {
      const s = (a) => {
        const u = i.refinement(a, o);
        if (n.common.async) return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return a.status === 'aborted'
          ? oe
          : (a.status === 'dirty' && r.dirty(),
            s(a.value),
            { status: r.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((a) =>
            a.status === 'aborted'
              ? oe
              : (a.status === 'dirty' && r.dirty(),
                s(a.value).then(() => ({ status: r.value, value: a.value }))),
          );
    }
    if (i.type === 'transform')
      if (n.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!ji(s)) return s;
        const a = i.transform(s.value, o);
        if (a instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return { status: r.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((s) =>
            ji(s)
              ? Promise.resolve(i.transform(s.value, o)).then((a) => ({
                  status: r.value,
                  value: a,
                }))
              : s,
          );
    me.assertNever(i);
  }
}
Mr.create = (e, t, r) =>
  new Mr({ schema: e, typeName: ne.ZodEffects, effect: t, ...ue(r) });
Mr.createWithPreprocess = (e, t, r) =>
  new Mr({
    schema: t,
    effect: { type: 'preprocess', transform: e },
    typeName: ne.ZodEffects,
    ...ue(r),
  });
class Lr extends fe {
  _parse(t) {
    return this._getType(t) === Z.undefined
      ? Nt(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lr.create = (e, t) =>
  new Lr({ innerType: e, typeName: ne.ZodOptional, ...ue(t) });
class Mn extends fe {
  _parse(t) {
    return this._getType(t) === Z.null
      ? Nt(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mn.create = (e, t) =>
  new Mn({ innerType: e, typeName: ne.ZodNullable, ...ue(t) });
class Ma extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return (
      r.parsedType === Z.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ma.create = (e, t) =>
  new Ma({
    innerType: e,
    typeName: ne.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...ue(t),
  });
class Va extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = { ...r, common: { ...r.common, issues: [] } },
      i = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return Oa(i)
      ? i.then((o) => ({
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new qt(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            i.status === 'valid'
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new qt(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Va.create = (e, t) =>
  new Va({
    innerType: e,
    typeName: ne.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...ue(t),
  });
class qc extends fe {
  _parse(t) {
    if (this._getType(t) !== Z.nan) {
      const n = this._getOrReturnCtx(t);
      return (
        W(n, { code: L.invalid_type, expected: Z.nan, received: n.parsedType }),
        oe
      );
    }
    return { status: 'valid', value: t.data };
  }
}
qc.create = (e) => new qc({ typeName: ne.ZodNaN, ...ue(e) });
class xy extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t),
      n = r.data;
    return this._def.type._parse({ data: n, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class El extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return o.status === 'aborted'
          ? oe
          : o.status === 'dirty'
            ? (r.dirty(), fo(o.value))
            : this._def.out._parseAsync({
                data: o.value,
                path: n.path,
                parent: n,
              });
      })();
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n,
      });
      return i.status === 'aborted'
        ? oe
        : i.status === 'dirty'
          ? (r.dirty(), { status: 'dirty', value: i.value })
          : this._def.out._parseSync({
              data: i.value,
              path: n.path,
              parent: n,
            });
    }
  }
  static create(t, r) {
    return new El({ in: t, out: r, typeName: ne.ZodPipeline });
  }
}
class Wa extends fe {
  _parse(t) {
    const r = this._def.innerType._parse(t),
      n = (i) => (ji(i) && (i.value = Object.freeze(i.value)), i);
    return Oa(r) ? r.then((i) => n(i)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Wa.create = (e, t) =>
  new Wa({ innerType: e, typeName: ne.ZodReadonly, ...ue(t) });
Ue.lazycreate;
var ne;
(function (e) {
  (e.ZodString = 'ZodString'),
    (e.ZodNumber = 'ZodNumber'),
    (e.ZodNaN = 'ZodNaN'),
    (e.ZodBigInt = 'ZodBigInt'),
    (e.ZodBoolean = 'ZodBoolean'),
    (e.ZodDate = 'ZodDate'),
    (e.ZodSymbol = 'ZodSymbol'),
    (e.ZodUndefined = 'ZodUndefined'),
    (e.ZodNull = 'ZodNull'),
    (e.ZodAny = 'ZodAny'),
    (e.ZodUnknown = 'ZodUnknown'),
    (e.ZodNever = 'ZodNever'),
    (e.ZodVoid = 'ZodVoid'),
    (e.ZodArray = 'ZodArray'),
    (e.ZodObject = 'ZodObject'),
    (e.ZodUnion = 'ZodUnion'),
    (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (e.ZodIntersection = 'ZodIntersection'),
    (e.ZodTuple = 'ZodTuple'),
    (e.ZodRecord = 'ZodRecord'),
    (e.ZodMap = 'ZodMap'),
    (e.ZodSet = 'ZodSet'),
    (e.ZodFunction = 'ZodFunction'),
    (e.ZodLazy = 'ZodLazy'),
    (e.ZodLiteral = 'ZodLiteral'),
    (e.ZodEnum = 'ZodEnum'),
    (e.ZodEffects = 'ZodEffects'),
    (e.ZodNativeEnum = 'ZodNativeEnum'),
    (e.ZodOptional = 'ZodOptional'),
    (e.ZodNullable = 'ZodNullable'),
    (e.ZodDefault = 'ZodDefault'),
    (e.ZodCatch = 'ZodCatch'),
    (e.ZodPromise = 'ZodPromise'),
    (e.ZodBranded = 'ZodBranded'),
    (e.ZodPipeline = 'ZodPipeline'),
    (e.ZodReadonly = 'ZodReadonly');
})(ne || (ne = {}));
const pu = br.create;
Li.create;
qc.create;
Di.create;
zc.create;
Yo.create;
Mc.create;
ba.create;
ja.create;
Vc.create;
_i.create;
gn.create;
Wc.create;
_r.create;
const xS = Ue.create;
Ue.strictCreate;
La.create;
pf.create;
Da.create;
zr.create;
Ba.create;
Zc.create;
Bi.create;
Ro.create;
$a.create;
Ua.create;
zn.create;
za.create;
Xo.create;
Mr.create;
Lr.create;
Mn.create;
Mr.createWithPreprocess;
El.create;
const _S = G.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`,
  hu = G.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,
  mu = G.label`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`,
  gu = G.p`
  color: #a0a0a0;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,
  _h = G.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #333;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`,
  ES = G.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #333;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  width: 100%;
  min-height: 200px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`,
  yu = G.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,
  kS = G.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: #4a90e2;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
  &:hover {
    background: #357abd;
  }
  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,
  SS = xS({
    receipt_id: pu().min(1, 'Receipt ID is required'),
    recipient: pu().min(1, 'Recipient address is required'),
    content: pu().min(1, 'Content is required'),
  });
function CS({ onSubmit: e, isSubmitting: t = !1 }) {
  const {
    register: r,
    handleSubmit: n,
    formState: { errors: i },
  } = Zk({ resolver: Jk(SS) });
  return A.jsxs(_S, {
    onSubmit: n(e),
    children: [
      A.jsxs(hu, {
        children: [
          A.jsx(mu, { children: 'Receipt ID' }),
          A.jsx(gu, { children: 'A unique identifier for this receipt' }),
          A.jsx(_h, {
            ...r('receipt_id'),
            placeholder: 'e.g., REC-001',
            disabled: t,
          }),
          i.receipt_id && A.jsx(yu, { children: i.receipt_id.message }),
        ],
      }),
      A.jsxs(hu, {
        children: [
          A.jsx(mu, { children: 'Recipient Address' }),
          A.jsx(gu, { children: 'The address of the receipt recipient' }),
          A.jsx(_h, {
            ...r('recipient'),
            placeholder: 'Enter recipient address',
            disabled: t,
          }),
          i.recipient && A.jsx(yu, { children: i.recipient.message }),
        ],
      }),
      A.jsxs(hu, {
        children: [
          A.jsx(mu, { children: 'Content' }),
          A.jsx(gu, {
            children: 'Detailed description of the receipt purpose and terms',
          }),
          A.jsx(ES, {
            ...r('content'),
            placeholder:
              'Enter the receipt details, terms, and any relevant information...',
            disabled: t,
          }),
          i.content && A.jsx(yu, { children: i.content.message }),
        ],
      }),
      A.jsx(kS, {
        type: 'submit',
        disabled: t,
        children: t ? 'Creating Receipt...' : 'Create Receipt',
      }),
    ],
  });
}
var ur = ((e) => (
  (e.ADD_RECEIPT = 'add_receipt'),
  (e.GET_CREATED_RECEIPTS = 'get_created_receipts'),
  (e.GET_RECEIVED_RECEIPTS = 'get_received_receipts'),
  (e.ACKNOWLEDGE_RECEIPT = 'acknowledge_receipt'),
  (e.IS_ACKNOWLEDGED = 'is_acknowledged'),
  (e.GET_CREATED_RECEIPT_CONTENTS = 'get_created_receipt_contents'),
  (e.GET_RECEIVED_ACKNOWLEDGED_CONTENTS =
    'get_received_acknowledged_receipt_contents'),
  (e.GET_CREATOR_OF_RECEIPT = 'get_creator_of_receipt'),
  (e.GET_RECIPIENT_OF_RECEIPT = 'get_recipient_of_receipt'),
  e
))(ur || {});
function RS() {
  const e = mk();
  return e ? { authorization: `Bearer ${e}` } : null;
}
function TS() {
  return '/jsonrpc';
}
function Cr() {
  return new z_(ry() ?? '', TS());
}
function Rr() {
  const e = oy(),
    t = RS();
  return t
    ? e
      ? e.executor_public_key === null
        ? { error: { message: 'Failed to get executor public key', code: 500 } }
        : { jwtObject: e, config: { headers: t, timeout: 1e4 } }
      : { error: { message: 'Failed to get JWT token', code: 500 } }
    : { error: { message: 'Failed to create auth headers', code: 500 } };
}
class kl {
  async handleError(t, r, n) {
    if (t && t.code)
      return (await ih(t, Jo)).code === 403
        ? await n(r)
        : { error: await ih(t, Jo) };
  }
  async addReceipt(t) {
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().mutate(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.ADD_RECEIPT,
        argsJson: { ...t, caller: r.executor_public_key },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, t, this.addReceipt)
      : { data: { success: !0 }, error: null };
  }
  async getCreatedReceipts(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().query(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.GET_CREATED_RECEIPTS,
        argsJson: { caller: r.executor_public_key },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, {}, this.getCreatedReceipts)
      : {
          data: {
            acknowledgments:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? {},
          },
          error: null,
        };
  }
  async getReceivedReceipts(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().query(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.GET_RECEIVED_RECEIPTS,
        argsJson: { caller: r.executor_public_key },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, {}, this.getReceivedReceipts)
      : {
          data: {
            acknowledgments:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? {},
          },
          error: null,
        };
  }
  async acknowledgeReceipt(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().mutate(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.ACKNOWLEDGE_RECEIPT,
        argsJson: { ...t, caller: r.executor_public_key },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, t, this.acknowledgeReceipt)
      : {
          data: {
            success: !0,
            content:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? '',
          },
          error: null,
        };
  }
  async isAcknowledged(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().query(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.IS_ACKNOWLEDGED,
        argsJson: { ...t, caller: r.executor_public_key },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, t, this.isAcknowledged)
      : {
          data: {
            is_acknowledged:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? !1,
          },
          error: null,
        };
  }
  async getCreatedReceiptContents(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().query(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.GET_CREATED_RECEIPT_CONTENTS,
        argsJson: { caller: r.executor_public_key },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, t, this.getCreatedReceiptContents)
      : {
          data: {
            contents:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? {},
          },
          error: null,
        };
  }
  async getReceivedAcknowledgedContents(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().query(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.GET_RECEIVED_ACKNOWLEDGED_CONTENTS,
        argsJson: { caller: r.executor_public_key },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, t, this.getReceivedAcknowledgedContents)
      : {
          data: {
            contents:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? {},
          },
          error: null,
        };
  }
  async getCreatorOfReceipt(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().query(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.GET_CREATOR_OF_RECEIPT,
        argsJson: { receipt_id: t.receipt_id },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, t, this.getCreatorOfReceipt)
      : {
          data: {
            creator:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? '',
          },
          error: null,
        };
  }
  async getRecipientOfReceipt(t) {
    var s;
    const { jwtObject: r, config: n, error: i } = Rr();
    if (i) return { error: i };
    const o = await Cr().query(
      {
        contextId: (r == null ? void 0 : r.context_id) ?? kr(),
        method: ur.GET_RECIPIENT_OF_RECEIPT,
        argsJson: { receipt_id: t.receipt_id },
        executorPublicKey: r.executor_public_key,
      },
      n,
    );
    return o != null && o.error
      ? await this.handleError(o.error, t, this.getRecipientOfReceipt)
      : {
          data: {
            recipient:
              ((s = o == null ? void 0 : o.result) == null
                ? void 0
                : s.output) ?? '',
          },
          error: null,
        };
  }
}
const AS = G.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,
  IS = G.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,
  NS = G.div`
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  background: rgba(74, 144, 226, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`,
  PS = G.div`
  height: 1.5rem;
  width: 1.5rem;
  color: #4a90e2;
  &:before {
    content: '📄';
  }
`,
  OS = G.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,
  FS = G.h2`
  color: white;
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: -0.025em;
`,
  bS = G.p`
  color: #a0a0a0;
`,
  jS = G.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
`,
  LS = G.div`
  position: relative;
  padding: 2rem;
`;
function DS() {
  ss();
  const [e, t] = B.useState(!1),
    r = async (n) => {
      t(!0);
      try {
        const i = await new kl().addReceipt({
          receipt_id: n.receipt_id,
          recipient: n.recipient,
          content: n.content,
          caller: '',
        });
        if (i != null && i.error) {
          console.error('Error:', i.error), window.alert(`${i.error.message}`);
          return;
        }
        window.alert('Receipt created successfully!');
      } catch (i) {
        console.error('Error creating receipt:', i),
          window.alert('Failed to create receipt. Please try again.');
      } finally {
        t(!1);
      }
    };
  return A.jsxs(AS, {
    children: [
      A.jsxs(IS, {
        children: [
          A.jsx(NS, { children: A.jsx(PS, {}) }),
          A.jsxs(OS, {
            children: [
              A.jsx(FS, { children: 'Create Receipt' }),
              A.jsx(bS, {
                children: 'Create a new receipt for acknowledgment',
              }),
            ],
          }),
        ],
      }),
      A.jsx(jS, {
        children: A.jsx(LS, {
          children: A.jsx(CS, { onSubmit: r, isSubmitting: e }),
        }),
      }),
    ],
  });
}
const BS = G.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`,
  $S = G.span`
  font-size: 2rem;
  margin-bottom: 1rem;
`,
  US = G.h3`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
`,
  zS = G.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;
function Ei({ icon: e, title: t, description: r }) {
  return A.jsxs(BS, {
    children: [
      A.jsx($S, { children: e }),
      A.jsx(US, { children: t }),
      A.jsx(zS, { children: r }),
    ],
  });
}
const MS = G.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,
  VS = G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,
  WS = G.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  margin: 0;
`,
  HS = G.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background: ${(e) => (e.isAcknowledged ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)')};
  color: ${(e) => (e.isAcknowledged ? 'rgb(34, 197, 94)' : 'rgb(234, 179, 8)')};
`,
  ZS = G.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,
  qS = G.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
function KS({ receipt: e }) {
  return A.jsxs(MS, {
    children: [
      A.jsxs(VS, {
        children: [
          A.jsxs(WS, { children: ['Receipt #', e.id] }),
          A.jsx(HS, {
            isAcknowledged: e.isAcknowledged,
            children: e.isAcknowledged ? 'Acknowledged' : 'Pending',
          }),
        ],
      }),
      A.jsx(ZS, { children: e.content }),
      A.jsxs(qS, { children: ['To: ', e.recipientAddress] }),
    ],
  });
}
const vu = G.aside`
  position: fixed;
  inset-block: 0;
  left: 0;
  z-index: 30;
  width: 18rem;
  transform: translateX(${(e) => (e.isOpen ? '0' : '-100%')});
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease-in-out;

  @media (min-width: 1024px) {
    position: relative;
    transform: none;
  }
`,
  wu = G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,
  xu = G.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin: 0;
`,
  GS = G.div`
  height: calc(100vh - 10rem);
  overflow-y: auto;
  padding-block: 1rem;
  margin-right: -0.5rem;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.25rem;
  }
`,
  JS = G.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
function QS({ isOpen: e }) {
  const [t, r] = B.useState([]),
    [n, i] = B.useState(!0),
    [o, s] = B.useState(null);
  return (
    B.useEffect(() => {
      let a = !0;
      async function u() {
        try {
          i(!0), s(null);
          const f = new kl(),
            d = await f.getCreatedReceipts({ caller: '' });
          if (!a) return;
          if (d != null && d.error) throw new Error(d.error.message);
          const h = await f.getCreatedReceiptContents({ caller: '' });
          if (!a) return;
          if (h != null && h.error) throw new Error(h.error.message);
          const w = {};
          for (const x of Object.keys(d.data.acknowledgments)) {
            const E = await f.getRecipientOfReceipt({ receipt_id: x });
            if (E != null && E.error) {
              console.error(
                `Failed to fetch recipient for receipt ${x}:`,
                E.error,
              );
              continue;
            }
            w[x] = E.data.recipient;
          }
          const S = Object.entries(d.data.acknowledgments).map(([x, E]) => ({
            id: x,
            recipientAddress: w[x] || 'Unknown',
            content: h.data.contents[x] || '',
            isAcknowledged: E,
          }));
          a && r(S);
        } catch (f) {
          if (a) {
            const d =
              f instanceof Error ? f.message : 'Failed to fetch receipts';
            s(d), console.error('Failed to fetch receipts:', f);
          }
        } finally {
          a && i(!1);
        }
      }
      return (
        u(),
        () => {
          a = !1;
        }
      );
    }, []),
    o
      ? A.jsxs(vu, {
          isOpen: e,
          children: [
            A.jsx(wu, {
              children: A.jsx(xu, { children: 'Created Receipts' }),
            }),
            A.jsx(Ei, {
              icon: '⚠️',
              title: 'Error loading receipts',
              description: o,
            }),
          ],
        })
      : n
        ? A.jsxs(vu, {
            isOpen: e,
            children: [
              A.jsx(wu, {
                children: A.jsx(xu, { children: 'Created Receipts' }),
              }),
              A.jsx(Ei, {
                icon: '⌛',
                title: 'Loading receipts',
                description: 'Please wait while we fetch your receipts...',
              }),
            ],
          })
        : A.jsxs(vu, {
            isOpen: e,
            children: [
              A.jsx(wu, {
                children: A.jsx(xu, { children: 'Created Receipts' }),
              }),
              A.jsx(GS, {
                children:
                  t.length === 0
                    ? A.jsx(Ei, {
                        icon: '📄',
                        title: 'No receipts created',
                        description: 'Create a new receipt to get started',
                      })
                    : A.jsx(JS, {
                        children: t.map((a) => A.jsx(KS, { receipt: a }, a.id)),
                      }),
              }),
            ],
          })
  );
}
const YS = G.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,
  XS = G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,
  eC = G.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  margin: 0;
`,
  tC = G.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background: ${(e) => (e.isAcknowledged ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)')};
  color: ${(e) => (e.isAcknowledged ? 'rgb(34, 197, 94)' : 'rgb(234, 179, 8)')};
`,
  rC = G.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,
  nC = G.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`,
  iC = G.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background: rgba(34, 197, 94, 0.2);
  color: rgb(34, 197, 94);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(34, 197, 94, 0.3);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }
`;
function oC({ receipt: e }) {
  const t = async () => {
    try {
      const n = await new kl().acknowledgeReceipt({
        caller: '',
        receipt_id: e.id,
      });
      if (n != null && n.error) {
        console.error('Error:', n.error), window.alert(`${n.error.message}`);
        return;
      }
      window.alert('Receipt acknowledged successfully!'),
        window.location.reload();
    } catch (r) {
      console.error('Failed to acknowledge receipt:', r),
        window.alert('Failed to acknowledge receipt. Please try again.');
    }
  };
  return A.jsxs(YS, {
    children: [
      A.jsxs(XS, {
        children: [
          A.jsxs(eC, { children: ['Receipt #', e.id] }),
          A.jsx(tC, {
            isAcknowledged: e.isAcknowledged,
            children: e.isAcknowledged ? 'Acknowledged' : 'Pending',
          }),
        ],
      }),
      A.jsx(rC, { children: e.content }),
      A.jsxs(nC, { children: ['From: ', e.senderAddress] }),
      !e.isAcknowledged &&
        A.jsx(iC, { onClick: t, children: 'Acknowledge Receipt' }),
    ],
  });
}
const _u = G.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
`,
  Eu = G.div`
  margin-bottom: 2rem;
`,
  ku = G.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
`,
  Su = G.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`,
  sC = G.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
`;
function aC() {
  const [e, t] = B.useState([]),
    [r, n] = B.useState(!0),
    [i, o] = B.useState(null);
  return (
    B.useEffect(() => {
      let s = !0;
      async function a() {
        try {
          n(!0), o(null);
          const u = new kl(),
            f = await u.getReceivedReceipts({ caller: '' });
          if (!s) return;
          if (f != null && f.error) throw new Error(f.error.message);
          const d = await u.getReceivedAcknowledgedContents({ caller: '' });
          if (!s) return;
          if (d != null && d.error) throw new Error(d.error.message);
          const h = {};
          for (const S of Object.keys(f.data.acknowledgments)) {
            const x = await u.getCreatorOfReceipt({ receipt_id: S });
            if (x != null && x.error) {
              console.error(
                `Failed to fetch creator for receipt ${S}:`,
                x.error,
              );
              continue;
            }
            h[S] = x.data.creator;
          }
          const w = Object.entries(f.data.acknowledgments).map(([S, x]) => ({
            id: S,
            senderAddress: h[S] || 'Unknown',
            content: (x && d.data.contents[S]) || '',
            isAcknowledged: x,
          }));
          s && t(w);
        } catch (u) {
          if (s) {
            const f =
              u instanceof Error ? u.message : 'Failed to fetch receipts';
            o(f), console.error('Failed to fetch receipts:', u);
          }
        } finally {
          s && n(!1);
        }
      }
      return (
        a(),
        () => {
          s = !1;
        }
      );
    }, []),
    i
      ? A.jsxs(_u, {
          children: [
            A.jsxs(Eu, {
              children: [
                A.jsx(ku, { children: 'Received Receipts' }),
                A.jsx(Su, {
                  children: 'View and acknowledge receipts sent to you',
                }),
              ],
            }),
            A.jsx(Ei, {
              icon: '⚠️',
              title: 'Error loading receipts',
              description: i,
            }),
          ],
        })
      : r
        ? A.jsxs(_u, {
            children: [
              A.jsxs(Eu, {
                children: [
                  A.jsx(ku, { children: 'Received Receipts' }),
                  A.jsx(Su, {
                    children: 'View and acknowledge receipts sent to you',
                  }),
                ],
              }),
              A.jsx(Ei, {
                icon: '⌛',
                title: 'Loading receipts',
                description: 'Please wait while we fetch your receipts...',
              }),
            ],
          })
        : A.jsxs(_u, {
            children: [
              A.jsxs(Eu, {
                children: [
                  A.jsx(ku, { children: 'Received Receipts' }),
                  A.jsx(Su, {
                    children: 'View and acknowledge receipts sent to you',
                  }),
                ],
              }),
              e.length === 0
                ? A.jsx(Ei, {
                    icon: '📬',
                    title: 'No receipts received',
                    description: 'Receipts sent to you will appear here',
                  })
                : A.jsx(sC, {
                    children: e.map((s) => A.jsx(oC, { receipt: s }, s.id)),
                  }),
            ],
          })
  );
}
const lC = G.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d);
`,
  uC = G.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 40;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
function cC() {
  const [e, t] = B.useState(!1);
  return A.jsxs(lC, {
    children: [
      A.jsx(uC, { onClick: () => t(!e), children: e ? '✕' : '☰' }),
      A.jsx(QS, { isOpen: e }),
      A.jsx(aC, {}),
    ],
  });
}
const dC = G.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`,
  fC = G.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 4rem;
  align-items: center;
  padding: 0 1rem;
`,
  pC = G(Wd)`
  margin-right: 2rem;
  display: none;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  @media (min-width: 768px) {
    display: flex;
  }
`,
  hC = G.span`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  background: linear-gradient(to right, #38bdf8, #8b5cf6);
  -webkit-background-clip: text;
  color: transparent;
`,
  mC = G.div`
  display: flex;
  gap: 1.5rem;
`,
  Eh = G(Wd)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
  color: ${(e) => (e.$isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.6)')};
  font-weight: ${(e) => (e.$isActive ? '500' : '400')};

  &:hover {
    color: #38bdf8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
function gC() {
  const e = Vi();
  return A.jsx(dC, {
    children: A.jsxs(fC, {
      children: [
        A.jsx(pC, {
          to: '/home',
          children: A.jsx(hC, { children: 'Privack' }),
        }),
        A.jsxs(mC, {
          children: [
            A.jsxs(Eh, {
              to: '/dashboard',
              $isActive: e.pathname === '/dashboard',
              children: [
                A.jsxs('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  children: [
                    A.jsx('rect', {
                      width: '7',
                      height: '9',
                      x: '3',
                      y: '3',
                      rx: '1',
                    }),
                    A.jsx('rect', {
                      width: '7',
                      height: '5',
                      x: '14',
                      y: '3',
                      rx: '1',
                    }),
                    A.jsx('rect', {
                      width: '7',
                      height: '9',
                      x: '14',
                      y: '12',
                      rx: '1',
                    }),
                    A.jsx('rect', {
                      width: '7',
                      height: '5',
                      x: '3',
                      y: '16',
                      rx: '1',
                    }),
                  ],
                }),
                A.jsx('span', { children: 'Dashboard' }),
              ],
            }),
            A.jsxs(Eh, {
              to: '/create',
              $isActive: e.pathname === '/create',
              children: [
                A.jsxs('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  children: [
                    A.jsx('circle', { cx: '12', cy: '12', r: '10' }),
                    A.jsx('path', { d: 'M12 8v8' }),
                    A.jsx('path', { d: 'M8 12h8' }),
                  ],
                }),
                A.jsx('span', { children: 'Create' }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function yC() {
  const e = Vi(),
    t = ['/home', '/create', '/dashboard'].includes(e.pathname);
  return A.jsxs(A.Fragment, {
    children: [
      t && A.jsx(gC, {}),
      A.jsxs($w, {
        children: [
          A.jsx(Xn, { path: '/', element: A.jsx(gk, {}) }),
          A.jsx(Xn, { path: '/auth', element: A.jsx(vk, {}) }),
          A.jsx(Xn, { path: '/home', element: A.jsx(Rk, {}) }),
          A.jsx(Xn, { path: '/create', element: A.jsx(DS, {}) }),
          A.jsx(Xn, { path: '/dashboard', element: A.jsx(cC, {}) }),
        ],
      }),
    ],
  });
}
function vC() {
  return A.jsx(nk, {
    getNodeUrl: Jo,
    children: A.jsx(Zw, { basename: '/', children: A.jsx(yC, {}) }),
  });
}
const wC = Cu.createRoot(document.getElementById('root'));
wC.render(A.jsxs(ie.StrictMode, { children: [A.jsx(vC, {}), ','] }));
