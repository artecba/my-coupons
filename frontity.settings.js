const settings = {
  "name": "my-coupons",
  "state": {
    "frontity": {
      "url": "https://demarket.app",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-coupons-theme",      
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Coupons",
              "/category/coupons"
            ],
            [
              "Gye",
              "/tag/gye/"
            ],
            [
              "Uio",
              "/tag/uio/"
            ],
            [
              "Blog",
              "/blog"
            ],
            [
              "Hola Mundo",
              "/hola-mundo"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://demarket.app"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
