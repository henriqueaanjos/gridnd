var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Tilde.mjs";
const S = R((r, e) => /* @__PURE__ */ c.createElement(n, i(a({ ref: e }, r), { weights: w })));
S.displayName = "Tilde";
export {
  S as Tilde
};
