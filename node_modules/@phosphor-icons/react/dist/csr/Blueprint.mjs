var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, n(e));
import l, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Blueprint.mjs";
const w = B((r, e) => /* @__PURE__ */ l.createElement(d, i(a({ ref: e }, r), { weights: u })));
w.displayName = "Blueprint";
export {
  w as Blueprint
};
