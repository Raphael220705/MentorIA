@echo off
echo ===============================================
echo 🚀 INICIANDO MENTOR IA API
echo ===============================================
echo.

cd /d "%~dp0\backend"

echo 📁 Diretório: %CD%
echo.

echo 🔧 Instalando dependências...
pip install fastapi uvicorn pydantic

echo.
echo 🚀 Iniciando servidor...
echo 📡 URL: http://localhost:8000
echo 📚 Docs: http://localhost:8000/docs
echo.

python api_local.py

pause
