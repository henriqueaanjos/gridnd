var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, m) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && i(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && i(r, m, e[m]);
  return r;
}, a = (r, e) => f(r, p(e));
import n, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberCircleFive.mjs";
const u = N((r, e) => /* @__PURE__ */ n.createElement(b, a(t({ ref: e }, r), { weights: d })));
u.displayName = "NumberCircleFive";
export {
  u as NumberCircleFive
};
