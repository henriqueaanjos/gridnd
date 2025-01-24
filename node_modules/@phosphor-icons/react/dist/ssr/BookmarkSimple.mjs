var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    k.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      l.call(o, m) && a(e, m, o[m]);
  return e;
}, i = (e, o) => f(e, s(o));
import S, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BookmarkSimple.mjs";
const d = c((e, o) => /* @__PURE__ */ S.createElement(B, i(t({ ref: o }, e), { weights: R })));
d.displayName = "BookmarkSimple";
export {
  d as BookmarkSimple
};
