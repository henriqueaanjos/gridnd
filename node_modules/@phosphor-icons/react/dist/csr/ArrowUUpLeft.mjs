var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && m(e, o, r[o]);
  return e;
}, f = (e, r) => i(e, s(r));
import U, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ArrowUUpLeft.mjs";
const A = n((e, r) => /* @__PURE__ */ U.createElement(d, f(a({ ref: r }, e), { weights: l })));
A.displayName = "ArrowUUpLeft";
export {
  A as ArrowUUpLeft
};
