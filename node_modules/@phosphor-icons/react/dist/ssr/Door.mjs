var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      R.call(o, e) && m(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Door.mjs";
const D = l((r, o) => /* @__PURE__ */ d.createElement(n, f(a({ ref: o }, r), { weights: w })));
D.displayName = "Door";
export {
  D as Door
};
