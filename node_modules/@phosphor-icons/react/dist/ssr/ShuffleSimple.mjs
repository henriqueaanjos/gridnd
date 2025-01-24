var i = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    S.call(e, r) && o(m, r, e[r]);
  if (f)
    for (var r of f(e))
      s.call(e, r) && o(m, r, e[r]);
  return m;
}, a = (m, e) => p(m, l(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ShuffleSimple.mjs";
const n = h((m, e) => /* @__PURE__ */ c.createElement(R, a(t({ ref: e }, m), { weights: d })));
n.displayName = "ShuffleSimple";
export {
  n as ShuffleSimple
};
