var p = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, l(e));
import d, { forwardRef as n } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/FolderSimpleLock.mjs";
const F = n((o, e) => /* @__PURE__ */ d.createElement(k, i(a({ ref: e }, o), { weights: w })));
F.displayName = "FolderSimpleLock";
export {
  F as FolderSimpleLock
};
