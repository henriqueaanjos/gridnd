var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && a(o, r, e[r]);
  return o;
}, s = (o, e) => f(o, i(e));
import d, { forwardRef as R } from "react";
import B from "../lib/IconBase.mjs";
import k from "../defs/BracketsRound.mjs";
const l = R((o, e) => /* @__PURE__ */ d.createElement(B, s(m({ ref: e }, o), { weights: k })));
l.displayName = "BracketsRound";
export {
  l as BracketsRound
};
