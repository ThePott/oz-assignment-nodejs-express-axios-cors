axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers.common["Content-Type"] = "text/plain"

const handleSuccess = (response) => {
  return response
}
const handleFailure = (error) => {
  console.error("---- 에러 발생:", error)
  return Promise.reject(error)
}
axios.interceptors.response.use(handleSuccess, handleFailure)

// app.js
document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetchMessage');
  const updateButton = document.getElementById('updateMessage');
  const deleteButton = document.getElementById('deleteMessage');
  const messageDisplay = document.getElementById('messageDisplay');

  // 서버로부터 메시지 가져오기
  fetchButton.addEventListener('click', async () => {
    const response = await axios.get("/")
    messageDisplay.textContent = response.data.message || '메시지가 없습니다';
  });

  // 서버에 메시지 업데이트 요청 보내기
  updateButton.addEventListener('click', async () => {
    const newMessage = prompt('새로운 메시지를 입력하세요:');
    if (newMessage) {
      const response = await axios.put("/", newMessage)
      messageDisplay.textContent = response.data
    }
  });

  // 서버에 메시지 삭제 요청 보내기
  deleteButton.addEventListener('click', async () => {
    const response = await axios.delete("/")
    messageDisplay.textContent = response.data;
  });
});
