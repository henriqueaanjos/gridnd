var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && r(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import w, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BowlSteam.mjs";
const I = n((o, e) => /* @__PURE__ */ w.createElement(B, f(a({ ref: e }, o), { weights: d })));
I.displayName = "BowlSteam";
export {
  I as BowlSteam
};
