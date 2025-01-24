var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && a(r, t, e[t]);
  return r;
}, f = (r, e) => n(r, p(e));
import w, { forwardRef as L } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ArrowFatLineLeft.mjs";
const A = L((r, e) => /* @__PURE__ */ w.createElement(d, f(m({ ref: e }, r), { weights: l })));
A.displayName = "ArrowFatLineLeft";
export {
  A as ArrowFatLineLeft
};
