var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      N.call(e, m) && a(r, m, e[m]);
  return r;
}, i = (r, e) => n(r, p(e));
import c, { forwardRef as u } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberSquareNine.mjs";
const l = u((r, e) => /* @__PURE__ */ c.createElement(b, i(t({ ref: e }, r), { weights: d })));
l.displayName = "NumberSquareNine";
export {
  l as NumberSquareNine
};
