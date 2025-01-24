var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(m, o, e[o]);
  return m;
}, f = (m, e) => p(m, s(e));
import x, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Exam.mjs";
const w = E((m, e) => /* @__PURE__ */ x.createElement(d, f(t({ ref: e }, m), { weights: l })));
w.displayName = "Exam";
export {
  w as Exam
};
