var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, n(e));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/QuestionMark.mjs";
const w = k((o, e) => /* @__PURE__ */ d.createElement(l, i(m({ ref: e }, o), { weights: u })));
w.displayName = "QuestionMark";
export {
  w as QuestionMark
};
