var m = Object.defineProperty, c = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var s = (e, o, r) => o in e ? m(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && s(e, r, o[r]);
  if (t)
    for (var r of t(o))
      i.call(o, r) && s(e, r, o[r]);
  return e;
}, l = (e, o) => c(e, d(o));
import p, { forwardRef as n } from "react";
import u from "../lib/IconBase.mjs";
import F from "../defs/FolderPlus.mjs";
const P = n((e, o) => /* @__PURE__ */ p.createElement(u, l(a({ ref: o }, e), { weights: F })));
P.displayName = "FolderPlus";
export {
  P as FolderNotchPlus,
  P as FolderPlus
};
