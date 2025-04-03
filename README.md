# Viberent GitAction Project (React + TypeScript + Vite)

這是一個使用 React, TypeScript, 和 Vite 建置的前端專案範本，整合了 Material UI 元件庫和 React Router 進行頁面路由管理。

## ✨ 主要技術棧

*   **框架:** React 19
*   **語言:** TypeScript 5.x
*   **建置工具:** Vite 6.x
*   **UI 元件庫:** Material UI (MUI) 7.x
*   **路由:** React Router DOM 6.x
*   **套件管理器:** Yarn

## 🚀 在本地端設定與執行

### 1. Clone Repository

```bash
git clone https://github.com/Taguo1109/viberentgitaction.git
cd viberentgitaction
```

### 2. 安裝依賴

本專案使用 Yarn 作為套件管理器。請確保你已安裝 Yarn。

```bash
yarn install
```

### 3. 啟動開發伺服器

執行以下指令啟動 Vite 開發伺服器，通常會在 `http://localhost:5173` (或下一個可用埠號) 開啟：

```bash
yarn dev
```

開發伺服器支援熱模組替換 (HMR)，修改程式碼後會即時更新。

### 4. Linting

檢查程式碼風格和潛在錯誤：

```bash
yarn lint
```

## 🛠️ 建置專案

若要建置生產版本的靜態檔案，請執行：

```bash
yarn build
```

建置後的檔案會輸出到 `dist` 資料夾。

## 部署

此專案已設定透過 **GitHub Actions** 自動部署到 **GitHub Pages**。

*   **觸發條件:** 任何推送到 `main` 分支的 commit 都會觸發自動建置與部署。
*   **部署來源:** GitHub Actions 會建置專案，並將 `dist` 目錄內容部署。 (無需手動執行 `yarn deploy` 或管理 `gh-pages` 分支)。
*   **設定:** GitHub Pages 的部署來源已設為 "GitHub Actions"。相關 workflow 設定檔位於 `.github/workflows/deploy.yml`。

**線上預覽:**

部署成功後，網站可在以下網址訪問 (可能需要幾分鐘生效)：

[https://Taguo1109.github.io/viberentgitaction/](https://Taguo1109.github.io/viberentgitaction/)
