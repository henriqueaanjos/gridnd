var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, i) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    n.call(e, i) && o(r, i, e[i]);
  if (t)
    for (var i of t(e))
      c.call(e, i) && o(r, i, e[i]);
  return r;
}, a = (r, e) => f(r, p(e));
import g, { forwardRef as h } from "react";
import x from "../lib/SSRBase.mjs";
import E from "../defs/FireExtinguisher.mjs";
const R = h((r, e) => /* @__PURE__ */ g.createElement(x, a(m({ ref: e }, r), { weights: E })));
R.displayName = "FireExtinguisher";
export {
  R as FireExtinguisher
};
