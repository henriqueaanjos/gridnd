var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      g.call(e, o) && t(a, o, e[o]);
  return a;
}, f = (a, e) => p(a, s(e));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/TeaBag.mjs";
const w = B((a, e) => /* @__PURE__ */ n.createElement(d, f(m({ ref: e }, a), { weights: l })));
w.displayName = "TeaBag";
export {
  w as TeaBag
};
