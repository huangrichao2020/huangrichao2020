var path = require('path');
module.exports = {
    entry: __dirname + "/src/index.js",
    //已多次提及的唯一入口文件
    resolve:{
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@app': path.resolve(__dirname, 'src/app')
   },
},
    output: { path: __dirname + "/public",
    //打包后的文件存放的地方 
    filename: "bundle.js",
    //打包后输出文件的文件名
    
   module: {
       rules:[
           {
            test: /\.js$/, 
            exclude: [ 
                path.resolve(__dirname,"/node_modules/")
                ],
            loader: "babel-loader",
            options: {
                presets: ["es2015","@babel/react"]
              },
        }
       ],
   }
    
}
}



