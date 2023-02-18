"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

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

/***/ 8853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_SidebarLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/contexts/SidebarContext.tsx
var SidebarContext = __webpack_require__(131);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/icons-material/TableChartTwoTone"
var TableChartTwoTone_ = __webpack_require__(5090);
var TableChartTwoTone_default = /*#__PURE__*/__webpack_require__.n(TableChartTwoTone_);
;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Sidebar/SidebarMenu/index.tsx






// import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
// import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
// import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';

// import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
// import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
// import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
// import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
// import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
// import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
// import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
// import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
// import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
// import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
// import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
// import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
// import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
// import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
// import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
const MenuWrapper = (0,material_.styled)(material_.Box)(({ theme  })=>`
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);
const SubMenuWrapper = (0,material_.styled)(material_.Box)(({ theme  })=>`
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create([
        "color"
    ])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${(0,material_.alpha)(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
        "transform",
        "opacity"
    ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);
function SidebarMenu() {
    const { closeSidebar  } = (0,external_react_.useContext)(SidebarContext/* SidebarContext */.l);
    const router = (0,router_.useRouter)();
    const currentRoute = router.pathname;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(MenuWrapper, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                component: "div",
                subheader: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListSubheader, {
                    component: "div",
                    disableSticky: true,
                    children: "Management"
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(SubMenuWrapper, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                        component: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/management/transactions",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        className: currentRoute === "/management/transactions" ? "active" : "",
                                        disableRipple: true,
                                        component: "a",
                                        onClick: closeSidebar,
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((TableChartTwoTone_default()), {}),
                                        children: "Orders"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/management/reviews",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        className: currentRoute === "/management/reviews" ? "active" : "",
                                        disableRipple: true,
                                        component: "a",
                                        onClick: closeSidebar,
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((TableChartTwoTone_default()), {}),
                                        children: "Reviews"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/management/requestsellsecondhands",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        className: currentRoute === "/management/requestsellsecondhands" ? "active" : "",
                                        disableRipple: true,
                                        component: "a",
                                        onClick: closeSidebar,
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((TableChartTwoTone_default()), {}),
                                        children: "Requests SecondHand"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/management/shoechecks",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        className: currentRoute === "/management/shoechecks" ? "active" : "",
                                        disableRipple: true,
                                        component: "a",
                                        onClick: closeSidebar,
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((TableChartTwoTone_default()), {}),
                                        children: "Shoes Check"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/management/products",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        className: currentRoute === "/management/products" ? "active" : "",
                                        disableRipple: true,
                                        component: "a",
                                        onClick: closeSidebar,
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((TableChartTwoTone_default()), {}),
                                        children: "Product"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Sidebar_SidebarMenu = (SidebarMenu);

// EXTERNAL MODULE: ./src/components/LogoSign/index.tsx
var LogoSign = __webpack_require__(4757);
;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Sidebar/index.tsx


// import Scrollbar from 'src/components/Scrollbar';




const SidebarWrapper = (0,material_.styled)(material_.Box)(({ theme  })=>`
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);
function Sidebar() {
    const { sidebarToggle , toggleSidebar  } = (0,external_react_.useContext)(SidebarContext/* SidebarContext */.l);
    const closeSidebar = ()=>toggleSidebar()
    ;
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SidebarWrapper, {
                sx: {
                    display: {
                        xs: "none",
                        lg: "inline-block"
                    },
                    position: "fixed",
                    left: 0,
                    top: 0,
                    background: theme.palette.mode === "dark" ? (0,material_.alpha)((0,material_.lighten)(theme.header.background, 0.1), 0.5) : (0,material_.darken)(theme.colors.alpha.black[100], 0.5),
                    boxShadow: theme.palette.mode === "dark" ? theme.sidebar.boxShadow : "none"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        mt: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            mx: 2,
                            sx: {
                                width: 52
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(LogoSign/* default */.Z, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                        sx: {
                            mt: theme.spacing(3),
                            mx: theme.spacing(2),
                            background: theme.colors.alpha.trueWhite[10]
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_SidebarMenu, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                sx: {
                    boxShadow: `${theme.sidebar.boxShadow}`
                },
                anchor: theme.direction === "rtl" ? "right" : "left",
                open: sidebarToggle,
                onClose: closeSidebar,
                variant: "temporary",
                elevation: 9,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SidebarWrapper, {
                    sx: {
                        background: theme.palette.mode === "dark" ? theme.colors.alpha.white[100] : (0,material_.darken)(theme.colors.alpha.black[100], 0.5)
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            mt: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                mx: 2,
                                sx: {
                                    width: 52
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LogoSign/* default */.Z, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                            sx: {
                                mt: theme.spacing(3),
                                mx: theme.spacing(2),
                                background: theme.colors.alpha.trueWhite[10]
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_SidebarMenu, {})
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const SidebarLayout_Sidebar = (Sidebar);

// EXTERNAL MODULE: external "@mui/icons-material/MenuTwoTone"
var MenuTwoTone_ = __webpack_require__(984);
var MenuTwoTone_default = /*#__PURE__*/__webpack_require__.n(MenuTwoTone_);
// EXTERNAL MODULE: external "@mui/icons-material/CloseTwoTone"
var CloseTwoTone_ = __webpack_require__(2916);
var CloseTwoTone_default = /*#__PURE__*/__webpack_require__.n(CloseTwoTone_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/icons-material/SearchTwoTone"
var SearchTwoTone_ = __webpack_require__(831);
var SearchTwoTone_default = /*#__PURE__*/__webpack_require__.n(SearchTwoTone_);
// EXTERNAL MODULE: external "@mui/icons-material/FindInPageTwoTone"
var FindInPageTwoTone_ = __webpack_require__(478);
var FindInPageTwoTone_default = /*#__PURE__*/__webpack_require__.n(FindInPageTwoTone_);
// EXTERNAL MODULE: external "@mui/icons-material/ChevronRightTwoTone"
var ChevronRightTwoTone_ = __webpack_require__(7988);
var ChevronRightTwoTone_default = /*#__PURE__*/__webpack_require__.n(ChevronRightTwoTone_);
;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Header/Buttons/Search/index.tsx







const Transition = /*#__PURE__*/ (0,external_react_.forwardRef)(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Slide, {
        direction: "down",
        ref: ref,
        ...props
    });
});
const DialogWrapper = (0,styles_.styled)(material_.Dialog)(()=>`
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);
const SearchInputWrapper = (0,styles_.styled)(material_.TextField)(({ theme  })=>`
    background: ${theme.colors.alpha.white[100]};

    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(17)};
    }
`
);
const DialogTitleWrapper = (0,styles_.styled)(material_.DialogTitle)(({ theme  })=>`
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(3)}
`
);
function HeaderSearch() {
    const { 0: openSearchResults , 1: setOpenSearchResults  } = (0,external_react_.useState)(false);
    const { 0: searchValue , 1: setSearchValue  } = (0,external_react_.useState)("");
    const handleSearchChange = (event)=>{
        setSearchValue(event.target.value);
        if (event.target.value) {
            if (!openSearchResults) {
                setOpenSearchResults(true);
            }
        } else {
            setOpenSearchResults(false);
        }
    };
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                arrow: true,
                title: "Search",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    color: "primary",
                    onClick: handleClickOpen,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((SearchTwoTone_default()), {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogWrapper, {
                open: open,
                TransitionComponent: Transition,
                keepMounted: true,
                maxWidth: "md",
                fullWidth: true,
                scroll: "paper",
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DialogTitleWrapper, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchInputWrapper, {
                            value: searchValue,
                            autoFocus: true,
                            onChange: handleSearchChange,
                            InputProps: {
                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                    position: "start",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((SearchTwoTone_default()), {})
                                })
                            },
                            placeholder: "Search terms here...",
                            fullWidth: true,
                            label: "Search"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                    openSearchResults && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogContent, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    pt: 0,
                                    pb: 1
                                },
                                display: "flex",
                                justifyContent: "space-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        variant: "body2",
                                        component: "span",
                                        children: [
                                            "Search results for",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                sx: {
                                                    fontWeight: "bold"
                                                },
                                                variant: "body1",
                                                component: "span",
                                                children: searchValue
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                        href: "#",
                                        variant: "body2",
                                        underline: "hover",
                                        children: "Advanced search"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                sx: {
                                    my: 1
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                                disablePadding: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                        button: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemAvatar, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    sx: {
                                                        background: (theme)=>theme.palette.secondary.main
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((FindInPageTwoTone_default()), {})
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                flex: "1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                                            href: "#",
                                                            underline: "hover",
                                                            sx: {
                                                                fontWeight: "bold"
                                                            },
                                                            variant: "body2",
                                                            children: "Dashboard for Healthcare Platform"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        component: "span",
                                                        variant: "body2",
                                                        sx: {
                                                            color: (theme)=>(0,material_.lighten)(theme.palette.secondary.main, 0.5)
                                                        },
                                                        children: "This page contains all the necessary information for managing all hospital staff."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ChevronRightTwoTone_default()), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                        sx: {
                                            my: 1
                                        },
                                        component: "li"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                        button: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemAvatar, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    sx: {
                                                        background: (theme)=>theme.palette.secondary.main
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((FindInPageTwoTone_default()), {})
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                flex: "1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                                            href: "#",
                                                            underline: "hover",
                                                            sx: {
                                                                fontWeight: "bold"
                                                            },
                                                            variant: "body2",
                                                            children: "Example Projects Application"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        component: "span",
                                                        variant: "body2",
                                                        sx: {
                                                            color: (theme)=>(0,material_.lighten)(theme.palette.secondary.main, 0.5)
                                                        },
                                                        children: "This is yet another search result pointing to a app page."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ChevronRightTwoTone_default()), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                        sx: {
                                            my: 1
                                        },
                                        component: "li"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                        button: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemAvatar, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    sx: {
                                                        background: (theme)=>theme.palette.secondary.main
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((FindInPageTwoTone_default()), {})
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                flex: "1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                                            href: "#",
                                                            underline: "hover",
                                                            sx: {
                                                                fontWeight: "bold"
                                                            },
                                                            variant: "body2",
                                                            children: "Search Results Page"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        component: "span",
                                                        variant: "body2",
                                                        sx: {
                                                            color: (theme)=>(0,material_.lighten)(theme.palette.secondary.main, 0.5)
                                                        },
                                                        children: "Choose if you would like to show or not this typography section here..."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ChevronRightTwoTone_default()), {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                sx: {
                                    mt: 1,
                                    mb: 2
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    color: "primary",
                                    children: "View all search results"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Search = (HeaderSearch);

// EXTERNAL MODULE: external "@mui/icons-material/NotificationsActiveTwoTone"
var NotificationsActiveTwoTone_ = __webpack_require__(4428);
var NotificationsActiveTwoTone_default = /*#__PURE__*/__webpack_require__.n(NotificationsActiveTwoTone_);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Header/Buttons/Notifications/index.tsx






const NotificationsBadge = (0,styles_.styled)(material_.Badge)(({ theme  })=>`
    
    .MuiBadge-badge {
        background-color: ${(0,material_.alpha)(theme.palette.error.main, 0.1)};
        color: ${theme.palette.error.main};
        min-width: 16px; 
        height: 16px;
        padding: 0;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px ${(0,material_.alpha)(theme.palette.error.main, 0.3)};
            content: "";
        }
    }
`
);
function HeaderNotifications() {
    const ref = (0,external_react_.useRef)(null);
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                arrow: true,
                title: "Notifications",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    color: "primary",
                    ref: ref,
                    onClick: handleOpen,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(NotificationsBadge, {
                        badgeContent: 1,
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((NotificationsActiveTwoTone_default()), {})
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Popover, {
                anchorEl: ref.current,
                onClose: handleClose,
                open: isOpen,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            p: 2
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h5",
                            children: "Notifications"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                        sx: {
                            p: 0
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                            sx: {
                                p: 2,
                                minWidth: 350,
                                display: {
                                    xs: "block",
                                    sm: "flex"
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                flex: "1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                sx: {
                                                    fontWeight: "bold"
                                                },
                                                children: "Messaging Platform"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                variant: "caption",
                                                sx: {
                                                    textTransform: "none"
                                                },
                                                children: (0,external_date_fns_.formatDistance)((0,external_date_fns_.subDays)(new Date(), 3), new Date(), {
                                                    addSuffix: true
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        component: "span",
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [
                                            " ",
                                            "new messages in your inbox"
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Notifications = (HeaderNotifications);

;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Header/Buttons/index.tsx




function HeaderButtons() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            mr: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Search, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    mx: 0.5
                },
                component: "span",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Notifications, {})
            })
        ]
    });
}
/* harmony default export */ const Buttons = (HeaderButtons);

// EXTERNAL MODULE: external "@mui/icons-material/ExpandMoreTwoTone"
var ExpandMoreTwoTone_ = __webpack_require__(5914);
var ExpandMoreTwoTone_default = /*#__PURE__*/__webpack_require__.n(ExpandMoreTwoTone_);
// EXTERNAL MODULE: external "@mui/icons-material/AccountBoxTwoTone"
var AccountBoxTwoTone_ = __webpack_require__(546);
var AccountBoxTwoTone_default = /*#__PURE__*/__webpack_require__.n(AccountBoxTwoTone_);
// EXTERNAL MODULE: external "@mui/icons-material/LockOpenTwoTone"
var LockOpenTwoTone_ = __webpack_require__(7097);
var LockOpenTwoTone_default = /*#__PURE__*/__webpack_require__.n(LockOpenTwoTone_);
// EXTERNAL MODULE: external "@mui/icons-material/AccountTreeTwoTone"
var AccountTreeTwoTone_ = __webpack_require__(4118);
var AccountTreeTwoTone_default = /*#__PURE__*/__webpack_require__.n(AccountTreeTwoTone_);
;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Header/Userbox/index.tsx









const UserBoxButton = (0,styles_.styled)(material_.Button)(({ theme  })=>`
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);
const MenuUserBox = (0,styles_.styled)(material_.Box)(({ theme  })=>`
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);
const UserBoxText = (0,styles_.styled)(material_.Box)(({ theme  })=>`
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);
const UserBoxLabel = (0,styles_.styled)(material_.Typography)(({ theme  })=>`
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);
const UserBoxDescription = (0,styles_.styled)(material_.Typography)(({ theme  })=>`
        color: ${(0,material_.lighten)(theme.palette.secondary.main, 0.5)}
`
);
function HeaderUserbox() {
    const user = {
        name: "Staff",
        avatar: "/static/images/avatars/Staff.png",
        jobtitle: "SoleAuthenticity Manager"
    };
    const ref = (0,external_react_.useRef)(null);
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserBoxButton, {
                color: "secondary",
                ref: ref,
                onClick: handleOpen,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        variant: "rounded",
                        alt: user.name,
                        src: user.avatar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserBoxText, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UserBoxLabel, {
                                variant: "body1",
                                children: user.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(UserBoxDescription, {
                                variant: "body2",
                                children: user.jobtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((ExpandMoreTwoTone_default()), {
                        sx: {
                            ml: 1
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Popover, {
                anchorEl: ref.current,
                onClose: handleClose,
                open: isOpen,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuUserBox, {
                        sx: {
                            minWidth: 210
                        },
                        display: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                variant: "rounded",
                                alt: user.name,
                                src: user.avatar
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserBoxText, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(UserBoxLabel, {
                                        variant: "body1",
                                        children: user.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(UserBoxDescription, {
                                        variant: "body2",
                                        children: user.jobtitle
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                        sx: {
                            mb: 0
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                        sx: {
                            p: 1
                        },
                        component: "nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/management/profile",
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                    button: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((AccountBoxTwoTone_default()), {
                                            fontSize: "small"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                            primary: "My Profile"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/management/profile/settings",
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                    button: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((AccountTreeTwoTone_default()), {
                                            fontSize: "small"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                            primary: "Account Settings"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            m: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                            color: "primary",
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((LockOpenTwoTone_default()), {
                                    sx: {
                                        mr: 1
                                    }
                                }),
                                "Sign out"
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Userbox = (HeaderUserbox);

;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Header/Menu/index.tsx


const ListWrapper = (0,material_.styled)(material_.Box)(({ theme  })=>`
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create([
        "color",
        "fill"
    ])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);
function HeaderMenu() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ListWrapper, {
            sx: {
                display: {
                    xs: "none",
                    md: "block"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                disablePadding: true,
                component: material_.Box,
                display: "flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    variant: "h3",
                    component: "h3",
                    gutterBottom: true,
                    children: "Welcome to SoleAuthenticity - Staff"
                })
            })
        })
    });
}
/* harmony default export */ const Menu = (HeaderMenu);

;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/Header/index.tsx









const HeaderWrapper = (0,material_.styled)(material_.Box)(({ theme  })=>`
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${(0,material_.alpha)(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);
function Header() {
    const { sidebarToggle , toggleSidebar  } = (0,external_react_.useContext)(SidebarContext/* SidebarContext */.l);
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderWrapper, {
        display: "flex",
        alignItems: "center",
        sx: {
            boxShadow: theme.palette.mode === "dark" ? `0 1px 0 ${(0,material_.alpha)((0,material_.lighten)(theme.colors.primary.main, 0.7), 0.15)}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)` : `0px 2px 8px -3px ${(0,material_.alpha)(theme.colors.alpha.black[100], 0.2)}, 0px 5px 22px -4px ${(0,material_.alpha)(theme.colors.alpha.black[100], 0.1)}`
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                direction: "row",
                divider: /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                    orientation: "vertical",
                    flexItem: true
                }),
                alignItems: "center",
                spacing: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                display: "flex",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Buttons, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Userbox, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        component: "span",
                        sx: {
                            ml: 2,
                            display: {
                                lg: "none",
                                xs: "inline-block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                            arrow: true,
                            title: "Toggle Menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                color: "primary",
                                onClick: toggleSidebar,
                                children: !sidebarToggle ? /*#__PURE__*/ jsx_runtime_.jsx((MenuTwoTone_default()), {
                                    fontSize: "small"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((CloseTwoTone_default()), {
                                    fontSize: "small"
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const SidebarLayout_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/SidebarLayout/index.tsx





const SidebarLayout = ({ children  })=>{
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                flex: 1,
                height: "100%",
                ".MuiPageTitle-wrapper": {
                    background: theme.palette.mode === "dark" ? theme.colors.alpha.trueWhite[5] : theme.colors.alpha.white[50],
                    marginBottom: `${theme.spacing(4)}`,
                    boxShadow: theme.palette.mode === "dark" ? `0 1px 0 ${(0,material_.alpha)((0,material_.lighten)(theme.colors.primary.main, 0.7), 0.15)}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)` : `0px 2px 4px -3px ${(0,material_.alpha)(theme.colors.alpha.black[100], 0.1)}, 0px 5px 12px -4px ${(0,material_.alpha)(theme.colors.alpha.black[100], 0.05)}`
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SidebarLayout_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(SidebarLayout_Sidebar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        position: "relative",
                        zIndex: 5,
                        display: "block",
                        flex: 1,
                        pt: `${theme.header.height}`,
                        [theme.breakpoints.up("lg")]: {
                            ml: `${theme.sidebar.width}`
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        display: "block",
                        children: children
                    })
                })
            ]
        })
    });
};
SidebarLayout.propTypes = {
    children: (external_prop_types_default()).node
};
/* harmony default export */ const layouts_SidebarLayout = (SidebarLayout);


/***/ })

};
;