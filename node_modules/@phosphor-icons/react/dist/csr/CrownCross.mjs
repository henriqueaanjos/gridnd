var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && t(r, e, o[e]);
  if (s)
    for (var e of s(o))
      c.call(o, e) && t(r, e, o[e]);
  return r;
}, a = (r, o) => i(r, n(o));
import w, { forwardRef as C } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/CrownCross.mjs";
const I = C((r, o) => /* @__PURE__ */ w.createElement(d, a(m({ ref: o }, r), { weights: l })));
I.displayName = "CrownCross";
export {
  I as CrownCross
};
