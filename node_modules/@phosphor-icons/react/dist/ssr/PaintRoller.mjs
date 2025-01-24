var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import n, { forwardRef as c } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/PaintRoller.mjs";
const P = c((r, e) => /* @__PURE__ */ n.createElement(d, i(m({ ref: e }, r), { weights: w })));
P.displayName = "PaintRoller";
export {
  P as PaintRoller
};
