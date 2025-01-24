var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import c, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FolderUser.mjs";
const F = R((r, e) => /* @__PURE__ */ c.createElement(n, s(a({ ref: e }, r), { weights: w })));
F.displayName = "FolderUser";
export {
  F as FolderUser
};
