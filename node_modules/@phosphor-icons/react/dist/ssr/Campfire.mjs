var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      R.call(e, m) && o(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Campfire.mjs";
const C = l((r, e) => /* @__PURE__ */ d.createElement(n, f(t({ ref: e }, r), { weights: w })));
C.displayName = "Campfire";
export {
  C as Campfire
};
