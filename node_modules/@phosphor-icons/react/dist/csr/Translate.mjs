var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, n(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Translate.mjs";
const R = d((r, e) => /* @__PURE__ */ l.createElement(w, s(m({ ref: e }, r), { weights: I })));
R.displayName = "Translate";
export {
  R as Translate
};
