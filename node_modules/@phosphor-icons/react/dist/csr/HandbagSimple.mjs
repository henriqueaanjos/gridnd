var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, t = (a, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && r(a, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && r(a, m, e[m]);
  return a;
}, i = (a, e) => f(a, n(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import b from "../defs/HandbagSimple.mjs";
const w = l((a, e) => /* @__PURE__ */ d.createElement(g, i(t({ ref: e }, a), { weights: b })));
w.displayName = "HandbagSimple";
export {
  w as HandbagSimple
};
