var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import n, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import q from "../defs/Equals.mjs";
const u = E((o, e) => /* @__PURE__ */ n.createElement(d, s(m({ ref: e }, o), { weights: q })));
u.displayName = "Equals";
export {
  u as Equals
};
