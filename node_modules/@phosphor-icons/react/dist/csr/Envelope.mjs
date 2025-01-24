var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, n(e));
import l, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/Envelope.mjs";
const w = E((o, e) => /* @__PURE__ */ l.createElement(d, p(a({ ref: e }, o), { weights: v })));
w.displayName = "Envelope";
export {
  w as Envelope
};
