var n = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      f.call(e, r) && a(o, r, e[r]);
  return o;
}, p = (o, e) => s(o, c(e));
import i, { forwardRef as l } from "react";
import F from "../lib/IconBase.mjs";
import O from "../defs/FolderOpen.mjs";
const h = l((o, e) => /* @__PURE__ */ i.createElement(F, p(m({ ref: e }, o), { weights: O })));
h.displayName = "FolderOpen";
export {
  h as FolderNotchOpen,
  h as FolderOpen
};
