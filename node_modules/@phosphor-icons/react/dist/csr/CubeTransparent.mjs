var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    i.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, n = (r, e) => s(r, f(e));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/CubeTransparent.mjs";
const w = d((r, e) => /* @__PURE__ */ b.createElement(l, n(m({ ref: e }, r), { weights: u })));
w.displayName = "CubeTransparent";
export {
  w as CubeTransparent
};
