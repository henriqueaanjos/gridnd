var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      c.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import g, { forwardRef as B } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/ImageBroken.mjs";
const d = B((r, e) => /* @__PURE__ */ g.createElement(I, f(t({ ref: e }, r), { weights: R })));
d.displayName = "ImageBroken";
export {
  d as ImageBroken
};
