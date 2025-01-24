var l = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      s.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => c(r, f(e));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/PlayCircle.mjs";
const w = R((r, e) => /* @__PURE__ */ y.createElement(d, i(m({ ref: e }, r), { weights: n })));
w.displayName = "PlayCircle";
export {
  w as PlayCircle
};
