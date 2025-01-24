var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Plugs.mjs";
const w = n((o, e) => /* @__PURE__ */ g.createElement(d, s(a({ ref: e }, o), { weights: u })));
w.displayName = "Plugs";
export {
  w as Plugs
};
