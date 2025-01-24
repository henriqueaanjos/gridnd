var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    d.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      l.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => p(r, s(e));
import n, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import B from "../defs/Building.mjs";
const R = c((r, e) => /* @__PURE__ */ n.createElement(g, a(m({ ref: e }, r), { weights: B })));
R.displayName = "Building";
export {
  R as Building
};
