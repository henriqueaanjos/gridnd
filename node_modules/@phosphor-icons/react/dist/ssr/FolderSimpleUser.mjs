var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => s(r, l(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/FolderSimpleUser.mjs";
const w = c((r, e) => /* @__PURE__ */ S.createElement(R, i(a({ ref: e }, r), { weights: n })));
w.displayName = "FolderSimpleUser";
export {
  w as FolderSimpleUser
};
