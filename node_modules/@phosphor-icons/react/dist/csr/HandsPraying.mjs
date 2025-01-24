var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? n(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && t(a, e, r[e]);
  return a;
}, i = (a, r) => s(a, f(r));
import d, { forwardRef as g } from "react";
import y from "../lib/IconBase.mjs";
import l from "../defs/HandsPraying.mjs";
const w = g((a, r) => /* @__PURE__ */ d.createElement(y, i(m({ ref: r }, a), { weights: l })));
w.displayName = "HandsPraying";
export {
  w as HandsPraying
};
