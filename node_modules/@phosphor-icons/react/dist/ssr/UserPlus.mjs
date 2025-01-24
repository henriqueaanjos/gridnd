var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/UserPlus.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(n, a(m({ ref: e }, r), { weights: u })));
w.displayName = "UserPlus";
export {
  w as UserPlus
};
