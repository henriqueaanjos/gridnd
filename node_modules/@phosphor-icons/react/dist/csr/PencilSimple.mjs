var p = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (m, e, o) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && i(m, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && i(m, o, e[o]);
  return m;
}, a = (m, e) => c(m, l(e));
import s, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/PencilSimple.mjs";
const P = d((m, e) => /* @__PURE__ */ s.createElement(w, a(t({ ref: e }, m), { weights: I })));
P.displayName = "PencilSimple";
export {
  P as PencilSimple
};
