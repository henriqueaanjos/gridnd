var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, a = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(t, e, r[e]);
  if (o)
    for (var e of o(r))
      h.call(r, e) && m(t, e, r[e]);
  return t;
}, i = (t, r) => p(t, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/TShirt.mjs";
const I = d((t, r) => /* @__PURE__ */ n.createElement(l, i(a({ ref: r }, t), { weights: w })));
I.displayName = "TShirt";
export {
  I as TShirt
};
