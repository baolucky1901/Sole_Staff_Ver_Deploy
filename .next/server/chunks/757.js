"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 8586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export NextLinkComposed */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);







// Add support for the sx prop for consistency with the other branches.
const Anchor = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)("a")({});
const NextLinkComposed = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function NextLinkComposed(props, ref) {
    const { to , linkAs , replace , scroll , shallow , prefetch , locale , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: to,
        prefetch: prefetch,
        as: linkAs,
        replace: replace,
        scroll: scroll,
        shallow: shallow,
        passHref: true,
        locale: locale,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
            ref: ref,
            ...other
        })
    });
});
// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const Link = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Link(props, ref) {
    const { activeClassName ="active" , as , className: classNameProps , href , linkAs: linkAsProp , locale , noLinkStyle , prefetch , replace , role , scroll , shallow , ...other } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName
    });
    const isExternal = typeof href === "string" && (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);
    if (isExternal) {
        if (noLinkStyle) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
                className: className,
                href: href,
                ref: ref,
                ...other
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: className,
            href: href,
            ref: ref,
            ...other
        });
    }
    const linkAs = linkAsProp || as;
    const nextjsProps = {
        to: href,
        linkAs,
        replace,
        scroll,
        shallow,
        prefetch,
        locale
    };
    if (noLinkStyle) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLinkComposed, {
            className: className,
            ref: ref,
            ...nextjsProps,
            ...other
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
        component: NextLinkComposed,
        className: className,
        ref: ref,
        ...nextjsProps,
        ...other
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 4757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8586);



const LogoWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(src_components_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .C)(({ theme  })=>`
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);
const LogoSignWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(({ theme  })=>`
        // width: 52px;
        // height: 38px;
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        border-radius: ${theme.general.borderRadius};
        background-color: transparent;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        // left: 60px;
        margin-left: 60px;
        // margin: 0 auto ${theme.spacing(2)};

          img {
            width: 60%;
            height: 60%;
            display: block;
          }

          span {
            font-size: 7px;
            font-weight: 400;
            margin-left: 7px;
          }
        
`
);
// const LogoSign = styled(Box)(
//   ({ theme }) => `
//         background: ${theme.general.reactFrameworkColor};
//         width: 18px;
//         height: 18px;
//         border-radius: ${theme.general.borderRadiusSm};
//         position: relative;
//         transform: rotate(45deg);
//         top: 3px;
//         left: 17px;
//         &:after, 
//         &:before {
//             content: "";
//             display: block;
//             width: 18px;
//             height: 18px;
//             position: absolute;
//             top: -1px;
//             right: -20px;
//             transform: rotate(0deg);
//             border-radius: ${theme.general.borderRadiusSm};
//         }
//         &:before {
//             background: ${theme.palette.primary.main};
//             right: auto;
//             left: 0;
//             top: 20px;
//         }
//         &:after {
//             background: ${theme.palette.secondary.main};
//         }
// `
// );
// const LogoSignInner = styled(Box)(
//   ({ theme }) => `
//         width: 16px;
//         height: 16px;
//         position: absolute;
//         top: 12px;
//         left: 12px;
//         z-index: 5;
//         border-radius: ${theme.general.borderRadiusSm};
//         background: ${theme.header.background};
// `
// );
const TooltipWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(({ className , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        ...props,
        classes: {
            popper: className
        }
    })
)(({ theme  })=>({
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_1__.tooltipClasses.tooltip}`]: {
            backgroundColor: theme.colors.alpha.trueWhite[100],
            color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
            fontSize: theme.typography.pxToRem(12),
            fontWeight: "bold",
            borderRadius: theme.general.borderRadiusSm,
            boxShadow: "0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"
        },
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_1__.tooltipClasses.arrow}`]: {
            color: theme.colors.alpha.trueWhite[100]
        }
    })
);
function Logo() {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TooltipWrapper, {
        title: "SoleAuthenticity - Identity | Responsibility | Prestige",
        arrow: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogoWrapper, {
            href: "/",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                sx: {
                    ".MuiBadge-badge": {
                        fontSize: theme.typography.pxToRem(11),
                        right: -60,
                        top: 12
                    }
                },
                overlap: "circular",
                color: "success",
                badgeContent: "1.0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LogoSignWrapper, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/static/images/logo/Logo_SoleAuthenticity.png",
                            alt: "Review"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "SoleAuthenticity"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Identity - Responsibility - Prestige"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ })

};
;