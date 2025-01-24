var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (i)
    for (var r of i(e))
      S.call(e, r) && o(m, r, e[r]);
  return m;
}, a = (m, e) => s(m, f(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/FishSimple.mjs";
const n = h((m, e) => /* @__PURE__ */ c.createElement(R, a(t({ ref: e }, m), { weights: d })));
n.displayName = "FishSimple";
export {
  n as FishSimple
};
