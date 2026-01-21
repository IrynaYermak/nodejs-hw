import { Segments, Joi } from 'celebrate';
import { TAGS } from '../constants/tags.js';
import { isValidObjectId } from 'mongoose';

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    tag: Joi.string().valid(...TAGS),
    search: Joi.string().trim().allow(''),
    page: Joi.number().integer().min(1),
    perPage: Joi.number().integer().min(5).max(20),
  }),
};
const objectValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid Id format') : value;
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectValidator).required(),
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).trim().required(),
    content: Joi.string().allow(''),
    tag: Joi.string()
      .valid(...TAGS)
      .default('Todo'),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).trim(),
    content: Joi.string().allow(''),
    tag: Joi.string().valid(...TAGS),
  }).min(1),
};
