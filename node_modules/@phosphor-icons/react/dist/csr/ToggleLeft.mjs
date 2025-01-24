var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => i(o, p(e));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/ToggleLeft.mjs";
const I = n((o, e) => /* @__PURE__ */ l.createElement(d, f(a({ ref: e }, o), { weights: w })));
I.displayName = "ToggleLeft";
export {
  I as ToggleLeft
};
