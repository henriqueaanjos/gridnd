var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, n = (o, e) => i(o, p(e));
import d, { forwardRef as w } from "react";
import l from "../lib/IconBase.mjs";
import D from "../defs/TrendDown.mjs";
const I = w((o, e) => /* @__PURE__ */ d.createElement(l, n(a({ ref: e }, o), { weights: D })));
I.displayName = "TrendDown";
export {
  I as TrendDown
};
