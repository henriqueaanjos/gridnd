var i = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (p)
    for (var r of p(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => s(e, f(o));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/FloppyDisk.mjs";
const w = y((e, o) => /* @__PURE__ */ n.createElement(d, a(m({ ref: o }, e), { weights: k })));
w.displayName = "FloppyDisk";
export {
  w as FloppyDisk
};
