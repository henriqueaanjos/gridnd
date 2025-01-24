var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    R.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, s(e));
import n, { forwardRef as P } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/PaperPlaneRight.mjs";
const h = P((r, e) => /* @__PURE__ */ n.createElement(c, i(m({ ref: e }, r), { weights: g })));
h.displayName = "PaperPlaneRight";
export {
  h as PaperPlaneRight
};
