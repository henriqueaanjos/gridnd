var i = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && a(o, r, e[r]);
  return o;
}, c = (o, e) => n(o, f(e));
import d, { forwardRef as l } from "react";
import S from "../lib/SSRBase.mjs";
import g from "../defs/SelectionBackground.mjs";
const B = l((o, e) => /* @__PURE__ */ d.createElement(S, c(m({ ref: e }, o), { weights: g })));
B.displayName = "SelectionBackground";
export {
  B as SelectionBackground
};
