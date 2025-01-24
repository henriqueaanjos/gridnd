var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => n(t, p(e));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Vignette.mjs";
const I = d((t, e) => /* @__PURE__ */ g.createElement(l, i(a({ ref: e }, t), { weights: w })));
I.displayName = "Vignette";
export {
  I as Vignette
};
