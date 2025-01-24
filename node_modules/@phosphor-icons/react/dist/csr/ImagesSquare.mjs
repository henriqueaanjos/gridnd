var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      I.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ImagesSquare.mjs";
const q = n((r, e) => /* @__PURE__ */ g.createElement(d, s(t({ ref: e }, r), { weights: l })));
q.displayName = "ImagesSquare";
export {
  q as ImagesSquare
};
