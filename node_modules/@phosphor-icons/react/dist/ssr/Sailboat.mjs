var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var r = (o, a, t) => a in o ? f(o, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[a] = t, m = (o, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && r(o, t, a[t]);
  if (e)
    for (var t of e(a))
      S.call(a, t) && r(o, t, a[t]);
  return o;
}, i = (o, a) => p(o, s(a));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Sailboat.mjs";
const n = R((o, a) => /* @__PURE__ */ c.createElement(b, i(m({ ref: a }, o), { weights: d })));
n.displayName = "Sailboat";
export {
  n as Sailboat
};
