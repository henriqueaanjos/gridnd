var l = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    g.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      p.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => n(r, f(e));
import s, { forwardRef as R } from "react";
import c from "../lib/SSRBase.mjs";
import B from "../defs/BellRinging.mjs";
const d = R((r, e) => /* @__PURE__ */ s.createElement(c, a(m({ ref: e }, r), { weights: B })));
d.displayName = "BellRinging";
export {
  d as BellRinging
};
