var s = Object.defineProperty, w = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, r, a) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    f.call(r, a) && t(o, a, r[a]);
  if (e)
    for (var a of e(r))
      n.call(r, a) && t(o, a, r[a]);
  return o;
}, i = (o, r) => w(o, c(r));
import p, { forwardRef as y } from "react";
import A from "../lib/IconBase.mjs";
import T from "../defs/TrayArrowDown.mjs";
const d = y((o, r) => /* @__PURE__ */ p.createElement(A, i(m({ ref: r }, o), { weights: T })));
d.displayName = "TrayArrowDown";
export {
  d as ArchiveTray,
  d as TrayArrowDown
};
