var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => l(o, f(e));
import d, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FolderSimple.mjs";
const I = n((o, e) => /* @__PURE__ */ d.createElement(w, i(a({ ref: e }, o), { weights: F })));
I.displayName = "FolderSimple";
export {
  I as FolderSimple
};
