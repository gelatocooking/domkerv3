param(
  [string]$Root = (Get-Location).Path
)

$extensions = @('*.ts','*.tsx','*.js','*.jsx','*.css','*.md','*.json','*.svg','*.html')
$badPatterns = @('?','?','?','?','??','???','???')
$errors = @()

$files = Get-ChildItem -Path $Root -Recurse -File -Include $extensions |
  Where-Object {
    $_.FullName -notlike '*\node_modules\*' -and
    $_.FullName -notlike '*\.next\*' -and
    $_.FullName -notlike '*\.git\*'
  }

foreach ($f in $files) {
  $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
  if ($bytes.Length -ge 3 -and $bytes[0] -eq 239 -and $bytes[1] -eq 187 -and $bytes[2] -eq 191) {
    $errors += "BOM: $($f.FullName)"
  }

  $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.UTF8Encoding]::new($false, $false))
  foreach ($pattern in $badPatterns) {
    if ($content.Contains($pattern)) {
      $errors += "Mojibake '$pattern': $($f.FullName)"
      break
    }
  }
}

if ($errors.Count -gt 0) {
  $errors | ForEach-Object { Write-Error $_ }
  exit 1
}

Write-Host 'Encoding check passed (UTF-8 without BOM, no common mojibake patterns found).'
