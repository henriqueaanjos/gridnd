var f = Object.defineProperty, h = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => h(r, p(e));
import l, { forwardRef as n } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/ShieldChevron.mjs";
const R = n((r, e) => /* @__PURE__ */ l.createElement(S, i(a({ ref: e }, r), { weights: c })));
R.displayName = "ShieldChevron";
export {
  R as ShieldChevron
};
