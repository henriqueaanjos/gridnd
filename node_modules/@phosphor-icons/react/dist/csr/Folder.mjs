var c = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? c(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    i.call(o, r) && a(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && a(e, r, o[r]);
  return e;
}, s = (e, o) => d(e, f(o));
import p, { forwardRef as n } from "react";
import F from "../lib/IconBase.mjs";
import h from "../defs/Folder.mjs";
const w = n((e, o) => /* @__PURE__ */ p.createElement(F, s(m({ ref: o }, e), { weights: h })));
w.displayName = "Folder";
export {
  w as Folder,
  w as FolderNotch
};
