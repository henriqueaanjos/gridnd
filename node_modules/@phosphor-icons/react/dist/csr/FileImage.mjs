var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(m, o, e[o]);
  return m;
}, i = (m, e) => p(m, s(e));
import I, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/FileImage.mjs";
const w = g((m, e) => /* @__PURE__ */ I.createElement(n, i(t({ ref: e }, m), { weights: d })));
w.displayName = "FileImage";
export {
  w as FileImage
};
