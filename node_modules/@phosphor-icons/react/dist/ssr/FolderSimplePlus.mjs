var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, l = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => p(r, s(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/FolderSimplePlus.mjs";
const u = c((r, e) => /* @__PURE__ */ S.createElement(R, a(l({ ref: e }, r), { weights: n })));
u.displayName = "FolderSimplePlus";
export {
  u as FolderSimplePlus
};
