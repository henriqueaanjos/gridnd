var m = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (o, e, r) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    i.call(e, r) && s(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && s(o, r, e[r]);
  return o;
}, l = (o, e) => d(o, f(e));
import c, { forwardRef as u } from "react";
import F from "../lib/SSRBase.mjs";
import P from "../defs/FolderPlus.mjs";
const R = u((o, e) => /* @__PURE__ */ c.createElement(F, l(a({ ref: e }, o), { weights: P })));
R.displayName = "FolderPlus";
export {
  R as FolderNotchPlus,
  R as FolderPlus
};
