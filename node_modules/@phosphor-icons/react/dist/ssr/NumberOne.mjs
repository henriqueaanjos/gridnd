var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && t(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import N, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/NumberOne.mjs";
const l = R((r, e) => /* @__PURE__ */ N.createElement(b, f(a({ ref: e }, r), { weights: d })));
l.displayName = "NumberOne";
export {
  l as NumberOne
};
