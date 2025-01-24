var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => i(r, s(e));
import n, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import B from "../defs/ArrowBendDoubleUpLeft.mjs";
const R = w((r, e) => /* @__PURE__ */ n.createElement(c, f(a({ ref: e }, r), { weights: B })));
R.displayName = "ArrowBendDoubleUpLeft";
export {
  R as ArrowBendDoubleUpLeft
};
