
# serialize

  Serialize forms into JSON object

## Installation

    $ component install JayceTDE/serialize

## API

```html
<form id="form">
    <input type="text" name="username" />
    <input type="password" name="password" />
    <input type="submit" />
</form>
```

```javascript
var serialize = require('serialize')
  , form = document.querySelector('#form')
;

serialize(form); // { username: "USERNAME", password: "PASSWORD" }
```

## License

  MIT
