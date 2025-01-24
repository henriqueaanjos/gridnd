var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, n(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/MapPinArea.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(w, i(m({ ref: e }, r), { weights: A })));
I.displayName = "MapPinArea";
export {
  I as MapPinArea
};
