param(
  [string]$Root = (Get-Location).Path
)

$extensions = @('*.ts','*.tsx','*.js','*.jsx','*.css','*.md','*.json','*.svg','*.html')
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)

$files = Get-ChildItem -Path $Root -Recurse -File -Include $extensions |
  Where-Object {
    $_.FullName -notlike '*\node_modules\*' -and
    $_.FullName -notlike '*\.next\*' -and
    $_.FullName -notlike '*\.git\*'
  }

foreach ($f in $files) {
  $content = [System.IO.File]::ReadAllText($f.FullName, $utf8NoBom)
  [System.IO.File]::WriteAllText($f.FullName, $content, $utf8NoBom)
}

Write-Host ("Re-encoded {0} files to UTF-8 (no BOM)." -f $files.Count)
