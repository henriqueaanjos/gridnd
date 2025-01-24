var i = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      p.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => l(r, c(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/UserCirclePlus.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(n, a(m({ ref: e }, r), { weights: u })));
w.displayName = "UserCirclePlus";
export {
  w as UserCirclePlus
};
