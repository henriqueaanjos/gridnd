var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    N.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      n.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/NumberNine.mjs";
const l = R((r, e) => /* @__PURE__ */ c.createElement(b, i(a({ ref: e }, r), { weights: d })));
l.displayName = "NumberNine";
export {
  l as NumberNine
};
