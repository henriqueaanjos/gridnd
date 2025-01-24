var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    c.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      k.call(o, m) && a(e, m, o[m]);
  return e;
}, i = (e, o) => s(e, f(o));
import l, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BookmarksSimple.mjs";
const w = n((e, o) => /* @__PURE__ */ l.createElement(B, i(t({ ref: o }, e), { weights: d })));
w.displayName = "BookmarksSimple";
export {
  w as BookmarksSimple
};
