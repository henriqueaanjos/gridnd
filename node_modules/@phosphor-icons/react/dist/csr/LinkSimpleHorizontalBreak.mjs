var n = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && i(o, r, e[r]);
  return o;
}, m = (o, e) => p(o, l(e));
import c, { forwardRef as k } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/LinkSimpleHorizontalBreak.mjs";
const w = k((o, e) => /* @__PURE__ */ c.createElement(B, m(t({ ref: e }, o), { weights: d })));
w.displayName = "LinkSimpleHorizontalBreak";
export {
  w as LinkSimpleHorizontalBreak
};
