var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(m, r, e[r]);
  return m;
}, c = (m, e) => i(m, p(e));
import b, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Webcam.mjs";
const w = d((m, e) => /* @__PURE__ */ b.createElement(l, c(t({ ref: e }, m), { weights: n })));
w.displayName = "Webcam";
export {
  w as Webcam
};
