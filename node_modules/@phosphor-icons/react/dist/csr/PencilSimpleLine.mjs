var n = Object.defineProperty, p = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var r = (i, e, m) => e in i ? n(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, t = (i, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && r(i, m, e[m]);
  if (o)
    for (var m of o(e))
      f.call(e, m) && r(i, m, e[m]);
  return i;
}, a = (i, e) => p(i, c(e));
import s, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/PencilSimpleLine.mjs";
const L = d((i, e) => /* @__PURE__ */ s.createElement(w, a(t({ ref: e }, i), { weights: I })));
L.displayName = "PencilSimpleLine";
export {
  L as PencilSimpleLine
};
