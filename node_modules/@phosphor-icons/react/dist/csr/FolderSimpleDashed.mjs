var i = Object.defineProperty, l = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      f.call(e, r) && t(o, r, e[r]);
  return o;
}, d = (o, e) => l(o, p(e));
import c, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import D from "../defs/FolderSimpleDashed.mjs";
const F = h((o, e) => /* @__PURE__ */ c.createElement(n, d(a({ ref: e }, o), { weights: D })));
F.displayName = "FolderSimpleDashed";
export {
  F as FolderSimpleDashed,
  F as FolderSimpleDotted
};
