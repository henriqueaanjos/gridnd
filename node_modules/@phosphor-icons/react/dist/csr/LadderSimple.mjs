var p = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && a(r, m, e[m]);
  return r;
}, i = (r, e) => d(r, f(e));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/LadderSimple.mjs";
const L = n((r, e) => /* @__PURE__ */ l.createElement(w, i(t({ ref: e }, r), { weights: I })));
L.displayName = "LadderSimple";
export {
  L as LadderSimple
};
