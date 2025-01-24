var p = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (i, e, m) => e in i ? p(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, t = (i, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && o(i, m, e[m]);
  if (r)
    for (var m of r(e))
      f.call(e, m) && o(i, m, e[m]);
  return i;
}, a = (i, e) => l(i, n(e));
import s, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PencilSimpleLine.mjs";
const w = S((i, e) => /* @__PURE__ */ s.createElement(R, a(t({ ref: e }, i), { weights: d })));
w.displayName = "PencilSimpleLine";
export {
  w as PencilSimpleLine
};
