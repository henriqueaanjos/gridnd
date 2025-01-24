var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    p.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      c.call(o, m) && t(e, m, o[m]);
  return e;
}, s = (e, o) => i(e, n(o));
import l, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Columns.mjs";
const C = d((e, o) => /* @__PURE__ */ l.createElement(u, s(a({ ref: o }, e), { weights: w })));
C.displayName = "Columns";
export {
  C as Columns
};
