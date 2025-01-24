var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && a(r, m, e[m]);
  return r;
}, f = (r, e) => n(r, p(e));
import u, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberSquareOne.mjs";
const l = N((r, e) => /* @__PURE__ */ u.createElement(b, f(t({ ref: e }, r), { weights: d })));
l.displayName = "NumberSquareOne";
export {
  l as NumberSquareOne
};
