document.getElementById("apiForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form submission

  const inputText = document.getElementById("inputText").value;
  const responseText = document.getElementById("responseText");

  // Replace with your OpenRouter API key
  const apiKey =
    "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";

  // OpenRouter API endpoint for DeepSeek
  const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

  // Request payload
  const payload = {
    model: "deepseek/deepseek-r1:free", // Specify the DeepSeek model
    messages: [
      {
        role: "user",
        content: inputText,
      },
    ],
  };

  try {
    // Make the API request
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    // Display the response
    if (data.choices && data.choices.length > 0) {
      responseText.textContent = data.choices[0].message.content;
    } else {
      responseText.textContent = "No response from the API.";
    }
  } catch (error) {
    console.error("Error:", error);
    responseText.textContent = "An error occurred. Please try again.";
  }
});
