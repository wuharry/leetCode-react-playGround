import { createFetchClient } from "axios-impostor";

// 定義回傳資料的型別 (TypeScript 好處)
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// 1. 初始化 Client
const api = createFetchClient({
  baseURL: "https://jsonplaceholder.typicode.com", // 免費的測試 API
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. 設定攔截器 (Interceptors) - 測試是否能攔截請求與回應
api.interceptors.request.use((config) => {
  console.log(
    `\n🚀 [Request Interceptor] 發送請求: ${config.method} ${config.baseURL}${config.url}`,
  );
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(`✅ [Response Interceptor] 收到回應: ${response.status}`);
    return response;
  },
  (error) => {
    console.error("❌ [Response Error]", error);
    return Promise.reject(error);
  },
);

// 3. 執行測試主程式
export const runTest = async () => {
  try {
    // --- 測試 GET ---
    console.log("正在執行 GET 測試...");
    // JSONPlaceholder 的 id 為 1 的待辦事項
    const todo = await api.get<Todo>("/todos/1");
    console.log("📖 GET 結果:", todo);

    // --- 測試 POST ---
    console.log("\n正在執行 POST 測試...");
    const newTodo = await api.post<Todo>("/todos", {
      title: "測試 Axios Impostor",
      completed: false,
      userId: 1,
    });
    console.log("📝 POST 結果:", newTodo);
  } catch (error) {
    console.error("測試失敗:", error);
  }
};
