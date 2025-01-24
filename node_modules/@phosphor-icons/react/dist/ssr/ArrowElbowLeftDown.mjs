var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, w = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      l.call(o, e) && m(r, e, o[e]);
  return r;
}, a = (r, o) => i(r, p(o));
import n, { forwardRef as c } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/ArrowElbowLeftDown.mjs";
const b = c((r, o) => /* @__PURE__ */ n.createElement(E, a(w({ ref: o }, r), { weights: R })));
b.displayName = "ArrowElbowLeftDown";
export {
  b as ArrowElbowLeftDown
};
