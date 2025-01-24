var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      n.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/Translate.mjs";
const S = R((r, e) => /* @__PURE__ */ c.createElement(d, s(m({ ref: e }, r), { weights: w })));
S.displayName = "Translate";
export {
  S as Translate
};
