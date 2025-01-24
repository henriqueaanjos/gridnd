var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      g.call(e, r) && o(m, r, e[r]);
  return m;
}, s = (m, e) => i(m, p(e));
import I, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Images.mjs";
const n = R((m, e) => /* @__PURE__ */ I.createElement(d, s(t({ ref: e }, m), { weights: l })));
n.displayName = "Images";
export {
  n as Images
};
