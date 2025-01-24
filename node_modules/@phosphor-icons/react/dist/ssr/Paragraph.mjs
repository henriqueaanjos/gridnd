var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      g.call(r, e) && t(a, e, r[e]);
  return a;
}, p = (a, r) => i(a, s(r));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Paragraph.mjs";
const n = R((a, r) => /* @__PURE__ */ h.createElement(d, p(m({ ref: r }, a), { weights: l })));
n.displayName = "Paragraph";
export {
  n as Paragraph
};
