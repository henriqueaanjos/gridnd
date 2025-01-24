var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, p = (r, e) => i(r, s(e));
import P, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PaperPlane.mjs";
const w = c((r, e) => /* @__PURE__ */ P.createElement(R, p(m({ ref: e }, r), { weights: d })));
w.displayName = "PaperPlane";
export {
  w as PaperPlane
};
