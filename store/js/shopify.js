/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'anonymous-club-store.myshopify.com',
      storefrontAccessToken: '3742b0860a2c110a26d27f45718c236a',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7314978635936',
        node: document.getElementById('product-component-1648607874670'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Droid Serif, serif",
        "font-weight": "normal"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "13px",
        "padding-right": "13px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "price": {
        "font-family": "Lora, serif"
      },
      "compareAt": {
        "font-family": "Lora, serif"
      },
      "unitPrice": {
        "font-family": "Lora, serif"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "PRE ORDER"
    },
    "googleFonts": [
      "Droid Serif",
      "Lora"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px",
        "padding-left": "13px",
        "padding-right": "13px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#000000"
        },
        "background-color": "#000000",
        ":focus": {
          "background-color": "#000000"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#ffffff"
      },
      "header": {
        "color": "#ffffff"
      },
      "lineItems": {
        "color": "#ffffff"
      },
      "subtotalText": {
        "color": "#ffffff"
      },
      "subtotal": {
        "color": "#ffffff"
      },
      "notice": {
        "color": "#ffffff"
      },
      "currency": {
        "color": "#ffffff"
      },
      "close": {
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        }
      },
      "empty": {
        "color": "#ffffff"
      },
      "noteDescription": {
        "color": "#ffffff"
      },
      "discountText": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "discountAmount": {
        "color": "#ffffff"
      },
      "cart": {
        "background-color": "#000000"
      },
      "footer": {
        "background-color": "#000000"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#ffffff"
      },
      "title": {
        "color": "#ffffff"
      },
      "price": {
        "color": "#ffffff"
      },
      "fullPrice": {
        "color": "#ffffff"
      },
      "discount": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "quantity": {
        "color": "#ffffff"
      },
      "quantityIncrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityDecrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityInput": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/