var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import R, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/Ranking.mjs";
const l = g((o, e) => /* @__PURE__ */ R.createElement(d, i(m({ ref: e }, o), { weights: k })));
l.displayName = "Ranking";
export {
  l as Ranking
};
