var s = Object.defineProperty, w = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && a(r, e, o[e]);
  if (t)
    for (var e of t(o))
      n.call(o, e) && a(r, e, o[e]);
  return r;
}, i = (r, o) => w(r, c(o));
import p, { forwardRef as x } from "react";
import B from "../lib/IconBase.mjs";
import A from "../defs/BoxArrowDown.mjs";
const d = x((r, o) => /* @__PURE__ */ p.createElement(B, i(m({ ref: o }, r), { weights: A })));
d.displayName = "BoxArrowDown";
export {
  d as ArchiveBox,
  d as BoxArrowDown
};
