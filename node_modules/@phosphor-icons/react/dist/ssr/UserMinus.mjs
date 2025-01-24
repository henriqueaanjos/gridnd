var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import u from "../defs/UserMinus.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, a(m({ ref: e }, r), { weights: u })));
w.displayName = "UserMinus";
export {
  w as UserMinus
};
