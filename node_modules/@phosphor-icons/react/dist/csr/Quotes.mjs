var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && m(o, t, e[t]);
  return o;
}, s = (o, e) => i(o, p(e));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Quotes.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(u, s(a({ ref: e }, o), { weights: w })));
I.displayName = "Quotes";
export {
  I as Quotes
};
