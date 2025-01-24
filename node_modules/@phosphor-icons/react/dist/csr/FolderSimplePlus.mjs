var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, l = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, s(e));
import d, { forwardRef as n } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/FolderSimplePlus.mjs";
const F = n((o, e) => /* @__PURE__ */ d.createElement(u, a(l({ ref: e }, o), { weights: w })));
F.displayName = "FolderSimplePlus";
export {
  F as FolderSimplePlus
};
