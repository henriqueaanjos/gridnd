var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && a(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/TreePalm.mjs";
const P = d((r, e) => /* @__PURE__ */ n.createElement(w, f(t({ ref: e }, r), { weights: I })));
P.displayName = "TreePalm";
export {
  P as TreePalm
};
