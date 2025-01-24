var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && i(r, o, e[o]);
  if (m)
    for (var o of m(e))
      d.call(e, o) && i(r, o, e[o]);
  return r;
}, a = (r, e) => s(r, l(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/FolderSimpleMinus.mjs";
const u = S((r, e) => /* @__PURE__ */ n.createElement(c, a(t({ ref: e }, r), { weights: R })));
u.displayName = "FolderSimpleMinus";
export {
  u as FolderSimpleMinus
};
