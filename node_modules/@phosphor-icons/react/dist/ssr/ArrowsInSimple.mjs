var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    l.call(r, o) && t(e, o, r[o]);
  if (m)
    for (var o of m(r))
      n.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => s(e, f(r));
import w, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import I from "../defs/ArrowsInSimple.mjs";
const R = S((e, r) => /* @__PURE__ */ w.createElement(c, i(a({ ref: r }, e), { weights: I })));
R.displayName = "ArrowsInSimple";
export {
  R as ArrowsInSimple
};
