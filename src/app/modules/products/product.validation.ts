import { z } from 'zod';

const createProductZodSchema = z.object({
  body: z.object({
    product_name: z.string().nonempty({
      message: 'Product Name is required',
    }),
    image: z.string().nonempty({
      message: 'Image is required',
    }),
    category: z.string().nonempty({
      message: 'Category is required',
    }),
    status: z.string().optional(),
    rating: z.number().positive().optional(),
    price: z.number().positive(),
    description: z.string().nonempty({
      message: 'Description is required',
    }),
    key_features: z.record(z.union([z.string(), z.number()])).optional(),
    reviews: z
      .array(
        z.object({
          rating: z.number().int().min(1).max(5),
          comment: z.string().nonempty({
            message: 'Comment is required',
          }),
          userName: z.string().nonempty({
            message: 'User name is required',
          }),
        })
      )
      .optional(),
  }),
});
const updateProductZodSchema = z.object({
  body: z.object({
    product_name: z.string().nonempty().optional(),
    image: z.string().nonempty().optional(),
    category: z.string().nonempty().optional(),
    status: z.string().optional(),
    rating: z.number().positive().optional(),
    price: z.number().positive().optional(),
    description: z
      .string()
      .nonempty({
        message: 'Description is required',
      })
      .optional(),
    key_features: z.record(z.union([z.string(), z.number()])).optional(),
    reviews: z
      .object({
        rating: z.number().min(1).max(5),
        comment: z.string().nonempty(),
      })
      .optional(),
  }),
});

export const ProductValidation = {
  createProductZodSchema,
  updateProductZodSchema,
};
