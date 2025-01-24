var i = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && t(e, r, o[r]);
  if (p)
    for (var r of p(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => s(e, f(o));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/FloppyDisk.mjs";
const n = R((e, o) => /* @__PURE__ */ y.createElement(d, a(m({ ref: o }, e), { weights: k })));
n.displayName = "FloppyDisk";
export {
  n as FloppyDisk
};
