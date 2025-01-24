var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, s(e));
import N, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/WifiNone.mjs";
const w = R((o, e) => /* @__PURE__ */ N.createElement(d, a(m({ ref: e }, o), { weights: l })));
w.displayName = "WifiNone";
export {
  w as WifiNone
};
