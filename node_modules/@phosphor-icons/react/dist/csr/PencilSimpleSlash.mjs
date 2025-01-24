var l = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, i = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      f.call(e, o) && a(m, o, e[o]);
  return m;
}, t = (m, e) => p(m, s(e));
import n, { forwardRef as S } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/PencilSimpleSlash.mjs";
const w = S((m, e) => /* @__PURE__ */ n.createElement(h, t(i({ ref: e }, m), { weights: d })));
w.displayName = "PencilSimpleSlash";
export {
  w as PencilSimpleSlash
};
