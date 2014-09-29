
# serialize

  Serialize forms into JSON object

## Installation

    $ component install JayceTDE/serialize

## Dependencies

  - [component/value](https://github.com/component/value)
  - [eivindfjeldstad/dot](https://github.com/eivindfjeldstad/dot)

## API

```html
<form id="form">
    <input type="text" name="username" value="USERNAME" />
    <input type="password" name="password" value="PASSWORD" />
    <input type="text" name="birth.month" value="JANUARY" />
    <input type="text" name="birth.year" value="1980" />
    <input type="hidden" name="multiple" value="a" />
    <input type="hidden" name="multiple" value="b" />
    <input type="hidden" name="multiple" value="c" />
    <input type="submit" />
</form>
```

```javascript
var serialize = require('serialize')
  , form = document.querySelector('#form')
;

serialize(form);
/*
{
  username: "USERNAME",
  password: "PASSWORD",
  birth: {
    month: "JANUARY",
    year: "1980"
  },
  multiple: ['a', 'b', 'c']
}
*/
```

## License

  MIT
