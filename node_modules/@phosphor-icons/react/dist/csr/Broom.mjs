var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (m)
    for (var e of m(o))
      n.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Broom.mjs";
const I = d((r, o) => /* @__PURE__ */ B.createElement(l, f(a({ ref: o }, r), { weights: w })));
I.displayName = "Broom";
export {
  I as Broom
};
