var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    l.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      n.call(o, m) && t(e, m, o[m]);
  return e;
}, s = (e, o) => i(e, p(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import u from "../defs/Columns.mjs";
const w = R((e, o) => /* @__PURE__ */ c.createElement(d, s(a({ ref: o }, e), { weights: u })));
w.displayName = "Columns";
export {
  w as Columns
};
