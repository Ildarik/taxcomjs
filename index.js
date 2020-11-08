require('dotenv').config()
const fetch = require("node-fetch");

fetch(`${process.env.HOST}/API/v2/Login`, {
  method: "POST",
  headers: {
    "Integrator-ID": process.env.INTERGRATOR_ID,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    login: process.env.LOGIN,
    password: process.env.PASSWORD
  }),
})
  .then((res) => res.json())
  .then((json) =>
    fetch(`${process.env.HOST}/API/v2/AccountList`, {
      headers: {
        "Session-Token": json.sessionToken,
      },
    })
  )
  .then((res) => res.json())
  .then((json) => console.log(json));
