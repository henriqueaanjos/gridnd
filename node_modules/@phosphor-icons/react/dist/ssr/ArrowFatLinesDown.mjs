var s = Object.defineProperty, n = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    f.call(r, e) && a(o, e, r[e]);
  if (t)
    for (var e of t(r))
      p.call(r, e) && a(o, e, r[e]);
  return o;
}, i = (o, r) => n(o, w(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowFatLinesDown.mjs";
const A = R((o, r) => /* @__PURE__ */ c.createElement(d, i(m({ ref: r }, o), { weights: l })));
A.displayName = "ArrowFatLinesDown";
export {
  A as ArrowFatLinesDown
};
