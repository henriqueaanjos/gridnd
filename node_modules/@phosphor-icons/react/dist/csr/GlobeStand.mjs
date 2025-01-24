var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && a(o, t, e[t]);
  return o;
}, f = (o, e) => n(o, p(e));
import d, { forwardRef as l } from "react";
import b from "../lib/IconBase.mjs";
import w from "../defs/GlobeStand.mjs";
const G = l((o, e) => /* @__PURE__ */ d.createElement(b, f(m({ ref: e }, o), { weights: w })));
G.displayName = "GlobeStand";
export {
  G as GlobeStand
};
