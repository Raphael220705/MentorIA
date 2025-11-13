# Mentor IA - Chatbot de Programação

Um chatbot inteligente que utiliza a API do Google Gemini para responder perguntas sobre programação, integrando web scraping de conteúdo educacional.

## 🚀 Funcionalidades

- **Interface Web Moderna**: Chat interativo com design responsivo
- **IA Avançada**: Integração com Google Gemini AI
- **Web Scraping**: Coleta automática de conteúdo educacional
- **API REST**: Backend FastAPI com documentação automática
- **Tempo Real**: Comunicação instantânea entre frontend e backend

## 🛠️ Tecnologias Utilizadas

### Backend
- **FastAPI**: Framework web moderno e rápido
- **Google Generative AI**: API do Gemini para inteligência artificial
- **BeautifulSoup4**: Web scraping de conteúdo
- **Requests**: Requisições HTTP
- **Uvicorn**: Servidor ASGI

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com animações
- **JavaScript**: Comunicação com API e interface interativa

## 📋 Pré-requisitos

- Python 3.8 ou superior
- Navegador web moderno
- Conexão com internet (para API do Gemini)

## 🚀 Como Executar

### 1. Configurar o Backend

```bash
# Navegar para o diretório backend
cd backend

# Instalar dependências
pip install -r requirements.txt

# Executar a API
python api.py
```

A API estará disponível em: `http://localhost:8000`

### 2. Configurar o Frontend

```bash
# Voltar para o diretório raiz
cd ..

# Abrir o arquivo index.html em um navegador
# Ou usar um servidor local simples:
python -m http.server 3000
```

O frontend estará disponível em: `http://localhost:3000`

### 3. Acessar a Documentação da API

Visite `http://localhost:8000/docs` para ver a documentação interativa da API FastAPI.

## 📁 Estrutura do Projeto

```
MentorIa/
├── backend/
│   ├── api.py                 # API FastAPI principal
│   ├── requirements.txt       # Dependências Python
│   ├── main.py               # Script original (console)
│   ├── config/
│   │   └── settings.py       # Configurações (API Keys)
│   ├── services/
│   │   ├── gemini_service.py # Serviço do Google Gemini
│   │   └── web_scraper.py    # Web scraping
│   ├── utils/
│   │   └── prompt_builder.py # Construção de prompts
│   └── exceptions/
│       └── custom_exceptions.py # Tratamento de erros
├── index.html                # Interface principal
├── script.js                 # JavaScript do frontend
├── styles.css                # Estilos CSS
└── README.md                 # Este arquivo
```

## 🔧 Configuração da API Key

A API Key do Google Gemini já está configurada no arquivo `backend/config/settings.py`. Se necessário, você pode alterá-la:

```python
GEMINI_API_KEY = "sua_api_key_aqui"
```

Para obter uma nova API Key, visite: https://aistudio.google.com/app/apikey

## 🎯 Como Usar

1. **Inicie o Backend**: Execute `python backend/api.py`
2. **Abra o Frontend**: Abra `index.html` no navegador
3. **Digite sua Pergunta**: Use o campo de entrada na parte inferior
4. **Receba a Resposta**: A IA responderá com base no conteúdo educacional

## 🔍 Endpoints da API

- `GET /` - Status da API
- `GET /health` - Verificação de saúde
- `POST /chat` - Envio de mensagens para o chatbot
- `GET /docs` - Documentação interativa (Swagger)

## 🎨 Interface

A interface possui:
- **Design Responsivo**: Funciona em desktop e mobile
- **Animações Suaves**: Transições e efeitos visuais
- **Indicador de Digitação**: Mostra quando a IA está processando
- **Scroll Automático**: Sempre mostra as mensagens mais recentes
- **Tratamento de Erros**: Mensagens amigáveis em caso de problemas

## 🚨 Solução de Problemas

### API não conecta
- Verifique se o backend está rodando na porta 8000
- Confirme que não há firewall bloqueando a conexão

### Erro de API Key
- Verifique se a API Key do Gemini está correta
- Confirme se a API Key tem permissões adequadas

### Erro de Web Scraping
- Verifique a conexão com internet
- Confirme se o site de referência está acessível

## 📝 Licença

Este projeto é para fins educacionais e de demonstração.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novas funcionalidades
- Melhorar a documentação
