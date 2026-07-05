$ErrorActionPreference = "Stop"

$version = "2.109.0"
$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$toolsDir = Join-Path $repoRoot "tools\supabase"
$zipPath = Join-Path $env:TEMP "supabase-cli-windows-amd64-$version.zip"
$downloadUrl = "https://github.com/supabase/cli/releases/download/v$version/supabase_$version`_windows_amd64.zip"

New-Item -ItemType Directory -Force -Path $toolsDir | Out-Null

Write-Host "Downloading Supabase CLI v$version..."
Invoke-WebRequest -Uri $downloadUrl -OutFile $zipPath

Write-Host "Installing to $toolsDir..."
Expand-Archive -Path $zipPath -DestinationPath $toolsDir -Force

Write-Host "Supabase CLI installed."
& (Join-Path $toolsDir "supabase.exe") --version
