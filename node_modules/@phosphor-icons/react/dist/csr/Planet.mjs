var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(t, o, e[o]);
  return t;
}, f = (t, e) => n(t, p(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Planet.mjs";
const P = d((t, e) => /* @__PURE__ */ l.createElement(w, f(m({ ref: e }, t), { weights: I })));
P.displayName = "Planet";
export {
  P as Planet
};
