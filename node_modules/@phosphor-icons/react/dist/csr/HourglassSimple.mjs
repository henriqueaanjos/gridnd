var i = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, s = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, t = (o, e) => p(o, l(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/HourglassSimple.mjs";
const w = n((o, e) => /* @__PURE__ */ g.createElement(d, t(s({ ref: e }, o), { weights: u })));
w.displayName = "HourglassSimple";
export {
  w as HourglassSimple
};
