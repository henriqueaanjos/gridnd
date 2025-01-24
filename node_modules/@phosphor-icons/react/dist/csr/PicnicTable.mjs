var m = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && i(o, r, e[r]);
  return o;
}, c = (o, e) => f(o, n(e));
import l, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PicnicTable.mjs";
const I = b((o, e) => /* @__PURE__ */ l.createElement(d, c(t({ ref: e }, o), { weights: w })));
I.displayName = "PicnicTable";
export {
  I as PicnicTable
};
