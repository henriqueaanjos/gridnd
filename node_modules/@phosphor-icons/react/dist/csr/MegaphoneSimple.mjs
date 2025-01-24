var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, p = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(o, m, e[m]);
  if (r)
    for (var m of r(e))
      c.call(e, m) && a(o, m, e[m]);
  return o;
}, t = (o, e) => f(o, n(e));
import l, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/MegaphoneSimple.mjs";
const w = g((o, e) => /* @__PURE__ */ l.createElement(h, t(p({ ref: e }, o), { weights: d })));
w.displayName = "MegaphoneSimple";
export {
  w as MegaphoneSimple
};
