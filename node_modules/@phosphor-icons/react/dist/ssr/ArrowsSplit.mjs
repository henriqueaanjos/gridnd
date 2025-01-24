var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    l.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      w.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => s(o, f(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowsSplit.mjs";
const n = c((o, r) => /* @__PURE__ */ S.createElement(R, i(a({ ref: r }, o), { weights: d })));
n.displayName = "ArrowsSplit";
export {
  n as ArrowsSplit
};
