var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    w.call(o, r) && t(e, r, o[r]);
  if (i)
    for (var r of i(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => p(e, s(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/WifiLow.mjs";
const L = d((e, o) => /* @__PURE__ */ R.createElement(l, a(m({ ref: o }, e), { weights: n })));
L.displayName = "WifiLow";
export {
  L as WifiLow
};
