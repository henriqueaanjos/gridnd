var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      I.call(e, o) && a(m, o, e[o]);
  return m;
}, s = (m, e) => i(m, p(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Images.mjs";
const w = n((m, e) => /* @__PURE__ */ g.createElement(d, s(t({ ref: e }, m), { weights: l })));
w.displayName = "Images";
export {
  w as Images
};
