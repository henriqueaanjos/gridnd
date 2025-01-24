var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, s = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      d.call(e, r) && a(o, r, e[r]);
  return o;
}, t = (o, e) => f(o, p(e));
import l, { forwardRef as u } from "react";
import g from "../lib/IconBase.mjs";
import n from "../defs/HourglassMedium.mjs";
const w = u((o, e) => /* @__PURE__ */ l.createElement(g, t(s({ ref: e }, o), { weights: n })));
w.displayName = "HourglassMedium";
export {
  w as HourglassMedium
};
