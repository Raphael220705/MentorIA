// Configuração da API
const API_BASE_URL = 'http://localhost:8000';

// Elementos DOM
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Função para adicionar mensagem ao chat
function addMessage(content, isUser = false, isLoading = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    if (isLoading) {
        messageDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                ${content}
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Função para rolar para o final das mensagens
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para remover indicador de carregamento
function removeLoadingIndicator() {
    const loadingMessage = chatMessages.querySelector('.typing-indicator');
    if (loadingMessage) {
        loadingMessage.parentElement.remove();
    }
}

// Função para enviar mensagem para a API
async function sendMessage(message) {
    try {
        addMessage('', false, true);
        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });

        removeLoadingIndicator();

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success) {
            addMessage(data.response, false);
        } else {
            throw new Error('Resposta inválida da API');
        }

    } catch (error) {
        removeLoadingIndicator();
        console.error('Erro ao enviar mensagem:', error);
        
        let errorMessage = 'Desculpe, ocorreu um erro ao processar sua mensagem.';
        
        if (error.message.includes('fetch')) {
            errorMessage = 'Não foi possível conectar com o servidor. Verifique se a API está rodando na porta 8000.';
        } else if (error.message.includes('500')) {
            errorMessage = 'Erro interno do servidor. Tente novamente em alguns instantes.';
        } else if (error.message.includes('503')) {
            errorMessage = 'Serviço temporariamente indisponível. Tente novamente mais tarde.';
        } else if (error.message.includes('400')) {
            errorMessage = 'Por favor, digite uma mensagem válida.';
        }
        
        addMessage(errorMessage, false);
    }
}

// Função para processar envio de mensagem
function handleSendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    addMessage(message, true);
    messageInput.value = '';
    sendMessage(message);
}

// Event listeners
sendButton.addEventListener('click', handleSendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
    }
});

// Função para verificar se a API está funcionando
async function checkAPIHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        if (response.ok) console.log('✅ API está funcionando!');
        else console.warn('⚠️ API pode não estar funcionando corretamente');
    } catch (error) {
        console.error('❌ Não foi possível conectar com a API:', error);
        console.log('💡 Certifique-se de que o backend está rodando com: python backend/api.py');
    }
}

// Inicialização ao carregar página
document.addEventListener('DOMContentLoaded', () => {
    checkAPIHealth();
    messageInput.focus();
    scrollToBottom();
    createFontButtons(); // 👈 Cria os botões de fonte
});

// Função para limpar o chat
function clearChat() {
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-content">
                Olá! Sou o Mentor IA, seu assistente especializado em programação. Como posso ajudar você hoje?
            </div>
        </div>
    `;
    scrollToBottom();
}


let currentFontSize = 20; 

// Botões de controle
document.getElementById('increaseFont').addEventListener('click', () => changeFontSize(2));
document.getElementById('decreaseFont').addEventListener('click', () => changeFontSize(-2));

// Função para alterar o tamanho da fonte
function changeFontSize(delta) {
    currentFontSize = Math.min(32, Math.max(12, currentFontSize + delta));
    atualizarTamanhoMensagens();
}

// Função que aplica o tamanho em todas as mensagens existentes
function atualizarTamanhoMensagens() {
    const messages = document.querySelectorAll('.message-content');
    messages.forEach(msg => {
        msg.style.transition = 'font-size 0.3s ease-in-out';
        msg.style.fontSize = `${currentFontSize}px`;
    });
}

//  Observa o chat e aplica o tamanho automático em novas mensagens
const chatContainer = document.querySelector('.chat-messages');
const observer = new MutationObserver(() => atualizarTamanhoMensagens());
observer.observe(chatContainer, { childList: true, subtree: true });

//  Aplica o tamanho inicial ao carregar o site
document.addEventListener('DOMContentLoaded', atualizarTamanhoMensagens);

// Modo escuro
const toggleDarkMode = document.getElementById('toggleDarkMode');

// Aplica modo escuro salvo
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Botão de troca
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark); // Salva preferência
});
