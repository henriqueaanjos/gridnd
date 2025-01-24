var n = Object.defineProperty, l = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && i(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && i(o, r, e[r]);
  return o;
}, a = (o, e) => l(o, p(e));
import c, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AlignCenterHorizontalSimple.mjs";
const z = g((o, e) => /* @__PURE__ */ c.createElement(d, a(m({ ref: e }, o), { weights: w })));
z.displayName = "AlignCenterHorizontalSimple";
export {
  z as AlignCenterHorizontalSimple
};
