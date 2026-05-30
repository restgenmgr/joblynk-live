<<<<<<< HEAD
$blogFolder = ".\blog"
$blogPage = ".\blog.html"

$cards = ""

Get-ChildItem $blogFolder -Filter *.html | Sort-Object Name | ForEach-Object {

```
$fileName = $_.Name
$title = $_.BaseName -replace "-", " "

$cards += @"
```

<div class="blc">
    <div class="blcb">
        <div class="bltag">Career Guide</div>
        <h3>$title</h3>
        <a class="blread" href="blog/$fileName">Read Article →</a>
    </div>
</div>

"@
}

$html = @"

<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JobLynk Blog</title>
<style>
body{font-family:Arial,sans-serif;background:#0a1628;color:white;padding:40px}
h1{text-align:center}
.blg{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin-top:30px}
.blc{background:#162032;border:1px solid #c9a84c33;border-radius:12px}
.blcb{padding:20px}
.bltag{color:#c9a84c;font-size:12px;text-transform:uppercase}
.blread{color:#e8c97a;text-decoration:none}
</style>
</head>
<body>

<h1>JobLynk Blog Articles</h1>

<div class="blg">
$cards
</div>

</body>
</html>
"@

Set-Content $blogPage $html -Encoding UTF8

Write-Host ""
Write-Host "Blog page rebuilt successfully!"
Write-Host "Articles found:" (Get-ChildItem $blogFolder -Filter *.html).Count
=======
>>>>>>> b8ade4d (Auto rebuild blog page)
