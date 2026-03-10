param(
  [string]$Root = (Get-Location).Path
)

$extensions = @('*.ts','*.tsx','*.js','*.jsx','*.css','*.md','*.json','*.svg','*.html')
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
$mojibakePatterns = @('?','?','?','?','??','???','???')
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

  $content = [System.IO.File]::ReadAllText($f.FullName, $utf8NoBom)

  if ($content -match '[A-Za-z??????????????????0-9]\?[A-Za-z??????????????????0-9]') {
    $errors += "Question-mark replacement: $($f.FullName)"
  }

  foreach ($pattern in $mojibakePatterns) {
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
