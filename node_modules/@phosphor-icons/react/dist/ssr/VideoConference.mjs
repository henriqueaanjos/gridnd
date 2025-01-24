var i = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => n(o, c(e));
import d, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/VideoConference.mjs";
const C = R((o, e) => /* @__PURE__ */ d.createElement(l, f(a({ ref: e }, o), { weights: w })));
C.displayName = "VideoConference";
export {
  C as VideoConference
};
