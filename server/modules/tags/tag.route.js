// const { Router  = require('express');

const router = require("express").Router();
const tagController = require("./tag.controller");

router.get("/", (req, res) => {
  res.json({ mess: "we are inside tags router" });
});

router.post("/", (req, res) => {
  res.json({ message: `we are inside post method of tag` });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside put method of tag` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside delete method of tag` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside patch method of tag` });
});
module.exports = router;
