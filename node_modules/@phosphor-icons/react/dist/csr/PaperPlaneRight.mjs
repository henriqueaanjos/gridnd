var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, n(e));
import l, { forwardRef as P } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/PaperPlaneRight.mjs";
const h = P((r, e) => /* @__PURE__ */ l.createElement(R, i(m({ ref: e }, r), { weights: g })));
h.displayName = "PaperPlaneRight";
export {
  h as PaperPlaneRight
};
