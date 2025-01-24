var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && t(e, o, r[o]);
  if (m)
    for (var o of m(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => s(e, f(r));
import l, { forwardRef as w } from "react";
import I from "../lib/IconBase.mjs";
import d from "../defs/ArrowsInSimple.mjs";
const A = w((e, r) => /* @__PURE__ */ l.createElement(I, i(a({ ref: r }, e), { weights: d })));
A.displayName = "ArrowsInSimple";
export {
  A as ArrowsInSimple
};
