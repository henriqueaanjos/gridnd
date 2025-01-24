var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, i = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(t, o, e[o]);
  return t;
}, m = (t, e) => f(t, n(e));
import d, { forwardRef as w } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/HandSwipeRight.mjs";
const h = w((t, e) => /* @__PURE__ */ d.createElement(R, m(i({ ref: e }, t), { weights: g })));
h.displayName = "HandSwipeRight";
export {
  h as HandSwipeRight
};
