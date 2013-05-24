
# serialize

  Serialize forms into JSON object

## Installation

    $ component install JayceTDE/serialize

## API

```html
<form id="form">
    <input type="text" name="username" value="USERNAME" />
    <input type="password" name="password" value="PASSWORD" />
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
