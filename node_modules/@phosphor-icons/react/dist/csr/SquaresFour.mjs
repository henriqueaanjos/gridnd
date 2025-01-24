var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      u.call(r, o) && t(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/SquaresFour.mjs";
const w = d((e, r) => /* @__PURE__ */ n.createElement(l, s(m({ ref: r }, e), { weights: q })));
w.displayName = "SquaresFour";
export {
  w as SquaresFour
};
