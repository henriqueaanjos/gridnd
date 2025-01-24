var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      g.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/GitMerge.mjs";
const G = d((r, e) => /* @__PURE__ */ n.createElement(l, i(a({ ref: e }, r), { weights: w })));
G.displayName = "GitMerge";
export {
  G as GitMerge
};
