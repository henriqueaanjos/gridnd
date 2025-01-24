var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      n.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import x, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberSix.mjs";
const l = N((r, e) => /* @__PURE__ */ x.createElement(b, i(a({ ref: e }, r), { weights: d })));
l.displayName = "NumberSix";
export {
  l as NumberSix
};
