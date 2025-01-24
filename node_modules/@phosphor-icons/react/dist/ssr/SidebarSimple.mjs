var p = Object.defineProperty, S = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, o = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && i(r, m, e[m]);
  if (a)
    for (var m of a(e))
      d.call(e, m) && i(r, m, e[m]);
  return r;
}, t = (r, e) => S(r, f(e));
import l, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/SidebarSimple.mjs";
const n = c((r, e) => /* @__PURE__ */ l.createElement(R, t(o({ ref: e }, r), { weights: b })));
n.displayName = "SidebarSimple";
export {
  n as SidebarSimple
};
