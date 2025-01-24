var i = Object.defineProperty, p = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, n(e));
import d, { forwardRef as w } from "react";
import l from "../lib/IconBase.mjs";
import H from "../defs/HandSwipeLeft.mjs";
const I = w((t, e) => /* @__PURE__ */ d.createElement(l, f(m({ ref: e }, t), { weights: H })));
I.displayName = "HandSwipeLeft";
export {
  I as HandSwipeLeft
};
