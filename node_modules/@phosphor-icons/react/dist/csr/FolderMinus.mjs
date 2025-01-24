var m = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var s = (e, o, r) => o in e ? m(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && s(e, r, o[r]);
  if (t)
    for (var r of t(o))
      f.call(o, r) && s(e, r, o[r]);
  return e;
}, i = (e, o) => n(e, c(o));
import l, { forwardRef as p } from "react";
import u from "../lib/IconBase.mjs";
import F from "../defs/FolderMinus.mjs";
const M = p((e, o) => /* @__PURE__ */ l.createElement(u, i(a({ ref: o }, e), { weights: F })));
M.displayName = "FolderMinus";
export {
  M as FolderMinus,
  M as FolderNotchMinus
};
