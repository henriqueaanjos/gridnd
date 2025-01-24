var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, i) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    p.call(e, i) && o(r, i, e[i]);
  if (t)
    for (var i of t(e))
      c.call(e, i) && o(r, i, e[i]);
  return r;
}, a = (r, e) => f(r, n(e));
import g, { forwardRef as h } from "react";
import x from "../lib/IconBase.mjs";
import E from "../defs/FireExtinguisher.mjs";
const d = h((r, e) => /* @__PURE__ */ g.createElement(x, a(m({ ref: e }, r), { weights: E })));
d.displayName = "FireExtinguisher";
export {
  d as FireExtinguisher
};
