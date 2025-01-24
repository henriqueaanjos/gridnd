var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? c(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    p.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      d.call(o, a) && e(r, a, o[a]);
  return r;
}, s = (r, o) => f(r, i(o));
import n, { forwardRef as B } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Broadcast.mjs";
const I = B((r, o) => /* @__PURE__ */ n.createElement(l, s(m({ ref: o }, r), { weights: w })));
I.displayName = "Broadcast";
export {
  I as Broadcast
};
