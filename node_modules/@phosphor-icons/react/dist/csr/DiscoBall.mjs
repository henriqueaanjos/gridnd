var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      p.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => c(e, l(o));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/DiscoBall.mjs";
const D = B((e, o) => /* @__PURE__ */ n.createElement(d, i(m({ ref: o }, e), { weights: w })));
D.displayName = "DiscoBall";
export {
  D as DiscoBall
};
