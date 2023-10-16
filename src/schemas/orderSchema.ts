import coreJoi from "joi";
import joiDate from "@joi/date";

const joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const orderSchema = joi.object({
  product: joi.string().trim().min(1).required(),
  quantity: joi.number().min(1).required(),
  deliveryDate: joi.date().format("YYYY-MM-DD").required(),
});
