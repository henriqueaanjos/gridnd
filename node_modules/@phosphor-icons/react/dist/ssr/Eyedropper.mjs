var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && t(r, o, e[o]);
  if (p)
    for (var o of p(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, s(e));
import y, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/Eyedropper.mjs";
const n = E((r, e) => /* @__PURE__ */ y.createElement(R, a(m({ ref: e }, r), { weights: l })));
n.displayName = "Eyedropper";
export {
  n as Eyedropper
};
