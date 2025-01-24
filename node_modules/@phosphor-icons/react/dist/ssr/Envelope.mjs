var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, s(e));
import c, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Envelope.mjs";
const v = E((o, e) => /* @__PURE__ */ c.createElement(R, p(a({ ref: e }, o), { weights: d })));
v.displayName = "Envelope";
export {
  v as Envelope
};
