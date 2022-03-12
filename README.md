# tiNyy

[tiNyy](https://tinyy.ml) is a platform to generate tiny urls of long urls through an api call
or going to [tinyy.ml](https://tinyy.ml)

## Deployment

The site is Live at [tinyy.ml](https://tinyy.ml) ✨

## Tech Stack

**Client:** Vanilla JS, TailwindCSS, DaisyUI

**Server:** Node, Express, MongoDB

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI` : the connection url to the database

## Color Reference

| Color                       | Hex     |
| --------------------------- | ------- |
| Default Color - Sky Blueish | #3abff8 |

## API Reference

#### Get total URLs count

```
  GET /count
```

#### Get original url

```
  GET /:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. tinyy url Id |

#### Post an url

```
  Post /add
```

Use the following key value pair in the body while making an api call.
Make sure you use 'x-www-form-urlencoded' format.

| Key   | Value         | Description                |
| :---- | :------------ | :------------------------- |
| `url` | `a_valid_url` | **Required**. original url |

## Authors

- [@pratikpakhale](https://www.github.com/pratikpakhale)

## Contact

For contact, dm on twitter [@\_pratikpakhale](https://twitter.com/_pratikpakhale) or email me pratikpakhale20@gmail.com

## Acknowledgements

- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [MongoDB](https://www.mongodb.com/)
- [ExpressJS](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/docs/api.html)
- [Netlify Lambda Functions](https://www.netlify.com/products/functions/)
