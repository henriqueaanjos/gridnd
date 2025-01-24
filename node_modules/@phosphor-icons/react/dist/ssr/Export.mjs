var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      x.call(r, t) && m(o, t, r[t]);
  return o;
}, p = (o, r) => i(o, s(r));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Export.mjs";
const n = R((o, r) => /* @__PURE__ */ E.createElement(d, p(a({ ref: r }, o), { weights: l })));
n.displayName = "Export";
export {
  n as Export
};
