var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, a, r) => a in o ? i(o, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[a] = r, t = (o, a) => {
  for (var r in a || (a = {}))
    s.call(a, r) && m(o, r, a[r]);
  if (e)
    for (var r of e(a))
      c.call(a, r) && m(o, r, a[r]);
  return o;
}, f = (o, a) => n(o, p(a));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Panorama.mjs";
const P = l((o, a) => /* @__PURE__ */ d.createElement(w, f(t({ ref: a }, o), { weights: I })));
P.displayName = "Panorama";
export {
  P as Panorama
};
