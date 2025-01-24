var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      l.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => s(o, f(r));
import w, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import A from "../defs/ArrowsSplit.mjs";
const I = n((o, r) => /* @__PURE__ */ w.createElement(d, i(a({ ref: r }, o), { weights: A })));
I.displayName = "ArrowsSplit";
export {
  I as ArrowsSplit
};
