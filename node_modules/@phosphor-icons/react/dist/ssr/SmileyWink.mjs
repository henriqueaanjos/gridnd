var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (i)
    for (var r of i(e))
      n.call(e, r) && o(m, r, e[r]);
  return m;
}, a = (m, e) => p(m, s(e));
import S, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/SmileyWink.mjs";
const d = c((m, e) => /* @__PURE__ */ S.createElement(y, a(t({ ref: e }, m), { weights: R })));
d.displayName = "SmileyWink";
export {
  d as SmileyWink
};
