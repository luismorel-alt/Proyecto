# Script para subir cambios a GitHub desde VS Code
# Guarda este archivo como git-upload.ps1 y ejecútalo en la terminal de PowerShell

param(
    [string]$Mensaje = "Actualización automática desde PowerShell"
)

# Paso 1: Agregar todos los archivos nuevos y modificados
git add .

# Paso 2: Crear el commit con el mensaje que pases como parámetro
git commit -m $Mensaje

# Paso 3: Subir los cambios al repositorio remoto (rama main)
git push origin main

Write-Host "✅ Cambios subidos a GitHub con el mensaje: $Mensaje"