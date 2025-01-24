var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      l.call(r, o) && t(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CarProfile.mjs";
const I = d((e, r) => /* @__PURE__ */ n.createElement(w, f(m({ ref: r }, e), { weights: C })));
I.displayName = "CarProfile";
export {
  I as CarProfile
};
