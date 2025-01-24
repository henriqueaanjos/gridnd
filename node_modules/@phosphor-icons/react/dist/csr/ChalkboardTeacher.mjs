var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      s.call(e, a) && t(r, a, e[a]);
  return r;
}, c = (r, e) => h(r, i(e));
import d, { forwardRef as l } from "react";
import n from "../lib/IconBase.mjs";
import b from "../defs/ChalkboardTeacher.mjs";
const k = l((r, e) => /* @__PURE__ */ d.createElement(n, c(m({ ref: e }, r), { weights: b })));
k.displayName = "ChalkboardTeacher";
export {
  k as ChalkboardTeacher
};
