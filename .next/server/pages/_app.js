"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/lab/themeAugmentation"
const themeAugmentation_namespaceObject = require("@mui/lab/themeAugmentation");
;// CONCATENATED MODULE: ./src/theme/schemes/NebulaFighterTheme.ts


// import i18n from 'src/i18n/i18n';
const themeColors = {
    primary: "#8C7CF0",
    secondary: "#9EA4C1",
    success: "#57CA22",
    warning: "#FFA319",
    error: "#FF1943",
    info: "#33C2FF",
    black: "#CBCCD2",
    white: "#111633",
    primaryAlt: "#111633",
    trueWhite: "#ffffff"
};
const colors = {
    gradients: {
        blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
        blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
        blue4: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
        blue5: "linear-gradient(135deg, #97ABFF 10%, #123597 100%)",
        orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
        orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
        orange3: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
        purple3: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
        pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
        green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
        green2: "linear-gradient(to bottom, #00b09b, #96c93d)",
        black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
        black2: "linear-gradient(60deg, #29323c 0%, #485563 100%)"
    },
    shadows: {
        success: "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
        error: "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
        info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
        primary: "0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)",
        warning: "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
        card: "0px 0px 2px #6A7199",
        cardSm: "0px 0px 2px #6A7199",
        cardLg: "0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)"
    },
    layout: {
        general: {
            bodyBg: "#070C27"
        },
        sidebar: {
            background: themeColors.primaryAlt,
            textColor: themeColors.secondary,
            dividerBg: "#272C48",
            menuItemColor: "#9EA4C1",
            menuItemColorActive: "#ffffff",
            menuItemBg: themeColors.primaryAlt,
            menuItemBgActive: "rgba(43, 48, 77, .6)",
            menuItemIconColor: "#444A6B",
            menuItemIconColorActive: "#ffffff",
            menuItemHeadingColor: (0,material_.darken)(themeColors.secondary, 0.3)
        }
    },
    alpha: {
        white: {
            5: (0,material_.alpha)(themeColors.white, 0.02),
            10: (0,material_.alpha)(themeColors.white, 0.1),
            30: (0,material_.alpha)(themeColors.white, 0.3),
            50: (0,material_.alpha)(themeColors.white, 0.5),
            70: (0,material_.alpha)(themeColors.white, 0.7),
            100: themeColors.white
        },
        trueWhite: {
            5: (0,material_.alpha)(themeColors.trueWhite, 0.02),
            10: (0,material_.alpha)(themeColors.trueWhite, 0.1),
            30: (0,material_.alpha)(themeColors.trueWhite, 0.3),
            50: (0,material_.alpha)(themeColors.trueWhite, 0.5),
            70: (0,material_.alpha)(themeColors.trueWhite, 0.7),
            100: themeColors.trueWhite
        },
        black: {
            5: (0,material_.alpha)(themeColors.black, 0.02),
            10: (0,material_.alpha)(themeColors.black, 0.1),
            30: (0,material_.alpha)(themeColors.black, 0.3),
            50: (0,material_.alpha)(themeColors.black, 0.5),
            70: (0,material_.alpha)(themeColors.black, 0.7),
            100: themeColors.black
        }
    },
    secondary: {
        lighter: (0,material_.alpha)(themeColors.secondary, 0.85),
        light: (0,material_.alpha)(themeColors.secondary, 0.6),
        main: themeColors.secondary,
        dark: (0,material_.darken)(themeColors.secondary, 0.2)
    },
    primary: {
        lighter: (0,material_.alpha)(themeColors.primary, 0.85),
        light: (0,material_.alpha)(themeColors.primary, 0.3),
        main: themeColors.primary,
        dark: (0,material_.darken)(themeColors.primary, 0.2)
    },
    success: {
        lighter: (0,material_.alpha)(themeColors.success, 0.85),
        light: (0,material_.alpha)(themeColors.success, 0.3),
        main: themeColors.success,
        dark: (0,material_.darken)(themeColors.success, 0.2)
    },
    warning: {
        lighter: (0,material_.alpha)(themeColors.warning, 0.85),
        light: (0,material_.alpha)(themeColors.warning, 0.3),
        main: themeColors.warning,
        dark: (0,material_.darken)(themeColors.warning, 0.2)
    },
    error: {
        lighter: (0,material_.alpha)(themeColors.error, 0.85),
        light: (0,material_.alpha)(themeColors.error, 0.3),
        main: themeColors.error,
        dark: (0,material_.darken)(themeColors.error, 0.2)
    },
    info: {
        lighter: (0,material_.alpha)(themeColors.info, 0.85),
        light: (0,material_.alpha)(themeColors.info, 0.3),
        main: themeColors.info,
        dark: (0,material_.darken)(themeColors.info, 0.2)
    }
};
const NebulaFighterTheme = (0,material_.createTheme)({
    // direction: i18n.dir(),
    colors: {
        gradients: {
            blue1: colors.gradients.blue1,
            blue2: colors.gradients.blue2,
            blue3: colors.gradients.blue3,
            blue4: colors.gradients.blue4,
            blue5: colors.gradients.blue5,
            orange1: colors.gradients.orange1,
            orange2: colors.gradients.orange2,
            orange3: colors.gradients.orange3,
            purple1: colors.gradients.purple1,
            purple3: colors.gradients.purple3,
            pink1: colors.gradients.pink1,
            pink2: colors.gradients.pink2,
            green1: colors.gradients.green1,
            green2: colors.gradients.green2,
            black1: colors.gradients.black1,
            black2: colors.gradients.black2
        },
        shadows: {
            success: colors.shadows.success,
            error: colors.shadows.error,
            primary: colors.shadows.primary,
            info: colors.shadows.info,
            warning: colors.shadows.warning
        },
        alpha: {
            white: {
                5: (0,material_.alpha)(themeColors.white, 0.02),
                10: (0,material_.alpha)(themeColors.white, 0.1),
                30: (0,material_.alpha)(themeColors.white, 0.3),
                50: (0,material_.alpha)(themeColors.white, 0.5),
                70: (0,material_.alpha)(themeColors.white, 0.7),
                100: themeColors.white
            },
            trueWhite: {
                5: (0,material_.alpha)(themeColors.trueWhite, 0.02),
                10: (0,material_.alpha)(themeColors.trueWhite, 0.1),
                30: (0,material_.alpha)(themeColors.trueWhite, 0.3),
                50: (0,material_.alpha)(themeColors.trueWhite, 0.5),
                70: (0,material_.alpha)(themeColors.trueWhite, 0.7),
                100: themeColors.trueWhite
            },
            black: {
                5: (0,material_.alpha)(themeColors.black, 0.02),
                10: (0,material_.alpha)(themeColors.black, 0.1),
                30: (0,material_.alpha)(themeColors.black, 0.3),
                50: (0,material_.alpha)(themeColors.black, 0.5),
                70: (0,material_.alpha)(themeColors.black, 0.7),
                100: themeColors.black
            }
        },
        secondary: {
            lighter: (0,material_.alpha)(themeColors.secondary, 0.1),
            light: (0,material_.alpha)(themeColors.secondary, 0.3),
            main: themeColors.secondary,
            dark: (0,material_.darken)(themeColors.secondary, 0.2)
        },
        primary: {
            lighter: (0,material_.alpha)(themeColors.primary, 0.1),
            light: (0,material_.alpha)(themeColors.primary, 0.3),
            main: themeColors.primary,
            dark: (0,material_.darken)(themeColors.primary, 0.2)
        },
        success: {
            lighter: (0,material_.alpha)(themeColors.success, 0.1),
            light: (0,material_.alpha)(themeColors.success, 0.3),
            main: themeColors.success,
            dark: (0,material_.darken)(themeColors.success, 0.2)
        },
        warning: {
            lighter: (0,material_.alpha)(themeColors.warning, 0.1),
            light: (0,material_.alpha)(themeColors.warning, 0.3),
            main: themeColors.warning,
            dark: (0,material_.darken)(themeColors.warning, 0.2)
        },
        error: {
            lighter: (0,material_.alpha)(themeColors.error, 0.1),
            light: (0,material_.alpha)(themeColors.error, 0.3),
            main: themeColors.error,
            dark: (0,material_.darken)(themeColors.error, 0.2)
        },
        info: {
            lighter: (0,material_.alpha)(themeColors.info, 0.1),
            light: (0,material_.alpha)(themeColors.info, 0.3),
            main: themeColors.info,
            dark: (0,material_.darken)(themeColors.info, 0.2)
        }
    },
    general: {
        reactFrameworkColor: "#00D8FF",
        borderRadiusSm: "6px",
        borderRadius: "10px",
        borderRadiusLg: "12px",
        borderRadiusXl: "16px"
    },
    sidebar: {
        background: colors.layout.sidebar.background,
        textColor: colors.layout.sidebar.textColor,
        dividerBg: colors.layout.sidebar.dividerBg,
        menuItemColor: colors.layout.sidebar.menuItemColor,
        menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
        menuItemBg: colors.layout.sidebar.menuItemBg,
        menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
        boxShadow: "1px 0 0 #272C48",
        width: "290px"
    },
    header: {
        height: "80px",
        background: themeColors.primaryAlt,
        boxShadow: "0px 1px 0px #272C48",
        textColor: colors.secondary.main
    },
    spacing: 9,
    palette: {
        common: {
            black: colors.alpha.black[100],
            white: colors.alpha.white[100]
        },
        mode: "dark",
        primary: {
            light: colors.primary.light,
            main: colors.primary.main,
            dark: colors.primary.dark
        },
        secondary: {
            light: colors.secondary.light,
            main: colors.secondary.main,
            dark: colors.secondary.dark
        },
        error: {
            light: colors.error.light,
            main: colors.error.main,
            dark: colors.error.dark,
            contrastText: themeColors.trueWhite
        },
        success: {
            light: colors.success.light,
            main: colors.success.main,
            dark: colors.success.dark,
            contrastText: themeColors.trueWhite
        },
        info: {
            light: colors.info.light,
            main: colors.info.main,
            dark: colors.info.dark,
            contrastText: themeColors.trueWhite
        },
        warning: {
            light: colors.warning.light,
            main: colors.warning.main,
            dark: colors.warning.dark,
            contrastText: themeColors.trueWhite
        },
        text: {
            primary: colors.alpha.black[100],
            secondary: colors.alpha.black[70],
            disabled: colors.alpha.black[50]
        },
        background: {
            paper: colors.alpha.white[100],
            default: colors.layout.general.bodyBg
        },
        action: {
            active: colors.alpha.black[100],
            hover: colors.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors.alpha.black[50],
            disabledBackground: colors.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840
        }
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: (0,material_.alpha)((0,material_.darken)("#070C27", 0.5), 0.4),
                    backdropFilter: "blur(2px)",
                    "&.MuiBackdrop-invisible": {
                        backgroundColor: "transparent",
                        backdropFilter: "blur(2px)"
                    }
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: "bold"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: (0,material_.darken)(themeColors.primaryAlt, 0.5)
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "html, body": {
                    width: "100%",
                    height: "100%"
                },
                body: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1
                },
                "#__next": {
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column"
                },
                html: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased"
                },
                ".child-popover .MuiPaper-root .MuiList-root": {
                    flexDirection: "column"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    background: colors.primary.lighter
                },
                "#nprogress .spinner-icon": {
                    borderTopColor: colors.primary.lighter,
                    borderLeftColor: colors.primary.lighter
                },
                "#nprogress .peg": {
                    boxShadow: "0 0 15px " + colors.primary.lighter + ", 0 0 8px" + colors.primary.light
                },
                ":root": {
                    "--swiper-theme-color": colors.primary.main,
                    colorScheme: "dark"
                },
                code: {
                    background: colors.info.lighter,
                    color: colors.alpha.black[100],
                    borderRadius: 4,
                    padding: 4
                },
                "@keyframes pulse": {
                    "0%": {
                        transform: "scale(.75)"
                    },
                    "20%": {
                        transform: "scale(1.1)"
                    },
                    "40%": {
                        transform: "scale(.75)"
                    },
                    "60%": {
                        transform: "scale(1.05)"
                    },
                    "80%": {
                        transform: "scale(.75)"
                    },
                    "100%": {
                        transform: "scale(.75)"
                    }
                },
                "@keyframes ripple": {
                    "0%": {
                        transform: "scale(.8)",
                        opacity: 1
                    },
                    "100%": {
                        transform: "scale(2.8)",
                        opacity: 0
                    }
                },
                "@keyframes float": {
                    "0%": {
                        transform: "translate(0%, 0%)"
                    },
                    "100%": {
                        transform: "translate(3%, 3%)"
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors.alpha.black[50]
                },
                icon: {
                    top: "calc(50% - 14px)"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined": {
                        paddingRight: 6
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.alpha.black[50]
                    },
                    "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.primary.main
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: "bold",
                    lineHeight: "40px",
                    fontSize: 13,
                    background: colors.alpha.black[5],
                    color: colors.alpha.black[70]
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5
                },
                title: {
                    fontSize: 15
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: "50px"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: colors.alpha.black[5],
                    color: colors.alpha.black[100],
                    "&:hover": {
                        background: colors.alpha.black[10]
                    }
                },
                deleteIcon: {
                    color: colors.alpha.black[50],
                    "&:hover": {
                        color: colors.alpha.black[70]
                    }
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "&.Mui-expanded": {
                        margin: 0
                    },
                    "&::before": {
                        display: "none"
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: "bold"
                },
                colorDefault: {
                    background: colors.alpha.black[30],
                    color: colors.alpha.trueWhite[100]
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: "center"
                },
                avatar: {
                    background: colors.alpha.black[10],
                    fontSize: 13,
                    color: colors.alpha.black[70],
                    fontWeight: "bold",
                    "&:first-of-type": {
                        border: 0,
                        background: "transparent"
                    }
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: "bold",
                    transition: "all .2s"
                },
                textPrimary: {
                    "&.Mui-selected": {
                        boxShadow: colors.shadows.primary
                    },
                    "&.MuiButtonBase-root:hover": {
                        background: colors.alpha.black[5]
                    },
                    "&.Mui-selected.MuiButtonBase-root:hover": {
                        background: colors.primary.main
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                    textTransform: "none",
                    paddingLeft: 16,
                    paddingRight: 16,
                    ".MuiSvgIcon-root": {
                        transition: "all .2s"
                    }
                },
                endIcon: {
                    marginRight: -8
                },
                containedSecondary: {
                    backgroundColor: colors.secondary.main,
                    color: colors.alpha.white[100],
                    border: "1px solid " + colors.alpha.black[30]
                },
                outlinedSecondary: {
                    backgroundColor: colors.alpha.white[100],
                    "&:hover, &.MuiSelected": {
                        backgroundColor: colors.alpha.black[5],
                        color: colors.alpha.black[100]
                    }
                },
                sizeSmall: {
                    padding: "6px 16px",
                    lineHeight: 1.5
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false
            },
            styleOverrides: {
                root: {
                    borderRadius: 6
                }
            }
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: colors.primary.main,
                    background: colors.alpha.white[100],
                    transition: "all .2s",
                    "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                        color: themeColors.trueWhite,
                        background: colors.primary.main
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    "& .MuiTouchRipple-root": {
                        borderRadius: 8
                    }
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "& .MuiTouchRipple-root": {
                        opacity: 0.3
                    }
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors.alpha.black[10],
                    border: 0,
                    height: 1
                },
                vertical: {
                    height: "auto",
                    width: 1,
                    "&.MuiDivider-flexItem.MuiDivider-fullWidth": {
                        height: "auto"
                    },
                    "&.MuiDivider-absolute.MuiDivider-fullWidth": {
                        height: "100%"
                    }
                },
                withChildren: {
                    "&:before, &:after": {
                        border: 0
                    }
                },
                wrapper: {
                    background: colors.alpha.white[100],
                    fontWeight: "bold",
                    height: 24,
                    lineHeight: "24px",
                    marginTop: -12,
                    color: "inherit",
                    textTransform: "uppercase"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    padding: 0
                },
                elevation0: {
                    boxShadow: "none"
                },
                elevation: {
                    boxShadow: colors.shadows.card
                },
                elevation2: {
                    boxShadow: colors.shadows.cardSm
                },
                elevation24: {
                    boxShadow: colors.shadows.cardLg
                },
                outlined: {
                    boxShadow: colors.shadows.card
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    "& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel": {
                        transform: "none"
                    },
                    "& .MuiSlider-valueLabel": {
                        borderRadius: 6,
                        background: colors.alpha.black[100],
                        color: colors.alpha.white[100]
                    }
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    "& .MuiListItem-button": {
                        transition: "all .2s",
                        "& > .MuiSvgIcon-root": {
                            minWidth: 34
                        },
                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        }
                    },
                    "& .MuiListItem-root.MuiButtonBase-root.Mui-selected": {
                        backgroundColor: colors.alpha.black[10]
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root:active": {
                        backgroundColor: (0,material_.alpha)(colors.primary.lighter, 0.2)
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root": {
                        opacity: 0.2
                    }
                },
                padding: {
                    padding: "12px",
                    "& .MuiListItem-button": {
                        borderRadius: 6,
                        margin: "1px 0"
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: "visible"
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: "1px solid " + colors.primary.dark,
                    boxShadow: "0px 2px 10px " + colors.primary.light
                },
                scrollableX: {
                    overflow: "visible !important"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: "color .2s",
                    textTransform: "capitalize",
                    "&.MuiButtonBase-root": {
                        minWidth: "auto",
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: colors.alpha.trueWhite[100],
                        zIndex: 5
                    },
                    "&:hover": {
                        color: colors.alpha.trueWhite[70]
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12
                },
                list: {
                    padding: 12,
                    "& .MuiMenuItem-root.MuiButtonBase-root": {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: "all .2s",
                        color: colors.alpha.black[70],
                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        },
                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: colors.alpha.black[100],
                            background: (0,material_.alpha)(colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: "transparent",
                    transition: "all .2s",
                    "&:hover, &:active, &.active, &.Mui-selected": {
                        color: colors.alpha.black[100],
                        background: (0,material_.alpha)(colors.primary.lighter, 0.2)
                    },
                    "&.Mui-selected:hover": {
                        background: (0,material_.alpha)(colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&.MuiButtonBase-root": {
                        color: colors.secondary.main,
                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: colors.alpha.black[100],
                            background: (0,material_.alpha)(colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1
                },
                root: {
                    ".MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment": {
                        right: 14
                    }
                },
                clearIndicator: {
                    background: (0,material_.alpha)(colors.error.lighter, 0.2),
                    color: colors.error.main,
                    marginRight: 8,
                    "&:hover": {
                        background: (0,material_.alpha)(colors.error.lighter, 0.3)
                    }
                },
                popupIndicator: {
                    color: colors.alpha.black[70],
                    "&:hover": {
                        background: (0,material_.alpha)(colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    "& .MuiIconButton-root": {
                        padding: 8
                    }
                },
                select: {
                    "&:focus": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: "0 !important",
                    padding: "0 !important"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors.alpha.black[5]
                },
                root: {
                    transition: "background-color .2s",
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: (0,material_.alpha)(colors.alpha.black[5], 0.05)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: colors.alpha.black[10],
                    fontSize: 14
                },
                head: {
                    textTransform: "uppercase",
                    fontSize: 13,
                    fontWeight: "bold",
                    color: colors.alpha.black[70]
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: 14
                },
                standardInfo: {
                    color: colors.info.main
                },
                action: {
                    color: colors.alpha.black[70]
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: "absolute",
                    top: "50%",
                    marginTop: -6,
                    left: -6
                },
                outlined: {
                    backgroundColor: colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + colors.alpha.white[100]
                },
                outlinedPrimary: {
                    backgroundColor: colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + colors.alpha.white[100]
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors.alpha.black[10]
                }
            }
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: "8px 0",
                    "&:before": {
                        display: "none"
                    }
                },
                missingOppositeContent: {
                    "&:before": {
                        display: "none"
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: (0,material_.alpha)(colors.alpha.black["100"], 0.95),
                    padding: "8px 16px",
                    fontSize: 13
                },
                arrow: {
                    color: (0,material_.alpha)(colors.alpha.black["100"], 0.95)
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: "visible",
                    "& .MuiButtonBase-root": {
                        position: "absolute",
                        padding: 6,
                        transition: "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                    },
                    "& .MuiIconButton-root": {
                        borderRadius: 100
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        opacity: 0.3
                    }
                },
                thumb: {
                    border: "1px solid " + colors.alpha.black[30],
                    boxShadow: "0px 9px 14px " + colors.alpha.black[10] + ", 0px 2px 2px " + colors.alpha.black[10]
                },
                track: {
                    backgroundColor: colors.alpha.black[5],
                    border: "1px solid " + colors.alpha.black[10],
                    boxShadow: "inset 0px 1px 1px " + colors.alpha.black[10],
                    opacity: 1
                },
                colorPrimary: {
                    "& .MuiSwitch-thumb": {
                        backgroundColor: colors.alpha.white[100]
                    },
                    "&.Mui-checked .MuiSwitch-thumb": {
                        backgroundColor: colors.primary.main
                    }
                }
            }
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors.alpha.black[5]
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "&.MuiStepIcon-completed": {
                        color: colors.success.main
                    }
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: "h1",
                    h2: "h2",
                    h3: "div",
                    h4: "div",
                    h5: "div",
                    h6: "div",
                    subtitle1: "div",
                    subtitle2: "div",
                    body1: "div",
                    body2: "div"
                }
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7
                }
            }
        }
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        h1: {
            fontWeight: 700,
            fontSize: 35
        },
        h2: {
            fontWeight: 700,
            fontSize: 30
        },
        h3: {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 1.4,
            color: colors.alpha.black[100]
        },
        h4: {
            fontWeight: 700,
            fontSize: 16
        },
        h5: {
            fontWeight: 700,
            fontSize: 14
        },
        h6: {
            fontSize: 15
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 14
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: 13,
            textTransform: "uppercase",
            color: colors.alpha.black[50]
        },
        subtitle1: {
            fontSize: 14,
            color: colors.alpha.black[70]
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 15,
            color: colors.alpha.black[50]
        },
        overline: {
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase"
        }
    },
    shadows: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
    ]
});

;// CONCATENATED MODULE: ./src/theme/schemes/DarkSpacesTheme.ts


// import i18n from 'src/i18n/i18n';
const DarkSpacesTheme_themeColors = {
    primary: "#CB3C1D",
    secondary: "#A1A1A1",
    success: "#57CA22",
    warning: "#FFA319",
    error: "#FF1943",
    info: "#33C2FF",
    black: "#FFFFFF",
    white: "#252525",
    primaryAlt: "#090A0C",
    trueWhite: "#ffffff"
};
const DarkSpacesTheme_colors = {
    gradients: {
        blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
        blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
        blue4: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
        blue5: "linear-gradient(135deg, #97ABFF 10%, #123597 100%)",
        orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
        orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
        orange3: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
        purple3: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
        pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
        green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
        green2: "linear-gradient(to bottom, #00b09b, #96c93d)",
        black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
        black2: "linear-gradient(60deg, #29323c 0%, #485563 100%)"
    },
    shadows: {
        success: "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
        error: "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
        info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
        primary: "0px 1px 4px rgba(162, 48, 23, 0.25), 0px 3px 12px 2px rgba(162, 48, 23, 0.35)",
        warning: "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
        card: "0px 0px 2px #996a6a",
        cardSm: "0px 0px 2px #996a6a",
        cardLg: "0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)"
    },
    layout: {
        general: {
            bodyBg: "#1C1C1C"
        },
        sidebar: {
            background: DarkSpacesTheme_themeColors.primaryAlt,
            textColor: DarkSpacesTheme_themeColors.secondary,
            dividerBg: "#1d1818",
            menuItemColor: "#A3A3A3",
            menuItemColorActive: "#ffffff",
            menuItemBg: DarkSpacesTheme_themeColors.primaryAlt,
            menuItemBgActive: "#221e1e",
            menuItemIconColor: DarkSpacesTheme_themeColors.secondary,
            menuItemIconColorActive: "#ffffff",
            menuItemHeadingColor: (0,material_.darken)(DarkSpacesTheme_themeColors.secondary, 0.3)
        }
    },
    alpha: {
        white: {
            5: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.02),
            10: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.1),
            30: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.3),
            50: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.5),
            70: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.7),
            100: DarkSpacesTheme_themeColors.white
        },
        trueWhite: {
            5: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.02),
            10: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.1),
            30: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.3),
            50: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.5),
            70: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.7),
            100: DarkSpacesTheme_themeColors.trueWhite
        },
        black: {
            5: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.02),
            10: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.1),
            30: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.3),
            50: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.5),
            70: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.7),
            100: DarkSpacesTheme_themeColors.black
        }
    },
    secondary: {
        lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.secondary, 0.85),
        light: (0,material_.alpha)(DarkSpacesTheme_themeColors.secondary, 0.6),
        main: DarkSpacesTheme_themeColors.secondary,
        dark: (0,material_.darken)(DarkSpacesTheme_themeColors.secondary, 0.2)
    },
    primary: {
        lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.primary, 0.85),
        light: (0,material_.alpha)(DarkSpacesTheme_themeColors.primary, 0.3),
        main: DarkSpacesTheme_themeColors.primary,
        dark: (0,material_.darken)(DarkSpacesTheme_themeColors.primary, 0.2)
    },
    success: {
        lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.success, 0.85),
        light: (0,material_.alpha)(DarkSpacesTheme_themeColors.success, 0.3),
        main: DarkSpacesTheme_themeColors.success,
        dark: (0,material_.darken)(DarkSpacesTheme_themeColors.success, 0.2)
    },
    warning: {
        lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.warning, 0.85),
        light: (0,material_.alpha)(DarkSpacesTheme_themeColors.warning, 0.3),
        main: DarkSpacesTheme_themeColors.warning,
        dark: (0,material_.darken)(DarkSpacesTheme_themeColors.warning, 0.2)
    },
    error: {
        lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.error, 0.85),
        light: (0,material_.alpha)(DarkSpacesTheme_themeColors.error, 0.3),
        main: DarkSpacesTheme_themeColors.error,
        dark: (0,material_.darken)(DarkSpacesTheme_themeColors.error, 0.2)
    },
    info: {
        lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.info, 0.85),
        light: (0,material_.alpha)(DarkSpacesTheme_themeColors.info, 0.3),
        main: DarkSpacesTheme_themeColors.info,
        dark: (0,material_.darken)(DarkSpacesTheme_themeColors.info, 0.2)
    }
};
const DarkSpacesTheme = (0,material_.createTheme)({
    // direction: i18n.dir(),
    colors: {
        gradients: {
            blue1: DarkSpacesTheme_colors.gradients.blue1,
            blue2: DarkSpacesTheme_colors.gradients.blue2,
            blue3: DarkSpacesTheme_colors.gradients.blue3,
            blue4: DarkSpacesTheme_colors.gradients.blue4,
            blue5: DarkSpacesTheme_colors.gradients.blue5,
            orange1: DarkSpacesTheme_colors.gradients.orange1,
            orange2: DarkSpacesTheme_colors.gradients.orange2,
            orange3: DarkSpacesTheme_colors.gradients.orange3,
            purple1: DarkSpacesTheme_colors.gradients.purple1,
            purple3: DarkSpacesTheme_colors.gradients.purple3,
            pink1: DarkSpacesTheme_colors.gradients.pink1,
            pink2: DarkSpacesTheme_colors.gradients.pink2,
            green1: DarkSpacesTheme_colors.gradients.green1,
            green2: DarkSpacesTheme_colors.gradients.green2,
            black1: DarkSpacesTheme_colors.gradients.black1,
            black2: DarkSpacesTheme_colors.gradients.black2
        },
        shadows: {
            success: DarkSpacesTheme_colors.shadows.success,
            error: DarkSpacesTheme_colors.shadows.error,
            primary: DarkSpacesTheme_colors.shadows.primary,
            info: DarkSpacesTheme_colors.shadows.info,
            warning: DarkSpacesTheme_colors.shadows.warning
        },
        alpha: {
            white: {
                5: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.02),
                10: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.1),
                30: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.3),
                50: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.5),
                70: (0,material_.alpha)(DarkSpacesTheme_themeColors.white, 0.7),
                100: DarkSpacesTheme_themeColors.white
            },
            trueWhite: {
                5: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.02),
                10: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.1),
                30: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.3),
                50: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.5),
                70: (0,material_.alpha)(DarkSpacesTheme_themeColors.trueWhite, 0.7),
                100: DarkSpacesTheme_themeColors.trueWhite
            },
            black: {
                5: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.02),
                10: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.1),
                30: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.3),
                50: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.5),
                70: (0,material_.alpha)(DarkSpacesTheme_themeColors.black, 0.7),
                100: DarkSpacesTheme_themeColors.black
            }
        },
        secondary: {
            lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.secondary, 0.1),
            light: (0,material_.alpha)(DarkSpacesTheme_themeColors.secondary, 0.3),
            main: DarkSpacesTheme_themeColors.secondary,
            dark: (0,material_.darken)(DarkSpacesTheme_themeColors.secondary, 0.2)
        },
        primary: {
            lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.primary, 0.1),
            light: (0,material_.alpha)(DarkSpacesTheme_themeColors.primary, 0.3),
            main: DarkSpacesTheme_themeColors.primary,
            dark: (0,material_.darken)(DarkSpacesTheme_themeColors.primary, 0.2)
        },
        success: {
            lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.success, 0.1),
            light: (0,material_.alpha)(DarkSpacesTheme_themeColors.success, 0.3),
            main: DarkSpacesTheme_themeColors.success,
            dark: (0,material_.darken)(DarkSpacesTheme_themeColors.success, 0.2)
        },
        warning: {
            lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.warning, 0.1),
            light: (0,material_.alpha)(DarkSpacesTheme_themeColors.warning, 0.3),
            main: DarkSpacesTheme_themeColors.warning,
            dark: (0,material_.darken)(DarkSpacesTheme_themeColors.warning, 0.2)
        },
        error: {
            lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.error, 0.1),
            light: (0,material_.alpha)(DarkSpacesTheme_themeColors.error, 0.3),
            main: DarkSpacesTheme_themeColors.error,
            dark: (0,material_.darken)(DarkSpacesTheme_themeColors.error, 0.2)
        },
        info: {
            lighter: (0,material_.alpha)(DarkSpacesTheme_themeColors.info, 0.1),
            light: (0,material_.alpha)(DarkSpacesTheme_themeColors.info, 0.3),
            main: DarkSpacesTheme_themeColors.info,
            dark: (0,material_.darken)(DarkSpacesTheme_themeColors.info, 0.2)
        }
    },
    general: {
        reactFrameworkColor: "#00D8FF",
        borderRadiusSm: "6px",
        borderRadius: "10px",
        borderRadiusLg: "12px",
        borderRadiusXl: "16px"
    },
    sidebar: {
        background: DarkSpacesTheme_colors.layout.sidebar.background,
        textColor: DarkSpacesTheme_colors.layout.sidebar.textColor,
        dividerBg: DarkSpacesTheme_colors.layout.sidebar.dividerBg,
        menuItemColor: DarkSpacesTheme_colors.layout.sidebar.menuItemColor,
        menuItemColorActive: DarkSpacesTheme_colors.layout.sidebar.menuItemColorActive,
        menuItemBg: DarkSpacesTheme_colors.layout.sidebar.menuItemBg,
        menuItemBgActive: DarkSpacesTheme_colors.layout.sidebar.menuItemBgActive,
        menuItemIconColor: DarkSpacesTheme_colors.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: DarkSpacesTheme_colors.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: DarkSpacesTheme_colors.layout.sidebar.menuItemHeadingColor,
        boxShadow: "1px 0 0 #413333",
        width: "290px"
    },
    header: {
        height: "80px",
        background: DarkSpacesTheme_themeColors.primaryAlt,
        boxShadow: "0px 1px 0px" + DarkSpacesTheme_themeColors.primaryAlt,
        textColor: DarkSpacesTheme_colors.secondary.main
    },
    spacing: 9,
    palette: {
        common: {
            black: DarkSpacesTheme_colors.alpha.black[100],
            white: DarkSpacesTheme_colors.alpha.white[100]
        },
        mode: "dark",
        primary: {
            light: DarkSpacesTheme_colors.primary.light,
            main: DarkSpacesTheme_colors.primary.main,
            dark: DarkSpacesTheme_colors.primary.dark
        },
        secondary: {
            light: DarkSpacesTheme_colors.secondary.light,
            main: DarkSpacesTheme_colors.secondary.main,
            dark: DarkSpacesTheme_colors.secondary.dark
        },
        error: {
            light: DarkSpacesTheme_colors.error.light,
            main: DarkSpacesTheme_colors.error.main,
            dark: DarkSpacesTheme_colors.error.dark,
            contrastText: DarkSpacesTheme_themeColors.trueWhite
        },
        success: {
            light: DarkSpacesTheme_colors.success.light,
            main: DarkSpacesTheme_colors.success.main,
            dark: DarkSpacesTheme_colors.success.dark,
            contrastText: DarkSpacesTheme_themeColors.trueWhite
        },
        info: {
            light: DarkSpacesTheme_colors.info.light,
            main: DarkSpacesTheme_colors.info.main,
            dark: DarkSpacesTheme_colors.info.dark,
            contrastText: DarkSpacesTheme_themeColors.trueWhite
        },
        warning: {
            light: DarkSpacesTheme_colors.warning.light,
            main: DarkSpacesTheme_colors.warning.main,
            dark: DarkSpacesTheme_colors.warning.dark,
            contrastText: DarkSpacesTheme_themeColors.trueWhite
        },
        text: {
            primary: DarkSpacesTheme_colors.alpha.black[100],
            secondary: DarkSpacesTheme_colors.alpha.black[70],
            disabled: DarkSpacesTheme_colors.alpha.black[50]
        },
        background: {
            paper: DarkSpacesTheme_colors.alpha.white[100],
            default: DarkSpacesTheme_colors.layout.general.bodyBg
        },
        action: {
            active: DarkSpacesTheme_colors.alpha.black[100],
            hover: DarkSpacesTheme_colors.primary.lighter,
            hoverOpacity: 0.1,
            selected: DarkSpacesTheme_colors.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: DarkSpacesTheme_colors.alpha.black[50],
            disabledBackground: DarkSpacesTheme_colors.alpha.black[5],
            disabledOpacity: 0.38,
            focus: DarkSpacesTheme_colors.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840
        }
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: (0,material_.alpha)((0,material_.darken)("#1C1C1C", 0.5), 0.4),
                    backdropFilter: "blur(2px)",
                    "&.MuiBackdrop-invisible": {
                        backgroundColor: "transparent",
                        backdropFilter: "blur(2px)"
                    }
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: "bold"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: (0,material_.darken)(DarkSpacesTheme_themeColors.primaryAlt, 0.5)
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "html, body": {
                    width: "100%",
                    height: "100%"
                },
                body: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1
                },
                "#__next": {
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column"
                },
                html: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased"
                },
                ".child-popover .MuiPaper-root .MuiList-root": {
                    flexDirection: "column"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    background: DarkSpacesTheme_colors.primary.lighter
                },
                "#nprogress .spinner-icon": {
                    borderTopColor: DarkSpacesTheme_colors.primary.lighter,
                    borderLeftColor: DarkSpacesTheme_colors.primary.lighter
                },
                "#nprogress .peg": {
                    boxShadow: "0 0 15px " + DarkSpacesTheme_colors.primary.lighter + ", 0 0 8px" + DarkSpacesTheme_colors.primary.light
                },
                ":root": {
                    "--swiper-theme-color": DarkSpacesTheme_colors.primary.main,
                    colorScheme: "dark"
                },
                code: {
                    background: DarkSpacesTheme_colors.info.lighter,
                    color: DarkSpacesTheme_colors.alpha.black[100],
                    borderRadius: 4,
                    padding: 4
                },
                "@keyframes pulse": {
                    "0%": {
                        transform: "scale(.75)"
                    },
                    "20%": {
                        transform: "scale(1.1)"
                    },
                    "40%": {
                        transform: "scale(.75)"
                    },
                    "60%": {
                        transform: "scale(1.05)"
                    },
                    "80%": {
                        transform: "scale(.75)"
                    },
                    "100%": {
                        transform: "scale(.75)"
                    }
                },
                "@keyframes ripple": {
                    "0%": {
                        transform: "scale(.8)",
                        opacity: 1
                    },
                    "100%": {
                        transform: "scale(2.8)",
                        opacity: 0
                    }
                },
                "@keyframes float": {
                    "0%": {
                        transform: "translate(0%, 0%)"
                    },
                    "100%": {
                        transform: "translate(3%, 3%)"
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: DarkSpacesTheme_colors.alpha.black[50]
                },
                icon: {
                    top: "calc(50% - 14px)"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined": {
                        paddingRight: 6
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: DarkSpacesTheme_colors.alpha.black[50]
                    },
                    "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: DarkSpacesTheme_colors.primary.main
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: "bold",
                    lineHeight: "40px",
                    fontSize: 13,
                    background: DarkSpacesTheme_colors.alpha.black[5],
                    color: DarkSpacesTheme_colors.alpha.black[70]
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5
                },
                title: {
                    fontSize: 15
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: "50px"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: DarkSpacesTheme_colors.alpha.black[5],
                    color: DarkSpacesTheme_colors.alpha.black[100],
                    "&:hover": {
                        background: DarkSpacesTheme_colors.alpha.black[10]
                    }
                },
                deleteIcon: {
                    color: DarkSpacesTheme_colors.alpha.black[50],
                    "&:hover": {
                        color: DarkSpacesTheme_colors.alpha.black[70]
                    }
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "&.Mui-expanded": {
                        margin: 0
                    },
                    "&::before": {
                        display: "none"
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: "bold"
                },
                colorDefault: {
                    background: DarkSpacesTheme_colors.alpha.black[30],
                    color: DarkSpacesTheme_colors.alpha.trueWhite[100]
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: "center"
                },
                avatar: {
                    background: DarkSpacesTheme_colors.alpha.black[10],
                    fontSize: 13,
                    color: DarkSpacesTheme_colors.alpha.black[70],
                    fontWeight: "bold",
                    "&:first-of-type": {
                        border: 0,
                        background: "transparent"
                    }
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: "bold",
                    transition: "all .2s"
                },
                textPrimary: {
                    "&.Mui-selected": {
                        boxShadow: DarkSpacesTheme_colors.shadows.primary
                    },
                    "&.MuiButtonBase-root:hover": {
                        background: DarkSpacesTheme_colors.alpha.black[5]
                    },
                    "&.Mui-selected.MuiButtonBase-root:hover": {
                        background: DarkSpacesTheme_colors.primary.main
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                    textTransform: "none",
                    paddingLeft: 16,
                    paddingRight: 16,
                    ".MuiSvgIcon-root": {
                        transition: "all .2s"
                    }
                },
                endIcon: {
                    marginRight: -8
                },
                containedSecondary: {
                    backgroundColor: DarkSpacesTheme_colors.secondary.main,
                    color: DarkSpacesTheme_colors.alpha.white[100],
                    border: "1px solid " + DarkSpacesTheme_colors.alpha.black[30]
                },
                outlinedSecondary: {
                    backgroundColor: DarkSpacesTheme_colors.alpha.white[100],
                    "&:hover, &.MuiSelected": {
                        backgroundColor: DarkSpacesTheme_colors.alpha.black[5],
                        color: DarkSpacesTheme_colors.alpha.black[100]
                    }
                },
                sizeSmall: {
                    padding: "6px 16px",
                    lineHeight: 1.5
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false
            },
            styleOverrides: {
                root: {
                    borderRadius: 6
                }
            }
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: DarkSpacesTheme_colors.primary.main,
                    background: DarkSpacesTheme_colors.alpha.white[100],
                    transition: "all .2s",
                    "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                        color: DarkSpacesTheme_themeColors.trueWhite,
                        background: DarkSpacesTheme_colors.primary.main
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    "& .MuiTouchRipple-root": {
                        borderRadius: 8
                    }
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "& .MuiTouchRipple-root": {
                        opacity: 0.3
                    }
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: DarkSpacesTheme_colors.alpha.black[10],
                    border: 0,
                    height: 1
                },
                vertical: {
                    height: "auto",
                    width: 1,
                    "&.MuiDivider-flexItem.MuiDivider-fullWidth": {
                        height: "auto"
                    },
                    "&.MuiDivider-absolute.MuiDivider-fullWidth": {
                        height: "100%"
                    }
                },
                withChildren: {
                    "&:before, &:after": {
                        border: 0
                    }
                },
                wrapper: {
                    background: DarkSpacesTheme_colors.alpha.white[100],
                    fontWeight: "bold",
                    height: 24,
                    lineHeight: "24px",
                    marginTop: -12,
                    color: "inherit",
                    textTransform: "uppercase"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    padding: 0
                },
                elevation0: {
                    boxShadow: "none"
                },
                elevation: {
                    boxShadow: DarkSpacesTheme_colors.shadows.card
                },
                elevation2: {
                    boxShadow: DarkSpacesTheme_colors.shadows.cardSm
                },
                elevation24: {
                    boxShadow: DarkSpacesTheme_colors.shadows.cardLg
                },
                outlined: {
                    boxShadow: DarkSpacesTheme_colors.shadows.card
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    "& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel": {
                        transform: "none"
                    },
                    "& .MuiSlider-valueLabel": {
                        borderRadius: 6,
                        background: DarkSpacesTheme_colors.alpha.black[100],
                        color: DarkSpacesTheme_colors.alpha.white[100]
                    }
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    "& .MuiListItem-button": {
                        transition: "all .2s",
                        "& > .MuiSvgIcon-root": {
                            minWidth: 34
                        },
                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        }
                    },
                    "& .MuiListItem-root.MuiButtonBase-root.Mui-selected": {
                        backgroundColor: DarkSpacesTheme_colors.alpha.black[10]
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root:active": {
                        backgroundColor: (0,material_.alpha)(DarkSpacesTheme_colors.primary.lighter, 0.2)
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root": {
                        opacity: 0.2
                    }
                },
                padding: {
                    padding: "12px",
                    "& .MuiListItem-button": {
                        borderRadius: 6,
                        margin: "1px 0"
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: "visible"
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: "1px solid " + DarkSpacesTheme_colors.primary.dark,
                    boxShadow: "0px 2px 10px " + DarkSpacesTheme_colors.primary.light
                },
                scrollableX: {
                    overflow: "visible !important"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: "color .2s",
                    textTransform: "capitalize",
                    "&.MuiButtonBase-root": {
                        minWidth: "auto",
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: DarkSpacesTheme_colors.alpha.trueWhite[100],
                        zIndex: 5
                    },
                    "&:hover": {
                        color: DarkSpacesTheme_colors.alpha.trueWhite[70]
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12
                },
                list: {
                    padding: 12,
                    "& .MuiMenuItem-root.MuiButtonBase-root": {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: "all .2s",
                        color: DarkSpacesTheme_colors.alpha.black[70],
                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        },
                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: DarkSpacesTheme_colors.alpha.black[100],
                            background: (0,material_.alpha)(DarkSpacesTheme_colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: "transparent",
                    transition: "all .2s",
                    "&:hover, &:active, &.active, &.Mui-selected": {
                        color: DarkSpacesTheme_colors.alpha.black[100],
                        background: (0,material_.alpha)(DarkSpacesTheme_colors.primary.lighter, 0.2)
                    },
                    "&.Mui-selected:hover": {
                        background: (0,material_.alpha)(DarkSpacesTheme_colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&.MuiButtonBase-root": {
                        color: DarkSpacesTheme_colors.secondary.main,
                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: DarkSpacesTheme_colors.alpha.black[100],
                            background: (0,material_.alpha)(DarkSpacesTheme_colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1
                },
                root: {
                    ".MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment": {
                        right: 14
                    }
                },
                clearIndicator: {
                    background: (0,material_.alpha)(DarkSpacesTheme_colors.error.lighter, 0.2),
                    color: DarkSpacesTheme_colors.error.main,
                    marginRight: 8,
                    "&:hover": {
                        background: (0,material_.alpha)(DarkSpacesTheme_colors.error.lighter, 0.3)
                    }
                },
                popupIndicator: {
                    color: DarkSpacesTheme_colors.alpha.black[70],
                    "&:hover": {
                        background: (0,material_.alpha)(DarkSpacesTheme_colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    "& .MuiIconButton-root": {
                        padding: 8
                    }
                },
                select: {
                    "&:focus": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: "0 !important",
                    padding: "0 !important"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: DarkSpacesTheme_colors.alpha.black[5]
                },
                root: {
                    transition: "background-color .2s",
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: (0,material_.alpha)(DarkSpacesTheme_colors.alpha.black[5], 0.05)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: DarkSpacesTheme_colors.alpha.black[10],
                    fontSize: 14
                },
                head: {
                    textTransform: "uppercase",
                    fontSize: 13,
                    fontWeight: "bold",
                    color: DarkSpacesTheme_colors.alpha.black[70]
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: 14
                },
                standardInfo: {
                    color: DarkSpacesTheme_colors.info.main
                },
                action: {
                    color: DarkSpacesTheme_colors.alpha.black[70]
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: "absolute",
                    top: "50%",
                    marginTop: -6,
                    left: -6
                },
                outlined: {
                    backgroundColor: DarkSpacesTheme_colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + DarkSpacesTheme_colors.alpha.white[100]
                },
                outlinedPrimary: {
                    backgroundColor: DarkSpacesTheme_colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + DarkSpacesTheme_colors.alpha.white[100]
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: DarkSpacesTheme_colors.alpha.black[10]
                }
            }
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: "8px 0",
                    "&:before": {
                        display: "none"
                    }
                },
                missingOppositeContent: {
                    "&:before": {
                        display: "none"
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: (0,material_.alpha)(DarkSpacesTheme_colors.alpha.black["100"], 0.95),
                    padding: "8px 16px",
                    fontSize: 13
                },
                arrow: {
                    color: (0,material_.alpha)(DarkSpacesTheme_colors.alpha.black["100"], 0.95)
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: "visible",
                    "& .MuiButtonBase-root": {
                        position: "absolute",
                        padding: 6,
                        transition: "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                    },
                    "& .MuiIconButton-root": {
                        borderRadius: 100
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        opacity: 0.3
                    }
                },
                thumb: {
                    border: "1px solid " + DarkSpacesTheme_colors.alpha.black[30],
                    boxShadow: "0px 9px 14px " + DarkSpacesTheme_colors.alpha.black[10] + ", 0px 2px 2px " + DarkSpacesTheme_colors.alpha.black[10]
                },
                track: {
                    backgroundColor: DarkSpacesTheme_colors.alpha.black[5],
                    border: "1px solid " + DarkSpacesTheme_colors.alpha.black[10],
                    boxShadow: "inset 0px 1px 1px " + DarkSpacesTheme_colors.alpha.black[10],
                    opacity: 1
                },
                colorPrimary: {
                    "& .MuiSwitch-thumb": {
                        backgroundColor: DarkSpacesTheme_colors.alpha.white[100]
                    },
                    "&.Mui-checked .MuiSwitch-thumb": {
                        backgroundColor: DarkSpacesTheme_colors.primary.main
                    }
                }
            }
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: DarkSpacesTheme_colors.alpha.black[5]
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "&.MuiStepIcon-completed": {
                        color: DarkSpacesTheme_colors.success.main
                    }
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: "h1",
                    h2: "h2",
                    h3: "div",
                    h4: "div",
                    h5: "div",
                    h6: "div",
                    subtitle1: "div",
                    subtitle2: "div",
                    body1: "div",
                    body2: "div"
                }
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7
                }
            }
        }
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        h1: {
            fontWeight: 700,
            fontSize: 35
        },
        h2: {
            fontWeight: 700,
            fontSize: 30
        },
        h3: {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 1.4,
            color: DarkSpacesTheme_colors.alpha.black[100]
        },
        h4: {
            fontWeight: 700,
            fontSize: 16
        },
        h5: {
            fontWeight: 700,
            fontSize: 14
        },
        h6: {
            fontSize: 15
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 14
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: 13,
            textTransform: "uppercase",
            color: DarkSpacesTheme_colors.alpha.black[50]
        },
        subtitle1: {
            fontSize: 14,
            color: DarkSpacesTheme_colors.alpha.black[70]
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 15,
            color: DarkSpacesTheme_colors.alpha.black[50]
        },
        overline: {
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase"
        }
    },
    shadows: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
    ]
});

;// CONCATENATED MODULE: ./src/theme/schemes/GreenFieldsTheme.ts


// import i18n from 'src/i18n/i18n';
const GreenFieldsTheme_themeColors = {
    primary: "#44a574",
    secondary: "#a2a8ab",
    success: "#57CA22",
    warning: "#FFA319",
    error: "#FF1943",
    info: "#33C2FF",
    black: "#CBCCD2",
    white: "#232a2e",
    primaryAlt: "#232a2e",
    trueWhite: "#ffffff"
};
const GreenFieldsTheme_colors = {
    gradients: {
        blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
        blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
        blue4: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
        blue5: "linear-gradient(135deg, #97ABFF 10%, #123597 100%)",
        orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
        orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
        orange3: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
        purple3: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
        pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
        green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
        green2: "linear-gradient(to bottom, #00b09b, #96c93d)",
        black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
        black2: "linear-gradient(60deg, #29323c 0%, #485563 100%)"
    },
    shadows: {
        success: "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
        error: "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
        info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
        primary: "0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)",
        warning: "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
        card: "0px 0px 2px #757c82",
        cardSm: "0px 0px 2px #757c82",
        cardLg: "0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)"
    },
    layout: {
        general: {
            bodyBg: "#141c23"
        },
        sidebar: {
            background: GreenFieldsTheme_themeColors.primaryAlt,
            textColor: GreenFieldsTheme_themeColors.secondary,
            dividerBg: "#303e47",
            menuItemColor: "#a1a7ab",
            menuItemColorActive: "#ffffff",
            menuItemBg: GreenFieldsTheme_themeColors.primaryAlt,
            menuItemBgActive: GreenFieldsTheme_themeColors.primary,
            menuItemIconColor: "#4a5d69",
            menuItemIconColorActive: "#ffffff",
            menuItemHeadingColor: (0,material_.darken)(GreenFieldsTheme_themeColors.secondary, 0.3)
        }
    },
    alpha: {
        white: {
            5: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.02),
            10: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.1),
            30: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.3),
            50: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.5),
            70: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.7),
            100: GreenFieldsTheme_themeColors.white
        },
        trueWhite: {
            5: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.02),
            10: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.1),
            30: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.3),
            50: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.5),
            70: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.7),
            100: GreenFieldsTheme_themeColors.trueWhite
        },
        black: {
            5: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.02),
            10: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.1),
            30: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.3),
            50: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.5),
            70: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.7),
            100: GreenFieldsTheme_themeColors.black
        }
    },
    secondary: {
        lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.secondary, 0.85),
        light: (0,material_.alpha)(GreenFieldsTheme_themeColors.secondary, 0.6),
        main: GreenFieldsTheme_themeColors.secondary,
        dark: (0,material_.darken)(GreenFieldsTheme_themeColors.secondary, 0.2)
    },
    primary: {
        lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.primary, 0.85),
        light: (0,material_.alpha)(GreenFieldsTheme_themeColors.primary, 0.3),
        main: GreenFieldsTheme_themeColors.primary,
        dark: (0,material_.darken)(GreenFieldsTheme_themeColors.primary, 0.2)
    },
    success: {
        lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.success, 0.85),
        light: (0,material_.alpha)(GreenFieldsTheme_themeColors.success, 0.3),
        main: GreenFieldsTheme_themeColors.success,
        dark: (0,material_.darken)(GreenFieldsTheme_themeColors.success, 0.2)
    },
    warning: {
        lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.warning, 0.85),
        light: (0,material_.alpha)(GreenFieldsTheme_themeColors.warning, 0.3),
        main: GreenFieldsTheme_themeColors.warning,
        dark: (0,material_.darken)(GreenFieldsTheme_themeColors.warning, 0.2)
    },
    error: {
        lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.error, 0.85),
        light: (0,material_.alpha)(GreenFieldsTheme_themeColors.error, 0.3),
        main: GreenFieldsTheme_themeColors.error,
        dark: (0,material_.darken)(GreenFieldsTheme_themeColors.error, 0.2)
    },
    info: {
        lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.info, 0.85),
        light: (0,material_.alpha)(GreenFieldsTheme_themeColors.info, 0.3),
        main: GreenFieldsTheme_themeColors.info,
        dark: (0,material_.darken)(GreenFieldsTheme_themeColors.info, 0.2)
    }
};
const GreenFieldsTheme = (0,material_.createTheme)({
    // direction: i18n.dir(),
    colors: {
        gradients: {
            blue1: GreenFieldsTheme_colors.gradients.blue1,
            blue2: GreenFieldsTheme_colors.gradients.blue2,
            blue3: GreenFieldsTheme_colors.gradients.blue3,
            blue4: GreenFieldsTheme_colors.gradients.blue4,
            blue5: GreenFieldsTheme_colors.gradients.blue5,
            orange1: GreenFieldsTheme_colors.gradients.orange1,
            orange2: GreenFieldsTheme_colors.gradients.orange2,
            orange3: GreenFieldsTheme_colors.gradients.orange3,
            purple1: GreenFieldsTheme_colors.gradients.purple1,
            purple3: GreenFieldsTheme_colors.gradients.purple3,
            pink1: GreenFieldsTheme_colors.gradients.pink1,
            pink2: GreenFieldsTheme_colors.gradients.pink2,
            green1: GreenFieldsTheme_colors.gradients.green1,
            green2: GreenFieldsTheme_colors.gradients.green2,
            black1: GreenFieldsTheme_colors.gradients.black1,
            black2: GreenFieldsTheme_colors.gradients.black2
        },
        shadows: {
            success: GreenFieldsTheme_colors.shadows.success,
            error: GreenFieldsTheme_colors.shadows.error,
            primary: GreenFieldsTheme_colors.shadows.primary,
            info: GreenFieldsTheme_colors.shadows.info,
            warning: GreenFieldsTheme_colors.shadows.warning
        },
        alpha: {
            white: {
                5: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.02),
                10: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.1),
                30: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.3),
                50: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.5),
                70: (0,material_.alpha)(GreenFieldsTheme_themeColors.white, 0.7),
                100: GreenFieldsTheme_themeColors.white
            },
            trueWhite: {
                5: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.02),
                10: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.1),
                30: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.3),
                50: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.5),
                70: (0,material_.alpha)(GreenFieldsTheme_themeColors.trueWhite, 0.7),
                100: GreenFieldsTheme_themeColors.trueWhite
            },
            black: {
                5: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.02),
                10: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.1),
                30: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.3),
                50: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.5),
                70: (0,material_.alpha)(GreenFieldsTheme_themeColors.black, 0.7),
                100: GreenFieldsTheme_themeColors.black
            }
        },
        secondary: {
            lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.secondary, 0.1),
            light: (0,material_.alpha)(GreenFieldsTheme_themeColors.secondary, 0.3),
            main: GreenFieldsTheme_themeColors.secondary,
            dark: (0,material_.darken)(GreenFieldsTheme_themeColors.secondary, 0.2)
        },
        primary: {
            lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.primary, 0.1),
            light: (0,material_.alpha)(GreenFieldsTheme_themeColors.primary, 0.3),
            main: GreenFieldsTheme_themeColors.primary,
            dark: (0,material_.darken)(GreenFieldsTheme_themeColors.primary, 0.2)
        },
        success: {
            lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.success, 0.1),
            light: (0,material_.alpha)(GreenFieldsTheme_themeColors.success, 0.3),
            main: GreenFieldsTheme_themeColors.success,
            dark: (0,material_.darken)(GreenFieldsTheme_themeColors.success, 0.2)
        },
        warning: {
            lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.warning, 0.1),
            light: (0,material_.alpha)(GreenFieldsTheme_themeColors.warning, 0.3),
            main: GreenFieldsTheme_themeColors.warning,
            dark: (0,material_.darken)(GreenFieldsTheme_themeColors.warning, 0.2)
        },
        error: {
            lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.error, 0.1),
            light: (0,material_.alpha)(GreenFieldsTheme_themeColors.error, 0.3),
            main: GreenFieldsTheme_themeColors.error,
            dark: (0,material_.darken)(GreenFieldsTheme_themeColors.error, 0.2)
        },
        info: {
            lighter: (0,material_.alpha)(GreenFieldsTheme_themeColors.info, 0.1),
            light: (0,material_.alpha)(GreenFieldsTheme_themeColors.info, 0.3),
            main: GreenFieldsTheme_themeColors.info,
            dark: (0,material_.darken)(GreenFieldsTheme_themeColors.info, 0.2)
        }
    },
    general: {
        reactFrameworkColor: "#00D8FF",
        borderRadiusSm: "6px",
        borderRadius: "10px",
        borderRadiusLg: "12px",
        borderRadiusXl: "16px"
    },
    sidebar: {
        background: GreenFieldsTheme_colors.layout.sidebar.background,
        textColor: GreenFieldsTheme_colors.layout.sidebar.textColor,
        dividerBg: GreenFieldsTheme_colors.layout.sidebar.dividerBg,
        menuItemColor: GreenFieldsTheme_colors.layout.sidebar.menuItemColor,
        menuItemColorActive: GreenFieldsTheme_colors.layout.sidebar.menuItemColorActive,
        menuItemBg: GreenFieldsTheme_colors.layout.sidebar.menuItemBg,
        menuItemBgActive: GreenFieldsTheme_colors.layout.sidebar.menuItemBgActive,
        menuItemIconColor: GreenFieldsTheme_colors.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: GreenFieldsTheme_colors.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: GreenFieldsTheme_colors.layout.sidebar.menuItemHeadingColor,
        boxShadow: "1px 0 0 #303e47",
        width: "290px"
    },
    header: {
        height: "80px",
        background: GreenFieldsTheme_themeColors.primaryAlt,
        boxShadow: "0px 1px 0px #303e47",
        textColor: GreenFieldsTheme_colors.secondary.main
    },
    spacing: 9,
    palette: {
        common: {
            black: GreenFieldsTheme_colors.alpha.black[100],
            white: GreenFieldsTheme_colors.alpha.white[100]
        },
        mode: "dark",
        primary: {
            light: GreenFieldsTheme_colors.primary.light,
            main: GreenFieldsTheme_colors.primary.main,
            dark: GreenFieldsTheme_colors.primary.dark
        },
        secondary: {
            light: GreenFieldsTheme_colors.secondary.light,
            main: GreenFieldsTheme_colors.secondary.main,
            dark: GreenFieldsTheme_colors.secondary.dark
        },
        error: {
            light: GreenFieldsTheme_colors.error.light,
            main: GreenFieldsTheme_colors.error.main,
            dark: GreenFieldsTheme_colors.error.dark,
            contrastText: GreenFieldsTheme_themeColors.trueWhite
        },
        success: {
            light: GreenFieldsTheme_colors.success.light,
            main: GreenFieldsTheme_colors.success.main,
            dark: GreenFieldsTheme_colors.success.dark,
            contrastText: GreenFieldsTheme_themeColors.trueWhite
        },
        info: {
            light: GreenFieldsTheme_colors.info.light,
            main: GreenFieldsTheme_colors.info.main,
            dark: GreenFieldsTheme_colors.info.dark,
            contrastText: GreenFieldsTheme_themeColors.trueWhite
        },
        warning: {
            light: GreenFieldsTheme_colors.warning.light,
            main: GreenFieldsTheme_colors.warning.main,
            dark: GreenFieldsTheme_colors.warning.dark,
            contrastText: GreenFieldsTheme_themeColors.trueWhite
        },
        text: {
            primary: GreenFieldsTheme_colors.alpha.black[100],
            secondary: GreenFieldsTheme_colors.alpha.black[70],
            disabled: GreenFieldsTheme_colors.alpha.black[50]
        },
        background: {
            paper: GreenFieldsTheme_colors.alpha.white[100],
            default: GreenFieldsTheme_colors.layout.general.bodyBg
        },
        action: {
            active: GreenFieldsTheme_colors.alpha.black[100],
            hover: GreenFieldsTheme_colors.primary.lighter,
            hoverOpacity: 0.1,
            selected: GreenFieldsTheme_colors.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: GreenFieldsTheme_colors.alpha.black[50],
            disabledBackground: GreenFieldsTheme_colors.alpha.black[5],
            disabledOpacity: 0.38,
            focus: GreenFieldsTheme_colors.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840
        }
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: (0,material_.alpha)((0,material_.darken)("#141c23", 0.5), 0.4),
                    backdropFilter: "blur(2px)",
                    "&.MuiBackdrop-invisible": {
                        backgroundColor: "transparent",
                        backdropFilter: "blur(2px)"
                    }
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: "bold"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: (0,material_.darken)(GreenFieldsTheme_themeColors.primaryAlt, 0.5)
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "html, body": {
                    width: "100%",
                    height: "100%"
                },
                body: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1
                },
                "#__next": {
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column"
                },
                html: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased"
                },
                ".child-popover .MuiPaper-root .MuiList-root": {
                    flexDirection: "column"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    background: GreenFieldsTheme_colors.primary.lighter
                },
                "#nprogress .spinner-icon": {
                    borderTopColor: GreenFieldsTheme_colors.primary.lighter,
                    borderLeftColor: GreenFieldsTheme_colors.primary.lighter
                },
                "#nprogress .peg": {
                    boxShadow: "0 0 15px " + GreenFieldsTheme_colors.primary.lighter + ", 0 0 8px" + GreenFieldsTheme_colors.primary.light
                },
                ":root": {
                    "--swiper-theme-color": GreenFieldsTheme_colors.primary.main,
                    colorScheme: "dark"
                },
                code: {
                    background: GreenFieldsTheme_colors.info.lighter,
                    color: GreenFieldsTheme_colors.alpha.black[100],
                    borderRadius: 4,
                    padding: 4
                },
                "@keyframes pulse": {
                    "0%": {
                        transform: "scale(.75)"
                    },
                    "20%": {
                        transform: "scale(1.1)"
                    },
                    "40%": {
                        transform: "scale(.75)"
                    },
                    "60%": {
                        transform: "scale(1.05)"
                    },
                    "80%": {
                        transform: "scale(.75)"
                    },
                    "100%": {
                        transform: "scale(.75)"
                    }
                },
                "@keyframes ripple": {
                    "0%": {
                        transform: "scale(.8)",
                        opacity: 1
                    },
                    "100%": {
                        transform: "scale(2.8)",
                        opacity: 0
                    }
                },
                "@keyframes float": {
                    "0%": {
                        transform: "translate(0%, 0%)"
                    },
                    "100%": {
                        transform: "translate(3%, 3%)"
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: GreenFieldsTheme_colors.alpha.black[50]
                },
                icon: {
                    top: "calc(50% - 14px)"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined": {
                        paddingRight: 6
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: GreenFieldsTheme_colors.alpha.black[50]
                    },
                    "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: GreenFieldsTheme_colors.primary.main
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: "bold",
                    lineHeight: "40px",
                    fontSize: 13,
                    background: GreenFieldsTheme_colors.alpha.black[5],
                    color: GreenFieldsTheme_colors.alpha.black[70]
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5
                },
                title: {
                    fontSize: 15
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: "50px"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: GreenFieldsTheme_colors.alpha.black[5],
                    color: GreenFieldsTheme_colors.alpha.black[100],
                    "&:hover": {
                        background: GreenFieldsTheme_colors.alpha.black[10]
                    }
                },
                deleteIcon: {
                    color: GreenFieldsTheme_colors.alpha.black[50],
                    "&:hover": {
                        color: GreenFieldsTheme_colors.alpha.black[70]
                    }
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "&.Mui-expanded": {
                        margin: 0
                    },
                    "&::before": {
                        display: "none"
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: "bold"
                },
                colorDefault: {
                    background: GreenFieldsTheme_colors.alpha.black[30],
                    color: GreenFieldsTheme_colors.alpha.trueWhite[100]
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: "center"
                },
                avatar: {
                    background: GreenFieldsTheme_colors.alpha.black[10],
                    fontSize: 13,
                    color: GreenFieldsTheme_colors.alpha.black[70],
                    fontWeight: "bold",
                    "&:first-of-type": {
                        border: 0,
                        background: "transparent"
                    }
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: "bold",
                    transition: "all .2s"
                },
                textPrimary: {
                    "&.Mui-selected": {
                        boxShadow: GreenFieldsTheme_colors.shadows.primary
                    },
                    "&.MuiButtonBase-root:hover": {
                        background: GreenFieldsTheme_colors.alpha.black[5]
                    },
                    "&.Mui-selected.MuiButtonBase-root:hover": {
                        background: GreenFieldsTheme_colors.primary.main
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                    textTransform: "none",
                    paddingLeft: 16,
                    paddingRight: 16,
                    ".MuiSvgIcon-root": {
                        transition: "all .2s"
                    }
                },
                endIcon: {
                    marginRight: -8
                },
                containedSecondary: {
                    backgroundColor: GreenFieldsTheme_colors.secondary.main,
                    color: GreenFieldsTheme_colors.alpha.white[100],
                    border: "1px solid " + GreenFieldsTheme_colors.alpha.black[30]
                },
                outlinedSecondary: {
                    backgroundColor: GreenFieldsTheme_colors.alpha.white[100],
                    "&:hover, &.MuiSelected": {
                        backgroundColor: GreenFieldsTheme_colors.alpha.black[5],
                        color: GreenFieldsTheme_colors.alpha.black[100]
                    }
                },
                sizeSmall: {
                    padding: "6px 16px",
                    lineHeight: 1.5
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false
            },
            styleOverrides: {
                root: {
                    borderRadius: 6
                }
            }
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: GreenFieldsTheme_colors.primary.main,
                    background: GreenFieldsTheme_colors.alpha.white[100],
                    transition: "all .2s",
                    "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                        color: GreenFieldsTheme_themeColors.trueWhite,
                        background: GreenFieldsTheme_colors.primary.main
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    "& .MuiTouchRipple-root": {
                        borderRadius: 8
                    }
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "& .MuiTouchRipple-root": {
                        opacity: 0.3
                    }
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: GreenFieldsTheme_colors.alpha.black[10],
                    border: 0,
                    height: 1
                },
                vertical: {
                    height: "auto",
                    width: 1,
                    "&.MuiDivider-flexItem.MuiDivider-fullWidth": {
                        height: "auto"
                    },
                    "&.MuiDivider-absolute.MuiDivider-fullWidth": {
                        height: "100%"
                    }
                },
                withChildren: {
                    "&:before, &:after": {
                        border: 0
                    }
                },
                wrapper: {
                    background: GreenFieldsTheme_colors.alpha.white[100],
                    fontWeight: "bold",
                    height: 24,
                    lineHeight: "24px",
                    marginTop: -12,
                    color: "inherit",
                    textTransform: "uppercase"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    padding: 0
                },
                elevation0: {
                    boxShadow: "none"
                },
                elevation: {
                    boxShadow: GreenFieldsTheme_colors.shadows.card
                },
                elevation2: {
                    boxShadow: GreenFieldsTheme_colors.shadows.cardSm
                },
                elevation24: {
                    boxShadow: GreenFieldsTheme_colors.shadows.cardLg
                },
                outlined: {
                    boxShadow: GreenFieldsTheme_colors.shadows.card
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    "& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel": {
                        transform: "none"
                    },
                    "& .MuiSlider-valueLabel": {
                        borderRadius: 6,
                        background: GreenFieldsTheme_colors.alpha.black[100],
                        color: GreenFieldsTheme_colors.alpha.white[100]
                    }
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    "& .MuiListItem-button": {
                        transition: "all .2s",
                        "& > .MuiSvgIcon-root": {
                            minWidth: 34
                        },
                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        }
                    },
                    "& .MuiListItem-root.MuiButtonBase-root.Mui-selected": {
                        backgroundColor: GreenFieldsTheme_colors.alpha.black[10]
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root:active": {
                        backgroundColor: (0,material_.alpha)(GreenFieldsTheme_colors.primary.lighter, 0.2)
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root": {
                        opacity: 0.2
                    }
                },
                padding: {
                    padding: "12px",
                    "& .MuiListItem-button": {
                        borderRadius: 6,
                        margin: "1px 0"
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: "visible"
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: "1px solid " + GreenFieldsTheme_colors.primary.dark,
                    boxShadow: "0px 2px 10px " + GreenFieldsTheme_colors.primary.light
                },
                scrollableX: {
                    overflow: "visible !important"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: "color .2s",
                    textTransform: "capitalize",
                    "&.MuiButtonBase-root": {
                        minWidth: "auto",
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: GreenFieldsTheme_colors.alpha.trueWhite[100],
                        zIndex: 5
                    },
                    "&:hover": {
                        color: GreenFieldsTheme_colors.alpha.trueWhite[70]
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12
                },
                list: {
                    padding: 12,
                    "& .MuiMenuItem-root.MuiButtonBase-root": {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: "all .2s",
                        color: GreenFieldsTheme_colors.alpha.black[70],
                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        },
                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: GreenFieldsTheme_colors.alpha.black[100],
                            background: (0,material_.alpha)(GreenFieldsTheme_colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: "transparent",
                    transition: "all .2s",
                    "&:hover, &:active, &.active, &.Mui-selected": {
                        color: GreenFieldsTheme_colors.alpha.black[100],
                        background: (0,material_.alpha)(GreenFieldsTheme_colors.primary.lighter, 0.2)
                    },
                    "&.Mui-selected:hover": {
                        background: (0,material_.alpha)(GreenFieldsTheme_colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&.MuiButtonBase-root": {
                        color: GreenFieldsTheme_colors.secondary.main,
                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: GreenFieldsTheme_colors.alpha.black[100],
                            background: (0,material_.alpha)(GreenFieldsTheme_colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1
                },
                root: {
                    ".MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment": {
                        right: 14
                    }
                },
                clearIndicator: {
                    background: (0,material_.alpha)(GreenFieldsTheme_colors.error.lighter, 0.2),
                    color: GreenFieldsTheme_colors.error.main,
                    marginRight: 8,
                    "&:hover": {
                        background: (0,material_.alpha)(GreenFieldsTheme_colors.error.lighter, 0.3)
                    }
                },
                popupIndicator: {
                    color: GreenFieldsTheme_colors.alpha.black[70],
                    "&:hover": {
                        background: (0,material_.alpha)(GreenFieldsTheme_colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    "& .MuiIconButton-root": {
                        padding: 8
                    }
                },
                select: {
                    "&:focus": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: "0 !important",
                    padding: "0 !important"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: GreenFieldsTheme_colors.alpha.black[5]
                },
                root: {
                    transition: "background-color .2s",
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: (0,material_.alpha)(GreenFieldsTheme_colors.alpha.black[5], 0.05)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: GreenFieldsTheme_colors.alpha.black[10],
                    fontSize: 14
                },
                head: {
                    textTransform: "uppercase",
                    fontSize: 13,
                    fontWeight: "bold",
                    color: GreenFieldsTheme_colors.alpha.black[70]
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: 14
                },
                standardInfo: {
                    color: GreenFieldsTheme_colors.info.main
                },
                action: {
                    color: GreenFieldsTheme_colors.alpha.black[70]
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: "absolute",
                    top: "50%",
                    marginTop: -6,
                    left: -6
                },
                outlined: {
                    backgroundColor: GreenFieldsTheme_colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + GreenFieldsTheme_colors.alpha.white[100]
                },
                outlinedPrimary: {
                    backgroundColor: GreenFieldsTheme_colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + GreenFieldsTheme_colors.alpha.white[100]
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: GreenFieldsTheme_colors.alpha.black[10]
                }
            }
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: "8px 0",
                    "&:before": {
                        display: "none"
                    }
                },
                missingOppositeContent: {
                    "&:before": {
                        display: "none"
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: (0,material_.alpha)(GreenFieldsTheme_colors.alpha.black["100"], 0.95),
                    padding: "8px 16px",
                    fontSize: 13
                },
                arrow: {
                    color: (0,material_.alpha)(GreenFieldsTheme_colors.alpha.black["100"], 0.95)
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: "visible",
                    "& .MuiButtonBase-root": {
                        position: "absolute",
                        padding: 6,
                        transition: "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                    },
                    "& .MuiIconButton-root": {
                        borderRadius: 100
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        opacity: 0.3
                    }
                },
                thumb: {
                    border: "1px solid " + GreenFieldsTheme_colors.alpha.black[30],
                    boxShadow: "0px 9px 14px " + GreenFieldsTheme_colors.alpha.black[10] + ", 0px 2px 2px " + GreenFieldsTheme_colors.alpha.black[10]
                },
                track: {
                    backgroundColor: GreenFieldsTheme_colors.alpha.black[5],
                    border: "1px solid " + GreenFieldsTheme_colors.alpha.black[10],
                    boxShadow: "inset 0px 1px 1px " + GreenFieldsTheme_colors.alpha.black[10],
                    opacity: 1
                },
                colorPrimary: {
                    "& .MuiSwitch-thumb": {
                        backgroundColor: GreenFieldsTheme_colors.alpha.white[100]
                    },
                    "&.Mui-checked .MuiSwitch-thumb": {
                        backgroundColor: GreenFieldsTheme_colors.primary.main
                    }
                }
            }
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: GreenFieldsTheme_colors.alpha.black[5]
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "&.MuiStepIcon-completed": {
                        color: GreenFieldsTheme_colors.success.main
                    }
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: "h1",
                    h2: "h2",
                    h3: "div",
                    h4: "div",
                    h5: "div",
                    h6: "div",
                    subtitle1: "div",
                    subtitle2: "div",
                    body1: "div",
                    body2: "div"
                }
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7
                }
            }
        }
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        h1: {
            fontWeight: 700,
            fontSize: 35
        },
        h2: {
            fontWeight: 700,
            fontSize: 30
        },
        h3: {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 1.4,
            color: GreenFieldsTheme_colors.alpha.black[100]
        },
        h4: {
            fontWeight: 700,
            fontSize: 16
        },
        h5: {
            fontWeight: 700,
            fontSize: 14
        },
        h6: {
            fontSize: 15
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 14
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: 13,
            textTransform: "uppercase",
            color: GreenFieldsTheme_colors.alpha.black[50]
        },
        subtitle1: {
            fontSize: 14,
            color: GreenFieldsTheme_colors.alpha.black[70]
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 15,
            color: GreenFieldsTheme_colors.alpha.black[50]
        },
        overline: {
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase"
        }
    },
    shadows: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
    ]
});

;// CONCATENATED MODULE: ./src/theme/base.ts




function themeCreator(theme) {
    return themeMap[theme];
}
const themeMap = {
    NebulaFighterTheme: NebulaFighterTheme,
    DarkSpacesTheme: DarkSpacesTheme,
    GreenFieldsTheme: GreenFieldsTheme
};

;// CONCATENATED MODULE: ./src/theme/ThemeProvider.tsx




const ThemeContext = /*#__PURE__*/ (0,external_react_.createContext)((_themeName)=>{});
const ThemeProviderWrapper = (props)=>{
    const { 0: themeName1 , 1: _setThemeName  } = (0,external_react_.useState)("NebulaFighterTheme");
    (0,external_react_.useEffect)(()=>{
        const curThemeName = window.localStorage.getItem("appTheme") || "NebulaFighterTheme";
        _setThemeName(curThemeName);
    }, []);
    const theme = themeCreator(themeName1);
    const setThemeName = (themeName)=>{
        window.localStorage.setItem("appTheme", themeName);
        _setThemeName(themeName);
    };
    return(// <StylesProvider injectFirst>
    /*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: setThemeName,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
            theme: theme,
            children: props.children
        })
    }));
};
/* harmony default export */ const ThemeProvider = (ThemeProviderWrapper);

;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(6176);
// EXTERNAL MODULE: ./src/contexts/SidebarContext.tsx
var SidebarContext = __webpack_require__(131);
;// CONCATENATED MODULE: external "@mui/lab/AdapterDateFns"
const AdapterDateFns_namespaceObject = require("@mui/lab/AdapterDateFns");
var AdapterDateFns_default = /*#__PURE__*/__webpack_require__.n(AdapterDateFns_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/LocalizationProvider"
const LocalizationProvider_namespaceObject = require("@mui/lab/LocalizationProvider");
var LocalizationProvider_default = /*#__PURE__*/__webpack_require__.n(LocalizationProvider_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx












const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function TokyoApp(props) {
    const { emotionCache =clientSideEmotionCache  } = props;
    // const getLayout = Component.getLayout ?? ((page) => page);
    router_default().events.on("routeChangeStart", (external_nprogress_default()).start);
    router_default().events.on("routeChangeError", (external_nprogress_default()).done);
    router_default().events.on("routeChangeComplete", (external_nprogress_default()).done);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "SoleAuthenticity"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarContext/* SidebarProvider */.H, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ThemeProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((LocalizationProvider_default()), {
                        dateAdapter: (AdapterDateFns_default()),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {})
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (TokyoApp);


/***/ }),

/***/ 131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SidebarProvider),
/* harmony export */   "l": () => (/* binding */ SidebarContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// eslint-disable-next-line @typescript-eslint/no-redeclare
const SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function SidebarProvider({ children  }) {
    const { 0: sidebarToggle , 1: setSidebarToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleSidebar = ()=>{
        setSidebarToggle(!sidebarToggle);
    };
    const closeSidebar = ()=>{
        setSidebarToggle(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContext.Provider, {
        value: {
            sidebarToggle,
            toggleSidebar,
            closeSidebar
        },
        children: children
    });
}


/***/ }),

/***/ 6176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.ts

function createEmotionCache() {
    return cache_default()({
        key: "css"
    });
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3303));
module.exports = __webpack_exports__;

})();