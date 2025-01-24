var n = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, l(e));
import c, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/SpinnerBall.mjs";
const I = B((r, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, r), { weights: w })));
I.displayName = "SpinnerBall";
export {
  I as SpinnerBall
};
