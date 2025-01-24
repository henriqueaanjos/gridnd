var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import G from "../defs/Gps.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(w, p(a({ ref: e }, o), { weights: G })));
I.displayName = "Gps";
export {
  I as Gps
};
