var p = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => i(r, n(e));
import d, { forwardRef as w } from "react";
import B from "../lib/IconBase.mjs";
import l from "../defs/ArrowBendUpLeft.mjs";
const A = w((r, e) => /* @__PURE__ */ d.createElement(B, f(a({ ref: e }, r), { weights: l })));
A.displayName = "ArrowBendUpLeft";
export {
  A as ArrowBendUpLeft
};
