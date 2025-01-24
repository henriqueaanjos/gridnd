var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, p = (e, o) => i(e, s(o));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Upload.mjs";
const R = n((e, o) => /* @__PURE__ */ l.createElement(w, p(m({ ref: o }, e), { weights: I })));
R.displayName = "Upload";
export {
  R as Upload
};
