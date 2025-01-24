var i = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, t = (a, e) => {
  for (var l in e || (e = {}))
    n.call(e, l) && r(a, l, e[l]);
  if (o)
    for (var l of o(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
}, m = (a, e) => s(a, f(e));
import c, { forwardRef as S } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/CellSignalSlash.mjs";
const d = S((a, e) => /* @__PURE__ */ c.createElement(g, m(t({ ref: e }, a), { weights: h })));
d.displayName = "CellSignalSlash";
export {
  d as CellSignalSlash
};
