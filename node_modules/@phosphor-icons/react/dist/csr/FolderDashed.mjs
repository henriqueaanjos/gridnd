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
import n from "../lib/IconBase.mjs";
import D from "../defs/FolderDashed.mjs";
const F = h((o, e) => /* @__PURE__ */ c.createElement(n, m(d({ ref: e }, o), { weights: D })));
F.displayName = "FolderDashed";
export {
  F as FolderDashed,
  F as FolderDotted
};
