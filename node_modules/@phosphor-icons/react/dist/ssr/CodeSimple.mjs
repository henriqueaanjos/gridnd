var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    d.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => f(o, s(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/CodeSimple.mjs";
const w = c((o, e) => /* @__PURE__ */ S.createElement(R, i(a({ ref: e }, o), { weights: n })));
w.displayName = "CodeSimple";
export {
  w as CodeSimple
};
