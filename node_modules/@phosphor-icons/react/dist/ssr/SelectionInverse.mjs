var s = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      p.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => n(r, c(e));
import l, { forwardRef as S } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/SelectionInverse.mjs";
const d = S((r, e) => /* @__PURE__ */ l.createElement(I, i(a({ ref: e }, r), { weights: R })));
d.displayName = "SelectionInverse";
export {
  d as SelectionInverse
};
