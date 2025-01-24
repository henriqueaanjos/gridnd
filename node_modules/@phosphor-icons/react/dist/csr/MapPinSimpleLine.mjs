var t = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (i, e, m) => e in i ? t(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, a = (i, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && r(i, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && r(i, m, e[m]);
  return i;
}, p = (i, e) => n(i, f(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/MapPinSimpleLine.mjs";
const L = d((i, e) => /* @__PURE__ */ l.createElement(w, p(a({ ref: e }, i), { weights: I })));
L.displayName = "MapPinSimpleLine";
export {
  L as MapPinSimpleLine
};
