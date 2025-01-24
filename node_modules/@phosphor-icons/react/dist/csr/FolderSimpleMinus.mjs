var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && i(o, r, e[r]);
  if (m)
    for (var r of m(e))
      n.call(e, r) && i(o, r, e[r]);
  return o;
}, a = (o, e) => s(o, l(e));
import c, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/FolderSimpleMinus.mjs";
const F = d((o, e) => /* @__PURE__ */ c.createElement(u, a(t({ ref: e }, o), { weights: w })));
F.displayName = "FolderSimpleMinus";
export {
  F as FolderSimpleMinus
};
