var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Sliders.mjs";
const R = n((r, e) => /* @__PURE__ */ l.createElement(w, i(a({ ref: e }, r), { weights: I })));
R.displayName = "Sliders";
export {
  R as Sliders
};
