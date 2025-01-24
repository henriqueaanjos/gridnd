var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      S.call(e, r) && o(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, s(e));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TagSimple.mjs";
const n = g((m, e) => /* @__PURE__ */ c.createElement(R, i(t({ ref: e }, m), { weights: d })));
n.displayName = "TagSimple";
export {
  n as TagSimple
};
