Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

[System.Windows.Forms.Application]::EnableVisualStyles()

$WorkDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $WorkDir

$RepoUrl = "https://github.com/GERNAVSBIZ/academiadniz.git"
$PagesUrl = "https://gernavsbiz.github.io/academiadniz/"
$SettingsUrl = "https://github.com/GERNAVSBIZ/academiadniz/settings/pages"

# Janela Principal
$form = New-Object System.Windows.Forms.Form
$form.Text = "Publicador GitHub — Academia DNIZ (Treinamento AVSEC)"
$form.Size = New-Object System.Drawing.Size(640, 500)
$form.StartPosition = "CenterScreen"
$form.FormBorderStyle = "FixedDialog"
$form.MaximizeBox = $false
$form.BackColor = [System.Drawing.Color]::FromArgb(244, 247, 251)

# Cabeçalho
$headerPanel = New-Object System.Windows.Forms.Panel
$headerPanel.Dock = "Top"
$headerPanel.Height = 76
$headerPanel.BackColor = [System.Drawing.Color]::FromArgb(11, 37, 69)
$form.Controls.Add($headerPanel)

$titleLabel = New-Object System.Windows.Forms.Label
$titleLabel.Text = "NAV BRASIL • Publicador GitHub (Academia DNIZ)"
$titleLabel.ForeColor = [System.Drawing.Color]::White
$titleLabel.Font = New-Object System.Drawing.Font("Segoe UI", 13, [System.Drawing.FontStyle]::Bold)
$titleLabel.AutoSize = $true
$titleLabel.Location = New-Object System.Drawing.Point(18, 14)
$headerPanel.Controls.Add($titleLabel)

$subLabel = New-Object System.Windows.Forms.Label
$subLabel.Text = "Repositório: github.com/GERNAVSBIZ/academiadniz (Branch: main)"
$subLabel.ForeColor = [System.Drawing.Color]::FromArgb(244, 162, 97)
$subLabel.Font = New-Object System.Drawing.Font("Segoe UI", 9, [System.Drawing.FontStyle]::Regular)
$subLabel.AutoSize = $true
$subLabel.Location = New-Object System.Drawing.Point(20, 44)
$headerPanel.Controls.Add($subLabel)

# Campo de Mensagem do Commit
$lblMsg = New-Object System.Windows.Forms.Label
$lblMsg.Text = "Descrição da atualização (Commit):"
$lblMsg.Font = New-Object System.Drawing.Font("Segoe UI", 9.5, [System.Drawing.FontStyle]::Bold)
$lblMsg.ForeColor = [System.Drawing.Color]::FromArgb(15, 23, 42)
$lblMsg.AutoSize = $true
$lblMsg.Location = New-Object System.Drawing.Point(20, 92)
$form.Controls.Add($lblMsg)

$txtCommit = New-Object System.Windows.Forms.TextBox
$txtCommit.Font = New-Object System.Drawing.Font("Segoe UI", 10)
$txtCommit.Location = New-Object System.Drawing.Point(20, 116)
$txtCommit.Size = New-Object System.Drawing.Size(585, 28)
$txtCommit.Text = "Atualizacao do Treinamento de Familiarizacao AVSEC - NAV Brasil (SBIZ)"
$form.Controls.Add($txtCommit)

# Botão Principal: Enviar para o GitHub
$btnPush = New-Object System.Windows.Forms.Button
$btnPush.Text = "🚀 ENVIAR / ATUALIZAR NO GITHUB AGORA"
$btnPush.Font = New-Object System.Drawing.Font("Segoe UI", 10.5, [System.Drawing.FontStyle]::Bold)
$btnPush.Location = New-Object System.Drawing.Point(20, 156)
$btnPush.Size = New-Object System.Drawing.Size(585, 44)
$btnPush.BackColor = [System.Drawing.Color]::FromArgb(19, 64, 116)
$btnPush.ForeColor = [System.Drawing.Color]::White
$btnPush.FlatStyle = "Flat"
$btnPush.Cursor = [System.Windows.Forms.Cursors]::Hand
$form.Controls.Add($btnPush)

# Área de Log
$lblLog = New-Object System.Windows.Forms.Label
$lblLog.Text = "Status e Log de Envio:"
$lblLog.Font = New-Object System.Drawing.Font("Segoe UI", 9, [System.Drawing.FontStyle]::Bold)
$lblLog.ForeColor = [System.Drawing.Color]::FromArgb(71, 85, 105)
$lblLog.AutoSize = $true
$lblLog.Location = New-Object System.Drawing.Point(20, 212)
$form.Controls.Add($lblLog)

$txtLog = New-Object System.Windows.Forms.TextBox
$txtLog.Multiline = $true
$txtLog.ScrollBars = "Vertical"
$txtLog.ReadOnly = $true
$txtLog.Font = New-Object System.Drawing.Font("Consolas", 9.5)
$txtLog.BackColor = [System.Drawing.Color]::FromArgb(15, 23, 42)
$txtLog.ForeColor = [System.Drawing.Color]::FromArgb(226, 232, 240)
$txtLog.Location = New-Object System.Drawing.Point(20, 234)
$txtLog.Size = New-Object System.Drawing.Size(585, 165)
$form.Controls.Add($txtLog)

# Botões Inferiores de Acesso Rápido
$btnOpenPages = New-Object System.Windows.Forms.Button
$btnOpenPages.Text = "🌐 Abrir Site Publicado (GitHub Pages)"
$btnOpenPages.Font = New-Object System.Drawing.Font("Segoe UI", 9, [System.Drawing.FontStyle]::Bold)
$btnOpenPages.Location = New-Object System.Drawing.Point(20, 412)
$btnOpenPages.Size = New-Object System.Drawing.Size(285, 36)
$btnOpenPages.BackColor = [System.Drawing.Color]::White
$btnOpenPages.ForeColor = [System.Drawing.Color]::FromArgb(19, 64, 116)
$btnOpenPages.FlatStyle = "Flat"
$btnOpenPages.Cursor = [System.Windows.Forms.Cursors]::Hand
$form.Controls.Add($btnOpenPages)

$btnOpenSettings = New-Object System.Windows.Forms.Button
$btnOpenSettings.Text = "⚙️ Configurar Pages no GitHub"
$btnOpenSettings.Font = New-Object System.Drawing.Font("Segoe UI", 9, [System.Drawing.FontStyle]::Regular)
$btnOpenSettings.Location = New-Object System.Drawing.Point(320, 412)
$btnOpenSettings.Size = New-Object System.Drawing.Size(285, 36)
$btnOpenSettings.BackColor = [System.Drawing.Color]::White
$btnOpenSettings.ForeColor = [System.Drawing.Color]::FromArgb(51, 65, 85)
$btnOpenSettings.FlatStyle = "Flat"
$btnOpenSettings.Cursor = [System.Windows.Forms.Cursors]::Hand
$form.Controls.Add($btnOpenSettings)

function Write-Log([string]$msg) {
    $timestamp = (Get-Date).ToString("HH:mm:ss")
    $txtLog.AppendText("[$timestamp] $msg`r`n")
    $txtLog.SelectionStart = $txtLog.Text.Length
    $txtLog.ScrollToCaret()
    [System.Windows.Forms.Application]::DoEvents()
}

Write-Log "Pronto para enviar arquivos da pasta: $WorkDir"
Write-Log "Arquivos monitorados: index.html, styles.css, app.js"

$btnOpenPages.Add_Click({
    Start-Process $PagesUrl
})

$btnOpenSettings.Add_Click({
    Start-Process $SettingsUrl
})

$btnPush.Add_Click({
    $btnPush.Enabled = $false
    $btnPush.Text = "⏳ Enviando para o GitHub... Aguarde"
    $txtLog.Clear()

    try {
        Write-Log "Verificando repositório Git..."
        if (-not (Test-Path (Join-Path $WorkDir ".git"))) {
            Write-Log "Inicializando Git na pasta..."
            git init | Out-String | ForEach-Object { Write-Log $_.Trim() }
        }

        # Garante usuário local caso não exista
        $userName = git config user.name
        if (-not $userName) {
            git config user.name "GERNAVSBIZ"
            git config user.email "gernavsbiz@users.noreply.github.com"
        }

        # Garante branch main e remote origin
        git branch -M main 2>&1 | Out-Null
        $remotes = git remote
        if ($remotes -notcontains "origin") {
            git remote add origin $RepoUrl
            Write-Log "Remoto 'origin' configurado: $RepoUrl"
        } else {
            git remote set-url origin $RepoUrl
        }

        Write-Log "Adicionando arquivos (index.html, styles.css, app.js)..."
        git add index.html styles.css app.js ENVIAR_PARA_GITHUB.bat publicador_github.ps1 2>&1 | Out-String | ForEach-Object {
            if ($_.Trim()) { Write-Log $_.Trim() }
        }

        $commitMsg = $txtCommit.Text.Trim()
        if (-not $commitMsg) {
            $commitMsg = "Atualizacao AVSEC $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
        }

        Write-Log "Criando commit: '$commitMsg'..."
        $commitOut = git commit -m "$commitMsg" 2>&1 | Out-String
        Write-Log $commitOut.Trim()

        Write-Log "Enviando para o GitHub (git push -u origin main)..."
        Write-Log "Caso uma janela de login do GitHub apareça, conclua a autenticação."
        $pushOut = git push -u origin main 2>&1 | Out-String
        Write-Log $pushOut.Trim()

        if ($LASTEXITCODE -eq 0) {
            Write-Log "✅ SUCESSO! Projeto enviado e atualizado no GitHub!"
            Write-Log "🔗 URL do Site: $PagesUrl"
            [System.Windows.Forms.MessageBox]::Show(
                "Arquivos enviados com sucesso para o GitHub!`n`nSite: $PagesUrl`n(A atualização do GitHub Pages leva cerca de 1 a 2 minutos para refletir no ar).",
                "Envio Concluído com Sucesso",
                [System.Windows.Forms.MessageBoxButtons]::OK,
                [System.Windows.Forms.MessageBoxIcon]::Information
            )
        } else {
            Write-Log "⚠️ O comando git push retornou código $LASTEXITCODE. Verifique a mensagem acima."
            [System.Windows.Forms.MessageBox]::Show(
                "Não foi possível concluir o envio automático. Verifique o log na tela ou autentique sua conta do GitHub.",
                "Atenção no Envio",
                [System.Windows.Forms.MessageBoxButtons]::OK,
                [System.Windows.Forms.MessageBoxIcon]::Warning
            )
        }
    } catch {
        Write-Log "❌ Erro: $($_.Exception.Message)"
    } finally {
        $btnPush.Enabled = $true
        $btnPush.Text = "🚀 ENVIAR / ATUALIZAR NO GITHUB AGORA"
    }
})

[void]$form.ShowDialog()
