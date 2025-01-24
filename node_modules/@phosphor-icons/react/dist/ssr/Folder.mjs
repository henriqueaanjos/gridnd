var d = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? d(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && a(o, r, e[r]);
  return o;
}, s = (o, e) => f(o, i(e));
import c, { forwardRef as F } from "react";
import R from "../lib/SSRBase.mjs";
import h from "../defs/Folder.mjs";
const n = F((o, e) => /* @__PURE__ */ c.createElement(R, s(m({ ref: e }, o), { weights: h })));
n.displayName = "Folder";
export {
  n as Folder,
  n as FolderNotch
};
