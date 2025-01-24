var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    S.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import g, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ImagesSquare.mjs";
const l = I((r, e) => /* @__PURE__ */ g.createElement(R, s(t({ ref: e }, r), { weights: d })));
l.displayName = "ImagesSquare";
export {
  l as ImagesSquare
};
