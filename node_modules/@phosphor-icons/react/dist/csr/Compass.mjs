var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, s = (e, o) => {
  for (var m in o || (o = {}))
    c.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      n.call(o, m) && a(e, m, o[m]);
  return e;
}, t = (e, o) => f(e, i(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Compass.mjs";
const I = l((e, o) => /* @__PURE__ */ d.createElement(w, t(s({ ref: o }, e), { weights: C })));
I.displayName = "Compass";
export {
  I as Compass
};
