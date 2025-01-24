var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, t = (a, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && m(a, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && m(a, e, r[e]);
  return a;
}, l = (a, r) => i(a, p(r));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Parallelogram.mjs";
const I = n((a, r) => /* @__PURE__ */ g.createElement(d, l(t({ ref: r }, a), { weights: w })));
I.displayName = "Parallelogram";
export {
  I as Parallelogram
};
