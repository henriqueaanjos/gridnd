var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && i(o, t, r[t]);
  if (e)
    for (var t of e(r))
      h.call(r, t) && i(o, t, r[t]);
  return o;
}, a = (o, r) => p(o, s(r));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Prohibit.mjs";
const n = b((o, r) => /* @__PURE__ */ R.createElement(d, a(m({ ref: r }, o), { weights: l })));
n.displayName = "Prohibit";
export {
  n as Prohibit
};
