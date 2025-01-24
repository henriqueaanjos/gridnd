var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      l.call(r, e) && t(a, e, r[e]);
  return a;
}, s = (a, r) => i(a, p(r));
import h, { forwardRef as n } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/EarSlash.mjs";
const w = n((a, r) => /* @__PURE__ */ h.createElement(E, s(m({ ref: r }, a), { weights: d })));
w.displayName = "EarSlash";
export {
  w as EarSlash
};
