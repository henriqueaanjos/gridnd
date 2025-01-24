var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && m(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import I, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/IntersectThree.mjs";
const w = h((r, e) => /* @__PURE__ */ I.createElement(d, s(a({ ref: e }, r), { weights: l })));
w.displayName = "IntersectThree";
export {
  w as IntersectThree
};
