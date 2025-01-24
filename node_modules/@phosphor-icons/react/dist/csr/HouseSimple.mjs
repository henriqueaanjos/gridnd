var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => s(o, f(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/HouseSimple.mjs";
const H = d((o, e) => /* @__PURE__ */ n.createElement(u, i(a({ ref: e }, o), { weights: w })));
H.displayName = "HouseSimple";
export {
  H as HouseSimple
};
