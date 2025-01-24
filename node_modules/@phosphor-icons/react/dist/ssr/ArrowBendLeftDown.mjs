var n = Object.defineProperty, w = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => w(r, i(e));
import d, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/ArrowBendLeftDown.mjs";
const l = c((r, e) => /* @__PURE__ */ d.createElement(B, f(a({ ref: e }, r), { weights: R })));
l.displayName = "ArrowBendLeftDown";
export {
  l as ArrowBendLeftDown
};
