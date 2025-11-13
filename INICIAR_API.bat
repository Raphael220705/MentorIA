@echo off
title Mentor IA - Servidor
color 0A

echo ===============================================
echo    🚀 MENTOR IA - INICIANDO SERVIDOR
echo ===============================================
echo.

cd /d "%~dp0\backend"

echo 📁 Diretório atual: %CD%
echo.

echo 🔧 Verificando Python...
python --version
echo.

echo 📦 Instalando dependências...
pip install fastapi uvicorn pydantic
echo.

echo 🚀 Iniciando servidor COMPLETO na porta 8000...
echo 📡 URL: http://localhost:8000
echo 📚 Documentação: http://localhost:8000/docs
echo 🔍 Teste: http://localhost:8000/health
echo 🤖 IA: Google Gemini integrada!
echo.
echo ⚠️  MANTENHA ESTA JANELA ABERTA!
echo 🔄 Para parar: Ctrl+C
echo ===============================================
echo.

python api_completa.py

echo.
echo 🛑 Servidor parado.
pause
