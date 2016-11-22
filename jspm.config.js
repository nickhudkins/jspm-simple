SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "jspm-simple/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "presets": [
      "babel-preset-es2015",
      "babel-preset-react"
    ],
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "jspm-simple": {
      "main": "index.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.18.0",
    "babel-preset-react": "npm:babel-preset-react@6.16.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "less": "github:systemjs/plugin-less@0.1.2",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "react": "npm:react@15.4.0",
    "react-dom": "npm:react-dom@15.4.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "github:systemjs/plugin-less@0.1.2": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.30"
      }
    },
    "npm:core-js@1.2.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:react-dom@15.4.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.6"
      }
    },
    "npm:react@15.4.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.6"
      }
    },
    "npm:fbjs@0.8.6": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:loose-envify@1.3.0": {
      "map": {
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.1",
        "node-fetch": "npm:node-fetch@1.6.3"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.9.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:babel-preset-react@6.16.0": {
      "map": {
        "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.11.0",
        "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.8.0",
        "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.9.0",
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.18.0",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.18.0"
      }
    },
    "npm:babel-preset-es2015@6.18.0": {
      "map": {
        "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
        "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
        "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
        "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0",
        "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
        "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
        "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.19.0",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.18.0",
        "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
        "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.18.0",
        "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.18.0",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.18.0",
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
        "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.19.0",
        "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.16.1",
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.18.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-self@6.11.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-source@6.9.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-flow-strip-types@6.18.0": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.8.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.18.0": {
      "map": {
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.18.0": {
      "map": {
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:babel-plugin-transform-react-display-name@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.18.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.19.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.18.0",
        "regexpu-core": "npm:regexpu-core@2.0.0"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-traverse": "npm:babel-traverse@6.19.0",
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.18.0",
        "babel-traverse": "npm:babel-traverse@6.19.0"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.16.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "private": "npm:private@0.1.6"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
        "babel-traverse": "npm:babel-traverse@6.19.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.19.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "lodash": "npm:lodash@4.17.2",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-helper-regex@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:babel-template@6.16.0": {
      "map": {
        "babel-types": "npm:babel-types@6.19.0",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-traverse": "npm:babel-traverse@6.19.0",
        "lodash": "npm:lodash@4.17.2",
        "babylon": "npm:babylon@6.14.1"
      }
    },
    "npm:babel-runtime@6.18.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.6"
      }
    },
    "npm:babel-helper-replace-supers@6.18.0": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-traverse": "npm:babel-traverse@6.19.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-types@6.19.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "lodash": "npm:lodash@4.17.2",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-helper-function-name@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-traverse": "npm:babel-traverse@6.19.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:babel-helper-define-map@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-helper-get-function-arity@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-helper-hoist-variables@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0"
      }
    },
    "npm:babel-helper-call-delegate@6.18.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.19.0",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0"
      }
    },
    "npm:babel-traverse@6.19.0": {
      "map": {
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "babel-types": "npm:babel-types@6.19.0",
        "lodash": "npm:lodash@4.17.2",
        "invariant": "npm:invariant@2.2.2",
        "babel-code-frame": "npm:babel-code-frame@6.16.0",
        "debug": "npm:debug@2.3.3",
        "babylon": "npm:babylon@6.14.1",
        "globals": "npm:globals@9.14.0"
      }
    },
    "npm:regexpu-core@2.0.0": {
      "map": {
        "regjsparser": "npm:regjsparser@0.1.5",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regenerate": "npm:regenerate@1.3.2"
      }
    },
    "npm:babel-code-frame@6.16.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@2.0.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:debug@2.3.3": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "has-ansi": "npm:has-ansi@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    }
  }
});
