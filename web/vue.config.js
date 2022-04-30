//springboot
const target = 'http://127.0.0.1:7000';


module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      "^/users": {
        target,
        changeOrigin: true
      }

    }
  }
}



// module.exports = {
//   lintOnSave: false,
// }


// node.js테스트
/*
const target = 'http://127.0.0.1:3000';

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      "^/board/notice": {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      },
      "^/user/login2": {
        target,
        changeOrigin: true
      }

    }
  }
}

*/
