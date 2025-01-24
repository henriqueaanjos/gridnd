var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, i = (o, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && r(o, t, e[t]);
  if (a)
    for (var t of a(e))
      p.call(e, t) && r(o, t, e[t]);
  return o;
}, m = (o, e) => d(o, f(e));
import c, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import D from "../defs/FileDashed.mjs";
const F = h((o, e) => /* @__PURE__ */ c.createElement(n, m(i({ ref: e }, o), { weights: D })));
F.displayName = "FileDashed";
export {
  F as FileDashed,
  F as FileDotted
};
