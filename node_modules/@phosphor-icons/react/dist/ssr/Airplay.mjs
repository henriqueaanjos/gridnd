var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    l.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      c.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => f(e, s(r));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Airplay.mjs";
const w = R((e, r) => /* @__PURE__ */ y.createElement(d, i(m({ ref: r }, e), { weights: n })));
w.displayName = "Airplay";
export {
  w as Airplay
};
