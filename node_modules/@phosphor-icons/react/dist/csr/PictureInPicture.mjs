var a = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, c = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && i(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, n(e));
import u, { forwardRef as I } from "react";
import P from "../lib/IconBase.mjs";
import d from "../defs/PictureInPicture.mjs";
const l = I((r, e) => /* @__PURE__ */ u.createElement(P, m(c({ ref: e }, r), { weights: d })));
l.displayName = "PictureInPicture";
export {
  l as PictureInPicture
};
