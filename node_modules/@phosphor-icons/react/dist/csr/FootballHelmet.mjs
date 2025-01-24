var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      c.call(e, t) && r(o, t, e[t]);
  return o;
}, l = (o, e) => i(o, p(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FootballHelmet.mjs";
const F = b((o, e) => /* @__PURE__ */ n.createElement(d, l(a({ ref: e }, o), { weights: w })));
F.displayName = "FootballHelmet";
export {
  F as FootballHelmet
};
