var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && p(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && p(r, a, e[a]);
  return r;
}, m = (r, e) => c(r, f(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Paperclip.mjs";
const P = d((r, e) => /* @__PURE__ */ R.createElement(n, m(t({ ref: e }, r), { weights: w })));
P.displayName = "Paperclip";
export {
  P as Paperclip
};
