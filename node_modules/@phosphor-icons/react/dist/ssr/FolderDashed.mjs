var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, d = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && a(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, i(e));
import c, { forwardRef as h } from "react";
import D from "../lib/SSRBase.mjs";
import F from "../defs/FolderDashed.mjs";
const R = h((o, e) => /* @__PURE__ */ c.createElement(D, m(d({ ref: e }, o), { weights: F })));
R.displayName = "FolderDashed";
export {
  R as FolderDashed,
  R as FolderDotted
};
