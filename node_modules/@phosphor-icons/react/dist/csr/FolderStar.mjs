var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      d.call(r, o) && a(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FolderStar.mjs";
const I = n((e, r) => /* @__PURE__ */ l.createElement(w, f(m({ ref: r }, e), { weights: F })));
I.displayName = "FolderStar";
export {
  I as FolderStar
};
