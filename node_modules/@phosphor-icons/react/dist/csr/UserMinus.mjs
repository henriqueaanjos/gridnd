var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, n(e));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/UserMinus.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(u, a(m({ ref: e }, r), { weights: w })));
I.displayName = "UserMinus";
export {
  I as UserMinus
};
