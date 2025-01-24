var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => s(o, f(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/PersonSimple.mjs";
const P = d((o, e) => /* @__PURE__ */ l.createElement(w, i(a({ ref: e }, o), { weights: I })));
P.displayName = "PersonSimple";
export {
  P as PersonSimple
};
