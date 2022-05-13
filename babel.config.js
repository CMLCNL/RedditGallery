module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        root: ['./src/'],
        alias: {
          '@src': './src',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@views': './src/views',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
