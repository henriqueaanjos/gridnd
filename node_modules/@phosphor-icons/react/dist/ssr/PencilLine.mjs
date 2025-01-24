var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    p.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      s.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => c(r, f(e));
import l, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/PencilLine.mjs";
const L = R((r, e) => /* @__PURE__ */ l.createElement(d, a(m({ ref: e }, r), { weights: w })));
L.displayName = "PencilLine";
export {
  L as PencilLine
};
