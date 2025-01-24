var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      R.call(e, t) && m(o, t, e[t]);
  return o;
}, s = (o, e) => i(o, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Quotes.mjs";
const w = l((o, e) => /* @__PURE__ */ d.createElement(n, s(a({ ref: e }, o), { weights: u })));
w.displayName = "Quotes";
export {
  w as Quotes
};
