@echo off
chcp 65001 >nul
title Publicador GitHub - Academia DNIZ (Treinamento AVSEC)
cd /d "%~dp0"

echo ============================================================================
echo   NAV BRASIL - PUBLICADOR GITHUB (ACADEMIA DNIZ / TREINAMENTO AVSEC)
echo   abrindo aplicativo de envio...
echo ============================================================================

powershell -NoProfile -ExecutionPolicy Bypass -STA -File "%~dp0publicador_github.ps1"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Alternativa via terminal direto:
    git add index.html styles.css app.js favicon.ico favicon.png favicon.svg
    git commit -m "Atualizacao Treinamento AVSEC SBIZ"
    git branch -M main
    git push -u origin main
    pause
)
