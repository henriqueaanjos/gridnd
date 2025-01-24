var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => s(r, l(e));
import d, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FolderSimpleUser.mjs";
const I = n((r, e) => /* @__PURE__ */ d.createElement(w, i(a({ ref: e }, r), { weights: F })));
I.displayName = "FolderSimpleUser";
export {
  I as FolderSimpleUser
};
