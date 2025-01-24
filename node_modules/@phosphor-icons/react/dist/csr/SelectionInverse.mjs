var n = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => s(o, c(e));
import l, { forwardRef as I } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/SelectionInverse.mjs";
const w = I((o, e) => /* @__PURE__ */ l.createElement(d, i(a({ ref: e }, o), { weights: v })));
w.displayName = "SelectionInverse";
export {
  w as SelectionInverse
};
