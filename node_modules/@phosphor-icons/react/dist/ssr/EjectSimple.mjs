var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (t, e, m) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, a = (t, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(t, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && o(t, m, e[m]);
  return t;
}, i = (t, e) => c(t, f(e));
import S, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/EjectSimple.mjs";
const j = E((t, e) => /* @__PURE__ */ S.createElement(R, i(a({ ref: e }, t), { weights: d })));
j.displayName = "EjectSimple";
export {
  j as EjectSimple
};
