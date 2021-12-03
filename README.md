VerySimpleToolTip
=======

Very simple html tooltip with CSS and Javascript wihout lib.

## Getting Started

Insert toolstips.css and toolstips.js.

demo.html:
```
<html>

<head>
	<script src="src/tooltips.js"></script>
	<link href="src/tooltips.css" rel="stylesheet" />

	<style>
		body {
			padding-top: 150px;
			text-align: center;
		}
	</style>

</head>

<body>

	<a href="https://javlo.org" title="link to javlo website">javlo.org</a>

	<script>
		document.querySelectorAll("a").forEach(function (item) {
			tooltips(item);
		});
	</script>

</body>

</html>
```

### Prerequisites

javascript / css

## Versioning

1.0

## Authors

* **Patrick Vandermaesen** - *Architect main developer*
