var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => c(o, f(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/PencilLine.mjs";
const L = d((o, e) => /* @__PURE__ */ l.createElement(w, a(m({ ref: e }, o), { weights: I })));
L.displayName = "PencilLine";
export {
  L as PencilLine
};
