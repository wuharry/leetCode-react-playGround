# React + TypeScript + Vite

這個模板提供了一個最小化的設置，讓 React 能在 Vite 中運行，並支援 HMR 與一些 ESLint 規則。

目前提供兩個官方插件：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) 使用 [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) 使用 [SWC](https://swc.rs/)

## React 編譯器

由於對開發與建構效能的影響，此模板預設未啟用 React Compiler。若要啟用，請參閱[這份文件](https://react.dev/learn/react-compiler/installation)。

## 擴展 ESLint 設定

若你正在開發正式應用程式，建議更新設定以啟用型別感知的 lint 規則：

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // 其他設定...

      // 移除 tseslint.configs.recommended，改用以下設定
      tseslint.configs.recommendedTypeChecked,
      // 或使用更嚴格的規則
      tseslint.configs.strictTypeChecked,
      // 可選：加入樣式規則
      tseslint.configs.stylisticTypeChecked,

      // 其他設定...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // 其他選項...
    },
  },
])
```

你也可以安裝 [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) 和 [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) 來啟用 React 專屬的 lint 規則：

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // 其他設定...
      // 啟用 React lint 規則
      reactX.configs['recommended-typescript'],
      // 啟用 React DOM lint 規則
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // 其他選項...
    },
  },
])
```
