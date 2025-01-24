var l = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (m, e, o) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && i(m, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && i(m, o, e[o]);
  return m;
}, a = (m, e) => f(m, n(e));
import c, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Windmill.mjs";
const R = d((m, e) => /* @__PURE__ */ c.createElement(w, a(t({ ref: e }, m), { weights: I })));
R.displayName = "Windmill";
export {
  R as Windmill
};
