var s = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && a(r, e, o[e]);
  if (t)
    for (var e of t(o))
      c.call(o, e) && a(r, e, o[e]);
  return r;
}, i = (r, o) => w(r, f(o));
import n, { forwardRef as x } from "react";
import B from "../lib/SSRBase.mjs";
import A from "../defs/BoxArrowDown.mjs";
const R = x((r, o) => /* @__PURE__ */ n.createElement(B, i(m({ ref: o }, r), { weights: A })));
R.displayName = "BoxArrowDown";
export {
  R as ArchiveBox,
  R as BoxArrowDown
};
