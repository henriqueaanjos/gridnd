var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      l.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => i(o, s(e));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Copyleft.mjs";
const C = y((o, e) => /* @__PURE__ */ n.createElement(d, f(a({ ref: e }, o), { weights: w })));
C.displayName = "Copyleft";
export {
  C as Copyleft
};
