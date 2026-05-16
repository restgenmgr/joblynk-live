$blogFolder = ".\blogs"
$indexFile = ".\index.html"

# Create blogs folder if missing

if (!(Test-Path $blogFolder)) {
New-Item -ItemType Directory -Path $blogFolder
}

$blogCards = ""

# Read all blog HTML files

Get-ChildItem $blogFolder -Filter *.html | ForEach-Object {

```
$fileName = $_.Name
$title = $_.BaseName.Replace("-", " ")

$blogCards += @"
```

<div class='blog-card'>
    <h3>$title</h3>
    <a href='blogs/$fileName' target='_blank'>Read Article</a>
</div>

"@
}

$html = Get-Content $indexFile -Raw

$startMarker = "<!-- BLOGS_START -->"
$endMarker = "<!-- BLOGS_END -->"

$newBlogSection = @"

<!-- BLOGS_START -->

<section id='blogs'>
    <h2>Blogs & Articles</h2>

```
<div class='blogs-container'>
    $blogCards
</div>
```

</section>
<!-- BLOGS_END -->
"@

$pattern = "(?s)<!-- BLOGS_START -->.*?<!-- BLOGS_END -->"

if ($html -match $pattern) {
$html = [regex]::Replace($html, $pattern, $newBlogSection)
}
else {
$html += "`n$newBlogSection"
}

Set-Content $indexFile $html

Write-Host "Blogs updated successfully!"
