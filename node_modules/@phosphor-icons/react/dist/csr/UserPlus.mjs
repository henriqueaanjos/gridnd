var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/UserPlus.mjs";
const I = d((r, e) => /* @__PURE__ */ n.createElement(u, a(m({ ref: e }, r), { weights: w })));
I.displayName = "UserPlus";
export {
  I as UserPlus
};
