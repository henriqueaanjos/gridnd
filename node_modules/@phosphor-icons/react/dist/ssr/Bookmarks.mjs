var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    k.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      c.call(o, e) && a(r, e, o[e]);
  return r;
}, s = (r, o) => i(r, p(o));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Bookmarks.mjs";
const n = R((r, o) => /* @__PURE__ */ B.createElement(d, s(t({ ref: o }, r), { weights: l })));
n.displayName = "Bookmarks";
export {
  n as Bookmarks
};
