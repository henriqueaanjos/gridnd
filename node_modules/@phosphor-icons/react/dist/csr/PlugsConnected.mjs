var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      p.call(e, t) && m(o, t, e[t]);
  return o;
}, n = (o, e) => c(o, f(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import u from "../defs/PlugsConnected.mjs";
const w = l((o, e) => /* @__PURE__ */ d.createElement(g, n(a({ ref: e }, o), { weights: u })));
w.displayName = "PlugsConnected";
export {
  w as PlugsConnected
};
