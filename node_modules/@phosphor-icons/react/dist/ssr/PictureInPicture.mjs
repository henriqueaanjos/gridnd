var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (i)
    for (var t of i(e))
      n.call(e, t) && o(r, t, e[t]);
  return r;
}, a = (r, e) => f(r, p(e));
import u, { forwardRef as P } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/PictureInPicture.mjs";
const d = P((r, e) => /* @__PURE__ */ u.createElement(I, a(m({ ref: e }, r), { weights: R })));
d.displayName = "PictureInPicture";
export {
  d as PictureInPicture
};
