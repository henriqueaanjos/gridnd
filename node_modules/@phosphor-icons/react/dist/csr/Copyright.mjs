var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? p(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      g.call(o, t) && m(r, t, o[t]);
  return r;
}, i = (r, o) => f(r, s(o));
import h, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/Copyright.mjs";
const l = n((r, o) => /* @__PURE__ */ h.createElement(y, i(a({ ref: o }, r), { weights: d })));
l.displayName = "Copyright";
export {
  l as Copyright
};
