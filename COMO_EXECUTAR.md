# 🚀 Como Executar o Mentor IA

## ⚠️ Problema Identificado
O erro "Não foi possível conectar com o servidor" indica que o backend FastAPI não está rodando na porta 8000.

## 📋 Solução Passo a Passo

### 1️⃣ **Abrir o Terminal/PowerShell**
- Pressione `Windows + R`
- Digite `powershell` e pressione Enter
- OU abra o terminal do VS Code/Cursor

### 2️⃣ **Navegar para o Diretório Backend**
```powershell
cd "C:\Users\User\OneDrive - SENAC-SC\Programa Jovem Programador\MentorIa\backend"
```

### 3️⃣ **Verificar se as Dependências Estão Instaladas**
```powershell
pip install fastapi uvicorn pydantic google-generativeai requests beautifulsoup4 python-multipart
```

### 4️⃣ **Executar a API Simplificada (Recomendado)**
```powershell
python simple_api.py
```

**OU executar a API completa:**
```powershell
python api.py
```

### 5️⃣ **Verificar se a API Está Funcionando**
Você deve ver uma saída como:
```
🚀 Iniciando Mentor IA API...
📡 Servidor rodando em: http://localhost:8000
📚 Documentação: http://localhost:8000/docs
🔄 Para parar: Ctrl+C
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [xxxxx] using StatReload
INFO:     Started server process [xxxxx]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

### 6️⃣ **Testar a API**
Abra outro terminal e execute:
```powershell
Invoke-WebRequest -Uri "http://localhost:8000/health" -Method GET
```

Se retornar `{"status":"healthy","service":"Mentor IA API"}`, a API está funcionando!

### 7️⃣ **Abrir o Frontend**
- Abra o arquivo `index.html` no navegador
- OU execute um servidor local:
```powershell
cd "C:\Users\User\OneDrive - SENAC-SC\Programa Jovem Programador\MentorIa"
python -m http.server 3000
```
E acesse: `http://localhost:3000`

## 🔧 Solução de Problemas

### ❌ **Erro: "python não é reconhecido"**
```powershell
# Verificar se Python está instalado
python --version

# Se não funcionar, tente:
py --version
```

### ❌ **Erro: "Módulo não encontrado"**
```powershell
# Instalar dependências novamente
pip install --upgrade pip
pip install fastapi uvicorn pydantic google-generativeai requests beautifulsoup4 python-multipart
```

### ❌ **Erro: "Porta 8000 já está em uso"**
```powershell
# Verificar processos na porta 8000
netstat -ano | findstr :8000

# Matar processo (substitua PID pelo número encontrado)
taskkill /PID [NUMERO_DO_PID] /F

# OU usar porta diferente
python simple_api.py
# E modificar script.js para usar porta diferente
```

### ❌ **Erro: "API Key inválida"**
- A API simplificada (`simple_api.py`) não precisa de API Key
- Para usar a IA completa, verifique se a API Key está correta em `backend/config/settings.py`

## 🎯 **Versões Disponíveis**

### **API Simplificada** (`simple_api.py`)
- ✅ Funciona sem configuração
- ✅ Respostas de teste
- ✅ Ideal para testar a conexão

### **API Completa** (`api.py`)
- ✅ Integração com Google Gemini
- ✅ Web scraping
- ✅ Respostas inteligentes
- ⚠️ Requer API Key válida

## 📞 **Se Ainda Não Funcionar**

1. **Verifique o Firewall**: Pode estar bloqueando a porta 8000
2. **Antivírus**: Pode estar interferindo
3. **Permissões**: Execute o PowerShell como Administrador
4. **Python**: Certifique-se que está usando Python 3.8+

## 🎉 **Teste Final**

1. API rodando: ✅
2. Frontend aberto: ✅
3. Digite uma mensagem: ✅
4. Veja a resposta aparecer: ✅

**Sucesso!** 🚀
