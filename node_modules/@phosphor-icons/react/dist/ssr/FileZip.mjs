var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    l.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      c.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => f(r, s(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileZip.mjs";
const F = d((r, e) => /* @__PURE__ */ R.createElement(n, a(m({ ref: e }, r), { weights: w })));
F.displayName = "FileZip";
export {
  F as FileZip
};
