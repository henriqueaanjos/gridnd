var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      c.call(e, m) && o(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/TreePalm.mjs";
const P = d((r, e) => /* @__PURE__ */ R.createElement(n, f(t({ ref: e }, r), { weights: w })));
P.displayName = "TreePalm";
export {
  P as TreePalm
};
