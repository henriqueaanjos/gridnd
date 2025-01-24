var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import g, { forwardRef as x } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Hexagon.mjs";
const l = x((o, e) => /* @__PURE__ */ g.createElement(R, f(m({ ref: e }, o), { weights: d })));
l.displayName = "Hexagon";
export {
  l as Hexagon
};
