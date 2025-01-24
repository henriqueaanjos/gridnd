var l = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (m, e, r) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, o = (m, e) => {
  for (var r in e || (e = {}))
    S.call(e, r) && i(m, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && i(m, r, e[r]);
  return m;
}, t = (m, e) => p(m, s(e));
import f, { forwardRef as n } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/PencilSimpleSlash.mjs";
const d = n((m, e) => /* @__PURE__ */ f.createElement(h, t(o({ ref: e }, m), { weights: R })));
d.displayName = "PencilSimpleSlash";
export {
  d as PencilSimpleSlash
};
