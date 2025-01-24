var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    i.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && a(o, r, e[r]);
  return o;
}, p = (o, e) => d(o, f(e));
import n, { forwardRef as c } from "react";
import F from "../lib/SSRBase.mjs";
import O from "../defs/FolderOpen.mjs";
const R = c((o, e) => /* @__PURE__ */ n.createElement(F, p(m({ ref: e }, o), { weights: O })));
R.displayName = "FolderOpen";
export {
  R as FolderNotchOpen,
  R as FolderOpen
};
