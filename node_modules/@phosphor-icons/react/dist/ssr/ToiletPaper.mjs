var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, s(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/ToiletPaper.mjs";
const P = d((r, e) => /* @__PURE__ */ R.createElement(n, i(m({ ref: e }, r), { weights: w })));
P.displayName = "ToiletPaper";
export {
  P as ToiletPaper
};
