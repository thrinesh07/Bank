const chatbotBtn = document.getElementById('chatbot-btn');
        const chatbotWindow = document.getElementById('chatbot-window');
        const chatbotBody = document.getElementById('chatbot-body');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');

        chatbotBtn.addEventListener('click', () => {
            chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
        });

        chatbotSend.addEventListener('click', () => {
            const userMessage = chatbotInput.value.trim();
            if (userMessage) {
                const messageElem = document.createElement('p');
                messageElem.textContent = `You: ${userMessage}`;
                chatbotBody.appendChild(messageElem);
                chatbotInput.value = '';

                setTimeout(() => {
                    const botReply = document.createElement('p');
                    botReply.textContent = `Bot: I am here to help!`;
                    chatbotBody.appendChild(botReply);
                }, 500);
            }
        
        
        })
        function showLoginPage() {
            document.getElementById('loginPage').style.display = 'block';
            document.getElementById('signupPage').style.display = 'none';
        }

        function showSignupPage() {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('signupPage').style.display = 'block';
        };