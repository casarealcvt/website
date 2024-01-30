import { defineField, defineType } from "sanity";

export default defineType({
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
    defineField({
      name: "Price",
      title: "Price",
      type: "array",
      options: {
        sortable: false,
      },
      of: [{ type: "option" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Drinks", value: "drinks" },
          { title: "Desserts", value: "desserts" },
          { title: "Appetizers", value: "appetizers" },
          { title: "House Specialties", value: "house_specialties" },
          { title: "Enchiladas", value: "enchiladas" },
          { title: "Tacos", value: "tacos" },
          { title: "Chicken", value: "chicken" },
          { title: "Fajitas", value: "fajitas" },
          { title: "Seafood", value: "seafood" },
          { title: "Kids menu", value: "kids_menu" },
        ],
      },
    }),
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
});
