var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, e, m) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, a = (t, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(t, m, e[m]);
  if (r)
    for (var m of r(e))
      c.call(e, m) && o(t, m, e[m]);
  return t;
}, i = (t, e) => f(t, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileHtml.mjs";
const F = d((t, e) => /* @__PURE__ */ R.createElement(n, i(a({ ref: e }, t), { weights: w })));
F.displayName = "FileHtml";
export {
  F as FileHtml
};
