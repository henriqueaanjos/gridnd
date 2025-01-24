var a = Object.defineProperty, p = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (i, e, m) => e in i ? a(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, t = (i, e) => {
  for (var m in e || (e = {}))
    f.call(e, m) && o(i, m, e[m]);
  if (r)
    for (var m of r(e))
      g.call(e, m) && o(i, m, e[m]);
  return i;
}, l = (i, e) => p(i, n(e));
import s, { forwardRef as R } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/BellSimpleRinging.mjs";
const B = R((i, e) => /* @__PURE__ */ s.createElement(S, l(t({ ref: e }, i), { weights: c })));
B.displayName = "BellSimpleRinging";
export {
  B as BellSimpleRinging
};
