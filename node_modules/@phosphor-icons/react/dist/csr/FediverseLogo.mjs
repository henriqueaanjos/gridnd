var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import g, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import v from "../defs/FediverseLogo.mjs";
const w = n((o, e) => /* @__PURE__ */ g.createElement(l, i(a({ ref: e }, o), { weights: v })));
w.displayName = "FediverseLogo";
export {
  w as FediverseLogo
};
