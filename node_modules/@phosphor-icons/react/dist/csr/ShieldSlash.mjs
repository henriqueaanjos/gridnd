var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    h.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => l(o, f(e));
import c, { forwardRef as d } from "react";
import S from "../lib/IconBase.mjs";
import n from "../defs/ShieldSlash.mjs";
const w = d((o, e) => /* @__PURE__ */ c.createElement(S, i(m({ ref: e }, o), { weights: n })));
w.displayName = "ShieldSlash";
export {
  w as ShieldSlash
};
