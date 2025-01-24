var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(m, r, e[r]);
  return m;
}, i = (m, e) => p(m, s(e));
import g, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/FileImage.mjs";
const n = I((m, e) => /* @__PURE__ */ g.createElement(R, i(t({ ref: e }, m), { weights: d })));
n.displayName = "FileImage";
export {
  n as FileImage
};
