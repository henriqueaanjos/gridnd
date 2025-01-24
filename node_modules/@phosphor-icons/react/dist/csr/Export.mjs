var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && m(r, t, o[t]);
  return r;
}, p = (r, o) => i(r, s(o));
import x, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Export.mjs";
const w = E((r, o) => /* @__PURE__ */ x.createElement(d, p(a({ ref: o }, r), { weights: l })));
w.displayName = "Export";
export {
  w as Export
};
