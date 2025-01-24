var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var p = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, t = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && p(e, r, o[r]);
  if (a)
    for (var r of a(o))
      k.call(o, r) && p(e, r, o[r]);
  return e;
}, m = (e, o) => s(e, c(o));
import l, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import B from "../defs/FloppyDiskBack.mjs";
const d = n((e, o) => /* @__PURE__ */ l.createElement(y, m(t({ ref: o }, e), { weights: B })));
d.displayName = "FloppyDiskBack";
export {
  d as FloppyDiskBack
};
