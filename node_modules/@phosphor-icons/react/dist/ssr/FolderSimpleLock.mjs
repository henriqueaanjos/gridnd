var p = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => l(o, c(e));
import d, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import k from "../defs/FolderSimpleLock.mjs";
const n = S((o, e) => /* @__PURE__ */ d.createElement(R, i(a({ ref: e }, o), { weights: k })));
n.displayName = "FolderSimpleLock";
export {
  n as FolderSimpleLock
};
