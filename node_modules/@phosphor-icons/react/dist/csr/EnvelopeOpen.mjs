var n = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (p)
    for (var r of p(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, i(e));
import l, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/EnvelopeOpen.mjs";
const w = E((o, e) => /* @__PURE__ */ l.createElement(d, a(m({ ref: e }, o), { weights: v })));
w.displayName = "EnvelopeOpen";
export {
  w as EnvelopeOpen
};
