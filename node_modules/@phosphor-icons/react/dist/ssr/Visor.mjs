var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      R.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, p(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Visor.mjs";
const S = l((o, r) => /* @__PURE__ */ d.createElement(n, i(a({ ref: r }, o), { weights: w })));
S.displayName = "Visor";
export {
  S as Visor
};
