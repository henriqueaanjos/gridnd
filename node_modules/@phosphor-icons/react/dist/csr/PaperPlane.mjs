var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, p = (r, e) => i(r, n(e));
import l, { forwardRef as P } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PaperPlane.mjs";
const I = P((r, e) => /* @__PURE__ */ l.createElement(d, p(m({ ref: e }, r), { weights: w })));
I.displayName = "PaperPlane";
export {
  I as PaperPlane
};
