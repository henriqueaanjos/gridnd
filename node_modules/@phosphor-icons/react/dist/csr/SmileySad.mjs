var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      d.call(e, o) && a(m, o, e[o]);
  return m;
}, i = (m, e) => p(m, s(e));
import l, { forwardRef as S } from "react";
import n from "../lib/IconBase.mjs";
import y from "../defs/SmileySad.mjs";
const w = S((m, e) => /* @__PURE__ */ l.createElement(n, i(t({ ref: e }, m), { weights: y })));
w.displayName = "SmileySad";
export {
  w as SmileySad
};
