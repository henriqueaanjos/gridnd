var a = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var r = (i, e, m) => e in i ? a(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, t = (i, e) => {
  for (var m in e || (e = {}))
    f.call(e, m) && r(i, m, e[m]);
  if (o)
    for (var m of o(e))
      g.call(e, m) && r(i, m, e[m]);
  return i;
}, l = (i, e) => n(i, p(e));
import s, { forwardRef as c } from "react";
import R from "../lib/IconBase.mjs";
import B from "../defs/BellSimpleRinging.mjs";
const d = c((i, e) => /* @__PURE__ */ s.createElement(R, l(t({ ref: e }, i), { weights: B })));
d.displayName = "BellSimpleRinging";
export {
  d as BellSimpleRinging
};
