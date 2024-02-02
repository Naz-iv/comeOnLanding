!function() {
    "use strict";
    function t(r) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        t(r)
    }
    function r(r) {
        var a = function(r, a) {
            if ("object" !== t(r) || null === r)
                return r;
            var n = r[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(r, a || "default");
                if ("object" !== t(i))
                    return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === a ? String : Number)(r)
        }(r, "string");
        return "symbol" === t(a) ? a : String(a)
    }
    var a = {
        d: (t,r)=>{
            for (var n in r)
                a.o(r, n) && !a.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
        }
        ,
        o: (t,r)=>Object.prototype.hasOwnProperty.call(t, r)
    }
      , n = {};
    a.d(n, {
        i: ()=>d
    });
    var i = {
        top: "paddingBottom",
        bottom: "paddingTop",
        left: "paddingRight",
        right: "paddingLeft"
    };
    function e(t) {
        var r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#x60;"
        };
        return t.replace(/&(amp|lt|gt|quot|#39|x60);|[\&<>"'`]/g, (function(t) {
            return "&" === t[0] ? t : r[t]
        }
        ))
    }
    function o(t) {
        return encodeURI(t)
    }
    function c(t, r) {
        return t[r] || r
    }
    function v() {
        return v = Object.assign ? Object.assign.bind() : function(t) {
            for (var r = 1; r < arguments.length; r++) {
                var a = arguments[r];
                for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
            }
            return t
        }
        ,
        v.apply(this, arguments)
    }
    var s = ["wordpress", "mastodon", "tumblr", "github", "twitter"]
      , l = document
      , d = function() {
        function t(t) {
            var r = this
              , a = void 0 === t ? {} : t
              , n = a.placement
              , i = void 0 === n ? "right" : n
              , e = a.autoFlip
              , o = void 0 === e || e
              , c = a.offset
              , v = void 0 === c ? 10 : c
              , s = a.delayToShow
              , l = void 0 === s ? 500 : s
              , d = a.delayToHide
              , u = void 0 === d ? 300 : d
              , h = a.additionalClass
              , f = void 0 === h ? "" : h
              , g = a.myHash
              , _ = void 0 === g ? "" : g
              , m = a.onQueryHovercardRef
              , p = void 0 === m ? function(t) {
                return t
            }
            : m
              , b = a.onFetchProfileStart
              , w = void 0 === b ? function() {}
            : b
              , k = a.onFetchProfileSuccess
              , y = void 0 === k ? function() {}
            : k
              , j = a.onFetchProfileFailure
              , O = void 0 === j ? function() {}
            : j
              , S = a.onHovercardShown
              , x = void 0 === S ? function() {}
            : S
              , M = a.onHovercardHidden
              , H = void 0 === M ? function() {}
            : M
              , U = a.i18n
              , I = void 0 === U ? {} : U;
            this.t = {},
            this.v = [],
            this.l = new Map,
            this.u = new Map,
            this.h = new Map,
            this.attach = function(t, a) {
                var n = void 0 === a ? {} : a
                  , i = n.dataAttributeName
                  , e = void 0 === i ? "gravatar-hash" : i
                  , o = n.ignoreSelector;
                t && (r.detach(),
                r.g(t, e, o).forEach((function(t) {
                    t.ref.addEventListener("mouseenter", (function(a) {
                        return r._(a, t)
                    }
                    )),
                    t.ref.addEventListener("mouseleave", (function(a) {
                        return r.p(a, t)
                    }
                    ))
                }
                )))
            }
            ,
            this.detach = function() {
                r.v.length && (r.v.forEach((function(t) {
                    var a = t.ref;
                    a.removeEventListener("mouseenter", (function() {
                        return r._
                    }
                    )),
                    a.removeEventListener("mouseleave", (function() {
                        return r.p
                    }
                    ))
                }
                )),
                r.v = [])
            }
            ,
            this.k = i,
            this.j = o,
            this.O = v,
            this.S = l,
            this.M = u,
            this.H = f,
            this.U = _,
            this.I = p,
            this.A = w,
            this.L = y,
            this.G = O,
            this.P = x,
            this.B = H,
            this.t = I
        }
        var r = t.prototype;
        return r.g = function(t, r, a) {
            var n = this
              , i = []
              , e = r.replace(/-([a-z])/g, (function(t) {
                return t[1].toUpperCase()
            }
            ))
              , o = a ? Array.from(l.querySelectorAll(a)) : []
              , c = "gravatar.com/avatar/";
            return e && t.dataset[e] || "IMG" === t.tagName && t.src.includes(c) ? i = [t] : (i = Array.from(t.querySelectorAll('img[src*="' + c + '"]')),
            r && (i = [].concat(i.filter((function(t) {
                return !t.hasAttribute("data-" + r)
            }
            )), Array.from(t.querySelectorAll("[data-" + r + "]"))))),
            this.v = i.map((function(t, r) {
                if (o.includes(t))
                    return null;
                var a, i, c = t.dataset[e];
                if (c ? (a = c.split("?")[0],
                i = c) : "IMG" === t.tagName && (a = t.src.split("/").pop().split("?")[0],
                i = t.src),
                !a)
                    return null;
                var v = new URLSearchParams(i)
                  , s = v.get("d") || v.get("default")
                  , l = v.get("f") || v.get("forcedefault")
                  , d = v.get("r") || v.get("rating");
                return {
                    id: "gravatar-hovercard-" + a + "-" + r,
                    hash: a,
                    params: (i = [s && "d=" + s, l && "f=" + l, d && "r=" + d].filter(Boolean).join("&")) ? "?" + i : "",
                    ref: n.I(t) || t
                }
            }
            )).filter(Boolean),
            this.v
        }
        ,
        r.C = function() {
            var t = l.createElement("div");
            return t.className = "gravatar-hovercard gravatar-hovercard--skeleton" + (this.H ? " " + this.H : ""),
            t.innerHTML = '\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t<div class="gravatar-hovercard__header">\n\t\t\t\t\t<div class="gravatar-hovercard__avatar-link"></div>\n\t\t\t\t\t<div class="gravatar-hovercard__name-location-link"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__footer">\n\t\t\t\t\t<div class="gravatar-hovercard__social-link"></div>\n\t\t\t\t\t<div class="gravatar-hovercard__profile-link""></div>\n\t\t\t\t</div>\n\t\t\t</div>\n    ',
            t
        }
        ,
        r.F = function(r) {
            var a = this
              , n = r.id
              , e = r.hash
              , o = r.params
              , s = r.ref
              , d = setTimeout((function() {
                if (!l.getElementById(n)) {
                    var r;
                    if (a.h.has(e)) {
                        var d = a.h.get(e);
                        r = t.createHovercard(v({}, d, {
                            thumbnailUrl: d.thumbnailUrl + o
                        }), {
                            additionalClass: a.H,
                            myHash: a.U,
                            i18n: a.t
                        })
                    } else
                        r = a.C(),
                        a.A(e),
                        fetch("https://secure.gravatar.com/" + e + ".json").then((function(t) {
                            return t.json()
                        }
                        )).then((function(n) {
                            if (null == n || !n.entry)
                                throw new Error(n);
                            var i = n.entry[0]
                              , c = i.hash
                              , s = i.thumbnailUrl
                              , l = i.preferredUsername
                              , d = i.displayName
                              , u = i.currentLocation
                              , h = i.aboutMe
                              , f = i.accounts;
                            a.h.set(e, {
                                hash: c,
                                thumbnailUrl: s,
                                preferredUsername: l,
                                displayName: d,
                                currentLocation: u,
                                aboutMe: h,
                                accounts: null == f ? void 0 : f.map((function(t) {
                                    return {
                                        url: t.url,
                                        shortname: t.shortname,
                                        iconUrl: t.iconUrl,
                                        name: t.name
                                    }
                                }
                                ))
                            });
                            var g = a.h.get(e)
                              , _ = t.createHovercard(v({}, g, {
                                thumbnailUrl: g.thumbnailUrl + o
                            }), {
                                additionalClass: a.H,
                                myHash: a.U,
                                i18n: a.t
                            }).firstElementChild;
                            r.classList.remove("gravatar-hovercard--skeleton"),
                            r.replaceChildren(_),
                            a.L(e, a.h.get(e))
                        }
                        )).catch((function(t) {
                            r.firstElementChild.classList.add("gravatar-hovercard__inner--error"),
                            r.firstElementChild.innerHTML = '\n\t\t\t\t\t\t\t<img class="gravatar-hovercard__avatar" src="https://2.gravatar.com/avatar/' + e + o + '" width="56" height="56" alt="Avatar" />\n\t\t\t\t\t\t\t<i class="gravatar-hovercard__error-message">' + ("User not found" === t.message ? c(a.t, "Sorry, we are unable to load this Gravatar profile.") : c(a.t, "Sorry, we are unable to load this Gravatar profile. Please check your internet connection.")) + "</i>\n\t\t\t\t\t\t",
                            a.G(e, t)
                        }
                        ));
                    r.id = n,
                    r.addEventListener("mouseenter", (function() {
                        return clearInterval(a.u.get(n))
                    }
                    )),
                    r.addEventListener("mouseleave", (function() {
                        return a.N(n)
                    }
                    )),
                    l.body.appendChild(r);
                    var u = function(t, r, a) {
                        var n = void 0 === a ? {} : a
                          , e = n.placement
                          , o = void 0 === e ? "right" : e
                          , c = n.offset
                          , v = void 0 === c ? 0 : c
                          , s = n.autoFlip
                          , l = void 0 === s || s
                          , d = t.getBoundingClientRect()
                          , u = r.getBoundingClientRect()
                          , h = d.top + scrollY
                          , f = d.bottom + scrollY
                          , g = d.right + scrollX
                          , _ = d.left + scrollX
                          , m = 0
                          , p = 0
                          , b = o.split("-")
                          , w = b[0]
                          , k = b[1];
                        if (v = Math.max(0, v),
                        l) {
                            var y = d.top
                              , j = innerHeight - d.bottom
                              , O = d.left
                              , S = innerWidth - d.right
                              , x = u.height + v
                              , M = u.width + v;
                            "top" === w && y < x && j > y && (w = "bottom"),
                            "bottom" === w && j < x && y > j && (w = "top"),
                            "left" === w && O < M && S > O && (w = "right"),
                            "right" === w && S < M && O > S && (w = "left")
                        }
                        return "top" === w || "bottom" === w ? (m = _ + d.width / 2 - u.width / 2,
                        p = "top" === w ? h - u.height - v : f,
                        "start" === k && (m = _),
                        "end" === k && (m = g - u.width)) : (m = "right" === w ? g : _ - u.width - v,
                        p = h + d.height / 2 - u.height / 2,
                        "start" === k && (p = h),
                        "end" === k && (p = f - u.height)),
                        {
                            x: m,
                            y: p,
                            padding: i[w],
                            paddingValue: v
                        }
                    }(s, r, {
                        placement: a.k,
                        offset: a.O,
                        autoFlip: a.j
                    })
                      , h = u.x
                      , f = u.y
                      , g = u.padding
                      , _ = u.paddingValue;
                    r.style.position = "absolute",
                    r.style.left = h + "px",
                    r.style.top = f + "px",
                    r.style[g] = _ + "px",
                    a.P(e, r)
                }
            }
            ), this.S);
            this.l.set(n, d)
        }
        ,
        r.N = function(t) {
            var r = this
              , a = setTimeout((function() {
                var a = l.getElementById(t);
                a && (a.remove(),
                r.B(t, a))
            }
            ), this.M);
            this.u.set(t, a)
        }
        ,
        r._ = function(t, r) {
            "ontouchstart"in l || (t.stopImmediatePropagation(),
            clearInterval(this.u.get(r.id)),
            this.F(r))
        }
        ,
        r.p = function(t, r) {
            var a = r.id;
            "ontouchstart"in l || (t.stopImmediatePropagation(),
            clearInterval(this.l.get(a)),
            this.N(a))
        }
        ,
        t
    }();
    d.createHovercard = function(t, r) {
        var a = void 0 === r ? {} : r
          , n = a.additionalClass
          , i = a.myHash
          , v = a.i18n
          , d = void 0 === v ? {} : v
          , u = t.hash
          , h = t.thumbnailUrl
          , f = t.preferredUsername
          , g = t.displayName
          , _ = t.currentLocation
          , m = t.aboutMe
          , p = t.accounts
          , b = void 0 === p ? [] : p
          , w = l.createElement("div");
        w.className = "gravatar-hovercard" + (n ? " " + n : "");
        var k = o("https://gravatar.com/" + f + "?utm_source=hovercard")
          , y = e(g)
          , j = !m && i === u
          , O = b.reduce((function(t, r) {
            var a = r.url
              , n = r.shortname
              , i = r.iconUrl
              , c = r.name
              , v = s.indexOf(n);
            return -1 !== v && (t[v] = '\n\t\t\t\t\t\t<a class="gravatar-hovercard__social-link" href="' + o(a) + '" target="_blank" data-service-name="' + n + '">\n\t\t\t\t\t\t\t<img class="gravatar-hovercard__social-icon" src="' + o(i) + '" width="32" height="32" alt="' + e(c) + '" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t'),
            t
        }
        ), []).join("");
        return w.innerHTML = '\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t<div class="gravatar-hovercard__header">\n\t\t\t\t\t<a class="gravatar-hovercard__avatar-link" href="' + k + '" target="_blank">\n\t\t\t\t\t\t<img class="gravatar-hovercard__avatar" src="' + o(h) + '" width="56" height="56" alt="' + y + '" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="gravatar-hovercard__name-location-link" href="' + k + '" target="_blank">\n\t\t\t\t\t\t<h4 class="gravatar-hovercard__name">' + y + "</h4>\n\t\t\t\t\t\t" + (_ ? '<p class="gravatar-hovercard__location">' + e(_) + "</p>" : "") + '\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__body">\n\t\t\t\t\t' + (m ? '<p class="gravatar-hovercard__about">' + e(m) + "</p>" : "") + '\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__footer">\n\t\t\t\t\t<div class="gravatar-hovercard__social-links">\n\t\t\t\t\t\t<a class="gravatar-hovercard__social-link" href="' + k + '" target="_blank" data-service-name="gravatar">\n\t\t\t\t\t\t\t<img class="gravatar-hovercard__social-icon" src="https://secure.gravatar.com/icons/gravatar.svg" width="32" height="32" alt="Gravatar" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t' + O + '\n\t\t\t\t\t</div>\n\t\t\t\t\t<a\n\t\t\t\t\t\tclass="gravatar-hovercard__profile-link' + (j ? " gravatar-hovercard__profile-link--edit" : "") + '"\n\t\t\t\t\t\thref="' + (j ? "https://gravatar.com/profiles/edit?utm_source=hovercard" : k) + '"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span class="gravatar-hovercard__profile-link-text">\n\t\t\t\t\t\t\t' + c(d, j ? "Edit your profile" : "View profile") + '\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M12.6667 8.33338L9.16666 12.1667M12.6667 8.33338L2.66666 8.33338M12.6667 8.33338L9.16666 4.83338" stroke-width="1.5"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n    ',
        w
    }
    ;
    var u = n.i
      , h = JSON.parse('{"HO":{"m":"^0.5.9"}}');
    function f(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            r && (n = n.filter((function(r) {
                return Object.getOwnPropertyDescriptor(t, r).enumerable
            }
            ))),
            a.push.apply(a, n)
        }
        return a
    }
    function g(t) {
        for (var a = 1; a < arguments.length; a++) {
            var n = null != arguments[a] ? arguments[a] : {};
            a % 2 ? f(Object(n), !0).forEach((function(a) {
                var i, e, o;
                i = t,
                e = a,
                o = n[a],
                (e = r(e))in i ? Object.defineProperty(i, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[e] = o
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
            }
            ))
        }
        return t
    }
    function _(t) {
        new Image(1,1).src = "https://pixel.wp.com/g.gif?v=wpcom2&x_grav-hover=".concat(t, "&rand=").concat(Math.random(), "-").concat((new Date).getTime())
    }
    window.Gravatar = {
        version: h.HO.m,
        my_hash: "",
        profile_cb: function() {},
        createHovercard: function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return u.createHovercard(t, g({
                additionalClass: "wp-hovercard"
            }, r))
        },
        init: function() {
            var t = this
              , r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "body"
              , a = arguments.length > 1 ? arguments[1] : void 0
              , n = document;
            if (new u(g(g({}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}), {}, {
                myHash: this.my_hash,
                additionalClass: "wp-hovercard",
                onQueryHovercardRef: function(t) {
                    var r;
                    return t.classList.add("wp-hovercard-attachment"),
                    t.classList.add("grav-hashed"),
                    "A" !== (null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName) && t.classList.add("grav-hijack"),
                    t.onmouseover = function() {
                        return _("hover")
                    }
                    ,
                    t
                },
                onHovercardShown: function(r, a) {
                    t.profile_cb(r, a.id);
                    var n = a.querySelector(".gravatar-hovercard__profile-link");
                    n && (n.onclick = function() {
                        return _("click_view_profile")
                    }
                    );
                    var i = a.querySelector(".gravatar-hovercard__profile-link--edit");
                    i && (i.onclick = function() {
                        return _("click_edit_profile")
                    }
                    );
                    var e = a.querySelector(".gravatar-hovercard__avatar-link");
                    e && (e.onclick = function() {
                        return _("to_profile")
                    }
                    );
                    var o = a.querySelector(".gravatar-hovercard__name-location-link");
                    o && (o.onclick = function() {
                        return _("to_profile")
                    }
                    ),
                    a.querySelectorAll(".gravatar-hovercard__social-link").forEach((function(t) {
                        t.onclick = function() {
                            return _("click_".concat(t.dataset.serviceName))
                        }
                    }
                    )),
                    _("show")
                },
                onFetchProfileSuccess: function() {
                    return _("fetch")
                },
                onFetchProfileFailure: function() {
                    return _("profile_404")
                }
            })).attach(n.querySelector(r), {
                dataAttributeName: "",
                ignoreSelector: a ? "".concat(a, ' img[src*="gravatar.com/"]') : ""
            }),
            !n.querySelector('link[href*="hovercards.min.css"]')) {
                var i, e = n.querySelector('script[src*="/js/hovercards/hovercards"]'), o = e ? null === (i = e.getAttribute("src")) || void 0 === i ? void 0 : i.split("?")[1] : "";
                n.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" id="gravatar-card-css" href="https://0.gravatar.com/js/hovercards/hovercards.min.css'.concat(o ? "?" + o : "", '" />'))
            }
        }
    }
}();
