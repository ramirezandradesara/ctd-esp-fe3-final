import { rest } from "msw";
import comics from "dh-marvel/test/mocks/comics";
import character from "dh-marvel/test/mocks/character";
import comic from "dh-marvel/test/mocks/comic";
import comicsWithOffsetAndLimit from "dh-marvel/test/mocks/comicsWithOffsetAndLimit";
import comicWithoutStock from "dh-marvel/test/mocks/comicWithoutStock";
import checkoutHandler, { validCard } from "../pages/api/checkout";

const validCardResponse = {
  customer: {
    name: "Sara",
    lastname: "Ramírez",
    email: "sararamirezandrade@gmail.com",
    address: {
      address1: "Bulnes 1089",
      address2: "",
      city: "CABA",
      state: "Buenos Aires",
      zipCode: "1176",
    },
  },
  card: {
    number: "42424242 4242 4242",
    cvc: "123",
    expDate: "qwe",
    nameOnCard: "qwe",
  },
  order: {
    name: "Ant-Man (2003) #4",
    image: "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890.jpg",
    price: 72,
  },
};

const handlers = [
  rest.get("/marvel/api/comics", async (req, res, ctx) => {
    const query = req.url.searchParams;
    if (query.get("offset") === "10" && query.get("limit") === "5") {
      return res(ctx.json(comicsWithOffsetAndLimit));
    }
    return res(ctx.json(comics));
  }),
  rest.get("/marvel/api/comics/:id", async (req, res, ctx) => {
    const id = req.params.id;
    if (id === "1") return res(ctx.json({ data: { results: [comic] } }));
    if (id === "10")
      return res(ctx.json({ data: { results: [comicWithoutStock] } }));
    return res(ctx.json({ data: { results: [] } }));
  }),
  rest.get("/marvel/api/characters/:id", async (req, res, ctx) => {
    const id = req.params.id;
    if (id === "1") return res(ctx.json({ data: { results: [character] } }));
    return res(ctx.json({ data: { results: [] } }));
  }),

  rest.post("/api/checkout", async (req, res, ctx) => {
    // const cardNumber = req?.body.card?.number?;
    // if (cardNumber === validCard) {
    //   return res(ctx.json({ ...validCardResponse }));
    // }
    // return res(
    //   ctx.status(500),
    //   ctx.json({ error: "error", message: "Something went wrong" })
    // );
  }),
];

export { handlers };
