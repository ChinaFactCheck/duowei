export default async function handler(req, res) {
  const { text } = req.body;

  const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.QWEN_API_KEY
    },
    body: JSON.stringify({
      model: "qwen-plus",
      messages: [
        {
          role: "user",
          content: text
        }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
