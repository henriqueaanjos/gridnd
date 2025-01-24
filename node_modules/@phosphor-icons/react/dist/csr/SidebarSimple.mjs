var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, i = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      d.call(e, m) && a(r, m, e[m]);
  return r;
}, t = (r, e) => f(r, s(e));
import l, { forwardRef as S } from "react";
import n from "../lib/IconBase.mjs";
import b from "../defs/SidebarSimple.mjs";
const w = S((r, e) => /* @__PURE__ */ l.createElement(n, t(i({ ref: e }, r), { weights: b })));
w.displayName = "SidebarSimple";
export {
  w as SidebarSimple
};
