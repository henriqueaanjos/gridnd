var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    S.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import g, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ImageSquare.mjs";
const l = I((r, e) => /* @__PURE__ */ g.createElement(R, f(t({ ref: e }, r), { weights: d })));
l.displayName = "ImageSquare";
export {
  l as ImageSquare
};
