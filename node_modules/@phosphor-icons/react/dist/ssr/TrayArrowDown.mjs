var s = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, r, a) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && t(o, a, r[a]);
  if (e)
    for (var a of e(r))
      c.call(r, a) && t(o, a, r[a]);
  return o;
}, i = (o, r) => w(o, f(r));
import n, { forwardRef as y } from "react";
import A from "../lib/SSRBase.mjs";
import R from "../defs/TrayArrowDown.mjs";
const T = y((o, r) => /* @__PURE__ */ n.createElement(A, i(m({ ref: r }, o), { weights: R })));
T.displayName = "TrayArrowDown";
export {
  T as ArchiveTray,
  T as TrayArrowDown
};
