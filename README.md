# Online shopping app
React + TypeScript + Vite + Zustand + React-query + Tailwind CSS

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## to lounch my app| для запуска приложения

```
npm install 
```
для запуска:
```
npm run dev
```
for a buid version of app | для билд версии приложения:
```
npm run build
```
Cart logic made using Zustand. If you want to add another component with cart logic use| логика корзины сделана с помощью zustand. Если хотите добавить компонент с логикой корзины используйте:
```js
import { useCartStore } from "./useStore"; // depending on the file location
```
**to get cart data | для получения данных из корзины**
```js
const cart = useCartStore((state)=> state.cart);
```
**they are stored in a the format | они хранятся в формате:**
```js
[{ title, description, price, image, id }]
```