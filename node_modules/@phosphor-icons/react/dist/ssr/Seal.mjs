var s = Object.defineProperty, f = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && t(a, r, e[r]);
  return a;
}, i = (a, e) => f(a, l(e));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Seal.mjs";
const w = R((a, e) => /* @__PURE__ */ S.createElement(d, i(m({ ref: e }, a), { weights: n })));
w.displayName = "Seal";
export {
  w as CircleWavy,
  w as Seal
};
