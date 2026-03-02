param(
  [string]$Root = (Get-Location).Path
)

$extensions = @('*.ts','*.tsx','*.js','*.jsx','*.css','*.md','*.json','*.svg','*.html')
$excludePattern = '\\node_modules\\|\\.next\\|\\.git\\'

$files = Get-ChildItem -Path $Root -Recurse -File -Include $extensions |
  Where-Object { $_.FullName -notmatch $excludePattern }

foreach ($f in $files) {
  $content = Get-Content $f.FullName -Raw
  [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.UTF8Encoding]::new($false))
}

Write-Host ("Re-encoded {0} files to UTF-8 (no BOM)." -f $files.Count)