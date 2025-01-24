var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      c.call(e, m) && o(r, m, e[m]);
  return r;
}, l = (r, e) => i(r, p(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Umbrella.mjs";
const w = b((r, e) => /* @__PURE__ */ R.createElement(d, l(t({ ref: e }, r), { weights: n })));
w.displayName = "Umbrella";
export {
  w as Umbrella
};
