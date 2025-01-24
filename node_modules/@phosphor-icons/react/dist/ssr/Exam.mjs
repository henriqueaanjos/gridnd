var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      x.call(e, r) && o(m, r, e[r]);
  return m;
}, f = (m, e) => p(m, s(e));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Exam.mjs";
const n = R((m, e) => /* @__PURE__ */ E.createElement(d, f(t({ ref: e }, m), { weights: l })));
n.displayName = "Exam";
export {
  n as Exam
};
