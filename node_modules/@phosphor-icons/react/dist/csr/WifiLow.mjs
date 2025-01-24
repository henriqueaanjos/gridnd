var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (i)
    for (var r of i(o))
      w.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => p(e, s(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import I from "../defs/WifiLow.mjs";
const L = d((e, o) => /* @__PURE__ */ n.createElement(l, a(m({ ref: o }, e), { weights: I })));
L.displayName = "WifiLow";
export {
  L as WifiLow
};
