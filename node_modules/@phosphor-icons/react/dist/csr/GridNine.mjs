var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (i)
    for (var o of i(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => n(r, p(e));
import d, { forwardRef as N } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/GridNine.mjs";
const G = N((r, e) => /* @__PURE__ */ d.createElement(l, a(m({ ref: e }, r), { weights: w })));
G.displayName = "GridNine";
export {
  G as GridNine
};
