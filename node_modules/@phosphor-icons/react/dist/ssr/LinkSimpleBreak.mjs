var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, o = (r, e) => {
  for (var m in e || (e = {}))
    k.call(e, m) && i(r, m, e[m]);
  if (a)
    for (var m of a(e))
      l.call(e, m) && i(r, m, e[m]);
  return r;
}, t = (r, e) => f(r, s(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import B from "../defs/LinkSimpleBreak.mjs";
const R = S((r, e) => /* @__PURE__ */ n.createElement(c, t(o({ ref: e }, r), { weights: B })));
R.displayName = "LinkSimpleBreak";
export {
  R as LinkSimpleBreak
};
