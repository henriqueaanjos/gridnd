var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (t, e, m) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, a = (t, e) => {
  for (var m in e || (e = {}))
    f.call(e, m) && r(t, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && r(t, m, e[m]);
  return t;
}, i = (t, e) => s(t, c(e));
import S, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/SuitcaseSimple.mjs";
const w = n((t, e) => /* @__PURE__ */ S.createElement(d, i(a({ ref: e }, t), { weights: u })));
w.displayName = "SuitcaseSimple";
export {
  w as SuitcaseSimple
};
