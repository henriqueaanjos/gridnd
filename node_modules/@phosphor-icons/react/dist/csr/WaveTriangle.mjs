var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => n(r, p(e));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/WaveTriangle.mjs";
const w = g((r, e) => /* @__PURE__ */ l.createElement(d, i(m({ ref: e }, r), { weights: v })));
w.displayName = "WaveTriangle";
export {
  w as WaveTriangle
};
