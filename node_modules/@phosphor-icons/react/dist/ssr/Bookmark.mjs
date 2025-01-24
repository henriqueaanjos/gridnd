var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    k.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      c.call(o, e) && a(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Bookmark.mjs";
const n = R((r, o) => /* @__PURE__ */ B.createElement(d, f(t({ ref: o }, r), { weights: l })));
n.displayName = "Bookmark";
export {
  n as Bookmark
};
