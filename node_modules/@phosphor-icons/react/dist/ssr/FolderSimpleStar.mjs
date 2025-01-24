var p = Object.defineProperty, l = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, S(e));
import d, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/FolderSimpleStar.mjs";
const w = c((r, e) => /* @__PURE__ */ d.createElement(R, i(a({ ref: e }, r), { weights: n })));
w.displayName = "FolderSimpleStar";
export {
  w as FolderSimpleStar
};
