var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      I.call(e, o) && a(m, o, e[o]);
  return m;
}, f = (m, e) => p(m, s(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Image.mjs";
const w = n((m, e) => /* @__PURE__ */ g.createElement(d, f(t({ ref: e }, m), { weights: l })));
w.displayName = "Image";
export {
  w as Image
};
