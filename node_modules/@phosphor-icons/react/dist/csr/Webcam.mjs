var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(m, o, e[o]);
  return m;
}, c = (m, e) => i(m, p(e));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Webcam.mjs";
const I = d((m, e) => /* @__PURE__ */ b.createElement(l, c(t({ ref: e }, m), { weights: w })));
I.displayName = "Webcam";
export {
  I as Webcam
};
