var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      R.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, i(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/UserFocus.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(n, a(m({ ref: e }, r), { weights: u })));
w.displayName = "UserFocus";
export {
  w as UserFocus
};
