var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, s(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FileJpg.mjs";
const F = n((o, e) => /* @__PURE__ */ g.createElement(d, i(a({ ref: e }, o), { weights: w })));
F.displayName = "FileJpg";
export {
  F as FileJpg
};
