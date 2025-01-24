var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      k.call(o, e) && a(r, e, o[e]);
  return r;
}, s = (r, o) => i(r, p(o));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Bookmarks.mjs";
const w = B((r, o) => /* @__PURE__ */ n.createElement(d, s(t({ ref: o }, r), { weights: l })));
w.displayName = "Bookmarks";
export {
  w as Bookmarks
};
