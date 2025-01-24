var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      n.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Timer.mjs";
const R = l((r, e) => /* @__PURE__ */ d.createElement(w, i(a({ ref: e }, r), { weights: I })));
R.displayName = "Timer";
export {
  R as Timer
};
