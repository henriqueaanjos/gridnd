var n = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    g.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      p.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => l(o, f(e));
import s, { forwardRef as c } from "react";
import R from "../lib/IconBase.mjs";
import B from "../defs/BellRinging.mjs";
const d = c((o, e) => /* @__PURE__ */ s.createElement(R, a(m({ ref: e }, o), { weights: B })));
d.displayName = "BellRinging";
export {
  d as BellRinging
};
