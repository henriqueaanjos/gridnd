var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import w, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/Snowflake.mjs";
const d = S((o, e) => /* @__PURE__ */ w.createElement(c, f(m({ ref: e }, o), { weights: R })));
d.displayName = "Snowflake";
export {
  d as Snowflake
};
