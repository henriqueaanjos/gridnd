var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      h.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/UsersThree.mjs";
const I = d((r, e) => /* @__PURE__ */ n.createElement(l, a(m({ ref: e }, r), { weights: w })));
I.displayName = "UsersThree";
export {
  I as UsersThree
};
