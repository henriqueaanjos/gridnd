var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => n(t, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Tent.mjs";
const R = l((t, e) => /* @__PURE__ */ d.createElement(w, f(a({ ref: e }, t), { weights: I })));
R.displayName = "Tent";
export {
  R as Tent
};
