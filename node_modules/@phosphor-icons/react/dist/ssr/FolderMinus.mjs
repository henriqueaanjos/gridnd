var m = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var s = (o, e, r) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && s(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && s(o, r, e[r]);
  return o;
}, i = (o, e) => d(o, f(e));
import p, { forwardRef as c } from "react";
import u from "../lib/SSRBase.mjs";
import F from "../defs/FolderMinus.mjs";
const M = c((o, e) => /* @__PURE__ */ p.createElement(u, i(a({ ref: e }, o), { weights: F })));
M.displayName = "FolderMinus";
export {
  M as FolderMinus,
  M as FolderNotchMinus
};
