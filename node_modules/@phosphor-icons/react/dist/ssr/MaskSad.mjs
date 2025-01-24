var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    d.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      S.call(a, r) && t(e, r, a[r]);
  return e;
}, s = (e, a) => i(e, p(a));
import c, { forwardRef as R } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/MaskSad.mjs";
const n = R((e, a) => /* @__PURE__ */ c.createElement(k, s(m({ ref: a }, e), { weights: l })));
n.displayName = "MaskSad";
export {
  n as MaskSad
};
