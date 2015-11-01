# jQuery Redmine Links

Set two buttons on any HTML page that point to Redmine tracker

## Usage

1. Set jQuery if not exists yet

```html
<script src="jquery.min.js"></script>
```

2. Set `jquery.redmine-links.min.js` after jQuery

```html
<script src="jquery.redmine-links.js"></script>
```

3. Run as

```javascript
$( function () {
    new JqueryRedmineLinks(
        'http://example.com/projects/project-name/issues/new',
        'http://example.com/projects/project-name/issues'
    );
});
```

where `example.com` replace with your redmine domain and `project-name` replace with project name
