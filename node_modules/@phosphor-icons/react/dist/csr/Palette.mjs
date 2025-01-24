var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Palette.mjs";
const P = d((t, e) => /* @__PURE__ */ n.createElement(w, f(m({ ref: e }, t), { weights: I })));
P.displayName = "Palette";
export {
  P as Palette
};
