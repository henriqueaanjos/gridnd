var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      c.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => f(e, p(r));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Warning.mjs";
const w = R((e, r) => /* @__PURE__ */ g.createElement(d, i(m({ ref: r }, e), { weights: l })));
w.displayName = "Warning";
export {
  w as Warning
};
