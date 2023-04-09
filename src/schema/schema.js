import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Must enter name")
    .trim()
    .min(2, "name must be at least 2 characters")
    .required(),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large", "Extra Large"])
    .required("Must choose one"),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  topping5: yup.boolean(),
  topping6: yup.boolean(),
  topping7: yup.boolean(),
  special: yup.string().trim(),
});

export default schema;
