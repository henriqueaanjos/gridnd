var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, i = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && a(r, m, e[m]);
  return r;
}, t = (r, e) => f(r, n(e));
import k, { forwardRef as l } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/LinkSimpleBreak.mjs";
const w = l((r, e) => /* @__PURE__ */ k.createElement(B, t(i({ ref: e }, r), { weights: d })));
w.displayName = "LinkSimpleBreak";
export {
  w as LinkSimpleBreak
};
