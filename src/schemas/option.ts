import { defineField, defineType } from "sanity";

export default defineType({
  name: "option",
  title: "Option",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Price",
      name: "price",
      type: "number",
      description: "Price in cents",
      validation: (Rule) => Rule.required().positive().integer(),
    }),
  ],
  preview: {
    select: { name: "name", price: "price" },
    prepare(selection) {
      const { name, price } = selection;
      return {
        title: name,
        subtitle: `\$ ${(price / 100).toFixed(2)}`,
      };
    },
  },
});
