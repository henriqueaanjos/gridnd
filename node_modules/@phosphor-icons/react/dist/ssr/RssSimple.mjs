var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    R.call(e, r) && s(m, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && s(m, r, e[r]);
  return m;
}, a = (m, e) => p(m, f(e));
import S, { forwardRef as c } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/RssSimple.mjs";
const w = c((m, e) => /* @__PURE__ */ S.createElement(d, a(t({ ref: e }, m), { weights: n })));
w.displayName = "RssSimple";
export {
  w as RssSimple
};
