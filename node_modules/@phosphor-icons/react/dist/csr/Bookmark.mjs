var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      k.call(o, e) && a(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Bookmark.mjs";
const w = B((r, o) => /* @__PURE__ */ n.createElement(d, f(t({ ref: o }, r), { weights: l })));
w.displayName = "Bookmark";
export {
  w as Bookmark
};
