var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    p.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      s.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => f(r, n(e));
import l, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberCircleSeven.mjs";
const u = N((r, e) => /* @__PURE__ */ l.createElement(b, i(a({ ref: e }, r), { weights: d })));
u.displayName = "NumberCircleSeven";
export {
  u as NumberCircleSeven
};
