var n = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && t(e, r, o[r]);
  if (i)
    for (var r of i(o))
      s.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => p(e, l(o));
import c, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/LinkSimpleHorizontal.mjs";
const z = d((e, o) => /* @__PURE__ */ c.createElement(k, a(m({ ref: o }, e), { weights: w })));
z.displayName = "LinkSimpleHorizontal";
export {
  z as LinkSimpleHorizontal
};
