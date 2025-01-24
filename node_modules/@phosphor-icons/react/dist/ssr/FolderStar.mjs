var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    d.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && a(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/FolderStar.mjs";
const w = c((e, r) => /* @__PURE__ */ S.createElement(R, f(m({ ref: r }, e), { weights: n })));
w.displayName = "FolderStar";
export {
  w as FolderStar
};
