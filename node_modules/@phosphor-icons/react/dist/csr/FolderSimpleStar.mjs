var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, f(e));
import d, { forwardRef as S } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/FolderSimpleStar.mjs";
const F = S((r, e) => /* @__PURE__ */ d.createElement(n, i(a({ ref: e }, r), { weights: w })));
F.displayName = "FolderSimpleStar";
export {
  F as FolderSimpleStar
};
